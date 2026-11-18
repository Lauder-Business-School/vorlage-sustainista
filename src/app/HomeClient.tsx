"use client";
import HomepageFaq from "@/components/HomepageFaq";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import PlattformTeaser from "@/components/plattform/PlattformTeaser";
import Radar from "@/components/Radar";
import BillStory from "@/components/BillStory";
import BatteryPassport from "@/components/BatteryPassport";
import ServicePackages from "@/components/ServicePackages";
import Foerderung from "@/components/Foerderung";
import Trust from "@/components/Trust";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

const faqsDe = [
  {
    q: "Was macht Sustainista?",
    a: "Sustainista ist ein österreichisches Team für ESG-Daten, Digitalen Produktpass und KI-Automatisierung. Wir helfen KMU in Österreich und DACH, Nachhaltigkeitsberichte aufzubauen, CO₂-Bilanzen nach GHG Protocol zu erstellen und Datenprozesse zu automatisieren, mit ersten Ergebnissen in 4 bis 6 Wochen. Im Unterschied zu großen Beratungshäusern liefern wir kein Einmalgutachten, sondern ein wiederverwendbares System. Unsere Emissionsberechnungen basieren auf den offiziellen UBA-Emissionsfaktoren für Österreich.",
  },
  {
    q: "Was kostet eine ESG-Beratung bei Sustainista?",
    a: "Die Projektkosten hängen von Unternehmens­größe, Datenverfügbarkeit und Umfang ab. Nach dem ersten Gespräch erhalten Sie ein Festpreisangebot: keine Stundenabrechnung, kein Moving Target. Für Wiener Unternehmen ist der Einstieg über ÖkoBusiness Wien mit € 1.000 Eigenanteil möglich, für Betriebe in Niederösterreich fördert Ökomanagement NÖ bis zu 50 % der Beratungskosten.",
  },
  {
    q: "Was ist der Digitale Produktpass (DPP)?",
    a: "Der Digitale Produktpass ist ein strukturierter Datensatz, der alle relevanten Informationen eines Produkts über seinen gesamten Lebenszyklus enthält: Materialzusammensetzung, CO₂-Fußabdruck, Reparierbarkeit, Recyclingfähigkeit. Er wird je Produktgruppe über eigene Rechtsakte der EU-Ökodesign-Verordnung (ESPR) verpflichtend; einen allgemeinen Stichtag gibt es nicht. Konkret gilt ab 18. Februar 2027 der Batteriepass nach der Batterieverordnung, unter anderem für Industriebatterien über 2 kWh. Sustainista unterstützt beim Aufbau der notwendigen Datenstrukturen.",
  },
  {
    q: "Wie lange dauert ein Nachhaltigkeitsbericht mit Sustainista?",
    a: "Erste messbare Ergebnisse (eine vollständige CO₂-Bilanz oder ein ESG-Erstbericht) liefern wir in 4 bis 6 Wochen. Das ist möglich, weil wir die Rohdaten (Strom- und Gasrechnungen, Fuhrpark-Reports, Reisekostenabrechnungen) direkt verarbeiten und keine langwierigen Interviews oder Workshops brauchen. Der genaue Zeitrahmen hängt von der Datenverfügbarkeit in Ihrem Unternehmen ab.",
  },
  {
    q: "Welche ESG-Standards verwendet Sustainista?",
    a: "Sustainista arbeitet auf Basis anerkannter Standards: GHG Protocol (Scope 1 bis 3 vollständig), VSME und ESRS, ISO 14064 für testierbare Treibhausgasnachweise, ISO 14067 für Product Carbon Footprint, EU Battery Regulation und ESPR für den Digitalen Produktpass. Alle CO₂-Berechnungen basieren auf den offiziellen UBA AT-Emissionsfaktoren (Datenbasis 2023).",
  },
];

