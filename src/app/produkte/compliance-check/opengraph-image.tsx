import { OG_SIZE, ogCard } from "@/lib/og-card";

export const alt = "Compliance Check Batteriepass und Digitaler Produktpass";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Compliance Check · Batteriepass, Produktpass, PPWR",
    title: "In vier Wochen wissen Sie, ob Ihr Pass zum Stichtag steht.",
    sub: "Rolle klären, Datenlücken finden, jedes Pflichtfeld prüfen, stichtagsfertige Pässe. Festpreis, keine Abnahmepflicht.",
    footer: "Batteriepass ab 18. Februar 2027",
  });
}
