import type { Metadata } from "next";
import NachhaltigkeitsberichtView from "./NachhaltigkeitsberichtView";
import { BASE_URL, DE_PATH, EN_PATH, de } from "./content";
import { schemaOrg } from "./schema";
import { seoTitle } from "@/lib/seo";

const URL_DE = `${BASE_URL}${DE_PATH}`;
const URL_EN = `${BASE_URL}${EN_PATH}`;

export const metadata: Metadata = {
  title: seoTitle(de.meta.title),
  description: de.meta.description,
  alternates: { canonical: URL_DE, languages: { de: URL_DE, en: URL_EN, "x-default": URL_DE } },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "de_AT", siteName: "Sustainista", url: URL_DE, title: de.meta.ogTitle, description: de.meta.description },
};

export default function NachhaltigkeitsberichtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg(de, URL_DE)) }} />
      <NachhaltigkeitsberichtView c={de} />
    </>
  );
}
