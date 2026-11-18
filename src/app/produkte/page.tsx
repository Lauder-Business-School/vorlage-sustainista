import Navigation from "@/components/Navigation";
import ComplianceCheckTeaser from "@/components/compliance/ComplianceCheckTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen: Produktpass, Batteriepass, PCF, LCA & ESG",
  description:
    "Sustainista bietet ESG-Analyse & Nachhaltigkeitsbericht, Product Carbon Footprint (ISO 14067), LCA-Berechnung (ISO 14040/14044), Digitalen Produktpass (EU ESPR) und KI-Automatisierung für KMU in Österreich und DACH.",
  alternates: {
    canonical: "https://www.example.invalid/produkte",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte",
    title: "Leistungen & Produkte: ESG-Analyse, DPP, PCF, LCA & KI-Automatisierung | Sustainista",
    description:
      "Sustainista bietet ESG-Analyse & Nachhaltigkeitsbericht, Product Carbon Footprint (ISO 14067), LCA-Berechnung (ISO 14040/14044), Digitalen Produktpass (EU ESPR) und KI-Automatisierung für KMU in Österreich und DACH.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "Sustainista Leistungen & Produkte" }],
  },
};

const products = [
  {
    num: "01",
    slug: "ki-automatisierung",
    badge: "AI Ready",
    title: "KI-Automatisierung & Operational Intelligence",
    subtitle: "Dashboards · AI Assistenten · Prozessautomatisierung",
    description:
      "Daten liegen irgendwo. Prozesse laufen manuell. Niemand hat den Überblick. Wir bauen Systeme, die das ändern: Live-Dashboards, KI-Assistenten auf Basis Ihres internen Regelwerks und Automatisierungen, die bestehende Tools verbinden. Keine Prototypen. Systeme, die täglich im Einsatz sind.",
    features: [
      "Operational-Intelligence-Dashboards (CO₂, Energie, CAPA)",
      "KI-Assistent für Microsoft Teams & SharePoint",
      "Prozessautomatisierung mit Power Automate",
      "Enablon-Integration & Datensynchronisation",
      "Kein Systemwechsel, wir verbinden, was vorhanden ist",
    ],
  },
  {
    num: "02",
    slug: "product-carbon-footprint",
    badge: "ISO 14067",
    title: "Product Carbon Footprint",
    subtitle: "ISO 14067 · LCA · CO₂ je Produkt",
    description:
      "Produktspezifische CO₂-Bilanz nach ISO 14067, für Ausschreibungen, Kund:innenanforderungen und strategische Entscheidungen entlang des Produktlebenszyklus.",
    features: [
      "Scope 1 bis 3 je Produkt (ISO 14067)",
      "Lebenszyklus-Analyse (LCA-basiert)",
      "Hotspot-Analyse & Handlungsempfehlungen",
      "Kommunikationsmaterial für Kund:innen",
      "Einbindung in ESG-Bericht möglich",
    ],
  },
  {
    num: "03",
    slug: "digitaler-produktpass",
    badge: "Circular Business",
    title: "Digitaler Produktpass",
    subtitle: "ESPR je Produktgruppe · Batteriepass ab 18.02.2027",
    description:
      "Der Digitale Produktpass (DPP) wird durch neue EU-Regularien schrittweise verpflichtend. Sustainista unterstützt Unternehmen beim Aufbau der Datenstruktur, der Lieferkettenanalyse und der vollständigen Umsetzung.",
    features: [
      "Datenstruktur & Datenmodell aufbauen",
      "Lieferkette analysieren & Lücken schließen",
      "QR-Code & maschinenlesbarer Produktpass",
      "Integration in bestehende Systeme",
      "ESPR-konforme Umsetzung",
    ],
  },
  {
    num: "04",
    slug: "esg-analyse",
    badge: "ESG Ready",
    title: "ESG-Analyse & Nachhaltigkeitsbericht",
    subtitle: "CO₂-Bilanz · VSME · Nachhaltigkeitsbericht",
    description:
      "Kunden, Banken und Ausschreibungen fragen Nachhaltigkeitsdaten an. Wir liefern strukturierte ESG-Analysen, CO₂-Bilanzen und Berichte nach VSME in 4 bis 6 Wochen.",
    features: [
      "CO₂-Bilanz nach GHG Protocol (Scope 1 bis 3)",
      "ESG-Erstbericht für Banken & Investor:innen",
      "VSME-Bericht für Kunden & Banken",
      "Lieferantenfragebogen & Datenabfrage",
      "Geförderter Einstieg in Wien und NÖ",
    ],
  },
  {
    num: "05",
    slug: "lca-berechnung",
    badge: "ISO 14040/14044",
    title: "LCA-Berechnung",
    subtitle: "Life Cycle Assessment · Umweltwirkungen · Drei Pakete",
    description:
      "Eine Life Cycle Assessment macht sichtbar, welche ökologischen Auswirkungen ein Produkt über seinen gesamten Lebenszyklus verursacht, als Grundlage für Produktentwicklung, Einkauf, ESG-Berichte und regulatorische Anforderungen.",
    features: [
      "Quick LCA Check (1 bis 2 Wochen)",
      "Product Impact Assessment (3 bis 5 Wochen)",
      "Scientific LCA nach ISO 14040/14044",
      "Hotspot-Analyse & Handlungsempfehlungen",
      "Grundlage für Digitalen Produktpass & ESG-Bericht",
    ],
  },
  {
    num: "06",
    slug: "circular-stock-management",
    badge: "Circular Stock",
    title: "Circular Stock Management für Mode",
    subtitle: "Restbestände · Retouren · ESPR-Vernichtungsverbot",
    description:
      "Restbestände, Retouren und unverkaufte Mode strukturiert entscheiden, dokumentieren und in wirtschaftlich sinnvolle Kreislaufwege überführen.",
    features: [
      "Entscheidungslogik für unverkaufte Ware & Retouren",
      "Belastbare Nachweise für das ESPR-Vernichtungsverbot",
      "Datenbasierte Bewertung von Kreislaufwegen",
      "Prozesse für nicht konforme Ware",
      "Anbindung an Digitalen Produktpass möglich",
    ],
  },
  {
    num: "07",
    slug: "ppwr-compliance",
    badge: "PPWR seit 2026",
    title: "PPWR Compliance",
    subtitle: "Verpackungsdaten · ARA · LUCID · EPR-Meldungen",
    description:
      "Die EU-Verpackungsverordnung gilt seit 12. August 2026. Wir verbinden Produkt-, Verpackungs- und Versanddaten zu einem nachvollziehbaren Compliance-Prozess: Meldemengen aus tatsächlichen Sendungen statt aus Excel-Schätzungen, geprüfte Meldungsentwürfe für ARA und LUCID, jede Zahl bis zur Quelle nachvollziehbar.",
    features: [
      "Versionierte Packaging-BOM statt verstreuter Excel-Dateien",
      "Meldemengen aus tatsächlichen Versand- und Paketdaten",
      "ARA-Meldedaten berechnen, prüfen und dokumentieren",
      "LUCID- und Systemdaten konsistent vorbereiten",
      "Weitere EPR-Module: Elektro, Batterien, Einwegkunststoff",
    ],
  },
  {
    num: "08",
    slug: "nachhaltigkeitsbericht",
    badge: "VS und GRI",
    title: "Nachhaltigkeitsbericht",
    subtitle: "Software · VS · GRI · Scope 1 und 2",
    description:
      "Software für Nachhaltigkeitsberichte nach dem freiwilligen Standard (VS) und nach GRI. Jeder Wert hat einen Beleg, jede Bestätigung einen Namen. Freigabe erst, wenn alle Pflichtangaben erfüllt oder begründet ausgelassen sind.",
    features: [
      "VS nach Delegierter Verordnung (EU) 2026/1560",
      "GRI mit Inhaltsindex, Wesentlichkeit nach GRI 3",
      "Scope 1 und 2 mit Faktoren des Umweltbundesamts",
      "Vier-Augen-Prüfung und Beleg je Wert",
      "Export als PDF, DOCX und XBRL",
    ],
  },
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Sustainista Leistungen",
  "url": "https://www.example.invalid/produkte",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/ki-automatisierung",
        "name": "KI-Automatisierung & Operational Intelligence",
        "description": "Dashboards, KI-Assistenten (Microsoft Teams/SharePoint), Prozessautomatisierung mit Power Automate. Kein Systemwechsel, Verbindung bestehender Tools.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/ki-automatisierung",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/product-carbon-footprint",
        "name": "Product Carbon Footprint (ISO 14067)",
        "description": "Produktspezifische CO₂-Bilanz nach ISO 14067 und GHG Protocol, Scope 1 bis 3, Lebenszyklus-Analyse (LCA), Hotspot-Analyse und Kommunikationsmaterial.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/product-carbon-footprint",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/digitaler-produktpass",
        "name": "Digitaler Produktpass (DPP)",
        "description": "EU ESPR-konforme Implementierung des Digitalen Produktpasses: Datenstruktur, Lieferkettenanalyse, QR-Code-Anbindung, Integration in bestehende Systeme.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/digitaler-produktpass",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/esg-analyse",
        "name": "ESG-Analyse & Nachhaltigkeitsbericht",
        "description": "CO₂-Bilanz nach GHG Protocol (Scope 1 bis 3), ESG-Erstbericht nach VSME für Banken und Kunden, Lieferantenfragebogen und geförderter Einstieg über ÖkoBusiness Wien oder Ökomanagement NÖ.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/esg-analyse",
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/lca-berechnung",
        "name": "LCA-Berechnung (Life Cycle Assessment)",
        "description": "Life Cycle Assessment nach ISO 14040/14044: Quick LCA Check, Product Impact Assessment und Scientific LCA. Hotspot-Analyse, Handlungsempfehlungen und Kommunikationsmaterial.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/lca-berechnung",
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/circular-stock-management",
        "name": "Circular Stock Management für Mode",
        "description": "Restbestände, Retouren und unverkaufte Mode strukturiert entscheiden, dokumentieren und in wirtschaftlich sinnvolle Kreislaufwege überführen, inklusive Nachweisen für das ESPR-Vernichtungsverbot.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland", "Schweiz"],
        "url": "https://www.example.invalid/produkte/circular-stock-management",
      },
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/ppwr-compliance",
        "name": "PPWR Compliance",
        "description": "Packaging-Compliance nach Verordnung (EU) 2025/40: Verpackungsdaten strukturieren und versionieren, Meldemengen aus tatsächlichen Versanddaten berechnen, ARA- und LUCID-Meldungen prüfbar vorbereiten.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich", "Deutschland"],
        "url": "https://www.example.invalid/produkte/ppwr-compliance",
      },
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Service",
        "@id": "https://www.example.invalid/produkte/nachhaltigkeitsbericht",
        "name": "Nachhaltigkeitsbericht nach VS und GRI",
        "description": "Software für Nachhaltigkeitsberichte nach dem freiwilligen Standard (VS) und nach GRI: Beleg je Wert, Vier-Augen-Prüfung, Scope 1 und 2, Wesentlichkeit nach GRI 3, Freigabe-Prüfung, Export als PDF, DOCX und XBRL.",
        "provider": { "@id": "https://www.example.invalid/#organization" },
        "areaServed": ["Österreich"],
        "url": "https://www.example.invalid/produkte/nachhaltigkeitsbericht",
      },
    },
  ],
};

