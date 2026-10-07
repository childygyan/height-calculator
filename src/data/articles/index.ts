import type { ArticleData, LocaleArticleSet, ScheduledArticle } from './types';
import { LOCALES, type Locale } from '../../i18n/locales';
import { SITE } from '../../config/site';
import { ptArticleSet } from './pt';
import { enArticleSet } from './en';
import { esArticleSet } from './es';
import { frArticleSet } from './fr';
import { deArticleSet } from './de';
import { hiArticleSet } from './hi';
import { jaArticleSet } from './ja';
import { koArticleSet } from './ko';
import { arArticleSet } from './ar';
import { ruArticleSet } from './ru';

export * from './types';

const BASE_SETS: Record<Locale, LocaleArticleSet> = {
  en: enArticleSet,
  hi: hiArticleSet,
  es: esArticleSet,
  fr: frArticleSet,
  de: deArticleSet,
  pt: ptArticleSet,
  ja: jaArticleSet,
  ko: koArticleSet,
  ar: arArticleSet,
  ru: ruArticleSet,
};

// Scheduled daily-program articles are auto-imported from ./scheduled/*.ts
// Each file exports `scheduled: ScheduledArticle`
const scheduledModules = import.meta.glob<{ scheduled: ScheduledArticle }>('./scheduled/*.ts', { eager: true });
const SCHEDULED: ScheduledArticle[] = Object.values(scheduledModules).map((m) => m.scheduled);

/** YYYY-MM-DD for today (build time) */
function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Article sets with date-gated scheduled articles merged in.
 * Scheduled articles with publishDate <= today are included; future ones are hidden
 * from listings, routes, sitemap, and hreflang.
 */
export const ARTICLE_SETS: Record<Locale, LocaleArticleSet> = (() => {
  const today = todayStr();
  const merged: Record<Locale, LocaleArticleSet> = {} as Record<Locale, LocaleArticleSet>;
  (Object.keys(BASE_SETS) as Locale[]).forEach((locale) => {
    const base = BASE_SETS[locale];
    const extra: ArticleData[] = [];
    for (const s of SCHEDULED) {
      if (s.publishDate <= today) {
        const a = s.articles[locale];
        if (a) extra.push(a);
      }
    }
    merged[locale] = { ui: base.ui, articles: [...base.articles, ...extra] };
  });
  return merged;
})();

export function getArticleSet(locale: Locale): LocaleArticleSet {
  return ARTICLE_SETS[locale] || ARTICLE_SETS.en;
}

/** Localized hub path, e.g. '/articles/' for en, '/pt/artigos/' for pt */
export function getArticlesHubPath(locale: Locale): string {
  const set = getArticleSet(locale);
  return locale === 'en' ? `/${set.ui.hubSegment}/` : `/${locale}/${set.ui.hubSegment}/`;
}

/** Full localized URL path for an article */
export function getArticlePath(locale: Locale, article: ArticleData): string {
  return `${getArticlesHubPath(locale)}${article.slug}/`;
}

export function getArticleBySlug(locale: Locale, slug: string): ArticleData | undefined {
  return getArticleSet(locale).articles.find((a) => a.slug === slug);
}

/**
 * Hreflang alternates for an article id across all locales.
 * Returns [{ locale, hreflang, href }] using each locale's own slug.
 */
export function getArticleAlternates(articleId: string): Array<{ locale: Locale; hreflang: string; href: string }> {
  const alternates: Array<{ locale: Locale; hreflang: string; href: string }> = [];
  (Object.keys(ARTICLE_SETS) as Locale[]).forEach((locale) => {
    const article = ARTICLE_SETS[locale].articles.find((a) => a.id === articleId);
    if (article) {
      alternates.push({
        locale,
        hreflang: LOCALES[locale].hreflang,
        href: `${SITE.siteUrl}${getArticlePath(locale, article)}`,
      });
    }
  });
  // x-default → English
  const enArticle = ARTICLE_SETS.en.articles.find((a) => a.id === articleId);
  if (enArticle) {
    alternates.push({
      locale: 'en' as Locale,
      hreflang: 'x-default',
      href: `${SITE.siteUrl}${getArticlePath('en', enArticle)}`,
    });
  }
  return alternates;
}

/** Hreflang alternates for the articles hub across all locales */
export function getHubAlternates(): Array<{ locale: Locale; hreflang: string; href: string }> {
  const alternates: Array<{ locale: Locale; hreflang: string; href: string }> = [];
  (Object.keys(ARTICLE_SETS) as Locale[]).forEach((locale) => {
    alternates.push({
      locale,
      hreflang: LOCALES[locale].hreflang,
      href: `${SITE.siteUrl}${getArticlesHubPath(locale)}`,
    });
  });
  alternates.push({
    locale: 'en' as Locale,
    hreflang: 'x-default',
    href: `${SITE.siteUrl}${getArticlesHubPath('en')}`,
  });
  return alternates;
}
