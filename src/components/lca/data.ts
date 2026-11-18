/**
 * Ein durchgängiges Beispielmodell für alle LCA- und PCF-Grafiken:
 * Akku-Bohrschrauber, funktionelle Einheit 1 Stück, 5 Jahre Nutzung.
 * Die Zahlen sind illustrativ (plausible Größenordnungen, keine Kundendaten)
 * und so gewählt, dass Produktsystem, Sankey und Wasserfall dieselbe Summe zeigen.
 * Einzige echte Faktengrundlage: Strommix AT 0,152 kg CO2e/kWh (UBA AT).
 */

export const EXAMPLE = {
  product: "Akku-Bohrschrauber",
  unit: "1 Stück, 5 Jahre Nutzung",
};

/** Beiträge zum Klimawandel in kg CO2e, Module nach EN 15804 */
export const CONTRIBUTIONS = [
  { id: "alu", label: "Aluminium-Gehäuse", module: "A1", kg: 6.2, source: "ecoinvent" },
  { id: "cells", label: "Li-Ionen-Zellen", module: "A1", kg: 5.4, source: "ecoinvent" },
  { id: "pcb", label: "Elektronik & Motor", module: "A1", kg: 4.1, source: "ecoinvent" },
  { id: "plastic", label: "Kunststoffteile", module: "A1", kg: 1.0, source: "ecoinvent" },
  { id: "inbound", label: "Transport ins Werk", module: "A2", kg: 0.6, source: "ecoinvent" },
  { id: "assembly", label: "Montage", module: "A3", kg: 1.2, source: "Primärdaten" },
  { id: "distribution", label: "Distribution", module: "A4", kg: 0.9, source: "ecoinvent" },
  { id: "use", label: "Laden, 18 kWh", module: "B6", kg: 2.7, source: "UBA AT" },
  { id: "eol", label: "Entsorgung", module: "C", kg: 0.8, source: "ecoinvent" },
] as const;

export const CREDIT_D = -2.1;

export const TOTAL = Math.round(CONTRIBUTIONS.reduce((s, c) => s + c.kg, 0) * 10) / 10; // 22,9

export const fmt = (n: number, digits = 1) =>
  n.toLocaleString("de-AT", { minimumFractionDigits: digits, maximumFractionDigits: digits }).replace("-", "−");
