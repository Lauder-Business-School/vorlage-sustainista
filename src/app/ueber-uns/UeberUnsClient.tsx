"use client";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import YoutubeFacade from "@/components/YoutubeFacade";
import Image from "next/image";
import Link from "next/link";
import { Target, Users, Globe, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Das Team",
    h1a: "Menschen hinter",
    h1b: "Sustainista.",
    sub: "Wir sind ein Spezialistenteam aus Wien, das KMU dabei hilft, Nachhaltigkeit systemisch zu denken, mit echten Daten, wiederverwendbaren Prozessen und KI-Automatisierung.",
    breadcrumb: { home: "Startseite", current: "Über uns" },
    teamPhoto: {
      badge: "ViennaUP · Wien",
      title: "Ein Team. Eine Mission.",
      caption: "Das Sustainista-Team beim ViennaUP Startup-Festival in Wien: Technologie, Nachhaltigkeit und ganz viel Energie.",
      alt: "Das Sustainista-Team in grünen Team-Shirts beim ViennaUP Startup-Festival in Wien",
    },
    benefits: [
      { title: "Klarer Fokus auf KMU", desc: "Lösungen, die zu Unternehmensgröße und Budget passen" },
      { title: "Interdisziplinäres Team", desc: "Technologie, Recht, Wissenschaft und Praxis" },
      { title: "Österreich & DACH", desc: "Lokale Expertise, europaweite Standards" },
      { title: "Eigene DPP-Plattform", desc: "Signierte, prüfbare Produkt- und Batteriepässe" },
    ],
    foundingEyebrow: "Warum Sustainista?",
    foundingH2a: "Gegründet mit einer",
    foundingH2b: "Überzeugung.",
    foundingP1: "Als die EU 2023 mit der CSRD-Trilogeinigung festlegte, dass die Berichtspflicht schrittweise auf KMU-Lieferanten durchsickert, war klar: Die meisten österreichischen Mittelständler haben keine drei Jahre, um sich vorzubereiten. Großkonzerne wie OMV, Verbund und Erste Bank fordern seit 2025 Scope-3-Daten von ihren Zulieferern. Wer keine strukturierten ESG-Daten hat, verliert Aufträge.",
    foundingP2: "Sustainista hat das geändert. Wir bauen keine Einmalberichte, sondern wiederverwendbare Datensysteme nach GHG Protocol und ESRS, die mit Ihrem Unternehmen wachsen. Der erste prüffähige ESG-Bericht entsteht in 4 bis 6 Wochen. Jeder folgende läuft automatisch.",
    stats: [
      { value: "15+", label: "Jahre kombinierte Expertise in Digitalisierung & Nachhaltigkeit" },
      { value: "28", label: "Trends im Sustainista Trendradar 2026–2040" },
      { value: "4 bis 6", label: "Wochen bis zum ersten prüfbaren ESG-Bericht" },
      { value: "4", label: "Produktkategorien mit Musterpässen auf der sustainista DPP-Plattform" },
    ],
    missionEyebrow: "Unsere Mission",
    missionH2a: "Nachhaltigkeit kein",
    missionH2b: "Pflichtprogramm.",
    missionP1: "Ein guter ESG-Bericht soll nicht Monate dauern und ein Vermögen kosten. Was er braucht, ist ein funktionierendes Datensystem, das beim ersten Bericht entsteht und danach automatisch läuft.",
    missionP2: "Sustainista baut genau das: keine Einmalgutachten, die nach einem Jahr veraltet sind, sondern Infrastruktur, die Ihre Nachhaltigkeitsdaten kontinuierlich erfasst, strukturiert und berichtet.",
    missionPoints: [
      { label: "Klar statt kompliziert", desc: "Fachdaten in verständliche Handlungsoptionen übersetzen." },
      { label: "Systeme, keine Einmalberichte", desc: "Alles, was wir aufbauen, ist wiederverwendbar." },
      { label: "Ergebnis in Wochen", desc: "Erste messbare Resultate in 4 bis 6 Wochen." },
      { label: "Persönlich & direkt", desc: "Kein Zwischenpersonal. Direkter Zugang zu Expert:innen." },
    ],
    approachEyebrow: "Unser Ansatz in der Praxis",
    approachSteps: [
      { step: "01", title: "Erstgespräch & Scope", body: "Wir verstehen Ihre Situation, prüfen Fördermöglichkeiten und legen den Umfang gemeinsam fest." },
      { step: "02", title: "Daten & Analyse", body: "Sie stellen Rohdaten bereit. Wir strukturieren, berechnen und bauen das Datensystem auf." },
      { step: "03", title: "Bericht & Review", body: "Erster prüfbarer Bericht in 4 bis 6 Wochen, mit Präsentation, Feedback-Runde und Handlungsempfehlungen." },
      { step: "04", title: "Automatisierung", body: "Das aufgebaute System läuft weiter. Jedes folgende Jahr kostet deutlich weniger als das erste." },
    ],
    teamEyebrow: "Das Team",
    teamH2a: "Expert:innen für",
    teamH2b: "nachhaltige Transformation.",
    stefanRole: "Gründer & CEO",
    stefanLocation: "Wien, Österreich",
    stefanBio1: "Stefan hat Sustainista gegründet, weil er sah, wie KMU zwischen wachsendem regulatorischen Druck und fehlenden praxistauglichen Lösungen feststecken. Er bringt mehr als 15 Jahre Erfahrung an der Schnittstelle von Technologie, Innovation und Nachhaltigkeit mit, als Researcher, Strategieberater und Unternehmensgründer. Seine Kernexpertise liegt in GHG Protocol-konformer Emissionsbilanzierung (Scope 1–3), CSRD/ESRS-Readiness für KMU und der KI-gestützten Automatisierung von ESG-Datenerfassung.",
    stefanBio2: "Bei Sustainista verantwortet er Strategie, Kundenbeziehungen und die inhaltliche Qualität jedes ESG- und DPP-Projekts. Er arbeitet direkt mit Geschäftsführungen zusammen, ohne Zwischenpersonal. Er berät KMU in Österreich und Deutschland beim Aufbau von Nachhaltigkeitsdatensystemen, die von Wirtschaftsprüfern geprüft werden können.",
    stefanLinkedin: "LinkedIn Profil ansehen",
    interviewEyebrow: "Öko-Business Wien · Juli 2025",
    interviewH3a: "5 Fragen an Dr. Stefan Bauer",
    interviewH3b: "zum KMU Nachhaltigkeitskompass.",
    interviewQuotes: [
      '„Wir beraten hauptsächlich kleine und mittlere Unternehmen mit Fokus auf praxisnaher Umsetzung, strategischer Weitsicht und echtem Verständnis für die Herausforderungen des Mittelstands.“',
      '„Technische Vorkenntnisse sind nicht erforderlich. Was wirklich zählt, ist der Wille zur Veränderung.“',
      '„KMU, die früh handeln, sichern sich einen echten Wettbewerbsvorteil: regulatorische Sicherheit, Kosteneinsparungen und neue Innovationspotenziale inklusive.“',
    ],
    interviewCta: "Interview lesen",
    interviewChancesLabel: "Fünf Chancen für KMU",
    interviewChances: [
      "Wettbewerbsvorteil durch frühe Positionierung",
      "Regulatorische Sicherheit vor CSRD-Anforderungen",
      "Kosteneinsparungen durch Ressourcenschonung",
      "Mitarbeiterbindung durch werteorientierte Kultur",
      "Innovationspotenziale als strategischer Hebel",
    ],
    team: [
      { name: "Silke Herrnreiter", role: "Expertin ESG & Nachhaltigkeitsstrategie", bio: "Silke bringt langjährige Expertise in ESG-Strategie, Nachhaltigkeitsberichterstattung und Unternehmenstransformation mit. Sie begleitet Unternehmen dabei, Nachhaltigkeit als strategischen Wettbewerbsvorteil zu nutzen.", expertise: ["ESG-Strategie", "Nachhaltigkeitsberichterstattung", "Unternehmenstransformation", "CSRD"], linkedin: "https://www.linkedin.com/in/silke-herrnreiter-esg/" },
      { name: "Hubert Forster", role: "Experte Kreislaufwirtschaft & DPP", bio: "Hubert ist Spezialist für Kreislaufwirtschaft, Produktlebenszyklen und den Digitalen Produktpass. Er begleitet Unternehmen bei der strategischen Positionierung im Rahmen der EU ESPR-Verordnung.", expertise: ["Digitaler Produktpass", "EU ESPR", "Kreislaufwirtschaft", "Produktstrategie"] },
      { name: "Sara Safavirad", role: "Expertin ESG & Compliance", bio: "Sara bringt tiefes Fachwissen in ESG-Regulierung, CSRD und nachhaltigem Finanzwesen mit. Sie begleitet Unternehmen bei der CSRD-Readiness, der Aufstellung von Nachhaltigkeitsberichten und der Kommunikation mit Finanzierungspartnern.", expertise: ["CSRD & ESRS", "ESG-Reporting", "Nachhaltigkeitsfinanzierung", "Compliance"] },
    ],
    brandEyebrow: "Hinter den Kulissen",
    brandH2a: "Wir haben auch",
    brandH2b: "T-Shirts gedruckt.",
    brandP1: "Nachhaltigkeit ernst nehmen und trotzdem Spaß haben, das war von Anfang an Teil unserer DNA. Unsere Logo-Evolution zeigt, wie wir von mutig-experimentell zu klar und wiedererkennbar gewachsen sind.",
    brandP2: "Vier Drucke. Vom Graffiti-Style über den Kolibri bis zum heutigen klaren Sustainista-Grün. Jedes Shirt ein Kapitel. Und ja, die Totebag gibt es auch noch.",
    brandItems: [
      { emoji: "🖤", label: "Der Anfang", desc: "Mutig, dunkel, mit Kolibri. Wir haben ausprobiert." },
      { emoji: "🟢", label: "Der Graffiti-Moment", desc: "Streetwear trifft Nachhaltigkeit. Warum nicht?" },
      { emoji: "🤍", label: "Heute", desc: "Klar, grün, direkt. Sustainability as a Service." },
    ],
    youtubeEyebrow: "YouTube",
    youtubeH2a: "Sustainista",
    youtubeH2b: "auf YouTube.",
    youtubeSub: "Einblicke, Eventmitschnitte und Wissen rund um ESG, Digitalen Produktpass und Nachhaltigkeit für KMU.",
    youtubeChannelCta: "Kanal auf YouTube öffnen",
    youtubePlay: "Video abspielen",
    youtubeConsent: "Beim Start wird eine Verbindung zu YouTube hergestellt.",
    youtubeAllVideos: "Alle Videos ansehen",
    youtubeVideos: [
      { id: "fvoTBR_Vkng", title: "Europe Tech Hackathon: so war es" },
      { id: "og69zvtwv2I", title: "Hinter den Kulissen: ViennaUP & Sustainista" },
    ],
    networkEyebrow: "Netzwerk, Medien & Anerkennung",
    networkH2: "Vertrauen, das wächst.",
    networkSub: "Sustainista arbeitet mit führenden Institutionen, Fördergebern und Technologiepartnern zusammen und wurde in mehreren Medien und Plattformen featured.",
    networkCards: [
      { title: "Microsoft for Startups", sub: "Technologiepartner für KI-Infrastruktur und Cloud-Lösungen", href: "https://www.microsoft.com/en-us/startups" },
      { title: "Vienna Business Agency", sub: "Sustainista im VBA Data Economy Report, featured im Wiener Startup-Ökosystem.", href: "https://viennabusinessagency.at/report-data-economy/?L=/en/4-ecosystem-3n2aFWLv/" },
      { title: "OeKB ESG Data Hub", sub: "Offizieller Partner für standardisierte ESG-Datenprozesse", href: "https://www.oekb.at/en/oekb-esg-data-hub/esg-netzwerk/sustainista.html" },
      { title: "Data Intelligence Network", sub: "Sustainista im Netzwerk: Über unsere Mission, datengetriebene Nachhaltigkeit für KMU zugänglich zu machen.", href: "https://dataintelligence.at/wir-bei-sustainista-glauben-dass-daten-die-welt-veraendern-koennen-willkommen-im-netzwerk/" },
      { title: "Green Tech Valley", sub: "Aufgenommen in die offizielle Übersicht der Green Tech Startups Austria.", href: "https://www.greentech.at/goodies/green-tech-startups-austria/" },
      { title: "DPP Austria", sub: "Sustainista als Projektpartner im DPP Austria Netzwerk für den Digitalen Produktpass.", href: "https://dpp-austria.at/project/sustainista-gmbh/" },
      { title: "Innovationskonferenz Wien", sub: "Sustainista als Teilnehmer der Innovationskonferenz Wien, dem Treffpunkt für Wiens Innovationsökosystem.", href: "https://innovationskonferenz-wien.at/participants/3315832" },
    ],
  },
  en: {
    eyebrow: "The team",
    h1a: "The people behind",
    h1b: "Sustainista.",
    sub: "We are a specialist team from Vienna helping SMEs think about sustainability systemically: with real data, reusable processes and AI automation.",
    breadcrumb: { home: "Home", current: "About us" },
    teamPhoto: {
      badge: "ViennaUP · Vienna",
      title: "One team. One mission.",
      caption: "The Sustainista team at the ViennaUP startup festival in Vienna: technology, sustainability and plenty of energy.",
      alt: "The Sustainista team in green team shirts at the ViennaUP startup festival in Vienna",
    },
    benefits: [
      { title: "Clear focus on SMEs", desc: "Solutions tailored to company size and budget" },
      { title: "Interdisciplinary team", desc: "Technology, law, science and practice" },
      { title: "Austria & DACH", desc: "Local expertise, European standards" },
      { title: "Own DPP platform", desc: "Signed, verifiable product and battery passports" },
    ],
    foundingEyebrow: "Why Sustainista?",
    foundingH2a: "Founded with a",
    foundingH2b: "conviction.",
    foundingP1: "When the EU's 2023 CSRD trilogue confirmed that reporting obligations would cascade down to SME suppliers, it was clear: most Austrian mid-sized companies have no three years to prepare. Large corporations like OMV, Verbund and Erste Bank have been requesting Scope 3 data from their suppliers since 2025. Companies without structured ESG data are losing contracts.",
    foundingP2: "Sustainista changed that. We don't build one-off reports. We build reusable data systems aligned to GHG Protocol and ESRS that grow with your company. The first auditable ESG report is ready in 4 to 6 weeks. Every subsequent one runs automatically.",
    stats: [
      { value: "15+", label: "Years of combined expertise in digitalisation & sustainability" },
      { value: "28", label: "Trends in the Sustainista Trend Radar 2026–2040" },
      { value: "4 to 6", label: "Weeks to the first auditable ESG report" },
      { value: "4", label: "Product categories with sample passports on the sustainista DPP platform" },
    ],
    missionEyebrow: "Our mission",
    missionH2a: "Sustainability not",
    missionH2b: "a compliance chore.",
    missionP1: "A good ESG report shouldn't take months or cost a fortune. What it needs is a working data system, built during the first report and then running automatically.",
    missionP2: "Sustainista builds exactly that: not one-off assessments that are outdated a year later, but infrastructure that continuously captures, structures and reports your sustainability data.",
    missionPoints: [
      { label: "Clear not complicated", desc: "Translating technical data into understandable action options." },
      { label: "Systems, not one-off reports", desc: "Everything we build is reusable." },
      { label: "Results in weeks", desc: "First measurable outcomes in 4 to 6 weeks." },
      { label: "Personal & direct", desc: "No middlemen. Direct access to experts." },
    ],
    approachEyebrow: "Our approach in practice",
    approachSteps: [
      { step: "01", title: "Initial call & scope", body: "We understand your situation, check funding options and define the scope together." },
      { step: "02", title: "Data & analysis", body: "You provide raw data. We structure, calculate and build the data system." },
      { step: "03", title: "Report & review", body: "First auditable report in 4 to 6 weeks, with presentation, feedback round and recommendations." },
      { step: "04", title: "Automation", body: "The built system keeps running. Every subsequent year costs significantly less than the first." },
    ],
    teamEyebrow: "The team",
    teamH2a: "Experts in",
    teamH2b: "sustainable transformation.",
    stefanRole: "Founder & CEO",
    stefanLocation: "Vienna, Austria",
    stefanBio1: "Stefan founded Sustainista when he saw how SMEs were caught between growing regulatory pressure and a lack of practical solutions. He brings more than 15 years of experience at the intersection of technology, innovation and sustainability: as a researcher, strategy consultant and entrepreneur. His core expertise covers GHG Protocol-compliant emissions accounting (Scope 1–3), CSRD/ESRS readiness for SMEs and AI-assisted automation of ESG data collection.",
    stefanBio2: "At Sustainista he is responsible for strategy, client relationships and the content quality of every ESG and DPP project. He works directly with management teams, no middlemen. He advises SMEs in Austria and Germany on building sustainability data systems that can withstand audit scrutiny.",
    stefanLinkedin: "View LinkedIn profile",
    interviewEyebrow: "Öko-Business Wien · July 2025",
    interviewH3a: "5 Questions for Dr. Stefan Bauer",
    interviewH3b: "on the SME Sustainability Compass.",
    interviewQuotes: [
      "\"We primarily advise small and medium-sized enterprises with a focus on practical implementation, strategic vision and genuine understanding of the challenges facing the Mittelstand.\"",
      "\"No technical prior knowledge is required. What really counts is the will to change.\"",
      "\"SMEs that act early secure a real competitive advantage: regulatory certainty, cost savings and new innovation potential included.\"",
    ],
    interviewCta: "Read interview",
    interviewChancesLabel: "Five opportunities for SMEs",
    interviewChances: [
      "Competitive advantage through early positioning",
      "Regulatory certainty before CSRD requirements",
      "Cost savings through resource efficiency",
      "Employee retention through values-driven culture",
      "Innovation potential as a strategic lever",
    ],
    team: [
      { name: "Silke Herrnreiter", role: "ESG & Sustainability Strategy Expert", bio: "Silke brings years of expertise in ESG strategy, sustainability reporting and corporate transformation. She supports companies in leveraging sustainability as a strategic competitive advantage.", expertise: ["ESG Strategy", "Sustainability Reporting", "Corporate Transformation", "CSRD"], linkedin: "https://www.linkedin.com/in/silke-herrnreiter-esg/" },
      { name: "Hubert Forster", role: "Circular Economy & DPP Expert", bio: "Hubert specialises in circular economy, product lifecycles and the Digital Product Passport. He supports companies in their strategic positioning under the EU ESPR regulation.", expertise: ["Digital Product Passport", "EU ESPR", "Circular Economy", "Product Strategy"] },
      { name: "Sara Safavirad", role: "ESG & Compliance Expert", bio: "Sara brings deep expertise in ESG regulation, CSRD and sustainable finance. She supports companies with CSRD readiness, sustainability reporting and communication with financing partners.", expertise: ["CSRD & ESRS", "ESG Reporting", "Sustainable Finance", "Compliance"] },
    ],
    brandEyebrow: "Behind the scenes",
    brandH2a: "We also had",
    brandH2b: "T-shirts printed.",
    brandP1: "Taking sustainability seriously while still having fun, that was part of our DNA from the start. Our logo evolution shows how we grew from bold and experimental to clear and recognisable.",
    brandP2: "Four prints. From graffiti style to the hummingbird to today's clean Sustainista green. Every shirt a chapter. And yes, the tote bag is still around.",
    brandItems: [
      { emoji: "🖤", label: "The beginning", desc: "Bold, dark, with hummingbird. We were experimenting." },
      { emoji: "🟢", label: "The graffiti moment", desc: "Streetwear meets sustainability. Why not?" },
      { emoji: "🤍", label: "Today", desc: "Clear, green, direct. Sustainability as a Service." },
    ],
    youtubeEyebrow: "YouTube",
    youtubeH2a: "Sustainista",
    youtubeH2b: "on YouTube.",
    youtubeSub: "Event footage, behind-the-scenes and knowledge on ESG, Digital Product Passport and sustainability for SMEs.",
    youtubeChannelCta: "Open channel on YouTube",
    youtubePlay: "Play video",
    youtubeConsent: "Starting the video connects to YouTube.",
    youtubeAllVideos: "View all videos",
    youtubeVideos: [
      { id: "fvoTBR_Vkng", title: "Europe Tech Hackathon: how it went" },
      { id: "og69zvtwv2I", title: "Behind the scenes: ViennaUP & Sustainista" },
    ],
    networkEyebrow: "Network, media & recognition",
    networkH2: "Trust that grows.",
    networkSub: "Sustainista works with leading institutions, funding bodies and technology partners and has been featured across media and startup platforms.",
    networkCards: [
      { title: "Microsoft for Startups", sub: "Technology partner for AI infrastructure and cloud solutions", href: "https://www.microsoft.com/en-us/startups" },
      { title: "Vienna Business Agency", sub: "Sustainista in the VBA Data Economy Report, featured in Vienna's startup ecosystem.", href: "https://viennabusinessagency.at/report-data-economy/?L=/en/4-ecosystem-3n2aFWLv/" },
      { title: "OeKB ESG Data Hub", sub: "Official partner for standardised ESG data processes", href: "https://www.oekb.at/en/oekb-esg-data-hub/esg-netzwerk/sustainista.html" },
      { title: "Data Intelligence Network", sub: "Sustainista featured in the network, on our mission to make data-driven sustainability accessible for SMEs.", href: "https://dataintelligence.at/wir-bei-sustainista-glauben-dass-daten-die-welt-veraendern-koennen-willkommen-im-netzwerk/" },
      { title: "Green Tech Valley", sub: "Listed in the official Green Tech Startups Austria overview.", href: "https://www.greentech.at/goodies/green-tech-startups-austria/" },
      { title: "DPP Austria", sub: "Sustainista as project partner in the DPP Austria network for the Digital Product Passport.", href: "https://dpp-austria.at/project/sustainista-gmbh/" },
      { title: "Innovationskonferenz Wien", sub: "Sustainista as participant at the Innovationskonferenz Wien, Vienna's innovation ecosystem meetup.", href: "https://innovationskonferenz-wien.at/participants/3315832" },
    ],
  },
};

