/**
 * LMS percentile engine.
 *
 * Method (exactly as published by CDC/WHO):
 *   z = ((X / M)^L - 1) / (L * S)        when L != 0
 *   z = ln(X / M) / S                     when L == 0
 *   percentile = Phi(z) * 100, where Phi is the standard normal CDF,
 *   computed here with our own erf-based implementation (no dependencies).
 *
 * Between tabulated ages, L, M and S are LINEARLY INTERPOLATED. This is the
 * same approach CDC documents ("To obtain L, M, and S values at finer age
 * ... intervals interpolation could be used"). Interpolation is never applied
 * across the WHO length/height measurement boundary at 24 months: ages below
 * 24 months use the recumbent-length table, ages 24 months and above use the
 * standing-height table, mirroring the published ~0.7 cm discontinuity.
 *
 * Inputs outside a standard's sourced age range return null — the engine
 * never extrapolates and never invents data.
 */
import {
  CDC_STATURE_BOYS,
  CDC_STATURE_GIRLS,
  WHO_LENGTH_BOYS,
  WHO_LENGTH_GIRLS,
  WHO_HEIGHT_BOYS,
  WHO_HEIGHT_GIRLS,
  DAYS_PER_MONTH,
  interpolateLms,
  type GrowthTable,
} from "./tables";

export type Sex = "male" | "female";
export type GrowthStandard = "cdc" | "who" | "uk";

export interface PercentileInput {
  sex: Sex;
  /** Age in months (decimal months allowed, e.g. 30.5). */
  ageMonths: number;
  /** Measured height/length/stature in cm. */
  heightCm: number;
  standard: GrowthStandard;
}

export interface PercentileResult {
  /** Percentile in the range 0-100 (rounded to 1 decimal). */
  percentile: number;
  /** z-score (rounded to 3 decimals). */
  zScore: number;
  /** Reference median at this age/sex/standard, in cm (rounded to 2 decimals). */
  medianCm: number;
}

/**
 * UK-WHO age window, in days, for which we hold real published data.
 *
 * The RCPCH UK-WHO charts officially use the WHO Child Growth Standards from
 * 2 weeks to 4 years of age. Below 2 weeks the paper charts use UK90 pooled
 * birth data (ordinary centile curves are not provided for 0-14 days), and
 * from 4 years they use the British 1990 reference, whose LMS tables are
 * distributed under an MRC licence (not open data) and are therefore NOT
 * bundled here. Ages outside [14 days, 48 months] return null for 'uk'.
 */
export const UK_WHO_MIN_DAYS = 14;
export const UK_WHO_MAX_MONTHS = 48;

/** Error function, Abramowitz & Stegun 7.1.26 (|error| <= 1.5e-7). */
export function erf(x: number): number {
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

/** Standard normal CDF via the error function. */
export function normalCdf(z: number): number {
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

/**
 * Inverse standard normal CDF (probit), Peter J. Acklam's rational
 * approximation (relative error < 1.2e-9). Used to convert a percentile to
 * the z-score needed for drawing reference curves.
 */
export function inverseNormalCdf(p: number): number {
  if (!(p > 0 && p < 1)) {
    throw new RangeError(`inverseNormalCdf: p must be in (0, 1), got ${p}`);
  }
  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.38357751867269e2, -3.066479806614716e1, 2.506628277459239,
  ];
  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];
  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];
  const plow = 0.02425;
  const phigh = 1 - plow;
  let q: number;
  let x: number;
  if (p < plow) {
    q = Math.sqrt(-2 * Math.log(p));
    x =
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= phigh) {
    q = p - 0.5;
    const r = q * q;
    x =
      (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
      q /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    x =
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  return x;
}

/** LMS z-score for a measurement X given L, M, S. */
export function lmsZ(L: number, M: number, S: number, x: number): number {
  if (Math.abs(L) < 1e-10) {
    return Math.log(x / M) / S;
  }
  return (Math.pow(x / M, L) - 1) / (L * S);
}

/**
 * Inverse LMS: the measurement X at z-score z given L, M, S.
 * (CDC: X = M(1 + LSZ)^(1/L); WHO documents the same relation.)
 */
export function lmsInverse(L: number, M: number, S: number, z: number): number {
  if (Math.abs(L) < 1e-10) {
    return M * Math.exp(S * z);
  }
  const base = 1 + L * S * z;
  if (!(base > 0)) return NaN;
  return M * Math.pow(base, 1 / L);
}

function roundTo(value: number, decimals: number): number {
  const f = Math.pow(10, decimals);
  return Math.round(value * f) / f;
}

interface ResolvedLookup {
  table: GrowthTable;
  /** Age expressed in the table's native unit. */
  ageInTableUnits: number;
}

/**
 * Pick the published table and the age in that table's units for an input.
 * Returns null when the input is outside the sourced age range.
 */
function resolveTable(input: PercentileInput): ResolvedLookup | null {
  const { sex, ageMonths, standard } = input;
  if (
    !Number.isFinite(ageMonths) ||
    !Number.isFinite(input.heightCm) ||
    input.heightCm <= 0 ||
    ageMonths < 0
  ) {
    return null;
  }
  const male = sex === "male";

  if (standard === "cdc") {
    // CDC 2000 stature-for-age: 24-240 months, standing height.
    if (ageMonths < 24 || ageMonths > 240) return null;
    return {
      table: male ? CDC_STATURE_BOYS : CDC_STATURE_GIRLS,
      ageInTableUnits: ageMonths,
    };
  }

  // WHO and UK share the WHO 0-5y tables; they differ only in the
  // age window the standard is valid for.
  const days = ageMonths * DAYS_PER_MONTH;
  if (standard === "uk") {
    if (days < UK_WHO_MIN_DAYS || ageMonths > UK_WHO_MAX_MONTHS) return null;
  } else {
    // WHO Child Growth Standards: birth to 5 years (0-1826 days).
    if (days < 0 || days > 1826) return null;
  }

  // Measurement-method split at 24 months, exactly as WHO publishes it:
  // recumbent length below 24 months, standing height at/above 24 months.
  // Never interpolate across the boundary (there is a real ~0.7 cm step).
  if (ageMonths < 24) {
    return {
      table: male ? WHO_LENGTH_BOYS : WHO_LENGTH_GIRLS,
      ageInTableUnits: Math.min(days, 730),
    };
  }
  return {
    table: male ? WHO_HEIGHT_BOYS : WHO_HEIGHT_GIRLS,
    ageInTableUnits: Math.max(days, 731),
  };
}

/**
 * Height/length percentile for a child against a published growth standard.
 *
 * Returns null when the inputs are outside the sourced age range (or are
 * invalid) — the engine never extrapolates beyond published data.
 *
 * The reported percentile is clamped to [0.1, 99.9]: beyond that the normal
 * model implies more precision than a growth reference can support, and the
 * raw z-score is still returned for exact work.
 */
export function percentileForMeasurement(
  input: PercentileInput
): PercentileResult | null {
  const resolved = resolveTable(input);
  if (!resolved) return null;
  const lms = interpolateLms(resolved.table, resolved.ageInTableUnits);
  if (!lms) return null;

  const z = lmsZ(lms.L, lms.M, lms.S, input.heightCm);
  if (!Number.isFinite(z)) return null;
  const percentile = normalCdf(z) * 100;

  return {
    percentile: roundTo(Math.min(99.9, Math.max(0.1, percentile)), 1),
    zScore: roundTo(z, 3),
    medianCm: roundTo(lms.M, 2),
  };
}
