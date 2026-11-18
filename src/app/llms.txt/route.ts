import articlesData from "@/data/magazin-articles.json";
import { BRANCHEN } from "@/data/branchen";
import { KNOWLEDGE, ORG_SUMMARY, SERVICES, SITE } from "@/lib/site-index";
import { SECTORS, TRENDS } from "@/lib/trendradar";
import { MCP_URL, PLATTFORM_SITEINDEX } from "@/lib/plattform";

export const dynamic = "force-static";

type Article = { title: string; description: string; date: string; category: string; categorySlug: string };

/** llms.txt nach llmstxt.org: kurzer, verlinkter Überblick für KI-Systeme, aus denselben Daten wie die Website */
export function GET() {
  const articles = Object.entries(articlesData as Record<string, Article>).sort(([, a], [, b]) => b.date.localeCompare(a.date));
  const byCat = new Map<string, [string, Article][]>();
  for (const e of articles) byCat.set(e[1].category, [...(byCat.get(e[1].category) ?? []), e]);

  const lines = [
    "# Sustainista",
    "",
    `> ${ORG_SUMMARY}`,
    "",
    "Standort Wien, tätig in Österreich und im DACH-Raum. Kontakt: stefan.bauer@example.invalid. Gründer und CEO: Dr. Stefan Bauer. Förderbare Einstiege für Wiener Betriebe über ÖkoBusiness Wien, in Niederösterreich über Ökomanagement NÖ.",
    "",
    "## Plattform",
    "",
    ...PLATTFORM_SITEINDEX.map((p) => `- [${p.name}](${SITE}${p.url}): ${p.desc}`),
    `- MCP-Server (Streamable HTTP, öffentlich, nur lesend): ${MCP_URL}`,
    "",
    "## Leistungen",
    "",
    ...SERVICES.map((s) => `- [${s.name}](${SITE}${s.url}): ${s.desc}`),
    "",
    "## Wissen und Werkzeuge",
    "",
    ...KNOWLEDGE.map((k) => `- [${k.name}](${SITE}${k.url}): ${k.desc}`),
    "",
    "## Trendradar: Themenfelder",
    "",
    ...SECTORS.map((s) => `- [${s.key}](${SITE}/trendradar/${s.slug}): ${TRENDS.filter((t) => t.sector === s.key).map((t) => `${t.id} ${t.short}`).join(", ")}`),
    "",
    "## Branchen",
    "",
    ...BRANCHEN.map((b) => `- [${b.name}](${SITE}/branche/${b.slug}): ${b.seoDescDe}`),
    "",
    "## Magazin",
    "",
    ...[...byCat.entries()].flatMap(([cat, list]) => [
      `### ${cat}`,
      "",
      ...list.map(([slug, a]) => `- [${a.title}](${SITE}/magazin/${slug}): ${a.description} (${a.date})`),
      "",
    ]),
    "## Optional",
    "",
    `- [Ausführliche Fassung für KI-Systeme](${SITE}/llms-full.txt): Leistungen, alle 28 Trends und Kernaussagen der Magazinartikel im Volltext`,
    `- [Über uns](${SITE}/ueber-uns)`,
    `- [Projekte](${SITE}/projekte)`,
    `- [Presse](${SITE}/presse)`,
    `- [RSS-Feed](${SITE}/feed.xml)`,
    `- [Sitemap](${SITE}/sitemap.xml)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
