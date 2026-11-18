/**
 * Sustainista Trendradar: gemeinsame Konfiguration und Datenzugriff.
 * Einzige Quelle für Radar, Liste, Karten, Themenseiten und Magazin.
 * Inhalte: src/data/trendradar/*.json, erzeugt aus docs/trendradar-briefing-2026-10.md
 * mit scripts/parse-trendradar.py. Nie die JSON-Werte an zwei Stellen pflegen.
 */
import trendsData from "@/data/trendradar/trends.json";
import sourcesData from "@/data/trendradar/sources.json";
import regulatoryData from "@/data/trendradar/regulatory.json";
import productsData from "@/data/trendradar/products.json";
import foresightData from "@/data/trendradar/foresight.json";
import editorialData from "@/data/trendradar/editorial.json";

export const RADAR_VERSION = "2026.10-Foresight-2040";
export const SOURCE_DATE = "11. Oktober 2026";
export const SOURCE_DATE_ISO = "2026-10-11";
/** Ausgabe: Stand Oktober 2026, gedacht für die Planung ab Jahresbeginn 2027 */
export const EDITION_LABEL = "Ausgabe 2026/27";
/** Produktzuordnung der Trendkarten durch die Produktverantwortung intern bestätigt */
export const PRODUCT_MAPPING_APPROVED = "11. Oktober 2026";

export type Trend = {
  id: string;
  num: number;
  anchor: string;
  title: string;
  short: string;
  sector: string;
  horizon: string;
  planningWindow?: string;
  layer: "core" | "foresight";
  action: string;
  attractiveness: string;
  maturity: string;
  confidence: string;
  products: string[];
  sources: string[];
  rationale: string;
  trend?: string;
  startingPoint?: string;
  application: string;
  regulation: string;
  dataTech: string;
  counter: string;
  pilot?: string;
  watchSignals?: string;
  scenario2035?: string;
  scenario2040?: string;
  difference?: string;
};

export type Source = {
  id: string;
  title: string;
  publisher: string;
  type: string;
  url: string;
  altUrl: string | null;
  note: string;
};

export const TRENDS = trendsData as Trend[];
export const SOURCES = sourcesData as Source[];
export const REGULATORY = regulatoryData as { title: string; status: string; date: string; text: string }[];
export const PRODUCT_PLAN = productsData as {
  products: { name: string; first: string; next: string; proof: string }[];
  roadmap: { phase: string; text: string }[];
};
export const FORESIGHT = foresightData as {
  preparation: { id: string; contribution: string; prepare: string; partners: string }[];
  scenarios: { title: string; text: string }[];
  scenarioOutro: string;
};

type Section = { heading: string; paras: string[] };
export const EDITORIAL = editorialData as {
  strategy: string[];
  method: string[];
  assumptions: string[];
  magazine: { lead: string[]; sections: Section[] };
  foresightText: { intro: string[]; sections: Section[]; cta: string };
  responsibilities: string;
  reviewRhythm: string;
  productPageClaim: string;
};

export const SOURCE_BY_ID = Object.fromEntries(SOURCES.map((s) => [s.id, s])) as Record<string, Source>;
export const TREND_BY_ID = Object.fromEntries(TRENDS.map((t) => [t.id, t])) as Record<string, Trend>;

/* ── Sektoren in der Reihenfolge des Radars, der erste oben zentriert ── */
export const SECTORS = [
  { key: "Regulatorik und Nachweise", slug: "regulatorik-nachweise", short: "Regulatorik & Nachweise",
    lead: "Welche Pflicht gilt für welches Produkt, und woher stammt jede Zahl? Hier geht es um nachvollziehbare Pflicht- und Datenzuordnung.",
    cta: "Daten und Berichtspflichten einordnen" },
  { key: "Produktpässe und Datenaustausch", slug: "produktpaesse-datenaustausch", short: "Produktpässe & Datenaustausch",
    lead: "Identität, Datenmodell, Zugriffsrollen und Partneraustausch: was ein Produktpass braucht, damit er über Jahre und Anbieter hinweg trägt.",
    cta: "Produktpass-Grundlagen prüfen" },
  { key: "CO₂, Umweltwirkungen und Produktentwicklung", slug: "co2-produktentwicklung", short: "CO₂ & Produktentwicklung",
    lead: "Unternehmensbilanz, Product Carbon Footprint (PCF), Umweltproduktdeklaration (EPD) und prospektive LCA sauber abgrenzen und für Produktentscheidungen nutzen.",
    cta: "Produktdaten und Berechnungsmethoden prüfen" },
  { key: "Kreislaufwirtschaft und Lebensdauer", slug: "kreislaufwirtschaft", short: "Kreislauf & Lebensdauer",
    lead: "Batteriezustand, tatsächlicher Warenverbleib, Verpackungsprofile und Reparaturereignisse: Kreislaufwirtschaft braucht dokumentierte Vorgänge.",
    cta: "Weiterverwendung dokumentieren" },
  { key: "KI, Simulation und sichere Automatisierung", slug: "ki-automatisierung", short: "KI & Automatisierung",
    lead: "Zwischen verfügbarem Werkzeug, Pilot und Forschung unterscheiden. Belege, Prüfaufwand und Kosten sichtbar machen.",
    cta: "Einen begrenzten KI-Pilot auswählen" },
] as const;

