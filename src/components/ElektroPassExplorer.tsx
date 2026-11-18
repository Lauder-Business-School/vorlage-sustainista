"use client";
import { useState } from "react";
import { Check, ExternalLink, ShieldCheck, Terminal } from "lucide-react";

export type ExplorerPass = {
  uid: string;
  kategorie: string;
  kategorieName: string;
  titel: string;
  produkt: string;
  zeigt: string;
  felder: { gesamt: number; jeStufe: number[]; gruppen: number } | null;
  nachweis: { version: number; gueltig: boolean; vollstaendigkeit: number; gates: string[]; ausgestellt: string; hash: string } | null;
};
type Rolle = { id: string; name: string; stufen: number[] };
type Stufe = { nr: number; name: string; wer: string };

const GATES: Record<string, string> = {
  all_mandatory_groups: "Alle Pflichtgruppen befüllt",
  gln_format_valid: "GLN-Format gültig",
  hash_chain_intact: "Prüfsummenkette intakt",
  no_placeholder_values: "Keine Platzhalterwerte",
};

const STUFE_TONE = ["bg-brand-300", "bg-brand-500", "bg-brand-700", "bg-brand-900"];

/** Stilisierter QR-Code aus der UID: deterministisch, nicht scannbar, nur Bildsprache */
function PseudoQr({ seed }: { seed: string }) {
  const n = 13;
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const cells: [number, number][] = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      const finder = (x < 4 && y < 4) || (x > n - 5 && y < 4) || (x < 4 && y > n - 5);
      if (finder) continue;
      h = (h * 1103515245 + 12345) >>> 0;
      if ((h >>> 16) % 2) cells.push([x, y]);
    }
  const finders = [[0, 0], [n - 4, 0], [0, n - 4]];
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className="h-24 w-24 rounded-btn bg-canvas" aria-hidden="true">
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={4} height={4} fill="var(--color-ink)" />
          <rect x={x + 0.7} y={y + 0.7} width={2.6} height={2.6} fill="var(--color-canvas)" />
          <rect x={x + 1.3} y={y + 1.3} width={1.4} height={1.4} fill="var(--color-ink)" />
        </g>
      ))}
      {cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x + 0.08} y={y + 0.08} width={0.84} height={0.84} fill="var(--color-ink)" />)}
    </svg>
  );
}

