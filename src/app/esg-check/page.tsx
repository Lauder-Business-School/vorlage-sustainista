import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, Clock, Check, Plus, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ESG-Datencheck für KMU",
  description:
    "Kostenloser Selbstcheck für Produzenten, Vertreiber und Zulieferer ohne eigene ESG-Abteilung: Wie belastbar sind Ihre Energie-, Emissions- und Sozialdaten?",
  alternates: { canonical: "https://www.example.invalid/esg-check" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "ESG-Datencheck: Wie belastbar sind Ihre Nachhaltigkeitsdaten?",
    description:
      "Kostenloser Selbstcheck für KMU ohne eigene ESG-Abteilung: Energie, Emissionen, Ressourcen und Soziales. Mit Ampel-Bewertung und FörderCheck.",
    url: "https://www.example.invalid/esg-check",
    images: [
      {
        url: "https://www.example.invalid/esg-check-hero.png",
        width: 1774,
        height: 887,
        alt: "ESG-Datencheck für KMU - Datenreifegrad, Datenbereiche und nächste Schritte auf einen Blick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESG-Datencheck: Wie belastbar sind Ihre Nachhaltigkeitsdaten?",
    description:
      "Kostenloser Selbstcheck für KMU: Energie, Emissionen, Ressourcen und Soziales.",
    images: ["https://www.example.invalid/esg-check-hero.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist die CSRD-Berichtspflicht für uns damit vom Tisch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für die allermeisten KMU ja. Mit der Omnibus-Richtlinie (EU) 2026/470 gilt die CSRD-Berichtspflicht nur noch für Unternehmen mit mehr als 1.000 Mitarbeitenden und mehr als 450 Mio. Euro Umsatz; börsennotierte KMU fallen vollständig heraus. Die Pflicht verschwindet damit - der Datendruck nicht: Kunden, Banken und Förderstellen fragen unverändert nach ESG- und CO2-Daten.",
      },
    },
    {
      "@type": "Question",
      name: "Müssen wir jeden ESG-Fragebogen unserer Großkunden beantworten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicht unbegrenzt. Der sogenannte Value Chain Cap begrenzt Anfragen: CSRD-pflichtige Unternehmen dürfen von Partnern und Zulieferern bis 1.000 Mitarbeitende nur noch die Informationen verlangen, die im freiwilligen Standard vorgesehen sind. Drei Einschränkungen gelten: Der Cap betrifft nur Anfragen, die aus der CSRD-Berichtspflicht abgeleitet sind, bilaterale Vereinbarungen wie Lieferantenaudits bleiben unberührt, und er greift für das Wertschöpfungsketten-Reporting ab dem Geschäftsjahr 2027. Praktisch heißt das: Sie müssen nicht alles liefern - aber das Niveau des freiwilligen Standards wird erwartet.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich für diesen Check eine eigene ESG-Abteilung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Der Check ist bewusst für Unternehmen gebaut, in denen Nachhaltigkeit zusätzlich zum Tagesgeschäft mitläuft - betreut von Geschäftsführung, Einkauf, Qualitätsmanagement oder Office. Es braucht keine dedizierte Abteilung, nur griffbereite Unterlagen wie Energieabrechnungen und Personaldaten.",
      },
    },
    {
      "@type": "Question",
      name: "Ist der Einstieg förderfähig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ. Die Förderfähigkeit wird direkt im kostenlosen ErstCheck mitgeprüft.",
      },
    },
  ],
};

const relevanceChecks = [
  "Großkunden verlangen CO2- oder Lieferantendaten für ihre eigene Bilanz (Scope 3).",
  "Ihre Bank oder Finanzierung bezieht ESG-Kriterien in Ratings und Konditionen ein.",
  "Förderstellen oder Ausschreibungen fragen Nachhaltigkeitsnachweise ab.",
  "Ihre Daten liegen verstreut in Rechnungen, Excel und Lohnsystem.",
  "Sie haben noch keine CO2-Bilanz oder kein strukturiertes Reporting.",
];

