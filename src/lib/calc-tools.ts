/**
 * Client-side widgets for the EN-only /height-calculator/ tool pages.
 *
 * All copy here is hardcoded English (these pages are EN-only by design;
 * no i18n keys are added, so `npm run i18n:check` is unaffected).
 *
 * HONESTY RULES (hard):
 * - Percentiles come only from percentileForMeasurement(); a null result
 *   (out of the standard's sourced age range) NEVER becomes a number —
 *   the user sees an honest notice instead.
 * - Predictions always show the ±8.5 cm range; never an exact claim.
 * - Inputs are validated; NaN is never rendered.
 */
import {
  percentileForMeasurement,
  UK_WHO_MIN_DAYS,
  UK_WHO_MAX_MONTHS,
  type GrowthStandard,
  type Sex,
} from "./growth/percentile.js";
import { GROWTH_STANDARDS, getStandardMeta } from "./growth/standards.js";
import {
  cmToFeetInches,
  feetInchesToCm,
} from "./growth/convert.js";
import { predictAdultHeight, MID_PARENTAL_RANGE_CM } from "./growth/predictor.js";

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

export function ordinal(n: number): string {
  const r = Math.round(n);
  if (!Number.isFinite(r)) return `${n}th`;
  const mod100 = r % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${r}th`;
  switch (r % 10) {
    case 1:
      return `${r}st`;
    case 2:
      return `${r}nd`;
    case 3:
      return `${r}rd`;
    default:
      return `${r}th`;
  }
}

/** "50th percentile" / "3.5th percentile" */
export function formatPercentileLabel(p: number): string {
  if (!Number.isFinite(p)) return "—";
  const label = Number.isInteger(p) ? ordinal(p) : `${p}th`;
  return `${label} percentile`;
}

/** "172.5 cm (5 ft 7.9 in)" */
export function formatHeightDual(cm: number): string {
  if (!Number.isFinite(cm) || cm < 0) return "—";
  const { feet, inches } = cmToFeetInches(cm);
  return `${trim1(cm)} cm (${feet} ft ${trim1(inches)} in)`;
}

function trim1(n: number): string {
  return (Math.round(n * 10) / 10).toString();
}

/** "5 ft 7.9 in" */
export function formatFeetInches(cm: number): string {
  if (!Number.isFinite(cm) || cm < 0) return "—";
  const { feet, inches } = cmToFeetInches(cm);
  return `${feet} ft ${trim1(inches)} in`;
}

/** Honest plain-language coverage line per standard (matches engine ranges). */
export function coverageLine(standard: GrowthStandard): string {
  switch (standard) {
    case "cdc":
      return "ages 2–20 years (standing height)";
    case "who":
      return "birth to 5 years (recumbent length under age 2, standing height from age 2)";
    case "uk":
      return `2 weeks to 4 years (${UK_WHO_MIN_DAYS} days–${UK_WHO_MAX_MONTHS} months)`;
  }
}

const STANDARD_LABELS: Record<GrowthStandard, string> = {
  cdc: "CDC",
  who: "WHO",
  uk: "UK-WHO",
};

export function standardLabel(standard: GrowthStandard): string {
  return STANDARD_LABELS[standard];
}

// ---------------------------------------------------------------------------
// Shared DOM helpers
// ---------------------------------------------------------------------------

function qs<T extends HTMLElement>(root: ParentNode, sel: string): T | null {
  return root.querySelector(sel) as T | null;
}

function setNotice(root: HTMLElement, message: string | null): void {
  const el = qs(root, "[data-notice]");
  if (!el) return;
  if (message) {
    el.textContent = message;
    el.hidden = false;
  } else {
    el.textContent = "";
    el.hidden = true;
  }
}

function showResults(root: HTMLElement, show: boolean): void {
  const el = qs(root, "[data-results]");
  if (el) el.hidden = !show;
}

function parseNum(value: string): number | null {
  const t = value.trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

// ---------------------------------------------------------------------------
// Percentile tool
// ---------------------------------------------------------------------------

export type AgeMode = "ym" | "months" | "mdays";

export interface PercentileToolConfig {
  sex: Sex | "both";
  standards: GrowthStandard[];
  defaultStandard: GrowthStandard;
  ageMode: AgeMode;
  /** Optional stricter cap than the standard's own range (e.g. baby page). */
  maxAgeMonths?: number;
  /** Shown when maxAgeMonths is exceeded. */
  maxAgeNotice?: string;
  peerNounMale: string;
  peerNounFemale: string;
}

interface ToolState {
  sex: Sex;
  standard: GrowthStandard;
  unit: "cm" | "ftin";
}

function readConfig(root: HTMLElement): PercentileToolConfig {
  const raw = root.getAttribute("data-config") || "{}";
  let cfg: Partial<PercentileToolConfig> = {};
  try {
    cfg = JSON.parse(raw) as Partial<PercentileToolConfig>;
  } catch {
    cfg = {};
  }
  return {
    sex: cfg.sex ?? "male",
    standards: cfg.standards ?? ["cdc"],
    defaultStandard: cfg.defaultStandard ?? cfg.standards?.[0] ?? "cdc",
    ageMode: cfg.ageMode ?? "ym",
    maxAgeMonths: cfg.maxAgeMonths,
    maxAgeNotice: cfg.maxAgeNotice,
    peerNounMale: cfg.peerNounMale ?? "boys",
    peerNounFemale: cfg.peerNounFemale ?? "girls",
  };
}

function readAgeMonths(root: HTMLElement, mode: AgeMode): number | null {
  if (mode === "months") {
    const m = parseNum(qs<HTMLInputElement>(root, "[data-age-months]")?.value ?? "");
    if (m === null || m < 0) return null;
    return m;
  }
  if (mode === "mdays") {
    const m = parseNum(qs<HTMLInputElement>(root, "[data-age-m]")?.value ?? "");
    const d = parseNum(qs<HTMLInputElement>(root, "[data-age-d]")?.value ?? "");
    if (m === null || d === null || m < 0 || d < 0 || d >= 31) return null;
    return m + d / 30.4375;
  }
  const y = parseNum(qs<HTMLInputElement>(root, "[data-age-y]")?.value ?? "");
  const m = parseNum(qs<HTMLInputElement>(root, "[data-age-m]")?.value ?? "");
  if (y === null || m === null || y < 0 || m < 0 || m > 11) return null;
  return y * 12 + m;
}

function readHeightCm(root: HTMLElement, unit: "cm" | "ftin"): number | null {
  if (unit === "cm") {
    const cm = parseNum(qs<HTMLInputElement>(root, "[data-h-cm]")?.value ?? "");
    if (cm === null) return null;
    return cm;
  }
  const ft = parseNum(qs<HTMLInputElement>(root, "[data-h-ft]")?.value ?? "");
  const inch = parseNum(qs<HTMLInputElement>(root, "[data-h-in]")?.value ?? "");
  if (ft === null || inch === null || ft < 0 || inch < 0 || inch >= 12) return null;
  try {
    return feetInchesToCm(ft, inch);
  } catch {
    return null;
  }
}

function updateStandardNote(root: HTMLElement, standard: GrowthStandard): void {
  const note = qs(root, "[data-stdnote]");
  if (!note) return;
  const meta = getStandardMeta(standard);
  note.textContent = `${standardLabel(standard)} reference: ${meta.measure}. Covers ${coverageLine(standard)}.`;
}

function outOfRangeNotice(standard: GrowthStandard): string {
  return (
    `The ${standardLabel(standard)} reference only covers ${coverageLine(standard)}. ` +
    `We don't estimate percentiles outside published data — no number is shown rather than a guessed one. ` +
    `Try a different reference above, or check the age you entered.`
  );
}

