import Navigation from "@/components/Navigation";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import type { Metadata } from "next";
import { Zap, Cpu, TrendingDown, Shield } from "lucide-react";
import AutomationPipeline from "@/components/viz/AutomationPipeline";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { CheckCheck as ValueCheckCheck, Timer as ValueTimer, TrendingUp as ValueTrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Automatisierung für ESG- und Produktdaten",
  description:
    "KI-Automatisierung für Nachhaltigkeitsdaten: Live-Dashboards für CO₂ und Betriebsdaten, KI-Assistenten für Microsoft Teams und SharePoint, Prozessautomatisierung ohne Systemwechsel. Für KMU in Österreich.",
  alternates: { canonical: "https://www.example.invalid/produkte/ki-automatisierung" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/ki-automatisierung",
    title: "KI-Automatisierung & Operational Intelligence bei Sustainista",
    description: "Live-Dashboards, KI-Assistenten für Teams/SharePoint, Prozessautomatisierung. Kein Systemwechsel. Für KMU in Österreich.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "KI-Automatisierung für Nachhaltigkeitsdaten bei Sustainista" }],
  },
};

const faqs = [
  {
    q: "Funktioniert das auch mit unserem bestehenden ERP/SAP?",
    a: "Ja. Wir ersetzen keine Systeme, sondern verbinden was bereits vorhanden ist: SAP, Enablon, SharePoint, Teams und Power Automate. In der Regel brauchen wir keinen Systemwechsel und keine neue Software-Lizenz. Wir bauen Brücken zwischen dem, was Sie haben. Der Aufbau dauert typischerweise 2 bis 4 Wochen pro Integration.",
  },
  {
    q: "Was, wenn sich die Daten regelmäßig ändern?",
    a: "Das ist gewünscht und der Kern unseres Ansatzes. Wir bauen keine Einmallösungen, sondern Systeme, die sich automatisch aktualisieren, wenn sich Daten in den Quellsystemen ändern. Neue SOP eingestellt? Der KI-Assistent weiß es am nächsten Tag. Neue Energierechnung? Das Dashboard aktualisiert sich ohne manuellen Eingriff.",
  },
  {
    q: "Wie lange dauert ein KI-Automatisierungsprojekt?",
    a: "Erste live Ergebnisse (ein funktionierendes Dashboard oder ein aktiver KI-Assistent) sind typischerweise in 6 bis 8 Wochen fertig. Komplexe Systeme mit mehreren Datenquellen, Standorten und Automatisierungsebenen dauern 3 bis 4 Monate. Wir liefern in Iterationen: Sie sehen Ergebnisse früh, nicht erst am Projektende.",
  },
  {
    q: "Brauchen wir eigene IT-Ressourcen für den Betrieb?",
    a: "Nein. Nach Übergabe läuft das System selbstständig: kein laufendes IT-Projektteam, keine Systemadministration durch Sie. Wir schulen eine interne Ansprechperson für einfache Anpassungen und stehen für Support zur Verfügung. Größere Änderungen (neue Datenquellen, neue Automatisierungen) liefern wir auf Abruf.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/ki-automatisierung",
      "name": "KI-Automatisierung & Operational Intelligence",
      "description": "KI-Automatisierung für Nachhaltigkeitsdaten: Live-Dashboards für CO₂ und Betriebsdaten, KI-Assistenten für Microsoft Teams und SharePoint, Prozessautomatisierung ohne Systemwechsel.",
      "url": "https://www.example.invalid/produkte/ki-automatisierung",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": "2026-06-20",
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/ki-automatisierung#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/ki-automatisierung#service",
      "name": "KI-Automatisierung & Operational Intelligence",
      "description": "Live-Dashboards für CO₂- und Betriebsdaten, KI-Assistenten für Microsoft Teams und SharePoint, Prozessautomatisierung ohne Systemwechsel. Für KMU in Österreich.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [{ "@type": "Country", "name": "Österreich" }, { "@type": "Country", "name": "Deutschland" }, { "@type": "Country", "name": "Schweiz" }],
      "serviceType": "KI-Automatisierung",
      "url": "https://www.example.invalid/produkte/ki-automatisierung",
    },
    {
      "@id": "https://www.example.invalid/produkte/ki-automatisierung#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        { "@type": "ListItem", "position": 3, "name": "KI-Automatisierung & Operational Intelligence", "item": "https://www.example.invalid/produkte/ki-automatisierung" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

const benefits = [
  { icon: Zap, label: "Keine Prototypen, nur live Systeme" },
  { icon: Cpu, label: "Microsoft-Ökosystem" },
  { icon: TrendingDown, label: "Manuelle Prozesse fallen weg" },
  { icon: Shield, label: "Kein Systemwechsel nötig" },
];

const pillars = [
  {
    num: "01",
    title: "Operational Intelligence",
    lead: "Was früher ein Team an mehreren Tagen pro Monat erledigt hat, läuft heute automatisch.",
    body: [
      "Für ein Pharmaunternehmen mit rund 5.000 Mitarbeitenden haben wir eine Monitoring-Umgebung aufgebaut, die Umweltdaten aus Enablon, interne Betriebsdatenbanken und Verbrauchszahlen aus mehreren Standorten täglich aktuell zusammenführt.",
      "Das Dashboard zeigt CO₂-Emissionen nach Scope, Energieträger, Wasserverbrauch und Abfallmengen, vergleichbar nach Standort und Zeitraum. Auffälligkeiten werden sichtbar, bevor sie zu Problemen werden. Zum ersten Mal konnten Führungskräfte in einem Reporting-Meeting auf echte Zahlen schauen, nicht auf das, was jemand am Vorabend zusammengestellt hatte.",
      "Parallel dazu haben wir für denselben Kunden ein CAPA-Monitoring aufgebaut. Qualitätsereignisse, offene Maßnahmen, Verantwortlichkeiten und Eskalationsmuster sind heute auf einer Oberfläche sichtbar, die keine manuelle Pflege braucht.",
    ],
    tags: ["CO₂ nach Scope 1 bis 3", "Energie & Wasser", "Mehrstandort-Vergleich", "CAPA-Monitoring", "Enablon-Integration"],
  },
  {
    num: "02",
    title: "Intelligente Assistenten",
    lead: "Ein KI-Assistent, der das interne Regelwerk kennt, nicht das Internet.",
    body: [
      "In einem Produktionsbetrieb mit mehreren Standorten und dutzenden Materialien weiß nicht jeder Mitarbeitende, wohin welcher Abfall gehört. Das klingt nach einem kleinen Problem, bis man versteht, was falsch entsorgtes Material in einem regulierten Umfeld bedeutet: Compliance-Risiken, Nacharbeit, Schulungsaufwand.",
      "Wir haben einen internen KI-Assistenten entwickelt, der direkt in Microsoft Teams läuft. Mitarbeitende stellen eine Frage, der Assistent antwortet auf Basis des tatsächlichen internen Regelwerks: Entsorgungskategorie, Handlungsanweisung, gültige SOP. Nicht auf Basis von etwas, das irgendwo im Internet steht.",
      "Das System ist mit SharePoint, strukturierten Datenbanken und dem internen Wissenssystem verbunden. Wenn sich eine SOP ändert, wird das System aktualisiert, der Assistent weiß es am nächsten Tag.",
    ],
    tags: ["Microsoft Teams Integration", "SharePoint & interne Datenbanken", "SOP-gestützte Antworten", "Immer aktuell", "Kein Halluzinieren"],
  },
  {
    num: "03",
    title: "Prozessautomatisierung",
    lead: "Abläufe, die täglich Zeit kosten, ohne dass irgendjemand daran etwas ändern kann.",
    body: [
      "Nicht weil sie unvermeidlich sind, sondern weil niemand den Auftrag hatte, sie zu bauen. Monatliche Reportings, die früher manuell zusammengestellt wurden, laufen heute automatisch. Daten, die zwischen Enablon und internen Systemen von Hand übertragen wurden, synchronisieren sich ohne menschliches Zutun.",
      "Freigabeprozesse, die per E-Mail koordiniert wurden, laufen jetzt strukturiert durch Power Automate, mit Nachverfolgung, Eskalation und Protokoll.",
      "Wir ersetzen dabei keine Systeme. Wir verbinden, was bereits vorhanden ist, und bauen die Brücken, die fehlen. Das Ergebnis ist nicht spektakulär sichtbar. Es zeigt sich darin, dass Mitarbeitende diese Aufgaben einfach nicht mehr machen.",
    ],
    tags: ["Power Automate", "Automatische Reportings", "Datensynchronisation", "Freigabe-Workflows", "E-Mail zu Prozess"],
  },
  {
    num: "04",
    title: "Dienstreisen & Fuhrpark: Scope 3.6 automatisch erfassen",
    lead: "Dienstreisen sind bei Dienstleistungsunternehmen oft der größte Scope-3-Posten. Automatisierte Erfassung statt manueller Auswertung.",
    body: [
      "EY Österreich erfasste im GJ 2024/25 allein 765 tCO₂e aus Dienstreisen (Scope 3, Kategorie 6) und plant eine Reduktion um 50% gegenüber 2019. Diese Zahl musste manuell aus Reisekostenabrechnungen aggregiert werden.",
      "Sustainista verbindet Reisekostensysteme, Kreditkartendaten und Buchungsplattformen automatisch. Jede Reise wird klassifiziert (Bahn, Flug, Mietwagen), mit offiziellen UBA-Emissionsfaktoren berechnet und in Echtzeit in die CO₂-Bilanz eingebucht.",
      "Das Ergebnis: Scope-3.6-Emissionen ohne manuellen Aufwand, nach GHG Protocol und prüffähig. Für österreichische Unternehmen: Pkw-Dienstreisen mit UBA-Faktor 0,195 kg CO₂e/km (österr. Pkw-Durchschnitt), Flüge mit 0,255 kg CO₂e/km (DEFRA, inkl. Klimawirkungsfaktor RFI).",
    ],
    tags: ["Reisekostensystem-Integration", "Automatische Klassifikation", "UBA-Emissionsfaktoren AT", "GHG Protocol & prüffähig", "Echtzeit CO₂-Bilanz"],
  },
];

const differentiators = [
  {
    title: "Keine Prototypen, nur live Systeme",
    body: "Kein Proof-of-Concept, der nach dem Kickoff in der Schublade verschwindet. Jedes System, das wir bauen, läuft von Tag 1 im Tagesbetrieb. Echte Daten, echte Nutzer, echte Ergebnisse, keine Demo-Umgebung.",
  },
  {
    title: "Wissen strukturieren kommt vor Technologie",
    body: "Die größte Fehlerquelle bei KI-Projekten ist nicht die Technologie, sondern unstrukturiertes Wissen. Wir begleiten zuerst den Prozess der Strukturierung (welche Daten, welche Regeln, welche Ausnahmen), bevor wir auch nur eine Zeile Code schreiben.",
  },
  {
    title: "Kein Systemwechsel, keine neuen Lizenzen",
    body: "Wir ersetzen keine vorhandenen Systeme. Wir verbinden Enablon, SAP, SharePoint, Teams und Power Automate so, dass das Ganze mehr leistet als die Summe seiner Teile. Investitionen in bestehende Infrastruktur bleiben erhalten.",
  },
  {
    title: "Erstes Gespräch ohne Verkaufsdruck",
    body: "Kein Pitch, keine Präsentation, kein Angebotsdruck. Wir hören zu, verstehen Ihre konkrete Situation und sagen ehrlich, ob und wie wir helfen können. Wenn wir nicht die richtige Wahl sind, sagen wir das auch.",
  },
];

export default function KiAutomatisierung() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--netz relative min-h-[55vh] flex items-end pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">KI-Automatisierung</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">01 AI Ready</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              KI-Automatisierung &<br />
              <span className="text-brand-600">Operational Intelligence</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-3">
              Daten lagen irgendwo. Prozesse liefen manuell. Niemand hatte den Überblick.
            </p>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-8">
              Wir bauen Systeme, die das ändern, täglich im Einsatz sind.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-surface border border-border rounded-card px-4 py-3">
                  <Icon className="w-4 h-4 text-brand-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-ink leading-snug">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                Erstgespräch vereinbaren
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:stefan.bauer@example.invalid?subject=KI-Automatisierung Anfrage" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                stefan.bauer@example.invalid
              </a>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        {pillars.map((pillar, i) => (
          <section key={pillar.num} className={`py-24 ${i % 2 === 0 ? "bg-surface" : "bg-canvas"}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7">
                  <p className="eyebrow mb-4">{pillar.num}: {pillar.title}</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight mb-6">
                    {pillar.lead}
                  </h2>
                  <div className="space-y-4">
                    {pillar.body.map((para, j) => (
                      <p key={j} className="text-sm text-ink-secondary leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-canvas border border-border rounded-card p-6 shadow-ambient-low">
                    <p className="eyebrow mb-4">Was dabei entsteht</p>
                    <ul className="space-y-3">
                      {pillar.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                          <span className="text-sm text-ink-secondary">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Visualisierung */}
        <section className="py-24 bg-canvas border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">So arbeitet die Pipeline</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Vom Beleg zur Bilanz,<br />
                  <span className="text-ink-tertiary">ohne Abtippen.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Die KI liest Rechnungen, Mails und ERP-Exporte, Prüfregeln fangen Fehler ab, und unsichere Werte gehen an einen Menschen zur Freigabe. Was herauskommt, ist ein Datensatz, der CO₂-Bilanz, VSME-Bericht und Produktpass zugleich füttert.
              </p>
            </div>
            <AutomationPipeline />
          </div>
        </section>

        {/* Was uns unterscheidet */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Unser Ansatz</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Warum es diesmal<br />
              <span className="text-ink-tertiary">einen Unterschied macht.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <h3 className="text-base font-bold text-ink mb-3">{d.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Zeit zurück."
          titleB="Jedes Jahr wieder."
          values={[
              { icon: ValueTimer, title: "Stunden statt Wochen", body: "Der nächste Jahresbericht ist kein Projekt mehr. Daten fließen laufend ein, der Bericht entsteht auf Knopfdruck." },
              { icon: ValueCheckCheck, title: "Weniger Fehler, mehr Vertrauen", body: "Prüfregeln ersetzen Copy-Paste. Unsichere Werte gehen zur Freigabe, statt unbemerkt im Bericht zu landen." },
              { icon: ValueTrendingUp, title: "Wächst ohne neue Stellen", body: "Mehr Kundenanfragen, mehr Standorte, mehr Produkte: Die Pipeline skaliert mit, ohne dass Ihr Team mitwachsen muss." },
          ]}
          testimonial={TESTIMONIALS.ki}
        />

        <ProductTrends product="KI Automation" label="KI-Automatisierung" />

        {/* FAQ */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zur KI-Automatisierung
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="bg-canvas border border-border rounded-card p-10 shadow-ambient-low">
              <p className="eyebrow mb-4">Haben Sie ein ähnliches Problem?</p>
              <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-5">
                Wir schauen uns Ihre Situation an.
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-xl">
                Kein Verkaufsgespräch. Keine Präsentation. Ein erstes Gespräch reicht, um zu verstehen,
                ob und wie wir helfen können, ob es um ein Dashboard, einen Assistenten oder einen
                automatisierten Ablauf geht.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-8 py-4 rounded-btn font-semibold"
                >
                  Gespräch vereinbaren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:stefan.bauer@example.invalid?subject=KI-Automatisierung: Erstgespräch"
                  className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-8 py-4 rounded-btn font-medium bg-canvas transition-all"
                >
                  stefan.bauer@example.invalid
                </a>
              </div>
            </div>
          </div>
        </section>

        <ElektroCallout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
