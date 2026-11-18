// Ergebnis des Speicherversuchs eines Leads. "failed" ist kein Abbruch:
// solange die Mail rausgeht, ist der Lead nicht verloren.
export type LeadStore =
  | { kind: "stored"; id: string }
  | { kind: "duplicate" }
  | { kind: "failed"; reason: string };

export type LeadOutcome = {
  status: number;
  body: Record<string, unknown>;
};

/**
 * Entscheidet, was der Absender zurueckbekommt. Ein Fehler geht nur dann an den
 * Interessenten, wenn der Lead wirklich verloren ist: weder in der Datenbank noch
 * per Mail zugestellt. Vorher fuehrte jeder Datenbankfehler zu 500, obwohl die
 * Mail haette rausgehen koennen.
 */
export function leadOutcome(store: LeadStore, mailed: boolean): LeadOutcome {
  if (store.kind === "duplicate") {
    return { status: 200, body: { ok: true, duplicate: true } };
  }
  if (store.kind === "stored") {
    return { status: 200, body: { ok: true, lead_id: store.id, stored: true, mailed } };
  }
  if (mailed) {
    return { status: 200, body: { ok: true, stored: false, mailed: true } };
  }
  return { status: 500, body: { error: "Serverfehler" } };
}