export function initPercentileTool(root: HTMLElement): void {
  if (root.dataset.initialized === "1") return;
  root.dataset.initialized = "1";

  const cfg = readConfig(root);
  const state: ToolState = {
    sex: cfg.sex === "both" ? "male" : cfg.sex,
    standard: cfg.defaultStandard,
    unit: "cm",
  };

  // -- sex switch -----------------------------------------------------------
  const sexWrap = qs(root, "[data-sex-wrap]");
  if (sexWrap && cfg.sex === "both") {
    const buttons = Array.from(sexWrap.querySelectorAll<HTMLButtonElement>("[data-sex]"));
    const paint = () =>
      buttons.forEach((b) => {
        const active = b.dataset.sex === state.sex;
        b.setAttribute("aria-pressed", active ? "true" : "false");
        b.classList.toggle("bg-brand-600", active);
        b.classList.toggle("text-white", active);
        b.classList.toggle("bg-white", !active);
        b.classList.toggle("text-slate-700", !active);
      });
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        state.sex = (b.dataset.sex === "female" ? "female" : "male") as Sex;
        paint();
        setNotice(root, null);
        showResults(root, false);
      })
    );
    paint();
  } else if (sexWrap) {
    sexWrap.hidden = true;
  }

  // -- standard switch ------------------------------------------------------
  const stdWrap = qs(root, "[data-std-wrap]");
  if (stdWrap) {
    const buttons = Array.from(stdWrap.querySelectorAll<HTMLButtonElement>("[data-std]"));
    const paint = () =>
      buttons.forEach((b) => {
        const active = b.dataset.std === state.standard;
        b.setAttribute("aria-pressed", active ? "true" : "false");
        b.classList.toggle("bg-brand-600", active);
        b.classList.toggle("text-white", active);
        b.classList.toggle("bg-white", !active);
        b.classList.toggle("text-slate-700", !active);
      });
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        const next = b.dataset.std as GrowthStandard;
        if (!next || !(cfg.standards as string[]).includes(next)) return;
        state.standard = next;
        paint();
        updateStandardNote(root, state.standard);
        setNotice(root, null);
        showResults(root, false);
      })
    );
    if (buttons.length <= 1) stdWrap.hidden = true;
    paint();
  }
  updateStandardNote(root, state.standard);

  // -- unit toggle ----------------------------------------------------------
  const unitWrap = qs(root, "[data-unit-wrap]");
  const cmRow = qs(root, "[data-h-cm-row]");
  const ftRow = qs(root, "[data-h-ft-row]");
  if (unitWrap && cmRow && ftRow) {
    const buttons = Array.from(unitWrap.querySelectorAll<HTMLButtonElement>("[data-unit]"));
    const paint = () => {
      buttons.forEach((b) => {
        const active = b.dataset.unit === state.unit;
        b.setAttribute("aria-pressed", active ? "true" : "false");
        b.classList.toggle("bg-slate-900", active);
        b.classList.toggle("text-white", active);
        b.classList.toggle("bg-white", !active);
        b.classList.toggle("text-slate-700", !active);
      });
      cmRow.hidden = state.unit !== "cm";
      ftRow.hidden = state.unit !== "ftin";
    };
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        const next = b.dataset.unit === "ftin" ? "ftin" : "cm";
        if (next === state.unit) return;
        // Convert the current value so nothing is lost on toggle.
        if (next === "ftin") {
          const cm = parseNum(qs<HTMLInputElement>(root, "[data-h-cm]")?.value ?? "");
          if (cm !== null && cm > 0) {
            try {
              const { feet, inches } = cmToFeetInches(cm);
              const ftEl = qs<HTMLInputElement>(root, "[data-h-ft]");
              const inEl = qs<HTMLInputElement>(root, "[data-h-in]");
              if (ftEl) ftEl.value = String(feet);
              if (inEl) inEl.value = trim1(inches);
            } catch {
              /* keep inputs as-is */
            }
          }
        } else {
          const ft = parseNum(qs<HTMLInputElement>(root, "[data-h-ft]")?.value ?? "");
          const inch = parseNum(qs<HTMLInputElement>(root, "[data-h-in]")?.value ?? "");
          if (ft !== null && inch !== null) {
            try {
              const cmEl = qs<HTMLInputElement>(root, "[data-h-cm]");
              if (cmEl) cmEl.value = trim1(feetInchesToCm(ft, inch));
            } catch {
              /* keep inputs as-is */
            }
          }
        }
        state.unit = next;
        paint();
      })
    );
    paint();
  }

  // -- calculate ------------------------------------------------------------
  const calcBtn = qs<HTMLButtonElement>(root, "[data-calc]");
  calcBtn?.addEventListener("click", () => {
    setNotice(root, null);

    const ageMonths = readAgeMonths(root, cfg.ageMode);
    if (ageMonths === null) {
      showResults(root, false);
      setNotice(root, "Please enter a valid age.");
      return;
    }
    if (cfg.maxAgeMonths !== undefined && ageMonths > cfg.maxAgeMonths) {
      showResults(root, false);
      setNotice(
        root,
        cfg.maxAgeNotice ??
          `This tool covers up to ${cfg.maxAgeMonths} months of age.`
      );
      return;
    }
    const heightCm = readHeightCm(root, state.unit);
    if (heightCm === null) {
      showResults(root, false);
      setNotice(root, "Please enter a valid height.");
      return;
    }
    if (heightCm < 20 || heightCm > 250) {
      showResults(root, false);
      setNotice(
        root,
        "That height looks unusual — please check it (expected between 20 and 250 cm)."
      );
      return;
    }

    let result = null;
    try {
      result = percentileForMeasurement({
        sex: state.sex,
        ageMonths,
        heightCm,
        standard: state.standard,
      });
    } catch {
      result = null;
    }

    if (!result) {
      // Honest path: the engine has no published data for this input.
      showResults(root, false);
      setNotice(root, outOfRangeNotice(state.standard));
      return;
    }

    const noun = state.sex === "male" ? cfg.peerNounMale : cfg.peerNounFemale;
    const pct = qs(root, "[data-r-pct]");
    const detail = qs(root, "[data-r-detail]");
    const z = qs(root, "[data-r-z]");
    const median = qs(root, "[data-r-median]");
    const entered = qs(root, "[data-r-entered]");
    const ref = qs(root, "[data-r-ref]");
    if (pct) pct.textContent = formatPercentileLabel(result.percentile);
    if (detail)
      detail.textContent = `Taller than about ${result.percentile}% of ${noun} the same age.`;
    if (z) z.textContent = result.zScore > 0 ? `+${result.zScore}` : `${result.zScore}`;
    if (median) median.textContent = formatHeightDual(result.medianCm);
    if (entered) entered.textContent = formatHeightDual(heightCm);
    if (ref)
      ref.textContent = `Reference: ${getStandardMeta(state.standard).citation}. Percentiles describe where a measurement falls in the reference population — not a grade or diagnosis.`;
    showResults(root, true);
  });
}

