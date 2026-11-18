/**
 * Antwort von GET /api/pflichtenfinder/sitzung (Elektro, per Rewrite unter www.example.invalid).
 * Quelle der Typen: Elektro `apps/web/lib/pflichtenfinder/sitzung.ts`; Regeln und Texte bleiben dort.
 */

export interface FrageDto {
  id: string;
  titel: string;
  hilfe: string | null;
  mehrfach: boolean;
  vertiefung: boolean;
  werte: { wert: string; label: string }[];
  antwort: string[];
}

export interface KatalogZeileDto {
  id: string;
  quelle: string;
  wortlaut: string | null;
  auslegungOffen: string[];
  nachweis: string | null;
}

export interface EintragDto {
  id: string;
  titel: string;
  pass: "voraus" | "verneint" | "neutral" | null;
  frist: string | null;
  fundstelle: string | null;
  entwurf: boolean;
  adressatOffen: boolean;
  hinweis: string | null;
  klaerenSie: string[];
  katalog: KatalogZeileDto[];
  offenePunkte: { id: string; text: string }[];
  ohneKatalogeintrag: string | null;
  abweichungen: { id: string; text: string }[];
  engineLinks: { label: string; href: string }[];
}

export interface KatalogGruppeDto {
  kategorie: string;
  titel: string;
  prinzip: string;
  eintraege: { id: string; quelle: string; merkmale: string; hinweis: string | null; wortlaut: string | null }[];
}

export interface ErgebnisDto {
  stichtag: string;
  stand: string;
  zahlen: { pflichten: number; zuKlaeren: number; hintergrund: number; nichtBetroffen: number };
  klaerenSieZuerst: EintragDto[];
  pflichten: EintragDto[];
  hintergrund: EintragDto[];
  fristen: { datum: string; bedingt: boolean; titel: string; pass: EintragDto["pass"] }[];
  handlungsplan: { titel: string; frist: string; pass: EintragDto["pass"] }[];
  keinPass: boolean;
  profil: { parameter: string; status: "geklärt" | "offen"; werte: { text: string; fundstelle: string }[]; verantwortlich: string | null }[] | null;
  zuschnitte: { name: string; kategorie: string; pflichtfelder: number; faellig: number; spaeter: string[]; bedingt: number; zugangsstufen: string; katalog: string }[] | null;
  pruefliste: string[] | null;
  loesung: { offen: { id: string; text: string }[]; gruppen: KatalogGruppeDto[] } | null;
  empfehlungen: { offen: { id: string; text: string }[]; gruppen: KatalogGruppeDto[] } | null;
}

export interface SitzungDto {
  fragen: FrageDto[];
  naechste: string | null;
  vertiefung: string[];
  fortschritt: { beantwortet: number; gesamt: number };
  ergebnis: ErgebnisDto | null;
}

/** Steuerparameter der Seite; alles andere im Query sind Antworten (Frage-ID = Parametername). */
export const STEUERUNG = ["frage", "vertiefen", "fehler", "stichtag"] as const;
