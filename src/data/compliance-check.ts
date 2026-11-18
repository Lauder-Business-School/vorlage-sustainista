/**
 * Compliance Check: Batteriepass, Digitaler Produktpass, PPWR und EPR.
 * Eine Quelle für Produktseite, Teaser, llms.txt und Schema.
 * Leistungsumfang abgeleitet aus den Angeboten AN-1031 bis AN-1034 (Oktober 2026),
 * ohne Preise, ohne Kundennamen, ohne Lieferantennamen.
 * Rechtsstand: 11. Oktober 2026.
 */

export const DEADLINE_ISO = "2027-02-18T00:00:00+01:00";
/** Letzter realistischer Termin für Lieferantendaten aus China vor Neujahr */
export const SUPPLIER_CUTOFF_ISO = "2027-01-20T00:00:00+01:00";

export type Module = {
  id: string;
  name: string;
  short: string;
  duration: string;
  question: string;
  outcome: string;
  items: string[];
};

export const MODULES: Module[] = [
  {
    id: "readiness",
    name: "Readiness-Check",
    short: "Klarheit, was bis zum Stichtag zu tun ist",
    duration: "rund 4 Wochen",
    question: "Wer ist pflichtig, welche Felder fehlen, und wer liefert sie?",
    outcome: "Maßnahmenplan mit Terminen, Verantwortlichen und Kosten, auch ohne uns umsetzbar.",
    items: [
      "Rollenmatrix: wer den Pass schuldet und wie Sonderfälle behandelt werden, etwa Pass je Turm, Rack oder System, einzeln verkaufte Erweiterungsmodule, Handelsware oder ein neuer Pass nach Wiederaufbereitung (Art. 77 Abs. 7)",
      "Gap-Analyse an Referenzprodukten: welche Pflichtfelder fehlen und wer sie liefert",
      "Musterpass mit Ihren heutigen Daten, QR-Code und markierten Lücken, als Anschauung für Geschäftsführung, Vertrieb und Lieferanten",
      "Lieferantenlandkarte und versandfertige Datenanfragen, auf Wunsch auf Englisch und mit Rechtsgrundlage je Feld",
      "Einrichtung der sustainista DPP-Plattform unter Ihrer Domain und Vorbereitung der Identifizierung als verifizierter Wirtschaftsakteur im EU-Register",
    ],
  },
  {
    id: "meldedaten",
    name: "Meldedaten-Check",
    short: "Jedes Pflichtfeld geprüft und belegt",
    duration: "zwei Wellen bis Ende Jänner",
    question: "Stimmt jede Angabe, die Sie in Pass und EU-Register melden?",
    outcome: "Stichtagsfertige Pässe: Was die Prüfung besteht, steht sofort als Pass in der Plattform.",
    items: [
      "Datenpunktliste je Produktfamilie nach dem Leitfaden der Kommission, jeder Wert mit Quelle aus Stammdaten, Datenblatt, Konformitätserklärung oder Lieferantenunterlage",
      "Prüfung Feld für Feld: vollständig, plausibel, richtige Einheit, richtiges Format, mit Ampel je Feld und Familie",
      "Abgleich mit Lieferantendaten, etwa bei Kapazität, Zyklenfestigkeit oder Zellchemie, mit fertigen Nachforderungen",
      "Kennungen für Produkt, Wirtschaftsakteur und Standort sowie Stichproben aus Zustandsdaten",
      "Lieferanten reichen fehlende Werte direkt über die Plattform nach, mit Prüfung beim Eingang",
      "Nachprüfung durchgefallener Felder bis zum Stichtag inklusive, so oft wie nötig",
    ],
  },
  {
    id: "ppwr-epr",
    name: "PPWR- & EPR-Check",
    short: "Verpackung, Elektrogeräte und Batterien aus einer Datenbasis",
    duration: "rund 4 Wochen",
    question: "Melden Sie zu viel oder zu wenig, und was ändert die PPWR an Ihren Verpackungen?",
    outcome: "PPWR-Fahrplan je Verpackung und Abweichungsanalyse in Euro, je Regime und Land.",
    items: [
      "Rollenmatrix je Regime und Land für Verpackung, Elektrogeräte und Batterien, inklusive Registrierungsstand",
      "Verpackungsprofile mit Material, Gewicht und Leerraum je Produktfamilie",
      "PPWR-Betroffenheit je Verpackung: Recyclingfähigkeit, Minimierung, Leerraum, Kennzeichnung und Rezyklat, mit Frist je Anforderung",
      "Nachrechnung der letzten Meldeperiode, jede Quelle mit Zeitpunkt eingefroren",
      "Abweichungsanalyse: was nachzuzahlen wäre und was zu viel bezahlt wurde",
      "Soll-Prozess für die nächste Meldung mit Vier-Augen-Freigabe; dieselben Gewichte und Stücklisten versorgen später den Batteriepass",
    ],
  },
];

export const ONGOING = [
  {
    name: "Laufende Eingangsprüfung",
    text: "Jede neue Lieferantenlieferung wird automatisch gegen die Pflichtfelder geprüft, bevor sie in einen Pass geht.",
  },
  {
    name: "Pässe auf der sustainista DPP-Plattform",
    text: "Ausstellung je Seriennummer, QR-Codes unter Ihrer Domain, Hosting in der EU und Eintrag im EU-Register.",
  },
];

