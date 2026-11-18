import type { Metadata } from "next";
import PresseClient from "./PresseClient";

export const metadata: Metadata = {
  title: "Presse & Medien",
  description:
    "Pressemitteilungen, Medienerwähnungen, Vorträge und Auszeichnungen von Sustainista. Pressekontakt: stefan.bauer@example.invalid. Top Berater 2025 (IMWF).",
  alternates: { canonical: "https://www.example.invalid/presse" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Sustainista in den Medien: Presse & Auszeichnungen",
    description:
      "Medienerwähnungen, Vorträge, Auszeichnungen und Kooperationen von Sustainista, Österreichs ESG-Spezialist für KMU.",
    url: "https://www.example.invalid/presse",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "Sustainista Presse & Auszeichnungen",
      },
    ],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/presse",
      "name": "Presse & Medien | Sustainista",
      "url": "https://www.example.invalid/presse",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "about": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Presse", "item": "https://www.example.invalid/presse" },
        ],
      },
    },
  ],
};

export default function PressePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <PresseClient />
    </>
  );
}
