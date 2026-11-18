import { Check, Minus } from "lucide-react";

/**
 * Ordnet ESRS, VS und GRI ein und sagt je Standard, ob die Berichts-Software ihn abdeckt.
 * Jede Aussage steht bereits in produkte/nachhaltigkeitsbericht/content.ts (rechtslage, standards,
 * grenzen); hier nur nebeneinandergestellt. Die Software erstellt keinen ESRS-Bericht.
 */

const tx = {
  de: {
    eyebrow: "ESRS, VS oder GRI",
    h2a: "Welcher Standard",
    h2b: "gilt für Sie?",
    intro: "ESRS-Software wird oft als Sammelbegriff verwendet. Entscheidend ist, ob Ihr Unternehmen berichtspflichtig ist. Davon hängt ab, welcher Standard passt und was unsere Software abdeckt.",
    fuer: "Für wen",
    ja: "Von der Software abgedeckt",
    nein: "Nicht abgedeckt",
    spalten: [
      {
        kuerzel: "ESRS",
        name: "Pflichtbericht nach der CSRD",
        fuer: "Unternehmen mit mehr als 1.000 Beschäftigten und mehr als 450 Mio. Euro Nettoumsatz (Omnibus I, Richtlinie (EU) 2026/470).",
        ok: false,
        text: "Einen Bericht nach den ESRS, wie ihn berichtspflichtige Unternehmen brauchen, erstellt die Software nicht.",
      },
      {
        kuerzel: "VS",
        name: "Freiwilliger Standard der EU",
        fuer: "Alle Unternehmen ohne Berichtspflicht, die von Kunden, Banken oder Versicherungen nach Nachhaltigkeitsangaben gefragt werden.",
        ok: true,
        text: "Basismodul oder Basis- und umfassendes Modul nach der Delegierten Verordnung (EU) 2026/1560, mit Freigabe-Prüfung und XBRL-Datensatz.",
      },
      {
        kuerzel: "GRI",
        name: "GRI Universal Standards",
        fuer: "Unternehmen, die in Übereinstimmung mit GRI oder mit Bezug auf GRI berichten wollen.",
        ok: true,
        text: "Bericht mit GRI-Inhaltsindex und Wesentlichkeitsanalyse nach GRI 3, Export als PDF und DOCX.",
      },
    ],
    hinweis: "Stand November 2026. Keine Rechtsberatung.",
  },
  en: {
    eyebrow: "ESRS, VS or GRI",
    h2a: "Which standard",
    h2b: "applies to you?",
    intro: "ESRS software is often used as a catch-all term. What matters is whether your company is subject to reporting. That decides which standard fits and what our software covers.",
    fuer: "Who it is for",
    ja: "Covered by the software",
    nein: "Not covered",
    spalten: [
      {
        kuerzel: "ESRS",
        name: "Mandatory report under the CSRD",
        fuer: "Companies with more than 1,000 employees and a net turnover of more than 450 million euros (Omnibus I, Directive (EU) 2026/470).",
        ok: false,
        text: "The software does not produce a report under the ESRS as required for companies subject to reporting.",
      },
      {
        kuerzel: "VS",
        name: "The EU's Voluntary Standard",
        fuer: "All companies without a reporting obligation that customers, banks or insurers ask for sustainability information.",
        ok: true,
        text: "Basic module, or basic and comprehensive module, under Delegated Regulation (EU) 2026/1560, with release check and XBRL data set.",
      },
      {
        kuerzel: "GRI",
        name: "GRI Universal Standards",
        fuer: "Companies that want to report in accordance with GRI or with reference to GRI.",
        ok: true,
        text: "Report with GRI content index and materiality analysis under GRI 3, export as PDF and DOCX.",
      },
    ],
    hinweis: "As of November 2026. Not legal advice.",
  },
};

export default function StandardWegweiser({ lang = "de", className = "" }: { lang?: "de" | "en"; className?: string }) {
  const t = tx[lang];
  return (
    <section id="standards-wegweiser" className={`py-20 sm:py-24 scroll-mt-24 ${className}`} aria-labelledby="wegweiser-titel">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 id="wegweiser-titel" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
              {t.h2a} <span className="text-brand-600">{t.h2b}</span>
            </h2>
          </div>
          <p className="lg:col-span-6 text-sm text-ink-secondary leading-relaxed">{t.intro}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
          {t.spalten.map((s) => (
            <article key={s.kuerzel} className="flex flex-col bg-canvas p-7">
              <p className={`text-5xl font-extrabold tracking-tight leading-none ${s.ok ? "text-ink" : "text-ink-tertiary"}`}>{s.kuerzel}</p>
              <h3 className="mt-3 text-base font-bold text-ink">{s.name}</h3>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.fuer}</p>
              <p className="mt-1.5 mb-6 flex-1 text-sm text-ink-secondary leading-relaxed">{s.fuer}</p>
              <div className="min-h-[9.5rem] border-t border-border pt-5">
                <p className={`mb-2 inline-flex items-center gap-2 text-sm font-semibold ${s.ok ? "text-brand-700" : "text-ink-secondary"}`}>
                  {s.ok ? <Check className="h-4 w-4" aria-hidden="true" /> : <Minus className="h-4 w-4" aria-hidden="true" />}
                  {s.ok ? t.ja : t.nein}
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-tertiary">{t.hinweis}</p>
      </div>
    </section>
  );
}
