import Navigation from "@/components/Navigation";
import ComplianceCheckTeaser from "@/components/compliance/ComplianceCheckTeaser";
import ProductTrends from "@/components/trendradar/ProductTrends";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Boxes,
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  FileSpreadsheet,
  ScrollText,
} from "lucide-react";
import { PpwrGuideForm, PpwrQualifier } from "./PpwrForms";
import Zeitrechner from "./Zeitrechner";
import PackagingGrades from "@/components/viz/PackagingGrades";
import ProductProof from "@/components/ProductProof";
import { TESTIMONIALS } from "@/data/testimonials";
import { FileSpreadsheet as ValueFileSpreadsheet, PiggyBank as ValuePiggyBank, ShieldAlert as ValueShieldAlert } from "lucide-react";

const CALENDLY = "#kontakt";

export const metadata: Metadata = {
  title: "PPWR Compliance: Verpackungsdaten, ARA & LUCID",
  description:
    "PPWR gilt seit 12. August 2026. Verpackungsdaten strukturieren, Meldemengen aus echten Versanddaten berechnen, ARA- und LUCID-Meldungen prüfbar vorbereiten.",
  keywords: [
    "PPWR",
    "PPWR Compliance",
    "Verpackungsverordnung EU 2025/40",
    "ARA Meldung",
    "LUCID Verpackungsregister",
    "EPR Verpackung Österreich",
    "Verpackungsdaten ERP",
  ],
  alternates: { canonical: "https://www.example.invalid/produkte/ppwr-compliance" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/produkte/ppwr-compliance",
    title: "PPWR Compliance: ARA- und LUCID-Meldungen vorbereiten",
    description:
      "Eine Datenbasis, mehrere Meldepflichten: Verpackungsdaten strukturieren, Meldemengen aus echten Versanddaten berechnen, ARA- und LUCID-Meldungen vorbereiten.",
    images: [
      {
        url: "https://www.example.invalid/angebot-sustainista.png",
        width: 1920,
        height: 613,
        alt: "Sustainista PPWR Compliance",
      },
    ],
  },
};

/* ── Hero ── */

const heroPoints = [
  "Meldemengen aus tatsächlichen Versanddaten statt aus Schätzungen",
  "Produkt- und Versandverpackung getrennt und zeitlich versioniert",
  "Jede Zahl bleibt bis zu ihrer Quelle nachvollziehbar",
  "Weniger wiederkehrende Handarbeit, Benchmarks zeigen 44 bis 70 Prozent",
];

/* ── Warum jetzt ── */

const rechtsstand = [
  {
    label: "11.02.2025",
    sub: "Die Verpackungsverordnung (EU) 2025/40 tritt in Kraft und löst die bisherige Verpackungsrichtlinie ab.",
  },
  {
    label: "25.05.2026",
    sub: "Der Delegierte Beschluss (EU) 2026/429 tritt in Kraft: Palettenumhüllungen und Umreifungsbänder sind von der 100-Prozent-Wiederverwendungspflicht ausgenommen, zählen aber weiter auf die 40-Prozent-Quote.",
  },
  {
    label: "10.06.2026",
    sub: "Die Europäische Kommission veröffentlicht Leitlinien (C/2026/3084) zu Definitionen, PFAS-Grenzwerten, Recyclingfähigkeit, Kennzeichnung und Wiederverwendungszielen, ergänzt um laufend aktualisierte FAQ.",
  },
  {
    label: "12.08.2026",
    sub: "Die PPWR gilt. In Deutschland ist das Verpackungsgesetz als alleinige Grundlage abgelöst: PPWR unmittelbar, national das Verpackungsrecht-Durchführungsgesetz (VerpackDG). Für ausländische Hersteller ohne Niederlassung, die direkt an Endkunden liefern, wird der inländische Bevollmächtigte zur Pflicht.",
  },
  {
    label: "12.11.2026",
    sub: "Frist für die Anpassung der Registrierungsdaten im Verpackungsregister LUCID. Die Registrierung selbst bleibt Sache des Herstellers und ist nicht delegierbar.",
  },
  {
    label: "ab 2028",
    sub: "Harmonisierte Kennzeichnung ab 12.08.2028. Delegierte Rechtsakte zu den Recyclingfähigkeits-Leistungsstufen A, B und C bis 01.01.2028, Prüfung des Rezyklatanteils ab 01.01.2029, ab 01.01.2030 nur noch Stufen A bis C, ab 01.01.2038 nur noch A und B.",
  },
];

/* ── Leistungsübersicht: was heute geht, was begleitet läuft, was nicht ──
   Grundlage: Capability-Matrix vom 09.09.2026, geprüft gegen Code und Produktionsdatenbank.
   Wer eine Zeile aus Spalte drei nach vorn zieht, muss zuerst die Software bauen. */
const leistung = [
  {
    stufe: "Heute lieferbar",
    sub: "Wiederholbar im Projekt, Ergebnis ist ein Dokument, das Sie behalten.",
    items: [
      "Rollen- und Scope-Klärung je Lieferkonstellation",
      "Datenlage sichten und Lücken benennen",
      "Konsistenzprüfung von Register-, System- und internen Daten",
      "Fristen einordnen, etwa die LUCID-Anpassung bis 12.11.2026",
      "Fachliche Freigabe im Vier-Augen-Prinzip als Prozessschritt",
      "Klärungsfälle ausweisen statt still zu schätzen",
    ],
  },
  {
    stufe: "Begleitet lieferbar",
    sub: "Funktioniert, solange wir im Ablauf sind. Keine Oberfläche, die Sie allein bedienen.",
    items: [
      "Packaging-BOM aufbauen und zeitlich versionieren",
      "Meldemengen berechnen und gegen Vorperioden plausibilisieren",
      "ARA- und LUCID-Meldedaten aufbereiten, Entwurf zur Freigabe",
      "Datenabruf aus ERP, Shop und WMS, je Kunde eingerichtet",
      "Regeländerungen bewerten und dokumentiert übernehmen",
      "Rückwirkende Neuberechnung und versionierte Korrekturen",
    ],
  },
  {
    stufe: "Noch in Vorbereitung",
    sub: "Bieten wir nicht an und stellen es nicht in Aussicht.",
    items: [
      "Übermittlung von Meldungen in unserem Namen",
      "LUCID-Registrierung und Bevollmächtigtenrolle: bleibt dauerhaft bei Ihnen",
      "Fertige Konnektoren für SAP, BMD, Shopify oder Marktplätze",
      "Datei-Upload und Selbstbedienungsoberfläche für Verpackungsdaten",
      "Historie und Nachweise als Ansicht für Ihr Team",
      "Automatischer Abgleich mit Amtsblatt oder Tarifwerken",
    ],
  },
];

/* ── Das eigentliche Problem ── */

