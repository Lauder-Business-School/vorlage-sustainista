import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Sustainability reporting software for VS and GRI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Sustainability reporting software",
    title: "Sustainability report under VS and GRI. Every value with evidence.",
    sub: "Four-eyes review, Scope 1 and 2, materiality under GRI 3, release check, export as PDF, DOCX and XBRL.",
    footer: "VS under Delegated Regulation (EU) 2026/1560",
  });
}
