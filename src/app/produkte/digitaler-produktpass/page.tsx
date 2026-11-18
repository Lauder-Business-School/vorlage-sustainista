import Navigation from "@/components/Navigation";
import ComplianceCheckTeaser from "@/components/compliance/ComplianceCheckTeaser";
import ProductTrends from "@/components/trendradar/ProductTrends";
import ElektroShowcase from "@/components/ElektroShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import DppPricing, { KOSTEN_FAQ_ANTWORT } from "./DppPricing";
import VideoSection from "@/components/VideoSection";
import Partners from "@/components/Partners";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { RECHTSSTAND_HINWEIS, RECHTSSTAND_ISO } from "@/lib/rechtsstand";
import { Globe, Layers, QrCode, Clock } from "lucide-react";
import DppAccessLayers from "@/components/viz/DppAccessLayers";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { DoorOpen as ValueDoorOpen, Smartphone as ValueSmartphone, Wrench as ValueWrench } from "lucide-react";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Digitaler Produktpass (DPP) für KMU: ESPR & Batteriepass"),
  description:
    "Digitaler Produktpass nach EU-ESPR: kostenloser Einstieg, Ausbaustufen bis Enterprise, SAP-Anbindung und Umsetzung für KMU. Batteriepass-Pflicht ab Februar 2027.",
  alternates: { canonical: "https://www.example.invalid/produkte/digitaler-produktpass" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/digitaler-produktpass",
    title: "Digitaler Produktpass (DPP) bei Sustainista",
    description: "Implementierung des Digitalen Produktpasses nach Batterieverordnung und ESPR: Datenstruktur, Lieferkette, QR-Code. Batteriepass ab 18. Februar 2027 Pflicht.",
    images: [{ url: "https://www.example.invalid/dpp-logo.png", width: 500, height: 500, alt: "Digitaler Produktpass DPP bei Sustainista" }],
  },
};

