import type { Metadata } from "next";
import LandkarteView from "../LandkarteView";
import { en } from "../content";

const URL_DE = "https://www.example.invalid/produkte/batteriepass/regelungslandkarte";
const URL_EN = `${URL_DE}/en`;

export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
  alternates: { canonical: URL_EN, languages: { de: URL_DE, en: URL_EN, "x-default": URL_DE } },
  openGraph: {
    title: en.metaTitle,
    description: en.metaDescription,
    url: URL_EN,
    siteName: "Sustainista",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.example.invalid/dpp-logo.png", width: 500, height: 500, alt: "Digitaler Produktpass bei Sustainista" }],
  },
};

export default function RegulatoryMapPageEn() {
  return <LandkarteView c={en} />;
}
