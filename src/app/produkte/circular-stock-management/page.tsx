import Navigation from "@/components/Navigation";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import CircularStockCheck from "@/components/CircularStockCheck";
import CircularStockShowcase from "@/components/CircularStockShowcase";
import { circularStockSources, circularStockSourcesReviewDate } from "@/data/circular-stock-sources";
import Link from "next/link";
import type { Metadata } from "next";
import StockFlowSankey from "@/components/viz/StockFlowSankey";
import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Boxes,
  Building2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileText,
  Megaphone,
  Recycle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { Coins as ValueCoins, Gavel as ValueGavel, Warehouse as ValueWarehouse } from "lucide-react";

export const metadata: Metadata = {
  title: "Circular Stock: Vernichtungsverbot & ESPR für Mode",
  description:
    "EU-Vernichtungsverbot für Mode ab Juli 2026: Restbestände, Retouren und unverkaufte Textilien strukturiert dokumentieren und in Kreislaufwege überführen. Für Modeunternehmen in Österreich und DACH.",
  alternates: { canonical: "https://www.example.invalid/produkte/circular-stock-management" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Circular Stock Management: EU-Vernichtungsverbot für Mode & Textil",
    description:
      "Sustainista verbindet Bestandsdaten, Kreislaufoptionen und ESPR-Nachweise für Modeunternehmen: Readiness Sprint, Evidence Cockpit, Decision Engine.",
    url: "https://www.example.invalid/produkte/circular-stock-management",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "Circular Stock Management: EU-Vernichtungsverbot für Mode bei Sustainista",
      },
    ],
  },
};

const faqs = [
  {
    q: "Für welche Unternehmen gilt das Vernichtungsverbot?",
    a: "Seit 19. Juli 2026 gilt das Verbot zunächst für große Unternehmen. Mittelgroße Unternehmen fallen ab 19. Juli 2030 darunter. Kleinst- und Kleinunternehmen sind grundsätzlich ausgenommen. Die Einstufung kann aufgrund von Konzern- oder Beteiligungsverhältnissen komplex sein und sollte im Einzelfall geprüft werden.",
  },
  {
    q: "Sind alle Retouren automatisch betroffen?",
    a: "Nein. Entscheidend ist nicht allein die Bezeichnung als Retoure, sondern der weitere Umgang mit dem Produkt. Wird es wieder verkauft, repariert oder zur Wiederverwendung vorbereitet, liegt eine andere Situation vor als bei einer Entsorgung als Abfall.",
  },
  {
    q: "Gilt Recycling als zulässige Alternative zur Vernichtung?",
    a: "Recycling ist für die Kreislaufwirtschaft wichtig, gilt nach der ESPR-Definition jedoch grundsätzlich als Vernichtung. Vorbereitung zur Wiederverwendung, Wiederaufarbeitung und Remanufacturing sind davon zu unterscheiden.",
  },
  {
    q: "Welche Daten müssen für die Offenlegung vorhanden sein?",
    a: "Je nach Anwendungsfall gehören dazu unter anderem Produktkategorie, Beschreibung, Stückzahl, Gewicht, Gründe der Entsorgung, Behandlungswege sowie bereits umgesetzte oder geplante Präventionsmaßnahmen.",
  },
  {
    q: "Ist eine Spende immer ausreichend?",
    a: "Eine Spende kann ein sinnvoller Weg sein. Für bestimmte Ausnahmekonstellationen gelten jedoch konkrete Anforderungen an Angebot, Annahme, Dokumentation und Nachweis. Eine Spende ist daher keine pauschale Ausnahme von allen Anforderungen.",
  },
  {
    q: "Müssen wir sofort eine neue Software einführen?",
    a: "Nein. Der sinnvollste Einstieg ist meist eine begrenzte Prozess- und Datenanalyse. Erst danach wird entschieden, welche Funktionen digital unterstützt und welche bestehenden Systeme angebunden werden sollen.",
  },
  {
    q: "Kann Sustainista unser ERP oder WMS anbinden?",
    a: "Eine Anbindung kann im Rahmen eines Piloten geprüft und umgesetzt werden. Der Umfang hängt von System, Datenqualität, Schnittstellen und gewünschtem Prozess ab. Sustainista verspricht keine standardmäßige Plug-and-play-Anbindung an jedes System.",
  },
  {
    q: "Ersetzt Sustainista eine Rechtsberatung?",
    a: "Nein. Sustainista unterstützt bei Prozessgestaltung, Datenstruktur, Dokumentation und Umsetzung. Formelle rechtliche Bewertungen sollten bei Bedarf mit einer entsprechend qualifizierten Rechtsberatung abgestimmt werden.",
  },
  {
    q: "Übernimmt Sustainista auch Lagerung, Transport oder Recycling?",
    a: "Sustainista konzentriert sich auf Prozesse, Daten, Nachweise und Entscheidungsunterstützung. Physische Leistungen werden bei Bedarf durch geeignete externe Partner erbracht.",
  },
  {
    q: "Was ist der beste erste Schritt?",
    a: "Wählen Sie eine Produktgruppe, einen Lagerstandort oder einen Retourenprozess. Im Circular-Stock-Check klären wir, welche Daten, Entscheidungen und Nachweise dafür relevant sind.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/circular-stock-management",
      name: "Circular Stock Management für Mode",
      description:
        "Restbestände, Retouren und unverkaufte Mode strukturiert entscheiden, dokumentieren und in wirtschaftlich sinnvolle Kreislaufwege überführen.",
      url: "https://www.example.invalid/produkte/circular-stock-management",
      isPartOf: { "@id": "https://www.example.invalid/produkte" },
      lastReviewed: "2026-07-19",
      inLanguage: "de",
      breadcrumb: { "@id": "https://www.example.invalid/produkte/circular-stock-management#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/circular-stock-management#service",
      name: "Circular Stock Management für Modeunternehmen",
      description:
        "Sustainista verbindet Bestandsdaten, Kreislaufoptionen und Nachweise: Readiness Sprint, Evidence Cockpit und Decision Engine für unverkaufte Ware unter der ESPR.",
      provider: { "@id": "https://www.example.invalid/#organization" },
      areaServed: [
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Schweiz" },
      ],
      serviceType: "Circular Stock Management",
      url: "https://www.example.invalid/produkte/circular-stock-management",
    },
    {
      "@id": "https://www.example.invalid/produkte/circular-stock-management#breadcrumb",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.example.invalid" },
        { "@type": "ListItem", position: 2, name: "Produkte", item: "https://www.example.invalid/produkte" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Circular Stock Management",
          item: "https://www.example.invalid/produkte/circular-stock-management",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/**
 * Statisches, vertrauenswürdiges JSON-LD; <, > und & werden als
 * Unicode-Escapes serialisiert, damit der Script-Inhalt sicher ist.
 */
const schemaOrgJson = JSON.stringify(schemaOrg)
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e")
  .replace(/&/g, "\\u0026");

function Ref({ ids }: { ids: number[] }) {
  return (
    <sup className="ml-0.5 text-[0.7em]">
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 && " "}
          <a href="#quellen" className="text-brand-600 hover:text-brand-700 font-semibold no-underline">
            [{id}]
          </a>
        </span>
      ))}
    </sup>
  );
}

