import type { Metadata } from "next";
import BatteryPassDecisionTree from "@/components/compliance/BatteryPassDecisionTree";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import { Download, Clock, Check, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Batteriepass-Check für E-Autos & E-Bikes",
  description:
    "Kostenloser Selbstcheck für Händler und Vermieter gebrauchter E-Autos und E-Bikes: Sind Ihre Batteriedaten verkaufsfit vor der EU-Batteriepass-Pflicht 2027?",
  alternates: { canonical: "https://www.example.invalid/batteriepass-check" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Batteriepass-Check: Sind Ihre E-Fahrzeugdaten verkaufsfit?",
    description:
      "Kostenloser Selbstcheck für den Handel, die Aufbereitung und den Verleih gebrauchter E-Autos und E-Bikes, vor der Batteriepass-Pflicht 2027.",
    url: "https://www.example.invalid/batteriepass-check",
    images: [
      {
        url: "https://www.example.invalid/batteriepass-check-hero.png",
        width: 1200,
        height: 630,
        alt: "Batteriepass-Readiness-Check - Zustandsnachweis per QR Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batteriepass-Check: Sind Ihre E-Fahrzeugdaten verkaufsfit?",
    description:
      "Kostenloser Selbstcheck für gebrauchte E-Autos und E-Bikes, vor der EU-Batteriepass-Pflicht 2027.",
    images: ["https://www.example.invalid/batteriepass-check-hero.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ab wann gilt der EU-Batteriepass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der EU-Batteriepass wird ab 18. Februar 2027 Pflicht: für neu in Verkehr gebrachte Antriebsbatterien (E-Auto), LMT-Batterien (E-Bike, E-Scooter) und Industriebatterien über 2 kWh. Verantwortlich ist der Inverkehrbringer, typischerweise Hersteller und Importeur.",
      },
    },
    {
      "@type": "Question",
      name: "Gilt ein E-Bike als Fahrzeug?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. E-Fahrzeuge umfassen ausdrücklich auch E-Zweiräder. Ab 2027 benötigen neu auf den EU-Markt kommende E-Bike-Akkus (LMT-Batterien) einen digitalen Batteriepass. Für den Gebrauchtmarkt heißt das: Neufahrzeuge bringen den Pass künftig mit.",
      },
    },
    {
      "@type": "Question",
      name: "Bin ich als Gebrauchthändler zur Passerstellung verpflichtet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel nicht: Sie sind meist nicht der pflichtige Inverkehrbringer der Batterie. Für Sie ist der Zustandsnachweis vor allem ein freiwilliges Verkaufs- und Vertrauensargument, eine Vorbereitung auf einen datengetriebenen Markt und eine Restwert- und Risikofrage.",
      },
    },
  ],
};

const audiences = [
  "Autohäuser & Gebrauchtwagenhandel",
  "E-Bike-Fachhandel & Werkstätten",
  "Aufbereitung & Refurbishment",
  "Verleih & Flottenbetreiber",
  "Plattformen & Marktplätze",
];

const checks = [
  "Sie verkaufen, vermieten oder bereiten gebrauchte E-Autos oder E-Bikes auf.",
  "Kund:innen fragen nach dem Batteriezustand (SoH, Ladezyklen, Restreichweite).",
  "Sie betreiben eine E-Flotte mit Saison- oder Leasingrückläufern.",
  "Batteriedaten liegen verstreut vor oder gar nicht.",
  "Sie möchten Restwerte belegen und Reklamationen vermeiden.",
];

const steps = [
  {
    n: "Schritt 1",
    title: "Batteriepass-Check",
    body: "Kostenloser Selbstcheck: Status Ihrer Batterie- und Fahrzeugdaten in einer klaren Ampel.",
  },
  {
    n: "Schritt 2",
    title: "Battery Passport Light",
    body: "Zustandsnachweis je Fahrzeug, per QR-Code abrufbar, für Verkauf und Vertrauen.",
  },
  {
    n: "Schritt 3",
    title: "Automatisieren & Kreislauf",
    body: "Daten wiederverwendbar machen und an Reparatur- und Recyclingpartner weitergeben.",
  },
];

