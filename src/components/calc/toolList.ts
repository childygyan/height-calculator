/**
 * Shared metadata for the /height-calculator/ tool family (EN-only).
 * Used by the hub cards grid and the per-page "sibling tools" section.
 * Hardcoded English — no i18n keys.
 */

export interface CalcToolMeta {
  href: string;
  name: string;
  desc: string;
}

export const CALC_TOOLS: CalcToolMeta[] = [
  {
    href: "/height-calculator/boys/",
    name: "Boys Height Calculator",
    desc: "Quick height check for boys against CDC growth references.",
  },
  {
    href: "/height-calculator/girls/",
    name: "Girls Height Calculator",
    desc: "Quick height check for girls against CDC growth references.",
  },
  {
    href: "/height-calculator/baby/",
    name: "Baby Height Calculator",
    desc: "Length-for-age percentiles for babies 0–24 months (WHO).",
  },
  {
    href: "/height-calculator/boys-percentile/",
    name: "Boys Height Percentile Calculator",
    desc: "Exact percentile + z-score with CDC / WHO / UK-WHO switcher.",
  },
  {
    href: "/height-calculator/girls-percentile/",
    name: "Girls Height Percentile Calculator",
    desc: "Exact percentile + z-score with CDC / WHO / UK-WHO switcher.",
  },
  {
    href: "/height-calculator/child-height-predictor/",
    name: "Child Height Predictor",
    desc: "Predict adult height from parents' heights, with honest range.",
  },
  {
    href: "/height-calculator/boys-chart/",
    name: "Boys Growth Chart",
    desc: "Interactive CDC/WHO percentile curves — plot your own point.",
  },
  {
    href: "/height-calculator/girls-chart/",
    name: "Girls Growth Chart",
    desc: "Interactive CDC/WHO percentile curves — plot your own point.",
  },
  {
    href: "/height-calculator/uk/boys-percentile/",
    name: "UK Boys Height Percentile",
    desc: "UK-WHO chart percentiles for ages 2 weeks–4 years.",
  },
];