const painpoints = [
  {
    title: "Die Gewichte liegen in vier Dateien",
    body: "Eine Excel-Datei aus dem Einkauf, eine vom Verpackungslieferanten, eine aus dem letzten Meldejahr und eine, die jemand für ein Projekt gebaut hat. Welche gilt?",
  },
  {
    title: "Produkt- und Versandverpackung verschwimmen",
    body: "Faltschachtel, Beipackzettel, Karton, Füllmaterial und Klebeband landen in derselben Zahl. Für die Meldung sind das unterschiedliche Dinge mit unterschiedlicher Verantwortung.",
  },
  {
    title: "Die Verpackung hat sich geändert, nur wann?",
    body: "Der Lieferant hat die Folie dünner gemacht. Ab welcher Lieferung gilt das neue Gewicht? Ohne Datum ist jede rückwirkende Berechnung eine Schätzung.",
  },
  {
    title: "ARA und LUCID rechnen mit anderen Zahlen",
    body: "Die österreichische Meldung entsteht aus Umsatzdaten, die deutsche aus Versandmengen, die interne Auswertung aus dem ERP. Drei Wege, drei Ergebnisse.",
  },
  {
    title: "Retouren, Fulfillment und Dropshipping",
    body: "Ersatzlieferungen, Sendungen über Marktplätze und Ware, die nie im eigenen Lager war: Genau diese Fälle entscheiden über die Meldemenge und stehen in keiner Standardauswertung.",
  },
  {
    title: "Die Zahl von damals lässt sich nicht mehr erklären",
    body: "Sechs Monate nach der Meldung fragt jemand nach, wie die Menge zustande kam. Die Datei liegt noch da, der Rechenweg nicht.",
  },
  {
    title: "Lieferantenangaben fehlen oder passen nicht zusammen",
    body: "Materialangaben kommen als PDF, als Mail oder gar nicht. Für eine belastbare Materialaufteilung reicht das nicht.",
  },
  {
    title: "Die eigene Rolle ist nicht eindeutig",
    body: "Hersteller, Importeur, Eigenmarke, Vertreiber: In verschiedenen Lieferkonstellationen kann dieselbe Firma unterschiedliche Rollen haben. Davon hängt ab, wer meldet.",
  },
];

/* ── Was hinter „Strukturieren, Prüfen, Zuordnen" steckt ── */

const mechanik = [
  { begriff: "Packaging-BOM", body: "Jeder Artikel bekommt seine Verpackungsbestandteile mit Material, Gewicht und Gültigkeitsdatum." },
  { begriff: "Versandereignisse", body: "Nicht Umsatz, sondern reale Sendungen und Positionen der Meldeperiode mit Zielland." },
  { begriff: "Regelwerk", body: "Zuordnung nach Material, Tarifkategorie, Rolle und Vorlizenzierung, dokumentiert statt improvisiert." },
  { begriff: "Meldungsentwurf", body: "Ergebnis mit Freigabe im Vier-Augen-Prinzip, Kontrollunterlagen und versionierter Archivierung." },
];

/* ── Leistungsbereiche ── */

const leistungsbereiche = [
  {
    icon: ClipboardList,
    kicker: "PPWR Product Compliance",
    body: "Wir klären, welche Anforderungen der PPWR für Ihre Verpackungen tatsächlich greifen und in welcher Rolle Sie sie erfüllen müssen.",
    items: [
      "Rollen- und Scope-Klärung je Lieferkonstellation",
      "Verpackungsportfolio strukturiert erfassen und bewerten",
      "Recyclingfähigkeit, Rezyklatanteil, Minimierung, Leerraum und Kennzeichnung einordnen",
      "Stoffliche Anforderungen inklusive PFAS-Thematik systematisch abbilden",
      "Technische Dokumentation und Konformitätsunterlagen vorbereiten",
      "Offene Rechtsfragen werden bei Bedarf mit spezialisierten Partnern geklärt",
    ],
  },
  {
    icon: FileSpreadsheet,
    kicker: "EPR & Meldungen",
    body: "Aus derselben Datenbasis entstehen die Mengen für Ihre wiederkehrenden Meldungen, statt für jede Periode neu zusammengesucht zu werden.",
    items: [
      "Meldemengen je Material und Tarifkategorie berechnen",
      "Österreich: ARA-Meldedaten aufbereiten und plausibilisieren",
      "Deutschland: Daten für Systembeteiligung und LUCID konsistent vorbereiten",
      "Abgleich gegen Vorperioden und bereits übermittelte Werte",
      "Vorlizenzierte Verpackungsbestandteile dokumentieren statt doppelt melden",
      "Der konkrete Leistungsweg bis zur Übermittlung wird gemeinsam festgelegt",
    ],
  },
  {
    icon: ScrollText,
    kicker: "Data, Evidence & Audit",
    body: "Der Teil, der später zählt: Jede gemeldete Zahl bleibt erklärbar, auch wenn die Kollegin, die sie berechnet hat, nicht mehr im Haus ist.",
    items: [
      "Versionierte Verpackungsdaten mit Gültigkeitszeitraum",
      "Nachvollziehbarer Weg von der Meldemenge zurück zur Datenquelle",
      "Fachliche Freigabe im Vier-Augen-Prinzip, dokumentiert",
      "Fehlende oder widersprüchliche Daten werden als Klärungsfall sichtbar",
      "Korrekturen werden versioniert, sie überschreiben keine Historie",
      "Prüfunterlagen bleiben nachvollziehbar archiviert",
    ],
  },
];

/* ── Abdeckung ── */

const regime = [
  {
    land: "EU",
    title: "PPWR",
    status: "Im Aufbau begleitet",
    body: "Anforderungen der Verordnung (EU) 2025/40 auf Ihr Verpackungsportfolio übersetzen: Rollen, Pflichten, Dokumentation und die Frage, was ab wann tatsächlich gilt.",
  },
  {
    land: "Österreich",
    title: "Verpackungen / ARA",
    status: "Kernprozess",
    body: "Berechnung der Meldemengen aus Packaging-BOM und tatsächlichen Versanddaten, Meldungsentwurf, Abgleich mit Vorperioden und Nachweisdokumentation.",
  },
  {
    land: "Deutschland",
    title: "Verpackungen / LUCID",
    status: "Kernprozess",
    body: "Vorbereitung und Konsistenzprüfung der Verpackungs- und Mengendaten für Systembeteiligung und Datenmeldung, damit interne Berechnung und Register nicht auseinanderlaufen.",
  },
  {
    land: "Österreich",
    title: "Elektroaltgeräte",
    status: "Optionales Modul",
    body: "Mengen und Stückzahlen aus Produktprofilen und tatsächlichen Auslieferungen ermitteln und für UFH- beziehungsweise EDM-Prozesse aufbereiten.",
  },
  {
    land: "Österreich",
    title: "Batterien",
    status: "Optionales Modul",
    body: "Zeitversionierte Batterieprofile als Grundlage für Mengen- und Stückermittlung in den entsprechenden EPR-Prozessen.",
  },
  {
    land: "Österreich",
    title: "Einwegkunststoff",
    status: "Je nach Produktgruppe",
    body: "Berechnungsunterstützung für die einschlägigen österreichischen Mengenmeldungen, derzeit für die implementierten Produktgruppen.",
  },
  {
    land: "Deutschland",
    title: "EWKFondsG / DIVID",
    status: "Je nach Produktgruppe",
    body: "Ermittlung und Vorbereitung der relevanten Mengeninformationen, soweit die jeweilige Produktgruppe unterstützt wird.",
  },
];

/* ── Ablauf ── */

