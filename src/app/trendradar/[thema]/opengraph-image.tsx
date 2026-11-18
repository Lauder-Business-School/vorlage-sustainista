import { OG_SIZE, ogCard } from "@/lib/og-card";
import { SECTORS, trendsForSector } from "@/lib/trendradar";

export const alt = "Sustainista Trendradar: Themenvertiefung";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ thema: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ thema: string }> }) {
  const { thema } = await params;
  const s = SECTORS.find((x) => x.slug === thema) ?? SECTORS[0];
  return ogCard({
    eyebrow: "Sustainista Trendradar · Themenvertiefung",
    title: s.key,
    sub: `${trendsForSector(s.slug).length} Trends mit Anwendung, Grenzen und Quellen. ${s.cta}.`,
    footer: "Ausgabe 2026/27 · Quellenstand 11. Oktober 2026",
  });
}
