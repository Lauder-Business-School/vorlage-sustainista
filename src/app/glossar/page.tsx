import type { Metadata } from "next";
import GlossarClient from "./GlossarClient";

export const metadata: Metadata = {
  title: "Glossar: DPP, Batteriepass, PCF, LCA & ESG erklärt",
  description:
    "Fachbegriffe zu Digitalem Produktpass, Batteriepass, PCF, LCA, VSME, PPWR und ESG verständlich erklärt, mit Querverweisen und Praxisbezug.",
  alternates: {
    canonical: "https://www.example.invalid/glossar",
  },
  openGraph: {
    title: "ESG-Glossar: CSRD, DPP, PCF & Co. verständlich erklärt",
    description:
      "Über 50 Fachbegriffe aus ESG, CSRD, Digitalem Produktpass und KI-Automatisierung, vom Sustainista-Team für KMU aufbereitet.",
    url: "https://www.example.invalid/glossar",
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "ESG-Glossar von Sustainista" }],
  },
  robots: { index: true, follow: true },
};

const glossarSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/glossar",
      "name": "ESG-Glossar: CSRD, DPP, PCF, GHG Protocol & mehr erklärt",
      "description":
        "Über 50 Fachbegriffe aus ESG, CSRD, Digitalem Produktpass, Product Carbon Footprint und KI-Automatisierung, verständlich erklärt vom Sustainista-Team.",
      "url": "https://www.example.invalid/glossar",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Glossar", "item": "https://www.example.invalid/glossar" },
        ],
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://www.example.invalid/glossar#termset",
      "name": "ESG & Nachhaltigkeits-Glossar",
      "description": "Definitionen und Erklärungen zu Fachbegriffen aus ESG, CSRD, Digitalem Produktpass, Product Carbon Footprint und KI-Automatisierung.",
      "url": "https://www.example.invalid/glossar",
      "inLanguage": "de",
      "publisher": { "@id": "https://www.example.invalid/#organization" },
      "hasPart": [
        { "@type": "DefinedTerm", "name": "ESG", "url": "https://www.example.invalid/glossar#esg", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "CSRD", "url": "https://www.example.invalid/glossar#csrd", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "ESRS", "url": "https://www.example.invalid/glossar#esrs", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "GHG Protocol", "url": "https://www.example.invalid/glossar#ghg-protocol", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Scope 3", "url": "https://www.example.invalid/glossar#scope-3", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Product Carbon Footprint (PCF)", "url": "https://www.example.invalid/glossar#pcf", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "ISO 14067", "url": "https://www.example.invalid/glossar#iso-14067", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Digitaler Produktpass (DPP)", "url": "https://www.example.invalid/glossar#dpp", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "EU ESPR", "url": "https://www.example.invalid/glossar#espr", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "LCA", "url": "https://www.example.invalid/glossar#lca", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "KI-Automatisierung", "url": "https://www.example.invalid/glossar#ki-automatisierung", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Greenwashing", "url": "https://www.example.invalid/glossar#greenwashing", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Batteriepass", "url": "https://www.example.invalid/glossar#battery-passport", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "VSME", "url": "https://www.example.invalid/glossar#vsme", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Freiwilliger Standard VS", "url": "https://www.example.invalid/glossar#voluntary-standard", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "PACT", "url": "https://www.example.invalid/glossar#pact", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "EPD", "url": "https://www.example.invalid/glossar#epd", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "GS1 Digital Link", "url": "https://www.example.invalid/glossar#gs1-digital-link", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "PPWR", "url": "https://www.example.invalid/glossar#ppwr", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
        { "@type": "DefinedTerm", "name": "Prospektive LCA", "url": "https://www.example.invalid/glossar#prospektive-lca", "inDefinedTermSet": "https://www.example.invalid/glossar#termset" },
      ],
    },
  ],
};

export default function GlossarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarSchema) }}
      />
      <GlossarClient />
    </>
  );
}
