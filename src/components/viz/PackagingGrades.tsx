import { AlertTriangle } from "lucide-react";

/**
 * Verpackungsstückliste eines Beispielartikels, eingeordnet in die Recyclingfähigkeits-Leistungsstufen A–E.
 * Grenzen laut Seite: ab 01.01.2030 nur A–C, ab 01.01.2038 nur A und B. Komponenten und Stufen illustrativ.
 */
type Grade = "A" | "B" | "C" | "D" | "E";
const GRADES: Grade[] = ["A", "B", "C", "D", "E"];

const BOM: { part: string; material: string; g: number; grade: Grade }[] = [
  { part: "Faltschachtel", material: "Wellpappe", g: 180, grade: "A" },
  { part: "Polsterung", material: "Formfaser", g: 60, grade: "A" },
  { part: "Schutzbeutel", material: "PE-Monofolie", g: 12, grade: "B" },
  { part: "Etikett", material: "PP auf PET", g: 3, grade: "C" },
  { part: "Klebeband", material: "PVC", g: 4, grade: "D" },
  { part: "Sichtfenster-Blister", material: "PET/PVC-Verbund", g: 25, grade: "E" },
];

const MAX_G = Math.max(...BOM.map((b) => b.g));
const TOTAL_G = BOM.reduce((a, b) => a + b.g, 0);

const COL: Record<Grade, string> = {
  A: "bg-brand-50",
  B: "bg-brand-50/60",
  C: "bg-surface",
  D: "bg-[color-mix(in_srgb,var(--color-caution)_8%,var(--color-canvas))]",
  E: "bg-[color-mix(in_srgb,var(--color-caution)_14%,var(--color-canvas))]",
};

export default function PackagingGrades() {
  const atRisk2030 = BOM.filter((b) => b.grade === "D" || b.grade === "E");
  const atRisk2038 = BOM.filter((b) => b.grade === "C");

  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-bold text-ink">Verpackungsstückliste nach Recyclingfähigkeit</p>
          <p className="text-xs text-ink-tertiary">Beispielartikel, {TOTAL_G} g Verpackung in 6 Komponenten · Stufen A bis E</p>
        </div>
        <div className="flex gap-5 text-xs">
          <p><b className="block text-2xl font-extrabold text-caution tabular-nums">{atRisk2030.length}</b>bis 2030 umstellen</p>
          <p><b className="block text-2xl font-extrabold text-ink tabular-nums">{atRisk2038.length}</b>bis 2038 umstellen</p>
        </div>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <div className="relative min-w-[640px] grid grid-cols-5 gap-1.5">
          {/* Stichtagslinien */}
          <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: "calc(60% - 1px)" }} aria-hidden="true">
            <span className="block h-full border-l-2 border-dashed border-caution" />
            <span className="absolute -top-1 left-1.5 whitespace-nowrap rounded-btn bg-caution px-1.5 py-0.5 text-[10px] font-bold text-canvas">ab 2030 nur A–C</span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: "calc(40% - 1px)" }} aria-hidden="true">
            <span className="block h-full border-l-2 border-dashed border-ink-tertiary" />
            <span className="absolute -top-1 left-1.5 whitespace-nowrap rounded-btn bg-ink-tertiary px-1.5 py-0.5 text-[10px] font-bold text-canvas">ab 2038 nur A–B</span>
          </div>

          {GRADES.map((gr) => (
            <div key={gr} className={`rounded-card ${COL[gr]} p-2.5 pt-8 min-h-[260px]`}>
              <p className={`mb-3 flex items-center gap-1.5 text-lg font-extrabold ${gr === "D" || gr === "E" ? "text-[#8a3f00]" : "text-ink"}`}>
                Stufe {gr}
                {(gr === "D" || gr === "E") && <AlertTriangle className="w-4 h-4" aria-hidden="true" />}
              </p>
              <ul className="space-y-2">
                {BOM.filter((b) => b.grade === gr).map((b) => (
                  <li key={b.part} className="rounded-btn border border-border bg-canvas p-2.5" title={`${b.part}, ${b.material}: ${b.g} g, Stufe ${b.grade}`}>
                    <p className="text-xs font-bold text-ink leading-tight">{b.part}</p>
                    <p className="text-[11px] text-ink-tertiary">{b.material}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`h-1.5 rounded-full ${gr === "D" || gr === "E" ? "bg-caution" : "bg-brand-600"}`} style={{ width: `${Math.max((b.g / MAX_G) * 70, 6)}%` }} />
                      <span className="text-[11px] font-semibold text-ink-secondary tabular-nums">{b.g} g</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-4 text-[11px] text-ink-tertiary">
        Illustratives Beispiel. Die Kriterien je Stufe legen delegierte Rechtsakte fest. Entscheidend ist, dass die Stückliste je Artikel strukturiert vorliegt, sonst lässt sich keine Stufe belastbar zuordnen.
      </figcaption>
    </figure>
  );
}
