import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Sustainista Trendradar 2026–2040: 28 Trends für Produkt- und Nachhaltigkeitsdaten";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Sustainista Trendradar · Ausgabe 2026/27",
    title: "28 Trends, die Produktdaten bis 2040 verändern.",
    sub: "Produktpässe, CO₂-Daten, Kreislaufwirtschaft und kontrollierte KI. Mit Einsatzhorizont, Gegenargument und 49 Primärquellen.",
    footer: "Quellenstand 11. Oktober 2026",
  });
}
