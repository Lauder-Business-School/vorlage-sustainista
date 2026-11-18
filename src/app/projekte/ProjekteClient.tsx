"use client";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BarChart3, Bot, Package, BatteryCharging, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.example.invalid/projekte",
  "name": "Sustainista Projekte & Case Studies",
  "url": "https://www.example.invalid/projekte",
  "isPartOf": { "@id": "https://www.example.invalid/#website" },
};

const tx = {
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Projekte",
    eyebrow: "Case Studies",
    h1a: "Echte Projekte.",
    h1b: "Messbare Ergebnisse.",
    sub: "Von der CO₂-Bilanz über KI-Automatisierung bis zum Digitalen Produktpass, ein Einblick in abgeschlossene und laufende Projekte.",
    stats: [
      { n: "200+", label: "KMU begleitet" },
      { n: "< 6 Wo.", label: "Bis Erstbericht" },
      { n: "4 Lösungen", label: "Spezialisiert & modular" },
      { n: "DACH", label: "Österreich & Deutschland" },
    ],
    labels: { challenge: "Herausforderung", solution: "Lösung", result: "Ergebnis" },
    ctaH2: "Ihr Projekt als nächstes?",
    ctaSub: "Erstes Gespräch kostenlos und unverbindlich. Wir melden uns innerhalb von 24 Stunden.",
    ctaBtn: "Projekt anfragen",
    cases: [
      { category: "ESG Ready", title: "CO₂-Bilanz & ESG-Erstbericht für Metallverarbeitungsbetrieb", client: "KMU, Metallverarbeitung, 45 Mitarbeitende", challenge: "Wachsende Anfragen von Großkunden nach ESG-Nachweisen, kein internes Know-how.", solution: "Vollständige Scope 1-3 CO₂-Bilanz nach GHG Protocol, bankentauglicher ESG-Erstbericht, Lieferantenfragebogen.", result: "Erstbericht in 5 Wochen. Folgeprojekt: automatisierte Datenerfassung.", tags: ["CO₂-Bilanz", "ESG-Bericht", "CSRD-Readiness", "GHG Protocol"] },
      { category: "KI-Automatisierung", title: "Automatische CO₂-Extraktion aus Eingangsrechnungen", client: "Produzent, Kunststoffverarbeitung, 80 Mitarbeitende", challenge: "Monatlich 400+ Eingangsrechnungen, manuelle CO₂-Berechnung war nicht mehr tragbar.", solution: "KI-Modell zur automatischen Extraktion von Energiedaten aus PDFs, Integration in ERP, automatisches monatliches Reporting.", result: "40% Zeitersparnis im Nachhaltigkeitsreporting. Fehlerquote von 18% auf unter 2% gesenkt.", tags: ["KI-Automatisierung", "Rechnungsextraktion", "ERP-Integration", "Reporting"] },
      { category: "Digitaler Produktpass", title: "DPP-Pilotprojekt im Rahmen von PACE-DPP", client: "Forschungspartner, FH St. Pölten", challenge: "Entwicklung einer praxistauglichen DPP-Implementierung nach ESPR-Anforderungen.", solution: "Teilnahme am PACE-DPP Forschungsprojekt, Entwicklung eines Pilotdatensatzes nach IDTA-Standard, Showcase beim Networking Event.", result: "Showcase vor 100+ Gästen aus Industrie und Politik. Grundlage für weitere DPP-Kundenprojekte.", tags: ["Digitaler Produktpass", "PACE-DPP", "EU ESPR", "Forschung"] },
      { category: "Battery Passport", title: "Batteriepass-Lösung für E-Bike-Händler", client: "E-Bike-Handel, 3 Standorte, Wien", challenge: "EU Battery Regulation ab 2027: Ohne Batteriepass keine Vermarktung. Pragmatische Lösung für Bestandsinventar.", solution: "Battery Passport Light: SoH-Dokumentation, QR-Code-Generierung, Kundenkommunikation.", result: "Erhöhter Wiederverkaufswert dokumentierter Produkte. Vorbereitung für regulatorische Pflicht.", tags: ["Battery Passport", "EU Battery Regulation", "E-Bike", "SoH"] },
    ],
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Projects",
    eyebrow: "Case studies",
    h1a: "Real projects.",
    h1b: "Measurable results.",
    sub: "From CO₂ accounting through AI automation to the Digital Product Passport: a look at completed and ongoing projects.",
    stats: [
      { n: "200+", label: "SMEs supported" },
      { n: "< 6 wks", label: "To first report" },
      { n: "4 solutions", label: "Specialised & modular" },
      { n: "DACH", label: "Austria & Germany" },
    ],
    labels: { challenge: "Challenge", solution: "Solution", result: "Result" },
    ctaH2: "Your project next?",
    ctaSub: "First conversation free and non-binding. We respond within 24 hours.",
    ctaBtn: "Request project",
    cases: [
      { category: "ESG Ready", title: "CO₂ balance & first ESG report for metal processing company", client: "SME, metal processing, 45 employees", challenge: "Growing requests from major customers for ESG evidence, no in-house expertise.", solution: "Full Scope 1-3 CO₂ balance per GHG Protocol, bank-grade first ESG report, supplier questionnaire.", result: "First report in 5 weeks. Follow-up project: automated data collection.", tags: ["CO₂ accounting", "ESG report", "CSRD readiness", "GHG Protocol"] },
      { category: "AI Automation", title: "Automatic CO₂ extraction from incoming invoices", client: "Producer, plastics processing, 80 employees", challenge: "400+ incoming invoices per month. Manual CO₂ calculation was no longer feasible.", solution: "AI model for automatic extraction of energy data from PDFs, ERP integration, automatic monthly reporting.", result: "40% time saving in sustainability reporting. Error rate reduced from 18% to under 2%.", tags: ["AI automation", "Invoice extraction", "ERP integration", "Reporting"] },
      { category: "Digital Product Passport", title: "DPP pilot project within PACE-DPP", client: "Research partner, FH St. Pölten", challenge: "Development of a practical DPP implementation meeting ESPR requirements.", solution: "Participation in the PACE-DPP research project, development of a pilot dataset per IDTA standard, showcase at networking event.", result: "Showcase to 100+ guests from industry and politics. Foundation for further DPP customer projects.", tags: ["Digital Product Passport", "PACE-DPP", "EU ESPR", "Research"] },
      { category: "Battery Passport", title: "Battery passport solution for e-bike retailer", client: "E-bike retail, 3 locations, Vienna", challenge: "EU Battery Regulation from 2027: no battery passport means no marketing. Pragmatic solution for existing inventory.", solution: "Battery Passport Light: SoH documentation, QR code generation, customer communication.", result: "Increased resale value for documented products. Preparation for regulatory obligation.", tags: ["Battery Passport", "EU Battery Regulation", "E-bike", "SoH"] },
    ],
  },
};

