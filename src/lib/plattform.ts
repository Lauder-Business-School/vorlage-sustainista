/**
 * Eine Quelle für die Plattform-Seiten (/plattform, /plattform/ki-zugang), den
 * Startseiten-Teaser, die Navigation und llms.txt.
 *
 * Aussagen zum Nachhaltigkeitsbericht kommen aus produkte/nachhaltigkeitsbericht/content.ts
 * (Spec N9, „Erlaubte Aussagen“), Aussagen zum MCP-Endpunkt aus dem Elektro-Repo
 * (apps/web/lib/mcp-oeffentlich.ts). Keine Aussage ohne diesen Beleg.
 */

export const DPP_PLATTFORM_URL = "https://dpp.example.invalid/de";

/** Öffentlicher Remote-MCP-Endpunkt der DPP-Plattform (Streamable HTTP, nur lesend). */
export const MCP_URL = "https://dpp.example.invalid/api/mcp";

/** args: die Argumente, mit denen die Live-Abfrage (McpLiveDemo) das Werkzeug zur Beispielfrage aufruft. */
export type McpWerkzeug = { name: string; titel: string; text: string; beispiel: string; args: Record<string, string | boolean> };

export const MCP_WERKZEUGE: McpWerkzeug[] = [
  {
    name: "katalog_lesen",
    titel: "Anhang-XIII-Katalog lesen",
    text: "Alle Datenpunkte des EU-Batteriepasses, gefiltert nach Kategorie (LMT, Industrie, EV), Anhang-Gruppe oder nur Pflichtfelder.",
    beispiel: "Welche Pflichtfelder hat ein Batteriepass für eine Traktionsbatterie in Gruppe D?",
    args: { category: "ev", group: "D", required_only: true },
  },
  {
    name: "feld_info",
    titel: "Ein Feld nachschlagen",
    text: "Rechtsgrundlage, Zugriffsstufe, Datentyp, Einheit und Plausibilitätsgrenzen eines einzelnen Datenpunkts.",
    beispiel: "Was genau verlangt das Feld zur CO₂-Fußabdruck-Leistungsklasse, und wer darf es sehen?",
    args: { key: "b_co2_performance_class" },
  },
  {
    name: "pass_lesen",
    titel: "Öffentlichen Pass lesen",
    text: "Die öffentliche Sicht eines veröffentlichten Passes im Format nach EN 18222, über die Pass-UID vom QR-Code.",
    beispiel: "Lies den Pass ATDEMODEMO0002 und fasse Hersteller, Chemie und CO₂-Angaben zusammen.",
    args: { uid: "ATDEMODEMO0002" },
  },
  {
    name: "gs1_link_pruefen",
    titel: "GS1 Digital Link auflösen",
    text: "Zerlegt einen GS1 Digital Link und prüft, ob er auf einen veröffentlichten Pass zeigt.",
    beispiel: "Zeigt der Link /01/04012345600001/21/DEMO-0002 auf einen veröffentlichten Pass?",
    args: { url: "/01/04012345600001/21/DEMO-0002" },
  },
];

export const PLATTFORM_SITEINDEX = [
  {
    name: "Sustainista Plattform",
    url: "/plattform",
    desc: "Überblick über die zwei Software-Produkte: Digitaler Produktpass (inkl. Batteriepass) und Nachhaltigkeitsbericht, mit gemeinsamem Prinzip: jeder Wert mit Herkunft, Freigabe durch Menschen.",
  },
  {
    name: "KI-Zugang: Sustainista in Claude und ChatGPT",
    url: "/plattform/ki-zugang",
    desc: `Öffentlicher, nur lesender MCP-Server der DPP-Plattform (${MCP_URL}): Anhang-XIII-Katalog, Feldinfo, öffentliche Pässe, GS1-Auflösung. Ohne Installation und ohne Schlüssel als Connector einbindbar.`,
  },
] as const;
