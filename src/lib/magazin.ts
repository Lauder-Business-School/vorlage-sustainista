import articlesData from "@/data/magazin-articles.json";

export type MagazinArticle = {
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
};

const articles = articlesData as Record<string, Omit<MagazinArticle, "slug">>;

/** All articles of a category from magazin-articles.json, sorted by date descending. */
export function getArticlesByCategory(categorySlug: string): MagazinArticle[] {
  return Object.entries(articles)
    .filter(([, article]) => article.categorySlug === categorySlug)
    .map(([slug, article]) => ({ slug, ...article }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Formats an ISO date (e.g. "2026-03-15") as German month + year (e.g. "März 2026"). */
export function formatMonthYear(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}
