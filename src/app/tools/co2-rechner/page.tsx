import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Co2Rechner from "@/components/Co2Rechner";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";

export const metadata: Metadata = {
  title: "CO₂-Rechner Österreich: Emissionen kostenlos berechnen",
  description:
    "Kostenloser CO₂-Rechner für Unternehmen in Österreich. Scope 1, 2 und 3 berechnen mit offiziellen UBA-Emissionsfaktoren 2023. Inkl. CSRD-Checkliste.",
  alternates: { canonical: "https://www.example.invalid/tools/co2-rechner" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/tools/co2-rechner",
    title: "CO₂ Rechner Österreich: Emissionen berechnen (kostenlos)",
    description:
      "Kostenloser CO₂-Rechner für Unternehmen in Österreich. Scope 1, 2 und 3 mit offiziellen UBA-Emissionsfaktoren 2023.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "CO₂ Rechner Österreich | Sustainista" }],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/tools/co2-rechner",
      name: "CO₂ Rechner Österreich: Emissionen berechnen (kostenlos)",
      description:
        "Kostenloser CO₂-Rechner für Unternehmen in Österreich mit offiziellen UBA-Emissionsfaktoren 2023.",
      url: "https://www.example.invalid/tools/co2-rechner",
      inLanguage: "de",
      breadcrumb: { "@id": "https://www.example.invalid/tools/co2-rechner#breadcrumb" },
    },
    {
      "@id": "https://www.example.invalid/tools/co2-rechner#breadcrumb",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.example.invalid" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.example.invalid/tools" },
        { "@type": "ListItem", position: 3, name: "CO₂ Rechner", item: "https://www.example.invalid/tools/co2-rechner" },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.example.invalid/tools/co2-rechner#howto",
      name: "CO₂-Emissionen Ihres Unternehmens berechnen",
      description:
        "So berechnen Sie Ihren CO₂-Fußabdruck mit dem Sustainista-Rechner und offiziellen UBA-Emissionsfaktoren.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Energieverbrauch eingeben",
          text: "Tragen Sie Strom (kWh), Fernwärme (kWh), Erdgas (m³) und Heizöl (Liter) aus Ihren Abrechnungen ein.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Mobilität & Dienstreisen erfassen",
          text: "Geben Sie Diesel- und Benzinverbrauch des Fuhrparks (Liter) ein. Im Bereich Dienstreisen tragen Sie Pkw-Kilometer und Flug-Passagierkilometer ein. Flüge werden mit DEFRA-Faktor (inkl. Klimawirkung) berechnet.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "CO₂-Bilanz ablesen",
          text: "Der Rechner zeigt Ihre Gesamtemissionen sowie die Aufteilung auf Scope 1, 2 und 3, auf Basis der offiziellen UBA AT-Emissionsfaktoren.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Vollständige Bilanz beauftragen",
          text: "Für eine CSRD-konforme CO₂-Bilanz mit Lieferkette (Scope 3 vollständig) und ESG-Bericht kontaktieren Sie Sustainista.",
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Woher stammen die Emissionsfaktoren im Rechner?",
    a: "Alle Faktoren für Strom, Fernwärme, Erdgas und Heizöl stammen aus der offiziellen Datenbank des Umweltbundesamts Österreich (UBA AT), Datenbasis 2023, aktualisiert Dezember 2025. Für den österreichischen Strommix verwenden wir 0,152 kg CO₂e/kWh. Das ist weniger als halb so viel wie der EU-Schnitt (0,295 kg CO₂e/kWh), weil Österreich über 70% Wasserkraft nutzt. Für Flüge verwenden wir den DEFRA UK Greenhouse Gas Conversion Factor inkl. Radiative Forcing Index (RFI), da der klimatische Gesamteffekt von Flugreisen durch Kondensstreifen rund doppelt so hoch ist wie der direkte CO₂-Ausstoß.",
  },
  {
    q: "Was ist der Unterschied zwischen Scope 1, 2 und 3?",
    a: "Scope 1 sind Emissionen aus direkter Verbrennung in Ihrem Betrieb: Gas- oder Ölheizung, eigener Fuhrpark. Scope 2 sind Emissionen aus eingekaufter Energie wie Strom und Fernwärme, in Österreich besonders niedrig durch hohen Wasserkraftanteil. Scope 3 umfasst alle anderen Emissionen: Lieferkette, Pendler, Geschäftsreisen, Transport, eingekaufte Waren. Dieser Rechner erfasst Scope 1, Scope 2 und einen Teil von Scope 3: Pkw-Dienstreisen und Flüge. Für einen vollständigen CSRD-Bericht fehlen die restlichen Scope-3-Kategorien, vor allem Lieferkette (3.1) und eingekaufte Waren (3.2).",
  },
  {
    q: "Kann ich diesen Rechner für meinen CSRD-Bericht verwenden?",
    a: "Der Rechner liefert eine erste, belastbare Orientierung auf Basis offizieller UBA-Faktoren. Er eignet sich gut für interne Analysen und als Ausgangspunkt. Für einen CSRD-konformen Nachhaltigkeitsbericht brauchen Sie zusätzlich: alle Scope-3-Kategorien (insbesondere Lieferkette und eingekaufte Waren), einen nachvollziehbaren Daten-Prüfpfad und ESRS-konforme Dokumentation. Sustainista erstellt das schlüsselfertig in 4 bis 6 Wochen; förderbar über ÖkoBusiness Wien oder Ökomanagement NÖ.",
  },
];

