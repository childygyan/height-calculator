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
