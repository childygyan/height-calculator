/**
 * Adult-height prediction from parental heights (mid-parental height).
 *
 *   boys:  (fatherCm + motherCm + 13) / 2
 *   girls: (fatherCm + motherCm - 13) / 2
 *
 * This is the classic Tanner mid-parental-height formula. It estimates
 * genetic target height, not a guaranteed outcome: the ±8.5 cm band covers
 * roughly ±2 standard deviations of prediction error. No method predicts a
 * child's adult height exactly — the range is part of the answer, not a
 * footnote.
 */
export interface AdultHeightInput {
  fatherCm: number;
  motherCm: number;
  childSex: "male" | "female";
}

export interface AdultHeightPrediction {
  /** Predicted adult height in cm (1 decimal). */
  predictedCm: number;
  /** Lower bound of the likely range: predicted − 8.5 cm (1 decimal). */
  lowCm: number;
  /** Upper bound of the likely range: predicted + 8.5 cm (1 decimal). */
  highCm: number;
}

/** Half-width of the prediction band in cm (the formula's documented error margin). */
export const MID_PARENTAL_RANGE_CM = 8.5;

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

export function predictAdultHeight(
  input: AdultHeightInput
): AdultHeightPrediction {
  const { fatherCm, motherCm, childSex } = input;
  if (
    !Number.isFinite(fatherCm) ||
    !Number.isFinite(motherCm) ||
    fatherCm <= 0 ||
    motherCm <= 0
  ) {
    throw new RangeError(
      "predictAdultHeight: fatherCm and motherCm must be positive numbers"
    );
  }
  const adjustment = childSex === "male" ? 13 : -13;
  const predicted = (fatherCm + motherCm + adjustment) / 2;
  return {
    predictedCm: round1(predicted),
    lowCm: round1(predicted - MID_PARENTAL_RANGE_CM),
    highCm: round1(predicted + MID_PARENTAL_RANGE_CM),
  };
}
