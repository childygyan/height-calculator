/**
 * Growth-data engine: real published LMS tables (CDC 2000, WHO 2006)
 * plus the math to turn them into percentiles, chart curves, and
 * mid-parental-height predictions. Zero dependencies.
 */
export * from "./tables";
export * from "./percentile";
export * from "./curves";
export * from "./predictor";
export * from "./standards";
export * from "./convert";
