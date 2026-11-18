import Navigation from "@/components/Navigation";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Recycle, CheckSquare, FileSearch, Clock, Code2, Database, Calculator, FileOutput } from "lucide-react";
import OpenLcaBadge from "@/components/lca/OpenLcaBadge";
import ProductSystemGraph from "@/components/lca/ProductSystemGraph";
import LifecycleBand from "@/components/lca/LifecycleBand";
import HotspotSankey from "@/components/lca/HotspotSankey";
import ImpactRadar from "@/components/lca/ImpactRadar";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { DoorOpen as ValueDoorOpen, Scale as ValueScale, ShieldCheck as ValueShieldCheck } from "lucide-react";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("LCA-Berechnung: Ökobilanz nach ISO 14040 mit openLCA"),
  description:
    "Life Cycle Assessment (LCA) nach ISO 14040/14044, vom pragmatischen Quick LCA Check bis zur wissenschaftlich fundierten Vollanalyse. Für KMU in Österreich und DACH.",
  alternates: { canonical: "https://www.example.invalid/produkte/lca-berechnung" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/lca-berechnung",
    title: "LCA-Berechnung (Life Cycle Assessment) bei Sustainista",
    description: "Umweltwirkungen Ihres Produkts über den gesamten Lebenszyklus sichtbar machen. Drei Pakete: Quick LCA Check, Product Impact Assessment, Scientific LCA.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "LCA-Berechnung bei Sustainista" }],
  },
};

