"use client";
import { useState, useMemo } from "react";
import { ArrowRight, TrendingDown, Banknote, CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const CALENDLY = "#kontakt";

const tx = {
  de: {
    eyebrow: "ROI-Kalkulator",
    h2a: "Was kostet",
    h2b: "Inaction?",
    desc: "Fehlende Nachhaltigkeit ist kein Status quo. Sie verursacht messbare Kosten: Lieferketten-Ausschluss und verpasste Förderungen. Berechnen Sie Ihr persönliches Risiko.",
    umsatzLabel: "Jahresumsatz (Mio. EUR)",
    umsatzPlaceholder: "z. B. 8",
    csrdLabel: "Haben Ihre Hauptkunden CSRD-Berichtspflicht?",
    csrdYes: "Ja, wir beliefern Großunternehmen",
    csrdNo: "Nein / unsicher",
    calculate: "Risiko berechnen",
    reset: "Neu berechnen",
    results: {
      title: "Ihre geschätzten jährlichen Opportunitätskosten",
      lieferkette: "Lieferketten-Ausschlussrisiko",
      lieferketteNote: "5–15 % Umsatzrisiko bei CSRD-pflichtigen Kunden",
      foerderung: "Verpasste Fördergelder",
      foerderungNote: "Ø 40 % von schätzbarem Projektvolumen",
      total: "Gesamtrisiko pro Jahr",
      totalNote: "Konservative Schätzung, reales Risiko oft höher",
      disclaimer: "Diese Berechnung basiert auf branchenüblichen Richtwerten und ist keine Rechts- oder Steuerberatung. Individuelle Risiken können abweichen.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaNote: "Förderung prüfen · Risiko reduzieren · In 4–6 Wochen erste Ergebnisse",
    },
  },
  en: {
    eyebrow: "ROI calculator",
    h2a: "What does",
    h2b: "inaction cost?",
    desc: "Missing sustainability is not a status quo. It generates measurable costs: supply chain exclusion and missed subsidies. Calculate your personal risk.",
    umsatzLabel: "Annual revenue (M EUR)",
    umsatzPlaceholder: "e.g. 8",
    csrdLabel: "Do your main customers have CSRD reporting obligations?",
    csrdYes: "Yes, we supply large companies",
    csrdNo: "No / unsure",
    calculate: "Calculate risk",
    reset: "Recalculate",
    results: {
      title: "Your estimated annual opportunity costs",
      lieferkette: "Supply chain exclusion risk",
      lieferketteNote: "5–15% revenue risk from CSRD-obligated customers",
      foerderung: "Missed subsidies",
      foerderungNote: "Avg. 40% of estimable project volume",
      total: "Total risk per year",
      totalNote: "Conservative estimate, real risk often higher",
      disclaimer: "This calculation is based on industry benchmarks and does not constitute legal or tax advice. Individual risks may vary.",
      cta: "Book free initial call",
      ctaNote: "Check funding · Reduce risk · First results in 4–6 weeks",
    },
  },
};

function formatEur(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === "de" ? "de-AT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

interface CalcResult {
  lieferkette: { min: number; max: number };
  foerderung: number;
  total: { min: number; max: number };
}

function calcRisk(umsatzMio: number, csrdKunden: boolean): CalcResult {
  const umsatz = umsatzMio * 1_000_000;

  // Supply chain exclusion: 5–15% of revenue if CSRD customers exist, else 2–5%
  const lieferketteRate = csrdKunden ? { min: 0.05, max: 0.15 } : { min: 0.02, max: 0.05 };
  const lieferkette = {
    min: umsatz * lieferketteRate.min,
    max: umsatz * lieferketteRate.max,
  };

  // Missed funding: estimate project volume at ~5% of revenue (ESG project budget),
  // funding covers 40% of that
  const projektvolumen = umsatz * 0.05;
  const foerderung = projektvolumen * 0.4;

  // Kein CSRD-Bußgeld: Nach Omnibus I (RL (EU) 2026/470) sind KMU und alle Unternehmen unter
  // 1.000 Beschäftigten oder 450 Mio. Euro Nettoumsatz nicht berichtspflichtig (N9 Nachtrag 1, B2).
  const totalMin = lieferkette.min + foerderung;
  const totalMax = lieferkette.max + foerderung;

  return { lieferkette, foerderung, total: { min: totalMin, max: totalMax } };
}

export default function RoiKalkulator() {
  const [umsatz, setUmsatz] = useState("");
  const [csrd, setCsrd] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { locale } = useLanguage();
  const t = tx[locale];

  const result = useMemo<CalcResult | null>(() => {
    if (!submitted) return null;
    const u = parseFloat(umsatz);
    if (isNaN(u) || u <= 0) return null;
    return calcRisk(u, csrd ?? false);
  }, [submitted, umsatz, csrd]);

  const canCalculate = umsatz && csrd !== null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canCalculate) return;
    setSubmitted(true);
  }

  function handleReset() {
    setUmsatz("");
    setCsrd(null);
    setSubmitted(false);
  }

  const inputClass = "w-full bg-canvas border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5";

  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <p className="eyebrow mb-4 justify-center">{t.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h1>
          <p className="text-ink-secondary text-sm leading-relaxed max-w-xl mx-auto">{t.desc}</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="rounded-card border border-border bg-surface p-8 space-y-6">
            <div className="max-w-xs">
              <div>
                <label className={labelClass} htmlFor="roi-umsatz">{t.umsatzLabel}</label>
                <input
                  id="roi-umsatz"
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={umsatz}
                  onChange={(e) => setUmsatz(e.target.value)}
                  placeholder={t.umsatzPlaceholder}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <p className={labelClass}>{t.csrdLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    type="button"
                    onClick={() => setCsrd(val)}
                    aria-pressed={csrd === val}
                    className={`text-left px-4 py-3 rounded-field text-sm border transition-all ${
                      csrd === val
                        ? "bg-brand-50 border-brand-600 text-brand-700 font-medium"
                        : "bg-canvas border-border text-ink-secondary hover:border-brand-300 hover:text-ink"
                    }`}
                  >
                    {val ? t.csrdYes : t.csrdNo}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!canCalculate}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all ${
                canCalculate
                  ? "bg-brand-600 hover:bg-brand-700 text-canvas hover:-translate-y-px"
                  : "bg-surface text-ink-tertiary border border-border cursor-not-allowed"
              }`}
            >
              {t.calculate} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>
        ) : result ? (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary text-center mb-6">{t.results.title}</p>

            {/* Cost tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-card border border-border bg-surface p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-semibold text-ink-secondary">{t.results.lieferkette}</p>
                </div>
                <p className="text-xl font-extrabold text-ink tabular-nums">
                  {formatEur(result.lieferkette.min, locale)}–{formatEur(result.lieferkette.max, locale)}
                </p>
                <p className="text-[11px] text-ink-tertiary mt-1">{t.results.lieferketteNote}</p>
              </div>

              <div className="rounded-card border border-border bg-surface p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Banknote className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-semibold text-ink-secondary">{t.results.foerderung}</p>
                </div>
                <p className="text-xl font-extrabold text-ink tabular-nums">
                  {formatEur(result.foerderung, locale)}
                </p>
                <p className="text-[11px] text-ink-tertiary mt-1">{t.results.foerderungNote}</p>
              </div>
            </div>

            {/* Total */}
            <div className="rounded-card border-2 border-brand-200 bg-brand-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-600 mb-1">{t.results.total}</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-ink tabular-nums leading-tight">
                  {formatEur(result.total.min, locale)}&nbsp;–&nbsp;{formatEur(result.total.max, locale)}
                </p>
                <p className="text-[11px] text-ink-tertiary mt-1">{t.results.totalNote}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-card border border-border bg-surface p-6 text-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-7 py-3.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px mb-2"
              >
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                {t.results.cta}
              </a>
              <p className="text-[11px] text-ink-tertiary mt-2">{t.results.ctaNote}</p>
            </div>

            <p className="text-[11px] text-ink-tertiary text-center leading-snug">{t.results.disclaimer}</p>

            <div className="text-center">
              <button type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary border border-border hover:text-ink hover:border-ink-secondary transition-colors bg-canvas"
              >
                {t.reset}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
