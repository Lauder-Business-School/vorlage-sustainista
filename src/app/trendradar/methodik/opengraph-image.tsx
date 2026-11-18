import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Trendradar Methodik, Quellen und Versionsarchiv";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Sustainista Trendradar · Methodik",
    title: "Wie wir einordnen, und was wir nicht behaupten.",
    sub: "Zeitringe, Bewertungsmaßstäbe, Review-Raster, Versionsarchiv und 49 Primärquellen.",
    footer: "Version 2026.10-Foresight-2040",
  });
}
