import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElektroCallout from "@/components/ElektroCallout";
import VideoSection from "@/components/VideoSection";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Europe Tech Hackathon 2027 Wien · 7. & 8. Mai",
  description:
    "Europe Tech Hackathon am 7. und 8. Mai 2027 in der ÖBB Open Innovation Factory Wien. WarmUp Event der ViennaUP 2027 mit dem AIT Austrian Institute of Technology, KI-Challenges und Preisgeld.",
  keywords: [
    "Europe Tech Hackathon",
    "Hackathon Wien 2027",
    "ViennaUP 2027",
    "AIT Austrian Institute of Technology Hackathon",
    "KI Hackathon Österreich",
    "Open Innovation Challenge",
    "ÖBB Open Innovation Factory",
    "Innovation Challenge Unternehmen",
  ],
  alternates: { canonical: "https://www.example.invalid/hackathon" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/hackathon",
    title: "Europe Tech Hackathon 2027: 7. & 8. Mai, Wien",
    description:
      "Zwei Tage, echte Prototypen, Preisgeld. WarmUp Event der ViennaUP 2027 in der ÖBB Open Innovation Factory Wien. Unternehmen bringen ihre eigene Challenge ein.",
    images: [{ url: "https://www.example.invalid/hackathon-2026.jpg", width: 1200, height: 630, alt: "Europe Tech Hackathon 2027 in Wien" }],
  },
};

// FAQ deckt reale Rückfragen aus der Partneransprache ab und ist
// im Seiteninhalt sichtbar, Grundvoraussetzung für FAQPage-Markup.
const faqs = [
  {
    q: "Wann und wo findet der Europe Tech Hackathon 2027 statt?",
    a: "Am Freitag, 7. und Samstag, 8. Mai 2027 in der ÖBB Open Innovation Factory in Wien. Der Hackathon läuft als WarmUp Event unmittelbar vor der ViennaUP 2027, dem Startup-Festival der Stadt Wien.",
  },
  {
    q: "Was kostet die Teilnahme?",
    a: "Die Teilnahme ist für Teilnehmende kostenlos. Die Plätze sind begrenzt, die Anmeldung startet nach dem Partner Announcement im November 2026.",
  },
  {
    q: "Wer kann teilnehmen?",
    a: "Studierende, Entwickler:innen, Softwareentwickler:innen, Designer:innen, Data Analysts, Gründer:innen und Start-ups. Vorkenntnisse in KI sind willkommen, aber keine Bedingung. Teams bilden sich vor Ort entlang der Challenges.",
  },
  {
    q: "Wie hoch ist das Preisgeld?",
    a: "Die drei besten Teams erhalten 2.000 Euro, 1.000 Euro und 500 Euro. Der Preistopf wächst mit den Unternehmenspartnerschaften, zusätzliche Partner-Awards kommen dazu.",
  },
  {
    q: "Wie wird bewertet?",
    a: "Nach sechs veröffentlichten Kriterien: Technologie (30 Prozent), Problem-Fit (20 Prozent), Design und UX (15 Prozent), Business Model (15 Prozent), Impact und Nachhaltigkeit (10 Prozent) sowie Pitch und Demo (10 Prozent).",
  },
  {
    q: "Was bringt eine Partnerschaft meinem Unternehmen?",
    a: "Sie bringen eine eigene Innovation Challenge ein und bekommen dafür Konzepte und erste Prototypen. Dazu kommen HR und Talent Scouting, weil Sie Kandidat:innen zwei Tage lang beim Arbeiten sehen, sowie Kommunikation und PR im ViennaUP-Umfeld mit rund einer Million Impressions.",
  },
  {
    q: "Was ist eine Innovation Challenge?",
    a: "Eine echte, offene Fragestellung aus Ihrem Unternehmen, konkret genug für zwei Tage Arbeit und offen genug für mehrere Lösungswege. Wir schärfen sie mit Ihnen in einem Briefing-Workshop, Sie geben das Briefing frei.",
  },
  {
    q: "Bis wann muss ich mich als Partner entscheiden?",
    a: "Vor dem Partner Announcement im November 2026, damit Ihr Unternehmen von Beginn an in der Kommunikation sichtbar ist. Danach läuft die Kampagne mit den bereits bestätigten Partnern.",
  },
  {
    q: "Wem gehören die Ergebnisse und Prototypen?",
    a: "Die Rechte an den Prototypen bleiben bei den Teams. Partner erhalten Erstzugang, Kontaktvermittlung und die Möglichkeit, eine Lösung im Anschluss gemeinsam weiterzuentwickeln.",
  },
  {
    q: "Seit wann gibt es den Europe Tech Hackathon?",
    a: "Seit 2022. Er ist seither ein fester Bestandteil der ViennaUP und wird von Sustainista veranstaltet. Die letzten Ausgaben erreichten über 100 Teilnehmende, 12 Teams im Pitch und mehr als 300 Gäste beim Pitch-Event.",
  },
];

const SITE = "https://www.example.invalid";

const hackathonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}/hackathon`,
      "name": "Europe Tech Hackathon 2027",
      "description":
        "Europe Tech Hackathon am 7. und 8. Mai 2027 in der ÖBB Open Innovation Factory Wien, WarmUp Event der ViennaUP 2027.",
      "url": `${SITE}/hackathon`,
      "isPartOf": { "@id": `${SITE}/#website` },
      "lastReviewed": "2026-08-27",
      "inLanguage": "de",
      "breadcrumb": { "@id": `${SITE}/hackathon#breadcrumb` },
    },
    {
      "@type": "Event",
      "@id": `${SITE}/hackathon#event`,
      "name": "Europe Tech Hackathon 2027",
      "description":
        "Zweitägiger Hackathon zu Künstlicher Intelligenz, Nachhaltigkeit, Kreislaufwirtschaft und Open Innovation. WarmUp Event der ViennaUP 2027 in der ÖBB Open Innovation Factory Wien.",
      "startDate": "2027-05-07T09:00:00+02:00",
      "endDate": "2027-05-08T20:00:00+02:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "isAccessibleForFree": true,
      "maximumAttendeeCapacity": 300,
      "inLanguage": ["de", "en"],
      "location": {
        "@type": "Place",
        "name": "ÖBB Open Innovation Factory",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Joseph-Roth-Gasse 5",
          "postalCode": "1020",
          "addressLocality": "Wien",
          "addressRegion": "Wien",
          "addressCountry": "AT",
        },
      },
      "superEvent": { "@type": "Event", "name": "ViennaUP 2027", "url": "https://viennaup.com/" },
      "organizer": { "@id": `${SITE}/#organization` },
      "sponsor": {
        "@type": "Organization",
        "name": "AIT Austrian Institute of Technology",
        "url": "https://www.ait.ac.at/",
      },
      "offers": {
        "@type": "Offer",
        "name": "Teilnahme am Europe Tech Hackathon 2027",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/PreOrder",
        "url": `${SITE}/hackathon#anmelden`,
        "validFrom": "2026-11-01T00:00:00+01:00",
      },
      "image": [`${SITE}/hackathon-2026.jpg`],
      "url": `${SITE}/hackathon`,
      "keywords":
        "Hackathon Wien, Europe Tech Hackathon, ViennaUP 2027, KI Hackathon, Open Innovation Challenge",
      "about": [
        "Künstliche Intelligenz",
        "Open Innovation",
        "Nachhaltigkeit",
        "Kreislaufwirtschaft",
        "Digitaler Produktpass",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/hackathon#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": SITE },
        { "@type": "ListItem", "position": 2, "name": "Europe Tech Hackathon 2027", "item": `${SITE}/hackathon` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/hackathon#faq`,
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};


// Fuer 2027 stehen noch keine konkreten Challenges fest.
// Diese drei Themenfelder rahmen, worin die Partner-Challenges entstehen.
const tracks = [
  {
    num: "Challenge-Feld 1",
    title: "Artificial Intelligence",
    body:
      "Agenten, Assistenzsysteme und angewandte KI. Der Schwerpunkt der letzten Ausgaben und der Grund, warum wir zunehmend Teams erreichen, die AI-native arbeiten und in kurzer Zeit Lauffähiges bauen.",
  },
  {
    num: "Challenge-Feld 2",
    title: "Nachhaltigkeit & Kreislaufwirtschaft",
    body:
      "Digitaler Produktpass, Batteriepass, ESG-Daten und Product Carbon Footprint. Reale Datenprobleme aus Produktion, Handel und Lieferkette.",
  },
  {
    num: "Challenge-Feld 3",
    title: "Open Innovation aus Unternehmen",
    body:
      "Die offene Fragestellung eines Partnerunternehmens. Wer eine Challenge einbringt, besetzt dieses Feld mit dem eigenen Thema und definiert, woran die Teams arbeiten.",
  },
];

// Die drei Nutzenachsen aus der Partneransprache: Innovation, HR, Kommunikation.
const pillars = [
  {
    tag: "Innovation",
    title: "Ihre Challenge, echte Lösungsansätze.",
    body:
      "Sie definieren ein reales Problem aus Ihrem Unternehmen. Die Teams arbeiten im Open Innovation Contest zwei Tage intensiv daran und liefern konkrete Konzepte und erste Prototypen, nicht Folien.",
    points: ["Eigene Innovation Challenge", "Konzepte und lauffähige Prototypen", "Neue Perspektiven von außen"],
  },
  {
    tag: "HR & Talent Scouting",
    title: "Talente arbeiten sehen, nicht Lebensläufe lesen.",
    body:
      "Zwei Tage lang beobachten Sie direkt, wie Menschen Probleme lösen, Technologien einsetzen, im Team arbeiten und Ideen wirklich umsetzen. Gerade bei Softwareentwicklung, AI Engineering und AI-nativen Profilen ist das ein Zugang, den kein Bewerbungsgespräch ersetzt.",
    points: ["Kandidat:innen zwei Tage in Aktion", "Gezielte Ansprache passender Profile", "Recruiting-Fläche vor Ort"],
  },
  {
    tag: "Kommunikation",
    title: "Sichtbarkeit im ViennaUP-Umfeld.",
    body:
      "Wir begleiten das Event mit Interviews vor Ort, Video-Content, Social Media und Medienberichterstattung. Partner, ihre Expert:innen und vor allem ihre Challenges und die daraus entstehenden Lösungen bekommen dabei gezielt Sichtbarkeit.",
    points: ["Interviews und Video-Content", "Social Media und Presse", "Präsenz im ViennaUP-Programm"],
  },
];

// Pakete bewusst ohne Preise, Konditionen klären wir im Gespräch.
const packages = [
  {
    name: "Community Partner",
    claim: "Präsenz und Zugang, ohne eigene Challenge.",
    badge: null,
    items: [
      "Logo auf Website, Kampagne, Bühne und Screens",
      "Tickets für Kick-off und Pitch-Event",
      "Recruiting-Tisch bei der HR-Networking-Session",
      "Ihre offenen Stellen im Teilnehmenden-Briefing",
      "Nennung in Nachbericht und Aftermovie",
      "Überblick über alle Teams und Prototypen nach dem Event",
    ],
  },
  {
    name: "Challenge Partner",
    claim: "Ihre Problemstellung, Ihr Jurysitz.",
    badge: "Empfohlen",
    items: [
      "Eigene Innovation Challenge inkl. Briefing-Workshop",
      "Expert:innen und Mentor:innen aus Ihrem Haus vor Ort",
      "Jurysitz beim Pitch-Event",
      "Gezielte Ansprache passender Start-ups und Entwickler:innen",
      "Videointerview und eigener LinkedIn-Beitrag",
      "Erstkontakt zu den Teams Ihrer Challenge",
    ],
  },
  {
    name: "Innovation Lead",
    claim: "Presenting Partner des Hackathons.",
    badge: "Exklusiv · 1 Platz",
    items: [
      "„powered by“ im Key Visual und in jeder Aussendung",
      "Bühnenzeit: Begrüßung und Preisübergabe",
      "Eigener Award unter Ihrem Namen",
      "Prime-Recruiting-Fläche und moderierte Talent-Session",
      "Follow-up-Workshop mit einem Gewinnerteam",
      "Content-Paket: Foto- und Videomaterial zur eigenen Nutzung",
    ],
  },
];

// Vorteile einer Partnerschaft, aus dem Call-for-Partners-Deck.
const benefits = [
  {
    n: "01",
    t: "HR & Recruiting",
    b: "Lernen Sie Programmierer:innen und Tech-Enthusiast:innen kennen, während sie arbeiten. HR-Messestand vor Ort, Ihre offenen Stellen im Teilnehmenden-Briefing.",
  },
  {
    n: "02",
    t: "Kommunikation & PR",
    b: "Positionieren Sie sich als innovatives Unternehmen: Videointerviews, LinkedIn-Kampagnen und Artikel in Innovations-Medien.",
  },
  {
    n: "03",
    t: "Produktentwicklung",
    b: "Entwickeln Sie mit den Teams neue Ideen, sind Sie hautnah dabei, wenn Prototypen entstehen, und validieren Sie beides direkt am Event.",
  },
  {
    n: "04",
    t: "Networking",
    b: "Verbinden Sie sich mit dem Tech-Ökosystem: Startups, Hochschulen, Entwickler:innen und die anderen Partner sitzen im selben Raum.",
  },
  {
    n: "05",
    t: "Mitarbeitende motivieren",
    b: "Laden Sie Ihr Team zum Kick-off oder zur Pitch-Präsentation ein und tragen Sie den Spirit des Hackathons ins Unternehmen.",
  },
  {
    n: "06",
    t: "Branded Event",
    b: "Ein eigenes Format innerhalb des Hackathons, etwa die Pizza-Party, inklusive Redezeit für Ihre Marke.",
  },
];

// Fahrplan bis zum Hackathon 2027.
const roadmap = [
  { when: "Sept. bis Okt. 2026", t: "Partnergespräche", b: "Wir klären Fit, Paket und mögliche Challenge-Themen.", highlight: false },
  { when: "November 2026", t: "Partner Announcement", b: "Die Partner des Hackathons 2027 werden öffentlich bekannt gegeben.", highlight: true },
  { when: "Dez. 2026 bis Feb. 2027", t: "Challenge-Briefings", b: "Wir schärfen Ihre Fragestellung im Workshop, Sie geben das Briefing frei.", highlight: false },
  { when: "Feb. bis Apr. 2027", t: "Kampagne & Anmeldung", b: "Acht Wochen Kommunikation, gezielte Ansprache passender Teams und Talente.", highlight: false },
  { when: "7. & 8. Mai 2027", t: "Europe Tech Hackathon", b: "Zwei Tage bauen, Pitch-Event, Jury und Preisübergabe.", highlight: true },
  { when: "Mai 2027", t: "ViennaUP & Nachbericht", b: "Aftermovie, Pitch-Mitschnitte und Nachberichterstattung im Festivalumfeld.", highlight: false },
];

const prizes = [
  { place: "1. Platz", amount: "2.000 €", medal: "🥇", sub: "Hauptpreis des Europe Tech Hackathons" },
  { place: "2. Platz", amount: "1.000 €", medal: "🥈", sub: "Zweitbestes Team der Jurywertung" },
  { place: "3. Platz", amount: "500 €", medal: "🥉", sub: "Drittbestes Team der Jurywertung" },
];

// Absprung in die Produktwelt: die Challenge-Themen sind echte Sustainista-Produkte.
const products = [
  { href: "/produkte/digitaler-produktpass", t: "Digitaler Produktpass", b: "ESPR-konforme Datenstruktur, Lieferkette und QR-Code, von der Pflichtfeldanalyse bis zur Pass-Seite." },
  { href: "/produkte/batteriepass", t: "Batteriepass", b: "EU-Pflicht ab 18. Februar 2027 für EV-, LMT- und Industriebatterien. Inklusive kostenlosem Selbstcheck." },
  { href: "/produkte/lca-berechnung", t: "LCA-Berechnung", b: "Life Cycle Assessment für Ihr Produkt, von der Rohstoffgewinnung bis zum Lebensende." },
  { href: "/produkte/product-carbon-footprint", t: "Product Carbon Footprint", b: "CO₂-Fußabdruck pro Produkt nach ISO 14067, belastbar für Kunden und Berichte." },
  { href: "/produkte/esg-analyse", t: "ESG-Analyse & Bericht", b: "Wesentlichkeitsanalyse, Kennzahlen und Nachhaltigkeitsbericht nach CSRD und GRI." },
  { href: "/produkte/ki-automatisierung", t: "KI-Automatisierung", b: "Datenextraktion aus Rechnungen, PDFs und Lieferantenanfragen, dieselbe Technik wie in den Challenges." },
  { href: "/produkte/ppwr-compliance", t: "PPWR Compliance", b: "Verpackungsdaten strukturieren und ARA- sowie LUCID-Meldungen vorbereiten." },
  { href: "/produkte/circular-stock-management", t: "Circular Stock Management", b: "Vernichtungsverbot und ESPR für Mode und Handel: Restbestände regelkonform steuern." },
];

const partners = [
  "AIT Austrian Institute of Technology",
  "ViennaUP",
  "Vienna Business Agency",
  "ÖBB Open Innovation Factory",
  "TU Wien i²c",
  "WU Gründungszentrum",
  "ÖGIG",
];

const criteria = [
  { criterion: "Technologie", weight: "30%", desc: "Qualität, Innovation und Umsetzbarkeit der technischen Lösung." },
  { criterion: "Problem-Fit", weight: "20%", desc: "Wie gut adressiert die Lösung das gewählte Challenge-Problem?" },
  { criterion: "Design & UX", weight: "15%", desc: "Nutzbarkeit, Intuitivität und visuelle Qualität der Lösung." },
  { criterion: "Business Model", weight: "15%", desc: "Skalierbarkeit, Monetarisierung und Marktpotenzial." },
  { criterion: "Impact & Nachhaltigkeit", weight: "10%", desc: "Ökologischer und gesellschaftlicher Mehrwert der Lösung." },
  { criterion: "Pitch & Demo", weight: "10%", desc: "Klarheit der Präsentation und überzeugender Live-Demo." },
];

export default function Hackathon() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hackathonSchema) }} />
      <Navigation />
      <main className="justify-copy">
        {/* Hero */}
        <section className="group relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-canvas pt-16">
          {/* Hintergrundbild: Teilnehmende des letzten Europe Tech Hackathons, farbig präsent */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <Image
              src="/viennaup-team.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.55] saturate-150 contrast-110 transition-all duration-700 ease-out group-hover:opacity-[0.85] group-hover:saturate-[1.75] motion-reduce:transition-none"
            />
            {/* Scrim: hellt die Bildmitte auf, damit der Text seinen Kontrast behält */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 62% 60% at 50% 42%, var(--color-canvas) 45%, color-mix(in srgb, var(--color-canvas) 55%, transparent) 78%, transparent 100%)",
              }}
            />
            {/* Weiche Kanten oben und unten */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-canvas) 0%, transparent 22%, transparent 78%, var(--color-canvas) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-24 sm:py-32 flex flex-col items-center text-center">
            <nav aria-label="Breadcrumb" className="animate-fade-up mb-6">
              <ol className="flex items-center justify-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-ink-secondary">Europe Tech Hackathon 2027</span></li>
              </ol>
            </nav>

            <span className="eyebrow animate-fade-up mb-10">
              7. &amp; 8. Mai 2027 · ÖBB Open Innovation Factory Wien
            </span>

            <h1 className="animate-fade-up delay-1 font-black tracking-tight leading-[0.9] mb-8" style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}>
              <span className="block text-ink">Europe Tech</span>
              <span className="block text-brand-600">Hackathon</span>
            </h1>

            {/* ViennaUP-Pferd als Wasserzeichen hinter Subline und Badge */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/viennaup-horse.png"
                alt=""
                aria-hidden="true"
                width={1220}
                height={1722}
                className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-auto opacity-[0.18]"
              />

              <p className="animate-fade-up delay-2 text-lg sm:text-xl text-ink-secondary font-normal leading-relaxed max-w-2xl mb-6">
                Zwei Tage. Echte Probleme. Lauffähige Prototypen.
                Seit 2022 ein Event der ViennaUP, dem Startup-Festival der Stadt Wien.
              </p>

              {/* ViennaUP-Badge & AIT Partner-Hinweis */}
              <div className="animate-fade-up delay-2 mb-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#viennaup"
                  className="group inline-flex items-center gap-3 rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-bold text-brand-700 hover:border-brand-600 transition-colors shadow-ambient-low"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" aria-hidden="true" />
                  Teil der ViennaUP 2027
                  <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="#ait-partner"
                  className="group inline-flex items-center gap-3 rounded-full border border-border-strong bg-white px-5 py-2 text-sm font-semibold text-ink hover:border-brand-600 transition-all shadow-ambient-low hover:shadow-ambient-medium"
                >
                  <Image
                    src="/partner-ait.svg"
                    alt="AIT Austrian Institute of Technology"
                    width={112}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                  <span className="h-3.5 w-px bg-border" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Innovation Lead 2027
                  </span>
                </a>
              </div>
            </div>

            <div className="animate-fade-up delay-3 bg-canvas border border-border rounded-card px-6 py-5 max-w-xl mb-12 text-left shadow-ambient-low">
              <p className="text-sm text-ink-secondary leading-relaxed">
                <span className="text-ink font-medium">Wann &amp; wo:</span>{" "}
                Freitag 7. und Samstag 8. Mai 2027, ÖBB Open Innovation Factory, Wien.
                Der Hackathon läuft als WarmUp Event unmittelbar vor der ViennaUP 2027.
                Trag dich jetzt ein und wir informieren dich, sobald die Anmeldung startet.
              </p>
            </div>

            <div className="animate-fade-up delay-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#anmelden"
                className="group px-7 py-3.5 rounded-btn font-semibold text-sm bg-brand-600 hover:bg-brand-700 text-white transition-colors flex items-center gap-2"
              >
                Jetzt vormerken lassen
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#partner"
                className="px-7 py-3.5 rounded-btn font-medium text-sm text-ink-secondary border border-border hover:border-ink-tertiary hover:text-ink transition-all bg-canvas"
              >
                Für Unternehmen
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-5 mt-20 grid grid-cols-4 divide-x divide-border border border-border rounded-card bg-canvas px-4 max-w-2xl w-full shadow-ambient-low">
              {[
                { n: "300+", label: "Besucher:innen" },
                { n: "1 Mio", label: "Impressions" },
                { n: "100+", label: "Teilnehmende" },
                { n: "12", label: "Teams am Pitch" },
              ].map((s) => (
                <div key={s.label} className="py-5 px-4 text-center">
                  <p className="text-xl font-bold text-ink tracking-tight">{s.n}</p>
                  <p className="text-xs text-ink-tertiary mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ViennaUP Band */}
        <section className="py-20 bg-brand-900">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300 mb-4">
                  Seit 2022 ein Event der ViennaUP
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.02] mb-6">
                  Seit 2022 ein Event<br />
                  <span className="text-brand-300">der ViennaUP.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl mb-8">
                  ViennaUP ist das Startup-Festival der Stadt Wien: neun Tage, rund 65 Events,
                  über 10.000 Teilnehmende aus ganz Europa. Der Europe Tech Hackathon ist seit
                  2022 Teil davon und läuft 2027 als WarmUp Event unmittelbar vor dem Festival.
                  Für Partner heißt das: Publikum, Presse und internationale Gäste sind ohnehin
                  in der Stadt.
                </p>
                <a
                  href="https://viennaup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-btn bg-white px-6 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-50 transition-colors"
                >
                  viennaup.com
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                {[
                  { n: "9", l: "Festivaltage" },
                  { n: "65", l: "Events" },
                  { n: "10.000+", l: "Teilnehmende" },
                ].map((s) => (
                  <div key={s.l} className="rounded-card border border-white/15 bg-white/5 px-4 py-6 text-center">
                    <p className="text-2xl font-black text-white tracking-tight">{s.n}</p>
                    <p className="text-[11px] text-white/60 mt-1 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video 2 */}
        <VideoSection
          videoId="og69zvtwv2I"
          eyebrow="Einblick"
          title="Hinter den Kulissen: ViennaUP & Sustainista"
        />

        {/* Für Unternehmen: Innovation Challenge */}
        <section id="partner" className="py-24 bg-surface scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Für Unternehmen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Bringen Sie Ihre eigene<br />
              <span className="text-ink-tertiary">Innovation Challenge ein.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-12">
              Unsere Partner definieren ein reales Problem oder eine konkrete Fragestellung aus
              ihrem Unternehmen, für die sie neue Perspektiven und Lösungsansätze suchen.
              Die Teilnehmenden arbeiten im Rahmen des Open Innovation Contests intensiv an dieser
              Challenge und entwickeln daraus konkrete Konzepte und erste Prototypen.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
              {pillars.map((p) => (
                <div key={p.tag} className="flex flex-col border border-border rounded-card p-7 bg-canvas shadow-ambient-low">
                  <span className="self-start mb-4 inline-flex items-center rounded-btn border border-brand-200 bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-700">
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-5">{p.body}</p>
                  <ul className="mt-auto space-y-2 border-t border-border pt-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-ink-secondary">
                        <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Wer im Raum ist */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border border-border rounded-card p-7 bg-canvas">
                <p className="eyebrow mb-3">Wen wir einladen</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                  Jedes Jahr laden wir gezielt Studierende, Entwickler:innen, Softwareentwickler:innen,
                  Gründer:innen und Start-ups ein. In den vergangenen Jahren lag ein sehr starker
                  Schwerpunkt auf Artificial Intelligence, weshalb wir zunehmend Menschen erreichen,
                  die <strong className="text-ink">AI-native arbeiten</strong>, neue Tools sehr schnell
                  einsetzen und innerhalb kurzer Zeit funktionierende Lösungen bauen.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Bei einer Unternehmens-Challenge sprechen wir zusätzlich gezielt jene Start-ups,
                  Entwickler:innen und Talente an, die fachlich besonders gut zu Ihrer Fragestellung
                  passen.
                </p>
              </div>
              <div className="relative border border-border rounded-card p-7 bg-canvas overflow-hidden">
                <p className="eyebrow mb-3">Ihre Rolle vor Ort</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                  Unternehmenspartner stellen Expert:innen und Mentor:innen, arbeiten direkt mit den
                  Teams und sitzen in der Jury. Dadurch entsteht ein deutlich intensiverer Austausch
                  als bei einem klassischen Sponsoring.
                </p>
                <ul className="space-y-2">
                  {[
                    "Challenge persönlich vorstellen",
                    "Mentoring-Slots mit den Teams",
                    "Jurysitz beim Pitch-Event",
                    "Erstkontakt zu Teams und Talenten",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <svg className="w-3.5 h-3.5 mt-1 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Was ein Partner davon hat */}
        <section className="py-24 bg-brand-900">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300 mb-4">
              Vorteile einer Partnerschaft
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.02] mb-6">
              Was Sie als Partner<br />
              <span className="text-brand-300">davon haben.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mb-14">
              Eine Partnerschaft ist kein Logo auf einem Rollup. Sie bekommen Zugang zu Talenten,
              zu Prototypen auf Ihre Fragestellung und zu einer Kommunikation, die acht Wochen läuft.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-card overflow-hidden">
              {benefits.map((x) => (
                <div key={x.n} className="bg-brand-900 p-7 transition-colors hover:bg-brand-800">
                  <p className="text-3xl font-black text-brand-300 tabular-nums mb-4">{x.n}</p>
                  <h3 className="text-base font-bold text-white mb-2.5">{x.t}</h3>
                  <p className="text-[13px] text-white/65 leading-relaxed">{x.b}</p>
                </div>
              ))}
            </div>

            {/* Zwei Aufnahmen aus der ÖBB Open Innovation Factory */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="group relative overflow-hidden rounded-card border border-white/10">
                <Image
                  src="/hackathon-team-coding.jpg"
                  alt="Team beim Entwickeln eines Prototyps während des Europe Tech Hackathons"
                  width={560}
                  height={495}
                  sizes="(max-width: 640px) 100vw, 48vw"
                  className="w-full h-full object-cover aspect-[3/2] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-xs font-medium text-white">
                  Teams bauen, zwei Tage lang
                </figcaption>
              </figure>
              <figure className="group relative overflow-hidden rounded-card border border-white/10">
                <Image
                  src="/hackathon-stage.jpg"
                  alt="Partner auf der Bühne beim Kick-off des Europe Tech Hackathons"
                  width={720}
                  height={540}
                  sizes="(max-width: 640px) 100vw, 48vw"
                  className="w-full h-full object-cover aspect-[3/2] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-xs font-medium text-white">
                  Partner auf der Bühne beim Kick-off
                </figcaption>
              </figure>
            </div>

            <figure className="mt-10 border-l-2 border-brand-300 pl-6">
              <blockquote className="text-lg sm:text-xl font-normal text-white/90 leading-relaxed italic max-w-3xl">
                &quot;It was a great pleasure meeting tech talents which have been working hard to
                develop innovative prototypes on our technology.&quot;
              </blockquote>
              <figcaption className="mt-4 text-xs text-white/75">
                <span className="font-semibold text-white/80">Kai Siefert</span>, Managing Director, Riddle&amp;Code
                <span className="block mt-0.5">Partner des Sustainable Blockchain Hackathon 2022</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Partnerschaftspakete ohne Preise */}
        <section id="pakete" className="py-24 bg-canvas scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Partnerschaft</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Drei Pakete.<br />
              <span className="text-ink-tertiary">Klar abgegrenzt.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-12">
              Welches Paket passt, hängt davon ab, was Sie erreichen wollen: Sichtbarkeit,
              eine eigene Challenge oder die Rolle als Presenting Partner. Konditionen und
              Sachleistungen wie Cloud-Credits, Preisgelder oder Catering besprechen wir
              im persönlichen Gespräch.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {packages.map((p, i) => (
                <article
                  key={p.name}
                  className={`flex min-w-0 flex-col rounded-card border p-8 ${
                    i === 1 ? "border-brand-600 bg-canvas shadow-ambient-medium" : "border-border bg-canvas shadow-ambient-low"
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-ink">{p.name}</h3>
                    {p.badge && (
                      <span className="shrink-0 rounded-btn bg-brand-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-base font-bold leading-snug text-ink">{p.claim}</p>
                  <ul className="space-y-3 border-t border-border pt-5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-secondary">
                        <svg className="w-3.5 h-3.5 mt-1 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-8 text-xs text-ink-tertiary leading-relaxed max-w-3xl">
              Die Rechte an den Prototypen bleiben bei den Teams. Partner erhalten Erstzugang,
              Kontaktvermittlung und die Möglichkeit einer Weiterentwicklung im Anschluss.
              Challenge-Plätze sind begrenzt, damit pro Challenge genug Teams arbeiten.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:stefan.bauer@example.invalid?subject=Europe Tech Hackathon 2027: Partnerschaft"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Challenge-Ideen anfordern
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-btn border border-border bg-canvas px-7 py-3.5 text-sm font-medium text-ink-secondary hover:border-ink-tertiary hover:text-ink transition-all"
              >
                Gespräch vereinbaren
              </Link>
            </div>
            <p className="mt-3 text-xs text-ink-tertiary">
              Wir schicken Ihnen unverbindlich zwei bis drei Ideen, wie eine Challenge aus Ihrem
              Haus aussehen könnte und welche Form der Partnerschaft dazu passt.
            </p>
          </div>
        </section>

        {/* Partner Logos: freistehend */}
        <section className="py-16 border-y border-border bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow text-center justify-center mb-10">Veranstaltet mit Unterstützung von</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
              {[
                { src: "/partner-ait.svg", alt: "AIT Austrian Institute of Technology", w: 360, cls: "h-12 sm:h-20" },
                { src: "/partner-viennaup.png", alt: "Part of ViennaUP", w: 620, cls: "h-14 sm:h-28" },
                { src: "/partner-vba.png", alt: "Wirtschaftsagentur Wien", w: 240, cls: "h-16 sm:h-32" },
                { src: "/partner-oegig.png", alt: "ÖGIG: Österreichische Glasfaser Infrastruktur Gesellschaft", w: 520, cls: "h-12 sm:h-24" },
              ].map(({ src, alt, w, cls }) => (
                <Image
                  key={src}
                  src={src}
                  alt={alt}
                  width={w}
                  height={260}
                  className={`${cls} w-auto max-w-full object-contain`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* AIT Partner-Schwerpunkt 2027 — Innovation Lead Bento & Co-Creation Pipeline */}
        <section id="ait-partner" className="relative py-24 bg-canvas border-b border-border overflow-hidden scroll-mt-20">
          {/* Subtiles architektonisches Punktraster im Hintergrund */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgb(49 87 44 / 0.16) 1px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            {/* Kopfbereich mit Status-Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <p className="eyebrow">Hauptpartner 2027 · Innovation Lead</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" aria-hidden="true" />
                Offizielle Forschungspartnerschaft 2027
              </span>
            </div>

            {/* Haupt-Bento-Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Linke Hauptkarte: Editorial + Forschungscluster */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-card border border-border-strong bg-white p-7 sm:p-10 shadow-ambient-medium">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-7 mb-7 border-b border-border">
                    <Image
                      src="/partner-ait.svg"
                      alt="Logo AIT Austrian Institute of Technology"
                      width={340}
                      height={72}
                      className="h-12 sm:h-16 w-auto object-contain"
                    />
                    <span className="rounded-btn bg-brand-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-200">
                      RTO #1 in Österreich
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-5">
                    Spitzenforschung trifft auf<br />
                    <span className="text-brand-600">48 Stunden AI-Prototyping.</span>
                  </h2>

                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-4">
                    Mit dem <strong className="text-ink">AIT Austrian Institute of Technology</strong> ist
                    Österreichs größte außeruniversitäre Research and Technology Organisation (RTO) als
                    zentraler <strong className="text-ink">Innovation Lead Partner</strong> beim Europe Tech Hackathon 2027
                    an Bord. Rund 1.500 Forscher:innen und Expert:innen entwickeln am AIT die
                    Schlüsseltechnologien für die Infrastruktur von morgen.
                  </p>
                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
                    Als direktes Bindeglied zwischen Wissenschaft und industrieller Anwendung bringt das AIT
                    eine eigene <strong className="text-ink">AIT Innovation Challenge</strong> ein: Teams aus
                    KI-Entwickler:innen, Data Scientists und Start-ups arbeiten zwei Tage lang Seite an Seite
                    mit AIT-Wissenschaftler:innen an realen Datensätzen und Forschungsfragen, pitchen auf der
                    Hauptbühne und treten um den eigenen <strong className="text-ink">AIT Award</strong> an.
                  </p>

                  {/* 4 Themen-Kacheln des AIT */}
                  <p className="text-[11px] font-bold uppercase tracking-widest text-ink-tertiary mb-3">
                    Forschungsschwerpunkte am Hackathon
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {[
                      {
                        t: "Dekarbonisierung & Energiesysteme",
                        d: "Intelligente Netze, Sektorkopplung und klimaneutrale Industrieprozesse.",
                      },
                      {
                        t: "Angewandte KI & Data Science",
                        d: "Agentische Systeme, industrielle Datenräume und vertrauenswürdige KI.",
                      },
                      {
                        t: "Kreislaufwirtschaft & Produktpässe",
                        d: "Digitale Nachweise, LCA-Datenflüsse und transparente Wertschöpfungsketten.",
                      },
                      {
                        t: "Resiliente Infrastruktur & Mobilität",
                        d: "Nachhaltige Verkehrssysteme, kritische Infrastrukturen und Digital Security.",
                      },
                    ].map((cluster) => (
                      <div key={cluster.t} className="rounded-btn border border-border bg-canvas p-3.5">
                        <p className="text-xs font-bold text-ink mb-1">{cluster.t}</p>
                        <p className="text-[11px] text-ink-secondary leading-relaxed">{cluster.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <a
                    href="https://www.ait.ac.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                  >
                    ait.ac.at besuchen
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="#anmelden"
                    className="inline-flex items-center gap-2 rounded-btn border border-border bg-canvas px-6 py-3 text-sm font-medium text-ink-secondary hover:border-ink-tertiary hover:text-ink transition-all"
                  >
                    Für die AIT-Challenge vormerken
                  </a>
                </div>
              </div>

              {/* Rechte Spalte: Dark-Tech-Blueprint & Co-Creation Pipeline */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex-1 rounded-card bg-brand-900 p-7 sm:p-8 text-white border border-brand-800 shadow-ambient-medium flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-300">
                        AIT × Europe Tech Hackathon
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90">
                        7. &amp; 8. Mai 2027
                      </span>
                    </div>

                    {/* Kennzahlen-Matrix */}
                    <dl className="grid grid-cols-2 gap-3 mb-7">
                      {[
                        { k: "Forschungsteam", v: "~1.500", s: "Expert:innen am AIT" },
                        { k: "Vor-Ort-Support", v: "AIT Mentors", s: "Wissenschaft & Engineering" },
                        { k: "Wettbewerb", v: "AIT Challenge", s: "Eigener Deep-Tech Track" },
                        { k: "Auszeichnung", v: "AIT Award", s: "Vergabe auf der Hauptbühne" },
                      ].map((m) => (
                        <div key={m.k} className="rounded-btn border border-white/12 bg-white/[0.04] p-3.5">
                          <dt className="text-[10px] font-bold uppercase tracking-widest text-brand-300">{m.k}</dt>
                          <dd className="text-lg font-black text-white mt-1 tracking-tight">{m.v}</dd>
                          <p className="text-[11px] text-white/60 mt-0.5">{m.s}</p>
                        </div>
                      ))}
                    </dl>

                    {/* Animiertes SVG: Co-Creation Flow */}
                    <div className="rounded-btn border border-white/12 bg-black/20 p-4 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-300 mb-3">
                        Vom Forschungsproblem zum Prototyp in 48 Stunden
                      </p>
                      <svg viewBox="0 0 420 110" className="w-full h-auto overflow-visible" role="img" aria-label="Ablauf der AIT Innovation Challenge von Briefing über Mentoring bis zum AIT Award">
                        <line x1="55" y1="46" x2="365" y2="46" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
                        <line x1="55" y1="46" x2="365" y2="46" stroke="#a0cc66" strokeWidth="2.5" pathLength="100" className="lca-flow" />
                        {[
                          { cx: 55, step: "01", t: "AIT Briefing", sub: "Reales Problem" },
                          { cx: 158, step: "02", t: "Co-Creation", sub: "AIT Mentoring" },
                          { cx: 262, step: "03", t: "Live-Demo", sub: "Jury & Bühne" },
                          { cx: 365, step: "04", t: "AIT Award", sub: "& Follow-up" },
                        ].map((node, idx) => (
                          <g key={node.step}>
                            <circle
                              cx={node.cx}
                              cy="46"
                              r="18"
                              fill={idx === 3 ? "#4f772d" : "#162b14"}
                              stroke="#a0cc66"
                              strokeWidth="2"
                            />
                            <text x={node.cx} y="50" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">
                              {node.step}
                            </text>
                            <text x={node.cx} y="82" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">
                              {node.t}
                            </text>
                            <text x={node.cx} y="96" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="9.5">
                              {node.sub}
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>

                    {/* Checkliste */}
                    <ul className="space-y-2.5">
                      {[
                        "Direktes Mentoring durch AIT-Wissenschaftler:innen und Engineers in der ÖBB Open Innovation Factory",
                        "Jurysitz beim großen Pitch-Finale und feierliche Übergabe des eigenen AIT Awards",
                        "Branded Side-Event & Recruiting-Hub für direkten Austausch mit AI-Talenten, Studierenden und Start-ups",
                        "Follow-up-Perspektive: Weiterentwicklung vielversprechender Ansätze nach dem Hackathon",
                      ].map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                          <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60">
                    Tomorrow Today — Das AIT bringt angewandte Spitzenforschung direkt zu den Entwickler-Teams der ViennaUP 2027.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fahrplan */}
        <section id="fahrplan" className="py-24 bg-surface scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Fahrplan</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Von jetzt bis<br />
              <span className="text-ink-tertiary">zum Hackathon.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-14">
              Wer als Partner sichtbar sein will, sollte vor dem Announcement im November 2026
              an Bord sein. Danach läuft die Kommunikation bereits mit den bestätigten Partnern.
            </p>

            <ol className="relative grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4">
              {/* Zeitachse, nur ab md sichtbar */}
              <div className="hidden md:block absolute left-0 right-0 top-[11px] h-px bg-border" aria-hidden="true" />
              {roadmap.map((r) => (
                <li key={r.t} className="relative flex md:block gap-4">
                  <div className="flex md:block flex-col items-center md:items-start shrink-0">
                    <span
                      className={`relative z-10 block w-[22px] h-[22px] rounded-full border-4 border-surface ${
                        r.highlight ? "bg-brand-600" : "bg-ink-tertiary"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="md:hidden w-px flex-1 bg-border mt-1" aria-hidden="true" />
                  </div>
                  <div className="md:mt-5 pb-2">
                    <p className={`text-[11px] font-bold uppercase tracking-widest mb-1.5 ${r.highlight ? "text-brand-600" : "text-ink-tertiary"}`}>
                      {r.when}
                    </p>
                    <h3 className="text-sm font-bold text-ink mb-1.5 leading-snug">{r.t}</h3>
                    <p className="text-xs text-ink-secondary leading-relaxed">{r.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ViennaUP Deep-Dive & Festival-Ökosystem unten auf der Seite */}
        <section id="viennaup" className="relative py-24 bg-brand-900 text-white overflow-hidden scroll-mt-20">
          {/* Hintergrund-Wasserzeichen: ViennaUP Pferd + Lichtkegel */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 88% 20%, rgba(160, 204, 102, 0.16) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 12% 85%, rgba(79, 119, 45, 0.25) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <Image
            src="/viennaup-horse.png"
            alt=""
            aria-hidden="true"
            width={1220}
            height={1722}
            className="pointer-events-none select-none absolute -right-16 bottom-0 h-[520px] w-auto opacity-[0.09]"
          />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            {/* Kopfbereich */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-300 mb-4">
                  Das Festival-Ökosystem · Seit 2022 Teil der ViennaUP
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.02] mb-6">
                  Warum die ViennaUP<br />
                  <span className="text-brand-300">den Unterschied macht.</span>
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  Die <strong className="text-white">ViennaUP</strong> ist das größte dezentrale,
                  community-getriebene Startup- und Innovationsfestival Zentraleuropas, initiiert von der{" "}
                  <strong className="text-white">Wirtschaftsagentur Wien (Vienna Business Agency)</strong>.
                  Neun Tage lang verwandelt sich ganz Wien in einen internationalen Campus für
                  Gründer:innen, Investor:innen, Forscher:innen, Leitbetriebe und Tech-Talente.
                </p>
              </div>

              {/* Offizielle Badges rechts */}
              <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4">
                <div className="rounded-card bg-white px-5 py-3.5 shadow-ambient-medium flex items-center gap-4">
                  <Image
                    src="/partner-viennaup.png"
                    alt="Part of ViennaUP"
                    width={220}
                    height={90}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <span className="h-8 w-px bg-border" aria-hidden="true" />
                  <Image
                    src="/partner-vba.png"
                    alt="Wirtschaftsagentur Wien"
                    width={160}
                    height={90}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 5 KPI-Kacheln zur ViennaUP */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
              {[
                { n: "10.000+", l: "Internationale Gäste", sub: "Startups, Corporates, Talente" },
                { n: "90+", l: "Länder vertreten", sub: "Globale Tech-Community in Wien" },
                { n: "65+", l: "Kuratierte Events", sub: "Dezentral in der ganzen Stadt" },
                { n: "40+", l: "Programmpartner", sub: "Hochschulen, RTOs & Netzwerke" },
                { n: "Seit 2022", l: "Fixpunkt im Programm", sub: "Sustainista × ViennaUP" },
              ].map((stat) => (
                <div key={stat.l} className="rounded-card border border-white/15 bg-white/[0.05] p-5 backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-black text-brand-300 tracking-tight tabular-nums">{stat.n}</p>
                  <p className="text-xs font-bold text-white mt-1.5">{stat.l}</p>
                  <p className="text-[11px] text-white/60 mt-0.5 leading-snug">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Visuelle Festival-Wochen-Architektur: Vom WarmUp-Hackathon in die Festival-Woche */}
            <div className="rounded-card border border-white/15 bg-black/25 p-6 sm:p-8 mb-12">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-300">
                    Dramaturgie im Mai 2027
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    Der Europe Tech Hackathon als offizielles WarmUp Event der ViennaUP 2027
                  </h3>
                </div>
                <span className="rounded-btn border border-brand-300/40 bg-brand-300/10 px-3 py-1 text-xs font-semibold text-brand-200">
                  ÖBB Open Innovation Factory → Ganz Wien
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    day: "Fr, 7. Mai 2027",
                    tag: "Tag 1 · Kick-off",
                    title: "Challenge-Briefing & Team-Sprint",
                    desc: "Eröffnung auf der Bühne, Vorstellung der Unternehmens- und AIT-Challenges, Team-Building und Start des 48-Stunden-Hackathons.",
                    active: true,
                  },
                  {
                    day: "Sa, 8. Mai 2027 (Tagsüber)",
                    tag: "Tag 2 · Deep-Tech Build",
                    title: "Mentoring, Code & Live-Prototypen",
                    desc: "Intensive Entwicklungsphase mit AIT-Wissenschaftler:innen, Partner-Expert:innen, Recruiting-Lounge und Side-Events vor Ort.",
                    active: true,
                  },
                  {
                    day: "Sa, 8. Mai 2027 (Abend)",
                    tag: "Grand Finale",
                    title: "Pitch-Stage, Jury & Awards",
                    desc: "Live-Demos vor 300+ Gästen, Jury-Bewertung, Vergabe der Preisgelder und des AIT Awards sowie Networking-Night.",
                    active: true,
                  },
                  {
                    day: "Ab Mo, 10. Mai 2027",
                    tag: "9 Tage Festival",
                    title: "ViennaUP Festival-Woche in Wien",
                    desc: "Die Gewinner-Cases, Interviews und Prototypen laufen direkt in die ViennaUP-Hauptwoche mit Coffee House Sessions, Investor-Days & Konferenzen.",
                    active: false,
                  },
                ].map((slot) => (
                  <div
                    key={slot.day}
                    className={`rounded-card border p-5 flex flex-col justify-between ${
                      slot.active
                        ? "border-brand-300/45 bg-brand-800/60"
                        : "border-white/15 bg-white/[0.04]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-300">
                          {slot.tag}
                        </span>
                        <span className="text-[11px] font-semibold text-white/70">{slot.day}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">{slot.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{slot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Mehrwert-Kacheln + Standort & Zitat */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Dezentrales Stadt-Festival",
                    b: "Statt einer einzigen Messehalle bespielt die ViennaUP authentische Orte in ganz Wien: von der ÖBB Open Innovation Factory über historische Wiener Kaffeehäuser (Coffee House Sessions) bis zum Festival-Hub am Karlsplatz.",
                  },
                  {
                    t: "Internationale Sichtbarkeit",
                    b: "Weil Investor:innen, internationale Medien, Gründer:innen und Corporates für die ViennaUP nach Wien reisen, erreichen Partner-Challenges und Prototypen ein Vielfaches der normalen Reichweite (~1 Mio. Impressions).",
                  },
                  {
                    t: "Wissenschaft × Wirtschaft",
                    b: "Gemeinsam mit dem AIT Austrian Institute of Technology, der Wirtschaftsagentur Wien, dem TU Wien Innovation Incubation Center (i²c) und dem WU Gründungszentrum verbindet der Hackathon Forschung und Markt.",
                  },
                  {
                    t: "5 Jahre Erfolgsgeschichte",
                    b: "Seit dem ersten Sustainable Blockchain Hackathon 2022 ist das Format von Sustainista jedes Jahr mit der ViennaUP gewachsen — hin zu Europas praxisnaher Bühne für KI, Produktpässe und Kreislaufwirtschaft.",
                  },
                ].map((card) => (
                  <div key={card.t} className="rounded-card border border-white/12 bg-white/[0.04] p-6">
                    <h3 className="text-sm font-bold text-white mb-2">{card.t}</h3>
                    <p className="text-xs text-white/70 leading-relaxed">{card.b}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between rounded-card border border-white/15 bg-white/[0.06] p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-300 mb-3">
                    Partner &amp; Ökosystem
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {partners.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1.5 rounded-btn border border-white/15 bg-white/10 text-xs text-white/90 font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-btn border border-white/15 bg-black/25 p-4 mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-300 mb-1">
                      Austragungsort · 7. &amp; 8. Mai 2027
                    </p>
                    <p className="text-sm font-bold text-white">ÖBB Open Innovation Factory</p>
                    <p className="text-xs text-white/70 mt-1">
                      Joseph-Roth-Gasse 5, 1020 Wien (Foyer 1, Ecke Lassallestraße am Praterstern) ·
                      Offizielles WarmUp Event der ViennaUP 2027
                    </p>
                  </div>

                  <blockquote className="border-l-2 border-brand-300 pl-4">
                    <p className="text-xs sm:text-sm text-white/85 italic leading-relaxed mb-2">
                      &quot;Innovation entsteht, wenn kluge Köpfe auf echte Probleme treffen — mit der internationalen Energie der ViennaUP, starken Forschungspartnern wie dem AIT und dem Willen, in 48 Stunden funktionierende Lösungen auf die Bühne zu bringen.&quot;
                    </p>
                    <a
                      href="https://www.linkedin.com/in/stefan-bauer-innovator/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-300 hover:underline"
                    >
                      Dr. Stefan Bauer
                    </a>
                    <span className="text-xs text-white/60"> · CEO, Sustainista</span>
                  </blockquote>
                </div>

                <div className="mt-6 pt-5 border-t border-white/12 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://viennaup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-btn bg-white px-5 py-2.5 text-xs font-bold text-brand-900 hover:bg-brand-50 transition-colors"
                  >
                    Offizielle Website: viennaup.com
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="#anmelden"
                    className="text-xs font-semibold text-brand-300 hover:text-white transition-colors"
                  >
                    Für 2027 vormerken →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video 1 */}
        <VideoSection
          videoId="fvoTBR_Vkng"
          eyebrow="W24 über den Hackathon"
          title="Europe Tech Hackathon: so war es"
        />

        {/* Medien & Aufmerksamkeit */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Medien &amp; Aufmerksamkeit</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Der Hackathon,<br />
              <span className="text-ink-tertiary">über den gesprochen wird.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-12">
              Mediale Sichtbarkeit ist fester Bestandteil des Hackathons: Interviews vor Ort,
              Video-Content, Social Media und Medienberichterstattung. Rund eine Million
              Impressions über die verschiedenen Medien hinweg. Partner, ihre Expert:innen
              und vor allem ihre Challenges bekommen dabei gezielt Sichtbarkeit.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* TV-Interview photo, featured */}
              <div className="lg:col-span-2 relative rounded-[16px] overflow-hidden border border-border shadow-md">
                <Image
                  src="/media-tv-interview.jpg"
                  alt="Dr. Stefan Bauer im TV-Interview mit R9 Österreich beim Europe Tech Hackathon in Wien"
                  width={2400}
                  height={1600}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" aria-hidden="true" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 bg-canvas/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-ink shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />
                  TV-Interview · R9 Österreich
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-white font-black tracking-tight leading-tight mb-1.5 text-xl sm:text-2xl">
                    Vor laufender Kamera.
                  </p>
                  <p className="text-white/85 text-sm leading-relaxed max-w-xl">
                    Dr. Stefan Bauer im TV-Interview mit R9 Österreich beim Europe Tech Hackathon in Wien.
                  </p>
                </div>
              </div>

              {/* Media mentions */}
              <div className="space-y-4">
                {[
                  {
                    kind: "TV-Beitrag",
                    title: "W24 über den Hackathon",
                    sub: "Der Wiener Stadtsender hat den letzten Europe Tech Hackathon begleitet.",
                    href: "https://www.youtube.com/watch?v=fvoTBR_Vkng",
                  },
                  {
                    kind: "Interview",
                    title: "Öko-Business Wien",
                    sub: "„5 Fragen an Dr. Stefan Bauer zum KMU Nachhaltigkeitskompass“ · Juli 2025",
                    href: "https://unternehmen.oekobusiness.wien.at/kategorie/news/2025/07/5-fragen-an-dr-stefan-bauer-zum-kmu-nachhaltigkeitskompass/",
                  },
                  {
                    kind: "Report",
                    title: "Vienna Business Agency",
                    sub: "Sustainista featured im VBA Data Economy Report über Wiens Startup-Ökosystem.",
                    href: "https://viennabusinessagency.at/report-data-economy/?L=/en/4-ecosystem-3n2aFWLv/",
                  },
                  {
                    kind: "Artikel",
                    title: "Data Intelligence Network",
                    sub: "Porträt über die Sustainista-Mission: Daten, die die Welt verändern können.",
                    href: "https://dataintelligence.at/wir-bei-sustainista-glauben-dass-daten-die-welt-veraendern-koennen-willkommen-im-netzwerk/",
                  },
                  {
                    kind: "Feature",
                    title: "Green Tech Valley",
                    sub: "Gelistet in der offiziellen Übersicht der Green Tech Startups Austria.",
                    href: "https://www.greentech.at/goodies/green-tech-startups-austria/",
                  },
                ].map(({ kind, title, sub, href }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-border rounded-card p-5 bg-canvas shadow-ambient-low hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-medium transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600">{kind}</span>
                      <svg className="w-3.5 h-3.5 text-ink-tertiary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-ink group-hover:text-brand-600 transition-colors">{title}</p>
                    <p className="text-xs text-ink-secondary leading-relaxed mt-1">{sub}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge-Felder */}
        <section id="tracks" className="py-24 bg-surface scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Challenges</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Drei Felder,<br />
              <span className="text-ink-tertiary">in denen 2027 gebaut wird.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-14">
              Die konkreten Challenges für 2027 stehen noch nicht fest. Sie entstehen gemeinsam
              mit unseren Unternehmenspartnern und werden vor der Anmeldung veröffentlicht.
              Diese drei Felder geben den Rahmen vor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tracks.map((t) => (
                <div key={t.title} className="flex flex-col border border-border rounded-card p-7 bg-canvas shadow-ambient-low">
                  <p className="eyebrow mb-3">{t.num}</p>
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{t.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-brand-200 bg-brand-50 rounded-card p-7">
              <p className="text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink">Sie wollen ein Feld besetzen?</strong>{" "}
                Unternehmenspartner definieren ihre eigene Innovation Challenge und geben damit
                vor, woran die Teams zwei Tage lang arbeiten.{" "}
                <a href="#pakete" className="font-semibold text-brand-700 underline underline-offset-2 hover:no-underline">
                  Zu den Partnerschaftspaketen
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Jury */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Bewertungskriterien</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Was die Jury bewertet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {criteria.map((c) => (
                <div key={c.criterion} className="border border-border rounded-card p-6 bg-canvas shadow-ambient-low">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-ink">{c.criterion}</p>
                    <span className="text-lg font-black text-brand-600">{c.weight}</span>
                  </div>
                  <p className="text-xs text-ink-secondary leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preise */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Preise</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Was du gewinnen kannst
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-14">
              Das Preisgeld geht an die drei besten Teams und wird beim Pitch-Event auf der Bühne
              übergeben. Mit weiteren Unternehmenspartnerschaften wächst der Preistopf,
              zusätzliche Partner-Awards kommen dazu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {prizes.map((p, i) => (
                <div
                  key={p.place}
                  className={`rounded-card border p-8 text-center ${
                    i === 0 ? "border-brand-600 bg-canvas shadow-ambient-medium" : "border-border bg-canvas shadow-ambient-low"
                  }`}
                >
                  <p className="text-3xl mb-4" aria-hidden="true">{p.medal}</p>
                  <p className="text-xs text-ink-tertiary mb-2">{p.place}</p>
                  <p className="text-4xl font-black text-ink tracking-tight mb-2 tabular-nums">{p.amount}</p>
                  <p className="text-xs text-ink-tertiary">{p.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-card p-6 bg-canvas shadow-ambient-low">
                <p className="text-sm font-bold text-ink mb-2">Partner-Awards</p>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Unternehmenspartner können einen eigenen Award unter ihrem Namen stiften und ihn
                  selbst auf der Bühne übergeben.
                </p>
              </div>
              <div className="border border-border rounded-card p-6 bg-canvas shadow-ambient-low">
                <p className="text-sm font-bold text-ink mb-2">Nach dem Hackathon</p>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Die Gewinnerteams arbeiten im Anschluss mit Sustainista und den Partnern weiter,
                  inklusive Pitch-Mitschnitt und Nachberichterstattung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-canvas scroll-mt-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-10">
              Häufige Fragen zum<br />
              <span className="text-ink-tertiary">Europe Tech Hackathon.</span>
            </h2>
            <ArticleFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Anmeldung */}
        <section id="anmelden" className="py-24 bg-surface scroll-mt-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow mb-4">Interesse?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-6">
              Vormerken lassen
            </h2>
            <p className="text-sm text-ink-secondary mb-10">
              Ob als Teilnehmer:in oder als Unternehmenspartner: Schreib uns kurz dein Interesse,
              wir melden uns, sobald die offizielle Anmeldung startet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-8 py-4 rounded-btn font-semibold"
              >
                Jetzt Interesse bekunden
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:stefan.bauer@example.invalid?subject=Europe Tech Hackathon 2027: Interesse"
                className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-8 py-4 rounded-btn font-medium bg-canvas transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                stefan.bauer@example.invalid
              </a>
            </div>
          </div>
        </section>

        {/* Absprung in die Produkte */}
        <section className="py-24 bg-canvas border-t border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Woran wir sonst arbeiten</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Die Challenge-Themen<br />
              <span className="text-ink-tertiary">sind unser Tagesgeschäft.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-12">
              Digitaler Produktpass, Batteriepass, LCA, CO₂-Bilanzen und KI-gestützte
              Datenextraktion sind keine Hackathon-Themen auf dem Papier. Sustainista setzt sie
              das ganze Jahr über für Unternehmen um.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="group flex flex-col border border-border rounded-card p-6 bg-canvas shadow-ambient-low hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-medium transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="text-sm font-bold text-ink group-hover:text-brand-600 transition-colors leading-snug">
                      {x.t}
                    </h3>
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ink-tertiary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <p className="text-xs text-ink-secondary leading-relaxed">{x.b}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/produkte"
                className="inline-flex items-center gap-2 rounded-btn border border-border bg-canvas px-7 py-3.5 text-sm font-semibold text-ink hover:border-ink-tertiary transition-all"
              >
                Alle Produkte ansehen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
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