const audiences = [
  "Produzierendes Gewerbe",
  "Verpackung & Material",
  "Lebensmittel & Getränke",
  "Bau & Bauzulieferung",
  "Vertrieb & Handel",
];

const pressureChecks = [
  "Ihre berichtspflichtigen Großkunden brauchen weiterhin Zulieferdaten für ihre Scope-3-Bilanz - der Trickle-down-Effekt bleibt.",
  "Banken bewerten die Nachhaltigkeit ihrer Kreditportfolios; ESG-Transparenz wirkt auf Ratings und Konditionen.",
  "Förderstellen und Ausschreibungen verlangen Nachweise - unabhängig von Ihrer Unternehmensgröße.",
  "Die Verpackungsverordnung (PPWR) erhöht ab 12. August 2026 den Datendruck; der digitale Produktpass folgt.",
];

const faqs = [
  {
    q: "Ist die CSRD-Berichtspflicht für uns damit vom Tisch?",
    a: "Für die allermeisten KMU ja. Mit der Omnibus-Richtlinie (EU) 2026/470 gilt die CSRD-Berichtspflicht nur noch für Unternehmen mit mehr als 1.000 Mitarbeitenden und mehr als 450 Mio. Euro Umsatz; börsennotierte KMU fallen vollständig heraus. Die Pflicht verschwindet damit - der Datendruck nicht: Kunden, Banken und Förderstellen fragen unverändert nach ESG- und CO2-Daten.",
  },
  {
    q: "Müssen wir jeden ESG-Fragebogen unserer Großkunden beantworten?",
    a: "Nicht unbegrenzt. Der sogenannte Value Chain Cap begrenzt Anfragen: CSRD-pflichtige Unternehmen dürfen von Partnern und Zulieferern bis 1.000 Mitarbeitende nur noch die Informationen verlangen, die im freiwilligen Standard vorgesehen sind. Drei Einschränkungen gelten: Der Cap betrifft nur Anfragen, die aus der CSRD-Berichtspflicht abgeleitet sind, bilaterale Vereinbarungen wie Lieferantenaudits bleiben unberührt, und er greift für das Wertschöpfungsketten-Reporting ab dem Geschäftsjahr 2027. Praktisch heißt das: Sie müssen nicht alles liefern - aber das Niveau des freiwilligen Standards wird erwartet.",
  },
  {
    q: "Brauche ich für diesen Check eine eigene ESG-Abteilung?",
    a: "Nein. Der Check ist bewusst für Unternehmen gebaut, in denen Nachhaltigkeit zusätzlich zum Tagesgeschäft mitläuft - betreut von Geschäftsführung, Einkauf, Qualitätsmanagement oder Office. Es braucht keine dedizierte Abteilung, nur griffbereite Unterlagen wie Energieabrechnungen und Personaldaten.",
  },
  {
    q: "Ist der Einstieg förderfähig?",
    a: "Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ. Die Förderfähigkeit wird direkt im kostenlosen ErstCheck mitgeprüft.",
  },
];

const dataBlocks = [
  {
    label: "Block A",
    title: "Energie & Emissionen",
    body: "Stromverbrauch, Wärme- und Brennstoffverbrauch, Fuhrpark, Energieträger und Anteil erneuerbar, Scope 1/2/3-Emissionen (grob).",
  },
  {
    label: "Block B",
    title: "Ressourcen & Abfall",
    body: "Materialeinsatz, Abfallmengen und -arten, Recyclingquote und Verwertungswege, Wasserverbrauch, Gefahrstoffe.",
  },
  {
    label: "Block C",
    title: "Soziales & Governance",
    body: "Mitarbeitende und Fluktuation, Arbeitssicherheit, Weiterbildung, Diversität und Lohngleichheit, Lieferanten-Verhaltenskodex, Compliance.",
  },
  {
    label: "Block D",
    title: "Steuerung & Nachweise",
    body: "Vorhandener ESG-Bericht, Status der CO2-Bilanz, definierte Ziele und KPIs, benannte Datenquellen und Verantwortliche, genutzte Förderprogramme.",
  },
];

