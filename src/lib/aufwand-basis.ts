/**
 * Ordnet die freiwillige Eingabe "mein heutiger Aufwand in Stunden" ein.
 *
 * Vorher fielen leer, 0 und Tippfehler alle drei still auf die Schaetzung zurueck. Wer 0
 * eintrug, bekam eine Ersparnis angezeigt, die aus unserer Schaetzung stammte und nicht aus
 * seiner Null: eine Zahl, die niemand nachvollziehen kann. Deshalb hat jeder Fall hier einen
 * eigenen Namen, und die Anzeige haengt daran.
 */

/** Hoechstwert der Eunomia-Studie ueber alle 19 befragten Unternehmen (Stunden pro Jahr). */
export const MAX_STUNDEN = 4000;

export type BasisKind =
  | "leer" // nichts eingetragen: wir rechnen mit unserer Schaetzung
  | "gueltig" // plausible Zahl: wir rechnen mit ihr
  | "null" // ausdrueckliche 0: es gibt nichts einzusparen
  | "ungueltig" // keine Zahl
  | "negativ" // Stunden koennen nicht negativ sein
  | "zu_gross"; // ausserhalb der Studienspanne

export type BasisErgebnis = {
  kind: BasisKind;
  /** Wert, mit dem gerechnet wird. Bei "null" ist das die 0, sonst nie 0. */
  basis: number;
  /** true, wenn die Zahl des Nutzers verwendet wird (auch bei 0). */
  eigeneZahl: boolean;
};

/** "1.200" ist im deutschen Sprachraum Tausend zweihundert, nicht eins Komma zwei. */
const DEUTSCHES_TAUSENDERFORMAT = /^\d{1,3}(\.\d{3})+(,\d+)?$/;

function parseZahl(roh: string): number {
  const ohneLeerzeichen = roh.replace(/\s/g, "");
  const normalisiert = DEUTSCHES_TAUSENDERFORMAT.test(ohneLeerzeichen)
    ? ohneLeerzeichen.replace(/\./g, "").replace(",", ".")
    : ohneLeerzeichen.replace(",", ".");
  return Number(normalisiert);
}

export function aufwandBasis(eingabe: string, schaetzung: number): BasisErgebnis {
  const roh = eingabe.trim();
  if (roh === "") return { kind: "leer", basis: schaetzung, eigeneZahl: false };

  const zahl = parseZahl(roh);
  if (!Number.isFinite(zahl)) return { kind: "ungueltig", basis: schaetzung, eigeneZahl: false };
  if (zahl < 0) return { kind: "negativ", basis: schaetzung, eigeneZahl: false };
  if (zahl === 0) return { kind: "null", basis: 0, eigeneZahl: true };
  if (zahl > MAX_STUNDEN) return { kind: "zu_gross", basis: schaetzung, eigeneZahl: false };
  return { kind: "gueltig", basis: zahl, eigeneZahl: true };
}
