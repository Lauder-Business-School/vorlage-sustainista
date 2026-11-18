import type { Metadata } from "next";
import ProjekteClient from "./ProjekteClient";
import References from "@/components/References";

export const metadata: Metadata = {
  title: "Projekte & Referenzen: ESG, DPP und KI-Projekte",
  description:
    "Abgeschlossene und laufende Projekte von Sustainista: ESG-Analyse, Digitaler Produktpass, Product Carbon Footprint und KI-Automatisierung für KMU in Österreich und DACH.",
  alternates: { canonical: "https://www.example.invalid/projekte" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Projekte & Referenzen | Sustainista",
    description:
      "ESG-Projekte, Digitale Produktpässe und KI-Automatisierung für KMU: Einblick in abgeschlossene und laufende Projekte des Sustainista-Teams.",
    url: "https://www.example.invalid/projekte",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "Sustainista Projekte & Referenzen",
      },
    ],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.example.invalid/projekte",
      "name": "Projekte & Referenzen | Sustainista",
      "url": "https://www.example.invalid/projekte",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "author": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Projekte", "item": "https://www.example.invalid/projekte" },
        ],
      },
    },
  ],
};

export default function ProjektePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <ProjekteClient references={<References />} />
    </>
  );
}