const risks = [
  {
    q: "„Scope-3-/Lieferantendaten fehlen.“",
    a: "Mit Scope 1 und 2 starten, Scope 3 schrittweise ergänzen. Schätzwerte sind zulässig - aber als solche kennzeichnen.",
  },
  {
    q: "„Die Datenqualität schwankt.“",
    a: "Je Kennzahl eine feste Quelle definieren, dazu Validierungsregeln und Stichproben.",
  },
  {
    q: "„Niemand ist zuständig.“",
    a: "Verantwortung klar benennen und in bestehende Rollen integrieren, statt eine neue Stelle zu schaffen.",
  },
  {
    q: "„Der IT-Aufwand ist zu hoch.“",
    a: "Bewusst klein anfangen: mit Excel und einer Vorlage starten, später in ein Tool überführen.",
  },
];

const rungs = [
  {
    n: "Stufe 1",
    title: "Reaktiv",
    body: "Daten müssen für jede Anfrage neu erhoben werden; es gibt keine Basis.",
    fill: "25%",
    opacity: 0.45,
  },
  {
    n: "Stufe 2",
    title: "Unstrukturiert",
    body: "Daten existieren verstreut und werden pro Anfrage neu zusammengesucht.",
    fill: "50%",
    opacity: 0.65,
  },
  {
    n: "Stufe 3",
    title: "Strukturiert",
    body: "Kennzahlen konsistent erfasst, teils automatisiert; klare Verantwortlichkeiten.",
    fill: "75%",
    opacity: 0.85,
  },
  {
    n: "Stufe 4",
    title: "Skaliert",
    body: "Daten fließen automatisiert in Berichte und sind jährlich wiederverwendbar.",
    fill: "100%",
    opacity: 1,
  },
];

const miniflow = ["1 · ESG-Datencheck", "2 · CO2-Basis & Reporting", "3 · Automatisieren"];