const benefitIcons = [Target, Users, Globe, Award];


const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.example.invalid/ueber-uns",
      "name": "Über Sustainista: Team & Mission",
      "url": "https://www.example.invalid/ueber-uns",
      "description": "Das Sustainista-Team: Dr. Stefan Bauer und Spezialist:innen für ESG, Digitalen Produktpass, KI-Automatisierung und Kreislaufwirtschaft, Wien.",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "about": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Über uns", "item": "https://www.example.invalid/ueber-uns" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.example.invalid/#stefan-bauer",
      "name": "Dr. Stefan Bauer",
      "honorificPrefix": "Dr.",
      "givenName": "Stefan",
      "familyName": "Bauer",
      "jobTitle": "Gründer & CEO",
      "worksFor": { "@id": "https://www.example.invalid/#organization" },
      "url": "https://www.example.invalid/ueber-uns",
      "image": "https://www.example.invalid/stefan-bauer.jpeg",
      "email": "stefan.bauer@example.invalid",
      "description": "Nachhaltigkeitsexperte, Gründer von Sustainista und Spezialist für ESG-Daten, Digitalen Produktpass und KI-Automatisierung. Über 15 Jahre Erfahrung in Technologie und Innovation.",
      "knowsAbout": [
        "ESG-Daten", "CSRD", "ESRS", "GHG Protocol", "ISO 14067",
        "Digitaler Produktpass", "EU ESPR", "KI-Automatisierung",
        "Kreislaufwirtschaft", "Product Carbon Footprint",
      ],
      "sameAs": ["https://www.linkedin.com/in/stefan-bauer-innovator/"],
    },
    {
      "@type": "Person",
      "name": "Silke Herrnreiter",
      "jobTitle": "Expertin ESG & Nachhaltigkeitsstrategie",
      "worksFor": { "@id": "https://www.example.invalid/#organization" },
      "description": "ESG-Strategie, Nachhaltigkeitsberichterstattung und Unternehmenstransformation für nachhaltige Wettbewerbsvorteile.",
      "knowsAbout": ["ESG-Strategie", "Nachhaltigkeitsberichterstattung", "Unternehmenstransformation", "CSRD"],
      "sameAs": ["https://www.linkedin.com/in/silke-herrnreiter-esg/"],
    },
    {
      "@type": "Person",
      "name": "Hubert Forster",
      "jobTitle": "Experte Kreislaufwirtschaft & DPP",
      "worksFor": { "@id": "https://www.example.invalid/#organization" },
      "description": "Spezialist für Kreislaufwirtschaft, Produktlebenszyklen und den Digitalen Produktpass gemäß EU ESPR-Verordnung.",
      "knowsAbout": ["Digitaler Produktpass", "EU ESPR", "Kreislaufwirtschaft", "Produktstrategie"],
    },
    {
      "@type": "Person",
      "name": "Sara Safavirad",
      "jobTitle": "Expertin ESG & Compliance",
      "worksFor": { "@id": "https://www.example.invalid/#organization" },
      "description": "Fachwissen in ESG-Regulierung, CSRD, ESRS und nachhaltigem Finanzwesen. Begleitung von Unternehmen bei CSRD-Readiness und Nachhaltigkeitsberichten.",
      "knowsAbout": ["CSRD", "ESRS", "ESG-Reporting", "Nachhaltigkeitsfinanzierung", "Compliance"],
    },
  ],
};

