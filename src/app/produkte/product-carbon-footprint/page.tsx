import Navigation from "@/components/Navigation";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import type { Metadata } from "next";
import { BarChart2, Target, FileText, Clock } from "lucide-react";
import OpenLcaBadge from "@/components/lca/OpenLcaBadge";
import PcfDatasheet from "@/components/lca/PcfDatasheet";
import PcfWaterfall from "@/components/lca/PcfWaterfall";
import LifecycleBand from "@/components/lca/LifecycleBand";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { BadgeEuro as ValueBadgeEuro, Repeat as ValueRepeat, Trophy as ValueTrophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Carbon Footprint (PCF) nach ISO 14067",
  description:
    "Produktspezifische CO₂-Bilanz nach ISO 14067 und GHG Protocol, für Ausschreibungen, Scope-3-Anforderungen und strategische Klimaziele. Fertig in 3 bis 6 Wochen. Für KMU in Österreich und DACH.",
  alternates: { canonical: "https://www.example.invalid/produkte/product-carbon-footprint" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/product-carbon-footprint",
    title: "Product Carbon Footprint (ISO 14067) bei Sustainista",
    description: "Produktspezifische CO₂-Bilanz nach ISO 14067 und GHG Protocol. Scope 1 bis 3, LCA-basiert. Für Ausschreibungen und Scope-3-Anforderungen.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "Product Carbon Footprint PCF bei Sustainista" }],
  },
};