const factCards = [
  {
    icon: ShieldCheck,
    title: "Vernichtung ist für bestimmte Produkte untersagt",
    refs: [1],
    body: "Das Verbot gilt seit 19. Juli 2026 für große Unternehmen, vereinfacht: mehr als 250 Beschäftigte oder über 50 Mio. € Umsatz und 43 Mio. € Bilanzsumme (EU-KMU-Definition). Mittelgroße Unternehmen fallen ab 19. Juli 2030 darunter, Kleinst- und Kleinunternehmen sind grundsätzlich ausgenommen.",
  },
  {
    icon: Recycle,
    title: "Recycling zählt grundsätzlich als Vernichtung",
    refs: [1],
    body: "Vorbereitung zur Wiederverwendung, Wiederaufarbeitung und Remanufacturing sind davon zu unterscheiden. Recycling ist damit nicht automatisch der erste Kreislaufweg.",
  },
  {
    icon: Database,
    title: "Offenlegung benötigt strukturierte Daten",
    refs: [3],
    body: "Dazu gehören unter anderem Produktkategorie, Menge, Gewicht, Gründe und Behandlungswege, ab 2. März 2027 in einem standardisierten Format.",
  },
  {
    icon: FileText,
    title: "Ausnahmen benötigen belastbare Nachweise",
    refs: [2],
    body: "Ausnahmen (etwa aus Gesundheits-, Sicherheits- oder Produkthaftungsgründen) sind an konkrete Bedingungen geknüpft. Dokumente sind grundsätzlich 5 Jahre aufzubewahren und Behörden auf Anfrage zeitnah bereitzustellen.",
  },
];

const buyingCenter = [
  {
    icon: Banknote,
    title: "Geschäftsführung und Finance",
    body: "Welcher Weg erhält den größten Restwert? Welche Lager-, Bearbeitungs- und Abschreibungskosten entstehen?",
  },
  {
    icon: Scale,
    title: "Nachhaltigkeit und Compliance",
    body: "Sind Gründe, Freigaben und Nachweise vollständig und später nachvollziehbar?",
  },
  {
    icon: Boxes,
    title: "Operations und Retourenmanagement",
    body: "Welche Ware geht wann an welchen Partner und welcher Beleg muss zurückkommen?",
  },
  {
    icon: Megaphone,
    title: "Vertrieb und Brand Management",
    body: "Welche Optionen schützen Wert, Markenpositionierung und bestehende Absatzkanäle?",
  },
  {
    icon: Database,
    title: "IT und Datenmanagement",
    body: "Welche Informationen bestehen bereits und wie lassen sie sich ohne vollständige Systemablösung verbinden?",
  },
];

const sprintScope = [
  {
    title: "Warenstrom- und Prozessanalyse",
    body: "Wir erfassen Entstehungsgründe, Mengen, Standorte, Zuständigkeiten und heutige Behandlungswege.",
  },
  {
    title: "Daten- und Systemlandkarte",
    body: "Wir prüfen, welche Informationen in ERP, WMS, PIM, Excel, E-Mails oder Partnerdokumenten vorliegen.",
  },
  {
    title: "Circular-Stock-Hierarchie",
    body: "Wir definieren, in welcher Reihenfolge Weiterverkauf, Umlagerung, Reparatur, Resale, Spende, Remanufacturing und weitere Wege geprüft werden.",
  },
  {
    title: "Entscheidungs- und Freigabemodell",
    body: "Wir klären, wer prüft, entscheidet, freigibt und dokumentiert.",
  },
  {
    title: "Evidence Matrix",
    body: "Wir definieren, welche Gründe, Dokumente, Fotos, Bestätigungen und Übergaben für welchen Fall benötigt werden.",
  },
  {
    title: "Pilot-Roadmap",
    body: "Wir priorisieren kurzfristige Prozessverbesserungen, technische Anforderungen und mögliche Pilotfälle.",
  },
];

