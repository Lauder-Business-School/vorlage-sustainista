"use client";
import { useLanguage } from "@/i18n/context";

const CALENDLY = "#kontakt";

const tx = {
  de: {
    eyebrow: "Prozess",
    h2a: "Vier Schritte.",
    // \u00AD: Wort ist bei 280px 258px breit, Spalte 240px. sm:hyphens-none am h2 hält den Desktop.
    h2b: "Ein Kreislauf\u00ADsystem.",
    footer: { bold: "4 bis 6 Wochen", rest: " bis zum ersten Bericht, kein monatelanges Consulting-Projekt, kein internes ESG-Team nötig." },
    cta: "Prozess starten: Termin buchen",
    steps: [
      {
        n: "01",
        label: "Verstehen",
        title: "Daten erfassen & strukturieren",
        body: "Wir analysieren, welche Daten bereits vorhanden sind: in Rechnungen, ERP, Buchhaltung und Reisekostensystemen. Das Ergebnis ist ein klares Bild: was fehlt, was nutzbar ist und was bis zum ersten Bericht noch beschafft werden muss.",
        output: "Daten-Audit & Roadmap",
      },
      {
        n: "02",
        label: "Messen",
        title: "CO₂-Bilanz & ESG-Erstbericht",
        body: "Mit UBA AT-Emissionsfaktoren berechnen wir Scope 1, 2 und 3: prüfbar, ESRS-konform und bankentauglich. In 4 bis 6 Wochen liegt ein Bericht vor, den Wirtschaftsprüfer, Banken und Großkunden akzeptieren.",
        output: "ESG-Erstbericht",
      },
      {
        n: "03",
        label: "Automatisieren",
        title: "KI übernimmt Datenprozesse",
        body: "KI liest Eingangsrechnungen, Lieferantenmails und PDFs aus und befüllt die CO₂-Bilanz automatisch. Manuelle Dateneingabe entfällt. Der nächste Jahresbericht entsteht ohne neues Projekt.",
        output: "Datenpipelines",
      },
      {
        n: "04",
        label: "Skalieren",
        title: "Circular Business & Produktpass",
        body: "Produktdaten werden als Digitaler Produktpass und EU-Batteriepass verfügbar, Grundlage für ESPR-Konformität ab 2027 und neue datenbasierte Geschäftsmodelle im Refurbishment.",
        output: "Circular Business",
      },
    ],
  },
  en: {
    eyebrow: "Process",
    h2a: "Four steps.",
    h2b: "One circular system.",
    footer: { bold: "4 to 6 weeks", rest: " to the first report, no months-long consulting project, no in-house ESG team needed." },
    cta: "Start the process: book a call",
    steps: [
      {
        n: "01",
        label: "Understand",
        title: "Capture & structure data",
        body: "We analyse what data already exists: in invoices, ERP systems, accounting and travel expense tools. The result is a clear picture: what is missing, what is usable and what still needs to be gathered before the first report.",
        output: "Data audit & roadmap",
      },
      {
        n: "02",
        label: "Measure",
        title: "CO₂ balance & first ESG report",
        body: "Using Austrian UBA emission factors we calculate Scope 1, 2 and 3: auditable, ESRS-compliant and bank-ready. In 4 to 6 weeks a report is ready that auditors, banks and major customers accept.",
        output: "First ESG report",
      },
      {
        n: "03",
        label: "Automate",
        title: "AI takes over data processes",
        body: "AI reads incoming invoices, supplier emails and PDFs and fills the CO₂ balance automatically. Manual data entry is eliminated. The next annual report is produced without a new project.",
        output: "Data pipelines",
      },
      {
        n: "04",
        label: "Scale",
        title: "Circular business & product passport",
        body: "Product data becomes available as a Digital Product Passport and EU Battery Passport, the basis for ESPR compliance from 2027 and new data-based business models in refurbishment.",
        output: "Circular business",
      },
    ],
  },
};

export default function ValueLadder() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section id="prozess" className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] sm:hyphens-none">
            {t.h2a}<br />
            <span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-card overflow-hidden border border-border">
          {t.steps.map((s, i) => (
            <div
              key={s.n}
              className="bg-canvas p-8 relative group hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-btn bg-brand-50 border border-border mb-6">
                <span className="text-xs font-bold text-brand-600">{s.n}</span>
              </div>

              {i < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-[3.25rem] right-0 translate-x-1/2 z-10" aria-hidden="true">
                  <svg className="w-4 h-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600 mb-2">{s.label}</p>
              <h3 className="text-base font-semibold text-ink leading-snug mb-3">{s.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6">{s.body}</p>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full border border-border bg-surface text-ink-secondary">
                → {s.output}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-canvas border border-border rounded-card py-6 px-8">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-ink-secondary">
              <span className="font-semibold text-ink">{t.footer.bold}</span>{t.footer.rest}
            </p>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