const faqs = [
  {
    q: "Was ist der Unterschied zwischen PCF und Corporate Carbon Footprint?",
    a: "Beim Corporate Carbon Footprint (CCF) wird das gesamte Unternehmen über alle Scope-1-, -2- und -3-Emissionen bilanziert. Der Product Carbon Footprint (PCF) nach ISO 14067 fokussiert auf ein einzelnes Produkt über seinen gesamten Lebenszyklus und weist das Ergebnis in kg CO₂e pro Produkteinheit aus. Beide Methoden ergänzen sich: Der CCF zeigt, wie klimaeffizient ein Unternehmen insgesamt ist; der PCF liefert die produktspezifischen Zahlen, die Kund:innen, Ausschreibungen und ab 2027 der Digitale Produktpass konkret einfordern.",
  },
  {
    q: "Was ist der Unterschied zwischen PCF und LCA?",
    a: "Ein PCF ist eine vereinfachte Lebenszyklusanalyse, die ausschließlich klimarelevante Treibhausgase in kg CO₂-Äquivalenten bewertet, methodisch gestützt auf ISO 14067 und das GHG Protocol Product Standard. Eine vollständige LCA nach ISO 14040/14044 erfasst zusätzlich Wasserverbrauch, Landnutzung, Toxizität, Ozonabbau und weitere Wirkungskategorien. Für die meisten Ausschreibungen, Lieferantenbewertungen und den EU Digitalen Produktpass ist der PCF der gefragte Nachweis, da er schneller umsetzbar und international anerkannt ist.",
  },
  {
    q: "Für welche Produkte eignet sich eine PCF-Berechnung?",
    a: "Für alle physischen Produkte, von Verpackungen und Bauteilen bis zu kompletten Maschinen. Besonders relevant ist der PCF für Zulieferer in der Automobilindustrie (z.B. Voestalpine-Lieferkette), für Produkte die unter die EU-Batterieverordnung 2023/1542 fallen (dort ist der CO₂-Fußabdruck je kWh als Pflichtangabe im Batteriepass vorgeschrieben), sowie für Unternehmen, die an öffentlichen Ausschreibungen über die österreichische BBG oder EU-Vergabeverfahren teilnehmen.",
  },
  {
    q: "Wie lange dauert eine PCF-Berechnung und was kostet sie im Vergleich?",
    a: "Je nach Produktkomplexität und Datenverfügbarkeit 3 bis 6 Wochen. Externe Zertifizierungen durch TÜV oder SGS dauern meist 3 bis 6 Monate und kosten zwischen 8.000 und 20.000 Euro. Unser Ansatz ist deutlich effizienter: Wir liefern einen normenkonformen Bericht nach ISO 14067 in einem Bruchteil der Zeit, der für Kund:innen, Ausschreibungen und die Einbindung in den Digitalen Produktpass verwertbar ist.",
  },
  {
    q: "Was ist die EU PEF-Methode und wie verhält sie sich zum PCF?",
    a: "Die Product Environmental Footprint (PEF)-Methode ist der EU-eigene Standard zur Bewertung von Umweltwirkungen von Produkten und basiert ebenfalls auf einer Lebenszyklusanalyse. Sie ist breiter als ein PCF und deckt 16 Umweltkategorien ab. Für viele Produktgruppen hat die EU sogenannte PEF Category Rules (PEFCRs) verabschiedet, die verbindliche Berechnungsregeln vorgeben. Ein gut dokumentierter PCF nach ISO 14067 bildet eine solide Grundlage für eine spätere PEF-konforme Erweiterung.",
  },
  {
    q: "Kann der PCF für das Produktmarketing genutzt werden?",
    a: "Ja, mit den von uns erstellten Kommunikationsmaterialien können Sie den PCF in Produktkatalogen, Ausschreibungen und gegenüber Kund:innen transparent kommunizieren. Ab 2027 werden PCF-Daten außerdem verpflichtende Felder im Digitalen Produktpass (DPP) nach ESPR-Verordnung, sodass jetzt erhobene Daten direkt in die künftige Pflichtdokumentation einfließen, ohne doppelten Aufwand.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/product-carbon-footprint",
      "name": "Product Carbon Footprint",
      "description": "Produktspezifische CO₂-Bilanz nach ISO 14067 und GHG Protocol, für Ausschreibungen, Scope-3-Anforderungen und strategische Klimaziele.",
      "url": "https://www.example.invalid/produkte/product-carbon-footprint",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": "2026-06-20",
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/product-carbon-footprint#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/product-carbon-footprint#service",
      "name": "Product Carbon Footprint (PCF) nach ISO 14067",
      "description": "Produktspezifische CO₂-Bilanz nach ISO 14067 und GHG Protocol, für Ausschreibungen, Scope-3-Anforderungen und strategische Klimaziele. Fertig in 3 bis 6 Wochen.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [{ "@type": "Country", "name": "Österreich" }, { "@type": "Country", "name": "Deutschland" }, { "@type": "Country", "name": "Schweiz" }],
      "serviceType": "Product Carbon Footprint",
      "url": "https://www.example.invalid/produkte/product-carbon-footprint",
    },
    {
      "@id": "https://www.example.invalid/produkte/product-carbon-footprint#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        { "@type": "ListItem", "position": 3, "name": "Product Carbon Footprint", "item": "https://www.example.invalid/produkte/product-carbon-footprint" },
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
  { icon: BarChart2, label: "Nach ISO 14067" },
  { icon: Target, label: "Hotspot-Analyse inklusive" },
  { icon: FileText, label: "Kommunikationsfertige Berichte" },
  { icon: Clock, label: "Fertig in 3 bis 6 Wochen" },
];


const deliverables = [
  {
    title: "PCF-Bericht nach ISO 14067",
    body: "Vollständige produktspezifische CO₂-Bilanz, normkonform nach ISO 14067 und GHG Protocol Product Standard, prüfbar und für externe Kommunikation geeignet. Der Bericht ist so aufgebaut, dass er direkt als Nachweis in Ausschreibungen und gegenüber Kund:innen verwendet werden kann.",
  },
  {
    title: "Hotspot-Analyse",
    body: "Wir identifizieren, welche Lebenszyklusphasen den größten CO₂-Anteil haben und wo das größte Reduktionspotenzial liegt. So wissen Sie, ob Lieferantenwechsel, Materialsub­stitution oder Prozessoptimierung im eigenen Betrieb die größte Wirkung entfalten.",
  },
  {
    title: "Datenerhebungs-Kit",
    body: "Vorgefertigte Fragebögen für Lieferanten und interne Teams, sodass kein aufwändiges Daten-Sammeln im Alleingang notwendig ist. Das Kit deckt alle relevanten Scope-1-, -2- und -3-Kategorien ab und ist auf österreichische UBA-Emissionsfaktoren abgestimmt.",
  },
  {
    title: "Kommunikationsmaterial",
    body: "Aufbereitete Kennzahlen und Visualisierungen für Produktkataloge, Ausschreibungen, Investor:innen und Kund:innenanfragen. Das Material ist so gestaltet, dass es die Anforderungen der EU-Richtlinie zu Green Claims erfüllt und keine unzulässigen Pauschalaussagen enthält.",
  },
  {
    title: "Digital Product Passport Vorbereitung",
    body: "Der PCF liefert die CO₂-Daten, die ab 2027 als Pflichtfelder im Digitalen Produktpass (DPP) nach ESPR-Verordnung gefordert werden. Für Batterien gilt dies bereits früher: Die EU-Batterieverordnung 2023/1542 schreibt den CO₂-Fußabdruck pro kWh als Pflichtangabe im Batteriepass vor.",
  },
  {
    title: "Reduktionsfahrplan",
    body: "Konkrete Maßnahmen und Meilensteine, um den Produkt-CO₂-Fußabdruck systematisch zu senken, priorisiert nach Wirkung und Umsetzbarkeit. Der Fahrplan orientiert sich an SBTi-konformen Absenkpfaden und liefert Argumente für interne Budget­entscheidungen.",
  },
];

const steps = [
  { n: "01", title: "Scoping & Systemgrenze", body: "Gemeinsam legen wir fest, welche Produktvarianten berechnet werden, welche Lebenszyklusphasen nach ISO 14067 relevant sind und welcher Detailgrad benötigt wird. Wir klären dabei auch, ob eine Cradle-to-Gate- oder Cradle-to-Grave-Betrachtung für Ihren Anwendungsfall sinnvoller ist." },
  { n: "02", title: "Datenbeschaffung", body: "Erhebung von Produktionsdaten, Einkaufsmengen, Lieferantendaten und Energieverbräuchen über unser strukturiertes Erhebungs-Kit. Wo primäre Lieferantendaten fehlen, setzen wir auf validierte Sekundärdaten aus ecoinvent sowie österreichische UBA-Emissionsfaktoren (0,152 kg CO₂e/kWh Strom, 2,58 kg CO₂e/m³ Erdgas)." },
  { n: "03", title: "Berechnung & Modellierung", body: "CO₂-Berechnung nach ISO 14067 und GHG Protocol Product Standard mit validierten Emissionsfaktoren. Sensitivitätsanalyse, Unsicherheitsbewertung und Allokationsregeln werden transparent dokumentiert, sodass der Bericht einer externen Prüfung standhält." },
  { n: "04", title: "Bericht & Handlungsempfehlungen", body: "Finaler PCF-Bericht mit Hotspot-Analyse, Kommunikationsmaterial und konkretem Reduktionsfahrplan für die nächsten 12 bis 24 Monate. Auf Wunsch begleiten wir Sie bei der Einbindung der Daten in den Digitalen Produktpass oder in Ihre Lieferantendokumentation für BBG-Ausschreibungen." },
];

const useCases = [
  { label: "Für BBG- und EU-Ausschreibungen mit PCF-Anforderung" },
  { label: "Nachweis für Kund:innen in der Automobilzulieferung" },
  { label: "Pflichtfeld im EU Digital Product Passport ab 2027" },
  { label: "EU-Batterieverordnung 2023/1542: CO₂/kWh als Pflichtangabe" },
  { label: "ISO 14067, GHG Protocol Product Standard, international anerkannt" },
  { label: "Strategische Grundlage für Scope-3-Reduktion in der Lieferkette" },
];

export default function ProductCarbonFootprint() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--balken relative min-h-[55vh] flex items-end pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">Product Carbon Footprint</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">02 ISO 14067</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Product<br />
              <span className="text-brand-600">Carbon Footprint</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-8">
              CO₂ entlang des gesamten Produktlebenszyklus berechnen, nach ISO 14067, für Ausschreibungen,
              Kund:innenanfragen und Klimaziele.
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
              <a href="mailto:stefan.bauer@example.invalid?subject=Product Carbon Footprint Anfrage" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                stefan.bauer@example.invalid
              </a>
              <a href="#vorgehen" className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Vorgehen ansehen
              </a>
            </div>
          </div>
        </section>

        {/* Warum PCF */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="eyebrow mb-4">Warum PCF?</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Kund:innen fragen nach.<br />
                  <span className="text-ink-tertiary">Haben Sie die Antwort?</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  Immer mehr Großunternehmen, öffentliche Auftraggeber und internationale Kund:innen verlangen
                  produktspezifische CO₂-Daten, oft als Voraussetzung für Lieferverträge oder Ausschreibungen.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">
                  Der <strong className="text-ink">Product Carbon Footprint (PCF)</strong> nach ISO 14067 ist die
                  international anerkannte Methode, um den CO₂-Fußabdruck eines einzelnen Produkts über seinen
                  gesamten Lebenszyklus zu berechnen, von der Rohstoffgewinnung bis zur Entsorgung.
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

              {/* PCF-Datenblatt */}
              <PcfDatasheet />
            </div>
          </div>
        </section>

        {/* Wasserfall */}
        <section className="py-24 bg-canvas border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Aufbau des Ergebnisses</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Eine Zahl,<br />
                  <span className="text-ink-tertiary">sauber hergeleitet.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Ausschreibungen fragen oft nur Cradle-to-Gate ab, Kunden mit Klimazielen den ganzen
                Lebenszyklus. Wir weisen beides getrennt aus, Modul für Modul, damit jede Zahl dort
                verwendet wird, wo sie hingehört.
              </p>
            </div>
            <PcfWaterfall />
            <div className="mt-12">
              <LifecycleBand boundary="grave" />
            </div>
          </div>
        </section>

        {/* Was wir liefern */}
        <section className="py-24 bg-white">
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
        <section id="vorgehen" className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Vorgehen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Von den Daten<br />
              <span className="text-ink-tertiary">zum PCF-Bericht.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <span className="text-3xl font-black text-brand-500 mb-4 block">{s.n}</span>
                  <h3 className="text-base font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Eine Zahl, die verkauft."
          titleB="Nicht nur eine Pflicht."
          values={[
              { icon: ValueTrophy, title: "Ausschreibungen gewinnen", body: "Öffentliche Auftraggeber und Industriekunden fragen zunehmend den PCF ab. Wer ihn belegt hat, kommt in die engere Wahl." },
              { icon: ValueBadgeEuro, title: "Preis mit Fakten begründen", body: "Ein nachweislich niedrigerer Fußabdruck ist ein Verkaufsargument, das Ihr Vertrieb mit Zahlen statt Adjektiven führen kann." },
              { icon: ValueRepeat, title: "Einmal rechnen, mehrfach nutzen", body: "Dieselben Daten speisen Kundenanfragen, Scope-3-Berichte Ihrer Abnehmer und später den Digitalen Produktpass." },
          ]}
          testimonial={TESTIMONIALS.pcf}
        />

        <ProductTrends ids={["T09", "T10", "T11", "T12", "T19", "T25"]} label="dem Product Carbon Footprint" />

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zum Product Carbon Footprint
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