const schritte = [
  {
    n: "01",
    title: "Scope und Rollen klären",
    body: "Welche Gesellschaften, Länder, Marken und Lieferkonstellationen sind betroffen und in welcher Rolle? Das ist die Grundlage für alles Weitere und dauert selten länger als einen Workshop.",
  },
  {
    n: "02",
    title: "Datenquellen anbinden",
    body: "ERP, Shop, WMS, Versanddienstleister, Produktstamm: Wir arbeiten mit den Systemen, die Sie ohnehin betreiben, statt eine neue Datensammelstelle zu erfinden.",
  },
  {
    n: "03",
    title: "Verpackungsdaten strukturieren",
    body: "Produkt- und Versandverpackungen werden als versionierte Packaging-BOM erfasst: Bestandteile, Materialien, Gewichte, Verantwortlichkeit, gültig ab wann.",
  },
  {
    n: "04",
    title: "Tatsächliche Mengen berechnen",
    body: "Für die Meldeperiode werden reale Versand- und Paketereignisse mit der jeweils gültigen Verpackungsversion verknüpft und nach Material und Tarifkategorie ausgewertet.",
  },
  {
    n: "05",
    title: "Prüfen und freigeben",
    body: "Abgleich gegen Vorperioden, Klärung offener Fälle, fachliche Freigabe im Vier-Augen-Prinzip. Was unklar ist, bleibt sichtbar unklar.",
  },
  {
    n: "06",
    title: "Meldung und Nachweis dokumentieren",
    body: "Meldungsentwurf, tatsächlich übermittelte Werte und Kontrollunterlagen werden gegeneinander abgeglichen und versioniert archiviert.",
  },
];

/* ── Warum anders ── */

const prinzipien = [
  {
    title: "Tatsächliche Versanddaten statt Umsatzhochrechnung",
    body: "Meldemengen entstehen aus realen Sendungen und Positionen, nicht aus einem Umsatzschlüssel, den niemand mehr begründen kann.",
  },
  {
    title: "Verpackungsdaten mit Gültigkeitsdatum",
    body: "Eine geänderte Verpackung ist eine neue Version, keine Überschreibung. Rückwirkende Berechnungen bleiben deshalb reproduzierbar.",
  },
  {
    title: "Produkt- und Versandverpackung getrennt",
    body: "Zwei unterschiedliche Dinge mit unterschiedlicher Verantwortung. Wer sie zusammenwirft, meldet entweder zu viel oder zu wenig.",
  },
  {
    title: "Keine stille Schätzung",
    body: "Fehlende Gewichte oder unklare Materialien werden als Klärungsfall ausgewiesen. Eine Lücke, die als Zahl getarnt ist, fällt erst bei der Prüfung auf.",
  },
  {
    title: "Reconciliation als fester Schritt",
    body: "Freigegebener Entwurf und tatsächlich übermittelte Werte lassen sich gegeneinander abgleichen. Abweichungen fallen auf, solange sie noch korrigierbar sind.",
  },
  {
    title: "Regeländerungen kommen nachvollziehbar an",
    body: "Wenn sich Auslegungen, Rechtsakte oder Tarifstrukturen ändern, wird die Änderung dokumentiert übernommen, statt still in einer Formel zu verschwinden.",
  },
];

/* ── Selbstcheck ── */

const selbstcheck = [
  "Sie bringen Verpackungen oder verpackte Waren in Österreich, Deutschland oder weiteren EU-Ländern in Verkehr.",
  "Sie sind Hersteller, Importeur, Eigenmarkenunternehmen, Händler oder E-Commerce-Unternehmen.",
  "Ihre Verpackungsdaten leben heute überwiegend in Excel-Dateien.",
  "Sie melden bereits an ein System, wissen aber nicht sicher, ob die Mengen belastbar hergeleitet sind.",
  "Sie liefern aus dem Ausland direkt an Endkundinnen und Endkunden in Deutschland oder Österreich.",
  "Ihr Portfolio ändert sich laufend: neue Artikel, neue Verpackungen, neue Lieferanten.",
  "Sie sollen zusätzlich zur bestehenden EPR-Meldung jetzt auch PPWR-Anforderungen erfüllen.",
  "Sie möchten eine gemeldete Zahl noch Monate später erklären können.",
];

/* ── Aufwand & Zeitersparnis ── */

const aufwandZeilen = [
  { taetigkeit: "Daten aus ERP, Shop und Versand zusammentragen", heute: 30, mit: 8 },
  { taetigkeit: "Verpackungsdaten und BOM pflegen", heute: 20, mit: 10 },
  { taetigkeit: "Meldemengen berechnen", heute: 20, mit: 4 },
  { taetigkeit: "ARA, LUCID und weitere Meldungen vorbereiten", heute: 20, mit: 6 },
  { taetigkeit: "Reconciliation und Fehlersuche", heute: 15, mit: 5 },
  { taetigkeit: "Nachweise und Audit-Trail", heute: 10, mit: 3 },
  { taetigkeit: "Finale Prüfung und Portalhandlung", heute: 5, mit: 5 },
];

const AUFWAND_HEUTE = aufwandZeilen.reduce((sum, z) => sum + z.heute, 0);
const AUFWAND_MIT = aufwandZeilen.reduce((sum, z) => sum + z.mit, 0);

const quellen = [
  {
    text: "Eunomia Research & Consulting: „Extended Producer Responsibility Administrative Burden and One-Stop Shops“, Studie für Ecommerce Europe, April 2025. 19 befragte Unternehmen nennen für EPR-Pflichten über Produkte und Länder hinweg zwischen 1 und 4.000 Arbeitsstunden pro Jahr; 13 davon über 100 Stunden, vier über 1.000 Stunden. Für ein einzelnes Produkt unter drei EPR-Regimen setzt die Studie rund 9 Stunden je Land an, bei fünf Ländern 45 und bei 27 Ländern 243 Stunden, ausdrücklich ohne Monitoring und Zahlungsabwicklung.",
    href: "https://ecommerce-europe.eu/wp-content/uploads/2025/06/EPR-Administrative-Burden-Study_v5.0-CLEAN.pdf",
    label: "ecommerce-europe.eu",
  },
  {
    text: "Specright nennt für Kundinnen und Kunden 44 Prozent Zeitersparnis bei Sustainability- und Regulatory-Reports auf Basis strukturierter Verpackungsdaten.",
    href: "https://www.specright.com/sustainable-packaging/",
    label: "specright.com",
  },
  {
    text: "Forrester Consulting, Total Economic Impact-Studie zu Nasdaq Metrio, April 2025: 70 Prozent weniger Zeit für Berechnungen, die zuvor manuell in Tabellen erfolgten.",
    href: "https://tei.forrester.com/go/nasdaq/ESGreportingsoftware/",
    label: "tei.forrester.com",
  },
  {
    text: "Recyda / Beiersdorf: Die Bewertung der Recyclingfähigkeit sank von Wochen auf Sekunden je Verpackung, sobald die Verpackungsdaten strukturiert vorlagen.",
    href: "https://www.recyda.com/case-studies/beiersdorf",
    label: "recyda.com",
  },
  {
    text: "rePurpose Global / Earth Animal: 179 Artikel und 66 Verpackungskomponenten strukturiert erfasst; weitere Meldungen entstehen danach in Minuten statt Monaten.",
    href: "https://www.repurpose.global/case-studies/how-earth-animals-team-of-one-minimized-epr-fees",
    label: "repurpose.global",
  },
  {
    text: "rePurpose Global / Tillamook: Steve Marko, R&D and Packaging Development Lead, erwartet vier bis fünf Stunden pro Woche zurück; eine korrigierte Materialklassifikation brachte zusätzlich rund 100.000 US-Dollar weniger EPR-Gebühren.",
    href: "https://www.repurpose.global/case-studies/tillamook",
    label: "repurpose.global",
  },
];

/* ── Einstieg & Förderung ── */

