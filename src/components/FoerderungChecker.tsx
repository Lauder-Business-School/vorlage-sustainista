"use client";
import { useState, useMemo } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Förder-Schnellcheck",
    h2a: "Bin ich",
    // \u00AD: Wort ist bei 280px 183px breit, Spalte 174px.
    h2b: "förder\u00ADberechtigt?",
    desc: "aws und FFG fördern CSRD-Beratung und ESG-Projekte für KMU in Österreich. Prüfen Sie in 30 Sekunden, ob Ihr Unternehmen die Grundvoraussetzungen erfüllt.",
    maLabel: "Mitarbeitende (Vollzeitäquivalente)",
    maPlaceholder: "z. B. 85",
    umsatzLabel: "Jahresumsatz (Mio. EUR)",
    umsatzPlaceholder: "z. B. 12",
    check: "Förderfähigkeit prüfen",
    reset: "Neu prüfen",
    results: {
      eligible: {
        icon: "check",
        badge: "Förderfähig",
        title: "Ihr Unternehmen erfüllt die KMU-Definition.",
        body: "aws-Digital und FFG-Innovationsscheck stehen Ihnen offen. CSRD-Beratung, CO₂-Bilanzierung und KI-Automatisierung sind typisch mit 40–80 % förderbar. Sustainista prüft Ihre konkrete Förderung kostenlos.",
        cta: "Kostenlose Förderprüfung starten",
      },
      borderline: {
        icon: "warn",
        badge: "Grenzfall: Prüfung empfohlen",
        title: "Sie liegen nahe an der KMU-Grenze.",
        body: "Unternehmen mit 250+ Mitarbeitenden oder 50+ Mio. € Umsatz gelten nicht mehr als KMU. Ausnahmen und kombinierte Förderungen sind aber möglich. Wir prüfen das kostenlos.",
        cta: "Grenzfall prüfen lassen",
      },
      ineligible: {
        icon: "x",
        badge: "Nicht KMU-förderfähig",
        title: "Ihr Unternehmen überschreitet die KMU-Grenzen.",
        body: "Für größere Unternehmen gibt es andere Förderschienen, z. B. EU-Taxonomie-Begleitung, BAFA-Programme (DE) oder sektorspezifische Förderungen. Wir beraten Sie gerne zu Alternativen.",
        cta: "Alternativen besprechen",
      },
    },
    note: "KMU-Definition (EU): < 250 MA und < 50 Mio. € Jahresumsatz",
    errorMa: "Bitte Mitarbeitende eingeben",
    errorUmsatz: "Bitte Jahresumsatz eingeben",
  },
  en: {
    eyebrow: "Funding quick-check",
    h2a: "Am I eligible",
    h2b: "for funding?",
    desc: "aws and FFG subsidise CSRD consulting and ESG projects for SMEs in Austria. Check in 30 seconds if your company meets the basic criteria.",
    maLabel: "Employees (full-time equivalents)",
    maPlaceholder: "e.g. 85",
    umsatzLabel: "Annual revenue (M EUR)",
    umsatzPlaceholder: "e.g. 12",
    check: "Check eligibility",
    reset: "Check again",
    results: {
      eligible: {
        icon: "check",
        badge: "Eligible",
        title: "Your company meets the SME definition.",
        body: "aws Digital and FFG Innovation Voucher are open to you. CSRD consulting, CO₂ accounting and AI automation are typically subsidised at 40–80%. Sustainista checks your specific funding options for free.",
        cta: "Start free funding check",
      },
      borderline: {
        icon: "warn",
        badge: "Borderline: review recommended",
        title: "You are close to the SME threshold.",
        body: "Companies with 250+ employees or €50M+ revenue no longer qualify as SMEs. Exceptions and combined funding programmes may apply. We check this for free.",
        cta: "Have your case reviewed",
      },
      ineligible: {
        icon: "x",
        badge: "Not SME-eligible",
        title: "Your company exceeds the SME thresholds.",
        body: "Larger companies can access other funding tracks, e.g. EU Taxonomy support, BAFA programmes (DE) or sector-specific grants. We are happy to advise you on alternatives.",
        cta: "Discuss alternatives",
      },
    },
    note: "SME definition (EU): < 250 employees and < €50M annual revenue",
    errorMa: "Please enter number of employees",
    errorUmsatz: "Please enter annual revenue",
  },
};

type ResultKey = "eligible" | "borderline" | "ineligible";

