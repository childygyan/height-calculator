# PRD: Height Calculator — Content & Brand Repositioning

**Status:** Draft for Firoz's approval — **v2: calculator-first expansion added 2026-09-27**
**Date:** 2026-09-27
**Repo:** `childygyan/height-calculator` (local: `~/workspace/height-calculator`, branch `master`)
**Domain:** height-calculator.net

> **v2 direction (Firoz, 2026-09-27):** Sirf words rewrite kaafi nahi hai. Site ko **calculator-first** banana hai — naye "height calculator" keywords (boys, percentile, parents, CDC/UK, baby, chart) target karne ke liye **nayi URL structure + naye calculator tools**. Ye §5 ka **Option B** hai. Neeche §13–§17 me pura plan hai.

---

## 1. Objective

Reposition all user-facing words on the site from the old **"height comparison tool"** framing to the **"Height Calculator"** brand. The mechanical rename (brand name swap) is done; this PRD covers the real work: rewriting headlines, descriptions, SEO meta, FAQs, and page copy so the whole site reads as *Height Calculator* — one coherent product — instead of a comparison tool that happens to be called Height Calculator.

## 2. Background & current state

- Stack: Astro 4. **560 pages** built. **10 locales** (`ar, de, en, es, fr, hi, ja, ko, pt, ru`), **198 i18n keys per locale**, 0 missing.
- Canonical domain everywhere: `https://height-calculator.net` (site config, sitemap, robots, `_headers`, `_redirects`, hreflang).
- Brand name already reads "Height Calculator" (logo, titles, `contact@height-calculator.net`).
- **Problem:** every sentence still describes a *"height comparison tool / platform / engine"*. Real examples from `src/i18n/en/`:
  - `hero.badge`: "Interactive Visual Height Comparison Platform"
  - `hero.title`: "Compare Anything by Height"
  - `hero.description`: "…with an interactive visual height comparison tool."
  - `meta.defaultTitle`: "Height Comparison Tool – Compare Anything by Height | Height Calculator"
  - `compare.h1`: "Height Comparison Tool"
  - `about.desc`: "Learn about Height Calculator mission to help people visually understand the height of anything…"
  - `faq.subtitle`: "Learn how our height comparison engine and proportional scaling algorithm work."
- Pages in scope: `/`, `/compare`, `/height-comparison-calculator`, `/height-difference-calculator`, `/height-comparison-chart`, `/height-comparison-visualizer`, `/height-comparison-couple`, `/size-comparison`, 10 category hubs (celebrity, animal, anime, object, film, fictional-character, sports, people, apparel, plant), `/blog` (6 articles), `/about`, `/how-to-use`, `/contact`, `/privacy`, `/terms`.
- Copy lives in: `src/i18n/{locale}/{home,seo,common,comparison,categories}.ts`, `src/data/{calculator,howto}/{locale}.ts`, `src/data/blog/articles.ts`, plus page components.

## 3. Goals

1. Every headline, description, CTA, FAQ and SEO string reads as **Height Calculator** — one brand, one voice.
2. Keep the product truthful: the flagship is still the visual comparison suite; words must not promise features that don't exist.
3. Zero SEO damage: no URL/slug changes, hreflang + sitemap structure untouched.
4. All 10 locales rewritten consistently; `npm run i18n:check` stays at 0 missing keys.

## 4. Non-goals (out of scope)

- No URL, slug, or site-structure changes.
- No design/layout overhaul.
- No new calculator features (unit converter, BMI, child-height predictor) — unless Firoz picks Positioning B (§5).
- No new pages, no blog expansion — unless approved separately.

## 5. Positioning — DECISION NEEDED

**Option A (recommended): "Height Calculator" as master brand.**
The visual comparison suite stays the flagship; "calculator" covers the whole toolkit (compare, difference calculator, charts, converter). Minimal product change — this PRD is mostly a words rewrite.
Tagline candidates:
- A1: "Height Calculator — Compare, Convert & Understand Any Height"
- A2: "Height Calculator — See How You Measure Up"
- A3: "Height Calculator — Visual Height Comparison, Solved"

