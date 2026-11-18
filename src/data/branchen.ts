export interface Branche {
  slug: string;
  name: string;
  nameEn: string;
  icon: string;
  heroHeadlineDe: string;
  heroHeadlineEn: string;
  heroSubDe: string;
  heroSubEn: string;
  heroCta: string;
  heroCtaEn: string;
  challengesDe: string[];
  challengesEn: string[];
  solutionsDe: { title: string; body: string }[];
  solutionsEn: { title: string; body: string }[];
  statsDe: { value: string; label: string }[];
  statsEn: { value: string; label: string }[];
  seoTitleDe: string;
  seoTitleEn: string;
  seoDescDe: string;
  seoDescEn: string;
}

export const BRANCHEN: Branche[] = [
  {
    slug: "metallverarbeitung",
    name: "Metallverarbeitung",
    nameEn: "Metal Processing",
    icon: "⚙️",
    heroHeadlineDe: "ESG & CSRD für die Metallverarbeitung",
    heroHeadlineEn: "ESG & CSRD for Metal Processing",
    heroSubDe: "Scope-1-Emissionen, Energieeffizienz und Digitaler Produktpass. Sustainista begleitet Metallbetriebe von der CO₂-Bilanz bis zur CSRD-konformen Berichterstattung.",
    heroSubEn: "Scope 1 emissions, energy efficiency and Digital Product Passport. Sustainista guides metal companies from CO₂ accounting to CSRD-compliant reporting.",
    heroCta: "Erstgespräch buchen",
    heroCtaEn: "Book initial call",
    challengesDe: [
      "Hoher Scope-1-Anteil durch Schmelz- und Härteprozesse",
      "Lieferkettentransparenz für Automobil- und Maschinenkunden",
      "Digitaler Produktpass ab 2026 für viele Metallerzeugnisse Pflicht",
      "EU-Taxonomy-Klassifizierung von Investitionen",
    ],
    challengesEn: [
      "High Scope 1 share from smelting and hardening processes",
      "Supply chain transparency for automotive and machinery customers",
      "Digital Product Passport mandatory for many metal products from 2026",
      "EU Taxonomy classification of investments",
    ],
    solutionsDe: [
      { title: "CO₂-Bilanzierung Scope 1–3", body: "Wir berechnen Ihre Emissionen nach GHG Protocol mit branchenspezifischen Emissionsfaktoren für Metallverarbeitung und erstellen einen revisionssicheren Bericht." },
      { title: "Digitaler Produktpass", body: "Wir implementieren den DPP nach EU-Verordnung, verknüpft mit Ihrem ERP, maschinenlesbar und kundenseitig abrufbar." },
      { title: "CSRD-Bericht", body: "Vollständige CSRD-Berichterstattung nach ESRS, inklusive doppelter Wesentlichkeitsanalyse und OeKB ESG Data Hub Befüllung." },
    ],
    solutionsEn: [
      { title: "CO₂ accounting Scope 1–3", body: "We calculate your emissions according to GHG Protocol with sector-specific emission factors for metal processing and produce an audit-proof report." },
      { title: "Digital Product Passport", body: "We implement the DPP per EU regulation, linked to your ERP, machine-readable and accessible to customers." },
      { title: "CSRD report", body: "Full CSRD reporting per ESRS, including double materiality analysis and OeKB ESG Data Hub submission." },
    ],
    statsDe: [
      { value: "12 %", label: "Scope-1-Anteil an Industrieemissionen AT" },
      { value: "4–6 Wochen", label: "bis zu ersten belastbaren Ergebnissen" },
      { value: "2026", label: "DPP-Pflicht für viele Metallerzeugnisse" },
    ],
    statsEn: [
      { value: "12 %", label: "Scope 1 share of industrial emissions AT" },
      { value: "4–6 weeks", label: "to first reliable results" },
      { value: "2026", label: "DPP obligation for many metal products" },
    ],
    seoTitleDe: "ESG-Daten & CO₂-Bilanz für Metallverarbeitung in Österreich",
    seoTitleEn: "ESG & CSRD for Metal Processing Austria | Sustainista",
    seoDescDe: "CO₂-Bilanz, Product Carbon Footprint und Digitaler Produktpass für Metallbetriebe in Österreich. Förderbar über ÖkoBusiness Wien und Ökomanagement NÖ.",
    seoDescEn: "CO₂ accounting, product carbon footprint and Digital Product Passport for metal companies in Austria. Fundable via ÖkoBusiness Wien and Ökomanagement NÖ.",
  },
  {
    slug: "einzelhandel",
    name: "Einzelhandel",
    nameEn: "Retail",
    icon: "🛍️",
    heroHeadlineDe: "ESG & CSRD für den Einzelhandel",
    heroHeadlineEn: "ESG & CSRD for Retail",
    heroSubDe: "Lieferkettentransparenz, Verpackungsnachhaltigkeit und ESG-Berichterstattung. Sustainista hilft Einzelhändlern, CSRD-Anforderungen zu erfüllen und Kundenvertrauen zu stärken.",
    heroSubEn: "Supply chain transparency, packaging sustainability and ESG reporting. Sustainista helps retailers meet CSRD requirements and strengthen customer trust.",
    heroCta: "Erstgespräch buchen",
    heroCtaEn: "Book initial call",
    challengesDe: [
      "Scope-3-Emissionen durch komplexe internationale Lieferketten",
      "EU-Verpackungsverordnung und Reduktionspflichten",
      "Greenwashing-Risiko bei Nachhaltigkeitskommunikation",
      "CSRD-Druck durch große Handelspartner und Eigenmarken",
    ],
    challengesEn: [
      "Scope 3 emissions from complex international supply chains",
      "EU Packaging Regulation and reduction obligations",
      "Greenwashing risk in sustainability communication",
      "CSRD pressure from large trading partners and own-label brands",
    ],
    solutionsDe: [
      { title: "Lieferketten-ESG-Screening", body: "Wir erfassen und bewerten Ihre Lieferantendaten systematisch, inklusive Scope-3-Berechnung und CBAM-Vorbereitungshilfe." },
      { title: "Nachhaltigkeitsbericht", body: "CSRD-konformer ESG-Bericht mit doppelter Wesentlichkeit, von der Datenbasis bis zur Veröffentlichung im OeKB Hub." },
      { title: "Product Carbon Footprint", body: "Wir berechnen den PCF für Ihre umsatzstärksten Eigenmarken und machen sie für Ihre Kunden ausweisbar." },
    ],
    solutionsEn: [
      { title: "Supply chain ESG screening", body: "We systematically capture and assess your supplier data, including Scope 3 calculation and CBAM preparation assistance." },
      { title: "Sustainability report", body: "CSRD-compliant ESG report with double materiality, from data foundation to publication in the OeKB Hub." },
      { title: "Product Carbon Footprint", body: "We calculate the PCF for your top-revenue own-label products and make them disclosable to customers." },
    ],
    statsDe: [
      { value: "70 %", label: "der KMU-Emissionen liegen in Scope 3" },
      { value: "> 1.000", label: "Beschäftigte und > 450 Mio. € Umsatz: CSRD-Pflicht nach Omnibus I" },
      { value: "€ 1.000", label: "Eigenanteil dank Ökobusiness Wien" },
    ],
    statsEn: [
      { value: "70 %", label: "of SME emissions are in Scope 3" },
      { value: "> 1,000", label: "employees and > €450m turnover: CSRD obligation after Omnibus I" },
      { value: "€ 1,000", label: "own contribution thanks to Ökobusiness Wien" },
    ],
    seoTitleDe: "ESG-Daten, Produktpass & CO₂-Bilanz für den Einzelhandel",
    seoTitleEn: "ESG & CSRD for Retail Austria | Sustainista",
    seoDescDe: "Lieferkettendaten, Digitaler Produktpass, Vernichtungsverbot und PCF für Einzelhändler in Österreich. Förderbar über ÖkoBusiness Wien und Ökomanagement NÖ.",
    seoDescEn: "Supply chain data, Digital Product Passport, destruction ban and PCF for retailers in Austria. Fundable via ÖkoBusiness Wien and Ökomanagement NÖ.",
  },
  {
    slug: "produktion",
    name: "Produktion & Fertigung",
    nameEn: "Manufacturing",
    icon: "🏭",
    heroHeadlineDe: "ESG & CSRD für Produktionsbetriebe",
    heroHeadlineEn: "ESG & CSRD for Manufacturing",
    heroSubDe: "Von der CO₂-Bilanz über den Digitalen Produktpass bis zur CSRD-Berichterstattung. Sustainista unterstützt Fertigungsunternehmen auf dem Weg zur messbaren Nachhaltigkeit.",
    heroSubEn: "From CO₂ accounting through Digital Product Passport to CSRD reporting. Sustainista supports manufacturing companies on their path to measurable sustainability.",
    heroCta: "Erstgespräch buchen",
    heroCtaEn: "Book initial call",
    challengesDe: [
      "Scope-1- und Scope-2-Emissionen aus Energie und Produktionsprozessen",
      "Lieferkettensorgfaltspflicht (LkSG DE / EUDR AT) ab 2024/2025",
      "Großkunden fordern CSRD-Nachweise für Ausschreibungen",
      "KI-Automatisierung von ESG-Datenprozessen als Wettbewerbsvorteil",
    ],
    challengesEn: [
      "Scope 1 and Scope 2 emissions from energy and production processes",
      "Supply chain due diligence (LkSG DE / EUDR AT) from 2024/2025",
      "Large customers require CSRD evidence for tenders",
      "AI automation of ESG data processes as competitive advantage",
    ],
    solutionsDe: [
      { title: "CO₂-Bilanz & Energieaudit", body: "Vollständige Scope-1/2/3-Bilanzierung nach GHG Protocol, kombinierbar mit Energieeffizienz-Beratung und förderbar über ÖkoBusiness Wien oder Ökomanagement NÖ." },
      { title: "KI-Automatisierung ESG-Daten", body: "Wir automatisieren Ihre ESG-Datenerfassung und -auswertung mit KI, Zeitersparnis bis zu 70 %." },
      { title: "CSRD-Readiness-Check", body: "Wir analysieren Ihre aktuelle Datenlage, identifizieren Lücken und erstellen einen konkreten Maßnahmenplan für CSRD-Compliance." },
    ],
    solutionsEn: [
      { title: "CO₂ accounting & energy audit", body: "Full Scope 1/2/3 accounting per GHG Protocol, combinable with energy efficiency consulting and fundable via ÖkoBusiness Wien or Ökomanagement NÖ." },
      { title: "AI automation of ESG data", body: "We automate your ESG data collection and analysis with AI, time savings up to 70%." },
      { title: "CSRD readiness check", body: "We analyse your current data situation, identify gaps and create a concrete action plan for CSRD compliance." },
    ],
    statsDe: [
      { value: "Scope 1–3", label: "CO₂-Bilanz nach GHG Protocol" },
      { value: "70 %", label: "Zeitersparnis durch KI-Automatisierung" },
      { value: "19.03.2027", label: "Frist zur Umsetzung von Omnibus I in nationales Recht" },
    ],
    statsEn: [
      { value: "Scope 1–3", label: "CO₂ accounting per GHG Protocol" },
      { value: "70 %", label: "time savings through AI automation" },
      { value: "19 Mar 2027", label: "Deadline to transpose Omnibus I into national law" },
    ],
    seoTitleDe: "Produktpass, PCF & CO₂-Bilanz für Produktionsbetriebe",
    seoTitleEn: "ESG & CSRD for Manufacturing Austria | Sustainista",
    seoDescDe: "CO₂-Bilanz, Product Carbon Footprint, Digitaler Produktpass und KI-Automatisierung für Produktionsbetriebe in Österreich. Förderbar über ÖkoBusiness Wien und Ökomanagement NÖ.",
    seoDescEn: "CO₂ accounting, product carbon footprint, Digital Product Passport and AI automation for manufacturers in Austria. Fundable via ÖkoBusiness Wien and Ökomanagement NÖ.",
  },
  {
    slug: "lebensmittel",
    name: "Lebensmittel & Agrar",
    nameEn: "Food & Agriculture",
    icon: "🌾",
    heroHeadlineDe: "ESG & CSRD für Lebensmittel & Agrar",
    heroHeadlineEn: "ESG & CSRD for Food & Agriculture",
    heroSubDe: "Von Scope-3-Landwirtschaftsemissionen über EU-Entwaldungsverordnung bis zum Product Carbon Footprint. Sustainista begleitet Lebensmittelbetriebe durch alle ESG-Anforderungen.",
    heroSubEn: "From Scope 3 agricultural emissions through EU Deforestation Regulation to Product Carbon Footprint. Sustainista guides food companies through all ESG requirements.",
    heroCta: "Erstgespräch buchen",
    heroCtaEn: "Book initial call",
    challengesDe: [
      "Scope-3-Landwirtschaftsemissionen (Methan, Lachgas, Landnutzung)",
      "EU-Entwaldungsverordnung (EUDR) ab Ende 2024",
      "Product Carbon Footprint für Eigenmarken und Handelspartner",
      "Lebensmittel-Transparenz-Initiative und Kundenanforderungen",
    ],
    challengesEn: [
      "Scope 3 agricultural emissions (methane, nitrous oxide, land use)",
      "EU Deforestation Regulation (EUDR) from end of 2024",
      "Product Carbon Footprint for own-label and trading partners",
      "Food transparency initiative and customer requirements",
    ],
    solutionsDe: [
      { title: "Agrar-CO₂-Bilanz", body: "Spezialisierte Bilanzierung von Landwirtschafts-Emissionen nach GHG Protocol Agri-Guidance, inklusive Biogenik und Landnutzungsänderungen." },
      { title: "EUDR-Compliance", body: "Wir prüfen Ihre Lieferketten auf EUDR-Konformität und erstellen die notwendige Sorgfaltserklärung für Rohstoffe wie Soja, Palmöl und Kakao." },
      { title: "Product Carbon Footprint", body: "Wir berechnen den PCF für Ihre meistverkauften Produkte nach ISO 14067, kommunikationsreif und handelstauglich." },
    ],
    solutionsEn: [
      { title: "Agricultural CO₂ accounting", body: "Specialised accounting of agricultural emissions per GHG Protocol Agri Guidance, including biogenic carbon and land use change." },
      { title: "EUDR compliance", body: "We check your supply chains for EUDR compliance and prepare the required due diligence statement for commodities like soy, palm oil and cocoa." },
      { title: "Product Carbon Footprint", body: "We calculate the PCF for your best-selling products per ISO 14067, ready for communication and trade." },
    ],
    statsDe: [
      { value: "30 %", label: "globale Emissionen aus Lebensmittelsystem" },
      { value: "2024", label: "EUDR-Pflicht für viele Rohstoffe" },
      { value: "ISO 14067", label: "Standard für Product Carbon Footprint" },
    ],
    statsEn: [
      { value: "30 %", label: "global emissions from food system" },
      { value: "2024", label: "EUDR obligation for many commodities" },
      { value: "ISO 14067", label: "standard for Product Carbon Footprint" },
    ],
    seoTitleDe: "ESG-Daten & CO₂-Bilanz für Lebensmittel & Agrar",
    seoTitleEn: "ESG & CSRD for Food & Agriculture Austria | Sustainista",
    seoDescDe: "Agrar-CO₂-Bilanz, EUDR-Daten und Product Carbon Footprint für Lebensmittelbetriebe in Österreich. Förderbar über ÖkoBusiness Wien und Ökomanagement NÖ.",
    seoDescEn: "Agricultural CO₂ accounting, EUDR data and PCF for food companies in Austria. Fundable via ÖkoBusiness Wien and Ökomanagement NÖ.",
  },
];

export const BRANCHEN_MAP = Object.fromEntries(BRANCHEN.map((b) => [b.slug, b]));