export default function EsgCheck() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="relative page-header pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">

            {/* Hero image, first content element, priority for LCP */}
            <div className="mb-10 border border-border rounded-card overflow-hidden bg-surface">
              <Image
                src="/esg-check-hero.png"
                alt="ESG-Datencheck für KMU - Datenreifegrad, Datenbereiche und nächste Schritte auf einen Blick"
                width={1774}
                height={887}
                priority
                className="w-full h-auto block"
              />
            </div>

            <span className="eyebrow mb-5 block">Leitfaden · Selbstcheck</span>

            <h1 className="font-black tracking-tight leading-[1.05] text-ink mb-6"
                style={{ fontSize: "clamp(2.2rem,5.5vw,3.75rem)" }}>
              Wie belastbar sind Ihre ESG-Daten - wenn Kunden, Banken und Förderstellen fragen?
            </h1>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Nachhaltigkeit professionell nachweisen, ohne eigene ESG-Abteilung. Der
              kostenlose Selbstcheck bringt Ihre Energie-, Emissions- und Sozialdaten in
              eine belastbare, wiederverwendbare Form - Ampel-Tabelle, in einem Zug
              ausfüllbar.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 bg-surface border border-border text-ink-tertiary px-7 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest cursor-not-allowed"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Excel-Check (In dieser Kursvorlage nicht enthalten)
              </button>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 border border-border hover:border-brand-400 hover:bg-brand-50 text-brand-600 hover:text-brand-700 px-7 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150"
              >
                30 Minuten Gespräch buchen
              </a>
            </div>

            {/* Timing chip */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-border text-brand-700 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Der Druck ist schon da, nicht erst 2027
            </div>
          </div>
        </section>

        {/* ── Betrifft Sie das? ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Betrifft Sie das?</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-6 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Für Unternehmen ohne eigene ESG-Abteilung
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Für Betriebe, in denen Nachhaltigkeit zusätzlich zum Tagesgeschäft mitläuft
              - betreut von Geschäftsführung, Einkauf, Qualitätsmanagement oder Office.
            </p>

            <ul className="space-y-4 max-w-[68ch] mb-8">
              {relevanceChecks.map((text) => (
                <li key={text} className="flex gap-3 items-start text-ink-secondary leading-relaxed">
                  <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {audiences.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center bg-brand-50 border border-border text-brand-700 rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Einordnung ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Einordnung</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-5 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Die Pflicht ist entschärft. Der Datendruck nicht.
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Mit der Omnibus-Richtlinie (EU) 2026/470 gilt die CSRD-Berichtspflicht nur
              noch für Unternehmen mit <strong className="text-ink">mehr als 1.000 Mitarbeitenden
              und mehr als 450 Mio. Euro Umsatz</strong>. Börsennotierte KMU fallen vollständig heraus. Für die meisten Betriebe ist
              die Berichtspflicht damit vom Tisch. Die Datenanfragen sind es nicht:
            </p>

            <ul className="space-y-4 max-w-[68ch] mb-8">
              {pressureChecks.map((text) => (
                <li key={text} className="flex gap-3 items-start text-ink-secondary leading-relaxed">
                  <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              <strong className="text-ink">Schon gewusst?</strong> Der freiwillige Standard
              (VSME, künftig „Voluntary Standard“) wird zum Maßstab: Berichtspflichtige
              Kunden dürfen von Betrieben bis 1.000 Mitarbeitende nur noch das verlangen,
              was dort vorgesehen ist. Sie müssen also nicht alles liefern - aber dieses
              Niveau wird erwartet. Eine einmal sauber aufgebaute ESG-Datenbasis trägt
              mehrfach: CO2-Bilanz, Förderanträge, Kundenanfragen und - als Brücke - die
              spätere Produktdaten- und Produktpass-Arbeit (DPP). Einmal strukturiert,
              mehrfach genutzt.
            </p>

            <div className="space-y-3 max-w-[68ch]">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  {...(i === 0 ? { open: true } : {})}
                  className="border border-border rounded-card bg-surface overflow-hidden group"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-ink font-semibold text-[1.0625rem] leading-snug focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2">
                    {faq.q}
                    <Plus
                      className="w-5 h-5 text-brand-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-6 pb-6 text-ink-secondary leading-relaxed max-w-[68ch]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vier Datenbereiche ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Vier Datenbereiche</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-5 max-w-[20ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Was der Check abdeckt
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              23 Datenfelder in vier Blöcken - jedes mit Ampel-Status, automatischem
              Handlungsbedarf und Kommentarspalte. Die vollständige Tabelle liegt im
              Excel-Download.
            </p>

            <div className="divide-y divide-border mb-8">
              {dataBlocks.map((block) => (
                <div
                  key={block.label}
                  className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-5 items-start py-5 first:pt-0 last:pb-0"
                >
                  <span className="inline-flex items-center bg-brand-50 border border-border text-brand-700 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide w-fit">
                    {block.label}
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-ink mb-2 leading-snug">
                      {block.title}
                    </h3>
                    <p className="text-sm text-ink-secondary leading-relaxed">{block.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-ink-secondary leading-relaxed max-w-[68ch]">
              Ergebnis: Sie kennen Ihre größten Datenlücken, Ihren{" "}
              <strong className="text-ink">Reifegrad</strong> und die ein bis zwei
              Schritte, die jetzt am meisten bewegen - Ihre konkrete{" "}
              <strong className="text-ink">Prioritätenliste</strong>. Ein zweites
              Tabellenblatt mit Readiness-Fragen ordnet ein, ob nur Daten fehlen oder auch
              Prozesse.
            </p>
          </div>
        </section>

        {/* ── Praxis ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Praxis</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-10 max-w-[28ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Vier typische Risiken - und wie Sie gegensteuern
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {risks.map((risk) => (
                <div key={risk.q} className="bg-surface border border-border rounded-card p-6">
                  <p className="font-semibold text-ink mb-2.5">{risk.q}</p>
                  <div className="flex gap-2.5 text-ink-secondary text-sm leading-relaxed">
                    <ArrowRight className="w-[18px] h-[18px] text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{risk.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Orientierung ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Orientierung</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-4 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Ihr Automatisierungspotenzial in vier Stufen
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Der Check verortet Ihren Betrieb auf einer von vier Stufen - und nennt den
              nächsten sinnvollen Schritt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-card overflow-hidden mb-8">
              {rungs.map((rung, i) => (
                <div
                  key={rung.n}
                  className={`bg-canvas p-6 ${i < rungs.length - 1 ? "border-b sm:border-b-0 sm:border-r border-border" : ""} ${i === 1 ? "lg:border-b-0" : ""}`}
                >
                  <div className="h-1.5 rounded-full bg-border mb-5 overflow-hidden">
                    <div
                      className="h-full bg-brand-600 rounded-full"
                      style={{ width: rung.fill, opacity: rung.opacity }}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1.5">
                    {rung.n}
                  </p>
                  <h3 className="text-[1.0625rem] font-semibold text-ink mb-2 leading-snug">
                    {rung.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{rung.body}</p>
                </div>
              ))}
            </div>

            {/* Förderung callout */}
            <div className="bg-brand-50 border border-border rounded-card p-8 flex flex-wrap gap-7 items-center">
              <div className="flex-shrink-0">
                <p className="text-[2.5rem] font-black text-brand-600 leading-none tracking-tight">
                  Förderbar
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700 mt-1.5">
                  ÖkoBusiness Wien · Ökomanagement NÖ
                </p>
              </div>
              <p className="text-ink-secondary leading-relaxed flex-1 min-w-[260px] max-w-[68ch]">
                Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich,
                in Niederösterreich über Ökomanagement NÖ. Ihre Förderfähigkeit prüfen wir direkt im kostenlosen
                ErstCheck mit.{" "}
                <span className="text-ink-tertiary">
                  Förderhöhe abhängig vom jeweiligen Programm, Bundesland und Vorhaben.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="bg-brand-700 text-brand-50 rounded-card p-12 grid grid-cols-1 lg:grid-cols-[1.3fr_auto] gap-10 items-center">
              <div>
                <span className="eyebrow text-brand-50 mb-5 block">Ihr nächster Schritt</span>
                <h2 className="font-bold tracking-tight text-white leading-[1.2] mb-4"
                    style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
                  Wie geht es weiter?
                </h2>
                <p className="text-brand-100 leading-relaxed max-w-[68ch] mb-6">
                  Tragen Sie Ihre roten und orangen Felder zusammen - das ist Ihre
                  Prioritätenliste. Im kostenlosen 30-Minuten-Datencheck-Gespräch sehen
                  wir uns Ihr Ergebnis gemeinsam an und zeigen, wie sich Datenerfassung
                  und Reporting automatisieren lassen. Den FörderCheck machen wir direkt
                  mit.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-brand-100">
                  {miniflow.map((step, i) => (
                    <span key={step} className="flex items-center gap-3">
                      <span>{step}</span>
                      {i < miniflow.length - 1 && (
                        <ArrowRight className="w-[18px] h-[18px] text-brand-300" aria-hidden="true" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 bg-brand-900/40 border border-brand-50/20 text-brand-200 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest cursor-not-allowed whitespace-nowrap"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Excel-Check (In dieser Kursvorlage nicht enthalten)
                </button>
                <p className="text-brand-200 text-xs">.xlsx · in Excel oder LibreOffice ausfüllbar</p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 border border-brand-50/30 hover:border-brand-50/60 hover:bg-brand-50/10 text-brand-50 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150 whitespace-nowrap"
                >
                  Termin buchen
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
