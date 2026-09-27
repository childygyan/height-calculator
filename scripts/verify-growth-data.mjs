#!/usr/bin/env node
/**
 * Verification for the growth-reference data + LMS engine (Phase 3a).
 *
 * Phase 1 - row integrity: every JSON in src/data/growth/ must have finite
 *           L/M/S, M > 0, S > 0, strictly ascending ages, and an ageRange that
 *           matches the first/last row.
 * Phase 2 - engine spot checks: P50 computed from the LMS inverse at z=0 must
 *           equal the tabulated M (tolerance 0.05 cm), and P3 < P50 < P97 must
 *           hold strictly at sampled ages.
 * Phase 3 - published checkpoints: 3+ checkpoints per table taken from the
 *           source publications (CDC P-columns; RCPCH-published WHO2006 LMS
 *           rows; WHO length->height 0.7 cm transition). Engine-recomputed
 *           values must agree within 0.5 cm.
 *
 * The LMS/normal math below is a minimal, dependency-free mirror of
 * src/lib/growth/percentile.ts (kept inline so this script runs with plain
 * node and zero dependencies).
 *
 * Exit 0 on success, 1 with a clear message on any failure.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = join(ROOT, "src", "data", "growth");

const failures = [];
function fail(msg) {
  failures.push(msg);
  console.error("FAIL: " + msg);
}
function ok(msg) {
  console.log("ok: " + msg);
}

// ---------- minimal LMS + normal math (mirror of src/lib/growth/percentile.ts) ----------
function lmsZ(L, M, S, x) {
  if (Math.abs(L) < 1e-10) return Math.log(x / M) / S;
  return (Math.pow(x / M, L) - 1) / (L * S);
}
function lmsInverse(L, M, S, z) {
  if (Math.abs(L) < 1e-10) return M * Math.exp(S * z);
  const base = 1 + L * S * z;
  if (!(base > 0)) return NaN;
  return M * Math.pow(base, 1 / L);
}
function erf(x) {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t +
      0.254829592) *
      t *
      Math.exp(-ax * ax));
  return sign * y;
}
const normalCdf = (z) => 0.5 * (1 + erf(z / Math.SQRT2));
// Exact z-scores for the published percentile columns (CDC data-files page).
const Z = {
  3: -1.880793608034497,
  50: 0,
  95: 1.6448536269514722,
  97: 1.880793608034497,
};

// ---------- load ----------
const EXPECTED = [
  "cdc-stature-boys.json",
  "cdc-stature-girls.json",
  "who-length-boys.json",
  "who-length-girls.json",
  "who-height-boys.json",
  "who-height-girls.json",
];
const tables = {};
for (const name of EXPECTED) {
  try {
    tables[name] = JSON.parse(readFileSync(join(DATA_DIR, name), "utf8"));
  } catch (e) {
    fail(`cannot load ${name}: ${e.message}`);
  }
}
if (failures.length) process.exit(1);

// ---------- Phase 1: integrity ----------
for (const [name, t] of Object.entries(tables)) {
  const rows = t.rows;
  if (!Array.isArray(rows) || rows.length === 0) {
    fail(`${name}: no rows`);
    continue;
  }
  if (!["months", "days"].includes(t.ageUnit)) fail(`${name}: bad ageUnit ${t.ageUnit}`);
  let prevAge = -Infinity;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    for (const k of ["age", "L", "M", "S"]) {
      if (typeof r[k] !== "number" || !Number.isFinite(r[k])) {
        fail(`${name} row ${i}: ${k} is not a finite number`);
      }
    }
    if (!(r.M > 0)) fail(`${name} row ${i}: M must be > 0, got ${r.M}`);
    if (!(r.S > 0)) fail(`${name} row ${i}: S must be > 0, got ${r.S}`);
    if (!(r.age > prevAge)) fail(`${name} row ${i}: ages not strictly ascending (${prevAge} -> ${r.age})`);
    prevAge = r.age;
  }
  const [lo, hi] = t.ageRange;
  if (rows[0].age !== lo || rows[rows.length - 1].age !== hi) {
    fail(`${name}: ageRange [${lo}, ${hi}] does not match rows [${rows[0].age}, ${rows[rows.length - 1].age}]`);
  }
  if (!t.source || !t.sourceUrl || !t.retrievalDate) {
    fail(`${name}: missing provenance (source/sourceUrl/retrievalDate)`);
  }
  ok(`${name}: ${rows.length} rows, integrity clean, age ${lo}..${hi} ${t.ageUnit}`);
}

// ---------- Phase 2: P50 ~= M and P3 < P50 < P97 ----------
function sampleAges(t, n) {
  const rows = t.rows;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(rows[Math.floor((i * (rows.length - 1)) / (n - 1))]);
  }
  return out;
}
for (const [name, t] of Object.entries(tables)) {
  for (const r of sampleAges(t, 12)) {
    const p50 = lmsInverse(r.L, r.M, r.S, 0);
    if (!Number.isFinite(p50) || Math.abs(p50 - r.M) > 0.05) {
      fail(`${name} age ${r.age}: P50 ${p50} != M ${r.M} (tol 0.05 cm)`);
    }
    const p3 = lmsInverse(r.L, r.M, r.S, Z[3]);
    const p97 = lmsInverse(r.L, r.M, r.S, Z[97]);
    if (!(p3 < p50 && p50 < p97)) {
      fail(`${name} age ${r.age}: not monotonic (P3=${p3}, P50=${p50}, P97=${p97})`);
    }
  }
  ok(`${name}: P50==M and P3<P50<P97 at 12 sampled ages`);
}

// ---------- Phase 3: published checkpoints (tolerance 0.5 cm) ----------
// CDC checkpoints: selected smoothed percentiles from the published
// stature-for-age CSV (the publication itself).
function cdcCheck(name, ageMonths, pct, expectedCm) {
  const t = tables[name];
  const r = t.rows.find((x) => x.age === ageMonths);
  if (!r) return fail(`${name}: no row at age ${ageMonths} for checkpoint`);
  const got = lmsInverse(r.L, r.M, r.S, Z[pct]);
  const dev = Math.abs(got - expectedCm);
  if (!(dev <= 0.5)) {
    fail(`${name} ${ageMonths}mo P${pct}: engine ${got.toFixed(4)} vs published ${expectedCm} (dev ${dev.toFixed(4)} cm)`);
  } else {
    ok(`${name} ${ageMonths}mo P${pct}: engine ${got.toFixed(2)} vs published ${expectedCm} (dev ${dev.toFixed(4)} cm)`);
  }
}
cdcCheck("cdc-stature-boys.json", 36.5, 50, 95.27359106);
cdcCheck("cdc-stature-boys.json", 36.5, 95, 101.9323762);
cdcCheck("cdc-stature-boys.json", 120.5, 3, 126.6677753);
cdcCheck("cdc-stature-boys.json", 240.0, 97, 190.1943135);
cdcCheck("cdc-stature-girls.json", 120.5, 50, 138.2111552);
cdcCheck("cdc-stature-girls.json", 120.5, 95, 149.6043767);
cdcCheck("cdc-stature-girls.json", 60.5, 3, 99.35047319);
cdcCheck("cdc-stature-girls.json", 180.5, 97, 174.1505102);

// WHO checkpoints: independent official source — the WHO2006 LMS rows
// published by RCPCH (rcpch/growth-references, uk-who/UK_WHO_0_20_preterm.csv,
// Chart=WHO2006), which RCPCH documents as "exactly the same data as the LMS
// tables accessed from the WHO website".
function whoCheck(name, ageDays, expectedM, label) {
  const t = tables[name];
  const r = t.rows.find((x) => x.age === ageDays);
  if (!r) return fail(`${name}: no row at day ${ageDays} for checkpoint`);
  const got = lmsInverse(r.L, r.M, r.S, 0);
  const dev = Math.abs(got - expectedM);
  if (!(dev <= 0.5)) {
    fail(`${name} day ${ageDays} (${label}): engine M ${got.toFixed(4)} vs published ${expectedM} (dev ${dev.toFixed(4)} cm)`);
  } else {
    ok(`${name} day ${ageDays} (${label}): engine M ${got.toFixed(4)} vs published ${expectedM} (dev ${dev.toFixed(4)} cm)`);
  }
}
whoCheck("who-length-boys.json", 14, 52.3461, "RCPCH WHO2006 2-week row");
whoCheck("who-length-boys.json", 0, 49.8842, "WHO birth median");
whoCheck("who-length-boys.json", 365, 75.7391, "WHO 12-month median");
whoCheck("who-length-girls.json", 14, 51.512, "RCPCH WHO2006 2-week row");
whoCheck("who-length-girls.json", 0, 49.1477, "WHO birth median");
whoCheck("who-length-girls.json", 365, 74.0049, "WHO 12-month median");
whoCheck("who-height-boys.json", 731, 87.1161, "RCPCH WHO2006 24-month height row");
whoCheck("who-height-boys.json", 1826, 109.9593, "WHO 5-year median");
whoCheck("who-height-girls.json", 731, 85.7153, "RCPCH WHO2006 24-month height row");
whoCheck("who-height-girls.json", 1826, 109.4189, "WHO 5-year median");

// WHO length->height discontinuity at 24 months: the published 0.7 cm
// measurement-method adjustment must be present, not smoothed away.
for (const [lname, hname] of [["who-length-boys.json", "who-height-boys.json"], ["who-length-girls.json", "who-height-girls.json"]]) {
  const mLen = tables[lname].rows.find((x) => x.age === 730).M;
  const mHei = tables[hname].rows.find((x) => x.age === 731).M;
  const step = mLen - mHei;
  if (!(step > 0.6 && step < 0.8)) {
    fail(`${lname}->${hname}: length/height step ${step.toFixed(4)} cm, expected ~0.7 cm`);
  } else {
    ok(`${lname}->${hname}: 24-month length/height step ${step.toFixed(4)} cm (published ~0.7 cm adjustment preserved)`);
  }
}

// z -> percentile sanity: median input must give the 50th percentile.
{
  const r = tables["cdc-stature-girls.json"].rows.find((x) => x.age === 120.5);
  const p = normalCdf(lmsZ(r.L, r.M, r.S, r.M)) * 100;
  if (Math.abs(p - 50) > 0.01) fail(`percentile sanity: median input gave ${p}`);
  else ok(`percentile sanity: median input -> ${p.toFixed(4)}th percentile`);
}

if (failures.length) {
  console.error(`\n${failures.length} check(s) FAILED`);
  process.exit(1);
}
console.log("\nAll growth-data verification checks passed.");
