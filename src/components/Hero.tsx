"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import Typewriter from "@/components/Typewriter";
import { CALENDLY_URL, trackEvent } from "@/lib/cta";

const tx = {
  de: {
    eyebrow: "ESG-Daten · Produktpass · KI-Automatisierung",
    // ­: Wort ist bei 280px 310px breit, Spalte 240px. Ab 375px passt es ungetrennt.
    h1a: "Nachhaltig­keit,",
    h1b: "die sich rechnet.",
    sub: (
      <>
        Wir helfen KMU, Händler:innen und Produzenten,{" "}
        <strong className="font-semibold text-ink">ESG-Daten aufzubauen</strong>,{" "}
        <strong className="font-semibold text-ink">Scope 3 vollständig zu erfassen</strong>{" "}
        und belastbar zu berichten. Mit KI, auf österreichischen Standards.
      </>
    ),
    cta1: "Kostenloses Erstgespräch buchen",
    cta2: "Ihren Einstieg finden",
    typePrefix: "Wir machen",
    typeWords: [
      "ESG-Daten nutzbar.",
      "CO₂-Bilanzen prüfbar.",
      "Produktpässe startklar.",
      "Datenprozesse automatisch.",
      "Kreislaufwirtschaft messbar.",
    ],
    pathLabel: "Leistungsweg in drei Schritten",
    path: [
      { title: "Geförderter Einstieg", text: "Starter Check mit CO₂-Bilanz und ESG-Erstbericht. Wir prüfen, welche Förderung passt.", tag: "Förderung möglich" },
      { title: "Folgeprojekt", text: "ESG Ready: CO₂-Basis und Datenstruktur, auf der Ihr nächster Bericht aufbaut.", tag: "Klarer Projektumfang" },
      { title: "AI Sustainability Automation", text: "Daten aus PDF, XLSX und API strukturieren, Prozesse automatisieren.", tag: "Laufendes System" },
    ],
    facts: [
      { n: "4–6", unit: "Wochen", label: "bis zum Erstbericht" },
      { n: "Festpreis", unit: "", label: "statt Stundensatz" },
      { n: "Scope 1–3", unit: "", label: "vollständig erfasst" },
    ],
  },
  en: {
    eyebrow: "ESG data · Product passport · AI automation",
    h1a: "Sustainability",
    h1b: "that pays off.",
    sub: (
      <>
        We help SMEs, retailers and producers{" "}
        <strong className="font-semibold text-ink">build ESG data systems</strong>,{" "}
        <strong className="font-semibold text-ink">capture Scope 3 completely</strong>{" "}
        and report with confidence. With AI, on Austrian standards.
      </>
    ),
    cta1: "Book a free initial call",
    cta2: "Find your starting point",
    typePrefix: "We make",
    typeWords: [
      "ESG data usable.",
      "CO₂ balances auditable.",
      "product passports ready.",
      "data processes automatic.",
      "circularity measurable.",
    ],
    pathLabel: "Service path in three steps",
    path: [
      { title: "Funded entry", text: "Starter check with carbon footprint and first ESG report. We check which funding fits.", tag: "Funding possible" },
      { title: "Follow-up project", text: "ESG Ready: the CO₂ baseline and data structure your next report builds on.", tag: "Clear project scope" },
      { title: "AI Sustainability Automation", text: "Structure data from PDF, XLSX and API, automate processes.", tag: "Running system" },
    ],
    facts: [
      { n: "4–6", unit: "weeks", label: "to the first report" },
      { n: "Fixed price", unit: "", label: "instead of hourly rates" },
      { n: "Scope 1–3", unit: "", label: "fully covered" },
    ],
  },
};

