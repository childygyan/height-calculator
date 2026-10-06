import type { ArticleData } from './types';
import { ptArticles } from './pt';

export * from './types';

const ARTICLES_BY_SLUG: Record<string, ArticleData> = {};
for (const article of ptArticles) {
  ARTICLES_BY_SLUG[article.slug] = article;
}

export function getPtArticles(): ArticleData[] {
  return ptArticles;
}

export function getPtArticle(slug: string): ArticleData | undefined {
  return ARTICLES_BY_SLUG[slug];
}
