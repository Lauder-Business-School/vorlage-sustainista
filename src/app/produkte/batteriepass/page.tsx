import Navigation from "@/components/Navigation";
import BatteryPassDecisionTree from "@/components/compliance/BatteryPassDecisionTree";
import ComplianceCheckTeaser from "@/components/compliance/ComplianceCheckTeaser";
import ProductTrends from "@/components/trendradar/ProductTrends";
import ElektroShowcase from "@/components/ElektroShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Partners from "@/components/Partners";
import Link from "next/link";
import type { Metadata } from "next";
import { RECHTSSTAND_HINWEIS, RECHTSSTAND_ISO } from "@/lib/rechtsstand";
import { ShieldCheck, Calendar, QrCode, Users, Battery, ArrowRight } from "lucide-react";
import BatteryDataMap from "@/components/viz/BatteryDataMap";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { BatteryCharging as ValueBatteryCharging, CalendarCheck as ValueCalendarCheck, Handshake as ValueHandshake } from "lucide-react";

const BESCHREIBUNG =
  "Ab 18. Februar 2027 braucht jede neue Industriebatterie über 2 kWh, jede E-Auto- und LV-Batterie einen digitalen Batteriepass. Sustainista setzt ihn um, vom Datenaudit bis zum veröffentlichten Pass.";

// Vorschaubild: opengraph-image.tsx in diesem Ordner (1200x630, Next setzt og:image und twitter:image)
export const metadata: Metadata = {
  title: { absolute: "Batteriepass ab 2027: Pflicht für Speicher, E-Autos, E-Bikes" },
  description:
    BESCHREIBUNG,
  keywords:
    "Batteriepass, Battery Passport, EU-Batterieverordnung, Digitaler Produktpass, State of Health, E-Auto Gebrauchtwagen, E-Bike Refurbishment, Kreislaufwirtschaft, KMU",
  alternates: { canonical: "https://www.example.invalid/produkte/batteriepass" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/batteriepass",
    title: "Batteriepass 2027: Pflicht für Speicher, E-Autos und E-Bikes | Sustainista",
    description:
      BESCHREIBUNG,
  },
  twitter: {
    card: "summary_large_image",
    title: "Batteriepass 2027: Pflicht für Speicher, E-Autos und E-Bikes | Sustainista",
    description: BESCHREIBUNG,
  },
};