const maturityLevels = [
  {
    n: "Stufe 1",
    title: "Unsortiert",
    body: "Zustandsdaten müssen pro Fahrzeug erst erhoben werden; nichts ist dokumentiert.",
    fill: "25%",
    opacity: "opacity-40",
  },
  {
    n: "Stufe 2",
    title: "Verstreut",
    body: "Daten existieren, sind aber unstrukturiert und nicht zusammengeführt.",
    fill: "50%",
    opacity: "opacity-60",
  },
  {
    n: "Stufe 3",
    title: "Strukturiert",
    body: "Daten digital und konsistent erfasst, auf definierter Ebene.",
    fill: "75%",
    opacity: "opacity-80",
  },
  {
    n: "Stufe 4",
    title: "Verkaufsfit",
    body: "Nachweis pro Fahrzeug, kundenseitig abrufbar, an Partner weitergebbar.",
    fill: "100%",
    opacity: "opacity-100",
  },
];

const passportRows = [
  { label: "Fahrzeug / E-Bike", value: "Beispielmodell" },
  { label: "Erfassungsebene", value: "Batteriepack" },
  { label: "State of Health", value: "86 %" },
  { label: "Restreichweite", value: "~ 310 km" },
  { label: "Kapazität", value: "47,2 kWh" },
  { label: "Ladezyklen", value: "412" },
  { label: "Nachweisstatus", value: "digital dokumentiert" },
  { label: "Abruf", value: "per QR-Code" },
];

const faqs = [
  {
    q: 'Gilt ein E-Bike als "Fahrzeug"?',
    a: 'Ja. "E-Fahrzeuge" umfasst ausdrücklich auch E-Zweiräder. Ab 2027 benötigen neu auf den EU-Markt kommende E-Bike-Akkus (LMT-Batterien) einen digitalen Batteriepass. Für den Gebrauchtmarkt heißt das: Neufahrzeuge bringen den Pass künftig mit, und Kund:innen werden Batteriedaten dann auch beim Gebrauchtkauf erwarten.',
  },
  {
    q: "Bin ich als Gebrauchthändler zur Passerstellung verpflichtet?",
    a: "In der Regel nicht: Sie sind meist nicht der pflichtige Inverkehrbringer der Batterie. Für Sie ist der Zustandsnachweis vor allem ein freiwilliges Verkaufs- und Vertrauensargument, die Vorbereitung auf einen datengetriebenen Markt und eine Restwert- und Risikofrage: Ein dokumentierter Zustand schützt vor Reklamation und stützt den Preis.",
  },
];

