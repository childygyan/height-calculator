#!/usr/bin/env python3
"""Push the staged working tree to GitHub via the Git Data API, robustly.

Strategy (fixes two failure modes seen 2026-10-09 on height-calculator):
1. Changed-files-only blob handling: instead of gh_datapush.py's 3239-file
   GET burst (12 workers) that trips GitHub's secondary rate limit (403),
   we upload/check only files in `git diff --cached` (the staged set the
   cron already prepared with `git add -A`), sequentially with backoff.
2. Hierarchical tree building (one tree per directory, bottom-up, like
   gh_datapush.py): instead of one giant ~10MB flat-tree POST that breaks
   mid-upload (IncompleteRead / SSL EOF), every tree POST stays small.

The new tree is built from the remote base tree (fetched recursively) with
the staged changes applied, so unchanged files keep their exact SHAs/modes.
Deletions and renames are handled via the staged diff.

Usage (run from the repo root):
    push-changed-only.py "<commit message>"

Auth: uses the `custom.github` connector credential via the dynamic
credential surrogate helper. Never prints or persists the raw token.
"""

from __future__ import annotations

import base64
import hashlib
import json
import posixpath
import subprocess
import sys
import time
import urllib.error
import urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import (  # noqa: E402
    add_surrogate_to_request,
    read_json_response,
)

API = "https://api.github.com"
ALLOWED = ["api.github.com"]
REPO = "childygyan/height-calculator"
BRANCH = "master"
RETRYABLE = (403, 429, 502, 503)


def api_request(method: str, path: str, payload: dict | None = None,
                retries: int = 6):
    body = None
    headers = {}
    if payload is not None:
        body = json.dumps(payload).encode("utf-8")
        headers = {"Content-Type": "application/json"}
    last: Exception | None = None
    for attempt in range(retries):
        req = urllib.request.Request(API + path, data=body, method=method,
                                     headers=headers)
        add_surrogate_to_request(req, "custom.github", allowed_hosts=ALLOWED)
        try:
            return read_json_response(
                urllib.request.urlopen(req, timeout=90))
        except urllib.error.HTTPError as e:
            if e.code in RETRYABLE and attempt < retries - 1:
                wait = 20 * (attempt + 1)
                print(f"  HTTP {e.code} on {method} {path}; "
                      f"retry in {wait}s", flush=True)
                time.sleep(wait)
                continue
            raise
        except (urllib.error.URLError, ConnectionError,
                TimeoutError) as e:
            last = e
            if attempt < retries - 1:
                wait = 20 * (attempt + 1)
                print(f"  network error on {method} {path} ({e}); "
                      f"retry in {wait}s", flush=True)
                time.sleep(wait)
                continue
            raise
    raise last  # pragma: no cover


def git_blob_sha(data: bytes) -> str:
    h = hashlib.sha1()
    h.update(f"blob {len(data)}\0".encode("ascii"))
    h.update(data)
    return h.hexdigest()


def ensure_blob(repo: str, data: bytes) -> str:
    sha = git_blob_sha(data)
    req = urllib.request.Request(
        f"{API}/repos/{repo}/git/blobs/{sha}", method="GET")
    add_surrogate_to_request(req, "custom.github", allowed_hosts=ALLOWED)
    try:
        urllib.request.urlopen(req, timeout=30).read()
        return sha
    except urllib.error.HTTPError as e:
        if e.code not in (404, 409):
            raise
    result = api_request("POST", f"/repos/{repo}/git/blobs",
                         {"content": base64.b64encode(data).decode("ascii"),
                          "encoding": "base64"})
    assert result["sha"] == sha, "sha mismatch"
    return sha