export const PRINCIPLES = [
  { title: "Festpreis", text: "Ein fester Preis für einen klar beschriebenen Leistungskatalog, unabhängig vom tatsächlichen Aufwand." },
  { title: "Keine Abnahmepflicht", text: "Jedes Modul steht für sich. Für Folgeschritte nennen wir vorab eine verbindliche Obergrenze." },
  { title: "Ihre Daten, Ihre Ergebnisse", text: "Musterpass, Maßnahmenplan und Prüfprotokolle gehören Ihnen; alle Daten sind jederzeit exportierbar." },
  { title: "QR-Codes bleiben gültig", text: "Die Codes laufen unter Ihrer Domain und funktionieren auch, wenn Sie den Anbieter wechseln." },
  { title: "Offen bleibt sichtbar", text: "Was unbekannt ist, füllen wir nicht mit Annahmen auf. Lücken stehen im Bericht, mit Verantwortlichem." },
  { title: "Wirkt auch bei Verschiebung", text: "Ergebnisse bleiben gültig, falls der Stichtag doch verschoben wird; Plattformlaufzeiten beginnen erst mit dem tatsächlichen Stichtag." },
];

export const LEGAL_STATE = [
  { label: "Stichtag", text: "Ab 18. Februar 2027 brauchen LMT-Batterien, Traktionsbatterien und Industriebatterien über 2 kWh beim Inverkehrbringen einen digitalen Batteriepass (Art. 77 VO (EU) 2023/1542)." },
  { label: "EU-Register", text: "Seit 20. Juli 2026 in Betrieb, Durchführungsverordnung (EU) 2026/1778 seit 6. August 2026 in Kraft. Einträge setzen die Identifizierung als verifizierter Wirtschaftsakteur voraus." },
  { label: "Zugangsrechte", text: "Der Rechtsakt zu den Zugangsrechten (Art. 77 Abs. 9) war bis 18. August 2026 fällig und kommt laut Kommission erst im vierten Quartal 2026." },
  { label: "Leitfaden", text: "Laut Leitfaden der Kommission (Version 2.0, 15. August 2026) bleiben CO₂-Fußabdruck und Angaben zur Beschaffung am Stichtag noch leer." },
  { label: "Lieferketten", text: "Die chinesischen Neujahrsfeiertage dauern von 5. bis 12. Februar 2027. Lieferantendaten, die bis etwa 20. Jänner nicht vorliegen, kommen meist nicht mehr rechtzeitig." },
  { label: "Verschiebung", text: "Der Branchenverband EUROBAT fordert ein Stop-the-clock bis 2030. Beschlossen ist nichts; planen Sie mit dem 18. Februar 2027." },
];

export const TIMELINE = [
  { when: "Woche 1–4", what: "Readiness: Kick-off, Fachworkshops, Musterpass, Datenanfragen an Lieferanten, Maßnahmenplan" },
  { when: "Dezember", what: "Meldedaten-Check, Welle 1: eigene Stamm- und Produktdaten" },
  { when: "bis ca. 20. Jänner", what: "Meldedaten-Check, Welle 2: Lieferantendaten, vor den chinesischen Neujahrsfeiertagen" },
  { when: "Februar", what: "Testpässe je Produktfamilie und Registereintrag" },
  { when: "18. Februar 2027", what: "Stichtag: Pässe veröffentlicht, laufende Eingangsprüfung auf Wunsch" },
];

export const FAQS = [
  { q: "Was ist der Compliance Check von Sustainista?", a: "Ein modularer Festpreis-Check für Batteriepass, Digitalen Produktpass sowie PPWR- und EPR-Meldungen. Der Readiness-Check klärt Rolle, Datenlücken und Lieferantendaten, der Meldedaten-Check prüft jedes Pflichtfeld und macht daraus stichtagsfertige Pässe, der PPWR- und EPR-Check rechnet Verpackungs-, Elektrogeräte- und Batteriemeldungen nach." },
  { q: "Für wen ist der Compliance Check gedacht?", a: "Für Hersteller, Importeure und Händler von Speichersystemen, Industriebatterien, E-Bike-Akkus und Traktionsbatterien sowie für Unternehmen mit Verpackungs-, Elektrogeräte- oder Batteriemeldungen. Für Produktgruppen der Ökodesign-Verordnung funktioniert der Check genauso, sobald der Rechtsakt der Produktgruppe vorliegt, oder vorher freiwillig." },
  { q: "Muss ich alle Module beauftragen?", a: "Nein. Jedes Modul steht für sich, eine Abnahmeverpflichtung für Folgeschritte gibt es nicht. Sinnvoll ist meist der Readiness-Check zuerst; der Meldedaten-Check baut darauf auf und kann auch kombiniert beauftragt werden." },
  { q: "Was passiert, wenn der Stichtag verschoben wird?", a: "Beschlossen ist eine Verschiebung derzeit nicht. Falls es doch dazu kommt, bleiben die Ergebnisse gültig, und Laufzeiten der Plattform beginnen erst mit dem tatsächlichen Stichtag." },
  { q: "Was kostet der Compliance Check?", a: "Jedes Modul hat einen Festpreis für einen klar beschriebenen Leistungskatalog. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit verbindlichen Obergrenzen für alle Folgeschritte." },
  { q: "Bin ich danach an die Plattform gebunden?", a: "Nein. Ihre Daten gehören Ihnen und sind jederzeit exportierbar. QR-Codes laufen unter Ihrer eigenen Domain und bleiben auch bei einem Anbieterwechsel gültig." },
  { q: "Ist das eine Rechtsberatung?", a: "Nein. Wir leisten Daten- und Prozessarbeit mit klarer Rechtsgrundlage je Feld. Die Meldung selbst geben Sie als Wirtschaftsakteur ab; individuelle Rechtsfragen klären Sie mit Ihrer Rechtsberatung." },
];
