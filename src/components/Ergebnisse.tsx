"use client";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Typische Projektergebnisse",
    h2a: "Was KMU",
    h2b: "erreichen.",
    desc: "Repräsentative Ergebnisse aus abgeschlossenen Sustainista-Projekten, anonymisiert.",
    cta: "Mein Projekt besprechen",
    cases: [
      {
        tag: "Metallverarbeitung · 85 MA · AT",
        headline: "€ 48.000 Förderung gesichert",
        results: [
          "aws-Digitalisierungsförderung 55 %, Antrag von Sustainista gestellt",
          "Scope 1–3 vollständig in 5 Wochen",
          "CSRD-Erstbericht für Hauptkunden Großkonzern",
        ],
        badge: "6 Wochen",
        badgeSub: "bis CSRD-ready",
      },
      {
        tag: "Lebensmittelproduktion · 120 MA · AT",
        headline: "0 € Eigenanteil dank Kofinanzierung",
        results: [
          "Ökobusiness Wien Kofinanzierung: Eigenanteil € 1.000",
          "OeKB ESG Data Hub befüllt und zertifiziert",
          "CO₂-Bilanz nach GHG Protocol, Scope 3 Lieferkette vollständig",
        ],
        badge: "€ 0",
        badgeSub: "Eigenanteil nach Förderung",
      },
      {
        tag: "Einzelhandel · 42 MA · DE",
        headline: "Lieferkette für Großkunden gesichert",
        results: [
          "BAFA-geförderte ESG-Beratung (60 %)",
          "Scope-3-Daten an 3 CSRD-pflichtige Großkunden geliefert",
          "Digitaler Produktpass für EU-Produktlinie aufgebaut",
        ],
        badge: "3 Wochen",
        badgeSub: "CO₂-Bilanz fertig",
      },
    ],
  },
  en: {
    eyebrow: "Typical project results",
    h2a: "What SMEs",
    h2b: "achieve.",
    desc: "Representative results from completed Sustainista projects, anonymised.",
    cta: "Discuss my project",
    cases: [
      {
        tag: "Metal processing · 85 employees · AT",
        headline: "€ 48,000 subsidy secured",
        results: [
          "aws digitalisation subsidy 55%, application filed by Sustainista",
          "Scope 1–3 complete in 5 weeks",
          "CSRD first report for major corporate customer",
        ],
        badge: "6 weeks",
        badgeSub: "until CSRD-ready",
      },
      {
        tag: "Food production · 120 employees · AT",
        headline: "€ 0 own contribution via co-financing",
        results: [
          "Ökobusiness Wien co-financing: own contribution € 1,000",
          "OeKB ESG Data Hub filled and certified",
          "CO₂ balance per GHG Protocol, Scope 3 supply chain complete",
        ],
        badge: "€ 0",
        badgeSub: "own contribution after subsidy",
      },
      {
        tag: "Retail · 42 employees · DE",
        headline: "Supply chain secured for major clients",
        results: [
          "BAFA-subsidised ESG consulting (60%)",
          "Scope 3 data delivered to 3 CSRD-obligated major clients",
          "Digital Product Passport built for EU product line",
        ],
        badge: "3 weeks",
        badgeSub: "CO₂ balance complete",
      },
    ],
  },
};

export default function Ergebnisse() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <p className="eyebrow mb-4 justify-center">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-sm text-ink-secondary max-w-xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {t.cases.map((c) => (
            <div key={c.tag} className="rounded-card border border-border bg-surface p-6 flex flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-3">{c.tag}</p>
              <p className="text-xl font-extrabold text-brand-600 mb-4 leading-snug">{c.headline}</p>
              <ul className="space-y-2.5 flex-1 mb-5">
                {c.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-ink-secondary leading-snug">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-border flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-ink tabular-nums">{c.badge}</span>
                <span className="text-xs text-ink-tertiary">{c.badgeSub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-8 py-3.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px"
          >
            {t.cta}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
