export interface CircularStockSource {
  /** Referenznummer, z. B. 1 für [1] */
  id: number;
  title: string;
  institution: string;
  url: string;
  /** Datum der letzten inhaltlichen Prüfung (ISO) */
  lastReviewed: string;
}

const LAST_REVIEWED = "2026-07-19";

export const circularStockSources: CircularStockSource[] = [
  {
    id: 1,
    title: "Verordnung (EU) 2024/1781: Ökodesign-Verordnung (ESPR)",
    institution: "Europäische Union / EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 2,
    title: "Delegierte Verordnung (EU) 2026/296: Ausnahmen vom Vernichtungsverbot",
    institution: "Europäische Union / EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg_del/2026/296/oj",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 3,
    title: "Durchführungsverordnung (EU) 2026/2: Offenlegungsformat",
    institution: "Europäische Union / EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2/oj",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 4,
    title: "EU-Strategie für nachhaltige und kreislauffähige Textilien",
    institution: "Europäische Kommission",
    url: "https://environment.ec.europa.eu/strategy/textiles-strategy_en",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 5,
    title: "Richtlinie (EU) 2025/1892: erweiterte Herstellerverantwortung für Textilien",
    institution: "Europäische Union / EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/dir/2025/1892/oj",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 6,
    title: "EU-SME-Definition",
    institution: "Europäische Kommission",
    url: "https://single-market-economy.ec.europa.eu/smes/sme-fundamentals/sme-definition_en",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: 7,
    title: "PACE-DPP-Projekt",
    institution: "Österreichische Forschungsförderungsgesellschaft (FFG)",
    url: "https://projekte.ffg.at/projekt/5128301",
    lastReviewed: LAST_REVIEWED,
  },
];

export const circularStockSourcesReviewDate = "19. Juli 2026";

export function getSource(id: number): CircularStockSource {
  const source = circularStockSources.find((s) => s.id === id);
  if (!source) throw new Error(`Unbekannte Circular-Stock-Quelle: [${id}]`);
  return source;
}
