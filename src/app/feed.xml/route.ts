import articlesData from "@/data/magazin-articles.json";

const BASE = "https://www.example.invalid";

type ArticleData = {
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  readTime: string;
  author: { name: string };
  image?: string;
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = articlesData as Record<string, ArticleData>;

  // Sort by date descending
  const sorted = Object.entries(articles).sort(
    ([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const items = sorted
    .map(([slug, article]) => {
      const url = `${BASE}/magazin/${slug}`;
      const pubDate = new Date(article.date).toUTCString();
      const updDate = new Date(article.updated ?? article.date).toISOString();
      const image = article.image
        ? `${BASE}${article.image}`
        : `${BASE}/angebot-sustainista.png`;

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <atom:updated>${updDate}</atom:updated>
      <author>redaktion@example.invalid (${escapeXml(article.author.name)})</author>
      <category>${escapeXml(article.category)}</category>
      <media:content url="${escapeXml(image)}" medium="image" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sustainista Magazin: ESG, DPP, PCF &amp; KI-Automatisierung</title>
    <link>${BASE}/magazin</link>
    <description>Fachwissen zu ESG-Reporting, Digitalem Produktpass, Product Carbon Footprint und KI-Automatisierung von Dr. Stefan Bauer und dem Sustainista-Team.</description>
    <language>de-at</language>
    <copyright>© ${new Date().getFullYear()} Sustainista GmbH</copyright>
    <managingEditor>stefan.bauer@example.invalid (Dr. Stefan Bauer)</managingEditor>
    <webMaster>stefan.bauer@example.invalid (Dr. Stefan Bauer)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>1440</ttl>
    <image>
      <url>${BASE}/sustainista-logo.png</url>
      <title>Sustainista</title>
      <link>${BASE}</link>
    </image>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
