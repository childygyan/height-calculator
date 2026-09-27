/**
 * Metadata describing each growth standard the calculators can use.
 * The `citation` strings are meant for UI display (e.g. under a chart);
 * `coverageNote` documents exactly which ages are backed by real published
 * data — and which are not.
 */
import type { GrowthStandard } from "./percentile";

export interface GrowthStandardMeta {
  key: GrowthStandard;
  /** Short label for UI (e.g. a standard switcher). */
  label: string;
  /** [min, max] age in months with real published backing data. */
  ageRangeMonths: [number, number];
  /** What is measured (and how) for this standard. */
  measure: string;
  /** Citation string for UI display. */
  citation: string;
  /** URL of the publishing body / data-files page. */
  sourceUrl: string;
  /** Honest coverage notes, including known gaps. */
  coverageNote: string;
}

export const GROWTH_STANDARDS: GrowthStandardMeta[] = [
  {
    key: "cdc",
    label: "CDC (US)",
    ageRangeMonths: [24, 240],
    measure: "Standing height (stature), ages 2-20 years",
    citation: "CDC 2000 Growth Charts, stature-for-age (National Center for Health Statistics)",
    sourceUrl: "https://www.cdc.gov/growthcharts/cdc-data-files.htm",
    coverageNote:
      "LMS parameters published by CDC for ages 24-240 months, boys and girls. " +
      "Ages below 2 years are not covered by the CDC stature reference.",
  },
  {
    key: "who",
    label: "WHO",
    ageRangeMonths: [0, 60],
    measure:
      "Recumbent length below 24 months; standing height at/above 24 months (0-5 years)",
    citation:
      "WHO Child Growth Standards, length/height-for-age (WHO Multicentre Growth Reference Study, 2006)",
    sourceUrl: "https://www.who.int/tools/child-growth-standards/standards/length-height-for-age",
    coverageNote:
      "Daily LMS parameters (L = 1 throughout, as published) for days 0-1826, boys and girls. " +
      "There is a real ~0.7 cm step between the length and height tables at 24 months " +
      "because the measurement method changes; it is preserved, not smoothed away.",
  },
  {
    key: "uk",
    label: "UK-WHO",
    ageRangeMonths: [0.46, 48],
    measure:
      "Recumbent length below 24 months; standing height at/above 24 months (2 weeks-4 years)",
    citation:
      "UK-WHO growth charts (RCPCH): ages 2 weeks-4 years follow the WHO Child Growth Standards",
    sourceUrl: "https://www.who.int/tools/child-growth-standards/standards/length-height-for-age",
    coverageNote:
      "The RCPCH UK-WHO charts officially use the WHO Child Growth Standards from " +
      "2 weeks to 4 years, so UK percentiles in that window are computed from the WHO " +
      "tables above (identical values). KNOWN GAP: from 4 years the UK-WHO charts use " +
      "the British 1990 reference, whose LMS tables are distributed under an MRC licence " +
      "(not open data) and are therefore not bundled — 'uk' returns no result for ages " +
      "above 4 years. Likewise the 0-14 day window uses UK90 pooled birth data on the " +
      "paper charts (no ordinary centile curves are published for 0-14 days), so 'uk' " +
      "starts at 14 days (~0.46 months).",
  },
];

export function getStandardMeta(key: GrowthStandard): GrowthStandardMeta {
  const meta = GROWTH_STANDARDS.find((s) => s.key === key);
  if (!meta) throw new RangeError(`Unknown growth standard: ${key}`);
  return meta;
}
