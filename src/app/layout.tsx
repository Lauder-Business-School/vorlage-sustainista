import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/i18n/context";
import { SERVICES, SITE } from "@/lib/site-index";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sustainista: Digitaler Produktpass, Batteriepass & ESG-Daten",
    template: "%s | Sustainista",
  },
  description:
    "ESG-Daten aufbauen, CO₂ nach GHG Protocol bilanzieren, Digitaler Produktpass und KI-Automatisierung für KMU in Österreich. Erste Ergebnisse in 4 bis 6 Wochen.",
  keywords: [
    "Digitaler Produktpass", "DPP Österreich", "Batteriepass", "Batteriepass Pflicht 2027", "Batterieverordnung 2023/1542",
    "ESPR", "DPP-Plattform", "Product Carbon Footprint", "ISO 14067", "LCA Berechnung", "Ökobilanz", "openLCA",
    "CO2-Bilanz KMU", "GHG Protocol", "VSME", "Freiwilliger Standard VS", "ESG Beratung Österreich", "Nachhaltigkeitsbericht KMU",
    "KI-Automatisierung ESG", "PPWR", "Verpackungsverordnung", "Vernichtungsverbot Textil", "Kreislaufwirtschaft",
    "Trendradar Nachhaltigkeit", "ÖkoBusiness Wien", "Ökomanagement NÖ", "Wien", "Niederösterreich",
  ],
  applicationName: "Sustainista",
  creator: "Sustainista",
  publisher: "Sustainista",
  category: "Nachhaltigkeit, Produktdaten, Regulatorik",
  formatDetection: { telephone: false, email: false, address: false },
  authors: [{ name: "Dr. Stefan Bauer", url: "https://www.example.invalid/ueber-uns" }],
  metadataBase: new URL("https://www.example.invalid"),
  alternates: {
    canonical: "https://www.example.invalid",
    types: {
      "application/rss+xml": "https://www.example.invalid/feed.xml",
    },
  },
  openGraph: {
    title: "Sustainista: ESG-Beratung, Digitaler Produktpass & KI-Automatisierung für KMU",
    description: "ESG-Daten aufbauen, CO₂ bilanzieren, Produktpässe und Datenprozesse mit KI automatisieren. Erste Ergebnisse in 4 bis 6 Wochen.",
    type: "website",
    locale: "de_AT",
    alternateLocale: ["en_US"],
    siteName: "Sustainista",
    url: "https://www.example.invalid",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "Sustainista: ESG-Beratung, Digitaler Produktpass und KI-Automatisierung für KMU",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": "https://www.example.invalid/#organization",
      "name": "Sustainista",
      "alternateName": "Sustainista: Sustainability as a Service",
      "url": "https://www.example.invalid",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.example.invalid/sustainista-logo.png",
        "width": 200,
        "height": 60,
      },
      "image": "https://www.example.invalid/stefan-bauer.jpeg",
      "description": "Sustainista ist ein österreichisches Beratungs- und Implementierungsteam für ESG-Daten, Digitalen Produktpass (DPP) und KI-Automatisierung, Sustainability as a Service für KMU in Österreich und dem DACH-Raum.",
      "email": "stefan.bauer@example.invalid",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wien",
        "addressRegion": "Wien",
        "postalCode": "1010",
        "addressCountry": "AT",
      },

      "priceRange": "€€",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      "areaServed": [
        { "@type": "Country", "name": "Österreich" },
        { "@type": "Country", "name": "Deutschland" },
        { "@type": "Country", "name": "Schweiz" },
      ],
      "knowsAbout": [
        "Digitaler Produktpass", "Batteriepass", "Batterieverordnung (EU) 2023/1542", "EU ESPR", "GS1 Digital Link",
        "Product Carbon Footprint", "ISO 14067", "Life Cycle Assessment", "openLCA", "GHG Protocol", "VSME",
        "ESG-Reporting", "PPWR", "Kreislaufwirtschaft", "KI-Automatisierung", "Nachhaltigkeitsberatung",
      ],
      "founder": { "@id": "https://www.example.invalid/#stefan-bauer" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "stefan.bauer@example.invalid",
        "areaServed": ["AT", "DE", "CH"],
        "availableLanguage": ["de", "en"],
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sustainista Leistungen",
        "itemListElement": SERVICES.map((sv) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": sv.name, "url": `${SITE}${sv.url}`, "description": sv.desc },
        })),
      },
      "foundingDate": "2022",
      "foundingLocation": { "@type": "Place", "name": "Wien, Österreich" },
      "sameAs": [
        "https://www.linkedin.com/company/sustainista-innovation-meets-sustainability/",
        "https://www.youtube.com/@Sustainista",
        "https://www.oekb.at/en/oekb-esg-data-hub/esg-netzwerk/sustainista.html",
        "https://dpp-austria.at/project/sustainista-gmbh/",
        "https://dataintelligence.at/wir-bei-sustainista-glauben-dass-daten-die-welt-veraendern-koennen-willkommen-im-netzwerk/",
        "https://innovationskonferenz-wien.at/participants/3315832",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.example.invalid/#website",
      "url": "https://www.example.invalid",
      "name": "Sustainista",
      "publisher": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.example.invalid/magazin?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.example.invalid/#stefan-bauer",
      "name": "Dr. Stefan Bauer",
      "honorificPrefix": "Dr.",
      "givenName": "Stefan",
      "familyName": "Bauer",
      "jobTitle": "Gründer & CEO",
      "worksFor": { "@id": "https://www.example.invalid/#organization" },
      "url": "https://www.example.invalid/ueber-uns",
      "image": "https://www.example.invalid/stefan-bauer.jpeg",
      "email": "stefan.bauer@example.invalid",
      "knowsAbout": [
        "ESG-Daten", "Digitaler Produktpass", "KI-Automatisierung",
        "Kreislaufwirtschaft", "CSRD", "GHG Protocol",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/stefan-bauer-innovator/",
      ],
      "description": "Nachhaltigkeitsexperte, Gründer von Sustainista und Spezialist für ESG-Daten, Digitalen Produktpass und KI-Automatisierung.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${hanken.variable} h-full antialiased`}>
      <head>
        {/* RSS Feed autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sustainista Magazin: ESG, DPP, PCF &amp; KI"
          href="https://www.example.invalid/feed.xml"
        />
        {/* llms.txt, discoverable entry point for AI crawlers */}
        <link rel="llms-txt" href="https://www.example.invalid/llms.txt" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.example.invalid" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <div style={{ background: "#fff3cd", color: "#222", padding: "12px", textAlign: "center" }}>
          Lehrveranstaltung: Prototyp, keine offizielle Website. Kontakt- und Live-Dienste sind nicht eingerichtet.
        </div>
        <a href="#main-content" className="skip-link">Zum Hauptinhalt springen</a>
        <LanguageProvider>
          <div id="main-content">
            {children}
          </div>
          <ScrollToTop />
          <CookieBanner />
          {/* VorstandGenerator: deaktiviert bis ANTHROPIC_API_KEY in Vercel gesetzt ist.
              Bei Reaktivierung: import via next/dynamic, nicht statisch (980-Zeilen-Client-Komponente). */}
        </LanguageProvider>
      </body>
    </html>
  );
}
