"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { FACTORS } from "@/lib/emission-factors";
import { trackEvent } from "@/lib/cta";

const tx = {
  de: {
    label: "Live-Rechner · Scope 2",
    input: "Stromverbrauch pro Jahr (kWh)",
    result: "Scope-2-Emissionen",
    unitT: "t CO₂e",
    unitKg: "kg CO₂e",
    basis: `UBA AT 2023 · ${String(FACTORS.strom).replace(".", ",")} kg CO₂e/kWh Strom Österreich`,
    example: "Beispielwert, bitte anpassen",
    cta: "Vollständigen CO₂-Check starten",
  },
  en: {
    label: "Live calculator · Scope 2",
    input: "Electricity use per year (kWh)",
    result: "Scope 2 emissions",
    unitT: "t CO₂e",
    unitKg: "kg CO₂e",
    basis: `UBA AT 2023 · ${FACTORS.strom} kg CO₂e/kWh Austrian grid electricity`,
    example: "Example value, adjust as needed",
    cta: "Start the full CO₂ check",
  },
};

const DEFAULT_KWH = 12000;

export default function HeroCalculator() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const [raw, setRaw] = useState(String(DEFAULT_KWH));
  const [touched, setTouched] = useState(false);

  const kwh = Math.max(0, Number(raw.replace(",", ".")) || 0);
  const kg = kwh * FACTORS.strom;
  const nf = new Intl.NumberFormat(locale === "en" ? "en-GB" : "de-AT", { maximumFractionDigits: kg >= 1000 ? 1 : 0 });
  const value = kg >= 1000 ? `${nf.format(kg / 1000)} ${t.unitT}` : `${nf.format(kg)} ${t.unitKg}`;

  return (
    <div className="w-full max-w-2xl rounded-card border border-border bg-canvas text-left">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-2.5">
        <p className="eyebrow">{t.label}</p>
        {!touched && <p className="text-klein text-ink-tertiary">{t.example}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 sm:divide-x divide-border">
        <div className="px-5 py-4">
          <label htmlFor="hero-kwh" className="block text-marke font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-2">
            {t.input}
          </label>
          <input
            id="hero-kwh"
            type="number"
            inputMode="numeric"
            min={0}
            step={500}
            value={raw}
            onChange={(e) => {
              setRaw(e.target.value);
              if (!touched) {
                setTouched(true);
                trackEvent("hero_calc_used");
              }
            }}
            className="w-full rounded-field border border-border bg-surface px-3 py-2 text-lg font-semibold tabular-nums text-ink focus:outline-none focus:border-brand-600"
          />
        </div>
        <div className="px-5 py-4">
          <p className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-2">{t.result}</p>
          <p aria-live="polite" className="text-3xl font-extrabold tracking-tight text-ink tabular-nums leading-none">
            {value}
          </p>
          <p className="text-klein text-ink-tertiary mt-2">{t.basis}</p>
        </div>
      </div>
      <Link
        href="/tools/co2-rechner"
        onClick={() => trackEvent("cta_click", { id: "hero_calc_full_check", location: "hero" })}
        className="flex items-center justify-between gap-2 border-t border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 hover:bg-brand-50 transition-colors rounded-b-card"
      >
        {t.cta}
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