**Option B: pivot toward real calculators.**
Keep comparison as one section; add/emphasize cm↔ft/in converter, height-difference calculator, (later) BMI / child-height predictor. Bigger build, new pages, new SEO targets. Only choose if the product should actually become calculator-first.

*Default if no answer: Option A with tagline A1.*

> **UPDATE 2026-09-27:** Firoz ne "height calculator" keyword clusters (boys, percentile, parents, CDC/UK, baby, chart) diye aur URL structure change manga hai — matlab direction **Option B (calculator-first pivot)** confirm hota hai. §13–§17 isi par based hai.

## 6. Terminology map (EN master)

| Old framing | New framing |
|---|---|
| Interactive Visual Height Comparison Platform | Height Calculator (brand) + tagline |
| Compare Anything by Height (hero) | e.g. "Calculate & Compare Any Height" |
| height comparison tool | height calculator / height comparison calculator (feature context) |
| height comparison engine | calculation engine |
| Start Comparing | Compare Heights (tool CTA keeps action verb) |
| Height Comparison Tool (page H1s) | Height Comparison Calculator |
| Got Questions? / FAQ subtitle | keep structure, rewrite "engine" wording |

Rules: brand = "Height Calculator" always capitalized; generic noun = "height calculator"; never promise medical/factual precision beyond what the tool does; keep numbers/units formatting as-is.

## 7. Scope by area

### 7.1 Homepage (`src/i18n/*/home.ts`, hero components)
Rewrite: badge, title, description, both CTAs, live-tool section title, categories/comparisons/celebrities/benchmarks section titles + descriptions. Keep section structure and component props unchanged.

### 7.2 SEO meta (`src/i18n/*/seo.ts`)
Rewrite: `meta.defaultTitle`, `meta.defaultDesc`, `meta.keywords`, per-page titles/descs (`compare.*`, `calculator.*`, `chart.*`, `about.*`, `howto.*`), FAQ Q&As (`faq.q1–q6`, answers keep the technical facts, reword the framing).
Keyword strategy: lead with "height calculator", "height comparison calculator", "height difference calculator"; keep existing "height comparison / celebrity heights / anime height comparison" terms where they still rank.

### 7.3 Tool pages (`/compare`, `/height-comparison-calculator`, `/height-difference-calculator`, `/height-comparison-chart`, `/height-comparison-visualizer`, `/height-comparison-couple`, `/size-comparison`)
Rewrite H1s, intros, helper text, empty states, share-dialog copy. No functional changes.

### 7.4 Category hubs (10)
`celebrity, animal, anime, object, film, fictional-character, sports, people, apparel, plant` (+ `celebrity-height`, `size-comparison`): rewrite hub intros and meta; keep entity data (heights, names) untouched — facts don't change.

### 7.5 About / How-to / Contact
About: rewrite mission paragraph around the Height Calculator brand story. How-to (`src/data/howto/*`): rewrite titles/intros, keep steps factual. Contact: only brand mentions.

### 7.6 Blog (6 articles in `src/data/blog/articles.ts`)
Rewrite titles, excerpts, intros to the new voice. Article bodies: light pass only (no factual rewrites).

### 7.7 Legal pages (`/privacy`, `/terms`)
Brand mentions already swapped; verify, no voice rewrite needed.

### 7.8 Assets
`public/og-image.svg`: verify tagline text matches new positioning; update if it shows old wording.

## 8. Multilingual execution

1. Rewrite **EN master** first (all files in §7), Firoz reviews EN only.
2. Propagate to `pt, es, fr, de, hi, ja, ko, ar, ru` — same keys, natural translations, not word-for-word.
3. `pt-BR` gets a native-quality pass (Brazil is the target market).
4. After every locale: `npm run i18n:check` → must stay 198 keys, 0 missing.

## 9. SEO guardrails