const caseIcons = [BarChart3, Bot, Package, BatteryCharging];

export default function Projekte({ references }: { references?: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Navigation />
      <main>
        <section className="page-header page-header--netz relative min-h-[50vh] flex items-end pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">{t.breadcrumbHome}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{t.breadcrumbCurrent}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">{t.eyebrow}</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              {t.h1a}<br /><span className="text-brand-600">{t.h1b}</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl">{t.sub}</p>
          </div>
        </section>

        {references}

        <section className="py-10 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {t.stats.map(({ n, label }) => (
                <div key={label}><p className="text-2xl font-black text-brand-600">{n}</p><p className="text-xs text-ink-tertiary mt-1">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="space-y-6">
              {t.cases.map(({ category, title, client, challenge, solution, result, tags }, i) => {
                const Icon = caseIcons[i];
                return (
                  <div key={title} className="border border-border rounded-card p-8 bg-surface hover:shadow-ambient-low transition-all">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Icon className="w-4 h-4 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">{category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-ink mb-2 leading-snug">{title}</h2>
                    <p className="text-xs text-ink-tertiary font-medium mb-6">{client}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div><p className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary mb-2">{t.labels.challenge}</p><p className="text-sm text-ink-secondary leading-relaxed">{challenge}</p></div>
                      <div><p className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary mb-2">{t.labels.solution}</p><p className="text-sm text-ink-secondary leading-relaxed">{solution}</p></div>
                      <div><p className="text-[10px] font-bold uppercase tracking-widest text-brand-600 mb-2">{t.labels.result}</p><p className="text-sm text-ink leading-relaxed font-medium">{result}</p></div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (<span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-canvas text-ink-tertiary font-medium">{tag}</span>))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl font-black text-ink tracking-tight mb-4">{t.ctaH2}</h2>
            <p className="text-sm text-ink-secondary mb-8 max-w-md mx-auto leading-relaxed">{t.ctaSub}</p>
            <Link href="/#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-8 py-3.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors">
              {t.ctaBtn} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
