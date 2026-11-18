import type { Metadata } from "next";
import LandkarteView from "./LandkarteView";
import { de } from "./content";

const URL_DE = "https://www.example.invalid/produkte/batteriepass/regelungslandkarte";
const URL_EN = `${URL_DE}/en`;

export const metadata: Metadata = {
  title: de.metaTitle,
  description: de.metaDescription,
  alternates: { canonical: URL_DE, languages: { de: URL_DE, en: URL_EN, "x-default": URL_DE } },
  openGraph: {
    title: de.metaTitle,
    description: de.metaDescription,
    url: URL_DE,
    siteName: "Sustainista",
    locale: "de_AT",
    type: "article",
    images: [{ url: "https://www.example.invalid/dpp-logo.png", width: 500, height: 500, alt: "Digitaler Produktpass bei Sustainista" }],
  },
};

export default function RegelungslandkartePage() {
  return <LandkarteView c={de} />;
}
