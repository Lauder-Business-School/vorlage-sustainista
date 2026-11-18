/**
 * KI-Datenpipeline: unstrukturierte Belege → Extraktion → Prüfregeln → strukturierter Datensatz → Berichte.
 * Darunter ein Aufwandsvergleich je Jahresbericht (illustrativ).
 */
const SOURCES = [
  { t: "Eingangsrechnungen", s: "PDF, Scan" },
  { t: "Lieferantenmails", s: "Anhänge, Freitext" },
  { t: "ERP-Export", s: "CSV, SAP, BMD" },
  { t: "Reisekosten", s: "Belege, Kilometer" },
];

const FIELDS = [
  { k: "Lieferant", v: "Stahlhandel GmbH", c: 99 },
  { k: "Material", v: "Flachstahl S235", c: 96 },
  { k: "Menge", v: "4.200 kg", c: 98 },
  { k: "Lieferdatum", v: "14.03.", c: 99 },
  { k: "Emissionsfaktor", v: "Stahl, Primär", c: 87 },
];

const CHECKS = ["Einheiten normalisiert", "Dubletten entfernt", "Plausibilität je Lieferant", "Unsichere Werte zur Freigabe"];
const OUTPUTS = ["CO₂-Bilanz Scope 1–3", "VSME-Bericht", "Produktpass-Daten"];

const W = 1120;
const H = 360;

export default function AutomationPipeline() {
  const srcY = (i: number) => 30 + i * 80;
  const flows = [
    ...SOURCES.map((_, i) => `M220 ${srcY(i) + 30} C280 ${srcY(i) + 30}, 280 180, 330 180`),
    "M590 180 C620 180, 620 180, 650 180",
    "M870 180 C900 180, 900 70, 930 70",
    "M870 180 C900 180, 900 180, 930 180",
    "M870 180 C900 180, 900 290, 930 290",
  ];

  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
      <div className="mb-4">
        <p className="text-sm font-bold text-ink">Vom Beleg zur Bilanz, ohne Abtippen</p>
        <p className="text-xs text-ink-tertiary">So läuft ein Dokument durch die Pipeline. Die Prozentwerte zeigen, wie sicher die KI ein Feld erkannt hat.</p>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full min-w-[760px] h-auto" role="img" aria-label="Pipeline: Rechnungen, Mails, ERP-Export und Reisekosten werden von der KI ausgelesen, durch Prüfregeln validiert und fließen in CO₂-Bilanz, VSME-Bericht und Produktpass-Daten.">
          {flows.map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" stroke="var(--color-brand-200)" strokeWidth="2" />
              <path d={d} fill="none" stroke="var(--color-brand-600)" strokeWidth="2.5" strokeLinecap="round" pathLength={100} className="lca-flow" style={{ animationDelay: `${-i * 0.4}s` }} />
            </g>
          ))}

          {/* Quellen */}
          {SOURCES.map((s, i) => (
            <g key={s.t}>
              <rect x="10" y={srcY(i)} width="210" height="60" rx="8" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
              <path d={`M26 ${srcY(i) + 16} h16 l6 6 v22 h-22 z`} fill="var(--color-canvas)" stroke="var(--color-ink-tertiary)" strokeWidth="1.5" />
              <text x="60" y={srcY(i) + 27} fontSize="13.5" fontWeight="700" fill="var(--color-ink)">{s.t}</text>
              <text x="60" y={srcY(i) + 45} fontSize="11.5" fill="var(--color-ink-tertiary)">{s.s}</text>
            </g>
          ))}

          {/* KI-Extraktion */}
          <rect x="330" y="40" width="260" height="280" rx="10" fill="var(--color-canvas)" stroke="var(--color-brand-600)" strokeWidth="1.5" />
          <rect x="330" y="40" width="260" height="34" rx="10" fill="var(--color-brand-700)" />
          <rect x="330" y="60" width="260" height="14" fill="var(--color-brand-700)" />
          <text x="346" y="62" fontSize="12" fontWeight="700" letterSpacing="0.08em" fill="var(--color-canvas)">KI-EXTRAKTION</text>
          {FIELDS.map((f, i) => {
            const y = 96 + i * 44;
            return (
              <g key={f.k}>
                <title>{`${f.k}: ${f.v}, Sicherheit ${f.c} %`}</title>
                <text x="346" y={y} fontSize="10.5" fill="var(--color-ink-tertiary)">{f.k}</text>
                <text x="346" y={y + 16} fontSize="13" fontWeight="600" fill="var(--color-ink)">{f.v}</text>
                <rect x="506" y={y + 6} width="54" height="6" rx="3" fill="var(--color-border)" />
                <rect x="506" y={y + 6} width={54 * (f.c / 100)} height="6" rx="3" fill={f.c < 90 ? "var(--color-caution)" : "var(--color-brand-600)"} />
                <text x="574" y={y + 13} fontSize="10.5" fontWeight="700" textAnchor="end" fill="var(--color-ink-secondary)" dx="10">{f.c}</text>
              </g>
            );
          })}

          {/* Prüfregeln */}
          <rect x="650" y="70" width="220" height="220" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
          <text x="666" y="96" fontSize="12" fontWeight="700" letterSpacing="0.08em" fill="var(--color-brand-700)">PRÜFREGELN</text>
          {CHECKS.map((c, i) => (
            <g key={c}>
              <circle cx="676" cy={128 + i * 40} r="9" fill={i === 3 ? "var(--color-caution)" : "var(--color-brand-600)"} />
              <path d={i === 3 ? `M676 ${123 + i * 40} v6 M676 ${132 + i * 40} v1` : `M671 ${128 + i * 40} l3.5 3.5 l6 -7`} stroke="var(--color-canvas)" strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="694" y={132 + i * 40} fontSize="12.5" fill="var(--color-ink)">{c}</text>
            </g>
          ))}

          {/* Ausgaben */}
          {OUTPUTS.map((o, i) => {
            const y = 44 + i * 110;
            return (
              <g key={o}>
                <rect x="930" y={y} width="180" height="52" rx="8" fill="var(--color-brand-700)" />
                <text x="946" y={y + 31} fontSize="13.5" fontWeight="700" fill="var(--color-canvas)">{o}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Aufwandsvergleich */}
      <div className="mt-6 border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-3 items-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary sm:row-span-2">Aufwand je Jahresbericht</p>
        {[
          { l: "Manuell, Excel", h: 160, c: "bg-border-strong" },
          { l: "Mit Pipeline", h: 18, c: "bg-brand-600" },
        ].map((r) => (
          <div key={r.l} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-xs text-ink-secondary">{r.l}</span>
            <span className={`h-3 rounded-r-sm ${r.c}`} style={{ width: `${(r.h / 160) * 70}%` }} />
            <span className="text-sm font-bold text-ink tabular-nums">{r.h} h</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-[11px] text-ink-tertiary">
        Illustratives Beispiel. Felder unter 90 % Sicherheit landen nicht automatisch in der Bilanz, sondern bei einer Person zur Freigabe.
      </figcaption>
    </figure>
  );
}