export default function BatteriepassCheck() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="relative page-header page-header--batterie pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">

            {/* Hero image, first content element, priority for LCP */}
            <div className="mb-10 border border-border rounded-card overflow-hidden bg-surface">
              <Image
                src="/batteriepass-check-hero.png"
                alt="Batteriepass-Readiness-Check - Zustandsnachweis per QR Code"
                width={1672}
                height={941}
                priority
                className="w-full h-auto block"
              />
            </div>

            <span className="eyebrow mb-5 block">Leitfaden · Selbstcheck</span>

            <h1 className="font-black tracking-tight leading-[1.05] text-ink mb-6"
                style={{ fontSize: "clamp(2.2rem,5.5vw,3.75rem)" }}>
              Ab 2027 zählt der Batteriepass.{" "}
              Machen Sie Ihre E-Fahrzeuge verkaufsfit.
            </h1>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Bei gebrauchten E-Autos und E-Bikes entscheidet der Akku über Vertrauen,
              Preis und Wiederverkauf. Der kostenlose Selbstcheck zeigt, wo Ihre
              Datenlücken sind und was den Batteriezustand vom Risiko zum
              Verkaufsargument macht.
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
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 border border-border hover:border-brand-400 hover:bg-brand-50 text-brand-600 hover:text-brand-700 px-7 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150"
              >
                30-Minuten-Gespräch buchen
              </Link>
            </div>

            {/* Deadline chip */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-border text-brand-700 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              EU-Batteriepass · Pflicht ab 18.02.2027
            </div>
          </div>
        </section>

        <BatteryPassDecisionTree />

        {/* ── Betrifft Sie das? ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Betrifft Sie das?</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-6 max-w-[20ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Für Betriebe, die mit gebrauchten E-Fahrzeugen arbeiten
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
              Was ab 2027 wirklich gilt
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Ab <strong className="text-ink">18. Februar 2027</strong> benötigen neu in Verkehr
              gebrachte EV- und E-Bike-Akkus (LMT) einen digitalen Batteriepass; Neufahrzeuge
              bringen ihn dann mit. Die Folge: Kund:innen erwarten Batteriedaten künftig auch
              beim Gebrauchtkauf. Wer jetzt Daten strukturiert, macht den Batteriezustand zum
              Verkaufsargument, bevor es alle tun.
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
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-10 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              In drei Schritten vom Datenchaos zum Verkaufsargument
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

        {/* ── Reifegrad in vier Stufen ── */}
        <section className="bg-canvas py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Orientierung</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-4 max-w-[20ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              Ihr Reifegrad in vier Stufen
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Der Check verortet Ihren Betrieb auf einer von vier Stufen und nennt den
              nächsten sinnvollen Schritt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-card overflow-hidden">
              {maturityLevels.map((level, i) => (
                <div
                  key={level.n}
                  className={`bg-canvas p-6 ${i < maturityLevels.length - 1 ? "border-b sm:border-b-0 sm:border-r border-border" : ""} ${i === 1 ? "lg:border-b-0" : ""}`}
                >
                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full bg-border mb-5 overflow-hidden">
                    <div
                      className={`h-full bg-brand-600 rounded-full ${level.opacity}`}
                      style={{ width: level.fill }}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1.5">
                    {level.n}
                  </p>
                  <h3 className="text-[1.0625rem] font-semibold text-ink mb-2 leading-snug">
                    {level.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{level.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Battery Passport Light Beispiel ── */}
        <section className="bg-surface py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Das Ziel</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-4 max-w-[24ch]"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              So sieht ein &bdquo;Battery Passport Light&ldquo; aus
            </h2>
            <p className="text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Aus einer Unsicherheit wird ein sichtbares Verkaufsargument, abrufbar per
              QR-Code am Fahrzeug.
            </p>

            {/* Passport card */}
            <div className="bg-brand-700 text-brand-50 rounded-card p-8 max-w-[520px] mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-5">
                Battery Passport Light
              </p>
              <div className="divide-y divide-brand-50/10">
                {passportRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2.5 text-sm">
                    <span className="text-brand-200">{row.label}</span>
                    <strong className="font-semibold text-white">{row.value}</strong>
                  </div>
                ))}
              </div>
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
                Förderfähigkeit prüfen wir direkt im kostenlosen ErstCheck mit.
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
                  Tragen Sie Ihre roten und orangen Felder zusammen. Das sind Ihre nächsten
                  Schritte. Im kostenlosen 30-Minuten-Gespräch sehen wir uns Ihr Ergebnis
                  gemeinsam an und skizzieren, wie ein &bdquo;Battery Passport Light&ldquo; für Ihren
                  Bestand aussehen könnte. Den FörderCheck machen wir direkt mit.
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
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 border border-brand-50/30 hover:border-brand-50/60 hover:bg-brand-50/10 text-brand-50 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-widest transition-all duration-150 whitespace-nowrap"
                >
                  Termin buchen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ (structured) ── */}
        <section className="bg-surface py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Häufige Fragen</span>
            <h2 className="font-bold tracking-tight text-ink leading-[1.2] mb-10"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
              FAQ zum Batteriepass-Check
            </h2>
            <ArticleFaqAccordion
              faqs={[
                {
                  q: "Ab wann gilt der EU-Batteriepass?",
                  a: "Der EU-Batteriepass wird ab 18. Februar 2027 Pflicht: für neu in Verkehr gebrachte Antriebsbatterien (E-Auto), LMT-Batterien (E-Bike, E-Scooter) und Industriebatterien über 2 kWh. Verantwortlich ist der Inverkehrbringer, typischerweise Hersteller und Importeur.",
                },
                {
                  q: "Gilt ein E-Bike als Fahrzeug?",
                  a: "Ja. E-Fahrzeuge umfassen ausdrücklich auch E-Zweiräder. Ab 2027 benötigen neu auf den EU-Markt kommende E-Bike-Akkus (LMT-Batterien) einen digitalen Batteriepass. Für den Gebrauchtmarkt heißt das: Neufahrzeuge bringen den Pass künftig mit.",
                },
                {
                  q: "Bin ich als Gebrauchthändler zur Passerstellung verpflichtet?",
                  a: "In der Regel nicht: Sie sind meist nicht der pflichtige Inverkehrbringer der Batterie. Für Sie ist der Zustandsnachweis vor allem ein freiwilliges Verkaufs- und Vertrauensargument, eine Vorbereitung auf einen datengetriebenen Markt und eine Restwert- und Risikofrage.",
                },
              ]}
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
