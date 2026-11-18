import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, Clock, Check, Plus, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DPP-Datencheck für Produkte & Batterien",
  description:
    "Kostenloser Selbstcheck für Hersteller und Zulieferer: Sind Ihre Produktdaten bereit für den digitalen Produktpass (DPP)? Das EU-Register läuft seit Juli 2026.",
  alternates: { canonical: "https://www.example.invalid/dpp-check" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "DPP-Datencheck: Sind Ihre Produktdaten bereit für den Produktpass?",
    description:
      "Kostenloser Selbstcheck über den gesamten Produktlebenszyklus: für Hersteller, Vertreiber und Zulieferer. Mit Vertiefung für Batterie- und EV-Daten.",
    url: "https://www.example.invalid/dpp-check",
    images: [
      {
        url: "https://www.example.invalid/dpp-check-hero.png",
        width: 1720,
        height: 914,
        alt: "DPP-Datencheck - digitaler Produktpass mit QR-Code entlang des Produktlebenszyklus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPP-Datencheck: Sind Ihre Produktdaten bereit?",
    description:
      "Kostenloser Selbstcheck für den digitalen Produktpass: Hersteller, Vertreiber, Zulieferer.",
    images: ["https://www.example.invalid/dpp-check-hero.png"],
  },
};

const faqs = [
  {
    q: "Wann kommt der Produktpass für Textilien?",
    a: "Textilien und Bekleidung stehen im ESPR-Arbeitsplan 2025–2030 (angenommen am 16. April 2025) in der ersten Welle. Der delegierte Rechtsakt wird um 2027 erwartet; danach folgt eine Übergangsfrist von rund 18 Monaten, sodass die Pflicht voraussichtlich ab 2028/2029 greift. Die fachliche Vorarbeit der EU-Forschungsstelle (JRC) zu den Datenanforderungen läuft bereits. Da EU-Fristen sich um 6–12 Monate verschieben können, lohnt der frühe Datenaufbau unabhängig vom exakten Stichtag.",
  },
  {
    q: "Welche Produktgruppen sind zuerst dran?",
    a: "Der ESPR-Arbeitsplan nennt als erste produktspezifische Rechtsakte Eisen & Stahl (Annahme indikativ 2026) sowie Textilien und Reifen (2027), gefolgt von Möbeln (2028) und Matratzen (2029). Der Batteriepass läuft separat über die EU-Batterieverordnung und ist ab 18. Februar 2027 fest verankert. Die konkreten Datenfelder legt jeweils der delegierte Rechtsakt der Produktgruppe fest.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
};

const checks = [
  "Sie stellen Produkte her oder beliefern Hersteller (Verpackung, Kunststoff, Holz/Möbel, Metall, Textil, Reifen, Matratzen, Elektronik, Batterien).",
  "Kunden oder Regulierung verlangen Material-, Herkunfts- und Lebenszyklusdaten.",
  "Produktdaten liegen in Datenblättern, PDFs und Excel verstreut.",
  "Sie haben Produkte, aber keine DPP-Struktur (kein QR/Datenträger, nicht maschinenlesbar).",
];

const audiences = [
  "Verpackung & Kunststoff, Papier",
  "Holz & Möbel",
  "Metall, Stahl, Komponenten",
  "Textil, Matratzen, Reifen",
  "Elektro/Elektronik",
  "Batterien & E-Mobilität",
];

const steps = [
  {
    n: "Schritt 1",
    title: "DPP-Datencheck",
    body: "Kostenloser Selbstcheck über den gesamten Lebenszyklus, mit Phasen-Logik.",
  },
  {
    n: "Schritt 2",
    title: "Datenmodell & Lieferkette",
    body: "Strukturiert, maschinenlesbar, mit gestuften Zugriffen (B2B/B2C).",
  },
  {
    n: "Schritt 3",
    title: "Pilot-DPP",
    body: "QR-/Datenträger einführen und auf ganze Serien ausrollen.",
  },
];

const phases = [
  {
    when: "~ bis 2027",
    title: "Phase 1 · Minimal-DPP",
    body: "Kernidentität und Basisdaten: Produktions- und Materialangaben, eindeutige Produkt-ID, Verpackung, Kreislaufstrategie.",
    fill: "33%",
    opacity: 0.55,
  },
  {
    when: "~ bis 2030",
    title: "Phase 2 · erweitert",
    body: "Produktmerkmale, Bewertungen, Distribution, Nutzung und erste End-of-Life-Daten.",
    fill: "66%",
    opacity: 0.8,
  },
  {
    when: "~ bis 2033",
    title: "Phase 3 · vollständig",
    body: "Tiefe Prozess-, Distributions- und Recyclingdaten über den kompletten Lebenszyklus.",
    fill: "100%",
    opacity: 1,
  },
];

const rungs = [
  {
    n: "Stufe 1",
    title: "Keine Struktur",
    body: "Daten müssen je Anfrage erst erhoben werden; keine konsistente Basis.",
    fill: "25%",
    opacity: 0.45,
  },
  {
    n: "Stufe 2",
    title: "Vorhanden, unstrukturiert",
    body: "Daten existieren verstreut in Datenblättern, PDFs und Excel.",
    fill: "50%",
    opacity: 0.65,
  },
  {
    n: "Stufe 3",
    title: "Strukturiert",
    body: "Produktdaten konsistent, teils maschinenlesbar; Lieferantenprozess steht.",
    fill: "75%",
    opacity: 0.85,
  },
  {
    n: "Stufe 4",
    title: "DPP-fähig",
    body: "Strukturiert, maschinenlesbar, mit Datenträger (QR/RFID) und gestuftem Zugriff.",
    fill: "100%",
    opacity: 1,
  },
];

export default function DppCheck() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="relative page-header page-header--matrix pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">

            {/* Hero image, first content element, priority for LCP */}
            <div className="mb-10 border border-border rounded-card overflow-hidden bg-surface">
              <Image
                src="/dpp-check-hero.png"
                alt="DPP-Datencheck - digitaler Produktpass mit QR-Code entlang des Produktlebenszyklus"
                width={1720}
                height={914}
                priority
                className="w-full h-auto block"
              />
            </div>

            <span className="eyebrow mb-5 block">Leitfaden · Selbstcheck</span>

            <h1 className="font-black tracking-tight leading-[1.05] text-ink mb-6"
                style={{ fontSize: "clamp(2.2rem,5.5vw,3.75rem)" }}>
              Der digitale Produktpass kommt. Sind Ihre Produktdaten bereit?
            </h1>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Saubere, strukturierte Produkt- und Materialdaten werden zur Voraussetzung
              für den Marktzugang und zugleich zur Chance für Transparenz, Wiederverkauf
              und neue Services. Der kostenlose Selbstcheck zeigt Ihre Datenlücken über
              den gesamten Lebenszyklus.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 bg-surface border border-border text-ink-tertiary px-7 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest cursor-not-allowed"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Selbstcheck (In dieser Kursvorlage nicht enthalten)
              </button>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 border border-border hover:border-brand-400 hover:bg-brand-50 text-brand-600 hover:text-brand-700 px-7 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150"
              >
                30-Minuten-Gespräch buchen
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Deadline chip */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-border text-brand-700 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              ESPR in Kraft · DPP-Register 19.07.2026 · Batterien 18.02.2027
            </div>
          </div>
        </section>

        {/* ── Betrifft Sie das? ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Betrifft Sie das?</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-6 max-w-[26ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Für Unternehmen, die physische Produkte herstellen, vertreiben oder beliefern
            </h2>

            <ul className="space-y-4 max-w-[68ch] mb-8">
              {checks.map((text) => (
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

        {/* ── Warum genau jetzt? ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Warum genau jetzt?</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-5 max-w-[20ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Was mit dem DPP kommt
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Die Ökodesign-Verordnung (ESPR) ist seit Juli 2024 in Kraft; sie ist der
              rechtliche Rahmen, der digitale Produktpass ein Instrument darin. Das zentrale
              EU-Register für Produktpässe ist seit <strong className="text-ink">20. Juli 2026</strong>{" "}
              in Betrieb. Der Batteriepass ist der erste verpflichtende DPP (ab{" "}
              <strong className="text-ink">18. Februar 2027</strong>), die
              Verpackungsverordnung (PPWR) gilt ab{" "}
              <strong className="text-ink">12. August 2026</strong>. Konkrete Anforderungen
              je Produktgruppe entstehen gestaffelt über delegierte Rechtsakte. Wer früh
              strukturiert, ist vorbereitet, bevor es Pflicht wird. Eine Roadmap schlägt
              Warten.
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

        {/* ── Was Sustainista für Sie tut ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Was Sustainista für Sie tut</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-10 max-w-[28ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              In drei Schritten vom verstreuten Datenblatt zum DPP-fähigen Produkt
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-canvas border border-border rounded-card p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
                    {s.n}
                  </p>
                  <h3 className="text-[1.0625rem] font-semibold text-ink mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phasen-Logik ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Phasen-Logik</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-4 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Nicht alles auf einmal, gestaffelt nach Relevanz
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Der Check ordnet jedes Datenfeld einer Phase zu. So sehen Sie, was zuerst zählt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {phases.map((p) => (
                <div key={p.title} className="bg-surface border border-border rounded-card p-8">
                  <div className="h-1.5 rounded-full bg-border mb-5 overflow-hidden">
                    <div
                      className="h-full bg-brand-600 rounded-full"
                      style={{ width: p.fill, opacity: p.opacity }}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1.5">
                    {p.when}
                  </p>
                  <h3 className="text-[1.0625rem] font-semibold text-ink mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reifegrad in vier Stufen ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Orientierung</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-4 max-w-[20ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Ihr DPP-Reifegrad in vier Stufen
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Der Check verortet Ihren Betrieb auf einer von vier Stufen und nennt den
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
                Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ. Ihre
                Förderfähigkeit prüfen wir direkt im kostenlosen ErstCheck mit.{" "}
                <span className="text-ink-tertiary">
                  Förderhöhe abhängig von Programm, Bundesland und Vorhaben.
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
                <p className="text-brand-100 leading-relaxed max-w-[68ch]">
                  Tragen Sie Ihre roten und orangen Felder zusammen. Das ist Ihre
                  Datenanforderungsliste. Im kostenlosen 30-Minuten-Datencheck-Gespräch sehen
                  wir uns Ihr Ergebnis gemeinsam an und zeigen, wie sich Datenerfassung,
                  Lieferantenprozess und ein Pilot-DPP umsetzen lassen. Den FörderCheck machen
                  wir direkt mit.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 bg-brand-900/40 border border-brand-50/20 text-brand-200 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest cursor-not-allowed whitespace-nowrap"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Selbstcheck (In dieser Kursvorlage nicht enthalten)
                </button>
                <p className="text-brand-200 text-xs">.xlsx · in Excel oder LibreOffice ausfüllbar</p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 border border-brand-50/30 hover:border-brand-50/60 hover:bg-brand-50/10 text-brand-50 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150 whitespace-nowrap"
                >
                  Termin buchen
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