const sprintDeliverables = [
  "Ist-Prozess und Warenstromübersicht",
  "Daten- und Systemlandkarte",
  "Circular-Stock-Entscheidungshierarchie",
  "Rollen- und Verantwortlichkeitsmatrix",
  "Evidence Matrix",
  "Standardisierte Fall- und Behandlungsgründe",
  "Priorisierter Pilot-Backlog",
  "Management-Präsentation",
  "Anforderungen für ein mögliches Cockpit",
];

const cockpitFeatures = [
  { title: "Bestandsimport", body: "Übernahme ausgewählter Daten aus ERP, WMS, PIM oder strukturierten Dateien." },
  { title: "Fallklassifikation", body: "Erfassung von Produkt, SKU, Charge, Menge, Gewicht, Lagerort, Zustand und Entstehungsgrund." },
  { title: "Optionsprüfung", body: "Dokumentation der geprüften Kreislaufwege und der Gründe für deren Eignung oder Nichteignung." },
  { title: "Freigabeworkflow", body: "Rollenbasierte Prüfung und dokumentierte Freigabe." },
  { title: "Evidence Repository", body: "Ablage von Fotos, Prüfberichten, Partnerbestätigungen, Annahmen, Ablehnungen und Übergaben." },
  { title: "Audit Trail", body: "Nachvollziehbare Historie von Änderungen, Entscheidungen und Statuswechseln." },
  { title: "Reporting und Export", body: "Strukturierte Datenexporte für interne Auswertung und relevante Offenlegungsanforderungen." },
  { title: "DPP- und EPR-Anschlussfähigkeit", body: "Produkt- und Kreislaufdaten werden so strukturiert, dass sie für spätere Anwendungen wiederverwendbar sind." },
];

const cockpitPilotScope = [
  "Eine Produktgruppe oder ein Lager",
  "Eine primäre Datenquelle",
  "Zwei bis vier interne Rollen",
  "Ausgewählte Behandlungswege",
  "Begrenzte Zahl externer Partner",
  "Ein definierter Reporting-Export",
  "Klare Erfolgskriterien",
];

const engineDimensions = [
  {
    title: "Wirtschaftlichkeit",
    points: ["Erwartbarer Restwert", "Bearbeitungskosten", "Transportkosten", "Lagerkosten", "Mögliche Erlöse", "Abschreibungsrisiko"],
  },
  {
    title: "Operative Umsetzbarkeit",
    points: ["Partnerkapazität", "Mindestmengen", "Durchlaufzeit", "Geografische Verfügbarkeit", "Produktzustand", "Erforderliche Bearbeitung"],
  },
  {
    title: "Nachweis- und Compliancefähigkeit",
    points: ["Erforderliche Begründung", "Notwendige Freigaben", "Partnernachweise", "Dokumentierbarkeit", "Aufbewahrungsanforderungen"],
  },
  {
    title: "Kreislaufwirkung",
    points: ["Produkterhalt", "Nutzungsdauer", "Reparierbarkeit", "Wiederverwendung von Komponenten", "Materialerhalt"],
  },
  {
    title: "Marken- und Vertriebseffekt",
    points: ["Preispositionierung", "Marktkanal", "Graumarktrisiko", "Markenschutz", "Kundenerwartung"],
  },
];

const engineSteps = [
  "Bestandsdaten erfassen",
  "Mögliche Wege bestimmen",
  "Ausschlusskriterien prüfen",
  "Kriterien transparent gewichten",
  "Szenarien vergleichen",
  "Empfehlung mit Begründung ausgeben",
  "Verantwortliche Person entscheidet",
  "Tatsächliches Ergebnis zurückspielen",
];

const enginePartnerProgram = [
  "Gemeinsame Definition der Entscheidungskriterien",
  "Analyse historischer Bestandsfälle",
  "Prototyp mit einem Produktsegment",
  "Vergleich von zwei bis vier realistischen Kreislaufwegen",
  "Gemeinsame Bewertung der Ergebnisqualität",
  "Definition einer möglichen Skalierung",
];

const comparisonRows: { label: string; sprint: string; cockpit: string; engine: string }[] = [
  {
    label: "Geeignet, wenn",
    sprint: "Prozesse, Zuständigkeiten und Nachweise noch nicht einheitlich strukturiert sind.",
    cockpit: "Prozesse grundsätzlich definiert sind, Daten und Dokumente aber in mehreren Systemen liegen.",
    engine: "Regelmäßig größere Mengen und mehrere wirtschaftlich realistische Kreislaufwege bewertet werden müssen.",
  },
  {
    label: "Zentrales Ergebnis",
    sprint: "Betriebsmodell und Pilot-Roadmap",
    cockpit: "Digitale Nachweiskette",
    engine: "Transparentes Bewertungs- und Empfehlungsmodell",
  },
  {
    label: "Reifegrad",
    sprint: "Jetzt verfügbar",
    cockpit: "Pilot",
    engine: "Design-Partner-Programm",
  },
  {
    label: "Typischer Umfang",
    sprint: "4 bis 6 Wochen",
    cockpit: "Nach Daten- und Schnittstellenumfang",
    engine: "Nach Anwendungsfall und Datenverfügbarkeit",
  },
  {
    label: "Technische Tiefe",
    sprint: "Prozess- und Datenkonzept",
    cockpit: "Workflow, Datenmodell und ausgewählte Anbindung",
    engine: "Bewertungsmodell und Entscheidungslogik",
  },
];

