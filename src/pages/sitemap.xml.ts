import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALES } from '../i18n/locales';
import { getLocalizedPath } from '../i18n/utils';

interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
  alternates: Array<{ hreflang: string; href: string }>;
}

export const GET: APIRoute = async () => {
  const baseUrl = SITE.siteUrl;
  const today = new Date().toISOString().split('T')[0];

  const allEntries: SitemapEntry[] = [];

  // ============================================================================
  // 1. MULTILINGUAL CORE ROUTES (Available in all supported locales)
  //    Phase 1 repositioning: comparison, category, entity, and blog routes removed.
  // ============================================================================
  const multilingualRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/how-to-use/', priority: '0.85', changefreq: 'weekly' },
    { path: '/about/', priority: '0.7', changefreq: 'monthly' },
  ];

  for (const route of multilingualRoutes) {
    // Generate valid reciprocal alternates for all supported locales
    const alternates = SUPPORTED_LOCALES.map((locale) => ({
      hreflang: LOCALES[locale].hreflang,
      href: `${baseUrl}${getLocalizedPath(route.path, locale)}`,
    }));

    // Add x-default pointing to canonical English URL
    alternates.push({
      hreflang: 'x-default',
      href: `${baseUrl}${getLocalizedPath(route.path, DEFAULT_LOCALE)}`,
    });

    for (const locale of SUPPORTED_LOCALES) {
      allEntries.push({
        loc: `${baseUrl}${getLocalizedPath(route.path, locale)}`,
        priority: locale === DEFAULT_LOCALE ? route.priority : (parseFloat(route.priority) * 0.95).toFixed(2),
        changefreq: route.changefreq,
        alternates,
      });
    }
  }

  // ============================================================================
  // 2. ENGLISH-ONLY ROUTES (Authoritative legal & trust pages, no 404 alternates)
  // ============================================================================
  const englishOnlyRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
    { path: '/privacy/', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms/', priority: '0.5', changefreq: 'yearly' },
    { path: '/contact/', priority: '0.6', changefreq: 'monthly' },
    // Phase 3b: EN-only /height-calculator/ tool section (calculator hub + 9 tools)
    { path: '/height-calculator/', priority: '0.9', changefreq: 'weekly' },
    { path: '/height-calculator/boys/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/girls/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/baby/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/boys-percentile/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/girls-percentile/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/child-height-predictor/', priority: '0.8', changefreq: 'monthly' },
    { path: '/height-calculator/boys-chart/', priority: '0.75', changefreq: 'monthly' },
    { path: '/height-calculator/girls-chart/', priority: '0.75', changefreq: 'monthly' },
    { path: '/height-calculator/uk/boys-percentile/', priority: '0.7', changefreq: 'monthly' },
  ];

  for (const route of englishOnlyRoutes) {
    allEntries.push({
      loc: `${baseUrl}${route.path}`,
      priority: route.priority,
      changefreq: route.changefreq,
      alternates: [], // Omit alternates for single-language pages to avoid 404 traps
    });
  }

  // ============================================================================
  // 3. XML SITEMAP RENDER
  // ============================================================================
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allEntries
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>${
      item.alternates.length > 0
        ? '\n' + item.alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n')
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
