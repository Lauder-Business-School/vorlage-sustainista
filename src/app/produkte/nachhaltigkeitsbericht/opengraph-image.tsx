import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Software für Nachhaltigkeitsberichte nach VS und GRI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Software für Nachhaltigkeitsberichte",
    title: "Nachhaltigkeitsbericht nach VS und GRI. Jeder Wert mit Beleg.",
    sub: "Vier-Augen-Prüfung, Scope 1 und 2, Wesentlichkeit nach GRI 3, Freigabe-Prüfung, Export als PDF, DOCX und XBRL.",
    footer: "VS nach Delegierter Verordnung (EU) 2026/1560",
  });
}
