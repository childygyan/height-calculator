export interface ArticleTable {
  caption?: string;
  headers: string[];
  rows: string[][];
  footnote?: string;
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  steps?: { number: number; title: string; description: string }[];
  table?: ArticleTable;
  callout?: {
    type: 'tip' | 'note' | 'warning';
    text: string;
  };
  link?: {
    text: string;
    href: string;
  };
}

export interface ArticleData {
  /** Stable cross-locale identifier, e.g. 'avg-height-by-country' */
  id: string;
  /** Localized URL slug for this locale */
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  badge: string;
  tocTitle: string;
  intro: {
    lead: string;
    paragraphs: string[];
  };
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  medicalDisclaimer?: string;
  relatedLinks: { text: string; href: string }[];
}

/** Per-locale UI strings for the articles hub and article chrome */
export interface ArticleUiStrings {
  /** URL path segment for the hub, e.g. 'artigos', 'articles', 'articulos' */
  hubSegment: string;
  /** Nav + breadcrumb label, e.g. 'Artigos' */
  navLabel: string;
  /** 'Início' etc. */
  homeLabel: string;
  /** Hub page H1 */
  hubTitle: string;
  /** Hub page subtitle */
  hubSubtitle: string;
  /** Hub page meta description */
  hubDescription: string;
  /** 'Perguntas frequentes' */
  faqHeading: string;
  /** 'Leia também' */
  readAlsoHeading: string;
  /** 'Neste artigo' (table of contents) */
  tocLabel: string;
}

export interface LocaleArticleSet {
  ui: ArticleUiStrings;
  articles: ArticleData[];
}

/** A scheduled article for the daily program: one publish date, all 10 locales */
export interface ScheduledArticle {
  /** YYYY-MM-DD */
  publishDate: string;
  articles: Record<string, ArticleData>;
}
