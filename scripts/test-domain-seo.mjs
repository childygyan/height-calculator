/**
 * Automated Domain SEO & Canonical Audit Test Matrix
 * Verifies all 24 SEO criteria for comparacaodealtura.com vs Cloudflare Pages preview domain.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

let passedTests = 0;
let failedTests = 0;

function runTest(testName, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${testName}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${testName}`);
    console.error(`     Error: ${err.message}`);
    failedTests++;
  }
}

console.log('\n===============================================================');
console.log('🧪 RUNNING COMPARACAODEALTURA.ORG DOMAIN SEO & CANONICAL AUDIT MATRIX');
console.log('===============================================================\n');

// -----------------------------------------------------------------
// Test Group 1: Unit Tests for src/lib/seo/site.ts
// -----------------------------------------------------------------
console.log('--- Test Group 1: SEO Hostname & Canonical Utilities ---');

import { isProductionHost, isPreviewHost, isIndexableHost, getCanonicalUrl } from '../src/lib/seo/site.ts';

runTest('1. isProductionHost returns true for comparacaodealtura.com', () => {
  assert.strictEqual(isProductionHost('comparacaodealtura.com'), true);
});

runTest('2. isProductionHost returns true for www.comparacaodealtura.com', () => {
  assert.strictEqual(isProductionHost('www.comparacaodealtura.com'), true);
});

runTest('3. isProductionHost returns false for comparacaodealtura.pages.dev', () => {
  assert.strictEqual(isProductionHost('comparacaodealtura.pages.dev'), false);
});

runTest('4. isPreviewHost returns true for comparacaodealtura.pages.dev and hash.pages.dev', () => {
  assert.strictEqual(isPreviewHost('comparacaodealtura.pages.dev'), true);
  assert.strictEqual(isPreviewHost('abc123-branch.pages.dev'), true);
});

runTest('5. isPreviewHost returns false for comparacaodealtura.com', () => {
  assert.strictEqual(isPreviewHost('comparacaodealtura.com'), false);
  assert.strictEqual(isPreviewHost('www.comparacaodealtura.com'), false);
});

runTest('6. isIndexableHost returns true for production and false for preview', () => {
  assert.strictEqual(isIndexableHost('comparacaodealtura.com'), true);
  assert.strictEqual(isIndexableHost('comparacaodealtura.pages.dev'), false);
  assert.strictEqual(isIndexableHost('deploy-preview-1.pages.dev'), false);
});

runTest('7. getCanonicalUrl produces absolute canonical with trailing slash', () => {
  const url = getCanonicalUrl('/celebrity-height-comparison');
  assert.strictEqual(url, 'https://comparacaodealtura.com/celebrity-height-comparison/');
});

runTest('8. getCanonicalUrl strips query parameters (?utm_source=..., etc.)', () => {
  const url = getCanonicalUrl('/compare/?utm_source=twitter&utm_medium=social');
  assert.strictEqual(url, 'https://comparacaodealtura.com/compare/');
});

runTest('9. getCanonicalUrl strips hash fragments (#canvas, etc.)', () => {
  const url = getCanonicalUrl('/compare/#canvas');
  assert.strictEqual(url, 'https://comparacaodealtura.com/compare/');
});

runTest('10. getCanonicalUrl formats localized paths correctly with trailing slashes', () => {
  const url = getCanonicalUrl('/compare/', 'hi');
  assert.strictEqual(url, 'https://comparacaodealtura.com/hi/compare/');
  const defaultLangUrl = getCanonicalUrl('/compare/', 'en');
  assert.strictEqual(defaultLangUrl, 'https://comparacaodealtura.com/compare/');
});

// -----------------------------------------------------------------
// Test Group 2: Configuration & Edge Rules Verification
// -----------------------------------------------------------------
console.log('\n--- Test Group 2: Edge Routing & CDN Headers ---');

runTest('11. public/_redirects routes comparacaodealtura.pages.dev to comparacaodealtura.com', () => {
  const redirectsPath = path.resolve(rootDir, 'public/_redirects');
  assert(fs.existsSync(redirectsPath), '_redirects file must exist');
  const content = fs.readFileSync(redirectsPath, 'utf-8');
  assert(content.includes('https://comparacaodealtura.pages.dev/*  https://comparacaodealtura.com/:splat  301'), 'Must have https://comparacaodealtura.pages.dev/* 301 rule');
  assert(content.includes('http://comparacaodealtura.pages.dev/*   https://comparacaodealtura.com/:splat  301'), 'Must have http://comparacaodealtura.pages.dev/* 301 rule');
});

runTest('12. public/_headers enforces domain-specific rules (all for prod, noindex for pages.dev)', () => {
  const headersPath = path.resolve(rootDir, 'public/_headers');
  assert(fs.existsSync(headersPath), '_headers file must exist');
  const content = fs.readFileSync(headersPath, 'utf-8');
  assert(content.includes('https://comparacaodealtura.com/*'), 'Must have specific rule for comparacaodealtura.com');
  assert(content.includes('https://comparacaodealtura.pages.dev/*'), 'Must have specific rule for comparacaodealtura.pages.dev');
  assert(content.includes('X-Robots-Tag: all'), 'Must allow indexing on production headers');
  assert(content.includes('X-Robots-Tag: noindex, nofollow'), 'Must block indexing on pages.dev headers');
  assert(!content.match(/^\/\*\s*\r?\n\s*X-Robots-Tag:\s*noindex/m), 'Must NOT have global /* noindex rule');
  assert(content.includes('/_astro/*'), 'Must include /_astro/* cache rule');
  assert(content.includes('max-age=31536000, immutable'), 'Must have immutable caching for _astro chunks');
  assert(content.includes('/assets/*'), 'Must include /assets/* cache rule');
});

runTest('13. public/robots.txt points to https://comparacaodealtura.com/sitemap.xml and no pages.dev', () => {
  const robotsPath = path.resolve(rootDir, 'public/robots.txt');
  assert(fs.existsSync(robotsPath), 'robots.txt must exist');
  const content = fs.readFileSync(robotsPath, 'utf-8');
  assert(content.includes('Sitemap: https://comparacaodealtura.com/sitemap.xml'), 'Sitemap must be comparacaodealtura.com');
  assert(!content.includes('pages.dev'), 'robots.txt must not contain pages.dev');
});

// -----------------------------------------------------------------
// Test Group 3: Layout & Template Source Checks
// -----------------------------------------------------------------
console.log('\n--- Test Group 3: Layout & Template Safeguards ---');

runTest('14. src/layouts/Layout.astro includes hostname-aware client script', () => {
  const layoutPath = path.resolve(rootDir, 'src/layouts/Layout.astro');
  const content = fs.readFileSync(layoutPath, 'utf-8');
  assert(content.includes('comparacaodealtura.pages.dev'), 'Must detect comparacaodealtura.pages.dev');
  assert(content.includes('document.createElement(\'meta\')'), 'Must create meta tag dynamically on pages.dev');
  assert(content.includes('m.content = \'noindex, nofollow\''), 'Must set noindex, nofollow on preview domain');
});

runTest('15. src/layouts/Layout.astro conditionally suppresses canonicalUrl when noindex is true', () => {
  const layoutPath = path.resolve(rootDir, 'src/layouts/Layout.astro');
  const content = fs.readFileSync(layoutPath, 'utf-8');
  assert(content.includes('canonicalUrl = noindex ? undefined : defaultCanonical'), 'canonicalUrl must be undefined when noindex is true');
  assert(content.includes('{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}'), 'Canonical tag must only render if canonicalUrl exists');
});

runTest('16. src/layouts/Layout.astro conditionally suppresses hreflang when noindex is true', () => {
  const layoutPath = path.resolve(rootDir, 'src/layouts/Layout.astro');
  const content = fs.readFileSync(layoutPath, 'utf-8');
  assert(content.includes('alternateLinks = noindex ? [] : getAlternateLocaleLinks(currentPath)'), 'alternateLinks must be empty when noindex is true');
});

runTest('17. src/pages/404.astro sets noindex={true}', () => {
  const p404Path = path.resolve(rootDir, 'src/pages/404.astro');
  const content = fs.readFileSync(p404Path, 'utf-8');
  assert(content.includes('noindex={true}'), '404 page must pass noindex={true} to Layout');
});

// -----------------------------------------------------------------
// Test Group 4: Build Output Validation (dist/)
// -----------------------------------------------------------------
console.log('\n--- Test Group 4: Production Build Output Inspection (dist) ---');

if (fs.existsSync(distDir)) {
  runTest('18. dist/index.html does NOT contain static <meta name="robots" content="noindex', () => {
    const indexPath = path.resolve(distDir, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');
    assert(!content.includes('<meta name="robots" content="noindex'), 'Production homepage must NOT have static noindex');
    assert(content.includes('<link rel="canonical" href="https://comparacaodealtura.com/"'), 'Production homepage must have self-canonical');
  });

  runTest('19. dist/404.html DOES contain static noindex and DOES NOT contain canonical tag', () => {
    const p404Path = path.resolve(distDir, '404.html');
    const content = fs.readFileSync(p404Path, 'utf-8');
    assert(content.includes('<meta name="robots" content="noindex, nofollow"'), '404.html must have static noindex');
    assert(!content.includes('<link rel="canonical"'), '404.html must NOT have a canonical tag');
    assert(!content.includes('<link rel="alternate" hreflang='), '404.html must NOT have alternate hreflang tags');
  });

  runTest('20. dist/compare/index.html has production self-canonical, h1 tag, and no static noindex', () => {
    const comparePath = path.resolve(distDir, 'compare/index.html');
    if (fs.existsSync(comparePath)) {
      const content = fs.readFileSync(comparePath, 'utf-8');
      assert(!content.includes('<meta name="robots" content="noindex'), 'Compare page must NOT have static noindex');
      assert(content.includes('<link rel="canonical" href="https://comparacaodealtura.com/compare/"'), 'Compare page must have self-canonical');
      assert(content.includes('<h1') && content.includes('Height Comparison Tool'), 'Compare page must contain <h1> tag with Height Comparison Tool');
    } else {
      console.log('       (Notice: dist/compare/index.html not found, will verify after rebuild)');
    }
  });

  runTest('21. Canonical tags across sample built pages all use https://comparacaodealtura.com and end with /', () => {
    const sampleFiles = [
      'index.html',
      'about/index.html',
      'contact/index.html',
      'celebrity-height-comparison/index.html'
    ];
    for (const rel of sampleFiles) {
      const p = path.resolve(distDir, rel);
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        const match = content.match(/<link rel="canonical" href="([^"]+)"/);
        assert(match, `Canonical tag must exist in ${rel}`);
        assert(match[1].startsWith('https://comparacaodealtura.com/'), `Canonical URL must start with https://comparacaodealtura.com/ in ${rel}`);
        assert(match[1].endsWith('/'), `Canonical URL must end with trailing slash in ${rel}`);
      }
    }
  });

  runTest('22. Hreflang tags across sample built pages only reference https://comparacaodealtura.com', () => {
    const indexPath = path.resolve(distDir, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');
    const hreflangMatches = [...content.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)];
    assert(hreflangMatches.length > 0, 'Homepage must have hreflang tags');
    for (const m of hreflangMatches) {
      assert(m[1].startsWith('https://comparacaodealtura.com/'), `Hreflang href must start with https://comparacaodealtura.com/, got: ${m[1]}`);
      assert(!m[1].includes('pages.dev'), `Hreflang href must not contain pages.dev: ${m[1]}`);
    }
  });

  runTest('23. Sitemap files contain zero references to pages.dev', () => {
    const sitemapFiles = fs.readdirSync(distDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
    assert(sitemapFiles.length > 0, 'At least one sitemap file must exist');
    for (const sf of sitemapFiles) {
      const content = fs.readFileSync(path.resolve(distDir, sf), 'utf-8');
      assert(!content.includes('pages.dev'), `${sf} must not contain pages.dev`);
      assert(content.includes('https://comparacaodealtura.com'), `${sf} must contain https://comparacaodealtura.com`);
    }
  });

  runTest('24. No public content HTML file in dist contains static noindex', () => {
    const allowedNoindex = new Set(['404.html', path.normalize('dashboard/index.html')]);
    function checkDir(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const ent of entries) {
        const fullPath = path.join(dir, ent.name);
        const relPath = path.relative(distDir, fullPath);
        if (ent.isDirectory()) {
          checkDir(fullPath);
        } else if (ent.isFile() && ent.name.endsWith('.html') && !allowedNoindex.has(path.normalize(relPath))) {
          const text = fs.readFileSync(fullPath, 'utf-8');
          if (text.includes('<meta name="robots" content="noindex')) {
            throw new Error(`Unexpected static noindex found in ${relPath}`);
          }
        }
      }
    }
    checkDir(distDir);
  });

} else {
  console.log('       (dist directory not found yet; skipping dist verification until build)');
}

console.log('\n===============================================================');
console.log(`📊 TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('===============================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
