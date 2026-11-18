import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Trendradar Foresight 2035–2040";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Sustainista Trendradar · Foresight 2035–2040",
    title: "Wenn Produktdaten mit der physischen Welt zusammenarbeiten.",
    sub: "Acht Anwendungsfelder mit Szenarien, Vorbereitung und Beobachtungssignalen. Planungshorizont, keine Erfolgswahrscheinlichkeit.",
    footer: "Quellenstand 11. Oktober 2026",
  });
}
