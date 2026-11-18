import articlesData from "@/data/magazin-articles.json";
import { KNOWLEDGE, ORG_SUMMARY, SERVICES, SITE } from "@/lib/site-index";
import { MCP_URL, MCP_WERKZEUGE, PLATTFORM_SITEINDEX } from "@/lib/plattform";
import { RADAR_VERSION, REGULATORY, SOURCE_DATE, TRENDS } from "@/lib/trendradar";

export const dynamic = "force-static";

type Article = {
  title: string; description: string; date: string; updated?: string; intro: string;
  sections: { heading: string; content: string }[]; faqs?: { q: string; a: string }[];
};

/** Markdown-Links und Fettdruck auf Klartext reduzieren, interne Pfade absolut machen */
const plain = (s: string) =>
  s.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, `$1 (${SITE}$2)`).replace(/\[([^\]]+)\]\((https?:[^)]*)\)/g, "$1 ($2)");

/** llms-full.txt: Volltext-Kontext für KI-Systeme, erzeugt aus den Inhalten der Website */
export function GET() {
  const articles = Object.entries(articlesData as Record<string, Article>).sort(([, a], [, b]) => b.date.localeCompare(a.date));
  const out: string[] = [
    "# Sustainista: ausführlicher Kontext",
    "",
    `> ${ORG_SUMMARY}`,
    "",
    "## Plattform",
    "",
    ...PLATTFORM_SITEINDEX.flatMap((p) => [`### ${p.name}`, "", `URL: ${SITE}${p.url}`, "", p.desc, ""]),
    `### MCP-Server der DPP-Plattform`,
    "",
    `Endpunkt: ${MCP_URL} (Streamable HTTP, ohne Schlüssel, nur lesend)`,
    "",
    ...MCP_WERKZEUGE.map((w) => `- ${w.name}: ${w.text}`),
    "",
    "## Leistungen",
    "",
    ...SERVICES.flatMap((s) => [`### ${s.name}`, "", `URL: ${SITE}${s.url}`, "", s.desc, "", `Stichworte: ${s.keywords.join(", ")}`, ""]),
    "## Werkzeuge und Wissensseiten",
    "",
    ...KNOWLEDGE.map((k) => `- ${k.name}: ${k.desc} ${SITE}${k.url}`),
    "",
    `## Regulatorische Orientierung (Quellenstand ${SOURCE_DATE})`,
    "",
    ...REGULATORY.map((r) => `- ${r.title} (${r.status}; ${r.date}): ${r.text.replace(/\s*\[S\d\d(?:,\s*S\d\d)*\]/g, "")}`),
    "",
    `## Sustainista Trendradar 2026–2040 (Version ${RADAR_VERSION})`,
    "",
    "Ringe zeigen den eingeschätzten praktischen Einsatz, keine gesetzlichen Fristen. Foresight-Felder (2037–2040) sind Planungshorizonte, keine Erfolgswahrscheinlichkeit.",
    "",
    ...TRENDS.map((t) => `- ${t.id} ${t.title} | ${t.sector} | Horizont ${t.horizon} | ${t.action} | ${t.application.replace(/\s*\[S\d\d(?:,\s*S\d\d)*\]/g, "")} ${SITE}/trendradar#${t.anchor}`),
    "",
    "## Magazin",
    "",
  ];
  for (const [slug, a] of articles) {
    out.push(`### ${a.title}`, "", `${SITE}/magazin/${slug} (veröffentlicht ${a.date}${a.updated && a.updated !== a.date ? `, aktualisiert ${a.updated}` : ""})`, "", plain(a.intro), "");
    for (const s of a.sections) out.push(`#### ${s.heading}`, "", plain(s.content), "");
    if (a.faqs?.length) out.push("Häufige Fragen:", "", ...a.faqs.map((f) => `- ${f.q} ${plain(f.a)}`), "");
  }
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