const faqsEn = [
  {
    q: "What does Sustainista do?",
    a: "Sustainista is an Austrian team specialising in ESG data, Digital Product Passport and AI automation. We help SMEs in Austria and the DACH region build sustainability reports, calculate CO₂ footprints according to GHG Protocol and automate data processes, with first results in 4 to 6 weeks. Unlike large consulting firms, we deliver a reusable system rather than a one-off report. Our emission calculations are based on the official Austrian UBA emission factors.",
  },
  {
    q: "How much does ESG consulting with Sustainista cost?",
    a: "Project costs depend on company size, data availability and scope. After the first conversation you receive a fixed-price offer: no hourly billing, no moving target. For Vienna-based companies, the entry via ÖkoBusiness Wien is possible with a €1,000 own contribution; in Lower Austria, Ökomanagement NÖ covers up to 50% of consulting costs.",
  },
  {
    q: "What is the Digital Product Passport (DPP)?",
    a: "The Digital Product Passport is a structured dataset containing all relevant information about a product across its entire lifecycle: material composition, CO₂ footprint, repairability, recyclability. It becomes mandatory per product group through separate delegated acts under the EU Ecodesign Regulation (ESPR); there is no general deadline. Concretely, the battery passport under the Batteries Regulation applies from 18 February 2027, including industrial batteries above 2 kWh. Sustainista supports companies in building the necessary data structures.",
  },
  {
    q: "How long does a sustainability report take with Sustainista?",
    a: "First measurable results (a complete CO₂ balance sheet or a first ESG report) are delivered in 4 to 6 weeks. This is possible because we process raw data directly (electricity and gas bills, fleet reports, travel expense accounts) without lengthy interviews or workshops. The exact timeline depends on data availability within your company.",
  },
  {
    q: "Which ESG standards does Sustainista use?",
    a: "Sustainista works on the basis of recognised standards: GHG Protocol (Scope 1 to 3 in full), VSME and ESRS, ISO 14064 for auditable greenhouse gas statements, ISO 14067 for Product Carbon Footprint, EU Battery Regulation and ESPR for the Digital Product Passport. All CO₂ calculations are based on the official Austrian UBA emission factors (data basis 2023).",
  },
];

const foerderungFaqsDe = [
  { q: "Welche Förderungen nutzt Sustainista?", a: "Wir konzentrieren uns bewusst auf zwei Programme: ÖkoBusiness Wien für Unternehmen in Wien und Ökomanagement Niederösterreich für Betriebe in Niederösterreich. Beide sind auf Umwelt- und Klimaschutzberatung in Betrieben ausgerichtet und passen zu unserem Einstiegsprojekt." },
  { q: "Was kostet der Einstieg über ÖkoBusiness Wien?", a: "Für Wiener Unternehmen kofinanziert ÖkoBusiness Wien die Beratung, Ihr Eigenanteil beträgt € 1.000. Sustainista ist offizieller Programmpartner und stimmt den Ablauf mit dem Programm ab." },
  { q: "Was fördert Ökomanagement NÖ?", a: "Das Land Niederösterreich fördert über Ökomanagement NÖ bis zu 20 Beratungstage, für Betriebe mit bis zu 50 % der Beratungskosten. Voraussetzung ist die Bereitschaft, messbare Umwelt- und Klimaschutzmaßnahmen umzusetzen, die über die gesetzlichen Mindestanforderungen hinausgehen." },
];

const homeSchemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/#webpage",
      "name": "Sustainista: ESG-Beratung, Digitaler Produktpass & KI-Automatisierung für KMU",
      "url": "https://www.example.invalid",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "about": { "@id": "https://www.example.invalid/#organization" },
      "description": "Sustainista hilft KMU in Österreich und DACH, ESG-Daten aufzubauen, CO₂ zu bilanzieren und Prozesse mit KI zu automatisieren.",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable"] },
      "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" }] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...faqsDe, ...foerderungFaqsDe].map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })),
    },
  ],
};

/** Startseite. Server-Abschnitte (Live-Daten, Trendradar) kommen als Slots aus page.tsx. */
export default function HomeClient({ elektro, trendradar, references }: { elektro: React.ReactNode; trendradar: React.ReactNode; references: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaOrg) }} />
      <Navigation />
      <main>
        <Hero />
        <Partners />
        <PlattformTeaser />
        {/* Dunkle Bänder nie nebeneinander: Plattform-Beleg, Stichtag und Batteriepass wechseln mit hellen Abschnitten. */}
        {elektro}
        <Solutions />
        <Radar />
        <BillStory />
        {/* Batteriepass und Compliance Check sind ein Abschnitt (beide trugen dieselbe Frist). */}
        <BatteryPassport />
        {/* Förderung gehört zu Schritt 1 und steht im Abschnitt der drei Schritte. */}
        <ServicePackages>
          <Foerderung />
        </ServicePackages>
        {references}
        <Trust />
        <HomepageFaq faqsDe={faqsDe} faqsEn={faqsEn} />
        {trendradar}
        <Resources />
        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
