import type { Metadata } from "next";
import NachhaltigkeitsberichtView from "../NachhaltigkeitsberichtView";
import { BASE_URL, DE_PATH, EN_PATH, en } from "../content";
import { schemaOrg } from "../schema";
import { seoTitle } from "@/lib/seo";

const URL_DE = `${BASE_URL}${DE_PATH}`;
const URL_EN = `${BASE_URL}${EN_PATH}`;

export const metadata: Metadata = {
  title: seoTitle(en.meta.title),
  description: en.meta.description,
  alternates: { canonical: URL_EN, languages: { de: URL_DE, en: URL_EN, "x-default": URL_DE } },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_GB", siteName: "Sustainista", url: URL_EN, title: en.meta.ogTitle, description: en.meta.description },
};

export default function SustainabilityReportPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg(en, URL_EN)) }} />
      <NachhaltigkeitsberichtView c={en} />
    </>
  );
}
