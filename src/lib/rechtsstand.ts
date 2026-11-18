/**
 * Letzte Prüfung des Rechtsstands auf Batteriepass- und DPP-Seite.
 * Eine Konstante für Zeitleiste, Fußnote und JSON-LD (lastReviewed, dateModified),
 * damit Datum und Inhalt nicht auseinanderlaufen. Bei jeder inhaltlichen
 * Rechtsprüfung hier nachziehen.
 */
export const RECHTSSTAND_ISO = "2026-10-05";

const [jahr, monat, tag] = RECHTSSTAND_ISO.split("-");

export const RECHTSSTAND_HINWEIS = `Rechtsstand geprüft am ${tag}.${monat}.${jahr}: Verordnung (EU) 2023/1542, konsolidierte Fassung vom 13.08.2026; Kommissions-FAQ Batterien, 1. Ausgabe September 2026. Keine Rechtsberatung.`;