export default function ElektroPassExplorer({ passes, rollen, stufen }: { passes: ExplorerPass[]; rollen: Rolle[]; stufen: Stufe[] }) {
  const [sel, setSel] = useState(0);
  const [rolle, setRolle] = useState(rollen[0].id);
  const p = passes[sel];
  const r = rollen.find((x) => x.id === rolle)!;
  const sichtbar = p.felder ? r.stufen.reduce((sum, s) => sum + (p.felder!.jeStufe[s - 1] ?? 0), 0) : null;
  const verifyUrl = `https://dpp.example.invalid/api/verify/${p.uid}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Auswahl */}
      <div role="group" aria-label="Musterpass wählen" className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0">
        {passes.map((x, i) => (
          <button
            key={x.uid}
            type="button"
            aria-pressed={sel === i}
            aria-controls="elektro-pass-panel"
            onClick={() => setSel(i)}
            className={`shrink-0 text-left rounded-card border px-4 py-3 transition-colors ${
              sel === i ? "border-brand-300 bg-brand-700/40" : "border-white/15 hover:border-white/40"
            }`}
          >
            <span className="block text-marke font-bold uppercase tracking-[0.08em] text-brand-300">{x.kategorieName}</span>
            <span className="block font-extrabold text-canvas">{x.titel}</span>
            <span className="block font-mono text-marke text-brand-100/60">{x.uid}</span>
          </button>
        ))}
      </div>

      {/* Pass */}
      <div id="elektro-pass-panel" className="lg:col-span-9 rounded-card bg-canvas text-ink overflow-hidden shadow-[8px_8px_0_var(--color-brand-700)]">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 p-6 sm:p-7 border-b md:border-b-0 md:border-r border-border">
            <div className="flex items-start gap-5 mb-5">
              <div className="shrink-0 text-center">
                <PseudoQr seed={p.uid} />
                <p className="mt-1 max-w-24 text-xs leading-tight text-ink-tertiary">Illustration, kein scannbarer QR-Code</p>
              </div>
              <div className="min-w-0">
                <p className="text-marke font-bold uppercase tracking-[0.08em] text-brand-700">Digitaler Produktpass · {p.kategorieName}</p>
                <p className="text-xl font-black leading-tight mt-1">{p.produkt}</p>
                <p className="font-mono text-xs text-ink-tertiary mt-1">{p.uid}</p>
                {p.nachweis && (
                  <p className={`mt-2 inline-flex items-center gap-1.5 rounded-btn px-2 py-0.5 text-marke font-bold ${p.nachweis.gueltig ? "bg-brand-100 text-brand-800" : "bg-caution/10 text-caution"}`}>
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.nachweis.gueltig ? "Signatur und Prüfsumme gültig" : "Prüfung fehlgeschlagen"}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed mb-5">{p.zeigt}</p>

            {p.nachweis ? (
              <>
                <dl className="grid grid-cols-3 gap-3 mb-4">
                  <div className="rounded-btn bg-surface p-3">
                    <dt className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary">Version</dt>
                    <dd className="text-2xl font-black tabular-nums">{p.nachweis.version}</dd>
                  </div>
                  <div className="rounded-btn bg-surface p-3">
                    <dt className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary">{"Vollständig\u00ADkeit"}</dt>
                    <dd className="text-2xl font-black tabular-nums">{p.nachweis.vollstaendigkeit} %</dd>
                  </div>
                  <div className="rounded-btn bg-surface p-3">
                    <dt className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary">Prüfsumme</dt>
                    <dd className="font-mono text-xs font-semibold mt-2 truncate" title="SHA-256 des Snapshots, gekürzt">{p.nachweis.hash}…</dd>
                  </div>
                </dl>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {p.nachweis.gates.map((g) => (
                    <li key={g} className="flex items-center gap-2 text-xs text-ink-secondary">
                      <Check className="h-3.5 w-3.5 text-brand-600 shrink-0" aria-hidden="true" /> {GATES[g] ?? g}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-xs text-ink-tertiary">Die Prüfroute ist gerade nicht erreichbar; wir zeigen dann keine Werte statt veralteter.</p>
            )}
          </div>

          {/* Rollen */}
          <div className="md:col-span-5 p-6 sm:p-7 bg-surface">
            <p className="text-marke font-bold uppercase tracking-[0.08em] text-brand-700 mb-1">Wer sieht was?</p>
            <p className="text-xs text-ink-secondary mb-4">Offenlegungsstufen nach Art. 77 Batterieverordnung. Rolle wählen:</p>
            <div className="flex flex-wrap gap-1.5 mb-5" role="group" aria-label="Rolle wählen">
              {rollen.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={rolle === x.id}
                  onClick={() => setRolle(x.id)}
                  className={`rounded-btn px-2.5 py-1.5 text-xs font-semibold transition-colors ${rolle === x.id ? "bg-brand-700 text-canvas" : "bg-canvas border border-border text-ink-secondary hover:border-brand-600"}`}
                >
                  {x.name}
                </button>
              ))}
            </div>
            {p.felder && sichtbar !== null ? (
              <>
                <p className="mb-2">
                  <span className="text-4xl font-black tabular-nums">{sichtbar}</span>
                  <span className="text-sm text-ink-secondary"> von {p.felder.gesamt} Feldern sichtbar</span>
                </p>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-border mb-4" aria-hidden="true">
                  {stufen.map((s, i) => {
                    const n = p.felder!.jeStufe[i] ?? 0;
                    const on = r.stufen.includes(s.nr);
                    return <span key={s.nr} className={`${on ? STUFE_TONE[i] : "bg-transparent"} transition-all duration-300`} style={{ width: `${(n / p.felder!.gesamt) * 100}%` }} />;
                  })}
                </div>
                <ul className="space-y-2">
                  {stufen.map((s, i) => {
                    const on = r.stufen.includes(s.nr);
                    return (
                      <li key={s.nr} className={`flex items-start gap-2.5 text-xs ${on ? "text-ink" : "text-ink-tertiary line-through decoration-ink-tertiary/50"}`}>
                        <span className={`mt-0.5 h-3 w-3 shrink-0 rounded-sm ${on ? STUFE_TONE[i] : "border border-border-strong"}`} aria-hidden="true" />
                        <span className="flex-1"><b>{s.name}</b> · {s.wer}</span>
                        <span className="tabular-nums font-semibold">{p.felder!.jeStufe[i] ?? 0}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <p className="text-xs text-ink-tertiary">Der Feldkatalog ist gerade nicht erreichbar.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-border bg-canvas px-6 py-4">
          <a href={`https://dpp.example.invalid/de/passport/${p.uid}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-canvas hover:bg-brand-700">
            Pass öffnen <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 items-center gap-2 rounded-btn border border-border px-3 py-2 font-mono text-marke text-ink-secondary hover:border-brand-600">
            <Terminal className="h-3.5 w-3.5 shrink-0 text-brand-700" aria-hidden="true" />
            <span className="truncate">curl {verifyUrl.replace("https://", "")}</span>
          </a>
          <span className="text-marke text-ink-tertiary sm:ml-auto">Selbst prüfen, ohne uns zu fragen.</span>
        </div>
      </div>
    </div>
  );
}