const einstieg = [
  {
    stufe: "Stufe 1",
    umfang: "Rund 8 Stunden",
    title: "Geförderte Erstanalyse",
    body: "Ein kompaktes Projekt, mit dem Sie Klarheit bekommen, bevor Sie irgendetwas umbauen.",
    items: [
      "Rollen und Scope je Lieferkonstellation klären",
      "Vorhandene Verpackungs-, Artikel- und Versanddaten sichten",
      "Lückenliste: Was fehlt für eine belastbare Meldung?",
      "Priorisierter Fahrplan mit realistischem Aufwand",
    ],
  },
  {
    stufe: "Stufe 2",
    umfang: "Rund 30 Stunden",
    title: "Geförderte Umsetzungsbegleitung",
    body: "Aus dem Fahrplan wird ein laufender Prozess, den Ihr Team danach selbst bedienen kann.",
    items: [
      "Packaging-BOM aufbauen und versionieren",
      "Datenquellen aus ERP, Shop und Versand anbinden",
      "Erste Meldeperiode vollständig durchrechnen und prüfen",
      "Freigabe-, Nachweis- und Korrekturprozess etablieren",
    ],
  },
];

/* ── Lead Magnet ── */

const guideInhalt = [
  "Rollencheck: Hersteller, Importeur, Eigenmarke, Vertreiber, Fulfillment. Wer ist in welcher Konstellation verantwortlich?",
  "Pflichtenübersicht PPWR: Welche Themenblöcke betreffen Ihre Verpackungen überhaupt?",
  "Timeline: Was gilt seit 12. August 2026 und welche Anforderungen folgen schrittweise?",
  "Abgrenzung ARA und PPWR: Was ist nationale Melde- und Entpflichtungslogik, was ist EU-Produktanforderung?",
  "Datencheck: Die Felder, die Sie für eine belastbare Verpackungsmeldung tatsächlich brauchen.",
  "Nächste Schritte: Eine Reihenfolge, mit der Sie ohne Projektbudget anfangen können.",
];

/* ── Gespräch ── */

const gespraech = [
  "Wir ordnen Ihre Unternehmensrolle je Lieferkonstellation ein.",
  "Wir identifizieren die relevanten Länder und Melderegime.",
  "Wir sehen uns an, wie Ihre Verpackungsdaten heute tatsächlich entstehen.",
  "Wir benennen die größten Lücken zwischen Ihren Daten und einer prüfbaren Meldung.",
  "Wir bestimmen gemeinsam den sinnvollen nächsten Schritt, auch wenn der nicht bei uns liegt.",
  "Wir prüfen, ob sich Ihr Vorhaben über ÖkoBusiness Wien oder Ökomanagement NÖ fördern lässt.",
];

/* ── FAQ ── */

