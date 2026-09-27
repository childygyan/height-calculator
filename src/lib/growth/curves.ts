/**
 * Reference percentile curves computed from the published LMS tables.
 *
 * Each curve is the inverse-LMS transform of a fixed z-score evaluated at
 * every tabulated age of the underlying table:
 *   cm = M * (1 + L*S*z)^(1/L)      (L != 0)
 *   cm = M * exp(S*z)                (L == 0)
 * with z = Phi^-1(percentile / 100).
 *
 * Standard chart percentiles: 3, 10, 25, 50, 75, 90, 97.
 */
import {
  CDC_STATURE_BOYS,
  CDC_STATURE_GIRLS,
  WHO_LENGTH_BOYS,
  WHO_LENGTH_GIRLS,
  WHO_HEIGHT_BOYS,
  WHO_HEIGHT_GIRLS,
  DAYS_PER_MONTH,
  type GrowthTable,
} from "./tables";
import {
  inverseNormalCdf,
  lmsInverse,
  UK_WHO_MIN_DAYS,
  UK_WHO_MAX_MONTHS,
  type Sex,
  type GrowthStandard,
} from "./percentile";

/** The percentile lines drawn on growth charts. */
export const STANDARD_CURVE_PERCENTILES = [3, 10, 25, 50, 75, 90, 97] as const;

export interface CurvePoint {
  /** Age in months (WHO day-rows are converted via 365.25/12). */
  ageMonths: number;
  /** Reference value in cm at the requested percentile. */
  cm: number;
}

export interface CurveInput {
  sex: Sex;
  standard: GrowthStandard;
  /** Desired percentile, e.g. 50 for the median curve. Must be in (0, 100). */
  percentile: number;
}

function roundTo(value: number, decimals: number): number {
  const f = Math.pow(10, decimals);
  return Math.round(value * f) / f;
}

/** Tables (in order) that make up one standard/sex curve. */
function tablesFor(sex: Sex, standard: GrowthStandard): GrowthTable[] {
  const male = sex === "male";
  if (standard === "cdc") {
    return [male ? CDC_STATURE_BOYS : CDC_STATURE_GIRLS];
  }
  // WHO: length table (days 0-730) followed by height table (days 731-1826).
  // The ~0.7 cm step at 24 months is real (measurement method changes) and is
  // preserved, exactly as in the published tables.
  const tables = male
    ? [WHO_LENGTH_BOYS, WHO_HEIGHT_BOYS]
    : [WHO_LENGTH_GIRLS, WHO_HEIGHT_GIRLS];
  if (standard === "uk") {
    // UK-WHO officially follows WHO from 2 weeks to 4 years; restrict the
    // curve to the ages with real published data (see percentile.ts).
    const minDays = UK_WHO_MIN_DAYS;
    const maxDays = UK_WHO_MAX_MONTHS * DAYS_PER_MONTH;
    return tables.map((t) => ({
      ...t,
      rows: t.rows.filter((r) => r.age >= minDays && r.age <= maxDays),
    }));
  }
  return tables;
}

/**
 * Reference curve points for one percentile line.
 *
 * Returns one point per tabulated age (CDC: 218 monthly points; WHO: daily
 * points across 0-5y; UK: daily points across 2 weeks-4 years).
 */
export function curvePoints(input: CurveInput): CurvePoint[] {
  const { sex, standard, percentile } = input;
  if (!(percentile > 0 && percentile < 100)) {
    throw new RangeError(
      `curvePoints: percentile must be in (0, 100), got ${percentile}`
    );
  }
  const z = inverseNormalCdf(percentile / 100);
  const points: CurvePoint[] = [];
  for (const table of tablesFor(sex, standard)) {
    for (const row of table.rows) {
      const cm = lmsInverse(row.L, row.M, row.S, z);
      if (!Number.isFinite(cm)) continue;
      const ageMonths =
        table.ageUnit === "days" ? row.age / DAYS_PER_MONTH : row.age;
      points.push({ ageMonths: roundTo(ageMonths, 2), cm: roundTo(cm, 2) });
    }
  }
  return points;
}