/** Initialize every percentile tool on the page. */
export function initAllPercentileTools(scope: ParentNode = document): void {
  scope.querySelectorAll<HTMLElement>("[data-percentile-tool]").forEach(initPercentileTool);
}

// ---------------------------------------------------------------------------
// Predictor tool
// ---------------------------------------------------------------------------

export function initPredictorTool(root: HTMLElement): void {
  if (root.dataset.initialized === "1") return;
  root.dataset.initialized = "1";

  let sex: Sex = "male";
  let unit: "cm" | "ftin" = "cm";

  const sexWrap = qs(root, "[data-sex-wrap]");
  const sexButtons = sexWrap
    ? Array.from(sexWrap.querySelectorAll<HTMLButtonElement>("[data-sex]"))
    : [];
  const paintSex = () =>
    sexButtons.forEach((b) => {
      const active = b.dataset.sex === sex;
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.classList.toggle("bg-brand-600", active);
      b.classList.toggle("text-white", active);
      b.classList.toggle("bg-white", !active);
      b.classList.toggle("text-slate-700", !active);
    });
  sexButtons.forEach((b) =>
    b.addEventListener("click", () => {
      sex = (b.dataset.sex === "female" ? "female" : "male") as Sex;
      paintSex();
      setNotice(root, null);
      showResults(root, false);
    })
  );
  paintSex();

  const unitWrap = qs(root, "[data-unit-wrap]");
  const unitButtons = unitWrap
    ? Array.from(unitWrap.querySelectorAll<HTMLButtonElement>("[data-unit]"))
    : [];
  const paintUnit = () => {
    unitButtons.forEach((b) => {
      const active = b.dataset.unit === unit;
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.classList.toggle("bg-slate-900", active);
      b.classList.toggle("text-white", active);
      b.classList.toggle("bg-white", !active);
      b.classList.toggle("text-slate-700", !active);
    });
    const cmRows = root.querySelectorAll<HTMLElement>("[data-cm-row]");
    const ftRows = root.querySelectorAll<HTMLElement>("[data-ft-row]");
    cmRows.forEach((el) => (el.hidden = unit !== "cm"));
    ftRows.forEach((el) => (el.hidden = unit !== "ftin"));
  };
  unitButtons.forEach((b) =>
    b.addEventListener("click", () => {
      unit = b.dataset.unit === "ftin" ? "ftin" : "cm";
      paintUnit();
      setNotice(root, null);
      showResults(root, false);
    })
  );
  paintUnit();

  const readParentCm = (who: "father" | "mother"): number | null => {
    if (unit === "cm") {
      return parseNum(
        qs<HTMLInputElement>(root, `[data-${who}-cm]`)?.value ?? ""
      );
    }
    const ft = parseNum(qs<HTMLInputElement>(root, `[data-${who}-ft]`)?.value ?? "");
    const inch = parseNum(qs<HTMLInputElement>(root, `[data-${who}-in]`)?.value ?? "");
    if (ft === null || inch === null || ft < 0 || inch < 0 || inch >= 12) return null;
    try {
      return feetInchesToCm(ft, inch);
    } catch {
      return null;
    }
  };

  qs<HTMLButtonElement>(root, "[data-calc]")?.addEventListener("click", () => {
    setNotice(root, null);
    const fatherCm = readParentCm("father");
    const motherCm = readParentCm("mother");
    if (fatherCm === null || motherCm === null) {
      showResults(root, false);
      setNotice(root, "Please enter both parents' heights.");
      return;
    }
    for (const [label, v] of [
      ["Father's", fatherCm],
      ["Mother's", motherCm],
    ] as const) {
      if (v < 100 || v > 250) {
        showResults(root, false);
        setNotice(
          root,
          `${label} height looks unusual — please enter a value between 100 and 250 cm (about 3 ft 3 in – 8 ft 2 in).`
        );
        return;
      }
    }

    let pred;
    try {
      pred = predictAdultHeight({ fatherCm, motherCm, childSex: sex });
    } catch {
      showResults(root, false);
      setNotice(root, "Please enter both parents' heights.");
      return;
    }

    const big = qs(root, "[data-r-predicted]");
    const range = qs(root, "[data-r-range]");
    const detail = qs(root, "[data-r-detail]");
    const who = sex === "male" ? "boy" : "girl";
    if (big) big.textContent = formatHeightDual(pred.predictedCm);
    if (range)
      range.textContent = `Likely adult range: ${formatHeightDual(pred.lowCm)} – ${formatHeightDual(pred.highCm)}`;
    if (detail)
      detail.textContent =
        `Mid-parental height estimate for a ${who}: (father + mother ${sex === "male" ? "+ 13" : "− 13"}) ÷ 2. ` +
        `Most children end up within ±${MID_PARENTAL_RANGE_CM} cm of the predicted value — ` +
        `the range is part of the answer, not a footnote.`;
    showResults(root, true);
  });
}