const pilotKpis = [
  "Zeit von der Bestandserkennung bis zur freigegebenen Entscheidung",
  "Anteil der Fälle mit vollständiger Nachweiskette",
  "Anteil der Fälle mit dokumentierter Prüfung höherwertiger Kreislaufwege",
  "Erhaltener oder wiedergewonnener Produktwert",
  "Bearbeitungs- und Behandlungskosten",
  "Lagerdauer betroffener Bestände",
  "Anzahl manueller Übergaben",
  "Datenvollständigkeit",
  "Nachweisqualität externer Partner",
  "Abweichung zwischen Empfehlung und tatsächlichem Ergebnis",
];

const pathSteps = [
  {
    n: "01",
    title: "Circular-Stock-Check",
    body: "Wir besprechen einen realen Bestandsfall, die beteiligten Funktionen und die aktuelle Datenlage.",
    result: "Erste Einschätzung des sinnvollsten Einstiegs",
  },
  {
    n: "02",
    title: "Scope festlegen",
    body: "Wir wählen eine Produktgruppe, einen Standort oder einen Retourenprozess und definieren die relevanten Fragen.",
    result: "Klar abgegrenzter Projektumfang",
  },
  {
    n: "03",
    title: "Readiness Sprint",
    body: "Wir strukturieren Prozess, Rollen, Daten, Entscheidungswege und Nachweise.",
    result: "Betriebsmodell und Pilot-Roadmap",
  },
  {
    n: "04",
    title: "Digitaler Pilot",
    body: "Wo sinnvoll, setzen wir einen begrenzten Workflow oder ein Entscheidungsmodell technisch um.",
    result: "Validierte Grundlage für die Skalierung",
  },
];

const competencies = [
  {
    icon: Recycle,
    title: "Circular Economy und Produktdaten",
    body: "Verständnis für Kreislaufwege, Produktinformationen und Digitalen Produktpass.",
  },
  {
    icon: Building2,
    title: "ESG und Transformation",
    body: "Einbindung von Verantwortlichkeiten, Governance und internen Veränderungsprozessen.",
  },
  {
    icon: Database,
    title: "Daten und Automatisierung",
    body: "Strukturierung bestehender Datenquellen und Entwicklung pragmatischer digitaler Workflows.",
  },
  {
    icon: BadgeCheck,
    title: "Anbieterneutrale Umsetzung",
    body: "Bewertung unterschiedlicher Wege ohne Bindung an einen eigenen Resale-, Spenden- oder Recyclingkanal.",
  },
];

const team = [
  { name: "Hubert Forster", initials: "HF", focus: "Circular Economy und Digitaler Produktpass" },
  { name: "Silke Herrnreiter", initials: "SH", focus: "ESG, Transformation und nachhaltige Geschäftsprozesse" },
  { name: "Dr. Stefan Bauer", initials: "SB", focus: "Daten, Automatisierung und Geschäftsmodellentwicklung" },
];

const heroTrust = [
  "Start mit einem Warenstrom",
  "Anschlussfähig an ERP und Warenwirtschaft",
  "Persönliche Begleitung",
  "Anbieterneutral konzipiert",
];

const heroStatus = [
  { label: "Readiness Sprint", value: "jetzt verfügbar" },
  { label: "Evidence Cockpit", value: "Pilot" },
  { label: "Decision Engine", value: "Design-Partner-Programm" },
];

