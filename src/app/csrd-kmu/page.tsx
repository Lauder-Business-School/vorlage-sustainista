import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import type { Metadata } from "next";
import { FileCheck, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "CSRD für KMU Österreich: Leitfaden & Software 2026",
  description:
    "CSRD-Pflicht für KMU in Österreich: Wann gilt sie? Was müssen Sie tun? Sustainista automatisiert CSRD-Reporting mit KI, erste Ergebnisse in 4 bis 6 Wochen.",
  alternates: { canonical: "https://www.example.invalid/csrd-kmu" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/csrd-kmu",
    title: "CSRD für KMU Österreich: Leitfaden & Software 2026",
    description:
      "CSRD-Pflicht für KMU in Österreich: Wann gilt sie? Was müssen Sie tun? Sustainista automatisiert CSRD-Reporting mit KI, erste Ergebnisse in 4 bis 6 Wochen.",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "CSRD für KMU Österreich | Sustainista",
      },
    ],
  },
};

const faqs = [
  {
    q: "Ab wann gilt die CSRD für mein KMU?",
    a: "Nach Omnibus I (Richtlinie (EU) 2026/470) gilt die CSRD nur für Unternehmen mit mehr als 1.000 Beschäftigten und mehr als 450 Mio. Euro Nettoumsatz. Für KMU gibt es keine direkte Pflicht, der Standard für börsennotierte KMU ist gestrichen. In Österreich gilt derzeit § 243b UGB: große Unternehmen von öffentlichem Interesse mit mehr als 500 Arbeitnehmern; befreit ist nach § 908 Abs. 2a UGB, wer bis zu 450 Mio. Euro Umsatz erzielt oder nicht mehr als 1.000 Arbeitnehmer beschäftigt. KMU sind indirekt bereits jetzt betroffen: Wenn Ihr größter Kunde CSRD-pflichtig ist, braucht er Ihre Emissionsdaten für seinen Scope-3-Bericht.",
  },
  {
    q: "Was ist Scope 3, und warum ist er so schwierig?",
    a: "Scope 3 umfasst alle Emissionen, die nicht direkt in Ihrem Betrieb entstehen: Emissionen Ihrer Zulieferer, Logistik, Dienstreisen, Pendelwege der Mitarbeitenden. Er macht typischerweise 70 bis 90% des gesamten CO₂-Fußabdrucks aus. EY Österreich hat Scope 3 erst 2024/25 vollständig erfasst. Mit KI-Unterstützung dauert das bei KMU 4 bis 6 Wochen statt Jahre.",
  },
  {
    q: "Ist die Beratung förderbar?",
    a: "Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ. Sustainista prüft Ihre Förderfähigkeit kostenlos im ersten Gespräch.",
  },
  {
    q: "Was kostet ein CSRD-Bericht mit Sustainista?",
    a: "Die Projektkosten hängen von Unternehmensgröße, Datenverfügbarkeit und Berichtsumfang ab. Wir erstellen nach dem ersten Gespräch ein Festpreisangebot ohne Stundensatz-Überraschungen. Für Wiener Betriebe ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ; die Förderfähigkeit prüfen wir kostenlos.",
  },
  {
    q: "Brauchen wir dafür eigene ESG-Mitarbeitende?",
    a: "Nein. Sustainista übernimmt Aufbau, Berechnung, Automatisierung und Berichtserstellung. Wir brauchen von Ihnen: Zugang zu Ihren Rechnungs- und Verbrauchsdaten sowie 2 bis 3 kurze Abstimmungsgespräche. Den Rest erledigen wir.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/csrd-kmu",
      name: "CSRD für KMU Österreich: Leitfaden & Software 2026",
      description:
        "CSRD-Pflicht für KMU in Österreich: Wann gilt sie? Was müssen Sie tun? Sustainista automatisiert CSRD-Reporting mit KI, erste Ergebnisse in 4 bis 6 Wochen.",
      url: "https://www.example.invalid/csrd-kmu",
      isPartOf: { "@id": "https://www.example.invalid" },
      lastReviewed: "2026-11-07",
      inLanguage: "de",
      breadcrumb: { "@id": "https://www.example.invalid/csrd-kmu#breadcrumb" },
    },
    {
      "@id": "https://www.example.invalid/csrd-kmu#breadcrumb",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://www.example.invalid",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "CSRD für KMU",
          item: "https://www.example.invalid/csrd-kmu",
        },
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

const timelineSteps = [
  {
    year: "2025",
    title: "Große Unternehmen von öffentlichem Interesse (>500 MA): CSRD gilt",
    desc: "Unternehmen wie OMV, Verbund oder Erste Bank erstellen bereits ESRS-konforme Berichte. Sie fordern seit 2025 aktiv Scope-3-Daten von ihren Zulieferern, auch von Ihnen.",
    active: false,
  },
  {
    year: "2026",
    title: "Omnibus I: nur noch sehr große Unternehmen",
    desc: "Richtlinie (EU) 2026/470, in Kraft seit 18.03.2026. Berichtspflichtig ist nur, wer mehr als 1.000 Beschäftigte und mehr als 450 Mio. Euro Nettoumsatz hat. Der Standard für börsennotierte KMU ist gestrichen. KMU haben keine direkte Pflicht.",
    active: true,
  },
  {
    year: "2027",
    title: "Österreich: Umsetzung bis 19.03.2027",
    desc: "Bis dahin gilt § 243b UGB: große Unternehmen von öffentlichem Interesse mit mehr als 500 Arbeitnehmern. Befreit ist nach § 908 Abs. 2a UGB, wer bis zu 450 Mio. Euro Umsatz erzielt oder nicht mehr als 1.000 Arbeitnehmer beschäftigt.",
    active: false,
  },
  {
    year: "Jetzt",
    title: "Indirekte Pflicht: bereits wirksam",
    desc: "Ihr Großkunde muss Scope-3-Emissionen in seinem CSRD-Bericht ausweisen. Scope 3 umfasst die Emissionen seiner Lieferanten, also Sie. Wer keine Daten liefern kann, wird als Zulieferer zunehmend unattraktiv.",
    active: false,
  },
];

const whatIsCsrdCards = [
  {
    icon: FileCheck,
    title: "ESRS: 12 Berichtsstandards, nicht einer",
    desc: "ESRS umfasst Standards zu Klima (E1), Biodiversität (E4), Arbeitsbedingungen (S1) und Unternehmensführung (G1). Für die meisten KMU stehen E1 (Klimaschutz) und S1 (eigene Belegschaft) im Fokus.",
  },
  {
    icon: BarChart3,
    title: "Scope 1, 2 und 3: vollständig",
    desc: "Scope 1: Eigene Verbrennung (Heizung, Fuhrpark). Scope 2: Eingekaufter Strom und Fernwärme. Scope 3: Lieferkette, Dienstreisen, Transport, typischerweise 70 bis 90% aller Emissionen.",
  },
  {
    icon: Shield,
    title: "Externe Prüfung wie ein Jahresabschluss",
    desc: "Nachhaltigkeitsberichte werden künftig von Wirtschaftsprüfern testiert. Das bedeutet: Daten müssen nachvollziehbar, vollständig und quellenbasiert sein. Excel-Schätzungen reichen nicht.",
  },
];

const painPoints = [
  {
    title: "Scope 3 ist der größte blinde Fleck",
    desc: "EY Österreich hat Scope 3 erst im GJ 2024/25 vollständig erfasst, nach Jahren der Bemühung. Für KMU ohne ESG-Team ist das eine unlösbare manuelle Aufgabe: Emissionsdaten von 50, 100 oder 200 Lieferanten abfragen und aggregieren.",
  },
  {
    title: "Excel ist keine Datenstruktur",
    desc: "CSRD-konforme Berichte müssen XBRL-tagged, prüffähig und nachvollziehbar sein. Wer mit Spreadsheets arbeitet, baut auf Sand: Jede Änderung erfordert manuelle Nacharbeit.",
  },
  {
    title: "Beratungskosten: 30.000 bis 80.000 € pro Bericht",
    desc: "Große Beratungshäuser (PwC, EY, Deloitte) bieten CSRD-Begleitung an, allerdings zu Enterprise-Preisen. Für ein KMU mit 20 Mitarbeitenden ist das wirtschaftlich nicht darstellbar.",
  },
  {
    title: "ESRS, GHG Protocol, XBRL: fremde Welten",
    desc: "Ein:e Mitarbeiter:in aus dem Rechnungswesen kann nicht nebenbei CSRD-Experte werden. Die Lernkurve ist steil, die Anforderungen ändern sich, und Fehler in der Berichterstattung haben rechtliche Konsequenzen.",
  },
];

const solutionSteps = [
  {
    num: "01",
    title: "Daten inventarisieren: Was haben Sie bereits?",
    desc: "Wir analysieren Ihre bestehenden Datenquellen: Stromrechnungen, Fuhrpark-Reports, Reisekostenabrechnungen, ERP-Daten. In 90% der Fälle sind die Rohdaten bereits vorhanden, nur nicht strukturiert.",
  },
  {
    num: "02",
    title: "Scope 1 bis 3 mit österreichischen Faktoren berechnen",
    desc: "Wir verwenden ausschließlich die offiziellen UBA-Emissionsfaktoren (Strom AT: 0,152 kg CO₂e/kWh, Erdgas: 2,58 kg CO₂e/m³). Kein US-Durchschnitt, kein EU-Mischfaktor, sondern exakte österreichische Werte.",
  },
  {
    num: "03",
    title: "ESRS-konformen Bericht automatisiert erstellen",
    desc: "KI extrahiert, klassifiziert und berechnet. Das Ergebnis ist ein prüffähiger ESRS-Bericht, bankentauglich und extern testierbar. Manueller Aufwand für Sie: minimal.",
  },
  {
    num: "04",
    title: "Laufend aktualisieren, kein einmaliges Projekt",
    desc: "CSRD ist keine Einmalanforderung, sondern Jahrespflicht. Wir richten Automatisierungen ein, die Daten aus Ihren Systemen kontinuierlich aggregieren, damit der nächste Bericht kein Projekt wird.",
  },
];

export default function CsrdKmu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header relative min-h-[55vh] flex items-end pt-24 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li>
                  <Link href="/" className="hover:text-ink-secondary transition-colors">
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">
                  /
                </li>
                <li className="text-ink-secondary" aria-current="page">
                  CSRD für KMU
                </li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">CSRD-Pflicht: Jetzt handeln</span>
            <h1
              className="font-black tracking-tight leading-[0.95] mb-6 text-ink"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
            >
              CSRD für KMU:{" "}
              <span className="text-brand-600">Was jetzt zu tun ist</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-10">
              Nach Omnibus I berichten nur noch sehr große Unternehmen direkt nach der Corporate
              Sustainability Reporting Directive (CSRD). Kleinere Unternehmen betrifft sie über Kunden
              und Banken. Wer jetzt beginnt, spart später Kosten und Stress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {[
                "Geltungsbereich 2026 geändert (Omnibus 2026/470)",
                "Indirekt betroffen: jeder zweite Zulieferer",
                "Förderbar über ÖkoBusiness Wien und Ökomanagement NÖ",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 bg-brand-50 border border-border rounded-card px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-ink leading-snug">{badge}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-600 hover:bg-brand-700 text-canvas text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">CSRD Rollout</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Wer muss wann berichten?
            </h2>
            <div className="relative">
              <div
                className="absolute left-[3.25rem] top-6 bottom-6 w-px bg-border hidden sm:block"
                aria-hidden="true"
              />
              <ol className="space-y-6">
                {timelineSteps.map((step) => (
                  <li key={step.year} className="flex gap-6 sm:gap-8 items-start">
                    <div
                      className={`flex-shrink-0 w-[6.5rem] text-center rounded-field px-2 py-2 text-xs font-bold uppercase tracking-wider z-10 ${
                        step.active
                          ? "bg-brand-600 text-canvas"
                          : "bg-canvas border border-border text-ink-secondary"
                      }`}
                    >
                      {step.year}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-sm font-bold text-ink mb-1">{step.title}</h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* What is CSRD */}
        <section className="py-20 sm:py-28 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Was bedeutet das konkret</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Was bedeutet CSRD konkret?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {whatIsCsrdCards.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-card border border-border bg-surface px-6 py-5"
                >
                  <Icon
                    className="w-6 h-6 text-brand-600 mb-4 flex-shrink-0"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Typische Herausforderungen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Warum scheitern KMU an der CSRD?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {painPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-card border border-border bg-canvas px-6 py-5"
                >
                  <h3 className="text-sm font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Sustainista solves it */}
        <section className="py-20 sm:py-28 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Unser Ansatz</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Sustainista automatisiert{" "}
              <span className="text-brand-600">CSRD für KMU</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {solutionSteps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-card border border-border bg-surface px-6 py-5 flex gap-5 items-start"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-canvas flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink mb-1">{step.title}</h3>
                    <p className="text-sm text-ink-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="rounded-card border border-border bg-canvas px-8 py-10 sm:px-10 sm:py-12">
              <p className="eyebrow mb-4">Jetzt starten</p>
              <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-4">
                CSRD-Readiness in 4 bis 6 Wochen
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-xl">
                Wir prüfen kostenlos, ob Ihr Unternehmen förderfähig ist und was CSRD für Sie
                konkret bedeutet.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-600 hover:bg-brand-700 text-canvas text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zur CSRD für KMU
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
