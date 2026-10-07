#!/usr/bin/env python3
"""Push only changed files to GitHub via Git Data API (avoids 3238 blob checks)."""
import sys
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
sys.path.insert(0, "/home/hatch/workspace/skills/github/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response
import urllib.request, urllib.error, json, subprocess, base64, hashlib, time

API = "https://api.github.com"
ALLOWED = ["api.github.com"]
REPO = "childygyan/height-calculator"
BRANCH = "master"

def api(method, path, payload=None):
    body = None
    headers = {}
    if payload is not None:
        body = json.dumps(payload).encode()
        headers = {"Content-Type": "application/json"}
    req = urllib.request.Request(API + path, data=body, method=method, headers=headers)
    add_surrogate_to_request(req, "custom.github", allowed_hosts=ALLOWED)
    # Retry on rate limit with backoff
    for attempt in range(5):
        try:
            return read_json_response(urllib.request.urlopen(req, timeout=60))
        except urllib.error.HTTPError as e:
            if e.code in (403, 429) and attempt < 4:
                wait = 60 * (attempt + 1)
                print(f"Rate limited, waiting {wait}s...", flush=True)
                time.sleep(wait)
                continue
            raise

def blob_sha(data: bytes) -> str:
    h = hashlib.sha1()
    h.update(f"blob {len(data)}\0".encode())
    h.update(data)
    return h.hexdigest()

# Get changed files
result = subprocess.run(["git", "diff", "--cached", "--name-only"],
                       capture_output=True, text=True, cwd="/home/hatch/workspace/height-calculator")
files = [f for f in result.stdout.strip().split("\n") if f]
print(f"Changed files: {len(files)}", flush=True)

# Get current ref
ref = api("GET", f"/repos/{REPO}/git/ref/heads/{BRANCH}")
base_sha = ref["object"]["sha"]
print(f"Base: {base_sha[:8]}", flush=True)

# Get base tree
commit = api("GET", f"/repos/{REPO}/git/commits/{base_sha}")
base_tree = commit["tree"]["sha"]

# Create blobs for changed files (with rate limit handling)
blobs = {}
for i, f in enumerate(files):
    path = f"/home/hatch/workspace/height-calculator/{f}"
    try:
        with open(path, "rb") as fh:
            data = fh.read()
    except FileNotFoundError:
        print(f"  Deleted: {f} (skipping - not supported)")
        continue
    sha = blob_sha(data)
    # Check if exists (single request, with retry)
    try:
        req = urllib.request.Request(f"{API}/repos/{REPO}/git/blobs/{sha}", method="GET")
        add_surrogate_to_request(req, "custom.github", allowed_hosts=ALLOWED)
        urllib.request.urlopen(req, timeout=30).read()
        print(f"  [{i+1}/{len(files)}] exists: {f}", flush=True)
    except urllib.error.HTTPError as e:
        if e.code in (404, 409):
            # Create blob
            result = api("POST", f"/repos/{REPO}/git/blobs",
                        {"content": base64.b64encode(data).decode(), "encoding": "base64"})
            print(f"  [{i+1}/{len(files)}] created: {f}", flush=True)
        else:
            raise
    blobs[f] = sha
    time.sleep(0.5)  # Be gentle with rate limits

print(f"Blobs ready: {len(blobs)}", flush=True)

# Build tree - need full tree structure
# Get the full current tree recursively
tree_data = api("GET", f"/repos/{REPO}/git/trees/{base_tree}?recursive=1")
entries = {t["path"]: t for t in tree_data["tree"] if t["type"] == "blob"}

# Update with our blobs
for f, sha in blobs.items():
    entries[f] = {"path": f, "mode": "100644", "type": "blob", "sha": sha}

# Create new tree (GitHub API handles nested paths in a flat tree)
tree_entries = [{"path": p, "mode": "100644", "type": "blob", "sha": t["sha"]}
                for p, t in entries.items()]
print(f"Creating tree with {len(tree_entries)} entries...", flush=True)
new_tree = api("POST", f"/repos/{REPO}/git/trees", {"tree": tree_entries, "base_tree": base_tree})
print(f"Tree: {new_tree['sha'][:8]}", flush=True)

# Create commit
msg = sys.argv[1] if len(sys.argv) > 1 else "Update scheduled articles"
commit = api("POST", f"/repos/{REPO}/git/commits",
            {"message": msg, "tree": new_tree["sha"], "parents": [base_sha]})
print(f"Commit: {commit['sha'][:8]}", flush=True)

# Update ref
api("PATCH", f"/repos/{REPO}/git/refs/heads/{BRANCH}", {"sha": commit["sha"]})
print("PUSH OK", flush=True)
