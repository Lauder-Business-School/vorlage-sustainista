import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BerichtDeck from "./BerichtDeck";
import { de } from "./content";

/**
 * Verkaufspräsentation zur Software für Nachhaltigkeitsberichte (Spec N9 Nachtrag 4), Muster
 * /hackathon/partner. Bewusst nirgendwo verlinkt und nicht in der sitemap; noindex/nofollow, weil
 * robots.txt "/" global erlaubt und ein Crawl-Verbot keine Index-Sperre ist. Zweisprachig über den
 * globalen Locale-Context, Umschalter im Deck-Kopf; deshalb eine Route ohne /en.
 */
export const metadata: Metadata = {
  title: { absolute: `${de.meta.title} | Sustainista` },
  description: de.meta.description,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.example.invalid/produkte/nachhaltigkeitsbericht/praesentation" },
  openGraph: {
    title: de.meta.ogTitle,
    description: de.meta.description,
    url: "https://www.example.invalid/produkte/nachhaltigkeitsbericht/praesentation",
    siteName: "Sustainista",
    locale: "de_AT",
    type: "article",
  },
};

export default function BerichtPraesentationPage() {
  return (
    <>
      <Navigation />
      <BerichtDeck />
      <Footer />
    </>
  );
}
