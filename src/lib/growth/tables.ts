/**
 * Typed access to the versioned growth-reference LMS tables in
 * `src/data/growth/`.
 *
 * Every value in these tables is copied VERBATIM from the official published
 * tables (CDC 2000, WHO Child Growth Standards). See the `source`, `sourceUrl`
 * and `notes` fields inside each JSON file for provenance. Nothing here is
 * estimated, smoothed, or invented.
 */
import cdcStatureBoys from "../../data/growth/cdc-stature-boys.json";
import cdcStatureGirls from "../../data/growth/cdc-stature-girls.json";
import whoLengthBoys from "../../data/growth/who-length-boys.json";
import whoLengthGirls from "../../data/growth/who-length-girls.json";
import whoHeightBoys from "../../data/growth/who-height-boys.json";
import whoHeightGirls from "../../data/growth/who-height-girls.json";

export interface LmsRow {
  /** Age in the table's native unit (see GrowthTable.ageUnit). */
  age: number;
  /** Box-Cox power (L). */
  L: number;
  /** Median (M), in cm. */
  M: number;
  /** Generalized coefficient of variation (S). */
  S: number;
}

export interface GrowthTable {
  standard: "cdc" | "who" | "uk-who";
  measure: "stature" | "length" | "height";
  sex: "male" | "female";
  source: string;
  sourceUrl: string;
  fileUrl?: string;
  retrievalDate: string;
  ageUnit: "months" | "days";
  ageRange: [number, number];
  notes?: string;
  rows: LmsRow[];
}

function asTable(json: unknown): GrowthTable {
  return json as GrowthTable;
}

export const CDC_STATURE_BOYS = asTable(cdcStatureBoys);
export const CDC_STATURE_GIRLS = asTable(cdcStatureGirls);
export const WHO_LENGTH_BOYS = asTable(whoLengthBoys);
export const WHO_LENGTH_GIRLS = asTable(whoLengthGirls);
export const WHO_HEIGHT_BOYS = asTable(whoHeightBoys);
export const WHO_HEIGHT_GIRLS = asTable(whoHeightGirls);

/** All bundled tables, for iteration by admin/verification tooling. */
export const ALL_TABLES: GrowthTable[] = [
  CDC_STATURE_BOYS,
  CDC_STATURE_GIRLS,
  WHO_LENGTH_BOYS,
  WHO_LENGTH_GIRLS,
  WHO_HEIGHT_BOYS,
  WHO_HEIGHT_GIRLS,
];

/** Mean length of a calendar month in days (365.25 / 12). Used to convert
 *  an age in months to the day scale of the WHO tables. */
export const DAYS_PER_MONTH = 365.25 / 12;

/**
 * Linearly interpolate L, M, S between the two tabulated rows that bracket
 * `age`. Ages are in the table's native unit. If `age` falls exactly on a
 * tabulated row that row is used unchanged; ages outside the table range
 * return null (callers decide the range policy — never extrapolate).
 */
export function interpolateLms(
  table: GrowthTable,
  age: number
): { L: number; M: number; S: number } | null {
  const rows = table.rows;
  if (rows.length === 0) return null;
  if (age < rows[0].age || age > rows[rows.length - 1].age) return null;

  // Binary search for the first row with row.age >= age.
  let lo = 0;
  let hi = rows.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (rows[mid].age < age) lo = mid + 1;
    else hi = mid;
  }
  const upper = rows[lo];
  if (upper.age === age || lo === 0) {
    return { L: upper.L, M: upper.M, S: upper.S };
  }
  const lower = rows[lo - 1];
  const t = (age - lower.age) / (upper.age - lower.age);
  return {
    L: lower.L + t * (upper.L - lower.L),
    M: lower.M + t * (upper.M - lower.M),
    S: lower.S + t * (upper.S - lower.S),
  };
}
