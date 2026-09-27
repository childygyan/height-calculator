# Production Indexability Fix: Removal of Accidental X-Robots-Tag

**Target URL:** `https://height-calculator.net/`  
**Date of Remediation:** September 19, 2026  
**Status:** RESOLVED & VERIFIED LIVE ON PRODUCTION

---

## 1. Exact Source of `X-Robots-Tag: noindex`

The `X-Robots-Tag: noindex` HTTP response header was emitted by Cloudflare Pages edge servers serving requests to `height-calculator.net`.

During previous troubleshooting sessions, an attempt to prevent indexing of the Cloudflare Pages staging/preview domain (`height-calculator.pages.dev`) added a global wildcard rule into the `_headers` file. Because Cloudflare Pages reads `_headers` for **all** attached domains unless explicitly restricted by hostname patterns, that header was applied uniformly to every incoming request, including those directed to the authoritative production domain `height-calculator.net`.

Google Search Console crawled `https://height-calculator.net/` while this rule was active, correctly detecting the HTTP header:
```
Page cannot be indexed: Excluded by 'noindex' tag
Indexing allowed? NO
Reason: 'noindex' detected in 'X-Robots-Tag' HTTP header
```

---

## 2. File and Rule Responsible

- **File Responsible:** `public/_headers` (copied to `dist/_headers` during build).
- **Offending Rule (Prior):**
  ```headers
  /*
    X-Robots-Tag: noindex, nofollow
  ```
  *(and subsequent unconstrained wildcard headers applied globally across all hostnames)*

---

## 3. Why It Affected `height-calculator.net`

Cloudflare Pages attaches all custom domains (`height-calculator.net`, `www.height-calculator.net`) and default project subdomains (`height-calculator.pages.dev`, `*.pages.dev`) to the exact same deployment.

When a header rule uses the root path pattern `/*` without a domain prefix:
```headers
/*
  X-Robots-Tag: noindex
```
Cloudflare Pages matches **any** hostname serving that project. Consequently, both the staging URL and the live production domain received the identical response header.

---

## 4. Changes Made

We refactored `public/_headers` to utilize Cloudflare Pages' official **hostname-specific matching pattern**.

### Modernized `public/_headers` Architecture:
```headers
# ==============================================================================
# Cloudflare Pages Domain-Specific Headers: Height Calculator
# ==============================================================================

# Production Custom Domain (Authoritative & Indexable)
https://height-calculator.net/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

https://www.height-calculator.net/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

# Cloudflare Pages Preview Domain & Subdomains (Strictly Non-Indexable)
https://height-calculator.pages.dev/*
  X-Robots-Tag: noindex, nofollow

https://:project.pages.dev/*
  X-Robots-Tag: noindex, nofollow

# Static Hashed Assets (1 year immutable)
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

# Static Public Assets (1 day revalidation)
/assets/*
  Cache-Control: public, max-age=86400, must-revalidate
```

### Key Technical Improvements:
1. **Domain-Specific Targeting:** Production `https://height-calculator.net/*` explicitly receives `X-Robots-Tag: all` and `Cache-Control: public, max-age=0, must-revalidate`.
2. **Preview Isolation:** `https://height-calculator.pages.dev/*` and `https://:project.pages.dev/*` receive `X-Robots-Tag: noindex, nofollow`.
3. **No Global Wildcard `X-Robots-Tag`:** Eliminated `/* X-Robots-Tag: noindex` so the custom domain can never accidentally inherit a blocking directive.
4. **Asset Protection:** Kept `/_astro/*` and `/assets/*` rules intact so stylesheets and client JavaScript load with HTTP 200 and immutable caching.

---

## 5. Production Header Before vs After

| Header Name | Before (GSC Failure) | After (Remediated Live) |
| :--- | :--- | :--- |
| **HTTP Status** | `200 OK` | `200 OK` |
| **`X-Robots-Tag`** | `noindex` *(or `noindex, nofollow`)* | **`all`** *(Indexable & Followable)* |
| **`Cache-Control`** | `public, s-maxage=604800` *(stale cache)* | **`public, max-age=0, must-revalidate`** |
| **HTML `<meta name="robots">`** | *None on index page* | **None on public pages** *(Clean)* |
| **User-Declared Canonical** | `https://height-calculator.net/` | **`https://height-calculator.net/`** |

---

## 6. Cloudflare Pages (`pages.dev`) Behavior

The preview domain is strictly prevented from being indexed:
1. **HTTP Response Header:** Matches `https://height-calculator.pages.dev/*` rule, emitting `X-Robots-Tag: noindex, nofollow`.
2. **Client-Side Hostname Guard:** An inline script in `Layout.astro` detects `window.location.hostname` ending in `.pages.dev` and synchronously creates and appends `<meta name="robots" content="noindex, nofollow">` into the DOM.
3. **Cross-Domain Canonical:** Canonical tags on `pages.dev` continue to declare `https://height-calculator.net/...` as the authoritative source.

---

## 7. Canonical URL Verification