const faqs = [
  {
    q: "Ab wann ist der Digitale Produktpass verpflichtend?",
    a: "Für EV-Batterien, Industriebatterien und LMT-Batterien (Light Means of Transport) gilt die EU Battery Regulation 2023/1542: Ab 18. Februar 2027 dürfen neue Batterien ohne gültigen Digitalen Produktpass nicht mehr auf dem EU-Markt in Verkehr gebracht werden. Die Pflichtfelder stehen in Anhang XIII der Verordnung selbst; CO₂-Fußabdruck, Rezyklatanteile und Sorgfaltspflichtangaben verlangt die Kommission zum 18. Februar 2027 noch nicht (FAQ Batterien, September 2026). Für weitere Kategorien wie Textilien, Elektronik und Möbel sieht die ESPR (EU Ecodesign for Sustainable Products Regulation) gestaffelte Fristen zwischen 2027 und 2030 vor. Österreichische Unternehmen sind unabhängig von ihrer Größe betroffen, sobald sie Produkte in die EU exportieren oder dort in Verkehr bringen.",
  },
  {
    q: "Was kostet die Umsetzung eines DPP?",
    a: KOSTEN_FAQ_ANTWORT,
  },
  {
    q: "Brauchen wir eine eigene IT-Infrastruktur?",
    a: "Nein. Für die meisten österreichischen KMU genügt eine leichtgewichtige Lösung, die bestehende ERP-Daten, Lieferscheine und Produktdatenblätter als Quellen nutzt. Wir ergänzen nur das strukturell Notwendige: ein Datenmodell nach ESPR und Batterieverordnung, eine maschinenlesbare API-Schnittstelle für Behörden und Weiterverarbeiter sowie die QR-Code-Verlinkung auf produktspezifische Datenseiten. Eine aufwändige ERP-Neueinführung oder eigene Serverinfrastruktur ist nicht erforderlich.",
  },
  {
    q: "Ist der DPP auch für Händler und Importeure relevant?",
    a: "Ja, die Pflichten treffen die gesamte Lieferkette. Einführer und Händler gelten nach Art. 44 der Batterieverordnung als Erzeuger, wenn sie eine Batterie unter eigenem Namen oder eigener Marke in Verkehr bringen; dann schulden sie auch den Batteriepass. Sonst bleiben eigene Prüf- und Mitwirkungspflichten. Händler und Refurbishment-Anbieter müssen die Datenfelder (Seriennummer, Hersteller, Materialzusammensetzung, Recyclinganteil) auf Anfrage von Marktaufsichtsbehörden bereitstellen können. Wir unterstützen alle Rollen entlang der Wertschöpfungskette mit rollenspezifischen Templates.",
  },
  {
    q: "Welche Datenfelder sind im Batteriepass verpflichtend?",
    a: "Anhang XIII der Batterieverordnung (EU) 2023/1542 legt die Pflichtfelder fest. Zum 18. Februar 2027 fällig sind unter anderem eindeutige Kennung, Erzeuger und Herstellungsort, Kategorie und Chemie (z. B. LFP, NMC), Nennenergie in kWh und Bemessungskapazität in Ah, Leistungs- und Haltbarkeitsparameter, gefährliche Stoffe und kritische Rohstoffe, Angaben zu Demontage, Sicherheit und Entsorgung sowie Zustandsdaten über den Lebenszyklus. Sorgfaltspflichtangaben folgen ab 18. August 2027, CO₂-Fußabdruck frühestens 2028, Rezyklatanteile frühestens ab Oktober 2028 (Kommissions-FAQ Batterien, September 2026). Alle Angaben sind über den QR-Code maschinenlesbar abrufbar.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/digitaler-produktpass",
      "name": "Digitaler Produktpass",
      "description": "Digitaler Produktpass nach EU-ESPR: kostenloser Einstieg, Ausbaustufen bis Enterprise, SAP-Anbindung und Umsetzung für KMU. Batteriepass-Pflicht ab Februar 2027.",
      "url": "https://www.example.invalid/produkte/digitaler-produktpass",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": RECHTSSTAND_ISO,
      "dateModified": RECHTSSTAND_ISO,
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/digitaler-produktpass#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/digitaler-produktpass#service",
      "name": "Digitaler Produktpass (DPP): Implementierung nach Batterieverordnung und ESPR",
      "description": "Sustainista implementiert den Digitalen Produktpass (DPP) nach Batterieverordnung und ESPR: Datenstruktur, Lieferkettenanalyse, QR-Code-Integration. Batteriepass ab 18. Februar 2027 Pflicht; weitere Produktgruppen folgen über eigene ESPR-Rechtsakte.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [{ "@type": "Country", "name": "Österreich" }, { "@type": "Country", "name": "Deutschland" }, { "@type": "Country", "name": "Schweiz" }],
      "serviceType": "Digitaler Produktpass",
      "url": "https://www.example.invalid/produkte/digitaler-produktpass",
    },
    {
      "@id": "https://www.example.invalid/produkte/digitaler-produktpass#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        { "@type": "ListItem", "position": 3, "name": "Digitaler Produktpass", "item": "https://www.example.invalid/produkte/digitaler-produktpass" },
      ],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://doi.org/10.1007/s35148-026-2361-0",
      "headline": "Datenbasierte Infrastruktur für zirkuläre Geschäftsmodelle",
      "author": [
        { "@id": "https://www.example.invalid/#stefan-bauer" },
        { "@type": "Person", "name": "Kevin Lukas Kulle" },
        { "@type": "Person", "name": "Thomas Preindl" },
        { "@type": "Person", "name": "Bernhard Bergmair" },
      ],
      "isPartOf": {
        "@type": "PublicationVolume",
        "name": "ATZ - Automobiltechnische Zeitschrift",
        "volumeNumber": "5/2026",
      },
      "publisher": { "@type": "Organization", "name": "Springer Fachmedien Wiesbaden" },
      "datePublished": "2026-05-01",
      "url": "https://doi.org/10.1007/s35148-026-2361-0",
      "about": { "@id": "https://www.example.invalid/produkte/digitaler-produktpass" },
      "description": "Der DPP als Kerninstrument kreislauforientierter Geschäftsmodelle: Einsatzszenarien, Datenanforderungen und wirtschaftliche Potenziale aus dem Forschungsprojekt PACE-DPP.",
    },
    {
      "@type": "VideoObject",
      "name": "Digitaler Produkt Pass – Folge 5",
      "description": "Podcast-Folge zum Digitalen Produktpass mit Dr. Stefan Bauer: wie der DPP neue Wege für nachhaltige Wertschöpfung eröffnet.",
      "thumbnailUrl": "https://i.ytimg.com/vi/VZIXYxI82zM/hqdefault.jpg",
      "uploadDate": "2025-07-18",
      "duration": "PT9M50S",
      "embedUrl": "https://www.youtube-nocookie.com/embed/VZIXYxI82zM",
      "publisher": { "@type": "Organization", "name": "Hochschule Burgenland" },
      "about": { "@id": "https://www.example.invalid/produkte/digitaler-produktpass" },
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
  { icon: Globe, label: "Datenmodell nach Anhang XIII und EN 18223" },
  { icon: Layers, label: "Lieferanten- und Einführerdaten eingebunden" },
  { icon: QrCode, label: "QR-Code-Pflicht & maschinenlesbare API" },
  { icon: Clock, label: "Fristgerecht vor dem 18. Feb. 2027" },
];