def main() -> int:
    message = sys.argv[1] if len(sys.argv) > 1 else "Update scheduled articles"

    # Staged changes (cron runs `git add -A` first) + their index modes.
    ls = subprocess.run(["git", "ls-files", "-s", "-z"], capture_output=True,
                        check=True).stdout.decode("utf-8")
    index_mode = {}
    for entry in ls.split("\0"):
        if not entry:
            continue
        info, path = entry.split("\t")
        mode = info.split(" ")[0]
        index_mode[path] = mode
    diff = subprocess.run(["git", "diff", "--cached", "--name-only", "-z"],
                          capture_output=True, check=True
                          ).stdout.decode("utf-8")
    changed = [p for p in diff.split("\0") if p]
    if not changed:
        print("no staged changes; nothing to push")
        return 0
    print(f"changed files: {len(changed)}", flush=True)

    ref = api_request("GET", f"/repos/{REPO}/git/ref/heads/{BRANCH}")
    base_sha = ref["object"]["sha"]
    print(f"base: {base_sha[:8]}", flush=True)
    commit0 = api_request("GET", f"/repos/{REPO}/git/commits/{base_sha}")
    base_tree = commit0["tree"]["sha"]

    # Full remote tree, then apply staged changes onto it.
    tree_data = api_request(
        "GET", f"/repos/{REPO}/git/trees/{base_tree}?recursive=1")
    entries: dict[str, tuple[str, str]] = {}  # path -> (mode, blob sha)
    for t in tree_data["tree"]:
        if t["type"] == "blob":
            entries[t["path"]] = (t["mode"], t["sha"])
    print(f"base tree blobs: {len(entries)}", flush=True)

    import os
    n_new = 0
    for i, path in enumerate(changed):
        full = os.path.join(os.getcwd(), path)
        if not os.path.exists(full):
            entries.pop(path, None)
            print(f"  [{i+1}/{len(changed)}] deleted: {path}", flush=True)
            continue
        with open(full, "rb") as fh:
            data = fh.read()
        sha = ensure_blob(REPO, data)
        entries[path] = (index_mode.get(path, "100644"), sha)
        n_new += 1
        if (i + 1) % 40 == 0:
            print(f"  [{i+1}/{len(changed)}] blobs ok", flush=True)
    print(f"blobs ready ({n_new} ensured)", flush=True)

    # Hierarchical trees, bottom-up: one small POST per directory.
    files_by_dir: dict[str, list[tuple[str, str, str]]] = {}
    for p, (mode, sha) in entries.items():
        d = posixpath.dirname(p)
        files_by_dir.setdefault(d, []).append(
            (posixpath.basename(p), mode, sha))
    all_dirs = set(files_by_dir)
    for d in list(all_dirs):
        dd = d
        while dd:
            dd = posixpath.dirname(dd)
            all_dirs.add(dd)
    children: dict[str, list[str]] = {}
    for d in all_dirs:
        if d:
            children.setdefault(posixpath.dirname(d), []).append(
                posixpath.basename(d))
    dir_sha: dict[str, str] = {}
    for d in sorted(all_dirs, key=lambda x: (x != "", x.count("/")),
                    reverse=True):
        tree_entries = [
            {"path": name, "mode": mode, "type": "blob", "sha": sha}
            for name, mode, sha in sorted(files_by_dir.get(d, []))
        ]
        for sub in sorted(children.get(d, [])):
            subdir = f"{d}/{sub}" if d else sub
            tree_entries.append({"path": sub, "mode": "040000",
                                 "type": "tree", "sha": dir_sha[subdir]})
        result = api_request("POST", f"/repos/{REPO}/git/trees",
                             {"tree": tree_entries})
        dir_sha[d] = result["sha"]
    root_sha = dir_sha[""]
    print(f"root tree: {root_sha[:8]} ({len(all_dirs)} dirs)", flush=True)

    commit = api_request("POST", f"/repos/{REPO}/git/commits",
                         {"message": message, "tree": root_sha,
                          "parents": [base_sha]})
    print(f"commit: {commit['sha'][:8]}", flush=True)
    api_request("PATCH", f"/repos/{REPO}/git/refs/heads/{BRANCH}",
                {"sha": commit["sha"]})
    print("PUSH OK", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
