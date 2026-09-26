# Production Indexability Fix: Removal of Accidental X-Robots-Tag

**Target URL:** `https://comparacaodealtura.com/`  
**Date of Remediation:** September 19, 2026  
**Status:** RESOLVED & VERIFIED LIVE ON PRODUCTION

---

## 1. Exact Source of `X-Robots-Tag: noindex`

The `X-Robots-Tag: noindex` HTTP response header was emitted by Cloudflare Pages edge servers serving requests to `comparacaodealtura.com`.

During previous troubleshooting sessions, an attempt to prevent indexing of the Cloudflare Pages staging/preview domain (`comparacaodealtura.pages.dev`) added a global wildcard rule into the `_headers` file. Because Cloudflare Pages reads `_headers` for **all** attached domains unless explicitly restricted by hostname patterns, that header was applied uniformly to every incoming request, including those directed to the authoritative production domain `comparacaodealtura.com`.

Google Search Console crawled `https://comparacaodealtura.com/` while this rule was active, correctly detecting the HTTP header:
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

## 3. Why It Affected `comparacaodealtura.com`

Cloudflare Pages attaches all custom domains (`comparacaodealtura.com`, `www.comparacaodealtura.com`) and default project subdomains (`comparacaodealtura.pages.dev`, `*.pages.dev`) to the exact same deployment.

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
# Cloudflare Pages Domain-Specific Headers: Comparação de Altura
# ==============================================================================

# Production Custom Domain (Authoritative & Indexable)
https://comparacaodealtura.com/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

https://www.comparacaodealtura.com/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

# Cloudflare Pages Preview Domain & Subdomains (Strictly Non-Indexable)
https://comparacaodealtura.pages.dev/*
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
1. **Domain-Specific Targeting:** Production `https://comparacaodealtura.com/*` explicitly receives `X-Robots-Tag: all` and `Cache-Control: public, max-age=0, must-revalidate`.
2. **Preview Isolation:** `https://comparacaodealtura.pages.dev/*` and `https://:project.pages.dev/*` receive `X-Robots-Tag: noindex, nofollow`.
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
| **User-Declared Canonical** | `https://comparacaodealtura.com/` | **`https://comparacaodealtura.com/`** |

---

## 6. Cloudflare Pages (`pages.dev`) Behavior

The preview domain is strictly prevented from being indexed:
1. **HTTP Response Header:** Matches `https://comparacaodealtura.pages.dev/*` rule, emitting `X-Robots-Tag: noindex, nofollow`.
2. **Client-Side Hostname Guard:** An inline script in `Layout.astro` detects `window.location.hostname` ending in `.pages.dev` and synchronously creates and appends `<meta name="robots" content="noindex, nofollow">` into the DOM.
3. **Cross-Domain Canonical:** Canonical tags on `pages.dev` continue to declare `https://comparacaodealtura.com/...` as the authoritative source.

---

## 7. Canonical URL Verification

All canonical links on the production website are verified:
- `https://comparacaodealtura.com/` → `<link rel="canonical" href="https://comparacaodealtura.com/" />`
- `https://comparacaodealtura.com/compare/` → `<link rel="canonical" href="https://comparacaodealtura.com/compare/" />`
- `https://comparacaodealtura.com/celebrity-height-comparison/` → `<link rel="canonical" href="https://comparacaodealtura.com/celebrity-height-comparison/" />`
- **Guarantees:** Always ends with trailing slash `/`, strips tracking query params (`?utm_*`), and strips anchor fragments (`#*`).

---

## 8. Sitemap Verification

- File: `https://comparacaodealtura.com/sitemap.xml`
- Output: 100% of all `<loc>` entries point to `https://comparacaodealtura.com/...`.
- Status: **Zero** mentions of `pages.dev`.
- Accessible and returning HTTP `200 OK`.

---

## 9. Robots.txt Verification

- File: `https://comparacaodealtura.com/robots.txt`
- Contents:
  ```text
  User-agent: *
  Allow: /
  Disallow: /dashboard/
  Disallow: /api/
  Disallow: /compare/share/

  Sitemap: https://comparacaodealtura.com/sitemap.xml
  ```