export default function ProdukteSeite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header relative min-h-[45vh] flex items-end pt-32 pb-16 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <span className="eyebrow mb-8 block">Unsere Leistungen</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Produkte &<br />
              <span className="text-brand-600">Lösungen</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-12">
              Von der ESG-Analyse über Product Carbon Footprint, LCA-Berechnung und den Digitalen Produktpass
              bis zur vollständigen KI-Automatisierung.
            </p>
            {/* Angebot visualization */}
            <div className="w-full max-w-5xl">
              <Image
                src="/angebot-sustainista.png"
                alt="Sustainista Angebot: vom Förder-Check zur AI Automation"
                width={1920}
                height={613}
                className="w-full h-auto rounded-card border border-border"
                style={{ boxShadow: "0 8px 40px rgba(79,119,45,0.10), 0 2px 8px rgba(0,0,0,0.04)" }}
                priority
              />
            </div>
          </div>
        </section>

        <ComplianceCheckTeaser />

        {/* Products */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-6">
            {products.map((p) => (
              <div
                key={p.num}
                className="relative bg-canvas rounded-card p-8 sm:p-10 border border-border shadow-ambient-low group hover:shadow-ambient-medium transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-border bg-surface text-ink-tertiary">
                        {p.badge}
                      </span>
                      <span className="text-xs text-ink-tertiary font-mono">{p.num}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight mb-1">
                      {p.title}
                    </h2>
                    <p className="text-xs text-ink-tertiary font-medium uppercase tracking-wider mb-5">{p.subtitle}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-7 max-w-lg">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/produkte/${p.slug}`}
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-btn font-semibold text-sm transition-colors"
                      >
                        Deep Dive
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href="mailto:stefan.bauer@example.invalid"
                        className="inline-flex items-center gap-2 border border-border text-ink-secondary hover:text-ink hover:border-brand-300 px-6 py-3 rounded-btn text-sm font-medium transition-all bg-canvas"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Kontaktieren
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                          <span className="text-sm text-ink-secondary leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ElektroCallout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
