// UBA AT Emissionsfaktoren, Datenbasis 2023, aktualisiert Dez 2025
export const FACTORS = {
  strom: 0.152,          // kg CO₂e / kWh, Strom Österreich
  fernwaerme: 0.166,     // kg CO₂e / kWh, Fernwärme
  erdgas: 2.58,          // kg CO₂e / m³
  heizoel: 3.44,         // kg CO₂e / l, Heizöl extraleicht
  diesel: 2.73,          // kg CO₂e / l, Diesel inkl. Beimischung
  benzin: 2.39,          // kg CO₂e / l, Benzin inkl. Beimischung
  dienstreisen: 0.195,   // kg CO₂e / km, Pkw Durchschnitt (Scope 3)
  flug: 0.255,           // kg CO₂e / km, Passagierflug Kurzstrecke (inkl. RFI-Faktor 2x), DEFRA
};