- No slug/URL changes, no redirect changes.
- Canonicals stay `https://height-calculator.net/...`; hreflang map unchanged.
- Structured data (FAQPage, BreadcrumbList, etc.) unchanged — only the text inside changes.
- `llms.txt` / `llms-full.txt` regenerated if they contain old framing.

## 10. Acceptance criteria

- [ ] `grep` over `src/`, `public/`, `scripts/`: zero user-facing occurrences of "height comparison tool/platform/engine" as brand framing (generic descriptive uses in `pt` body copy reviewed case-by-case).
- [ ] Homepage, `/compare`, `/pt/` read as one coherent "Height Calculator" product.
- [ ] EN + pt-BR fully rewritten and reviewed; other 8 locales complete.
- [ ] `npm run build` clean (560 pages), `npm run i18n:check` 0 missing, SEO audit 0 critical.
- [ ] Browser spot-check: `/`, `/compare`, `/pt/`, one category hub, one calculator page.
- [ ] Committed + pushed to `childygyan/height-calculator`.

## 11. Open decisions for Firoz

1. Positioning **A** (brand reword, recommended) vs **B** (calculator-first pivot)?
2. Tagline: A1 / A2 / A3 / apna koi?
3. Default locale: keep English at `/` (pt-BR at `/pt/`), or make pt-BR the default?
4. Blog: light rewrite (this PRD) or full re-do of the 6 articles?

## 12. Execution plan (after PRD approval)

- **Phase 1:** EN master — homepage + SEO meta + FAQ (brand reword, §6–§7).
- **Phase 2:** EN — tool pages + category hubs + about/howto/blog (brand reword).
- **Phase 3:** Propagate brand reword to 9 locales (+ pt-BR quality pass).
- **Phase 4:** NEW — calculator-first expansion: URL structure + tools (§13–§16).
- **Phase 5:** QA — build, i18n check, SEO audit, browser spot-check, commit + push.

---

## 13. New URL structure (calculator-first)

Old comparison URLs (`/height-comparison-*`, `/compare`, category hubs) **stay live** — unko delete/redirect karne se existing SEO equity jal jayegi. Naya calculator section **alag taxonomy** me banega aur homepage/nav me **primary** banega; comparison section secondary me shift hoga.

### 13.1 Proposed URL map (EN)

