import type { Metadata } from "next";
import UeberUnsClient from "./UeberUnsClient";

export const metadata: Metadata = {
  title: "Über uns: Das Sustainista-Team",
  description:
    "Sustainista ist ein österreichisches Spezialistenteam für ESG-Daten, Digitalen Produktpass und KI-Automatisierung. Gegründet von Dr. Stefan Bauer in Wien.",
  alternates: { canonical: "https://www.example.invalid/ueber-uns" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Über Sustainista: ESG-Spezialist:innen aus Wien",
    description:
      "Wir sind ein interdisziplinäres Team aus Wien, das KMU hilft, Nachhaltigkeit systemisch zu denken: mit echten Daten, wiederverwendbaren Prozessen und KI-Automatisierung.",
    url: "https://www.example.invalid/ueber-uns",
    images: [
      {
        url: "https://www.example.invalid/stefan-bauer.jpeg",
        width: 800,
        height: 800,
        alt: "Dr. Stefan Bauer, Gründer Sustainista",
      },
    ],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/ueber-uns",
      "name": "Über uns: Das Sustainista-Team",
      "url": "https://www.example.invalid/ueber-uns",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "about": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Über uns", "item": "https://www.example.invalid/ueber-uns" },
        ],
      },
    },
    {
      "@type": "ProfilePage",
      "dateCreated": "2022-01-01",
      "dateModified": "2026-06-20",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.example.invalid/#stefan-bauer",
        "name": "Dr. Stefan Bauer",
        "honorificPrefix": "Dr.",
        "jobTitle": "Gründer & CEO, Sustainista",
        "url": "https://www.example.invalid/ueber-uns",
        "image": "https://www.example.invalid/stefan-bauer.jpeg",
        "email": "stefan.bauer@example.invalid",
        "worksFor": { "@id": "https://www.example.invalid/#organization" },
        "sameAs": [
          "https://www.linkedin.com/in/stefan-bauer-innovator/",
          "https://www.youtube.com/@Sustainista",
        ],
        "knowsAbout": [
          "ESG-Daten", "Digitaler Produktpass", "KI-Automatisierung",
          "CSRD", "GHG Protocol", "ISO 14067", "Kreislaufwirtschaft",
        ],
      },
    },
  ],
};

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <UeberUnsClient />
    </>
  );
}