function getResult(ma: number, umsatz: number): ResultKey {
  const isSmeMa = ma < 250;
  const isSmeUmsatz = umsatz < 50;
  if (isSmeMa && isSmeUmsatz) return "eligible";
  if (ma <= 300 || umsatz <= 60) return "borderline";
  return "ineligible";
}

export default function FoerderungChecker() {
  const [ma, setMa] = useState("");
  const [umsatz, setUmsatz] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({ ma: false, umsatz: false });
  const { locale } = useLanguage();
  const t = tx[locale];

  const resultKey = useMemo<ResultKey | null>(() => {
    if (!submitted) return null;
    const maNum = parseFloat(ma);
    const umsatzNum = parseFloat(umsatz);
    if (isNaN(maNum) || isNaN(umsatzNum)) return null;
    return getResult(maNum, umsatzNum);
  }, [submitted, ma, umsatz]);

  const result = resultKey ? t.results[resultKey] : null;

  const iconMap = {
    check: <CheckCircle2 className="w-6 h-6 text-brand-600" aria-hidden="true" />,
    warn: <AlertTriangle className="w-6 h-6 text-amber-500" aria-hidden="true" />,
    x: <XCircle className="w-6 h-6 text-red-400" aria-hidden="true" />,
  };

  const badgeColorMap: Record<ResultKey, string> = {
    eligible: "bg-brand-50 border-brand-200 text-brand-700",
    borderline: "bg-amber-50 border-amber-200 text-amber-700",
    ineligible: "bg-red-50 border-red-200 text-red-600",
  };

  function handleCheck() {
    const errors = { ma: !ma, umsatz: !umsatz };
    setFieldErrors(errors);
    if (errors.ma || errors.umsatz) return;
    setSubmitted(true);
  }

  function handleReset() {
    setMa("");
    setUmsatz("");
    setSubmitted(false);
    setFieldErrors({ ma: false, umsatz: false });
  }

  const inputClass = "w-full bg-canvas border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5";

  return (
    <div className="mt-10 rounded-card border border-border bg-canvas p-8">
      <p className="eyebrow mb-3">{t.eyebrow}</p>
      <h3 className="text-2xl font-extrabold tracking-tight text-ink leading-tight mb-2 sm:hyphens-none">
        {t.h2a} <span className="text-ink-tertiary">{t.h2b}</span>
      </h3>
      <p className="text-sm text-ink-secondary mb-6 leading-relaxed">{t.desc}</p>

      {!submitted ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass} htmlFor="checker-ma">{t.maLabel}</label>
              <input
                id="checker-ma"
                type="number"
                min="1"
                value={ma}
                onChange={(e) => { setMa(e.target.value); setFieldErrors((prev) => ({ ...prev, ma: false })); }}
                placeholder={t.maPlaceholder}
                className={inputClass}
                aria-invalid={fieldErrors.ma || undefined}
                aria-describedby={fieldErrors.ma ? "checker-ma-error" : undefined}
              />
              {fieldErrors.ma && (
                <p id="checker-ma-error" role="alert" className="mt-1.5 text-xs text-red-600">{t.errorMa}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="checker-umsatz">{t.umsatzLabel}</label>
              <input
                id="checker-umsatz"
                type="number"
                min="0"
                step="0.1"
                value={umsatz}
                onChange={(e) => { setUmsatz(e.target.value); setFieldErrors((prev) => ({ ...prev, umsatz: false })); }}
                placeholder={t.umsatzPlaceholder}
                className={inputClass}
                aria-invalid={fieldErrors.umsatz || undefined}
                aria-describedby={fieldErrors.umsatz ? "checker-umsatz-error" : undefined}
              />
              {fieldErrors.umsatz && (
                <p id="checker-umsatz-error" role="alert" className="mt-1.5 text-xs text-red-600">{t.errorUmsatz}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-[11px] text-ink-tertiary">{t.note}</p>
            <button type="button"
              onClick={handleCheck}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all bg-brand-600 hover:bg-brand-700 text-canvas hover:-translate-y-px"
            >
              {t.check} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : result && resultKey ? (
        <div aria-live="polite" className="space-y-4">
          <div className={`inline-flex items-center gap-2 border rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] ${badgeColorMap[resultKey]}`}>
            {iconMap[result.icon as keyof typeof iconMap]}
            {result.badge}
          </div>
          <p className="text-base font-semibold text-ink">{result.title}</p>
          <p className="text-sm text-ink-secondary leading-relaxed">{result.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#kontakt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px"
            >
              {result.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <button type="button"
              onClick={handleReset}
              className="px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary border border-border hover:text-ink hover:border-ink-secondary transition-colors bg-canvas"
            >
              {t.reset}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