const steps = [
  {
    n: "01",
    title: "Ist-Analyse & Datenaudit",
    body: "Wir erheben systematisch, welche Pflichtfelder nach ESPR und EU Battery Regulation 2023/1542 bereits vorhanden sind (Seriennummer, Hersteller, Materialzusammensetzung, CO₂-Fußabdruck, Kapazität, Recyclinganteil) und wo noch Datenlücken bestehen. Quellen: ERP, Lieferscheine, Produktdatenblätter, Lieferantenangaben.",
  },
  {
    n: "02",
    title: "Datenmodell & Struktur",
    body: "Wir bauen ein EU-konformes Datenmodell, das alle vorgeschriebenen Felder strukturiert abbildet: Reparierbarkeit, Recyclingfähigkeit, Gefahrenstoffe, State of Health für Batterien sowie den CO₂-Fußabdruck pro kWh. Das Modell folgt Anhang XIII der Batterieverordnung und für weitere Produktgruppen den delegierten Rechtsakten der ESPR, sobald sie erlassen sind.",
  },
  {
    n: "03",
    title: "Lieferkette einbinden",
    body: "Wir entwickeln standardisierte Lieferantenfragebögen nach ESPR-Logik und automatisierte Datenabrufe. Importeure, die Drittstaaten-Produkte in die EU einführen, erhalten spezifische Vorlagen, denn wer unter eigener Marke einführt, gilt nach Art. 44 als Erzeuger.",
  },
  {
    n: "04",
    title: "QR-Code & Publikation",
    body: "Das Ergebnis ist ein maschinenlesbarer Digitaler Produktpass mit QR-Code-Verlinkung auf produktspezifische Datenseiten, für Käufer:innen, Marktaufsichtsbehörden und Weiterverarbeiter. Ab 18. Februar 2027 Pflicht für LV-, Industrie- (über 2 kWh) und Elektrofahrzeugbatterien; Gerätebatterien brauchen keinen Pass. Weitere Kategorien folgen über die ESPR.",
  },
];


const dppStats = [
  { label: "Produktkategorien bis 2030 betroffen", value: "30+" },
  { label: "Batterien: Pflicht ab 18. Feb.", value: "2027" },
  { label: "EU-Register in Betrieb seit Juli", value: "2026" },
];

