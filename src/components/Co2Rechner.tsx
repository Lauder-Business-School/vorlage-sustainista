"use client";

import { useState } from "react";
import { Zap, Flame, Car, Plane, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FACTORS } from "@/lib/emission-factors";

const AT_BENCHMARK = 50_000; // kg CO₂e, österr. KMU-Benchmark p.a.

type Fields = {
  strom: string;
  fernwaerme: string;
  erdgas: string;
  heizoel: string;
  diesel: string;
  benzin: string;
  dienstreisen: string;
  flug_km: string;
};

const EMPTY: Fields = {
  strom: "",
  fernwaerme: "",
  erdgas: "",
  heizoel: "",
  diesel: "",
  benzin: "",
  dienstreisen: "",
  flug_km: "",
};

function n(val: string): number {
  const parsed = parseFloat(val.replace(",", "."));
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

function formatCO2(kg: number): { value: string; unit: string } {
  if (kg >= 1000) {
    return { value: (kg / 1000).toLocaleString("de-AT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), unit: "t CO₂e" };
  }
  return { value: kg.toLocaleString("de-AT", { minimumFractionDigits: 1, maximumFractionDigits: 1 }), unit: "kg CO₂e" };
}

interface InputRowProps {
  label: string;
  unit: string;
  field: keyof Fields;
  value: string;
  onChange: (field: keyof Fields, val: string) => void;
}

function InputRow({ label, unit, field, value, onChange }: InputRowProps) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor={`co2-${field}`} className="flex-1 text-sm text-ink-secondary leading-snug">
        {label}
      </label>
      <div className="flex items-center gap-2 flex-shrink-0">
        <input
          id={`co2-${field}`}
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          placeholder="0"
          className="w-28 rounded-btn border border-border bg-canvas px-3 py-2 text-ink text-sm text-right focus:outline-none focus:ring-1 focus:ring-brand-600 placeholder:text-ink-tertiary"
        />
        <span className="w-12 text-xs text-ink-tertiary text-left">{unit}</span>
      </div>
    </div>
  );
}

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Category({ title, icon, children }: CategoryProps) {
  return (
    <div className="rounded-[12px] border border-border bg-surface p-6 sm:p-8 space-y-4">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-brand-600">{icon}</span>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function Co2Rechner() {
  const [fields, setFields] = useState<Fields>(EMPTY);

  function handleChange(field: keyof Fields, val: string) {
    setFields((prev) => ({ ...prev, [field]: val }));
  }

  function handleReset() {
    setFields(EMPTY);
  }

  // Berechnung
  const scope2 = n(fields.strom) * FACTORS.strom + n(fields.fernwaerme) * FACTORS.fernwaerme;
  const scope1 =
    n(fields.erdgas) * FACTORS.erdgas +
    n(fields.heizoel) * FACTORS.heizoel +
    n(fields.diesel) * FACTORS.diesel +
    n(fields.benzin) * FACTORS.benzin;
  const scope3 = n(fields.dienstreisen) * FACTORS.dienstreisen + n(fields.flug_km) * FACTORS.flug;
  const total = scope1 + scope2 + scope3;

  const hasInput = Object.values(fields).some((v) => n(v) > 0);

  const totalFmt = formatCO2(total);
  const scope1Fmt = formatCO2(scope1);
  const scope2Fmt = formatCO2(scope2);
  const scope3Fmt = formatCO2(scope3);

  // Benchmark-Balken: Verhältnis zum österr. KMU-Durchschnitt
  const benchmarkPercent = Math.min((total / AT_BENCHMARK) * 100, 100);

  return (
    <div className="space-y-5">
      {/* Energie Gebäude */}
      <Category
        title="Energie (Gebäude)"
        icon={<Zap className="w-4 h-4" strokeWidth={1.5} />}
      >
        <InputRow label="Strom (Österreich-Mix)" unit="kWh" field="strom" value={fields.strom} onChange={handleChange} />
        <InputRow label="Fernwärme" unit="kWh" field="fernwaerme" value={fields.fernwaerme} onChange={handleChange} />
        <InputRow label="Erdgas" unit="m³" field="erdgas" value={fields.erdgas} onChange={handleChange} />
        <InputRow label="Heizöl (extraleicht)" unit="l" field="heizoel" value={fields.heizoel} onChange={handleChange} />
      </Category>

      {/* Mobilität & Fuhrpark */}
      <Category
        title="Mobilität & Fuhrpark"
        icon={<Car className="w-4 h-4" strokeWidth={1.5} />}
      >
        <InputRow label="Diesel (Fuhrpark)" unit="l" field="diesel" value={fields.diesel} onChange={handleChange} />
        <InputRow label="Benzin (Fuhrpark)" unit="l" field="benzin" value={fields.benzin} onChange={handleChange} />
      </Category>

      {/* Dienstreisen (Scope 3) */}
      <Category
        title="Dienstreisen (Scope 3)"
        icon={<Plane className="w-4 h-4" strokeWidth={1.5} />}
      >
        <InputRow label="Pkw-Dienstreisen" unit="km" field="dienstreisen" value={fields.dienstreisen} onChange={handleChange} />
        <InputRow label="Flüge (Passagier-km)" unit="km" field="flug_km" value={fields.flug_km} onChange={handleChange} />
      </Category>

      {/* Reset */}
      {hasInput && (
        <button type="button"
          onClick={handleReset}
          className="text-xs text-ink-tertiary hover:text-ink-secondary transition-colors underline underline-offset-2"
        >
          Eingaben zurücksetzen
        </button>
      )}

      {/* Ergebnisse */}
      {hasInput && (
        <div className="rounded-card bg-brand-50 border border-brand-200 p-5 sm:p-6 space-y-5">
          {/* Total */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-1">Ihre CO₂-Emissionen</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-brand-700 tabular-nums">{totalFmt.value}</span>
              <span className="text-lg font-semibold text-brand-600">{totalFmt.unit}</span>
            </div>
          </div>

          {/* Scope-Aufschlüsselung */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-field bg-white/70 border border-brand-200 px-4 py-3">
              <p className="text-[11px] font-semibold text-brand-700 mb-0.5">Scope 1</p>
              <p className="text-xs text-ink-secondary mb-1">Direkte Verbrennung</p>
              <p className="font-bold text-ink text-sm">{scope1Fmt.value} <span className="font-normal text-ink-tertiary">{scope1Fmt.unit}</span></p>
            </div>
            <div className="rounded-field bg-white/70 border border-brand-200 px-4 py-3">
              <p className="text-[11px] font-semibold text-brand-700 mb-0.5">Scope 2</p>
              <p className="text-xs text-ink-secondary mb-1">Strom &amp; Fernwärme</p>
              <p className="font-bold text-ink text-sm">{scope2Fmt.value} <span className="font-normal text-ink-tertiary">{scope2Fmt.unit}</span></p>
            </div>
            <div className="rounded-field bg-white/70 border border-brand-200 px-4 py-3">
              <p className="text-[11px] font-semibold text-brand-700 mb-0.5">Scope 3 (Teil)</p>
              <p className="text-xs text-ink-secondary mb-1">Dienstreisen</p>
              <p className="font-bold text-ink text-sm">{scope3Fmt.value} <span className="font-normal text-ink-tertiary">{scope3Fmt.unit}</span></p>
            </div>
          </div>

          {/* Was bedeutet das? */}
          <div className="rounded-field bg-white/70 border border-brand-200 px-4 py-4">
            <p className="text-[11px] font-semibold text-brand-700 mb-2 uppercase tracking-wide">Was bedeutet das für CSRD?</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-xs text-ink-secondary">
                <span className="text-brand-600 mt-0.5 flex-shrink-0">→</span>
                <span>
                  {total < 5000
                    ? "Ihre Emissionen sind vergleichsweise gering. Für CSRD-Zwecke brauchen Sie zusätzlich Scope-3-Daten aus Ihrer Lieferkette."
                    : total < 25000
                    ? "Mittlere Emissionsintensität. Scope 2 und 3 sind Ihre Haupthebel für Reduktionen."
                    : "Hohe Emissionen: strukturierte Erfassung und ein Reduktionspfad sind für CSRD-Compliance wichtig."}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-ink-secondary">
                <span className="text-brand-600 mt-0.5 flex-shrink-0">→</span>
                <span>Dieser Rechner erfasst Scope 1, 2 und Teile von Scope 3. Für einen vollständigen CSRD-Bericht fehlen: Lieferkette, eingekaufte Waren, Abfall.</span>
              </li>
            </ul>
          </div>

          {/* Benchmark-Balken */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[11px] text-ink-secondary">Verhältnis zum Richtwert kleiner österr. Unternehmen (50 t CO₂e/Jahr, ~20 MA)</p>
              <p className="text-[11px] font-semibold text-ink">
                {benchmarkPercent >= 100 ? "≥ 100" : benchmarkPercent.toFixed(0)} %
              </p>
            </div>
            <div className="h-2 rounded-full bg-white/60 border border-brand-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-600 transition-all duration-500"
                style={{ width: `${benchmarkPercent}%` }}
                role="progressbar"
                aria-valuenow={Math.round(benchmarkPercent)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Anteil am österreichischen KMU-Richtwert"
              />
            </div>
          </div>

          {/* Quelle */}
          <p className="text-[11px] text-ink-tertiary">
            Quellen: Umweltbundesamt Österreich (UBA AT), Datenbasis 2023, aktualisiert Dez. 2025. Flug: DEFRA UK Greenhouse Gas Conversion Factors (inkl. RFI). Pkw: Österr. Durchschnitt.
          </p>

          {/* CTA */}
          <div className="pt-1 border-t border-brand-200">
            <p className="text-xs text-ink-secondary mb-3">
              Der Rechner gibt eine erste Orientierung. Für eine vollständige, CSRD-konforme CO₂-Bilanz (Scope 1 bis 3) erstellen wir Ihnen ein individuelles Angebot.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-5 py-2.5 rounded-btn font-semibold text-sm"
            >
              Vollständige CO₂-Bilanz erstellen lassen
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}

      {!hasInput && (
        <p className="text-xs text-ink-tertiary text-center py-2">
          Tragen Sie mindestens einen Wert ein, um Ihre Emissionen zu berechnen.
        </p>
      )}
    </div>
  );
}