const faqs = [
  {
    q: "Was ist eine Life Cycle Assessment (LCA)?",
    a: "Eine LCA (Lebenszyklusanalyse) bewertet nach ISO 14040 und ISO 14044 die ökologischen Auswirkungen eines Produkts über seinen gesamten Lebenszyklus: von Rohstoffgewinnung und Produktion über Transport und Nutzung bis zur Entsorgung oder Wiederverwertung. Sie ist die methodische Grundlage für Environmental Product Declarations (EPD nach EN 15804), für den Digitalen Produktpass, den die EU-Ökodesign-Verordnung (ESPR) ab 2026 schrittweise vorschreibt, sowie für eine vollständige Scope-3-Bilanzierung nach ISO 14064 und GHG Protocol.",
  },
  {
    q: "Was ist der Unterschied zwischen LCA und Product Carbon Footprint?",
    a: "Der Product Carbon Footprint (PCF) nach ISO 14067 ist eine Teilmenge der LCA und beschränkt sich auf Treibhausgasemissionen in CO₂-Äquivalenten. Eine vollständige LCA betrachtet zusätzlich Wasserverbrauch, Feinstaub (PM2,5-Äquivalente), Ressourcenverknappung, Ökotoxizität und weitere Wirkungskategorien und liefert damit das umfassendere Bild, das für EPDs nach EN 15804, für öffentliche Beschaffung (BBG Österreich) oder für ÖGNI/DGNB-Zertifizierungen im Baubereich benötigt wird.",
  },
  {
    q: "Welches LCA-Paket passt zu meinem Unternehmen?",
    a: "Das hängt vom geplanten Verwendungszweck ab. Für erste Einschätzungen und interne Entscheidungen reicht der Quick LCA Check (Screening, 4–8 Wochen). Für strukturierte Produktoptimierung, Scope-3-Grundlagen und Berichtsanforderungen empfehlen wir das Product Impact Assessment. Wenn Sie eine EPD nach EN 15804, Daten für den Digitalen Produktpass (ESPR) oder extern prüffähige Ergebnisse für Ausschreibungen benötigen, ist die Scientific LCA (cradle-to-grave, 8–16 Wochen) die richtige Wahl.",
  },
  {
    q: "Wie lange dauert eine LCA?",
    a: "Ein Screening- oder Quick LCA Check ist in 4 bis 8 Wochen abgeschlossen, das Product Impact Assessment dauert 6 bis 10 Wochen. Eine vollständige cradle-to-grave Scientific LCA nach ISO 14040/14044 benötigt je nach Produktkomplexität und Datenverfügbarkeit 8 bis 16 Wochen. Zum Vergleich: Externe LCA-Projekte bei Big-4-Beratungen kosten typischerweise 15.000 bis 60.000 EUR. Sustainista ermöglicht österreichischen KMU einen deutlich zugänglicheren Einstieg ohne Abstriche bei der Normkonformität.",
  },
  {
    q: "Welche Normen und Standards liegen der LCA zugrunde?",
    a: "Die methodische Basis bilden ISO 14040 (Grundsätze und Rahmenbedingungen) und ISO 14044 (Anforderungen und Leitlinien). Für produktspezifische Emissionsberechnungen gilt ISO 14067 (Product Carbon Footprint). Für GHG-Bilanzierung auf Unternehmensebene kommt ISO 14064 zum Einsatz. Im Bausektor definiert EN 15804 die Anforderungen an Environmental Product Declarations (EPD), die für ÖGNI-, DGNB- und LEED-Zertifizierungen sowie die österreichische öffentliche Beschaffung (BBG) zunehmend verpflichtend werden.",
  },
  {
    q: "Was ist eine EPD und brauche ich dafür eine LCA?",
    a: "Eine Environmental Product Declaration (EPD) ist ein nach EN 15804 standardisierter, unabhängig verifizierter Umweltbericht für ein Produkt. Sie wird für EU Green Deal-konforme Beschaffung (BBG Österreich), ÖGNI/DGNB-Zertifizierungen und zunehmend für private Bauherren verlangt. Die Grundlage jeder EPD ist eine vollständige LCA nach ISO 14040/14044. Ohne diese kann keine EPD erstellt werden.",
  },
  {
    q: "Wie hängt die LCA mit dem Digitalen Produktpass (ESPR) zusammen?",
    a: "Die EU-Ökodesign-Verordnung für nachhaltige Produkte (ESPR) schreibt ab 2026 für immer mehr Produktgruppen einen Digitalen Produktpass vor, der Umweltdaten über den gesamten Lebenszyklus dokumentiert. Die LCA liefert die quantitativen Grundlagen für diese Passanforderungen, insbesondere Klimawirkung (CO₂e), Ressourcenverbrauch und End-of-Life-Daten. Unternehmen, die jetzt eine LCA durchführen, sind regulatorisch gut vorbereitet.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/lca-berechnung",
      "name": "LCA-Berechnung: Life Cycle Assessment",
      "description": "Life Cycle Assessment (LCA) nach ISO 14040/14044, vom Quick LCA Check bis zur Scientific LCA. Für Produktentwicklung, ESG-Berichte und regulatorische Anforderungen.",
      "url": "https://www.example.invalid/produkte/lca-berechnung",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": "2026-06-20",
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/lca-berechnung#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/lca-berechnung#service",
      "name": "LCA-Berechnung (Life Cycle Assessment)",
      "description": "Life Cycle Assessment nach ISO 14040/14044, drei Pakete vom Quick LCA Check bis zur Scientific LCA. Umweltwirkungen über den gesamten Produktlebenszyklus sichtbar machen.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [{ "@type": "Country", "name": "Österreich" }, { "@type": "Country", "name": "Deutschland" }, { "@type": "Country", "name": "Schweiz" }],
      "serviceType": "Life Cycle Assessment",
      "url": "https://www.example.invalid/produkte/lca-berechnung",
    },
    {
      "@id": "https://www.example.invalid/produkte/lca-berechnung#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        { "@type": "ListItem", "position": 3, "name": "LCA-Berechnung", "item": "https://www.example.invalid/produkte/lca-berechnung" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

const benefits = [
  { icon: Recycle, label: "ISO 14040 / 14044 konform" },
  { icon: FileSearch, label: "Hotspot-Analyse inklusive" },
  { icon: CheckSquare, label: "EPD- & ESPR-tauglich" },
  { icon: Clock, label: "Screening LCA ab 4–8 Wochen" },
];

const packages = [
  {
    num: "01",
    title: "Quick LCA Check",
    subtitle: "Screening & Orientierung",
    desc: "Wir analysieren die wichtigsten Lebenszyklusphasen Ihres Produkts im Screening-Verfahren, identifizieren die zentralen Umwelt-Hotspots und zeigen, welche Faktoren den größten Einfluss haben. Das Ergebnis ist kompakt, verständlich und entscheidungsorientiert, ideal als erster Schritt, bevor eine vollständige ISO-14040-Analyse folgt.",
    duration: "4 bis 8 Wochen",
    boundary: "gate" as const,
    depth: 1,
    for: [
      "Erste Produktbewertungen und Materialvergleiche",
      "Interne Managemententscheidungen und Einkaufsstrategien",
      "Vorbereitung auf Kundenanforderungen und ESG-Fragebögen",
      "Grundlage für die Priorisierung weiterer LCA-Investitionen",
    ],
  },
  {
    num: "02",
    title: "Product Impact Assessment",
    subtitle: "Strukturierte Produktanalyse",
    desc: "Wir erfassen relevante Primär- und Sekundärdaten entlang des gesamten Produktlebenszyklus, berechnen zentrale Umweltwirkungen nach anerkannten Methoden und bereiten die Ergebnisse so auf, dass sie intern und extern nutzbar sind. Die Analyse deckt upstream Scope-3-Kategorien 1–8 (Vorleistungen, Lieferkette) sowie downstream Kategorien 9–14 (Nutzungsphase, End-of-Life) ab.",
    duration: "6 bis 10 Wochen",
    boundary: "grave" as const,
    depth: 2,
    for: [
      "Nachhaltigkeitsstrategie und CO₂-Reduktionspfade auf Produktebene",
      "Produktoptimierung und evidenzbasierte Materialentscheidungen",
      "Scope-3-Berichterstattung (Kategorie 1–14) und ESG-Berichte",
      "Kommunikation gegenüber Kunden, Investoren und Einkäufern",
    ],
  },
  {
    num: "03",
    title: "Scientific LCA",
    subtitle: "ISO-konform, cradle-to-grave",
    desc: "Vollständige LCA nach ISO 14040/14044, cradle-to-grave, mit definiertem Ziel und Untersuchungsrahmen, validierten Primärdaten und vollständiger Dokumentation aller Annahmen und Datenquellen. Das Ergebnis ist extern prüfbar, EPD-fähig (EN 15804) und liefert die Produktpassdaten, die die EU-Ökodesign-Verordnung (ESPR) ab 2026 schrittweise vorschreibt. Typische Kosten bei Big-4-Beratern: 15.000 bis 60.000 EUR. Wir ermöglichen österreichischen KMU einen zugänglichen Einstieg.",
    duration: "8 bis 16 Wochen",
    boundary: "full" as const,
    depth: 3,
    for: [
      "Environmental Product Declaration (EPD nach EN 15804) als Grundlage",
      "Digitaler Produktpass (ESPR) und EU Green Deal Beschaffung (BBG AT)",
      "ÖGNI- und DGNB-Zertifizierungen im Baubereich",
      "Externe Reviews, wissenschaftliche Veröffentlichungen, ESG-Berichte",
    ],
  },
];

const openLcaPoints = [
  { icon: Code2, title: "Offene Software", body: "openLCA ist Open Source, entwickelt von GreenDelta in Berlin. Jede Rechnung lässt sich mit denselben Daten nachvollziehen, ohne Lizenz-Blackbox." },
  { icon: Database, title: "Validierte Datenbanken", body: "Hintergrunddaten aus ecoinvent, ÖKOBAUDAT, ProBas oder Agribalyse, je nach Branche. Eigene Primärdaten ersetzen Sekundärdaten dort, wo sie den Unterschied machen." },
  { icon: Calculator, title: "Anerkannte Methoden", body: "Wirkungsabschätzung nach EF 3.1, ReCiPe 2016 oder CML, mit Beitrags-, Sensitivitäts- und Unsicherheitsanalyse." },
  { icon: FileOutput, title: "Offene Formate", body: "Ergebnisse und Modelle lassen sich als JSON-LD oder ILCD austauschen, die Brücke zu EPD-Programmen und zum Digitalen Produktpass." },
];


const deliverables = [
  {
    title: "Sachbilanz (Life Cycle Inventory)",
    body: "Vollständige Erfassung aller Stoff- und Energieflüsse entlang des Produktlebenszyklus als quantitative Grundlage der Bewertung. Die LCI ist das Herzstück jeder ISO-14040-konformen Analyse und bestimmt die Qualität aller nachgelagerten Ergebnisse.",
  },
  {
    title: "Wirkungsabschätzung (LCIA)",
    body: "Berechnung der Umweltwirkungskategorien nach etablierten Methoden (z. B. ReCiPe, CML): Klimawandel (kg CO₂e), Feinstaub (PM2,5-Äquivalente), Wasserverbrauch, Ressourcenverknappung, Ökotoxizität und mehr. So wird aus Datenpunkten ein entscheidungsrelevantes Bild.",
  },
  {
    title: "Hotspot-Analyse",
    body: "Identifikation der Lebenszyklusphasen, Materialien und Prozesse mit dem größten Umwelteinfluss. Oft sind 80 % der Emissionen auf 20 % der Inputs zurückzuführen. Diese Analyse ist die Grundlage für gezielte Optimierung mit maximaler Wirkung.",
  },
  {
    title: "Handlungsempfehlungen",
    body: "Konkrete, priorisierte Maßnahmen zur Reduktion der wichtigsten Umweltwirkungen: von Materialtausch über Lieferantenwahl bis zu Designänderungen. Jede Empfehlung wird nach Emissionsreduktionspotenzial und Umsetzbarkeit bewertet.",
  },
  {
    title: "LCA-Bericht (ISO 14040/14044)",
    body: "Dokumentierter, transparenter Bericht mit Zieldefinition, Systemgrenzen, Datenquellen, Annahmen und Ergebnissen nach ISO 14040/14044. Bei der Scientific LCA ist der Bericht extern prüfbar und bildet die Grundlage für EPDs (EN 15804) sowie ESPR-Produktpassdaten.",
  },
  {
    title: "Kommunikationsmaterial & Scope-3-Grundlage",
    body: "Aufbereitete Ergebnisse für Produktkataloge, EU-Ausschreibungen (BBG AT), Nachhaltigkeitsberichte und Kundengespräche. Die Daten fließen direkt in die Scope-3-Bilanzierung (Kategorien 1–14 nach GHG Protocol / ISO 14064) und in ESG-Berichte nach VSME ein.",
  },
];

const steps = [
  { n: "01", title: "Ziel & Systemgrenze", body: "Gemeinsam legen wir nach ISO 14040 fest, welches Produkt analysiert wird, für welchen Zweck die LCA erstellt wird (intern, EPD, ESPR-Produktpass, ESG-Bericht) und welche Lebenszyklusphasen in die Betrachtung einfließen. Eine klare Systemgrenze verhindert spätere Nacharbeiten und sichert die Vergleichbarkeit." },
  { n: "02", title: "Datenbeschaffung", body: "Erhebung von Produktionsdaten, Einkaufsmengen, Energieverbräuchen (inkl. österreichischer Strommix 0,152 kg CO₂e/kWh laut UBA AT) und Lieferantendaten, strukturiert über unser Erhebungs-Kit. Wo Primärdaten fehlen, nutzen wir validierte Sekundärdatenbanken (ecoinvent, GaBi)." },
  { n: "03", title: "Modellierung & Berechnung", body: "Aufbau des LCA-Modells, Berechnung der Umweltwirkungskategorien mit validierten Datenbanken und, bei der Scientific LCA, Sensitivitäts- und Unsicherheitsanalyse. Die Ergebnisse werden nach Lebenszyklusphasen und Materialgruppen aufgeschlüsselt, um Hotspots eindeutig zu identifizieren." },
  { n: "04", title: "Bericht & Maßnahmen", body: "Finaler LCA-Bericht nach ISO 14040/14044, Hotspot-Analyse und konkrete, priorisierte Handlungsempfehlungen. Bei der Scientific LCA ist der Bericht extern prüffähig und eignet sich als Grundlage für eine EPD nach EN 15804, für den Digitalen Produktpass (ESPR) oder für öffentliche Ausschreibungen nach BBG-Kriterien." },
];

const useCases = [
  { label: "Produktentwicklung & evidenzbasierte Materialentscheidungen" },
  { label: "ESG-Berichte, VSME und Scope-3-Bilanzierung (Kat. 1–14)" },
  { label: "EPD nach EN 15804 für Ausschreibungen & BBG-Beschaffung" },
  { label: "Digitaler Produktpass (ESPR), regulatorisch vorbereitet" },
  { label: "ÖGNI / DGNB-Zertifizierung im Bau- und Immobiliensektor" },
];

export default function LcaBerechnung() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--kreislauf relative min-h-[55vh] flex items-end pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">LCA-Berechnung</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">05 ISO 14040 / 14044</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              LCA-<br />
              <span className="text-brand-600">Berechnung</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-8">
              Umweltwirkungen Ihres Produkts über den gesamten Lebenszyklus sichtbar machen,
              vom pragmatischen Quick Check bis zur wissenschaftlich fundierten Vollanalyse.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-surface border border-border rounded-card px-4 py-3">
                  <Icon className="w-4 h-4 text-brand-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-ink leading-snug">{label}</span>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <OpenLcaBadge />
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:stefan.bauer@example.invalid?subject=LCA-Berechnung Anfrage" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                stefan.bauer@example.invalid
              </a>
              <a href="#pakete" className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Pakete ansehen
              </a>
            </div>
          </div>
        </section>

        {/* Warum LCA */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="eyebrow mb-4">Warum LCA?</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Klar verstehen, wo<br />
                  <span className="text-ink-tertiary">Ihr Produkt wirklich steht.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  Eine Life Cycle Assessment macht sichtbar, welche ökologischen Auswirkungen ein Produkt
                  über seinen gesamten Lebenszyklus hinweg verursacht. Von Rohstoffen und Produktion über
                  Transport und Nutzung bis hin zu Entsorgung, Recycling oder Wiederverwendung.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">
                  Für Unternehmen wird eine <strong className="text-ink">LCA</strong> damit zur fundierten
                  Entscheidungsgrundlage für Produktentwicklung, Einkauf, Kommunikation,
                  Nachhaltigkeitsstrategie und regulatorische Anforderungen.
                </p>
                <div className="space-y-3">
                  {useCases.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-canvas border border-border rounded-card px-4 py-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span className="text-sm text-ink font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wirkungsprofil */}
              <ImpactRadar />
            </div>
          </div>
        </section>

        {/* Lebenszyklus nach EN 15804 */}
        <section className="py-24 bg-canvas border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Lebenszyklus</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Von der Wiege<br />
                  <span className="text-ink-tertiary">bis zur Gutschrift.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Wir gliedern jedes Modell nach den Modulen der EN 15804. So ist auf einen Blick klar,
                was in der Systemgrenze liegt und was nicht, und Ergebnisse bleiben über Produkte und
                Jahre hinweg vergleichbar.
              </p>
            </div>
            <LifecycleBand boundary="full" />
          </div>
        </section>

        {/* openLCA */}
        <section id="openlca" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <Image src="/openlca-logo.png" alt="openLCA" width={520} height={317} className="h-16 w-auto mb-8" />
                <p className="eyebrow mb-4">Unser Werkzeug</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Gerechnet in openLCA.<br />
                  <span className="text-ink-tertiary">Nachrechenbar für alle.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Wir modellieren jede Ökobilanz in openLCA. Das Produktsystem bildet ab, wie Materialien,
                  Energie und Prozesse zusammenhängen, und jede Zahl im Bericht lässt sich bis zu ihrem
                  Datensatz zurückverfolgen. Für Prüfer, Kunden und Behörden ist das der Unterschied
                  zwischen einer Behauptung und einem Nachweis.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 content-start lg:pt-24">
                {openLcaPoints.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="border-t-2 border-brand-600 pt-4">
                    <Icon className="w-5 h-5 text-brand-600 mb-3" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="text-sm font-bold text-ink mb-1.5">{title}</h3>
                    <p className="text-xs text-ink-secondary leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <ProductSystemGraph />
          </div>
        </section>

        {/* Hotspots */}
        <section className="py-24 bg-canvas border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Hotspot-Analyse</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Drei Bauteile,<br />
                  <span className="text-ink-tertiary">zwei Drittel der Wirkung.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Die Beitragsanalyse zeigt, wo sich Optimierung lohnt. Im Beispiel entfallen rund 69 % der
                Klimawirkung auf Aluminium, Zellen und Elektronik. Dort setzen die Handlungsempfehlungen an,
                nicht bei der Verpackung.
              </p>
            </div>
            <HotspotSankey />
          </div>
        </section>

        {/* Die drei Pakete */}
        <section id="pakete" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Leistungspakete</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
              Drei Pakete.<br />
              <span className="text-ink-tertiary">Eine passende Tiefe.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-xl mb-14">
              Nicht jedes Unternehmen braucht dieselbe Tiefe. Wir helfen Ihnen, die passende Analysestufe
              für Ihren Bedarf zu wählen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.num} className={`border rounded-card p-7 shadow-ambient-low flex flex-col ${pkg.depth === 3 ? "border-brand-600/50 bg-gradient-to-b from-brand-50 to-canvas" : "border-border bg-canvas"}`}>
                  <span className="text-3xl font-black text-brand-500 mb-4 block">{pkg.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-border bg-surface text-ink-tertiary self-start mb-4">
                    {pkg.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-ink mb-3">{pkg.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-5 flex-1">{pkg.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.for.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
                        <span className="text-xs text-ink-tertiary leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border space-y-4">
                    <LifecycleBand boundary={pkg.boundary} compact />
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
                        Datentiefe
                        <span className="flex gap-1" role="img" aria-label={`${pkg.depth} von 3`}>
                          {[1, 2, 3].map((d) => (
                            <span key={d} className={`w-4 h-1.5 rounded-sm ${d <= pkg.depth ? "bg-brand-600" : "bg-border"}`} />
                          ))}
                        </span>
                      </span>
                      <span className="text-xs font-semibold text-ink">{pkg.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Was Sie erhalten */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Leistungsumfang</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Was Sie erhalten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((d) => (
                <div key={d.title} className="border border-border rounded-card p-6 bg-canvas shadow-ambient-low">
                  <h3 className="text-sm font-bold text-ink mb-2">{d.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorgehen */}
        <section id="vorgehen" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Vorgehen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Von den Daten<br />
              <span className="text-ink-tertiary">zur belastbaren LCA.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div key={s.n} className="relative bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute top-11 -right-4 w-4 border-t-2 border-dashed border-brand-300" aria-hidden="true" />
                  )}
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-700 text-canvas text-sm font-bold mb-5 tabular-nums">{s.n}</span>
                  <h3 className="text-base font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Entscheiden mit Daten."
          titleB="Nicht mit Bauchgefühl."
          values={[
              { icon: ValueScale, title: "Fehlinvestitionen vermeiden", body: "Bevor Sie ein Material tauschen oder eine Linie umbauen, zeigt die LCA, ob sich die Wirkung wirklich verbessert oder nur verlagert." },
              { icon: ValueDoorOpen, title: "Marktzugang über EPD", body: "Eine EPD nach EN 15804 ist im Bau und in der öffentlichen Beschaffung oft die Eintrittskarte. Die Scientific LCA ist die Grundlage dafür." },
              { icon: ValueShieldCheck, title: "Green Claims absichern", body: "Umweltaussagen müssen belegbar sein. Eine nachrechenbare LCA schützt Marketing und Vertrieb vor Greenwashing-Vorwürfen." },
          ]}
          testimonial={TESTIMONIALS.lca}
        />

        <ProductTrends product="LCA-Berechnung" label="der LCA-Berechnung" />

        {/* FAQ */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zur LCA-Berechnung
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        <ElektroCallout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