const faqs = [
  {
    q: "Wer ist von der PPWR betroffen?",
    a: "Die Verpackungsverordnung richtet sich an Wirtschaftsakteure entlang der Verpackungskette: Erzeuger und Hersteller von Verpackungen, Importeure, Vertreiber, Fulfilment-Dienstleister und Unternehmen, die verpackte Waren in der EU in Verkehr bringen. Entscheidend ist nicht die Branche, sondern die Rolle in der konkreten Lieferkonstellation. Dieselbe Firma kann für ein Produkt Hersteller und für ein anderes Importeur sein. Welche Rolle Sie wo haben, klären wir im Erstgespräch, weil davon abhängt, welche Pflichten überhaupt greifen.",
  },
  {
    q: "Gilt die PPWR bereits?",
    a: "Ja. Die Verordnung (EU) 2025/40 ist am 11. Februar 2025 in Kraft getreten und gilt grundsätzlich seit 12. August 2026. Nicht jede Anforderung wirkt seit diesem Datum in ihrer endgültigen Form: Themen wie Rezyklatanteile, Recyclingfähigkeit, Wiederverwendung und Kennzeichnung greifen je nach Anwendungszeitpunkt schrittweise in den kommenden Jahren. Ergänzend konkretisieren Leitlinien der Europäischen Kommission sowie delegierte und durchführende Rechtsakte einzelne Punkte weiter.",
  },
  {
    q: "Was ist der Unterschied zwischen PPWR und ARA?",
    a: "Die PPWR ist EU-Recht und regelt vor allem Anforderungen an die Verpackung selbst sowie Pflichten der Wirtschaftsakteure. Die ARA ist ein österreichisches Sammel- und Verwertungssystem und damit ein operativer Weg, nationale Entpflichtungs- und Meldepflichten zu erfüllen. Die ARA bestätigt in ihrem PPWR-Leitfaden, Update 08.2026 vom 28. August 2026, dass sich an Lizenzierung und Meldung derzeit nichts ändert; freiwillige Vorlizenzierung bleibt möglich. Das Update schärft dafür die Definitionen von Inverkehrbringer und Erzeuger, unterscheidet zwei Arten von Bevollmächtigten und ergänzt Kennzeichnungsdetails. Wie Verstöße sanktioniert werden, liegt bei den Mitgliedstaaten. Praktisch heißt das: Ihre nationalen Meldepflichten laufen weiter, und die PPWR kommt als Produkt- und Dokumentationsebene dazu. Genau deshalb sollten beide nicht in getrennten Datenwelten leben.",
  },
  {
    q: "Welche Daten brauchen wir dafür?",
    a: "Im Kern drei Dinge: Erstens Ihre Artikel- und Produktstammdaten. Zweitens die Verpackungsbestandteile je Artikel mit Material und Gewicht, getrennt nach Produkt- und Versandverpackung. Drittens die tatsächlichen Liefer- beziehungsweise Versandereignisse der Meldeperiode mit Zielland. Alles Weitere, etwa Verantwortlichkeiten oder Vorlizenzierungen, ergänzen wir strukturiert. Sie müssen die Daten nicht vorher aufräumen, das ist Teil der Arbeit.",
  },
  {
    q: "Können wir unsere ERP-, Shop- und WMS-Daten verwenden?",
    a: "Ja, das ist der Regelfall. Wir binden die Systeme an, die Sie ohnehin betreiben, statt eine parallele Datensammlung aufzubauen. Üblich sind ERP-Systeme für Artikel und Aufträge, Shop- oder Marktplatzdaten für den Verkauf und WMS- beziehungsweise Versanddaten für die tatsächlichen Sendungen. Wenn ein System keine saubere Schnittstelle hat, arbeiten wir mit strukturierten Exporten.",
  },
  {
    q: "Unterstützt Sustainista die ARA-Meldung?",
    a: "Wir berechnen, prüfen und bereiten Ihre ARA-Meldedaten auf einer nachvollziehbaren Datenbasis vor: Mengen je Material und Tarifkategorie, Abgleich gegen Vorperioden, Meldungsentwurf und Kontrollunterlagen. Die konkrete Übermittlung richtet sich nach dem vereinbarten und freigegebenen Leistungsweg. Wir behaupten ausdrücklich nicht, dass jede Meldung vollautomatisch und ohne Ihre Freigabe übermittelt wird.",
  },
  {
    q: "Unterstützt Sustainista LUCID und die deutsche Systembeteiligung?",
    a: "Seit 12. August 2026 gilt in Deutschland ein zweigeteiltes System: die PPWR unmittelbar und national das Verpackungsrecht-Durchführungsgesetz (VerpackDG), das das Verpackungsgesetz als alleinige Rechtsgrundlage abgelöst hat. Die Grundpflichten bleiben dem Grunde nach bestehen: Registrierung in LUCID, Systembeteiligung, Datenmeldung und Vollständigkeitserklärung. Zwei Punkte sind dabei weder delegierbar noch aufschiebbar. Erstens ist die LUCID-Registrierung Sache des Herstellers persönlich; ein Bevollmächtigter kann sie nicht übernehmen und muss bei der Erstregistrierung benannt werden. Zweitens müssen ausländische Hersteller ohne Niederlassung in Deutschland, die direkt an Endkunden liefern, einen inländischen Bevollmächtigten benennen: aus der früheren Option ist eine Pflicht geworden, und die Registrierungsdaten sind bis 12. November 2026 anzupassen. Wir bereiten die Verpackungs- und Mengendaten aus derselben Datenbasis wie für Österreich auf und prüfen sie auf Konsistenz, damit Systemmeldung, interne Berechnung und Registerdaten nicht auseinanderlaufen. Registrieren und benennen müssen Sie selbst.",
  },
  {
    q: "Was passiert, wenn Verpackungsdaten fehlen?",
    a: "Dann steht das so im System. Fehlende Gewichte, unklare Materialien oder widersprüchliche Lieferantenangaben werden als Klärungsfall ausgewiesen und blockieren die Freigabe der betroffenen Position, statt durch eine Annahme ersetzt zu werden. Parallel unterstützen wir dabei, die fehlenden Angaben strukturiert bei Lieferanten einzuholen. Eine Lücke, die als Zahl getarnt ist, wird sonst erst bei einer Prüfung sichtbar.",
  },
  {
    q: "Wie werden Verpackungsänderungen behandelt?",
    a: "Zeitlich versioniert. Eine geänderte Verpackung erzeugt eine neue Version mit Gültigkeitszeitraum, die alte bleibt erhalten. Eine Lieferung im März wird deshalb mit der im März gültigen Verpackung gerechnet, auch wenn im Oktober längst eine andere Folie im Einsatz ist. Ohne dieses Prinzip lässt sich eine zurückliegende Meldung nicht seriös reproduzieren.",
  },
  {
    q: "Wir melden in Österreich und Deutschland. Bedeutet das doppelte Arbeit?",
    a: "Die Datenerhebung nicht. Artikel, Verpackungsbestandteile und Versandereignisse werden einmal strukturiert und dann für beide Regime ausgewertet, jeweils nach den dort geltenden Regeln und Kategorien. Unterschiedlich bleiben die Meldelogik und die Fristen, nicht die Datenbasis. Genau darin liegt der wirtschaftliche Nutzen, wenn mehrere Länder betroffen sind.",
  },
  {
    q: "Übernimmt Sustainista die rechtliche Verantwortung?",
    a: "Nein. Die Verantwortung für Registrierung, Meldung und Erfüllung der Pflichten bleibt beim Unternehmen. Wir sind kein Ersatz für eine Rechtsanwaltskanzlei und stellen keine Zertifizierung aus. Was wir liefern, ist ein strukturierter, prüfbarer Prozess mit nachvollziehbarer Datenbasis und fachlicher Begleitung. Für Rechtsfragen im engeren Sinn arbeiten wir bei Bedarf mit spezialisierten Partnern.",
  },
  {
    q: "Wie werden künftige Rechtsänderungen berücksichtigt?",
    a: "PPWR-Compliance ist kein einmaliger Check. Sekundärrechtsakte, Auslegungen der Kommission und nationale Umsetzungsschritte entwickeln sich weiter. Deshalb ist ein Regulatory-Change-Prozess Teil des Ansatzes: Änderungen werden bewertet, dokumentiert in die Berechnungslogik übernommen und mit einem Gültigkeitsdatum versehen. Damit bleibt erkennbar, nach welcher Regel eine Meldung entstanden ist.",
  },
  {
    q: "Wie schnell sehen wir erste Ergebnisse?",
    a: "Ein belastbares Bild der Datenlage entsteht meist schon in den ersten Wochen, weil die Lücken sichtbar werden, sobald Artikel-, Verpackungs- und Versanddaten das erste Mal zusammengeführt sind. Der Aufwand danach hängt vom Portfolio ab: Wie viele Artikel, wie viele Verpackungsvarianten, wie viele Länder. Im Erstgespräch schätzen wir das gemeinsam realistisch ein.",
  },
  {
    q: "Wir haben eine funktionierende Excel-Lösung. Warum wechseln?",
    a: "Solange dieselbe Person die Datei pflegt, die Verpackungen sich selten ändern und niemand nachfragt, funktioniert Excel. Schwierig wird es bei Versionierung, bei mehreren Ländern, bei Personalwechsel und bei der Frage, wie eine Zahl aus dem Vorjahr zustande kam. Der Unterschied ist weniger die Berechnung als die Nachvollziehbarkeit.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.example.invalid/produkte/ppwr-compliance",
      "name": "PPWR Compliance",
      "description":
        "Verpackungsdaten strukturieren, Meldemengen aus tatsächlichen Versanddaten berechnen und ARA- sowie LUCID-Meldungen nachvollziehbar vorbereiten.",
      "url": "https://www.example.invalid/produkte/ppwr-compliance",
      "isPartOf": { "@id": "https://www.example.invalid/produkte" },
      "lastReviewed": "2026-08-27",
      "inLanguage": "de",
      "breadcrumb": { "@id": "https://www.example.invalid/produkte/ppwr-compliance#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": "https://www.example.invalid/produkte/ppwr-compliance#service",
      "name": "Sustainista PPWR Compliance",
      "description":
        "Datenbasierter Compliance-Prozess für Verpackungen: PPWR-Anforderungen einordnen, Packaging-BOM versionieren, Meldemengen aus tatsächlichen Versanddaten berechnen und Meldungen für ARA und LUCID prüfbar vorbereiten.",
      "provider": { "@id": "https://www.example.invalid/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "Österreich" },
        { "@type": "Country", "name": "Deutschland" },
      ],
      "serviceType": "Packaging Compliance",
      "url": "https://www.example.invalid/produkte/ppwr-compliance",
      "audience": {
        "@type": "BusinessAudience",
        "name": "Hersteller, Importeure, Eigenmarken und Vertreiber mit Verpackungsmeldepflicht",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PPWR Compliance Leistungen",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPWR-Standortbestimmung und Rollenklärung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging-BOM strukturieren und versionieren" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meldemengen aus Versanddaten berechnen" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ARA- und LUCID-Meldungen prüfbar vorbereiten" } },
        ],
      },
    },
    {
      "@id": "https://www.example.invalid/produkte/ppwr-compliance#breadcrumb",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://www.example.invalid/produkte" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PPWR Compliance",
          "item": "https://www.example.invalid/produkte/ppwr-compliance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

export default function PpwrCompliance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative page-header pt-32 sm:pt-36 pb-20 min-h-[70vh] flex items-end">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li>
                  <Link href="/" className="hover:text-ink-secondary transition-colors">
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">
                  /
                </li>
                <li>
                  <Link href="/produkte" className="hover:text-ink-secondary transition-colors">
                    Produkte
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">
                  /
                </li>
                <li className="text-ink-secondary" aria-current="page">
                  PPWR Compliance
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow mb-8 block">07 PPWR Compliance</span>
                <h1
                  className="font-black tracking-tight leading-[0.95] mb-6 text-ink"
                  style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
                >
                  Eine Datenbasis.<br />
                  <span className="text-brand-600">Mehrere Meldepflichten.</span>
                </h1>
                <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch] mb-8">
                  Die PPWR gilt seit 12. August 2026, und für Direktversender nach Deutschland läuft am
                  12. November 2026 die Frist zur Anpassung der LUCID-Registrierungsdaten. Sustainista
                  verbindet Ihre Produkt-, Verpackungs- und Versanddaten zu einem nachvollziehbaren Prozess
                  und bereitet daraus die Meldedaten für ARA und LUCID auf. Was wir dabei selbst leisten und
                  was wir begleiten, steht offen in der Leistungsübersicht.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#termin"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
                  >
                    30 Min. PPWR-Check buchen
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#guide"
                    className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas"
                  >
                    PPWR-Checkliste erhalten
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {heroPoints.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 bg-surface border border-border rounded-card px-5 py-4"
                    >
                      <Boxes className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-sm text-ink leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ComplianceCheckTeaser variant="ppwr" />

        {/* Warum jetzt */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="eyebrow mb-4">Warum jetzt</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Aus Vorbereitung<br />
                  <span className="text-ink-tertiary">wird Betrieb.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-5">
                  Die Verpackungsverordnung (EU) 2025/40 ist seit 12. August 2026 grundsätzlich anwendbar. Der
                  Unterschied zu den Jahren davor ist praktischer Natur: Rollen, Verpackungsdaten und Nachweise
                  müssen jetzt tatsächlich im Unternehmen vorhanden sein und nicht nur auf einer Folie stehen.
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
                  Gleichzeitig ist die Umsetzung nicht abgeschlossen. Weitere Anforderungen greifen schrittweise,
                  Leitlinien und Rechtsakte konkretisieren einzelne Punkte laufend nach. Ein einmaliger Check
                  reicht deshalb nicht. Was trägt, ist ein Prozess, der Änderungen aufnehmen kann.
                </p>
                <div className="bg-canvas border border-border rounded-card p-5">
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    <span className="text-ink font-medium">In einem Satz:</span> Die Regeln stehen weitgehend fest,
                    die Datenlage in den meisten Unternehmen nicht.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {rechtsstand.map((r) => (
                  <div key={r.label} className="flex items-start gap-4 border border-border rounded-card p-4 bg-canvas">
                    <span className="text-sm font-bold text-brand-600 mt-0.5 w-24 flex-shrink-0">{r.label}</span>
                    <span className="text-xs text-ink-secondary leading-relaxed">{r.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Das eigentliche Problem */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Das eigentliche Problem</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              PPWR scheitert selten am Recht.<br />
              <span className="text-ink-tertiary">Meistens an den Daten.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">
              Die Anforderungen lassen sich nachlesen. Schwierig wird der Teil davor: Welche Verpackung gehörte
              zu welchem Artikel, wann wurde sie geändert, was ging tatsächlich in welches Land, und wer war
              dafür verantwortlich? Das sind ERP-, Versand- und Stammdatenfragen, keine juristischen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
              {painpoints.map((p) => (
                <div key={p.title} className="border-t border-border py-6">
                  <h3 className="text-base font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed max-w-[60ch]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visualisierung */}
        <section className="py-24 bg-white border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Recyclingfähigkeit</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05]">
                  Welche Verpackung<br />
                  <span className="text-ink-tertiary">bis wann umgestellt werden muss.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-ink-secondary leading-relaxed">
                Ab 2030 sind nur noch die Stufen A bis C zulässig, ab 2038 nur noch A und B. Sobald die Verpackungsstückliste je Artikel strukturiert vorliegt, sieht man auf einen Blick, welche Komponente zuerst angegangen werden muss.
              </p>
            </div>
            <PackagingGrades />
          </div>
        </section>

        {/* Die Lösung */}
        <section className="py-24 bg-ink">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4 text-brand-400">Die Lösung</p>
              <h2
                className="font-black text-white tracking-tight leading-[1.03] mb-6"
                style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
              >
                Die Schicht zwischen Ihren Systemen<br />
                und Ihren Meldungen.
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-4 max-w-[68ch]">
                Sustainista PPWR Compliance ist keine weitere Tabelle und kein Nachschlagewerk. Es ist die
                Datenschicht, die Ihre operativen Systeme mit den Anforderungen aus PPWR und EPR verbindet: einmal
                strukturiert, mehrfach verwendbar.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mb-14 max-w-[68ch]">
                Von der Verpackungsinformation bis zum prüfbaren Meldungsentwurf, in einem Prozess, der jeden
                Zwischenschritt festhält.
              </p>
            </div>

            <Image
              src="/ppwr/datenfluss.webp"
              alt="Ablauf: Daten aus ERP, Shop und Versand laufen bei Sustainista zusammen, werden strukturiert, geprüft und zugeordnet. Ergebnis sind PPWR-Überblick, ARA-Meldedaten und Nachweise, dazu weniger Excel, mehr Überblick und schnellere Bereitschaft."
              width={1700}
              height={692}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="w-full max-w-[62rem] mx-auto h-auto rounded-card border border-white/15"
            />

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
              {mechanik.map((m) => (
                <div key={m.begriff} className="border-t border-white/15 py-5">
                  <dt className="text-sm font-bold text-white mb-1.5">{m.begriff}</dt>
                  <dd className="text-xs text-white/60 leading-relaxed">{m.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Leistungsbereiche */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Leistungsbereiche</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Drei Bereiche, ein Prozess.
            </h2>

            <div className="space-y-4">
              {leistungsbereiche.map(({ icon: Icon, kicker, body, items }) => (
                <div
                  key={kicker}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-border rounded-card bg-canvas p-7 sm:p-8"
                >
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-100">
                        <Icon className="w-4 h-4 text-brand-700" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold text-ink">{kicker}</h3>
                    </div>
                    <p className="text-sm text-ink-secondary leading-relaxed max-w-[46ch]">{body}</p>
                  </div>
                  <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 lg:border-l lg:border-border lg:pl-10">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary leading-relaxed">
                        <span className="text-brand-400 mt-1.5 flex-shrink-0" aria-hidden="true">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Abdeckung */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Abdeckung</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Eine Compliance-Datenbasis,<br />
              <span className="text-ink-tertiary">die mit Ihren Pflichten mitwächst.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">
              Nicht jedes Unternehmen braucht alles, und nicht jedes Modul hat denselben Reifegrad. Welche Regime
              für Sie relevant sind und welche davon wir heute konkret abbilden, bestimmen wir im Erstgespräch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regime.map((r) => (
                <div key={r.land + r.title} className="border border-border rounded-card bg-white p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                      {r.land}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700 bg-brand-50 border border-border rounded-full px-2.5 py-1">
                      {r.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{r.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-ink-tertiary leading-relaxed max-w-[68ch]">
              Module, die als optional oder produktgruppenabhängig gekennzeichnet sind, werden fallbezogen
              geprüft. Wir kennzeichnen bewusst nicht jeden Prozess als vollautomatisiert: Wo eine Freigabe oder
              eine manuelle Einreichung erforderlich ist, sagen wir das vorher.
            </p>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">So funktioniert es</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
              Sechs Schritte<br />
              <span className="text-ink-tertiary">bis zur prüfbaren Meldung.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
              {schritte.map((s) => (
                <div key={s.n} className="border-t border-border pt-6 pb-8">
                  <span className="text-xs font-bold text-brand-600 tracking-[0.08em]">{s.n}</span>
                  <h3 className="text-base font-bold text-ink mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed max-w-[52ch]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warum anders */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-4">Der Unterschied</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  Keine Zahl<br />
                  <span className="text-brand-600">ohne Quelle.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[46ch]">
                  Der Unterschied zu einer gepflegten Excel-Datei zeigt sich nicht bei der Meldung, sondern ein
                  halbes Jahr später, wenn jemand fragt, wie die Zahl entstanden ist.
                </p>
              </div>

              <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {prinzipien.map((p) => (
                  <div key={p.title} className="border-t border-border py-6">
                    <dt className="text-base font-bold text-ink mb-2">{p.title}</dt>
                    <dd className="text-sm text-ink-secondary leading-relaxed">{p.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Leistungsübersicht */}
        <section id="leistung" className="py-24 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Leistungsübersicht</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Was wir leisten<br />
              <span className="text-brand-600">und was nicht.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-12">
              Diese Übersicht ist Teil des Angebots, nicht das Kleingedruckte dazu. Wenn eine Zeile in der
              rechten Spalte steht, verkaufen wir sie nicht als fertig. Registrierung, Bevollmächtigung und
              Rechtsauskunft bleiben dauerhaft bei Ihnen oder Ihrer Kanzlei.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leistung.map((s, i) => (
                <div
                  key={s.stufe}
                  className={`rounded-card border p-6 ${
                    i === 2 ? "border-border bg-canvas" : "border-border bg-white"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.08em] mb-2 ${
                      i === 0 ? "text-brand-700" : i === 1 ? "text-ink-secondary" : "text-ink-tertiary"
                    }`}
                  >
                    {s.stufe}
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-5 min-h-[3.5rem]">{s.sub}</p>
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="text-sm text-ink-secondary leading-relaxed pl-4 relative">
                        <span
                          className={`absolute left-0 top-[0.55rem] w-1.5 h-1.5 rounded-full ${
                            i === 2 ? "bg-ink-tertiary" : "bg-brand-600"
                          }`}
                          aria-hidden="true"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aufwand & Zeitersparnis */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Aufwand</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Aus Tagen<br />
              <span className="text-brand-600">werden Stunden.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-4">
              Eine Studie von Eunomia Research &amp; Consulting für Ecommerce Europe hat 2025 erhoben, wie viel
              Zeit EPR-Pflichten tatsächlich kosten. Von 19 befragten Unternehmen nannten 13 mehr als
              100 Arbeitsstunden pro Jahr, vier lagen über 1.000 Stunden. Und der Aufwand skaliert: Für ein
              einziges Produkt unter drei EPR-Regimen rechnet die Studie mit rund 9 Stunden je Land, bei fünf
              Ländern mit 45 und bei 27 Ländern mit 243 Stunden. Monitoring, Zahlungen und Klärfälle sind darin
              noch gar nicht enthalten.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">
              Genau diese Arbeit ist wiederkehrend und zu großen Teilen mechanisch: suchen, zusammenführen,
              prüfen, rechnen, dokumentieren. Benchmarks für automatisiertes Regulatory- und
              Packaging-Reporting zeigen dafür Zeitersparnisse zwischen 44 Prozent (Specright, Kundenangabe)
              und 70 Prozent (Forrester für Nasdaq Metrio, 2025).
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14 border-l-[3px] border-brand-600 pl-4">
              <strong className="font-semibold text-ink">Fremdwerte, nicht unsere Messung.</strong> Diese
              Prozentwerte stammen aus Studien und Fallberichten anderer Anbieter über andere Unternehmen.
              Sie belegen, dass strukturierte Verpackungsdaten Aufwand senken, sie sind aber keine Zusage für
              Ihr Haus. Eine eigene Vorher-Nachher-Messung veröffentlichen wir nicht, weil wir keine haben.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 min-w-0">
                <p className="text-sm font-bold text-ink mb-1.5">Modellrechnung, nicht Messung</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-[60ch]">
                  Die Tabelle ist ein <strong className="font-semibold text-ink">Rechenmodell</strong>. Wir haben
                  die Tätigkeiten eines Meldezyklus aufgeteilt und je Zeile einen Aufwand angesetzt, der zu den
                  Spannen der Eunomia-Studie passt. Die Ausgangssumme von {AUFWAND_HEUTE} Stunden ist eine
                  Annahme für ein mittleres Portfolio mit zwei Meldepflichten: nicht Ihr Wert und nicht der
                  Durchschnitt unserer Kunden. Die Zielsumme folgt aus derselben Annahme und den oben genannten
                  Fremdwerten. Prüfen Sie zuerst die linke Spalte gegen Ihren Alltag.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[26rem]">
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="py-3 pr-6 text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary">
                          Tätigkeit
                        </th>
                        <th scope="col" className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary">
                          Heute
                        </th>
                        <th scope="col" className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 bg-brand-50 rounded-t-[6px]">
                          Mit Sustainista
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aufwandZeilen.map((z) => (
                        <tr key={z.taetigkeit} className="border-b border-border">
                          <td className="py-3 pr-6 text-sm text-ink-secondary leading-relaxed">{z.taetigkeit}</td>
                          <td className="py-3 px-4 text-sm text-ink-secondary text-right tabular-nums">{z.heute} h</td>
                          <td className="py-3 px-4 text-sm font-medium text-brand-700 text-right tabular-nums bg-brand-50">
                            {z.mit} h
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-4 pr-6 text-sm font-bold text-ink">Gesamt</td>
                        <td className="py-4 px-4 text-sm font-bold text-ink text-right tabular-nums">{AUFWAND_HEUTE} h</td>
                        <td className="py-4 px-4 text-sm font-bold text-brand-700 text-right tabular-nums bg-brand-50 rounded-b-[6px]">
                          {AUFWAND_MIT} h
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-surface border border-border rounded-card p-6">
                  <p className="text-base font-bold text-ink mb-2">
                    {AUFWAND_HEUTE - AUFWAND_MIT} Stunden weniger im Jahr, rund{" "}
                    {Math.round(((AUFWAND_HEUTE - AUFWAND_MIT) / AUFWAND_HEUTE) * 100)} Prozent des
                    wiederkehrenden Aufwands.
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    Die finale Prüfung und die Handlung im Portal bleiben bewusst bei Ihnen. Was verschwindet,
                    ist das Zusammensuchen davor. Nicht eingerechnet sind vermiedene Korrekturschleifen, zu hoch
                    angesetzte Lizenzentgelte und externer Beratungsaufwand.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <Zeitrechner />
              </div>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-5">
                Quellen und Einordnung
              </p>
              <ol className="space-y-4 max-w-[80ch]">
                {quellen.map((q, i) => (
                  <li key={q.href + i} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-brand-600 tabular-nums mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-ink-secondary leading-relaxed">
                      {q.text}{" "}
                      <a
                        href={q.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                      >
                        {q.label}
                      </a>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-ink-tertiary leading-relaxed max-w-[80ch]">
                Diese Zahlen stammen aus externen Studien und Fallbeispielen zu EPR-, Verpackungs- und
                Nachhaltigkeitsreporting, nicht aus gemessenen Sustainista-Projekten. Die PPWR ist erst seit
                12. August 2026 anwendbar, belastbare Langzeitdaten dazu gibt es noch nicht. Wie viel Aufwand in
                Ihrem Fall tatsächlich wegfällt, hängt von Portfolio, Ländern, Datenqualität und Meldepflichten
                ab. Wir sagen Ihnen im Erstgespräch, was wir für realistisch halten, und woran wir das festmachen.
              </p>
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Für wen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              Das ist interessant für Sie, wenn …
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 mb-10">
              {selbstcheck.map((s) => (
                <li key={s} className="flex items-start gap-3 border-t border-border py-5">
                  <span className="text-brand-600 font-bold text-sm mt-0.5 flex-shrink-0" aria-hidden="true">
                    ✦
                  </span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch]">
              Trifft mehr als zwei Punkte zu, lohnt sich ein Gespräch. Sie müssen die PPWR dafür nicht selbst
              durchgearbeitet haben: In 30 Minuten klären wir, was davon Ihr Unternehmen tatsächlich betrifft.
            </p>
          </div>
        </section>

        {/* Einstieg & Förderung */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Einstieg</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Klein anfangen,<br />
              <span className="text-brand-600">gefördert starten.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
              Sie müssen dafür kein Jahresbudget freimachen. Der übliche Weg beginnt mit einem geförderten
              Beratungsprojekt von rund acht Stunden. Reicht das Ergebnis für eine Entscheidung, folgt eine
              geförderte Umsetzungsbegleitung von rund 30 Stunden. Beide Stufen sind eigenständig: Nach Stufe 1
              haben Sie ein Ergebnis in der Hand, auch wenn Sie danach nichts weiter mit uns machen.
            </p>


            <Image
              src="/ppwr/projektstart.webp"
              alt="Fünf Schritte eines PPWR-Projekts: Kick-off, Datencheck, Verpackungen strukturieren, Ergebnisse prüfen, Meldung vorbereiten."
              width={1700}
              height={501}
              sizes="(max-width: 1280px) 100vw, 1100px"
              className="w-full max-w-[64rem] mx-auto h-auto mb-6"
            />
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">
              Die geförderte Erstanalyse deckt Schritt 1 und 2 ab: Kick-off und Datencheck. Danach wissen Sie,
              wo Sie stehen. Die Umsetzungsbegleitung übernimmt Schritt 3 bis 5, bis die erste Meldeperiode
              durchgerechnet, geprüft und dokumentiert ist.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {einstieg.map((e) => (
                <div key={e.stufe} className="border border-border rounded-card bg-white p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                      {e.stufe}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700 bg-brand-50 border border-border rounded-full px-2.5 py-1">
                      {e.umfang}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{e.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-[52ch]">{e.body}</p>
                  <ul className="space-y-0">
                    {e.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-t border-border py-3">
                        <span className="text-brand-400 mt-1 flex-shrink-0" aria-hidden="true">
                          •
                        </span>
                        <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-border rounded-card p-6 max-w-[68ch]">
              <p className="text-base font-bold text-ink mb-2">Förderfähigkeit prüfen wir kostenlos.</p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                In Österreich und Deutschland fördern mehrere Beratungs- und Digitalisierungsprogramme genau
                solche Projekte. Welches davon für Sie in Frage kommt, hängt von Unternehmensgröße, Standort und
                Vorhaben ab. Wir prüfen das im Erstgespräch und begleiten den Antrag, wenn es passt. Der
                Eigenanteil bleibt dadurch überschaubar.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Magnet */}
        <section id="guide" className="py-24 bg-canvas scroll-mt-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">Kostenloser Guide</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  PPWR &amp; ARA<br />
                  <span className="text-ink-tertiary">Compliance Guide 2026.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-8">
                  Kein Werbe-PDF, sondern der Leitfaden, den wir selbst am Anfang eines Projekts verwenden. Er
                  beantwortet die Fragen, die vor jeder Meldung stehen, und macht die Abgrenzung zwischen
                  EU-Anforderung und nationaler Meldepflicht klar.
                </p>
                <ul className="space-y-0">
                  {guideInhalt.map((g) => (
                    <li key={g} className="flex items-start gap-3 border-t border-border py-4">
                      <FileCheck2
                        className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink-secondary leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <PpwrGuideForm />
              </div>
            </div>
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="py-24 bg-surface scroll-mt-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-4">Erstgespräch</p>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                  30 Minuten,<br />
                  <span className="text-brand-600">und Sie wissen, wo Sie stehen.</span>
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[52ch] mb-8">
                  Kein Verkaufstermin mit Folienschlacht. Ein fachliches Gespräch, nach dem Sie eine klare Aussage
                  haben, was für Ihr Unternehmen relevant ist und was nicht.
                </p>
                <ul className="space-y-0 mb-8">
                  {gespraech.map((g) => (
                    <li key={g} className="flex items-start gap-3 border-t border-border py-4">
                      <CalendarCheck
                        className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink-secondary leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
                >
                  30 Min. PPWR-Check buchen
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm font-bold text-ink mb-1.5">Fünf Fragen vorab, damit das Gespräch etwas bringt</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-[60ch]">
                  Optional, aber hilfreich: Mit diesen Angaben bereiten wir das Gespräch vor, statt die ersten
                  zehn Minuten mit Grundlagenfragen zu verbringen.
                </p>
                <PpwrQualifier />
              </div>
            </div>
          </div>
        </section>

        {/* Business-Wert, Kundenstimme, Logos */}
        <ProductProof
          titleA="Weniger Risiko,"
          titleB="weniger Verpackungskosten."
          values={[
              { icon: ValueShieldAlert, title: "Lieferstopps vermeiden", body: "Nicht konforme Verpackungen dürfen nicht mehr in Verkehr gebracht werden. Wer seine Stückliste kennt, stellt rechtzeitig um." },
              { icon: ValuePiggyBank, title: "Verpackung und Gebühren senken", body: "Materialminimierung und bessere Recyclingfähigkeit sparen Material und wirken sich auf die Entpflichtungsgebühren aus." },
              { icon: ValueFileSpreadsheet, title: "Meldungen ohne Excel-Marathon", body: "Strukturierte Verpackungsdaten machen ARA- und PPWR-Meldungen zu einem Prozess statt zu einem Quartalsprojekt." },
          ]}
          testimonial={TESTIMONIALS.ppwr}
        />

        <ProductTrends ids={["T15", "T05", "T06", "T01", "T23"]} label="Verpackungsdaten" />

        {/* FAQ */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">
              Häufige Fragen zur PPWR
            </h2>
            <ArticleFaqAccordion faqs={faqs} />

            <p className="text-xs text-ink-tertiary mt-6">
              Hintergrund zur Einordnung:{" "}
              <Link
                href="/magazin/ppwr-ara-lucid-verpackungsmeldung"
                className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
              >
                PPWR, ARA und LUCID: Wer meldet was, und wann
              </Link>
            </p>

            <p className="mt-10 text-xs text-ink-tertiary leading-relaxed">
              Die Angaben auf dieser Seite geben den Stand August 2026 wieder und dienen der Orientierung. Sie
              ersetzen keine Rechtsberatung im Einzelfall. Rechtsfragen klären wir bei Bedarf gemeinsam mit
              spezialisierten Partnern.
            </p>

            <Link
              href="/produkte/digitaler-produktpass"
              className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-border rounded-card p-6 hover:border-brand-300 transition-colors group"
            >
              <div>
                <p className="eyebrow mb-2">Verwandtes Produkt</p>
                <p className="text-base font-bold text-ink mb-1">Digitaler Produktpass</p>
                <p className="text-sm text-ink-secondary">
                  Dieselbe Logik, andere Pflicht: strukturierte Produktdaten statt Verpackungsdaten.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm flex-shrink-0 group-hover:gap-3 transition-all">
                Zum DPP
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