export default function UeberUns() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>

        {/* Hero */}
        <section className="page-header relative min-h-[50vh] flex items-end pt-28 pb-16 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">{t.breadcrumb.home}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{t.breadcrumb.current}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">{t.eyebrow}</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              {t.h1a}<br />
              <span className="text-brand-600">{t.h1b}</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl">{t.sub}</p>
          </div>
        </section>

        {/* Team photo, full width */}
        <section className="bg-canvas pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="relative rounded-[16px] overflow-hidden border border-border shadow-md">
              <Image
                src="/team-viennaup-2026.jpg"
                alt={t.teamPhoto.alt}
                width={2400}
                height={1599}
                priority
                sizes="(max-width: 1280px) 100vw, 1216px"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 bg-canvas/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-ink shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-600" aria-hidden="true" />
                {t.teamPhoto.badge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="text-white font-black tracking-tight leading-tight mb-2" style={{ fontSize: "clamp(1.5rem,3.5vw,2.75rem)" }}>
                  {t.teamPhoto.title}
                </p>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl">{t.teamPhoto.caption}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits bar */}
        <section className="py-12 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.benefits.map(({ title, desc }, i) => {
                const Icon = benefitIcons[i];
                return (
                  <div key={title} className="flex flex-col items-center text-center gap-2 py-4">
                    <Icon className="w-5 h-5 text-brand-600 mb-1" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-sm font-semibold text-ink">{title}</span>
                    <span className="text-xs text-ink-tertiary leading-relaxed">{desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">{t.foundingEyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  {t.foundingH2a}<br />
                  <span className="text-ink-tertiary">{t.foundingH2b}</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{t.foundingP1}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">{t.foundingP2}</p>
                <div className="flex flex-wrap gap-2">
                  {["GHG Protocol", "CSRD / ESRS", "EU Battery Regulation", "ISO 14064", "EU ESPR"].map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-ink-secondary font-medium">{s}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {t.stats.map(({ value, label }) => (
                  <div key={value} className="bg-surface border border-border rounded-card p-6">
                    <p className="text-3xl font-black text-brand-600 mb-2">{value}</p>
                    <p className="text-xs text-ink-secondary leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="eyebrow mb-4">{t.missionEyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  {t.missionH2a}<br />
                  <span className="text-ink-tertiary">{t.missionH2b}</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{t.missionP1}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">{t.missionP2}</p>
                <div className="space-y-3">
                  {t.missionPoints.map(({ label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        <span className="font-semibold text-ink">{label}: </span>{desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface border border-border rounded-card p-7">
                <p className="eyebrow mb-5">{t.approachEyebrow}</p>
                <div className="space-y-5">
                  {t.approachSteps.map(({ step, title, body }) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="text-xs font-black text-brand-600 w-6 flex-shrink-0 mt-0.5">{step}</span>
                      <div>
                        <p className="text-sm font-semibold text-ink mb-1">{title}</p>
                        <p className="text-xs text-ink-secondary leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{t.teamEyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              {t.teamH2a}<br />
              <span className="text-ink-tertiary">{t.teamH2b}</span>
            </h2>

            {/* Stefan Bauer, featured */}
            <div className="bg-canvas border border-border rounded-card overflow-hidden mb-6">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative min-h-[360px] md:min-h-[460px]">
                  <Image
                    src="/stefan-bauer.jpeg"
                    alt="Dr. Stefan Bauer, Gründer & CEO von Sustainista"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-[center_15%]"
                    priority
                  />
                </div>
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="eyebrow mb-3">{t.stefanRole}</p>
                  <h3 className="text-2xl font-black text-ink mb-1">Dr. Stefan Bauer</h3>
                  <p className="text-sm text-brand-600 font-semibold mb-5">{t.stefanLocation}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6">{t.stefanBio1}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-7">{t.stefanBio2}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {["ESG-Daten & Reporting", "Digitaler Produktpass", "KI-Automatisierung", "Kreislaufwirtschaft"].map((e) => (
                      <span key={e} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-surface text-ink-tertiary font-medium">{e}</span>
                    ))}
                  </div>
                  <a
                    href="https://www.linkedin.com/in/stefan-bauer-innovator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    {t.stefanLinkedin}
                  </a>
                </div>
              </div>
            </div>

            {/* Öko-Business Wien Interview */}
            <div className="relative bg-white border border-border rounded-card overflow-hidden mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Image src="/partner-oeko-business-wien.png" alt="Öko-Business Wien Logo" width={120} height={48} className="object-contain h-10 w-auto" />
                    <span className="text-xs text-ink-tertiary font-medium uppercase tracking-wider">Interview</span>
                  </div>
                  <p className="eyebrow mb-3">{t.interviewEyebrow}</p>
                  <h3 className="text-xl sm:text-2xl font-black text-ink tracking-tight leading-[1.1] mb-6">
                    {t.interviewH3a}<br />
                    <span className="text-brand-600">{t.interviewH3b}</span>
                  </h3>
                  <div className="space-y-5 mb-8">
                    {t.interviewQuotes.map((q, i) => (
                      <blockquote key={i} className="border-l-2 border-brand-500 pl-4">
                        <p className="text-sm text-ink-secondary leading-relaxed italic">{q}</p>
                      </blockquote>
                    ))}
                  </div>
                  <a
                    href="https://unternehmen.oekobusiness.wien.at/kategorie/news/2025/07/5-fragen-an-dr-stefan-bauer-zum-kmu-nachhaltigkeitskompass/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {t.interviewCta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
                <div className="lg:col-span-2 bg-surface border-t lg:border-t-0 lg:border-l border-border p-8 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-ink-tertiary uppercase tracking-wider mb-5">{t.interviewChancesLabel}</p>
                  <div className="space-y-4">
                    {t.interviewChances.map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-xs font-black text-brand-600 w-6 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.team.map((member) => (
                <div key={member.name} className="bg-canvas border border-border rounded-card overflow-hidden">
                  <div className="h-56 bg-brand-50 border-b border-border flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-brand-600 flex items-center justify-center text-canvas text-3xl font-black">
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-base font-bold text-ink mb-0.5">{member.name}</h3>
                    <p className="text-xs text-brand-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-5">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.expertise.map((e) => (
                        <span key={e} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-surface text-ink-tertiary font-medium">{e}</span>
                      ))}
                    </div>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] text-brand-600 font-semibold hover:underline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-4">{t.youtubeEyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  {t.youtubeH2a}<br />
                  <span className="text-brand-600">{t.youtubeH2b}</span>
                </h2>
                <p className="text-sm text-ink-secondary mt-3 max-w-xl leading-relaxed">{t.youtubeSub}</p>
              </div>
              <a
                href="https://www.youtube.com/@Sustainista"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c00000] text-white px-5 py-3 rounded-btn text-xs font-bold uppercase tracking-[0.08em] hover:bg-[#990000] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                {t.youtubeChannelCta}
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.youtubeVideos.map((video) => (
                <div key={video.id}>
                  <div className="relative w-full rounded-card overflow-hidden border border-border shadow-ambient-low" style={{ paddingTop: "56.25%" }}>
                    <YoutubeFacade
                      videoId={video.id}
                      title={video.title}
                      playLabel={t.youtubePlay}
                      consentNote={t.youtubeConsent}
                    />
                  </div>
                  <p className="text-sm font-semibold text-ink mt-3 leading-snug">{video.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/@Sustainista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-ink-secondary hover:text-ink hover:border-ink-secondary bg-canvas px-5 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all"
              >
                {t.youtubeAllVideos}
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Brand Evolution */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative w-[300px] sm:w-[360px] lg:w-full lg:max-w-[420px] aspect-[3/4] rounded-[16px] overflow-hidden shadow-md border border-border rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image src="/team-tshirts.jpg" alt="Sustainista Merch-Evolution: T-Shirts und Totebag mit verschiedenen Logo-Generationen" fill sizes="(max-width: 1024px) 360px, 420px" className="object-cover object-center" />
                </div>
                <div className="absolute -bottom-4 -right-2 sm:right-4 lg:-right-6 bg-brand-600 text-canvas text-[11px] font-semibold px-4 py-2 rounded-full shadow-lg">
                  4 Designs. 1 Idee. ✦
                </div>
              </div>
              <div>
                <p className="eyebrow mb-4">{t.brandEyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  {t.brandH2a}<br />
                  <span className="text-brand-600">{t.brandH2b}</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{t.brandP1}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-8">{t.brandP2}</p>
                <div className="space-y-3">
                  {t.brandItems.map(({ emoji, label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-base leading-none mt-0.5 flex-shrink-0">{emoji}</span>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        <span className="font-semibold text-ink">{label}: </span>{desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner & Institutionen */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{t.networkEyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">{t.networkH2}</h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-12">{t.networkSub}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.networkCards.map(({ title, sub, href }) =>
                href ? (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all block"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-bold text-ink group-hover:text-brand-600 transition-colors">{title}</p>
                      <ExternalLink className="w-3.5 h-3.5 text-ink-tertiary flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-ink-secondary leading-relaxed">{sub}</p>
                  </a>
                ) : (
                  <div key={title} className="border border-border rounded-card p-6 bg-surface">
                    <p className="text-sm font-bold text-ink mb-2">{title}</p>
                    <p className="text-xs text-ink-secondary leading-relaxed">{sub}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
