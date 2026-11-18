/**
 * Die Interessen-Auswahl des Kontaktformulars. Einzige Quelle: das Formular rendert
 * daraus die Optionen, die Route prueft dagegen. Vorher stand die Liste doppelt im Code
 * (Contact.tsx und /api/contact) und lief auseinander, wodurch jede Absendung 400 ergab.
 * Wer eine Option aendert, aendert sie hier.
 */
export const CONTACT_OPTIONS = {
  de: [
    "ESG Ready: Berichte & CO₂-Bilanz",
    "KI-Automatisierung für Nachhaltigkeitsdaten",
    "Digitaler Produktpass / Kreislaufwirtschaft",
    "Product Carbon Footprint",
    "Battery Passport Light",
    "Förderfähigkeit prüfen",
  ],
  en: [
    "ESG Ready: reports & CO₂ accounting",
    "AI automation for sustainability data",
    "Digital Product Passport / circular economy",
    "Product Carbon Footprint",
    "Battery Passport Light",
    "Check funding eligibility",
  ],
} as const;

/** Alle gueltigen Werte beider Sprachen. Die Route kennt die Sprache des Absenders nicht. */
export const VALID_CONTACT_OPTIONS: ReadonlySet<string> = new Set([
  ...CONTACT_OPTIONS.de,
  ...CONTACT_OPTIONS.en,
]);
