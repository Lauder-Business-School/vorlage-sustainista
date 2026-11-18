"use client";
import Link from "next/link";
import { ArrowRight, Sprout, Cog, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Unser Angebot",
    h2a: "Drei Schritte.",
    h2b: "Ein klarer Start.",
    sub: "Vom geförderten Einstieg über KI-Automatisierung bis zum vollständigen Kreislaufsystem. Schritt 1 fördern zwei Programme.",
    note: "Hinweis: Alle dargestellten Pakete und Preis-/Förderbeispiele sind illustrative Prototyp-Beispiele für diese Kursvorlage.",
    packages: [
      { badge: "Geförderter Einstieg", title: "Starter Check mit Förderung", desc: "CO₂-Bilanz nach GHG Protocol und ESG-Erstbericht in einem Paket, über ÖkoBusiness Wien oder Ökomanagement NÖ gefördert. In 4 bis 6 Wochen haben Sie prüfbare Zahlen für Banken und Großkunden, kein ESG-Team nötig.", features: ["CO₂-Bilanz nach GHG Protocol (Scope 1–3)", "ESG-Erstbericht nach VSME", "ÖkoBusiness Wien oder Ökomanagement NÖ", "Maßnahmenplan mit Prioritäten"], cta: { label: "Einstieg anfragen", href: "/#kontakt" }, highlight: false },
      { badge: "Folgeprojekt", title: "KI automatisiert Ihre Datenprozesse", desc: "Aufbauend auf dem Erstbericht: KI liest Rechnungen, PDFs und Lieferantenanfragen automatisch: Scope 3 ohne manuellen Aufwand. Der nächste Jahresbericht entsteht ohne neues Projekt.", features: ["Automatische Scope-3-Erfassung per KI", "Lieferantenintegration & Fragebögen", "Kontinuierliche Reporting-Pipeline", "ERP-, SAP- und Buchhaltungsintegration"], cta: { label: "Mehr erfahren", href: "/produkte/ki-automatisierung" }, highlight: true },
      { badge: "Scale-up System", title: "Digitaler Produktpass & Circular Business", desc: "Produktdaten als EU-konformer Digitaler Produktpass und Batteriepass verfügbar machen, Pflicht für Industriebatterien ab 2027. Grundlage für Refurbishment-Nachweise und datenbasierte Kreislaufmodelle.", features: ["Digitaler Produktpass (EU ESPR)", "Battery Passport Light (ab 2027 Pflicht)", "Refurbishment-Nachweise & SoH-Berechnung", "API-Anbindung für Händler & Portale"], cta: { label: "Mehr erfahren", href: "/produkte/digitaler-produktpass" }, highlight: false },
    ],
  },
  en: {
    eyebrow: "Our offering",
    h2a: "Three steps.",
    h2b: "One clear start.",
    sub: "From a subsidised entry through AI automation to a complete circular system. Two programmes fund step 1.",
    note: "Note: All packages and funding examples shown are illustrative prototype examples for this course template.",
    packages: [
      { badge: "Subsidised entry", title: "Funded starter check", desc: "CO₂ accounting per GHG Protocol and a first ESG report in one package, funded via ÖkoBusiness Wien or Ökomanagement NÖ. In 4 to 6 weeks you have auditable figures for banks and major customers, no ESG team needed.", features: ["CO₂ accounting per GHG Protocol (Scope 1–3)", "First ESG report based on VSME", "ÖkoBusiness Wien or Ökomanagement NÖ", "Prioritised action plan"], cta: { label: "Request entry", href: "/#kontakt" }, highlight: false },
      { badge: "Follow-up project", title: "AI automates your data processes", desc: "Building on the first report: AI reads invoices, PDFs and supplier requests automatically: Scope 3 without manual effort. The next annual report is produced without a new project.", features: ["Automatic Scope 3 capture via AI", "Supplier integration & questionnaires", "Continuous reporting pipeline", "ERP, SAP and accounting integration"], cta: { label: "Learn more", href: "/produkte/ki-automatisierung" }, highlight: true },
      { badge: "Scale-up system", title: "Digital Product Passport & Circular Business", desc: "Make product data available as an EU-compliant Digital Product Passport and Battery Passport, mandatory for industrial batteries from 2027. The basis for refurbishment evidence and data-based circular models.", features: ["Digital Product Passport (EU ESPR)", "Battery Passport Light (mandatory from 2027)", "Refurbishment evidence & SoH calculation", "API connection for retailers & portals"], cta: { label: "Learn more", href: "/produkte/digitaler-produktpass" }, highlight: false },
    ],
  },
};

const icons = [Sprout, Cog, Layers];

/** children: der Förderteil, der zu Schritt 1 gehört und im selben Abschnitt steht (siehe HomeClient). */
export default function ServicePackages({ children }: { children?: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section id="pakete" className="py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4 justify-center">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-ink-secondary text-base max-w-md mx-auto leading-relaxed">{t.sub}</p>
          <p className="text-xs text-ink-tertiary mt-3 max-w-lg mx-auto">{t.note}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.packages.map(({ badge, title, desc, features, cta, highlight }, i) => {
            const Icon = icons[i];
            return (
              <div key={badge} className={`rounded-card p-8 border flex flex-col transition-all hover:-translate-y-0.5 ${highlight ? "bg-brand-700 border-brand-600 text-canvas shadow-ambient-medium" : "bg-canvas border-border hover:shadow-ambient-low"}`}>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className={`w-9 h-9 rounded-btn flex items-center justify-center ${highlight ? "bg-brand-600" : "bg-brand-50 border border-border"}`}>
                    <Icon className={`w-4.5 h-4.5 ${highlight ? "text-canvas" : "text-brand-600"}`} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${highlight ? "text-brand-200" : "text-ink-tertiary"}`}>{badge}</span>
                </div>
                <h3 className={`text-lg font-bold leading-snug mb-3 ${highlight ? "text-canvas" : "text-ink"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${highlight ? "text-brand-200" : "text-ink-secondary"}`}>{desc}</p>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${highlight ? "bg-brand-300" : "bg-brand-500"}`} aria-hidden="true" />
                      <span className={highlight ? "text-brand-100" : "text-ink-secondary"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={cta.href} className={`inline-flex items-center justify-center gap-2 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${highlight ? "bg-canvas text-brand-700 hover:bg-brand-50" : "border border-border text-ink-secondary hover:text-ink hover:border-ink-secondary bg-canvas"}`}>
                  {cta.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </section>
  );
}