export type Sector = (typeof SECTORS)[number];
export const sectorOf = (t: Trend) => SECTORS.find((s) => s.key === t.sector)!;

/* ── Zeitringe ── */
export const RINGS = [
  { key: "2026", label: "2026 · Heute nutzbar", badge: "Heute nutzbar", from: "2026",
    text: "Die technischen Grundlagen erlauben einen eingegrenzten Einsatz bereits heute. Integration und Nutzen müssen im eigenen Betrieb geprüft werden." },
  { key: "2027–2028", label: "2027–2028 · Nächster Ausbau", badge: "ab 2027", from: "2027",
    text: "Ein konkreter Ausbau oder Pilot ist plausibel. Abhängigkeiten wie Datenzugang, branchenspezifische Anforderungen und Freigaben bleiben zu lösen." },
  { key: "2029–2031", label: "2029–2031 · Ökosysteme verbinden", badge: "ab 2029", from: "2029",
    text: "Breitere Anwendung hängt von Partnern, Datenverfügbarkeit und gemeinsamen Schnittstellen ab. Einzelne Bausteine sind schon heute verfügbar." },
  { key: "2032–2036", label: "2032–2036 · Langfristig erkunden", badge: "ab 2032", from: "2032",
    text: "Explorative Anwendung für Sustainista-Kunden. Zeitpunkt und wirtschaftlicher Nutzen sind besonders unsicher; keine Marktdurchdringungsprognose." },
  { key: "2037–2040", label: "2037–2040 · Foresight", badge: "Foresight", from: "2037",
    text: "Acht zusätzliche Anwendungshypothesen. Die Karten erläutern vorhandene Bausteine, heutige Vorbereitung und bedingte Szenarien im Fenster 2035–2040." },
] as const;

export const ringIndex = (t: Trend) => RINGS.findIndex((r) => r.key === t.horizon);

/* ── Produktbezug: tatsächlich vorhandene Seiten im Projekt ── */
export const PRODUCT_LINKS: Record<string, string> = {
  "ESG Ready": "/produkte/esg-analyse",
  "KI Automation": "/produkte/ki-automatisierung",
  "Circular Business": "/produkte/digitaler-produktpass",
  "Circular Stock": "/produkte/circular-stock-management",
  "Battery Passport Light": "/produkte/batteriepass",
  "LCA-Berechnung": "/produkte/lca-berechnung",
};
export const PRODUCT_NAMES = Object.keys(PRODUCT_LINKS);

export const ACTION_TEXT: Record<string, string> = {
  Aufbauen: "Eine gemeinsame Grundlage priorisieren.",
  Pilotieren: "Einen begrenzten Anwendungsfall mit überprüfbaren Messgrößen durchführen.",
  Beobachten: "Verlangt einen definierten externen Auslöser.",
  Erkunden: "Eine Forschungsfrage ohne Produktzusage.",
};

/** Normalisiert für die Suche: CO₂ = CO2, Groß/Kleinschreibung und Akzente egal */
export const normalize = (s: string) =>
  s.toLowerCase().replace(/₂/g, "2").normalize("NFD").replace(/[̀-ͯ]/g, "");

export const searchText = (t: Trend) =>
  normalize([t.id, t.title, t.short, t.application, t.products.join(" "), t.sector].join(" "));

export const sourceHref = (id: string) => `/trendradar/methodik#quelle-${id.toLowerCase()}`;
export const trendHref = (t: Trend) => `/trendradar#${t.anchor}`;

/** Zerlegt Text mit Belegen wie "[S04, S05]" in Textteile und Quellenkennungen */
export function splitCitations(text: string): (string | { ids: string[] })[] {
  const out: (string | { ids: string[] })[] = [];
  const re = /\[(S\d\d(?:\s*,\s*S\d\d)*)\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push({ ids: m[1].split(/\s*,\s*/) });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export const trendsForProduct = (name: string) => TRENDS.filter((t) => t.products.includes(name));
export const trendsForSector = (slug: string) => TRENDS.filter((t) => sectorOf(t).slug === slug);