- Status: Crawling is **allowed** for the entire public website. Only private application routes (`/dashboard/`, `/api/`, `/compare/share/`) are disallowed.

---

## 10. Multilingual Hreflang Verification

- Every alternate hreflang tag explicitly points to `https://comparacaodealtura.com/` (e.g. `https://comparacaodealtura.com/hi/compare/`).
- Verified: Zero references to `pages.dev` in alternate links.
- Error pages (`404.astro`) omit alternate hreflang tags to avoid indexing dead language routes.

---

## 11. Automated Test Suite Results (24/24 Passed)

Execution command: `npm run test:seo`

```
===============================================================
🧪 RUNNING COMPARACAODEALTURA.ORG DOMAIN SEO & CANONICAL AUDIT MATRIX
===============================================================

--- Test Group 1: SEO Hostname & Canonical Utilities ---
  ✅ [PASS] 1. isProductionHost returns true for comparacaodealtura.com
  ✅ [PASS] 2. isProductionHost returns true for www.comparacaodealtura.com
  ✅ [PASS] 3. isProductionHost returns false for comparacaodealtura.pages.dev
  ✅ [PASS] 4. isPreviewHost returns true for comparacaodealtura.pages.dev and hash.pages.dev
  ✅ [PASS] 5. isPreviewHost returns false for comparacaodealtura.com
  ✅ [PASS] 6. isIndexableHost returns true for production and false for preview
  ✅ [PASS] 7. getCanonicalUrl produces absolute canonical with trailing slash
  ✅ [PASS] 8. getCanonicalUrl strips query parameters (?utm_source=..., etc.)
  ✅ [PASS] 9. getCanonicalUrl strips hash fragments (#canvas, etc.)
  ✅ [PASS] 10. getCanonicalUrl formats localized paths correctly with trailing slashes

--- Test Group 2: Edge Routing & CDN Headers ---
  ✅ [PASS] 11. public/_redirects routes comparacaodealtura.pages.dev to comparacaodealtura.com
  ✅ [PASS] 12. public/_headers enforces domain-specific rules (all for prod, noindex for pages.dev)
  ✅ [PASS] 13. public/robots.txt points to https://comparacaodealtura.com/sitemap.xml and no pages.dev

--- Test Group 3: Layout & Template Safeguards ---
  ✅ [PASS] 14. src/layouts/Layout.astro includes hostname-aware client script
  ✅ [PASS] 15. src/layouts/Layout.astro conditionally suppresses canonicalUrl when noindex is true
  ✅ [PASS] 16. src/layouts/Layout.astro conditionally suppresses hreflang when noindex is true
  ✅ [PASS] 17. src/pages/404.astro sets noindex={true}

--- Test Group 4: Production Build Output Inspection (dist) ---
  ✅ [PASS] 18. dist/index.html does NOT contain static <meta name="robots" content="noindex
  ✅ [PASS] 19. dist/404.html DOES contain static noindex and DOES NOT contain canonical tag
  ✅ [PASS] 20. dist/compare/index.html has production self-canonical and no static noindex
  ✅ [PASS] 21. Canonical tags across sample built pages all use https://comparacaodealtura.com and end with /
  ✅ [PASS] 22. Hreflang tags across sample built pages only reference https://comparacaodealtura.com
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
- **`https://comparacaodealtura.com/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - `Cache-Control`: `public, max-age=0, must-revalidate`
  - Static noindex in HTML: `false`
  - Canonical: `https://comparacaodealtura.com/`
- **`https://comparacaodealtura.com/celebrity-height-comparison/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - Canonical: `https://comparacaodealtura.com/celebrity-height-comparison/`
- **`https://comparacaodealtura.pages.dev/`:**
  - Injected Client Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical Target: `https://comparacaodealtura.com/`
- **`https://comparacaodealtura.com/404/`:**
  - Status: `200 OK` (Serves custom 404 document)
  - Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical: Omitted
- **CSS & JS Static Chunks:**
  - `/_astro/index.*.css` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
  - `/_astro/hoisted.*.js` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