const faqs = [
  {
    q: "Ab wann ist der Batteriepass wirklich verpflichtend?",
    a: "Ab 18. Februar 2027 für jede neu in Verkehr gebrachte oder in Betrieb genommene Elektrofahrzeug-, LV- (E-Bike, E-Scooter) und Industriebatterie über 2 kWh; bereits verkaufte Batterien brauchen keinen Pass. Schon heute gelten CE-Kennzeichnung, Sicherheits- und BMS-Anforderungen (seit 18. August 2024) sowie Herstellerregister und Sammelsymbol (seit 18. August 2025). Das allgemeine Etikett und die CO₂-Angaben kommen frühestens 2028.",
  },
  {
    q: "Betrifft das auch Händler, oder nur den Erzeuger?",
    a: "Die Hauptverantwortung liegt beim Inverkehrbringer, meist der Marke auf dem Produkt. Händler, Leasinggesellschaften und Refurbisher tragen aber praktische Mitverantwortung, insbesondere beim Wiederverkauf gebrauchter E-Fahrzeuge, wo Batteriedaten zum zentralen Verkaufsargument werden.",
  },
  {
    q: "Was ist der Unterschied zwischen Batteriepass und Digitalem Produktpass (DPP)?",
    a: "Der Batteriepass ist die erste verpflichtende Ausprägung des Digitalen Produktpasses, der EU-weit im Rahmen der Ökodesign-Verordnung (ESPR) schrittweise auf weitere Produktkategorien ausgeweitet wird. Wer jetzt Batteriedaten strukturiert, baut die Basis für spätere DPP-Pflichten in anderen Produktbereichen gleich mit auf.",
  },
  {
    q: "Gilt das auch für kleine Unternehmen, oder nur für Großkonzerne?",
    a: "Die eigentliche Passpflicht gilt unabhängig von der Unternehmensgröße für alle betroffenen Batterien. Nur die zusätzliche, umfangreichere Sorgfaltspflicht nach Art. 48 ff. betrifft ausschließlich Unternehmen mit mehr als 40 Mio. € Konzernumsatz, für die meisten KMU somit nicht relevant.",
  },
  {
    q: "Was kostet die Umsetzung eines Batteriepasses?",
    a: "Abhängig vom Umfang der bereits vorhandenen Daten und der Anzahl betroffener Batterie- bzw. Fahrzeugmodelle. Der kostenlose Selbstcheck gibt eine erste Einschätzung, danach folgt ein individuelles Angebot.",
  },
  {
    q: "Brauchen wir eine eigene IT-Infrastruktur?",
    a: "Nein. Sustainista übernimmt Datenmodell, technische Umsetzung und QR-Code-Bereitstellung, ohne dass intern eine eigene Software- oder Compliance-Abteilung aufgebaut werden muss.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/batteriepass",
      name: "Batteriepass",
      description:
        "Der digitale Batteriepass ist der erste verpflichtende Digitale Produktpass: ab 18. Februar 2027 Marktzugangsvoraussetzung nach EU-Batterieverordnung 2023/1542.",
      url: "https://www.example.invalid/produkte/batteriepass",
      isPartOf: { "@id": "https://www.example.invalid/produkte" },
      lastReviewed: RECHTSSTAND_ISO,
      dateModified: RECHTSSTAND_ISO,
      inLanguage: "de",
      breadcrumb: { "@id": "https://www.example.invalid/produkte/batteriepass#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/batteriepass#service",
      name: "Digitaler Batteriepass nach EU-Batterieverordnung 2023/1542",
      description:
        "Sustainista setzt den digitalen Batteriepass nach Anhang XIII um: Datenmodell, Zustandsdaten und QR-Code-Verlinkung. Pflicht ab 18. Februar 2027; CO₂- und Rezyklatangaben folgen frühestens 2028.",
      provider: { "@id": "https://www.example.invalid/#organization" },
      areaServed: [
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Schweiz" },
      ],
      serviceType: "Digitaler Batteriepass",
      isRelatedTo: { "@id": "https://www.example.invalid/produkte/digitaler-produktpass#service" },
      url: "https://www.example.invalid/produkte/batteriepass",
    },
    {
      "@id": "https://www.example.invalid/produkte/batteriepass#breadcrumb",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.example.invalid" },
        { "@type": "ListItem", position: 2, name: "Produkte", item: "https://www.example.invalid/produkte" },
        { "@type": "ListItem", position: 3, name: "Batteriepass", item: "https://www.example.invalid/produkte/batteriepass" },
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

const badges = [
  { icon: ShieldCheck, label: "Entlang Anhang XIII der Batterieverordnung" },
  { icon: Calendar, label: "Pflicht ab 18. Februar 2027" },
  { icon: QrCode, label: "QR-Code & maschinenlesbar" },
  { icon: Users, label: "Kein eigenes IT-Team nötig" },
];

const timeline = [
  { date: "seit 18. Februar 2024", what: "EU-Batterieverordnung gilt" },
  { date: "seit 18. August 2024", what: "CE-Kennzeichnung, Sicherheit stationärer Speicher (Art. 12), Unterlagen zu Leistung und Haltbarkeit (Art. 10 Abs. 1), Lesezugriff auf das Batteriemanagementsystem (Art. 14)" },
  { date: "seit 18. August 2025", what: "Herstellerregister, Rücknahme und Symbol der getrennten Sammlung (Art. 13 Abs. 4)" },
  { date: "seit 20. Juli 2026", what: "EU-Register für Produktpässe in Betrieb, mit Testumgebung und API; Batteriepässe registrierbar ab 18. Februar 2027" },
  { date: "ab 18. Februar 2027", what: "Batteriepass und QR-Code für jede neu in Verkehr gebrachte LV-, Industrie- (über 2 kWh) und Elektrofahrzeugbatterie", strong: true },
  { date: "ab 18. August 2027", what: "Sorgfaltspflichten in der Lieferkette für Wirtschaftsakteure ab 40 Mio. € Nettoumsatz (Art. 48, VO (EU) 2025/1561)" },
  { date: "frühestens 2028", what: "allgemeines Etikett (Art. 13 Abs. 1), CO₂-Erklärung und Leistungsklassen für Industriebatterien (Art. 7), jeweils abhängig von noch nicht erlassenen Rechtsakten" },
  { date: "frühestens Oktober 2028", what: "Dokumentation der Rezyklatanteile (Art. 8 Abs. 1)" },
  { date: "ab 18. August 2031", what: "Mindestrezyklatanteile: 16 % Kobalt, 85 % Blei, 6 % Lithium, 6 % Nickel (Art. 8 Abs. 2)" },
];

const passportRows = [
  { label: "Fahrzeug / E-Bike", value: "Beispielmodell" },
  { label: "State of Health", value: "86 %" },
  { label: "Kapazität", value: "47,2 kWh" },
  { label: "Ladezyklen", value: "412" },
  { label: "Wartungsstatus", value: "geprüft" },
  { label: "Nachweisstatus", value: "digital dokumentiert" },
  { label: "QR-Code", value: "verfügbar" },
];

const zielgruppen = [
  {
    title: "Produzenten von Industriebatterien & stationären Speichern",
    body: "Industriebatterien über 2 kWh, darunter jedes stationäre Batterie-Energiespeichersystem, brauchen ab 18. Februar 2027 für jede neu in Verkehr gebrachte Einheit einen Pass, unabhängig vom Endkundensegment.",
  },
  {
    title: "EV-Gebrauchtwagenhändler & Autohäuser",
    body: "Der Akku entscheidet über Vertrauen, Preis und Wiederverkaufswert eines gebrauchten E-Autos. Ein digitaler Batteriepass mit State-of-Health-Daten macht diesen Wert erstmals objektiv nachvollziehbar, statt reiner Verkäuferaussage.",
  },
  {
    title: "E-Bike-Refurbisher & Verleihbetriebe",
    body: "Saisonale Rückläufer, Leasingrückläufer, Verleihflotten: Akkuzustand ist das zentrale Verkaufs- und Vertrauensargument beim Weiterverkauf. Ein strukturierter Nachweis ersetzt das bisherige \"vertrauen Sie mir\".",
  },
  {
    title: "Leasinggesellschaften & Flottenbetreiber",
    body: "Restwertbestimmung, Rückgabeprozesse und Zweitverwertung von E-Fahrzeugflotten brauchen belastbare, prüfbare Batteriedaten, nicht erst ab 2027, sondern schon heute als Wettbewerbsvorteil.",
  },
];

const leistungen = [
  {
    title: "Betroffenheitsanalyse",
    body: "Klärung, ob und welche Ihrer Produkte unter EV-, LMT- oder Industriebatterie-Kategorie fallen und welche Fristen für Sie konkret gelten.",
  },
  {
    title: "Datenaudit & Lückenanalyse",
    body: "Wir erheben, welche der ca. 80 bis 90 geforderten Attribute bereits vorhanden sind (aus ERP, Lieferantendaten, Prüfprotokollen) und wo Lücken bestehen.",
  },
  {
    title: "State-of-Health- & Zustandsdokumentation",
    body: "Strukturierte Erfassung von Kapazität, Ladezyklen und Batteriezustand als Verkaufs- und Vertrauensargument, insbesondere für Gebrauchtfahrzeuge und Refurbishment.",
  },
  {
    title: "Lieferantendaten-Prozess",
    body: "Standardisierte Abfrage von Material- und Herkunftsdaten bei Zell- und Batterieherstellern, automatisiert statt manuell per E-Mail.",
  },
  {
    title: "QR-Code & digitale Bereitstellung",
    body: "Technische Umsetzung des Passes inklusive QR-Code-/Datamatrix-Verknüpfung und gestuftem Zugriff für Käufer:innen, Werkstätten und Behörden.",
  },
  {
    title: "Fördercheck",
    body: "Prüfung, ob der Einstieg über ÖkoBusiness Wien oder Ökomanagement NÖ mitfinanziert werden kann.",
  },
];

const vorgehen = [
  { n: "01", title: "Betroffenheit & Scope klären", body: "Welche Batterien, welche Fristen, welche Datenpunkte betreffen Sie konkret." },
  { n: "02", title: "Datenaudit", body: "Vorhandene Daten aus ERP, Lieferantenunterlagen und Prüfprotokollen erfassen, Lücken sichtbar machen." },
  { n: "03", title: "Datenmodell aufbauen", body: "Strukturierte, EU-konforme Datenbasis je Modell-, Batch- und Item-Ebene." },
  { n: "04", title: "Pass erstellen & veröffentlichen", body: "QR-Code-verlinkter Batteriepass, bereit für Käufer:innen, Werkstätten und Behörden." },
  { n: "Laufend", title: "Aktualisierung", body: "State-of-Health, Ladezyklen und Zustandsdaten werden über den Lebenszyklus der Batterie fortlaufend aktualisiert." },
];

export default function Batteriepass() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--batterie relative min-h-[55vh] flex items-end pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">Produkte</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">Batteriepass</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">02 Circular Business</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Battery Passport Light:<br />
              <span className="text-brand-600">der digitale Batteriepass</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-8">
              Ab 18. Februar 2027 braucht jede Elektrofahrzeug-, LV- (E-Bike, E-Scooter) und
              Industriebatterie über 2 kWh, die in der EU in Verkehr gebracht oder in Betrieb genommen
              wird, einen digitalen Batteriepass (Art. 77). Bereits verkaufte Batterien brauchen
              keinen. Sustainista baut die Datenbasis dafür auf: pragmatisch, ohne eigene IT-Abteilung.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-surface border border-border rounded-card px-4 py-3">
                  <Icon className="w-4 h-4 text-brand-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-ink leading-snug">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/batteriepass-check" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                Kostenlosen Batteriepass-Check starten
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="#kontakt" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Kostenloses Erstgespräch
              </a>
              <a href="mailto:stefan.bauer@example.invalid?subject=Batteriepass Anfrage" className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                stefan.bauer@example.invalid
              </a>
              <a href="https://dpp.example.invalid/de" className="inline-flex items-center gap-2 border border-brand-300 hover:border-brand-500 text-brand-700 hover:text-brand-800 px-6 py-3 rounded-btn text-sm font-semibold transition-all bg-canvas">
                Zur DPP-Plattform
              </a>
            </div>
          </div>
        </section>

        <ComplianceCheckTeaser variant="battery" />

        <BatteryPassDecisionTree />

        {/* Warum jetzt */}
        <section id="warum-jetzt" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Warum jetzt?</p>
            {/* &shy; trennt nur mobil (Wort ist breiter als 320px); sm:hyphens-none hält das
                Desktop-Bild unverändert */}
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6 max-w-[22ch] sm:hyphens-none">
              Der Batteriepass wird zur Marktzugangs&shy;voraussetzung, nicht zur Kür.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-5">
              Die EU-Batterieverordnung (Verordnung (EU) 2023/1542) ist seit dem 17. August 2023 in
              Kraft. Sie verpflichtet die Wirtschaftsakteure, die bestimmte Batterien in Verkehr
              bringen, Angaben zu Modell, Zusammensetzung, Leistung, Haltbarkeit und Entsorgung über
              einen digitalen, per QR-Code verknüpften Datensatz bereitzustellen: den Batteriepass.
              Verpflichtet ist in der Regel der Erzeuger nach Art. 3 Nr. 33; dazu zählt auch, wer
              Batterien fertigen lässt und unter eigener Marke vermarktet. Sorgfaltspflicht-, CO₂-
              und Rezyklatangaben kommen ab August 2027 schrittweise hinzu.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed mb-3">Betroffen sind:</p>
            <ul className="space-y-3 max-w-[68ch] mb-8">
              <li className="text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink">Elektrofahrzeugbatterien (Traktionsbatterien)</strong>: E-Autos, E-Transporter, elektrische Nutzfahrzeuge
              </li>
              <li className="text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink">LMT-Batterien</strong> (Light Means of Transport): E-Bikes, E-Scooter, E-Roller, unabhängig von der Kapazität
              </li>
              <li className="text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink">Industriebatterien über 2 kWh</strong>: stationäre Speicher, Maschinen, Kommunikationsinfrastruktur
              </li>
            </ul>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-10">
              Den Pass schuldet, wer die Batterie in Verkehr bringt. Händler, Leasinggesellschaften
              und Aufbereiter nutzen seine Daten beim Wiederverkauf, und wer eine Batterie umnutzt
              oder wiederaufbereitet und neu in Verkehr bringt, übernimmt die Verantwortung für den
              Pass (Art. 77).
            </p>

            <h3 className="text-lg font-semibold text-ink mb-4">Timeline im Überblick</h3>
            <div className="border border-border rounded-card overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-ink">Datum</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Was passiert</th>
                  </tr>
                </thead>
                <tbody>
                  {timeline.map((row, i) => (
                    <tr key={row.date} className={i > 0 ? "border-t border-border" : ""}>
                      <td className={`px-4 py-3 whitespace-nowrap align-top ${row.strong ? "font-bold text-ink" : "text-ink-secondary"}`}>{row.date}</td>
                      <td className={`px-4 py-3 ${row.strong ? "font-bold text-ink" : "text-ink-secondary"}`}>{row.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed max-w-[68ch]">
              {RECHTSSTAND_HINWEIS}
            </p>
          </div>
        </section>

        {/* Inhalt Batteriepass */}
        <section id="inhalt-batteriepass" className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Ein digitales Gedächtnis<br />
                  <span className="text-ink-tertiary">für jede einzelne Batterie</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  Der Batteriepass ist kein einmaliges Zertifikat, sondern ein Datensatz, der über den
                  gesamten Lebenszyklus der Batterie mitgeführt und aktualisiert wird, von der
                  Rohstoffgewinnung bis zum Recycling. Zugänglich über einen QR-Code oder
                  Datamatrix-Code auf der Batterie oder dem Endgerät.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  Laut Anhang XIII und Art. 77 der Batterieverordnung umfasst der vollständige Datensatz
                  rund 80 bis 90 Attribute, gegliedert in:
                </p>
                <ul className="space-y-2.5 mb-5">
                  {[
                    "Allgemeine Batterie- und Herstellerinformationen: Modell, Seriennummer, Hersteller, Kategorie",
                    "Materialzusammensetzung & kritische Rohstoffe: Herkunft, Anteile, Recyclatgehalt",
                    "CO₂-Fußabdruck und Leistungsklasse: sobald die delegierten Rechtsakte gelten, frühestens 2028",
                    "Leistungs- und Haltbarkeitsdaten: Kapazität, State of Health, Ladezyklen, erwartete Lebensdauer",
                    "Rückverfolgbarkeit in der Lieferkette: Sorgfaltspflicht-Nachweise, Herkunftsnachweise",
                    "Reparatur, Wiederverwendung, Recycling: Demontagehinweise, Second-Life-Eignung, Entsorgungsdaten",
                  ].map((item) => (
                    <li key={item} className="text-sm text-ink-secondary leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Die Speicherung erfolgt dezentral bei den verantwortlichen Wirtschaftsakteuren, nicht
                  zentral bei der EU. Die Aktualisierungspflicht kann vertraglich an Dritte übertragen
                  werden, etwa an spezialisierte Dienstleister wie Sustainista.
                </p>
              </div>

              <div className="bg-brand-700 text-brand-50 rounded-card p-8" role="group" aria-labelledby="battery-passport-light-heading">
                <div className="flex items-center gap-2.5 mb-5">
                  <Battery className="w-4 h-4 text-brand-300" aria-hidden="true" />
                  <p id="battery-passport-light-heading" className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                    Beispiel: Battery Passport Light
                  </p>
                </div>
                <div className="divide-y divide-brand-50/10">
                  {passportRows.map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2.5 text-sm">
                      <span className="text-brand-200">{row.label}</span>
                      <strong className="font-semibold text-white">{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14">
              <BatteryDataMap />
            </div>
          </div>
        </section>

        {/* Zielgruppen */}
        <section id="zielgruppen" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Für wen ist das relevant?
            </h2>
            <div className="space-y-8">
              {zielgruppen.map((z) => (
                <div key={z.title}>
                  <h3 className="text-lg font-semibold text-ink mb-2">{z.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch]">{z.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speicherpass. Öffentlich verlinkt ist nur der neutrale Industriespeicher-Demopass;
            Musterpässe mit Kundenbezug zeigen wir nur im Termin bzw. hinter dem Passwort
            der Live-Demo (Vorgabe 05.10.2026). */}
        <section id="speicherpass" className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Für Hersteller stationärer Speicher</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6 max-w-[24ch]">
              So sieht ein veröffentlichter Speicherpass aus.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Ein Demopass für ein ortsfestes Batterie-Energiespeichersystem (LFP) mit Signatur,
              Versionshistorie und den Feldern, die Anhang XIII für Industriebatterien verlangt,
              darunter Round-Trip-Wirkungsgrad, Standby-Verluste und Zustandsdaten. Hersteller,
              Modell und Messwerte sind Demonstrationsdaten.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 bg-surface border border-border text-ink-tertiary px-6 py-3 rounded-btn font-semibold text-sm cursor-not-allowed"
              >
                Live-Demo (In dieser Kursvorlage nicht enthalten)
              </button>
              <a href="https://dpp.example.invalid/de/passport/ATDEMOIS2500001" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Demopass ansehen
              </a>
              <a href="https://dpp.example.invalid/de/dpp/beispiele" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                Alle Beispielpässe
              </a>
            </div>
            <p className="text-xs text-ink-tertiary leading-relaxed max-w-[68ch]">
              Den Zugang zur Live-Demo richten wir im Erstgespräch ein:{" "}
              <a href="#kontakt" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">Termin vereinbaren</a>{" "}
              oder per E-Mail an{" "}
              <a href="mailto:stefan.bauer@example.invalid?subject=Zugang Live-Demo Batteriepass" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">stefan.bauer@example.invalid</a>.
            </p>
          </div>
        </section>

        {/* Selbstcheck CTA */}
        <section id="selbstcheck-cta" className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="bg-brand-700 text-brand-50 rounded-card p-10 sm:p-12">
              <p className="eyebrow text-brand-50 mb-4">Für Händler, Refurbisher und Produzenten ohne eigene Compliance-Abteilung</p>
              <h2 className="font-bold tracking-tight text-white leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
                Batteriepass-Check: Sind Sie ready für 2027?
              </h2>
              <p className="text-brand-100 leading-relaxed max-w-[68ch] mb-7">
                Kostenloser Selbstcheck: direkt zum Download, ohne E-Mail-Adresse, ohne Anmeldung.
                In wenigen Minuten herausfinden, ob und in welchem Umfang Ihr Unternehmen von der
                Batteriepass-Pflicht betroffen ist und wo aktuell die größten Datenlücken liegen.
              </p>
              <Link href="/batteriepass-check" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 transition-colors text-canvas px-6 py-3 rounded-btn font-semibold text-sm">
                Zum Batteriepass-Check
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section id="leistungsumfang" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Leistungsumfang</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Was Sie erhalten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {leistungen.map((l) => (
                <div key={l.title} className="border border-border rounded-card p-6 bg-canvas shadow-ambient-low">
                  <h3 className="text-sm font-bold text-ink mb-2">{l.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorgehen */}
        <section id="vorgehen" className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Vorgehen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Von der Betroffenheit<br />
              <span className="text-ink-tertiary">zum veröffentlichten Pass.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {vorgehen.map((v) => (
                <div key={v.n} className="bg-canvas border border-border rounded-card p-6 shadow-ambient-low">
                  <span className="text-2xl font-black text-ink-tertiary mb-3 block">{v.n}</span>
                  <h3 className="text-sm font-bold text-ink mb-2">{v.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Mehr als Compliance."
          titleB="Mehr Wert pro Batterie."
          values={[
              { icon: ValueCalendarCheck, title: "Fristsicher zum 18.02.2027", body: "Strukturiert aufgebaute Daten statt Last-Minute-Projekt. Sie liefern pünktlich und bleiben lieferfähig gegenüber Ihren Abnehmern." },
              { icon: ValueBatteryCharging, title: "Höhere Restwerte", body: "Ein dokumentierter State of Health macht gebrauchte Batterien bewertbar und steigert ihren Wert für Wiederverkauf und Second Life." },
              { icon: ValueHandshake, title: "Vertrauen beim Kunden", body: "Kund:innen sehen Herkunft, Rezyklatanteil und Zustand. Das schafft Vertrauen und stützt Ihren Preis." },
          ]}
          testimonial={TESTIMONIALS.batterie}
          logos={false}
        />

        <ProductTrends product="Battery Passport Light" label="dem Batteriepass" />

        {/* FAQ */}
        {/* Einordnung: erster verpflichtender DPP */}
        <section className="py-20 bg-brand-50 border-y border-brand-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Einordnung</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6 max-w-[22ch]">
              Der Batteriepass ist der erste verpflichtende Digitale Produktpass.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-4 max-w-[68ch]">
              Die EU führt den{" "}
              <Link href="/produkte/digitaler-produktpass" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
                Digitalen Produktpass
              </Link>{" "}
              schrittweise über Produktkategorien ein. Batterien kommen zuerst: Ab 18. Februar 2027
              greift die Pflicht nach EU-Batterieverordnung 2023/1542, während Textilien, Elektronik
              und Möbel über die ESPR erst zwischen 2027 und 2030 folgen.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch]">
              Technisch ist ein Batteriepass damit kein Sonderfall, sondern die erste scharf gestellte
              Ausprägung derselben Infrastruktur: dieselbe Datenstruktur, dieselbe API, derselbe
              QR-Code-Mechanismus. Wer den Batteriepass sauber aufsetzt, hat die Grundlage für alle
              weiteren Produktkategorien bereits gelegt.
            </p>
          </div>
        </section>

        {/* Preise */}
        <section id="preise" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Preise</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Dieselben Konditionen<br />
              <span className="text-ink-tertiary">wie für jeden Digitalen Produktpass.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-10">
              Ein Batteriepass ist technisch eine DPP-Veröffentlichung und wird genauso abgerechnet.
              Kein Aufschlag, keine eigene Preisliste. Die Tarife nennen wir auf Anfrage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { name: "Free", body: "5 Batteriepässe zum Kennenlernen, ohne Jahresvertrag." },
                { name: "Core", body: "Produktivbetrieb mit REST-API, Massenimport und Versionshistorie." },
                { name: "Enterprise", body: "Größere Portfolios, Rollen und Governance, SAP-Connector als Add-on." },
              ].map((t) => (
                <div key={t.name} className="rounded-card border border-border bg-canvas p-7">
                  <p className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">{t.name}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-6">
              Die Veröffentlichung wird nutzungsabhängig und gestaffelt verrechnet: die ersten 5
              kostenlos, danach sinkt der Preis je Pass mit wachsendem Volumen. Für bereits
              veröffentlichte Pässe fällt keine wiederkehrende Gebühr an.
            </p>
            <div className="bg-surface border border-border rounded-card p-6 mb-6 max-w-[68ch]">
              <p className="text-base font-bold text-ink mb-2">
                Die Einrichtung läuft über uns, nicht über ein Anmeldeformular.
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Es gibt keine Selbstregistrierung. Wir richten Ihren Zugang, die Datenstruktur für Ihre
                Batteriekategorie und die technische Anbindung gemeinsam im Erstgespräch ein, inklusive
                der Frage, welche Pflichtfelder Sie heute schon liefern können und wo noch Daten fehlen.
                Erst danach entstehen laufende Kosten.
              </p>
            </div>
            <Link
              href="/produkte/digitaler-produktpass#preise"
              className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors bg-canvas"
            >
              Vollständige Preisübersicht und SAP-Anbindung
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Forschungsbasis */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Forschungsbasis</p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-[1.1] mb-6 max-w-[26ch]">
              Aus dem Forschungsprojekt PACE-DPP.
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-4 max-w-[68ch]">
              Sustainista ist Konsortialpartner von PACE-DPP, koordiniert von Virtual Vehicle und
              gefördert von BMK, FFG, BMWK und DLR-PT. Aus diesem Projekt stammt die Fachpublikation{" "}
              <em>&bdquo;Datenbasierte Infrastruktur für zirkuläre Geschäftsmodelle&ldquo;</em> in der
              ATZ (Automobiltechnische Zeitschrift), Ausgabe 5/2026 (Springer Fachmedien), mit Fokus
              auf die batteriewirtschaftliche Anwendung ab 2027.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://doi.org/10.1007/s35148-026-2361-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em]"
              >
                Artikel bei Springer lesen
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://dpp-austria.at/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors bg-canvas"
              >
                Konsortium auf dpp-austria.at
              </a>
            </div>
          </div>
        </section>

        <Partners />

        {/* Regelungslandkarte */}
        <section className="py-16 bg-white border-t border-border">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Link
              href="/produkte/batteriepass/regelungslandkarte"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-canvas border border-border rounded-card p-6 hover:border-brand-300 transition-colors group"
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

        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zum Batteriepass
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        <ElektroShowcase compact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