export default function CircularStockManagement() {
  return (
    <>
      <script type="application/ld+json">{schemaOrgJson}</script>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--kreislauf relative pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">Circular Stock Management</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="eyebrow mb-8 block">ESPR · Circular Stock für Modeunternehmen</span>
                <h1 className="font-black tracking-tight leading-[1.02] mb-6 text-ink" style={{ fontSize: "clamp(2.25rem,5vw,3.75rem)" }}>
                  Circular Stock Management: unverkaufte Ware braucht einen{" "}
                  <span className="text-brand-600">belegbaren nächsten Weg.</span>
                </h1>
                <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-6">
                  Sustainista verbindet Bestandsdaten, Kreislaufoptionen und Nachweise. So können
                  Modeunternehmen schneller entscheiden, Produktwert gezielt erhalten und ihre Prozesse
                  auf die Anforderungen der ESPR ausrichten.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed bg-surface border border-border rounded-card px-4 py-3 mb-8 max-w-2xl">
                  Für große Unternehmen gilt das EU-Vernichtungsverbot für unverkaufte Kleidung,
                  Bekleidungsaccessoires und Schuhe seit 19. Juli 2026. Recycling zählt im ESPR
                  grundsätzlich als Vernichtung.<Ref ids={[1, 2]} />
                </p>
                <div className="flex flex-wrap gap-3 mb-3">
                  <a href="#readiness-check" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                    Betroffenheit in 2 Minuten prüfen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#kontakt" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                    Circular-Stock-Check buchen
                  </a>
                </div>
                <p className="text-xs text-ink-tertiary mb-4">Check: kostenlos, ohne Anmeldung · Termin: 30 Minuten, unverbindlich, ein konkreter Warenstrom im Fokus</p>
                <Link href="/magazin/eu-vernichtungsverbot-unverkaufte-mode" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                  Was die EU-Regeln konkret verlangen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Statusleiste */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 mb-6">
                  {heroStatus.map((s) => (
                    <div key={s.label} className="bg-surface border border-border rounded-card px-4 py-3">
                      <p className="text-xs font-bold text-ink">{s.label}</p>
                      <p className="text-[11px] text-brand-600 font-semibold mt-0.5">{s.value}</p>
                    </div>
                  ))}
                </div>
                {/* Vertrauensleiste */}
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {heroTrust.map((t) => (
                    <li key={t} className="flex items-center gap-1.5 text-xs text-ink-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hero-Datenmodul (HTML/CSS) */}
              <div className="bg-white border border-border rounded-card p-7 shadow-ambient-low lg:mt-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="eyebrow mb-1">Circular Stock</p>
                    <p className="text-base font-bold text-ink">Bestandsfall TJ-4820-M</p>
                    <p className="text-xs text-ink-tertiary font-mono mt-0.5">Illustrative Ansicht</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-btn px-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                    <span className="text-[11px] font-bold text-brand-700">In Prüfung</span>
                  </div>
                </div>
                <div className="border border-border rounded-card overflow-hidden mb-5">
                  {[
                    { k: "SKU", v: "TJ-4820-M" },
                    { k: "Bestand", v: "3.200 Stück" },
                    { k: "Status", v: "Saisonende / unverkauft" },
                    { k: "Geprüfte Optionen", v: "5 von 7" },
                    { k: "Nachweisstatus", v: "2 Belege offen" },
                  ].map((row, i) => (
                    <div key={row.k} className={`flex justify-between items-center px-4 py-3 ${i > 0 ? "border-t border-border" : ""}`}>
                      <span className="text-xs text-ink-tertiary">{row.k}</span>
                      <span className="text-xs font-semibold text-ink-secondary">{row.v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 bg-surface rounded-card p-4 border border-border">
                  <ClipboardCheck className="w-5 h-5 text-brand-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-ink">Nächster Schritt: Freigabe dokumentieren</p>
                    <p className="text-[11px] text-ink-tertiary">Verantwortliche Rolle und Nachweise sind je Fall hinterlegt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatorik */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Was sich geändert hat</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Aus Entsorgung wird eine<br />
              <span className="text-ink-tertiary">dokumentierte Bestandsentscheidung.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-12">
              Bei unverkaufter Ware reicht es künftig nicht, nur den letzten Behandlungsschritt zu
              kennen. Betroffene Unternehmen müssen nachvollziehen können, welche Produkte betroffen
              sind, warum ein bestimmter Weg gewählt wurde und welche Nachweise dazu vorliegen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {factCards.map(({ icon: Icon, title, body, refs }) => (
                <div key={title} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <Icon className="w-6 h-6 text-brand-600 mb-4" aria-hidden="true" />
                  <h3 className="text-base font-bold text-ink mb-3">{title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {body}
                    <Ref ids={refs} />
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 bg-brand-50 border border-brand-200 rounded-card p-5 mb-4">
              <AlertTriangle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink">Wichtig:</strong> Nicht jede unverkaufte Ware ist
                automatisch offenzulegen. Entscheidend sind unter anderem Produktstatus,
                Unternehmensgröße und der konkrete weitere Behandlungsweg.
              </p>
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed mb-8">
              Die Informationen auf dieser Seite dienen der allgemeinen Orientierung und ersetzen
              keine individuelle Rechtsberatung.
            </p>
            <a href="#readiness-check" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Betroffenheit und Datenlage prüfen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Readiness-Check */}
        <section id="readiness-check" className="py-24 bg-canvas scroll-mt-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Erste Orientierung</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Wie gut ist Ihr Unternehmen vorbereitet?
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-10">
              Sechs kurze Fragen zeigen, wo Prozess-, Daten- oder Nachweislücken liegen könnten. Das
              Ergebnis ist eine erste Orientierung und keine rechtliche Einstufung.
            </p>
            <CircularStockCheck />
          </div>
        </section>

        {/* Buying Center */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Ein Thema für mehrere Funktionen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              Das Problem sitzt selten nur<br />
              <span className="text-ink-tertiary">im Nachhaltigkeitsteam.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {buyingCenter.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <Icon className="w-6 h-6 text-brand-600 mb-4" aria-hidden="true" />
                  <h3 className="text-base font-bold text-ink mb-3">{title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
              Circular Stock funktioniert nur, wenn diese Perspektiven in einem gemeinsamen
              Entscheidungsprozess zusammengeführt werden.
            </p>
          </div>
        </section>

        {/* Produktfamilie */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Drei Module. Ein sinnvoller Einstieg.</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Strukturieren. Nachweisen. Optimieren.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-12">
              Die meisten Unternehmen beginnen mit dem Circular Stock Readiness Sprint. Daraus
              entsteht ein klares Zielbild für Prozesse, Daten und Verantwortlichkeiten. Erst
              anschließend wird entschieden, ob ein digitaler Pilot oder eine weiterführende
              Entscheidungslogik sinnvoll ist.
            </p>
            <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                { n: "01", title: "Readiness Sprint", sub: "Strukturieren", badge: "Jetzt verfügbar", href: "#readiness-sprint" },
                { n: "02", title: "Evidence Cockpit", sub: "Nachweisen", badge: "Bezahlter Pilot", href: "#evidence-cockpit" },
                { n: "03", title: "Decision Engine", sub: "Optimieren", badge: "Design-Partner-Programm", href: "#decision-engine" },
              ].map((m) => (
                <li key={m.n}>
                  <a href={m.href} className="block bg-white border border-border rounded-card p-6 shadow-ambient-low hover:border-brand-300 transition-colors h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-brand-500">{m.n}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide bg-brand-50 border border-brand-200 text-brand-700 rounded-full px-2.5 py-1">{m.badge}</span>
                    </div>
                    <p className="text-xs text-ink-tertiary mb-1">{m.sub}</p>
                    <p className="text-base font-bold text-ink">Circular Stock {m.title}</p>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Modul 1: Readiness Sprint */}
        <section id="readiness-sprint" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p className="eyebrow">01 · Strukturieren</p>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-brand-600 text-white rounded-full px-2.5 py-1">Jetzt verfügbar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-3">
              Circular Stock Readiness Sprint
            </h2>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed mb-6 max-w-3xl">
              In 4 bis 6 Wochen von verstreuten Einzelentscheidungen zu einem gemeinsamen Betriebsmodell.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-6">
              Wir analysieren einen konkreten Warenstrom, die vorhandenen Daten, bestehende
              Entscheidungswege und relevante Partner. Daraus entsteht ein umsetzbarer
              Circular-Stock-Prozess mit klaren Rollen, Nachweisen und Prioritäten.
            </p>
            <blockquote className="border-l-4 border-brand-600 pl-5 mb-6 max-w-3xl">
              <p className="text-base font-semibold text-ink leading-relaxed">
                Kernfrage: &bdquo;Wie muss unser Unternehmen künftig über unverkaufte Ware entscheiden
                und diese Entscheidungen dokumentieren?&ldquo;
              </p>
            </blockquote>
            <p className="text-sm text-ink-secondary mb-10">
              <strong className="text-ink">Typischer Startpunkt:</strong> eine Produktgruppe, ein
              Lagerstandort, ein Retourenprozess oder ein konkreter Bestandsfall.
            </p>

            <h3 className="text-lg font-bold text-ink mb-5">Leistungsumfang</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {sprintScope.map((s) => (
                <div key={s.title} className="bg-canvas border border-border rounded-card p-6 shadow-ambient-low">
                  <h4 className="text-sm font-bold text-ink mb-2">{s.title}</h4>
                  <p className="text-sm text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-bold text-ink mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {sprintDeliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-4">Ihr Aufwand</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  Ein Kick-off, vier bis sechs Fachinterviews, Bereitstellung eines begrenzten
                  Beispieldatensatzes, ein gemeinsamer Design-Workshop und ein
                  Management-Abschlussgespräch.
                </p>
                <div className="bg-brand-50 border border-brand-200 rounded-card p-5">
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    <strong className="text-ink">Ergebnis:</strong> Sie erhalten kein abstraktes
                    Konzept, sondern ein dokumentiertes Betriebsmodell für einen konkreten Warenstrom.
                  </p>
                </div>
              </div>
            </div>

            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Sprint für einen Warenstrom anfragen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs text-ink-tertiary mt-3">Fest umrissener Scope · Angebot nach kurzem Vorgespräch</p>
          </div>
        </section>

        {/* Modul 2: Evidence Cockpit */}
        <section id="evidence-cockpit" className="py-24 bg-canvas scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p className="eyebrow">02 · Nachweisen</p>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-brand-50 border border-brand-200 text-brand-700 rounded-full px-2.5 py-1">Bezahlter Pilot</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-3">
              Circular Stock Evidence Cockpit
            </h2>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed mb-6 max-w-3xl">
              Ein Vorgang, eine Nachweiskette, ein verlässlicher Datenstand.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-6">
              Das Evidence Cockpit verbindet Produkt- und Bestandsdaten mit geprüften Optionen,
              Freigaben und externen Nachweisen. Es ersetzt nicht automatisch bestehende Systeme,
              sondern schließt die Lücke zwischen Warenwirtschaft, operativer Entscheidung und
              Dokumentation.
            </p>
            <blockquote className="border-l-4 border-brand-600 pl-5 mb-10 max-w-3xl">
              <p className="text-base font-semibold text-ink leading-relaxed">
                Kernfrage: &bdquo;Können wir für einen Bestand später nachvollziehen, was geprüft,
                entschieden und tatsächlich umgesetzt wurde?&ldquo;
              </p>
            </blockquote>

            <h3 className="text-lg font-bold text-ink mb-5">Pilotfunktionen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {cockpitFeatures.map((f) => (
                <div key={f.title} className="bg-white border border-border rounded-card p-6 shadow-ambient-low">
                  <h4 className="text-sm font-bold text-ink mb-2">{f.title}</h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-bold text-ink mb-4">Empfohlener Pilotumfang</h3>
                <ul className="space-y-2">
                  {cockpitPilotScope.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-card p-5 self-start">
                <p className="text-sm text-ink-secondary leading-relaxed">
                  <strong className="text-ink">Ergebnis:</strong> Der Pilot zeigt, welche Daten,
                  Workflows und Schnittstellen für eine belastbare Nachweiskette tatsächlich benötigt
                  werden.
                </p>
              </div>
            </div>

            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Pilotfähigkeit prüfen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs text-ink-tertiary mt-3">Individuell konfiguriert · Start mit begrenztem Daten- und Prozessumfang</p>
          </div>
        </section>

        {/* Modul 3: Decision Engine */}
        <section id="decision-engine" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p className="eyebrow">03 · Optimieren</p>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-brand-50 border border-brand-200 text-brand-700 rounded-full px-2.5 py-1">Design-Partner-Programm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-3">
              Circular Stock Decision Engine
            </h2>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed mb-6 max-w-3xl">
              Kreislaufwege vergleichen, bevor Produktwert verloren geht.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-6">
              Die Decision Engine soll mögliche Wege anhand wirtschaftlicher, operativer,
              regulatorischer und zirkulärer Kriterien vergleichbar machen. Die erste Ausbaustufe
              arbeitet als transparente, regelbasierte und datenunterstützte Decision Engine. Eine
              Entscheidung bleibt nachvollziehbar und wird von verantwortlichen Personen freigegeben.
            </p>
            <blockquote className="border-l-4 border-brand-600 pl-5 mb-10 max-w-3xl">
              <p className="text-base font-semibold text-ink leading-relaxed">
                Kernfrage: &bdquo;Welcher Kreislaufweg ist für diesen konkreten Bestand unter den
                gegebenen Bedingungen am sinnvollsten?&ldquo;
              </p>
            </blockquote>

            <h3 className="text-lg font-bold text-ink mb-5">Fünf Bewertungsdimensionen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {engineDimensions.map((d) => (
                <div key={d.title} className="bg-canvas border border-border rounded-card p-5 shadow-ambient-low">
                  <h4 className="text-sm font-bold text-ink mb-3">{d.title}</h4>
                  <ul className="space-y-1.5">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-ink-secondary">
                        <span className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-ink mb-5">Funktionsprinzip</h3>
            <ol className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {engineSteps.map((s, i) => (
                <li key={s} className="bg-canvas border border-border rounded-card p-4">
                  <span className="text-lg font-black text-brand-600 block mb-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-semibold text-ink leading-snug">{s}</span>
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-bold text-ink mb-4">Das Design-Partner-Programm umfasst</h3>
                <ul className="space-y-2">
                  {enginePartnerProgram.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-card p-5 self-start">
                <p className="text-sm text-ink-secondary leading-relaxed">
                  <strong className="text-ink">Ergebnis:</strong> Das Design-Partner-Programm
                  übersetzt reale Bestandsentscheidungen in ein transparentes und später skalierbares
                  Entscheidungsmodell.
                </p>
              </div>
            </div>

            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Design-Partner-Gespräch buchen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs text-ink-tertiary mt-3">
              Für Unternehmen mit wiederkehrenden Mengen und mehreren realistischen Verwertungswegen
            </p>
          </div>
        </section>

        {/* Vergleichstabelle */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              Welcher Einstieg passt<br />
              <span className="text-ink-tertiary">zu Ihrer Ausgangslage?</span>
            </h2>
            <div className="overflow-x-auto border border-border rounded-card bg-white shadow-ambient-low">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th scope="col" className="px-5 py-4 text-xs font-bold text-ink-tertiary uppercase tracking-wide"><span className="sr-only">Kriterium</span></th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold text-ink">Readiness Sprint</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold text-ink">Evidence Cockpit</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold text-ink">Decision Engine</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i > 0 ? "border-t border-border" : ""}>
                      <th scope="row" className="px-5 py-4 text-xs font-bold text-ink-secondary align-top whitespace-nowrap">{row.label}</th>
                      <td className="px-5 py-4 text-sm text-ink-secondary align-top">{row.sprint}</td>
                      <td className="px-5 py-4 text-sm text-ink-secondary align-top">{row.cockpit}</td>
                      <td className="px-5 py-4 text-sm text-ink-secondary align-top">{row.engine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
              <p className="text-sm text-ink-secondary leading-relaxed">
                Unsicher, welcher Einstieg sinnvoll ist? Bringen Sie einen konkreten Warenstrom in den
                Circular-Stock-Check mit.
              </p>
              <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm flex-shrink-0 self-start">
                Circular-Stock-Check buchen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Illustrativer Anwendungsfall */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">So kann ein Fall aussehen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Ein Bestand. Mehrere Optionen.<br />
              <span className="text-ink-tertiary">Eine nachvollziehbare Entscheidung.</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 max-w-4xl">
              <div>
                <h3 className="text-sm font-bold text-ink mb-2">Ausgangslage</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  3.200 Übergangsjacken in einem Zentrallager zum Saisonende, mit unterschiedlichen
                  Zustandsklassen, mehreren potenziellen Absatzmärkten und begrenzten
                  Partnerkapazitäten.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink mb-2">Mögliche Wege</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Umlagerung, regulärer Abverkauf, Outlet, Reparatur, Resale, Spende, Remanufacturing.
                </p>
              </div>
            </div>
            <CircularStockShowcase />
            <div className="mt-12">
              <StockFlowSankey />
            </div>
          </div>
        </section>

        {/* Pilotziele */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Erfolg nachvollziehbar machen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Was in einem Pilot<br />
              <span className="text-ink-tertiary">gemessen werden kann.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-10">
              Ein Pilot sollte nicht nur eine Oberfläche liefern. Vor Beginn werden gemeinsam messbare
              Ziele und eine Ausgangsbasis definiert.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-4xl">
              {pilotKpis.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  {k}
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink-tertiary leading-relaxed max-w-3xl">
              Hinweis: Kennzahlen werden je Pilot individuell definiert und gegenüber einer
              nachvollziehbaren Ausgangsbasis gemessen. Pauschale Einsparungs- oder Impactversprechen
              veröffentlichen wir bewusst nicht.
            </p>
          </div>
        </section>

        {/* Umsetzungspfad */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Kein IT-Großprojekt zum Start</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              Mit einem konkreten<br />
              <span className="text-ink-tertiary">Warenstrom beginnen.</span>
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {pathSteps.map((s) => (
                <li key={s.n} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <span className="text-3xl font-black text-brand-500 mb-4 block">{s.n}</span>
                  <h3 className="text-base font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">{s.body}</p>
                  <p className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-btn px-3 py-2">
                    Ergebnis: {s.result}
                  </p>
                </li>
              ))}
            </ol>
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Einen Warenstrom besprechen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Warum Sustainista */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Beratung, Daten und Umsetzung verbinden</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Nicht nur erklären.<br />
              <span className="text-ink-tertiary">Den Prozess gemeinsam aufsetzen.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-12">
              Circular Stock ist weder ein reines Compliance-Thema noch ein isoliertes
              Softwareprojekt. Sustainista verbindet Kreislaufwirtschaft, ESG-Transformation und
              Datenautomatisierung zu einem umsetzbaren Betriebsmodell.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {competencies.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-white border border-border rounded-card p-6 shadow-ambient-low">
                  <Icon className="w-6 h-6 text-brand-600 mb-4" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-white border border-border rounded-card p-5 mb-12 max-w-3xl shadow-ambient-low">
              <Users className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-ink-secondary leading-relaxed">
                Sustainista arbeitet als Partner im Forschungs- und Innovationsprojekt{" "}
                <a
                  href="https://projekte.ffg.at/projekt/5128301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  PACE-DPP (FFG-Projektdatenbank)
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>{" "}
                an praxisnahen Anwendungen Digitaler Produktpässe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {team.map((m) => (
                <div key={m.name} className="flex items-center gap-4 bg-white border border-border rounded-card p-5 shadow-ambient-low">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    {m.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{m.name}</p>
                    <p className="text-xs text-ink-secondary leading-snug">{m.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Bestand ist Kapital."
          titleB="Auch am Saisonende."
          values={[
              { icon: ValueCoins, title: "Weniger Abschreibungen", body: "Ware, die sonst entsorgt würde, findet einen Weg zurück in den Umsatz: über Umlagerung, Outlet, Resale oder Reparatur." },
              { icon: ValueGavel, title: "Vernichtungsverbot rechtssicher", body: "Jede Entscheidung ist begründet und dokumentiert. Das hält bei Nachfragen von Behörden und Öffentlichkeit stand." },
              { icon: ValueWarehouse, title: "Lager frei für Neues", body: "Schnellere Entscheidungen über Restbestände schaffen Platz und Liquidität für die nächste Kollektion." },
          ]}
          testimonial={TESTIMONIALS.csm}
        />

        <ProductTrends product="Circular Stock" label="Circular Stock" />

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zu Circular Stock
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Quellen */}
        <section id="quellen" className="py-20 bg-canvas scroll-mt-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Regulatorische Quellen</p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-6">
              Auf offiziellen Grundlagen aufgebaut.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-3">
              Die regulatorischen Hinweise auf dieser Seite basieren auf offiziellen EU-Quellen. Die
              Inhalte werden regelmäßig überprüft, ersetzen jedoch keine individuelle Rechtsberatung.
            </p>
            <p className="text-xs text-ink-tertiary mb-6">
              Stand der inhaltlichen Prüfung: {circularStockSourcesReviewDate}
            </p>
            <details className="bg-white border border-border rounded-card shadow-ambient-low">
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-ink select-none">
                Alle Quellen anzeigen ([1]–[7])
              </summary>
              <ol className="px-5 pb-5 space-y-3 border-t border-border pt-4">
                {circularStockSources.map((s) => (
                  <li key={s.id} id={`quelle-${s.id}`} className="text-sm text-ink-secondary leading-relaxed">
                    <span className="font-semibold text-ink">[{s.id}]</span>{" "}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                    >
                      {s.title}
                      <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    </a>{" "}
                    <span className="text-ink-tertiary">· {s.institution}</span>
                  </li>
                ))}
              </ol>
            </details>
            <p className="text-xs text-ink-tertiary mt-6">
              Weiterführend bei Sustainista:{" "}
              <Link href="/produkte/digitaler-produktpass" className="text-brand-600 hover:text-brand-700 font-semibold">Digitaler Produktpass</Link>,{" "}
              <Link href="/produkte/ki-automatisierung" className="text-brand-600 hover:text-brand-700 font-semibold">KI-Automatisierung</Link>,{" "}
              <Link href="/produkte/lca-berechnung" className="text-brand-600 hover:text-brand-700 font-semibold">LCA-Berechnung</Link>,{" "}
              <Link href="/produkte/esg-analyse" className="text-brand-600 hover:text-brand-700 font-semibold">ESG-Analyse und Nachhaltigkeitsreporting</Link>,{" "}
              <Link href="/produkte/ppwr-compliance" className="text-brand-600 hover:text-brand-700 font-semibold">PPWR Compliance für Verpackungsmeldungen</Link>.
            </p>
          </div>
        </section>

        {/* Abschluss-CTA */}
        <section className="py-24 bg-ink">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow mb-4 justify-center text-brand-400">
              Circular Stock praktisch starten
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.05] mb-6">
              Bringen Sie einen konkreten Warenstrom mit.
            </h2>
            <p className="text-base text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Im Circular-Stock-Check prüfen wir, wo heute Entscheidungs-, Daten- und Nachweislücken
              entstehen und welcher Einstieg für Ihr Unternehmen sinnvoll ist.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                Circular-Stock-Check buchen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#readiness-sprint" className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/90 hover:text-white px-6 py-3 rounded-btn text-sm transition-all">
                Readiness Sprint anfragen
              </a>
            </div>
            <p className="text-xs text-white/60 mb-2">
              30 Minuten · unverbindlich · keine vorbereitete Präsentation notwendig
            </p>
            <p className="text-xs text-white/60">
              Hilfreich sind eine Produktgruppe, ein beispielhafter Bestandsfall oder ein bestehender
              Retourenprozess.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
