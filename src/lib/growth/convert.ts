/**
 * Unit-conversion helpers (pure functions, no dependencies).
 * 1 inch is exactly 2.54 cm by international definition.
 */
export interface FeetInches {
  feet: number;
  inches: number;
}

const CM_PER_INCH = 2.54;

function roundTo(value: number, decimals: number): number {
  const f = Math.pow(10, decimals);
  return Math.round(value * f) / f;
}

/** Convert centimetres to feet + inches. Inches are rounded to 1 decimal. */
export function cmToFeetInches(cm: number): FeetInches {
  if (!Number.isFinite(cm) || cm < 0) {
    throw new RangeError(`cmToFeetInches: cm must be a non-negative number, got ${cm}`);
  }
  const totalInches = cm / CM_PER_INCH;
  let feet = Math.floor(totalInches / 12);
  let inches = roundTo(totalInches - feet * 12, 1);
  if (inches >= 12) {
    feet += 1;
    inches = 0;
  }
  return { feet, inches };
}

/** Convert feet + inches to centimetres (rounded to 2 decimals). */
export function feetInchesToCm(feet: number, inches: number): number {
  if (
    !Number.isFinite(feet) ||
    !Number.isFinite(inches) ||
    feet < 0 ||
    inches < 0
  ) {
    throw new RangeError(
      "feetInchesToCm: feet and inches must be non-negative numbers"
    );
  }
  return roundTo((feet * 12 + inches) * CM_PER_INCH, 2);
}
