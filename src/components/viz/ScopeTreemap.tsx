"use client";

import { useState } from "react";

const scopes = [
  {
    name: "Scope 3",
    label: "Lieferkette und weitere indirekte Emissionen",
    color: "bg-brand-600",
    total: 1375,
    items: [
      { label: "Eingekaufte Güter", value: 980 },
      { label: "Transport", value: 140 },
      { label: "Abfall und Sonstiges", value: 125 },
      { label: "Pendelwege", value: 85 },
      { label: "Dienstreisen", value: 45 },
    ],
  },
  {
    name: "Scope 2",
    label: "Eingekaufte Energie",
    color: "bg-brand-400",
    total: 210,
    items: [{ label: "Strom, UBA AT-Mix", value: 210 }],
  },
  {
    name: "Scope 1",
    label: "Direkte Emissionen",
    color: "bg-brand-800",
    total: 255,
    items: [
      { label: "Erdgas, Heizung und Prozesswärme", value: 160 },
      { label: "Fuhrpark, Diesel", value: 95 },
    ],
  },
] as const;

const total = scopes.reduce((sum, scope) => sum + scope.total, 0);
const format = (value: number) => value.toLocaleString("de-AT");
const percent = (value: number) => Math.round((value / total) * 100);

export default function ScopeTreemap() {
  const [selected, setSelected] = useState(0);
  const scope = scopes[selected];

  return (
    <figure>
      <div className="flex flex-wrap justify-between items-end gap-4 border-b border-border-strong pb-5">
        <div>
          <h3 className="text-xl font-bold text-ink">CO₂-Bilanz eines Metallbetriebs</h3>
          <p className="mt-1 text-base text-ink-secondary">Fiktives Beispiel · 120 Mitarbeitende · t CO₂e pro Jahr</p>
        </div>
        <p className="text-ink"><span className="text-3xl font-bold tabular-nums">{format(total)}</span> <span className="text-base">t CO₂e gesamt</span></p>
      </div>

      <div className="flex h-8 mt-8 overflow-hidden" role="img" aria-label={`Anteile an den Gesamtemissionen: ${scopes.map((item) => `${item.name} ${percent(item.total)} Prozent`).join(", ")}.`}>
        {scopes.map((item) => (
          <span key={item.name} className={item.color} style={{ width: `${item.total / total * 100}%` }} />
        ))}
      </div>
      <p className="mt-4 text-base text-ink-secondary">Wählen Sie einen Bereich, um seine Zusammensetzung zu sehen.</p>

      <div className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-5 border-t border-border-strong" aria-label="Emissionsbereiche">
          {scopes.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`w-full flex items-center gap-3 border-b border-border-strong py-4 text-left transition-colors hover:text-brand-700 ${selected === index ? "text-brand-700" : "text-ink"}`}
            >
              <span className={`w-3 h-3 shrink-0 ${item.color}`} aria-hidden="true" />
              <span className="flex-1"><span className="font-bold">{item.name}</span><span className="block text-sm text-ink-secondary">{item.label}</span></span>
              <span className="text-xl font-bold tabular-nums">{percent(item.total)} %</span>
              <span className="sr-only">{selected === index ? ", ausgewählt" : ", Details anzeigen"}</span>
            </button>
          ))}
        </div>
        <div className="lg:col-span-7" aria-live="polite" aria-atomic="true">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="text-xl font-bold text-ink">{scope.name}: {scope.label}</h4>
            <p className="text-base font-semibold text-ink">{format(scope.total)} t CO₂e</p>
          </div>
          <ul className="mt-4 divide-y divide-border-strong border-t border-border-strong">
            {scope.items.map((item) => (
              <li key={item.label} className="flex justify-between gap-5 py-3 text-base">
                <span className="text-ink-secondary">{item.label}</span>
                <span className="shrink-0 font-semibold text-ink tabular-nums">{format(item.value)} t</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-8 text-sm text-ink-secondary leading-relaxed">
        Illustratives Beispiel, keine Kundenbilanz. Die Verteilung hängt vom jeweiligen Unternehmen ab.
      </figcaption>
    </figure>
  );
}