All canonical links on the production website are verified:
- `https://height-calculator.net/` → `<link rel="canonical" href="https://height-calculator.net/" />`
- `https://height-calculator.net/compare/` → `<link rel="canonical" href="https://height-calculator.net/compare/" />`
- `https://height-calculator.net/celebrity-height-comparison/` → `<link rel="canonical" href="https://height-calculator.net/celebrity-height-comparison/" />`
- **Guarantees:** Always ends with trailing slash `/`, strips tracking query params (`?utm_*`), and strips anchor fragments (`#*`).

---

## 8. Sitemap Verification

- File: `https://height-calculator.net/sitemap.xml`
- Output: 100% of all `<loc>` entries point to `https://height-calculator.net/...`.
- Status: **Zero** mentions of `pages.dev`.
- Accessible and returning HTTP `200 OK`.

---

## 9. Robots.txt Verification

- File: `https://height-calculator.net/robots.txt`
- Contents:
  ```text
  User-agent: *
  Allow: /
  Disallow: /dashboard/
  Disallow: /api/
  Disallow: /compare/share/

  Sitemap: https://height-calculator.net/sitemap.xml
  ```
- Status: Crawling is **allowed** for the entire public website. Only private application routes (`/dashboard/`, `/api/`, `/compare/share/`) are disallowed.

---

## 10. Multilingual Hreflang Verification

- Every alternate hreflang tag explicitly points to `https://height-calculator.net/` (e.g. `https://height-calculator.net/hi/compare/`).
- Verified: Zero references to `pages.dev` in alternate links.
- Error pages (`404.astro`) omit alternate hreflang tags to avoid indexing dead language routes.

---

## 11. Automated Test Suite Results (24/24 Passed)

Execution command: `npm run test:seo`

```
===============================================================
🧪 RUNNING HEIGHT_CALCULATOR.ORG DOMAIN SEO & CANONICAL AUDIT MATRIX
===============================================================

--- Test Group 1: SEO Hostname & Canonical Utilities ---
  ✅ [PASS] 1. isProductionHost returns true for height-calculator.net
  ✅ [PASS] 2. isProductionHost returns true for www.height-calculator.net
  ✅ [PASS] 3. isProductionHost returns false for height-calculator.pages.dev
  ✅ [PASS] 4. isPreviewHost returns true for height-calculator.pages.dev and hash.pages.dev
  ✅ [PASS] 5. isPreviewHost returns false for height-calculator.net
  ✅ [PASS] 6. isIndexableHost returns true for production and false for preview
  ✅ [PASS] 7. getCanonicalUrl produces absolute canonical with trailing slash
  ✅ [PASS] 8. getCanonicalUrl strips query parameters (?utm_source=..., etc.)
  ✅ [PASS] 9. getCanonicalUrl strips hash fragments (#canvas, etc.)
  ✅ [PASS] 10. getCanonicalUrl formats localized paths correctly with trailing slashes

--- Test Group 2: Edge Routing & CDN Headers ---
  ✅ [PASS] 11. public/_redirects routes height-calculator.pages.dev to height-calculator.net
  ✅ [PASS] 12. public/_headers enforces domain-specific rules (all for prod, noindex for pages.dev)
  ✅ [PASS] 13. public/robots.txt points to https://height-calculator.net/sitemap.xml and no pages.dev

--- Test Group 3: Layout & Template Safeguards ---
  ✅ [PASS] 14. src/layouts/Layout.astro includes hostname-aware client script
  ✅ [PASS] 15. src/layouts/Layout.astro conditionally suppresses canonicalUrl when noindex is true
  ✅ [PASS] 16. src/layouts/Layout.astro conditionally suppresses hreflang when noindex is true
  ✅ [PASS] 17. src/pages/404.astro sets noindex={true}

--- Test Group 4: Production Build Output Inspection (dist) ---
  ✅ [PASS] 18. dist/index.html does NOT contain static <meta name="robots" content="noindex
  ✅ [PASS] 19. dist/404.html DOES contain static noindex and DOES NOT contain canonical tag
  ✅ [PASS] 20. dist/compare/index.html has production self-canonical and no static noindex
  ✅ [PASS] 21. Canonical tags across sample built pages all use https://height-calculator.net and end with /
  ✅ [PASS] 22. Hreflang tags across sample built pages only reference https://height-calculator.net
  ✅ [PASS] 23. Sitemap files contain zero references to pages.dev
  ✅ [PASS] 24. No public content HTML file in dist contains static noindex

===============================================================
📊 TEST RESULTS: 24 PASSED, 0 FAILED
===============================================================
```

---

## 12. Final Deployment & Live Production Verification

Deployed to Cloudflare Pages production (`--branch=main`).

### Live Endpoint Check Output:
- **`https://height-calculator.net/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - `Cache-Control`: `public, max-age=0, must-revalidate`
  - Static noindex in HTML: `false`
  - Canonical: `https://height-calculator.net/`
- **`https://height-calculator.net/celebrity-height-comparison/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - Canonical: `https://height-calculator.net/celebrity-height-comparison/`
- **`https://height-calculator.pages.dev/`:**
  - Injected Client Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical Target: `https://height-calculator.net/`
- **`https://height-calculator.net/404/`:**
  - Status: `200 OK` (Serves custom 404 document)
  - Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical: Omitted
- **CSS & JS Static Chunks:**
  - `/_astro/index.*.css` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
  - `/_astro/hoisted.*.js` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