export function initAllPredictorTools(scope: ParentNode = document): void {
  scope.querySelectorAll<HTMLElement>("[data-predictor-tool]").forEach(initPredictorTool);
}

// Re-export engine metadata for server-side components (tree-shaken client-side).
export { GROWTH_STANDARDS, getStandardMeta };
export type { GrowthStandard, Sex };

// ---------------------------------------------------------------------------
// Growth-chart "plot your point" tool
// ---------------------------------------------------------------------------

interface ChartMapping {
  width: number;
  height: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;
  standards: Record<string, { xMin: number; xMax: number; yMin: number; yMax: number }>;
}

export function initChartPlot(root: HTMLElement): void {
  if (root.dataset.initialized === "1") return;
  root.dataset.initialized = "1";

  const sex = (root.dataset.sex === "female" ? "female" : "male") as Sex;
  const noun = sex === "male" ? "boys" : "girls";
  let standard: GrowthStandard = "cdc";
  let unit: "cm" | "ftin" = "cm";

  let mapping: ChartMapping | null = null;
  try {
    const script = qs(root, "[data-chart-mapping]");
    mapping = script ? (JSON.parse(script.textContent || "{}") as ChartMapping) : null;
  } catch {
    mapping = null;
  }

  const dot = qs(root, "[data-chart-dot]") as unknown as SVGCircleElement | null;
  const notice = qs(root, "[data-cnotice]");
  const resultEl = qs(root, "[data-cresult]");

  const say = (message: string | null) => {
    if (!notice) return;
    if (message) {
      notice.textContent = message;
      notice.hidden = false;
    } else {
      notice.textContent = "";
      notice.hidden = true;
    }
  };
  const showResult = (text: string | null) => {
    if (!resultEl) return;
    if (text) {
      resultEl.textContent = text;
      resultEl.hidden = false;
    } else {
      resultEl.textContent = "";
      resultEl.hidden = true;
    }
  };
  const hideDot = () => {
    if (dot) dot.style.display = "none";
  };

  // -- standard toggle ------------------------------------------------------
  const stdButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-chart-std]")
  );
  const paintStd = () => {
    stdButtons.forEach((b) => {
      const active = b.dataset.chartStd === standard;
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.classList.toggle("bg-brand-600", active);
      b.classList.toggle("text-white", active);
      b.classList.toggle("bg-white", !active);
      b.classList.toggle("text-slate-700", !active);
    });
    root.querySelectorAll<HTMLElement>("[data-chart-layer]").forEach((layer) => {
      layer.style.display = layer.dataset.chartLayer === standard ? "" : "none";
    });
  };
  stdButtons.forEach((b) =>
    b.addEventListener("click", () => {
      const next = b.dataset.chartStd as GrowthStandard;
      if (next !== "cdc" && next !== "who") return;
      standard = next;
      paintStd();
      say(null);
      showResult(null);
      hideDot();
    })
  );
  paintStd();

  // -- unit toggle ----------------------------------------------------------
  const unitButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-cunit]")
  );
  const cmRow = qs(root, "[data-ch-cm-row]");
  const ftRow = qs(root, "[data-ch-ft-row]");
  const paintUnit = () => {
    unitButtons.forEach((b) => {
      const active = b.dataset.cunit === unit;
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.classList.toggle("bg-slate-900", active);
      b.classList.toggle("text-white", active);
      b.classList.toggle("bg-white", !active);
      b.classList.toggle("text-slate-700", !active);
    });
    if (cmRow) cmRow.hidden = unit !== "cm";
    if (ftRow) ftRow.hidden = unit !== "ftin";
  };
  unitButtons.forEach((b) =>
    b.addEventListener("click", () => {
      unit = b.dataset.cunit === "ftin" ? "ftin" : "cm";
      paintUnit();
    })
  );
  paintUnit();

  // -- plot -----------------------------------------------------------------
  qs<HTMLButtonElement>(root, "[data-ccalc]")?.addEventListener("click", () => {
    say(null);
    showResult(null);
    hideDot();

    const y = parseNum(qs<HTMLInputElement>(root, "[data-cage-y]")?.value ?? "");
    const m = parseNum(qs<HTMLInputElement>(root, "[data-cage-m]")?.value ?? "");
    if (y === null || m === null || y < 0 || m < 0 || m > 11) {
      say("Please enter a valid age.");
      return;
    }
    const ageMonths = y * 12 + m;

    let heightCm: number | null;
    if (unit === "cm") {
      heightCm = parseNum(qs<HTMLInputElement>(root, "[data-ch-cm]")?.value ?? "");
    } else {
      const ft = parseNum(qs<HTMLInputElement>(root, "[data-ch-ft]")?.value ?? "");
      const inch = parseNum(qs<HTMLInputElement>(root, "[data-ch-in]")?.value ?? "");
      if (ft === null || inch === null || ft < 0 || inch < 0 || inch >= 12) {
        say("Please enter a valid height.");
        return;
      }
      try {
        heightCm = feetInchesToCm(ft, inch);
      } catch {
        heightCm = null;
      }
    }
    if (heightCm === null || heightCm < 20 || heightCm > 250) {
      say("Please enter a valid height (between 20 and 250 cm).");
      return;
    }

    let res = null;
    try {
      res = percentileForMeasurement({ sex, ageMonths, heightCm, standard });
    } catch {
      res = null;
    }
    if (!res) {
      say(
        `The ${standardLabel(standard)} chart only covers ${coverageLine(standard)}. ` +
          `The point can't be plotted outside published data — try the other chart tab or check the age.`
      );
      return;
    }

    if (mapping && dot) {
      const dom = mapping.standards[standard];
      if (dom) {
        const plotW = mapping.width - mapping.ml - mapping.mr;
        const plotH = mapping.height - mapping.mt - mapping.mb;
        const cx = mapping.ml + ((ageMonths - dom.xMin) / (dom.xMax - dom.xMin)) * plotW;
        const cy =
          mapping.mt + (1 - (heightCm - dom.yMin) / (dom.yMax - dom.yMin)) * plotH;
        if (Number.isFinite(cx) && Number.isFinite(cy)) {
          dot.setAttribute("cx", cx.toFixed(1));
          dot.setAttribute("cy", cy.toFixed(1));
          dot.style.display = "";
        }
      }
    }
    showResult(
      `Plotted: ${formatHeightDual(heightCm)} at age ${y}y ${m}m — ` +
        `${formatPercentileLabel(res.percentile)} on the ${standardLabel(standard)} reference ` +
        `(taller than about ${res.percentile}% of ${noun} the same age).`
    );
  });
}

export function initAllChartPlots(scope: ParentNode = document): void {
  scope.querySelectorAll<HTMLElement>("[data-chart-tool]").forEach(initChartPlot);
}
