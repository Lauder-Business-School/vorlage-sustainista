/**
 * Maschinenlesbarer Überblick über Sustainista: eine Quelle für llms.txt,
 * llms-full.txt und den Leistungskatalog im Organization-Schema.
 * Nur belegbare Aussagen; keine Förderquoten, keine Pauschal-Compliance.
 */
export const SITE = "https://www.example.invalid";

export const ORG_SUMMARY =
  "Sustainista ist ein österreichisches Team für ESG-Daten, Digitalen Produktpass (DPP), Batteriepass, Product Carbon Footprint, LCA und KI-Automatisierung. " +
  "Wir bauen für KMU und Industrie in Österreich und im DACH-Raum wiederverwendbare Datensysteme statt Einmalgutachten und betreiben die sustainista DPP-Plattform für Batterie- und Produktpässe.";

export const SERVICES = [
  {
    name: "Compliance Check Batteriepass & Produktpass",
    url: "/produkte/compliance-check",
    desc: "Modularer Festpreis-Check: Readiness in rund vier Wochen (Rollenmatrix, Gap-Analyse, Musterpass, Lieferantenanfragen, Maßnahmenplan), Meldedaten-Check jedes Pflichtfelds mit Beleg bis zu stichtagsfertigen Pässen, sowie PPWR- und EPR-Check für Verpackung, Elektrogeräte und Batterien. Keine Abnahmeverpflichtung, Daten jederzeit exportierbar.",
    keywords: ["Compliance Check Batteriepass", "Batteriepass Readiness", "Meldedaten Batteriepass", "EPR Meldung", "PPWR Check", "Batteriepass Stichtag 2027"],
  },
  {
    name: "Batteriepass (Battery Passport Light)",
    url: "/produkte/batteriepass",
    desc: "Digitaler Batteriepass nach Batterieverordnung (EU) 2023/1542, Pflicht ab 18. Februar 2027 für LMT-, EV- und Industriebatterien über 2 kWh: Datenaudit, Zugriffsrollen nach Art. 77, QR-Code, veröffentlichter Pass auf der sustainista DPP-Plattform.",
    keywords: ["Batteriepass", "Battery Passport", "Batterieverordnung 2023/1542", "Batteriepass Österreich", "Batteriepass Pflicht 2027"],
  },
  {
    name: "Digitaler Produktpass (DPP)",
    url: "/produkte/digitaler-produktpass",
    desc: "Digitaler Produktpass nach ESPR je Produktgruppe: dauerhafte Produkt-ID, Datenmodell, Zugriffsrollen, signierte und versionierte Pässe auf der sustainista DPP-Plattform. Kein allgemeiner DPP-Stichtag; Pflichten entstehen über eigene Rechtsakte je Produktgruppe.",
    keywords: ["Digitaler Produktpass", "DPP", "ESPR", "Produktpass Österreich", "DPP Plattform", "GS1 Digital Link"],
  },
  {
    name: "ESG-Analyse & CO₂-Bilanz (ESG Ready)",
    url: "/produkte/esg-analyse",
    desc: "CO₂-Bilanz nach GHG Protocol (Scope 1 bis 3) und ESG-Erstbericht nach VSME beziehungsweise dem Freiwilligen Standard VS (2026/1560) für KMU. Erste Ergebnisse in 4 bis 6 Wochen.",
    keywords: ["CO2-Bilanz KMU", "GHG Protocol", "VSME", "ESG-Bericht KMU", "Nachhaltigkeitsbericht Österreich"],
  },
  {
    name: "Product Carbon Footprint (PCF)",
    url: "/produkte/product-carbon-footprint",
    desc: "Produktbezogene CO₂-Bilanz nach ISO 14067 und GHG Product Standard, mit Bezugsgröße, Systemgrenze und dokumentierter Faktorversion.",
    keywords: ["Product Carbon Footprint", "PCF", "ISO 14067", "CO2-Fußabdruck Produkt", "PACT"],
  },
  {
    name: "LCA-Berechnung (Ökobilanz)",
    url: "/produkte/lca-berechnung",
    desc: "Life Cycle Assessment nach ISO 14040/14044 mit openLCA: Produktsystem, Hotspots, Wirkungskategorien und reproduzierbare Dokumentation.",
    keywords: ["LCA", "Ökobilanz", "Life Cycle Assessment", "openLCA", "ISO 14040"],
  },
  {
    name: "KI-Automatisierung",
    url: "/produkte/ki-automatisierung",
    desc: "KI-gestützte Extraktion aus Rechnungen und Lieferantendokumenten mit fachlicher Freigabe und automatisierten Datenpipelines für ESG- und Produktdaten.",
    keywords: ["KI-Automatisierung ESG", "Rechnungsextraktion", "KI Nachhaltigkeitsreporting", "ESG-Daten automatisieren"],
  },
  {
    name: "PPWR Compliance (Verpackungen)",
    url: "/produkte/ppwr-compliance",
    desc: "Verpackungsdaten für die EU-Verpackungsverordnung PPWR (2025/40), ARA- und LUCID-Meldungen vorbereiten.",
    keywords: ["PPWR", "Verpackungsverordnung", "LUCID", "ARA Meldung", "Verpackungsdaten"],
  },
  {
    name: "Circular Stock Management",
    url: "/produkte/circular-stock-management",
    desc: "Retouren und Restbestände in Mode und Handel dokumentiert weiterverwenden, im Kontext des EU-Vernichtungsverbots für unverkaufte Bekleidung und Schuhe.",
    keywords: ["Vernichtungsverbot", "Circular Stock", "Retouren Mode", "ESPR Textil"],
  },
] as const;

export const KNOWLEDGE = [
  { name: "Sustainista Trendradar 2026–2040", url: "/trendradar", desc: "28 konkrete Trends für Produkt- und Nachhaltigkeitsdaten mit Einsatzhorizont, Handlungsempfehlung, Gegenargument und 49 Primärquellen." },
  { name: "Trendradar Methodik und Quellen", url: "/trendradar/methodik", desc: "Bewertungsmaßstäbe, Zeitringe, Review-Raster, Versionsarchiv und Quellenregister." },
  { name: "Foresight 2035–2040", url: "/trendradar/foresight-2035-2040", desc: "Acht langfristige Anwendungsfelder mit Szenarien und Beobachtungssignalen." },
  { name: "ESG-Glossar", url: "/glossar", desc: "Fachbegriffe zu ESG, CSRD, VSME, DPP, PCF, LCA, GHG Protocol und KI verständlich erklärt." },
  { name: "Regelungslandkarte Batteriepass", url: "/produkte/batteriepass/regelungslandkarte", desc: "Gesetze, Normen und Anforderungen rund um den Batteriepass als Übersicht." },
  { name: "DPP-Datencheck", url: "/dpp-check", desc: "Kostenloser Selbstcheck: Sind Ihre Produktdaten bereit für den Digitalen Produktpass?" },
  { name: "Batteriepass-Check", url: "/batteriepass-check", desc: "Kostenloser Selbstcheck für Batteriehersteller, -händler und -vermieter." },
  { name: "ESG-Check", url: "/esg-check", desc: "Kostenloser ESG-Datencheck für KMU." },
  { name: "CO₂-Rechner", url: "/tools/co2-rechner", desc: "Emissionen für Österreich kostenlos berechnen." },
] as const;
