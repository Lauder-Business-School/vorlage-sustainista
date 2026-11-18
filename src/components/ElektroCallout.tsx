"use client";
import { Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "sustainista DPP-Plattform",
    title: "Digitaler Batteriepass für Speicher, E-Bikes und Elektrofahrzeuge",
    sub: "Batterieverordnung (EU) 2023/1542 · Pflicht ab 18. Februar 2027 · Beispielpässe ansehen",
    cta: "Zur Plattform",
  },
  en: {
    eyebrow: "sustainista DPP platform",
    title: "Digital battery passport for storage systems, e-bikes and electric vehicles",
    sub: "Batteries Regulation (EU) 2023/1542 · Mandatory from 18 February 2027 · See sample passports",
    cta: "Visit platform",
  },
};

export default function ElektroCallout() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <a href="https://dpp.example.invalid/de/dpp/beispiele" target="_blank" rel="noopener noreferrer"
          className="group block rounded-card border border-border bg-canvas hover:-translate-y-0.5 hover:shadow-ambient-low transition-all duration-150">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-8 py-9 sm:px-12">
            <div className="flex-shrink-0 w-12 h-12 rounded-btn border border-border bg-surface flex items-center justify-center">
              <Zap className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="eyebrow mb-2">{t.eyebrow}</p>
              <p className="text-lg sm:text-xl font-bold text-ink leading-snug mb-1.5">{t.title}</p>
              <p className="text-sm text-ink-secondary">{t.sub}</p>
            </div>
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-brand-600 hover:bg-brand-700 text-canvas text-xs font-semibold uppercase tracking-[0.08em] transition-colors group-hover:shadow-ambient-low">
              {t.cta}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
