/**
 * Marken, die die Route /api/leads in leads.notes setzt. Sie steuern nur interne Abläufe
 * (zum Beispiel: Hinweis zum Beispielbericht schon verschickt) und gehören nicht in Texte,
 * die ein Sprachmodell oder ein Mensch außerhalb von Sustainista liest.
 */
export const MARKE_BEISPIELBERICHT = "[beispielbericht-angefragt]";

/** notes ohne interne Marken, für die Anweisung an das Sprachmodell. Leer wird „keine“. */
export function notizenFuerPrompt(notes: string | null | undefined): string {
  const ohne = (notes ?? "").split(` ${MARKE_BEISPIELBERICHT}`).join("").split(MARKE_BEISPIELBERICHT).join("").trim();
  return ohne || "keine";
}
