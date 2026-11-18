import type { MetadataRoute } from "next";
import articlesData from "@/data/magazin-articles.json";

type ArticleData = { date: string; updated?: string; categorySlug?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example.invalid";

  const articles = articlesData as Record<string, ArticleData>;

  const articleEntries: MetadataRoute.Sitemap = Object.entries(articles).map(
    ([slug, article]) => ({
      url: `${base}/magazin/${slug}`,
      lastModified: new Date(article.updated ?? article.date),
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  // Latest article date overall and per category-slug
  const categoryLastMod: Record<string, Date> = {};
  let latestArticle: Date | undefined;
  for (const article of Object.values(articles)) {
    const d = new Date(article.updated ?? article.date);
    if (!latestArticle || d > latestArticle) {
      latestArticle = d;
    }
    if (article.categorySlug) {
      const current = categoryLastMod[article.categorySlug];
      if (!current || d > current) {
        categoryLastMod[article.categorySlug] = d;
      }
    }
  }

  const categoryEntry = (slug: string): MetadataRoute.Sitemap[number] => ({
    url: `${base}/magazin/kategorie/${slug}`,
    lastModified: categoryLastMod[slug] ?? latestArticle,
    changeFrequency: "weekly",
    priority: 0.7,
  });

  return [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/produkte`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/plattform`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/plattform/ki-zugang`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/produkte/esg-analyse`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/nachhaltigkeitsbericht`, lastModified: new Date("2026-11-07"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/nachhaltigkeitsbericht/en`, lastModified: new Date("2026-11-07"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/produkte/digitaler-produktpass`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/compliance-check`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/produkte/batteriepass`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/digitaler-produktpass/call-for-projects`, lastModified: new Date("2026-09-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/produkte/ppwr-compliance`, lastModified: new Date("2026-08-27"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/product-carbon-footprint`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/ki-automatisierung`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/lca-berechnung`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/produkte/circular-stock-management`, lastModified: new Date("2026-07-19"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/trendradar`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/trendradar/methodik`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/trendradar/foresight-2035-2040`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.75 },
    ...["regulatorik-nachweise", "produktpaesse-datenaustausch", "co2-produktentwicklung", "kreislaufwirtschaft", "ki-automatisierung"].map(
      (slug): MetadataRoute.Sitemap[number] => ({ url: `${base}/trendradar/${slug}`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.75 })
    ),
    { url: `${base}/magazin`, lastModified: latestArticle, changeFrequency: "weekly", priority: 0.8 },
    categoryEntry("digitaler-produktpass"),
    categoryEntry("esg-daten-reporting"),
    categoryEntry("product-carbon-footprint"),
    categoryEntry("lca-berechnung"),
    categoryEntry("einblicke-praxis"),
    ...articleEntries,
    { url: `${base}/csrd-kmu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/esg-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dpp-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/batteriepass-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/produkte/batteriepass/regelungslandkarte`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/produkte/batteriepass/regelungslandkarte/en`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/co2-rechner`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/tools/roi-kalkulator`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/branche/metallverarbeitung`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/branche/einzelhandel`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/branche/produktion`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/branche/lebensmittel`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/glossar`, lastModified: new Date("2026-10-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ueber-uns`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/projekte`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/presse`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/hackathon`, lastModified: new Date("2026-08-27"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
