"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { FACTORS } from "@/lib/emission-factors";
import { useInView } from "@/lib/useInView";
import { CALENDLY_URL, trackEvent } from "@/lib/cta";
import CountUp from "@/components/CountUp";

const KWH = 12000;
const KG = KWH * FACTORS.strom;

const tx = {
  de: {
    eyebrow: "Von der Rechnung zum Bericht",
    h2a: "Eine Stromrechnung.",
    h2b: "Ein prüfbarer Datenpunkt.",
    sub: "So entsteht aus einem Beleg ein Eintrag, den Banken, Wirtschaftsprüfer und Großkunden akzeptieren. Beispielrechnung, Faktor laut UBA AT (Datenbasis 2023).",
    steps: [
      { n: "01", label: "Rechnung", title: "Beleg erfassen", rows: [["Dokument", "Stromrechnung"], ["Verbrauch", "12.000 kWh"], ["Zeitraum", "12 Monate"]], foot: "KI liest PDF und Zählerwerte aus." },
      { n: "02", label: "Scope-Zuordnung", title: "Zuordnen und rechnen", rows: [["Kategorie", "Scope 2, Netzstrom"], ["Faktor", `${String(FACTORS.strom).replace(".", ",")} kg CO₂e/kWh`], ["Rechnung", "12.000 × 0,152"]], foot: "UBA-Faktor für Österreich, nachvollziehbar." },
      { n: "03", label: "ESRS-Datenpunkt", title: "Berichtsfähig ablegen", rows: [["Standard", "ESRS E1-6"], ["Datenpunkt", "Scope-2-Bruttoemissionen"], ["Quelle", "Rechnung, Faktor, Datum"]], foot: "Jeder Wert führt zurück zum Beleg." },
    ],
    result: "kg CO₂e",
    cta: "Ihre ersten Rechnungen prüfen lassen",
    note: "Beispielwerte zur Veranschaulichung, keine Kundendaten.",
  },
  en: {
    eyebrow: "From invoice to report",
    h2a: "One electricity bill.",
    h2b: "One auditable data point.",
    sub: "How a single document becomes an entry that banks, auditors and major customers accept. Sample invoice, factor per UBA AT (2023 data basis).",
    steps: [
      { n: "01", label: "Invoice", title: "Capture the document", rows: [["Document", "Electricity bill"], ["Consumption", "12,000 kWh"], ["Period", "12 months"]], foot: "AI reads the PDF and meter values." },
      { n: "02", label: "Scope mapping", title: "Map and calculate", rows: [["Category", "Scope 2, grid power"], ["Factor", `${FACTORS.strom} kg CO₂e/kWh`], ["Calculation", "12,000 × 0.152"]], foot: "Austrian UBA factor, fully traceable." },
      { n: "03", label: "ESRS data point", title: "File it report-ready", rows: [["Standard", "ESRS E1-6"], ["Data point", "Gross Scope 2 emissions"], ["Source", "Invoice, factor, date"]], foot: "Every value traces back to its source." },
    ],
    result: "kg CO₂e",
    cta: "Have your first invoices reviewed",
    note: "Sample values for illustration, not customer data.",
  },
};

export default function BillStory() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reveal = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`;

  return (
    <section className="py-24 sm:py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed max-w-[60ch]">{t.sub}</p>
        </div>

        <div ref={ref} className="relative">
          {/* Messlinie: zeichnet sich beim Sichtbarwerden von links nach rechts */}
          <div className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-border" aria-hidden="true" />
          <div
            className={`hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-brand-600 origin-left transition-transform duration-[1400ms] ease-out motion-reduce:transition-none motion-reduce:scale-x-100 ${inView ? "scale-x-100" : "scale-x-0"}`}
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {t.steps.map((s, i) => (
              <li key={s.n} className={`relative pt-8 lg:pt-10 border-t border-border lg:border-t-0 ${reveal()}`} style={{ transitionDelay: inView ? `${i * 180}ms` : "0ms" }}>
                <span className="hidden lg:block absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-brand-600 bg-canvas" aria-hidden="true" />
                <p className="text-marke font-bold uppercase tracking-[0.08em] text-brand-600 mb-1 tabular-nums">{s.n} · {s.label}</p>
                <h3 className="text-xl font-bold text-ink mb-5">{s.title}</h3>
                <dl className="font-mono text-[0.8125rem] leading-6">
                  {s.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-border py-1.5">
                      <dt className="text-ink-tertiary">{k}</dt>
                      <dd className="text-ink text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                {i === 1 && (
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-ink"><CountUp to={KG} /></span>
                    <span className="text-sm font-semibold text-ink-secondary">{t.result}</span>
                  </p>
                )}
                <p className="mt-4 text-sm text-ink-secondary">{s.foot}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { id: "calendly", location: "bill_story" })}
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors self-start"
          >
            {t.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <p className="text-klein text-ink-tertiary">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
