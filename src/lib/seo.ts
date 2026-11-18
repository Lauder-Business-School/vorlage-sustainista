/**
 * Seitentitel für Suchergebnisse. Entfernt einen bereits angehängten Markennamen
 * und verzichtet auf das Template " | Sustainista", wenn der Titel sonst über
 * etwa 62 Zeichen hinausgeht und in Google abgeschnitten würde.
 */
export function seoTitle(raw: string): string | { absolute: string } {
  const t = raw.replace(/\s*[,|–-]\s*Sustainista\s*$/i, "").trim();
  return t.length + " | Sustainista".length > 62 ? { absolute: t } : t;
}