const scopeCards = [
  {
    scope: "Scope 1",
    title: "Direkte Emissionen",
    body: "Verbrennung von Erdgas, Heizöl, Benzin und Diesel im eigenen Betrieb und Fuhrpark. Diese Emissionen entstehen physisch bei Ihnen.",
    color: "bg-brand-100 text-brand-700",
  },
  {
    scope: "Scope 2",
    title: "Eingekaufte Energie",
    body: "Emissionen aus Strom und Fernwärme, die extern erzeugt und von Ihnen bezogen werden. In Österreich niedrig durch hohen Wasserkraftanteil.",
    color: "bg-brand-50 text-brand-700",
  },
  {
    scope: "Scope 3",
    title: "Vor- und nachgelagert",
    body: "Alle anderen Emissionen: Lieferkette, eingekaufte Waren und Dienstleistungen, Pendler, Dienstreisen, Entsorgung. Oft 70–90% der Gesamtemissionen.",
    color: "bg-surface text-ink-secondary",
  },
];

const nextSteps = [
  {
    step: "01",
    title: "Kostenloses Erstgespräch",
    body: "Wir schauen uns Ihre Datenlage an: Welche Quellen gibt es? Was fehlt für Scope 3? Und welche Förderung kommt für Ihr Unternehmen in Frage? Ohne Vorbereitung, ohne Druck.",
  },
  {
    step: "02",
    title: "Vollständige CO₂-Bilanzierung",
    body: "Sustainista erstellt eine CSRD-konforme CO₂-Bilanz nach GHG Protocol: Scope 1 bis 3 vollständig, mit UBA AT-Emissionsfaktoren, prüffähig und bankentauglich.",
  },
  {
    step: "03",
    title: "Jährlich automatisch aktualisiert",
    body: "Das aufgebaute Datensystem aktualisiert sich laufend. Jeder nächste Bericht entsteht ohne neues Projekt, nur mit aktuellen Zahlen.",
  },
];

export default function Co2RechnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--balken relative min-h-[40vh] flex items-end pt-24 pb-16 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li>
                  <Link href="/" className="hover:text-ink-secondary transition-colors">
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">
                  CO₂ Rechner
                </li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">Kostenloses Tool</span>
            <h1
              className="font-black tracking-tight leading-[0.95] mb-5 text-ink"
              style={{ fontSize: "clamp(2rem,5vw,3.75rem)" }}
            >
              CO₂-Rechner für Unternehmen:{" "}
              <span className="text-brand-600">Österreich</span>
            </h1>
            <p className="text-base text-ink-secondary font-normal leading-relaxed max-w-2xl">
              Berechnen Sie Ihren CO₂-Fußabdruck mit offiziellen Emissionsfaktoren des Umweltbundesamts Österreich (Datenbasis 2023). Scope 1, 2 und Dienstreisen: kostenlos, ohne Anmeldung.
            </p>
          </div>
        </section>

        {/* Tool + Sidebar */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Rechner, 60% */}
              <div className="lg:col-span-3">
                <Co2Rechner />
              </div>

              {/* Sidebar, 40% */}
              <aside className="lg:col-span-2 space-y-5">
                {/* Warum UBA-Faktoren? */}
                <div className="rounded-[12px] border border-border bg-surface p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-secondary mb-4">
                    Warum UBA AT-Faktoren?
                  </h2>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-3">
                    Viele Online-Rechner verwenden EU-Durchschnittswerte. Für Österreich sind diese zu hoch. Der heimische Strommix hat mit{" "}
                    <strong className="text-ink">0,152 kg CO₂e/kWh</strong> deutlich weniger Emissionen als der EU-Schnitt (0,295 kg CO₂e/kWh), weil Österreich über 70% Wasserkraft nutzt.
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    Die UBA AT-Faktoren werden jährlich aktualisiert und sind die Referenz für CSRD-Berichte, Umwelterklärungen und Fördernachweise in Österreich.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-[11px] text-ink-tertiary">
                      Quelle: Umweltbundesamt Österreich, Datenbasis 2023, aktualisiert Dez. 2025
                    </p>
                  </div>
                </div>

                {/* Was passiert nach dem Rechner? */}
                <div className="rounded-[12px] border border-border bg-surface p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-secondary mb-4">
                    Was passiert nach dem Rechner?
                  </h2>
                  <div className="space-y-4">
                    {nextSteps.map((s) => (
                      <div key={s.step} className="flex gap-3">
                        <span className="text-sm font-black text-brand-600 w-7 flex-shrink-0 mt-0.5">{s.step}</span>
                        <div>
                          <p className="text-sm font-semibold text-ink leading-snug mb-0.5">{s.title}</p>
                          <p className="text-xs text-ink-secondary leading-relaxed">{s.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-border">
                    <Link
                      href="/produkte/esg-analyse"
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors underline underline-offset-2"
                    >
                      Zur vollständigen ESG-Analyse
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Scope 1, 2 & 3 Erklärung */}
        <section className="py-20 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Grundlagen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              Was sind Scope 1, 2 und 3?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {scopeCards.map((card) => (
                <div key={card.scope} className="rounded-[12px] border border-border bg-white p-6 shadow-ambient-low">
                  <span
                    className={`inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${card.color}`}
                  >
                    {card.scope}
                  </span>
                  <h3 className="text-base font-bold text-ink mb-2">{card.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zum CO₂-Rechner
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