export default function Hero() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="group relative flex flex-col items-center bg-canvas pt-[104px] overflow-hidden">
      {/* Hintergrundbild: das Sustainista-Team auf der ViennaUP, farbig präsent (analog Hackathon-Hero) */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/team-viennaup-2026.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.70] saturate-150 contrast-110 transition-all duration-700 ease-out group-hover:opacity-[0.95] group-hover:saturate-[1.75] motion-reduce:transition-none"
        />
        {/* Bewusste Ausnahme (DESIGN.md, Abschnitt "Dokumentierte Ausnahmen"): der Radial-Scrim hellt die Bildmitte auf, damit der Text seinen Kontrast behält */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 60% at 50% 42%, var(--color-canvas) 50%, color-mix(in srgb, var(--color-canvas) 62%, transparent) 78%, transparent 100%)",
          }}
        />
        {/* Weiche Kanten oben und unten */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-canvas) 0%, transparent 22%, transparent 78%, var(--color-canvas) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full pt-14 pb-16 sm:pt-16 sm:pb-20 flex flex-col items-center text-center">

        <p className="animate-fade-up eyebrow mb-6">{t.eyebrow}</p>

        <h1
          className="speakable animate-fade-up delay-1 font-extrabold tracking-tight leading-[1.02] mb-5"
          style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
        >
          <span className="block text-ink">{t.h1a}</span>
          <span className="block text-brand-600">{t.h1b}</span>
        </h1>

        <p className="animate-fade-up delay-2 text-xl sm:text-2xl font-semibold tracking-tight text-ink-secondary mb-6 min-h-[2lh] sm:min-h-[1lh]">
          {t.typePrefix}{" "}
          <Typewriter words={t.typeWords} className="text-brand-600" />
        </p>

        <p className="speakable animate-fade-up delay-2 text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-[52ch] mb-8">
          {t.sub}
        </p>

        <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-center gap-3 mb-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { id: "calendly", location: "hero" })}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-brand-600 hover:bg-brand-700 text-canvas text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-150 hover:-translate-y-px hover:shadow-ambient-low"
          >
            {t.cta1}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#ansatz"
            onClick={() => trackEvent("cta_click", { id: "radar_anchor", location: "hero" })}
            className="inline-flex items-center gap-2 px-3 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary hover:text-ink underline-offset-4 hover:underline"
          >
            {t.cta2}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <dl className="animate-fade-up delay-4 mb-10 flex flex-wrap justify-center gap-y-3 sm:divide-x sm:divide-border-strong">
          {t.facts.map((f) => (
            <div key={f.label} className="flex items-baseline gap-2 px-5 sm:px-8">
              <dt className="sr-only">{f.label}</dt>
              <dd className="text-xl font-extrabold text-ink tabular-nums">
                {f.n}{f.unit && <span className="ml-1">{f.unit}</span>}
              </dd>
              <dd className="text-sm text-ink-secondary">{f.label}</dd>
            </div>
          ))}
        </dl>

        {/* Leistungsweg als Text statt als Bild: scharf auf jedem Schirm, lesbar ab 320px, für Screenreader eine Liste */}
        <ol className="animate-fade-up delay-5 grid w-full max-w-5xl overflow-hidden rounded-card border border-border bg-canvas text-left shadow-ambient-low sm:grid-cols-3" aria-label={t.pathLabel}>
          {t.path.map((schritt, i) => (
            <li key={schritt.title} className="relative border-t border-border first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0">
              <a
                href="#pakete"
                onClick={() => trackEvent("cta_click", { id: `hero_path_${i + 1}`, location: "hero" })}
                className="group/schritt flex h-full flex-col p-6 transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600 sm:p-7"
              >
                <span className="mb-5 flex items-center gap-3">
                  <span className="text-3xl font-extrabold tabular-nums tracking-tight text-brand-600">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border-strong" aria-hidden="true" />
                  <ArrowRight className="h-4 w-4 text-ink-tertiary transition-transform duration-150 group-hover/schritt:translate-x-0.5 group-hover/schritt:text-brand-600 motion-reduce:transition-none" aria-hidden="true" />
                </span>
                <span className="text-lg font-bold leading-snug text-ink">{schritt.title}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{schritt.text}</span>
                <span className="mt-5 inline-flex self-start rounded-full border border-border bg-brand-50 px-3 py-1 text-marke font-semibold uppercase tracking-[0.08em] text-brand-700">
                  {schritt.tag}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