| Keyword cluster | New URL | Page / tool |
|---|---|---|
| height calculator | `/height-calculator/` | Hub page — sab calculators ka index |
| height calculator boys | `/height-calculator/boys/` | Boys height calculator (age + height input → analysis) |
| height calculator girls | `/height-calculator/girls/` | Girls height calculator |
| height calculator boys and girls | `/height-calculator/boys/` + `/girls/` (hub links both) | Comparison view boys vs girls |
| height calculator boys percentile | `/height-calculator/boys-percentile/` | Percentile calculator (CDC/WHO/UK-WHO switcher) |
| height calculator girls percentile | `/height-calculator/girls-percentile/` | Percentile calculator |
| height calculator boys based on parents | `/height-calculator/child-height-predictor/` | Mid-parental height predictor (parents' heights → predicted adult height + range) |
| height calculator boys parents | `/height-calculator/child-height-predictor/` (section) | Same tool, parents-focused copy |
| height calculator boys chart | `/height-calculator/boys-chart/` | Boys growth chart (interactive, CDC/WHO curves) |
| height calculator girls chart | `/height-calculator/girls-chart/` | Girls growth chart |
| height calculator baby | `/height-calculator/baby/` | Baby height (0–24 months, WHO standards) |
| height calculator boys uk | `/height-calculator/uk/boys-percentile/` | UK-WHO charts version |
| height calculator boys cdc | `/height-calculator/boys-percentile/` (CDC tab default) | CDC tab pre-selected |
| height calculator boys most accurate | content angle, no separate URL | "How accurate" section inside predictor/percentile pages |

### 13.2 Site hierarchy

```
/height-calculator/            (hub)
├── /boys/                     (boys calculator)
├── /girls/                    (girls calculator)
├── /baby/                     (baby 0–24m)
├── /boys-percentile/          (percentile, CDC/WHO/UK-WHO)
├── /girls-percentile/
├── /child-height-predictor/   (parents-based prediction)
├── /boys-chart/               (growth chart)
├── /girls-chart/
└── /uk/boys-percentile/       (UK-WHO version)
```

Nav order: **Height Calculator hub → Compare tool → Charts → Categories → Blog**. Homepage hero ab calculator hub ko promote karega.

## 14. New tools to build

### 14.1 Child height predictor (`/height-calculator/child-height-predictor/`)
- Inputs: father's height, mother's height, child's sex (boy/girl).
- Formula: **mid-parental height** — boys: `(father + mother + 13) / 2` cm; girls: `(father − 13 + mother) / 2` cm; ±8.5 cm range band dikhana hai.
- Output: predicted adult height + likely range + plain-language explanation.
- "Most accurate" angle: honest note — prediction ±8.5 cm tak vary karti hai, koi method 100% accurate nahi.

### 14.2 Percentile calculator (`/boys-percentile/`, `/girls-percentile/`)
- Inputs: age (months/years), sex, height.
- Output: percentile + z-score + "taller than X% of peers" + curve position.
- Standard switcher: **CDC (2–20y, US) | WHO (0–5y) | UK-WHO**.
- **DATA REQUIREMENT (critical):** real LMS parameter tables chahiye — CDC 2000 growth charts (boys/girls stature-for-age 2–20y), WHO Child Growth Standards (0–5y length/height-for-age), UK-WHO charts. Ye data **official published tables se aayega, fabricate nahi hoga**. Tables repo me `src/data/growth/` me versioned JSON ke roop me store honge, source + retrieval date ke saath.

### 14.3 Growth charts (`/boys-chart/`, `/girls-chart/`)
- Interactive percentile curves (3rd–97th) from the same real LMS data (§14.2).
- User apna point plot kar sake.

### 14.4 Baby calculator (`/height-calculator/baby/`)
- 0–24 months, WHO standards, length-for-age. Same LMS engine as §14.2.

### 14.5 Boys/Girls calculator pages (`/boys/`, `/girls/`)
- Age-wise hub: quick height check + links to percentile/chart/predictor. Thin page nahi banegi — har page par real tool ya interactive element hoga.

## 15. Honesty & compliance requirements (non-negotiable)

1. **Medical disclaimer** har calculator page par, tool se pehle visible: ye educational estimates hain, medical advice nahi — concerns ho to pediatrician se consult karo.
2. **No fabricated data:** percentile/growth numbers sirf official CDC/WHO/UK-WHO published tables se. Koi synthetic curve nahi.
3. **"Most accurate" claims:** koi bhi page ye claim nahi karega ki prediction 100% accurate hai — range + limitations hamesha saath me.
4. Existing honesty rules (no fake reviewers/testimonials/stats) continue.

## 16. SEO plan for new section

- Har naya URL: unique title/desc/H1 targeting apna keyword cluster (§13.1 table), EN me launch.
- Internal linking: hub ↔ tool pages ↔ relevant blog/category pages; homepage se hub ko prominent link.
- Sitemap: naye URLs auto-include (existing sitemap pipeline).
- Purane comparison URLs: untouched (no redirects) — equity safe. Agar baad me koi 1:1 replacement banta hai to 301 tab decide hoga, abhi nahi.
- Launch order: **EN first** (keywords English hain) → phir pt-BR + baaki locales (decide §17.3).

## 17. Updated open decisions for Firoz

1. ✅ Direction: **Option B confirmed** (calculator-first) — §13–§16 ke hisaab se.
2. Tagline: A1 / A2 / A3 / apna koi? (ab calculator-first context me — naya tagline bhi suggest kar sakta hoon)
3. Naye calculator pages: **EN-first launch** ya day-one sab 10 locales me?
4. Purane comparison pages: hamesha live rakhein (recommended) ya kuch ko 301 karke naye URLs me merge karein?
5. `/height-calculator/` hub ka design: existing homepage style me ya alag calculator-focused layout?
