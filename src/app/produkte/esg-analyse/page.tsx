import Navigation from "@/components/Navigation";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import type { Metadata } from "next";
import ScopeTreemap from "@/components/viz/ScopeTreemap";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { Handshake as ValueHandshake, Landmark as ValueLandmark, TrendingDown as ValueTrendingDown } from "lucide-react";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("ESG-Analyse & CO₂-Bilanz nach GHG Protocol und VSME"),
  description:
    "CO₂-Bilanz nach GHG Protocol und ESG-Erstbericht nach VSME für KMU in Österreich. Erste Ergebnisse in 4 bis 6 Wochen, förderbar über ÖkoBusiness Wien oder Ökomanagement NÖ.",
  alternates: { canonical: "https://www.example.invalid/produkte/esg-analyse" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/esg-analyse",
    title: "ESG-Analyse & Nachhaltigkeitsbericht bei Sustainista",
    description: "CO₂-Bilanz nach GHG Protocol und ESG-Erstbericht nach VSME für KMU. Erste Ergebnisse in 4 bis 6 Wochen.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "Sustainista ESG-Analyse und Nachhaltigkeitsbericht" }],
  },
};

const faqs = [
  {
    q: "Warum braucht ein KMU überhaupt ESG-Daten?",
    a: "Weil Kunden, Banken und Ausschreibungen danach fragen. Große Auftraggeber brauchen die Emissionsdaten ihrer Lieferanten für den eigenen Scope-3-Bericht, Banken fragen sie bei Krediten ab. Mit dem freiwilligen KMU-Standard VSME beantworten Sie diese Anfragen einmal sauber, statt jeden Fragebogen neu auszufüllen. Wir klären Ihre Situation kostenlos im Erstgespräch.",
  },
  {
    q: "Was kostet ein ESG-Erstbericht?",
    a: "Die Projektkosten hängen von Unternehmensgröße, Datenverfügbarkeit und Umfang des Erstberichts ab. Wir erstellen nach dem ersten Gespräch ein Festpreisangebot: keine Stundenabrechnung, kein Moving Target. Für Wiener Unternehmen ist der Einstieg über ÖkoBusiness Wien mit € 1.000 Eigenanteil möglich, in Niederösterreich fördert Ökomanagement NÖ bis zu 50 % der Beratungskosten.",
  },
  {
    q: "Wir haben keine Nachhaltigkeitsabteilung, geht das trotzdem?",
    a: "Ja, und genau dafür ist Sustainista gebaut. Wir brauchen von Ihnen: Zugang zu Strom- und Gasrechnungen, Fuhrpark-Reports und Reisekostenabrechnungen sowie 2 bis 3 kurze Abstimmungsgespräche. Den Rest (Berechnung, Strukturierung, Berichterstellung, Förderdokumentation) übernehmen wir vollständig. Kein internes ESG-Team nötig, kein Wissensaufbau vorausgesetzt.",
  },
  {
    q: "Was unterscheidet Sustainista von klassischer ESG-Beratung?",
    a: "Klassische Beratungshäuser wie PwC oder EY liefern Einmalgutachten für 30.000 bis 80.000 €, und danach stehen Sie allein. Sustainista liefert ein wiederverwendbares Datensystem: Der erste Bericht ist in 4 bis 6 Wochen fertig, jeder folgende läuft automatisch. Dazu: Wir verwenden die offiziellen UBA-Emissionsfaktoren für Österreich (Strom: 0,152 kg CO₂e/kWh statt EU-Schnitt 0,295), was zu präziseren und günstigeren Emissionsbilanzen führt.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/esg-analyse",
      "name": "ESG-Analyse & Nachhaltigkeitsbericht",
      "description": "CO₂-Bilanz nach GHG Protocol und ESG-Erstbericht nach VSME für KMU in Österreich und DACH.",
      "url": "https://www.example.invalid/produkte/esg-analyse",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": "2026-06-20",
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/esg-analyse#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/esg-analyse#service",
      "name": "ESG-Analyse & Nachhaltigkeitsbericht",
      "description": "CO₂-Bilanz nach GHG Protocol (Scope 1 bis 3) und ESG-Erstbericht nach VSME für KMU. Erste Ergebnisse in 4 bis 6 Wochen, förderbar über ÖkoBusiness Wien oder Ökomanagement NÖ.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [{ "@type": "Country", "name": "Österreich" }, { "@type": "Country", "name": "Deutschland" }, { "@type": "Country", "name": "Schweiz" }],
      "serviceType": "ESG-Beratung",
      "url": "https://www.example.invalid/produkte/esg-analyse",
    },
    {
      "@id": "https://www.example.invalid/produkte/esg-analyse#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        { "@type": "ListItem", "position": 3, "name": "ESG-Analyse & Nachhaltigkeitsbericht", "item": "https://www.example.invalid/produkte/esg-analyse" },
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

const deliverables = [
  {
    title: "CO₂-Bilanz (Scope 1 bis 3)",
    body: "Ihre direkten und indirekten Emissionen: von Heizung und Strom bis zu Lieferkette, Dienstreisen und Pendelwegen. Quellenbasiert nach GHG Protocol.",
  },
  {
    title: "ESG-Erstbericht",
    body: "Ein Bericht für Banken, Investor:innen und Auftraggeber, mit einer Datenstruktur, auf der Sie weiter aufbauen können.",
  },
  {
    title: "Maßnahmenplan",
    body: "Sie sehen, wo die größten Hebel liegen, was sich rechnet und welche Schritte als Nächstes sinnvoll sind.",
  },
  {
    title: "Lieferantenfragebogen",
    body: "Digitale Fragebögen helfen, Daten zu eingekauften Gütern und anderen vorgelagerten Emissionen strukturiert zu erfassen.",
  },
  {
    title: "Wiederverwendbares Datensystem",
    body: "Daten aus ERP, Buchhaltung und Lieferkette bilden eine Grundlage, die Sie für spätere Berichte wiederverwenden können.",
  },
  {
    title: "Geförderter Einstieg",
    body: "In Wien und Niederösterreich kommen Förderungen infrage. Wir unterstützen Sie bei den Unterlagen und der Abstimmung.",
  },
];

const timeline = [
  { week: "Wochen 1 und 2", title: "Kickoff & Datenbeschaffung", body: "Erstgespräch, Scope-Festlegung, Lieferung der benötigten Rohdaten aus ERP, Buchhaltung und Lieferanten." },
  { week: "Wochen 2 bis 4", title: "Analyse & Berechnung", body: "CO₂-Bilanzierung, ESG-Datenauswertung, Datenlücken schließen, Entwurf des Berichts." },
  { week: "Wochen 4 bis 6", title: "Review & Finalisierung", body: "Präsentation der Ergebnisse, Feedback-Schleife, Finalbericht und Handlungsempfehlungen." },
  { week: "Laufend", title: "Datensystem & Updates", body: "Das aufgebaute System ermöglicht automatische Updates, ohne jedes Jahr von vorne anzufangen." },
];

const standards = [
  { label: "VSME", sub: "Freiwilliger EU-Standard für KMU: die Antwort auf Kunden- und Bankenanfragen, schlank und vergleichbar" },
  { label: "GHG Protocol", sub: "Internationaler CO₂-Standard, Scope 1 bis 3, Grundlage aller Sustainista-Berichte" },
  { label: "ISO 14064", sub: "Zertifizierbarer Treibhausgasnachweis, anerkannt für Bankfinanzierungen und Ausschreibungen" },
  { label: "ÖkoBusiness / Ökomanagement", sub: "Geförderter Einstieg für Betriebe in Wien und Niederösterreich" },
  { label: "EU-Taxonomie", sub: "Klassifizierung als nachhaltige Wirtschaftsaktivität, Pflicht für EU-Finanzprodukte und zunehmend Bankkredit" },
];

export default function EsgAnalyse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        <section className="bg-canvas pt-32 pb-20 sm:pb-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">ESG-Analyse</li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-ink max-w-4xl">
                  Nachhaltigkeits&shy;daten, mit denen Sie arbeiten können.
                </h1>
                <p className="mt-7 text-xl text-ink-secondary leading-relaxed max-w-2xl">
                  Von verstreuten Rechnungen zum prüfbaren ESG-Bericht: Wir erstellen Ihre CO₂-Bilanz und bringen Ihre Daten in eine Form, die Kunden und Banken verstehen.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <a href="#kontakt" className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold">
                    Kostenloses Erstgespräch <span aria-hidden="true">→</span>
                  </a>
                  <a href="#ablauf" className="font-semibold text-brand-700 underline underline-offset-4">So läuft es ab</a>
                </div>
              </div>
              <div className="lg:col-span-4 border-t border-border pt-6">
                <p className="text-4xl font-bold tracking-tight text-brand-700">4–6 Wochen</p>
                <p className="mt-2 text-base text-ink-secondary leading-relaxed">bis zum ersten Bericht. Ohne eigenes ESG-Team, auf Basis von VSME und GHG Protocol.</p>
                <p className="mt-4 text-base text-ink-secondary">Ein geförderter Einstieg ist möglich.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <h2 className="lg:col-span-5 text-3xl sm:text-4xl font-black text-ink tracking-tight leading-tight">
                Eine gute Antwort auf viele Fragen.
              </h2>
              <div className="lg:col-span-7 text-lg text-ink-secondary leading-relaxed space-y-5">
                <p>Ihre Kunden brauchen Zahlen für ihre Lieferkette. Ihre Bank fragt nach Nachhaltigkeitsdaten. Und die Informationen liegen in Rechnungen, Excel-Listen und E-Mails.</p>
                <p>Wir bringen sie zusammen. So entsteht eine belastbare Grundlage für Anfragen, Entscheidungen und Ihren nächsten Bericht.</p>
                <details className="border-t border-border pt-5">
                  <summary className="cursor-pointer font-semibold text-brand-700">Welche Standards und Förderungen spielen eine Rolle?</summary>
                  <dl className="mt-5 divide-y divide-border">
                    {standards.map((s) => (
                      <div key={s.label} className="py-4 sm:grid sm:grid-cols-3 sm:gap-5">
                        <dt className="font-bold text-ink">{s.label}</dt>
                        <dd className="sm:col-span-2 mt-1 sm:mt-0 text-base">{s.sub}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-tight">Was am Ende auf Ihrem Tisch liegt.</h2>
                <p className="mt-5 text-lg text-ink-secondary leading-relaxed">Nicht nur Zahlen, sondern eine Grundlage für das, was Sie als Nächstes tun.</p>
              </div>
              <div className="lg:col-span-7 divide-y divide-border border-t border-border">
              {deliverables.map((d) => (
                <div key={d.title} className="py-6 sm:grid sm:grid-cols-5 sm:gap-6">
                  <h3 className="sm:col-span-2 text-lg font-bold text-ink">{d.title}</h3>
                  <p className="sm:col-span-3 mt-2 sm:mt-0 text-base text-ink-secondary leading-relaxed">{d.body}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-6 mb-12 items-end">
              <h2 className="lg:col-span-7 text-3xl sm:text-4xl font-black text-ink tracking-tight leading-tight">Wo entstehen die Emissionen?</h2>
              <p className="lg:col-span-5 text-lg text-ink-secondary leading-relaxed">
                Eine Bilanz macht sichtbar, wo Sie ansetzen können. Entdecken Sie die drei Bereiche an einem fiktiven Beispiel.
              </p>
            </div>
            <ScopeTreemap />
          </div>
        </section>

        <section id="ablauf" className="py-20 sm:py-28 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-tight mb-12">Von den ersten Daten zum Bericht.</h2>
            <ol className="border-t border-border">
              {timeline.map((t) => (
                <li key={t.week} className="py-6 border-b border-border grid sm:grid-cols-12 gap-2 sm:gap-6">
                  <p className="sm:col-span-3 text-base font-semibold text-brand-700">{t.week}</p>
                  <h3 className="sm:col-span-4 text-lg font-bold text-ink">{t.title}</h3>
                  <p className="sm:col-span-5 text-base text-ink-secondary leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-base text-ink-secondary">Sie möchten zuerst Ihre Datenlage prüfen?{" "}
              <Link href="/esg-check" className="font-semibold text-brand-700 underline underline-offset-4">Zum kostenlosen ESG-Datencheck →</Link>
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <h2 className="lg:col-span-5 text-3xl sm:text-4xl font-black text-ink tracking-tight leading-tight">Die richtigen Daten für Österreich.</h2>
              <div className="lg:col-span-7">
                <p className="text-lg text-ink-secondary leading-relaxed">Für eine aussagekräftige Bilanz kommt es auf die passenden Emissionsfaktoren an. Wir verwenden österreichische Daten des Umweltbundesamts statt pauschal mit einem EU-Durchschnitt zu rechnen.</p>
                <p className="mt-6 text-base text-ink-secondary leading-relaxed">Für die hier verwendete Strom-Datenbasis 2023 beträgt der Faktor 0,152 kg CO₂e/kWh (aktualisiert im Dezember 2025). Der Vergleichswert des EU-Durchschnitts liegt bei 0,295 kg CO₂e/kWh.</p>
                <Link href="/tools/co2-rechner" className="inline-block mt-6 text-base font-semibold text-brand-700 underline underline-offset-4">CO₂-Rechner ausprobieren →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Was es Ihrem Geschäft bringt."
          titleB="Nicht nur ein Bericht."
          values={[
              { icon: ValueHandshake, title: "Lieferverträge sichern", body: "Große Kunden fragen Emissionsdaten über Fragebögen ab. Mit einer gepflegten Datenbasis beantworten Sie jede Anfrage in Minuten, statt jedes Mal ein Projekt zu starten." },
              { icon: ValueLandmark, title: "Stärker ins Bankgespräch", body: "Banken bewerten Nachhaltigkeitsrisiken bei Krediten mit. Belastbare Zahlen statt Schätzungen verbessern Ihre Verhandlungsposition, etwa bei grünen Finanzierungen." },
              { icon: ValueTrendingDown, title: "Kostenhebel sichtbar machen", body: "Energie und Material sind die größten Posten der CO₂-Bilanz und zugleich der Kosten. Die Bilanz zeigt, wo Einsparungen doppelt wirken." },
          ]}
          testimonial={TESTIMONIALS.esg}
        />

        <ProductTrends product="ESG Ready" label="ESG Ready" />

        {/* FAQ */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zur ESG-Analyse
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        <ElektroCallout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