export default function DigitalerProduktpass() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--matrix relative min-h-[55vh] flex items-end pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">Digitaler Produktpass</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">03 Circular Business</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Digitaler<br />
              <span className="text-brand-600">Produktpass</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-8">
              Die EU macht den Digitalen Produktpass verpflichtend. Sustainista hilft Unternehmen,
              Datenstruktur, Lieferkette und Umsetzung rechtzeitig und ohne unnötigen Aufwand zu meistern.
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
                Kostenloses Erstgespräch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:stefan.bauer@example.invalid?subject=Digitaler Produktpass Anfrage" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                stefan.bauer@example.invalid
              </a>
              <a href="#prozess" className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Wie es funktioniert
              </a>
              <a href="https://dpp.example.invalid/de" className="inline-flex items-center gap-2 border border-brand-300 hover:border-brand-500 text-brand-700 hover:text-brand-800 px-6 py-3 rounded-btn text-sm font-semibold transition-all bg-canvas">
                Zur DPP-Plattform
              </a>
            </div>
          </div>
        </section>

        <ComplianceCheckTeaser variant="dpp" />

        {/* Was ist der DPP */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="eyebrow mb-4">Was ist der DPP?</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Ein digitales Produktgedächtnis,<br />
                  <span className="text-ink-tertiary">gesetzlich verankert.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  Der Digitale Produktpass (DPP) ist ein strukturierter Datensatz, der Informationen
                  über Material, Herkunft, Reparierbarkeit, CO₂-Fußabdruck und Entsorgung eines
                  Produkts maschinenlesbar verfügbar macht, verknüpft über einen QR-Code oder Datamatrix.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">
                  Die EU führt den DPP im Rahmen der <strong className="text-ink">Ökodesign-Verordnung (ESPR)</strong> und
                  der{" "}
                  <Link href="/produkte/batteriepass" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
                    EU Battery Regulation
                  </Link>{" "}
                  schrittweise ein.
                  Unternehmen, die jetzt die Datengrundlage aufbauen, ersparen sich teure
                  Last-Minute-Umsetzungen.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">
                  Für Modeunternehmen mit Restbeständen und Retouren ergänzt{" "}
                  <Link href="/produkte/circular-stock-management" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
                    Sustainista Circular Stock
                  </Link>{" "}
                  den DPP um Prozesse und Nachweise für das ESPR-Vernichtungsverbot unverkaufter Ware.
                </p>
                <div className="flex flex-wrap gap-3">
                  {dppStats.map((s) => (
                    <div key={s.label} className="flex-1 bg-canvas border border-border rounded-card p-4 text-center shadow-ambient-low">
                      <p className="text-xl font-black text-ink mb-1">{s.value}</p>
                      <p className="text-marke text-ink-tertiary leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DPP Visual */}
              <div className="bg-canvas border border-border rounded-card p-8 shadow-ambient-low">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="eyebrow mb-1">Digitaler Produktpass</p>
                    <p className="text-base font-bold text-ink">Industriekomponente XR-500</p>
                    <p className="text-xs text-ink-tertiary font-mono mt-0.5">DPP-2026-AT-00841</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-btn px-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span className="text-marke font-bold text-brand-700">Beispiel</span>
                  </div>
                </div>

                <div className="border border-border rounded-card overflow-hidden mb-6">
                  {[
                    { k: "Material", v: "Recycled ABS 78%" },
                    { k: "CO₂-Fußabdruck", v: "12,4 kg CO₂e" },
                    { k: "Reparierbarkeit", v: "Klasse A" },
                    { k: "Herkunft", v: "AT / EU" },
                    { k: "Lifespan", v: "10 Jahre" },
                    { k: "End-of-Life", v: "Vollständig recycelbar" },
                  ].map((row, i) => (
                    <div key={row.k} className={`flex justify-between items-center px-4 py-3 ${i > 0 ? "border-t border-border" : ""}`}>
                      <span className="text-xs text-ink-tertiary">{row.k}</span>
                      <span className="text-xs font-semibold text-ink-secondary">{row.v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 bg-surface rounded-card p-4 border border-border">
                  <div className="w-12 h-12 bg-ink rounded-btn flex items-center justify-center flex-shrink-0">
                    <svg className="w-9 h-9 text-canvas" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm8-2h7v7h-7V3zm2 2v3h3V5h-3zm-10 8h7v7H3v-7zm2 2v3h3v-3H5zm8 0h2v2h-2v-2zm2-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 4h2v2h-2v-2zm4-2h2v2h-2v-2zm-2 2h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink">QR-Code scannen</p>
                    <p className="text-marke text-ink-tertiary">Vollständiger Pass für Käufer:innen & Behörden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VideoSection
          videoId="VZIXYxI82zM"
          eyebrow="Video-Podcast der Hochschule Burgenland"
          title="Dr. Stefan Bauer über den digitalen Produktpass"
        />

        {/* Zugriffsebenen */}
        <section className="py-24 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Wer sieht was</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Ein Code,<br />
                  <span className="text-ink-tertiary">drei Sichten.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Der Produktpass ist kein offenes Datenblatt. Kund:innen sehen Material und Klimawirkung,
                Reparaturbetriebe und Recycler zusätzlich Demontagedaten, Behörden die Nachweise. Wir legen
                diese Rechte im Datenmodell fest, bevor die erste Zeile befüllt wird.
              </p>
            </div>
            <DppAccessLayers />
          </div>
        </section>

        {/* Fachpublikation */}
        <section className="py-20 bg-brand-50 border-y border-brand-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/atz-cover-5-2026.png"
                  alt="Titelseite der ATZ (Automobiltechnische Zeitschrift), Ausgabe 5/2026"
                  width={190}
                  height={253}
                  className="w-[150px] h-auto rounded-card border border-brand-200 shadow-ambient-low"
                />
              </div>
              <div>
                <p className="eyebrow mb-3">Peer-Reviewed Fachpublikation</p>
                <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-[1.1] mb-4">
                  &bdquo;Datenbasierte Infrastruktur für zirkuläre Geschäftsmodelle&ldquo;
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-2 max-w-2xl">
                  Stefan Bauer, Kevin Lukas Kulle, Thomas Preindl, Bernhard Bergmair, erschienen in{" "}
                  <strong className="text-ink">ATZ (Automobiltechnische Zeitschrift)</strong>, Ausgabe 5/2026 (Springer Fachmedien).
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                  Aus dem Forschungsprojekt <strong className="text-ink">PACE-DPP</strong>: Der Digitale Produktpass als
                  Compliance-Werkzeug und Enabler datengestützter Geschäftsmodelle, mit Fokus auf verifizierbare
                  Produkthaltbarkeit und die batteriewirtschaftliche Anwendung ab 2027.
                </p>
                <a
                  href="https://doi.org/10.1007/s35148-026-2361-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
                >
                  Artikel bei Springer lesen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Partners />

        {/* Prozess */}
        <section id="prozess" className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Unser Vorgehen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-16">
              Von der Analyse<br />
              <span className="text-ink-tertiary">zum fertigen Produktpass.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-canvas border border-border rounded-card p-7 shadow-ambient-low">
                  <span className="text-3xl font-black text-ink-tertiary mb-4 block">{s.n}</span>
                  <h3 className="text-base font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              {/*
                Die Beispielpaesse auf der Plattform. Bis zum 16.09.2026 verlinkte
                diese Produktseite keinen einzigen veroeffentlichten Pass — wer
                wissen wollte, wie das Ergebnis aussieht, fand es hier nicht.
                Steht bewusst vor den Self-Checks: ein fertiger Pass beantwortet
                die erste Frage eines Einkaeufers, ein Fragebogen nicht.
              */}
              {/* Hauptlink ist die Live-Demo im geschützten Bereich (Zugang auf Anfrage),
                  daneben die öffentlichen Beispielpässe (Vorgabe 05.10.2026). */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-brand-50 border border-brand-200 rounded-card p-6 shadow-ambient-low">
                <div>
                  <p className="eyebrow mb-2">Live auf der Plattform</p>
                  <p className="text-base font-bold text-ink mb-1">Beispielpässe ansehen und selbst nachprüfen</p>
                  <p className="text-sm text-ink-secondary mb-2">Musterpässe aus vier Produktkategorien, darunter ein Industriespeicher. Wir rechnen mit tausenden veröffentlichten Pässen in 2027. Jeder Pass kommt mit Signatur, Prüfsumme, Versionshistorie, auflösbarer Aussteller-DID und maschinenlesbarer Ausgabe. Jede Zusicherung lässt sich mit einem Befehl gegenprüfen.</p>
                  <p className="text-xs text-ink-tertiary">
                    Den Zugang zur Live-Demo richten wir im Erstgespräch ein:{" "}
                    <a href="#kontakt" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">Termin vereinbaren</a>.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0 sm:items-end">
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 bg-surface border border-border text-ink-tertiary px-5 py-2.5 rounded-btn font-semibold text-sm cursor-not-allowed"
                  >
                    Live-Demo (In dieser Kursvorlage nicht enthalten)
                  </button>
                  <a href="https://dpp.example.invalid/de/dpp/beispiele" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm">
                    Zu den Beispielpässen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <Link
                href="/dpp-check"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-border rounded-card p-6 shadow-ambient-low hover:border-brand-300 transition-colors group"
              >
                <div>
                  <p className="eyebrow mb-2">Für Produkte & Hersteller</p>
                  <p className="text-base font-bold text-ink mb-1">DPP-Datencheck: Sind Ihre Produktdaten bereit für den Produktpass?</p>
                  <p className="text-sm text-ink-secondary">Kostenloser Self-Check zum Digitalen Produktpass: Datenmodell, Lieferkette und Phasenlogik im Überblick.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm flex-shrink-0 group-hover:gap-3 transition-all">
                  Zum DPP-Datencheck
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/batteriepass-check"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-border rounded-card p-6 shadow-ambient-low hover:border-brand-300 transition-colors group"
              >
                <div>
                  <p className="eyebrow mb-2">Für E-Autos & E-Bikes</p>
                  <p className="text-base font-bold text-ink mb-1">Batteriepass-Check: Sind Ihre E-Fahrzeugdaten verkaufsfit?</p>
                  <p className="text-sm text-ink-secondary">Kostenloser Self-Check zum Batteriepass: Pflicht ab 18. Februar 2027 nach EU Battery Regulation 2023/1542.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm flex-shrink-0 group-hover:gap-3 transition-all">
                  Zum Batteriepass-Check
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/produkte/digitaler-produktpass/call-for-projects"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-brand-50 border border-brand-200 rounded-card p-6 shadow-ambient-low hover:border-brand-400 transition-colors group"
              >
                <div>
                  <p className="eyebrow mb-2">Call for Projects · Wien</p>
                  <p className="text-base font-bold text-ink mb-1">Acht Pilotplätze: ein echter Produktpass für 1.000 Euro Eigenanteil</p>
                  <p className="text-sm text-ink-secondary">Kofinanziert über ÖkoBusiness Wien. Dazu die ganze Präsentation: Architektur des Passes, acht Kreislaufgeschäftsmodelle und das Ökosystem dahinter.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm flex-shrink-0 group-hover:gap-3 transition-all">
                  Zum Call for Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <DppPricing />

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Pflicht erfüllen,"
          titleB="Geschäft daraus machen."
          values={[
              { icon: ValueDoorOpen, title: "Marktzugang sichern", body: "Für betroffene Produktgruppen gilt: ohne Produktpass kein Verkauf in der EU. Wer früh startet, verhandelt mit Lieferanten aus der stärkeren Position." },
              { icon: ValueWrench, title: "Neue Erlöse im Lebenszyklus", body: "Reparatur, Ersatzteile und Second Life laufen über dieselben Daten. Der Pass wird zum Kanal für Services nach dem Verkauf." },
              { icon: ValueSmartphone, title: "Direkter Draht zum Endkunden", body: "Der QR-Code am Produkt erreicht Nutzer:innen ohne Umweg über den Handel, etwa für Registrierung, Pflege oder Rücknahme." },
          ]}
          testimonial={TESTIMONIALS.dpp}
          logos={false}
        />

        <ProductTrends product="Circular Business" label="dem Digitalen Produktpass" />

        {/* FAQ */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zum Digitalen Produktpass
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
            <p className="mt-8 text-xs text-ink-tertiary leading-relaxed max-w-[68ch]">{RECHTSSTAND_HINWEIS}</p>
          </div>
        </section>

        {/* Regelungslandkarte */}
        <section className="py-16 bg-canvas border-t border-border">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Link
              href="/produkte/batteriepass/regelungslandkarte"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-border rounded-card p-6 hover:border-brand-300 transition-colors group"
            >
              <div>
                <p className="eyebrow mb-2">Zum Nachlesen</p>
                <p className="text-base font-bold text-ink mb-1">
                  Regelungslandkarte: wie Gesetze, Normen und 522 Anforderungen zusammenhängen
                </p>
                <p className="text-sm text-ink-secondary">
                  Batterieverordnung, Ökodesign-Verordnung, CEN/CENELEC-Normen, DKE SPEC 99100 und JRC-Methodik im
                  Überblick, auf Deutsch und Englisch. Vollfassung im geschützten Bereich.
                </p>
              </div>
              <span className="text-brand-600 font-semibold text-sm whitespace-nowrap group-hover:text-brand-700">Ansehen</span>
            </Link>
          </div>
        </section>

        {/* Präsentation zum Weitergeben */}
        <section className="py-16 bg-white border-t border-border">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-canvas border border-border rounded-card p-6">
              <div>
                <p className="eyebrow mb-2">Zum Weitergeben</p>
                <p className="text-base font-bold text-ink mb-1">
                  Kurzpräsentation: Digitaler Produktpass und SAP-Anbindung
                </p>
                <p className="text-sm text-ink-secondary">
                  Elf Folien mit Leistungsumfang, Integrationsfluss und Marktvergleich (In dieser Kursvorlage nicht enthalten).
                </p>
              </div>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 bg-surface border border-border text-ink-tertiary px-4 py-2 rounded-btn font-semibold text-xs uppercase tracking-wider cursor-not-allowed flex-shrink-0"
              >
                Nicht enthalten
              </button>
            </div>
          </div>
        </section>

        <ElektroShowcase compact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
