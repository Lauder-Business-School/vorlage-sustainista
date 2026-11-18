/**
 * Verkaufspräsentation zur Software für Nachhaltigkeitsberichte, 17 Folien (Spec N9 Nachtrag 7).
 * Allgemein, ohne Kundennamen; Beispiele aus den Demodaten der erfundenen Muster GmbH.
 * Struktur und Gestaltung in BerichtDeck.tsx, Texte DE und EN hier. Wo die Produktseite dieselbe
 * Aussage macht (Quellen, Zusammenarbeit, Pakete, Qualität, Hintergrund), kommen die Texte aus
 * ../content.ts, damit Seite und Präsentation nicht auseinanderlaufen. Quelle je Aussage: N9-bericht.md.
 */
import { de as seiteDe, en as seiteEn, bilder, type BerichtContent } from "../content";

export type BildKey = keyof typeof bilder;
type Punkt = { titel: string; text: string };

export type Folie = { eyebrow: string; title: string; quelle?: string } & (
  | { art: "titel"; unter: string; person: string; rolle: string; hinweis: string }
  | { art: "zahlen"; zahlen: { zahl: string; text: string }[]; text?: string }
  | { art: "gross"; zahl: string; zahlText: string; text: string[] }
  | { art: "wege"; wege: Punkt[]; text: string }
  | { art: "bild"; bild: BildKey; alt: string; caption: string; text?: string[]; beispiel?: string; punkte?: Punkt[] }
  | { art: "liste"; items: Punkt[]; text?: string }
  | { art: "qualitaet"; text: string; beispiel: string }
  | { art: "quellen"; hinweis: string }
  | { art: "schritte" }
  | { art: "pakete"; pilot: string; paketeTitel: string; preis: string }
  | { art: "kontakt"; teamTitel: string; adresse: string; termin: string }
);

export type Deck = {
  lang: "de" | "en";
  seite: BerichtContent;
  meta: { title: string; description: string; ogTitle: string };
  ui: { deckLabel: string; weiter: string; weiterZu: string; folie: string; springen: string; drucken: string };
  folien: Folie[];
};

export const de: Deck = {
  lang: "de",
  seite: seiteDe,
  meta: {
    title: "Nachhaltigkeitsbericht: Präsentation",
    description: "Software für Nachhaltigkeitsberichte nach VS und GRI: Ausgangslage, Funktionen, Ergebnis, Qualität, Quellen, Grenzen und Zusammenarbeit.",
    ogTitle: "Nachhaltigkeitsbericht nach VS und GRI: Präsentation",
  },
  ui: { deckLabel: "Nachhaltigkeitsbericht · Präsentation", weiter: "Weiter", weiterZu: "Weiter zu Folie", folie: "Folie", springen: "Zu Folie springen", drucken: "Drucken" },
  folien: [
    {
      art: "titel",
      eyebrow: "Sustainista · Nachhaltigkeitsbericht",
      title: "Ein Nachhaltigkeitsbericht, in dem jede Zahl ihren Beleg hat.",
      unter: "Software und Begleitung für Berichte nach dem freiwilligen Standard (VS) und nach GRI, für Unternehmen in Österreich mit 250 bis 1.000 Beschäftigten.",
      person: "Dr. Stefan Bauer",
      rolle: "Gründer und Geschäftsführer, Sustainista GmbH",
      hinweis: "Alle Beispiele stammen aus den Demodaten der erfundenen Muster GmbH.",
    },
    {
      art: "zahlen",
      eyebrow: "Ausgangslage",
      title: "Berichten müssen wenige. Gefragt werden viele.",
      zahlen: [
        { zahl: "1.000", text: "Beschäftigte und dazu mehr als 450 Mio. Euro Nettoumsatz: Erst darüber besteht nach Omnibus I eine Berichtspflicht nach der CSRD." },
        { zahl: "18.03.2026", text: "Omnibus I (Richtlinie (EU) 2026/470) ist in Kraft. Österreich muss bis 19.03.2027 umsetzen." },
        { zahl: "500", text: "Arbeitnehmer: ab hier erfasst § 243b UGB heute große Unternehmen von öffentlichem Interesse." },
        { zahl: "2027", text: "Ab diesem Geschäftsjahr dürfen berichtspflichtige Unternehmen für ihren Bericht von Partnern mit bis zu 1.000 Beschäftigten nur noch die Angaben aus Anhang II des VS verlangen." },
      ],
      text: "Kunden, Banken und EcoVadis fragen trotzdem nach Angaben.",
      quelle: "Quellen: Richtlinie (EU) 2026/470; Delegierte Verordnung (EU) 2026/1560, Art. 1 bis 3; BGBl. I Nr. 6/2026, §§ 243b, 243ba, 908 Abs. 2a UGB. Stand November 2026, keine Rechtsberatung.",
    },
    {
      art: "wege",
      eyebrow: "Drei Rahmen",
      title: "Welcher Rahmen passt, hängt davon ab, wer fragt.",
      wege: [
        { titel: "GRI", text: "Weltweit verbreitet, viele Leser kennen ihn. Bericht in Übereinstimmung oder mit Bezug, mit Inhaltsindex. Wer ab 2027 nach GRI veröffentlicht, verwendet für Klima und Energie die neuen Standards GRI 102 und GRI 103." },
        { titel: "Freiwilliger Standard (VS)", text: "Der Rahmen der EU für Unternehmen ohne Berichtspflicht, seit 24.09.2026, mit Basismodul und umfassendem Modul. Was berichtspflichtige Kunden ab 2027 höchstens verlangen dürfen, sind Angaben dieses Standards." },
        { titel: "ESRS", text: "Die Standards für berichtspflichtige Unternehmen; die revidierte Fassung gilt für Geschäftsjahre ab 2027. Einen vollständigen ESRS-Bericht erstellt die Software nicht." },
      ],
      text: "Unser Vorschlag für die meisten Unternehmen dieser Größe: VS und GRI aus denselben Werten. Die Software prüft die Freigabe für beide und gibt den VS-Datensatz als XBRL aus.",
      quelle: "Quellen: Delegierte Verordnung (EU) 2026/1560; Delegierte Verordnung (EU) 2026/1563; GRI 102 und GRI 103 für Veröffentlichungen ab 01.01.2027.",
    },
    {
      art: "gross",
      eyebrow: "Für wen",
      title: "Gebaut für Unternehmen, die gefragt werden, aber nicht berichten müssen.",
      zahl: "250 bis 1.000",
      zahlText: "Beschäftigte: über der KMU-Grenze der EU und unter der Schwelle der Berichtspflicht.",
      text: [
        "Für Unternehmen in Österreich, die von Kunden, Banken oder Versicherungen nach Nachhaltigkeitsangaben gefragt werden oder nach dem freiwilligen Standard oder nach GRI berichten wollen.",
        "Die Emissionsfaktoren stammen vom Umweltbundesamt Österreich, die Rechtslage folgt § 243b UGB. Für Unternehmen ohne eigenes Team für Nachhaltigkeit gibt es das Paket mit Begleitung.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Erfassen",
      title: "Jeder Wert braucht einen Beleg, mit Fundstelle und Zitat.",
      bild: "erfassung",
      alt: "Gespeicherter Vorschlag zu GRI 2-8-a: 37 Personen mit Beleg, Fundstelle und Zitat, vorgeschlagen von Erika Editor.",
      caption: "Erfassung in der Software. Demodaten der Muster GmbH.",
      text: [
        "Sie tragen einen Wert ein und hängen den Beleg an. Dazu kommen die Fundstelle im Dokument und ein Zitat.",
        "Der Wert ist zunächst ein Vorschlag. In den Bericht kommt er erst, wenn eine zweite Person ihn bestätigt hat.",
      ],
      beispiel: "Beispiel: 37 Leiharbeitskräfte, Beleg Personalstatistik_2025.xlsx, Blatt Fremdpersonal, Zelle C2.",
    },
    {
      art: "bild",
      eyebrow: "Prüfen",
      title: "Wer einen Wert vorschlägt, kann ihn nicht selbst bestätigen.",
      bild: "pruefung",
      alt: "Prüfansicht für Rainer Reviewer: der Vorschlag von Erika Editor mit den Schaltflächen Bestätigen und Ablehnen.",
      caption: "Prüfansicht in der Software. Demodaten der Muster GmbH.",
      text: [
        "Bestätigen oder ablehnen kann nur eine zweite Person mit der Rolle Prüfer oder Administrator. Einen eigenen Vorschlag lehnt die Datenbank ab.",
        "Gespeichert ist, wer den Wert vorgeschlagen und wer ihn bestätigt hat. Diese Namen setzt die Datenbank selbst.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Treibhausgase",
      title: "Scope 1 und 2 rechnet die Software mit direkten Werten, wie es das GHG Protocol vorsieht.",
      bild: "treibhausgase",
      alt: "Ergebnis Treibhausgase: Scope 1, Scope 2 standortbasiert und Scope 2 marktbasiert, darunter die verwendeten Faktoren mit Quelle und Version.",
      caption: "Ergebnis mit Faktoren, Quelle und Version. Demodaten der Muster GmbH.",
      text: [
        "Aus Litern Diesel, Kubikmetern Erdgas und Kilowattstunden Strom rechnet sie Scope 1 und Scope 2, standortbasiert und marktbasiert, mit Faktoren des Umweltbundesamts Österreich und Treibhauspotenzialen nach IPCC AR6.",
        "Rechner mit Vorkette liefern höhere Summen. Strom in Österreich: 123 g CO₂e je kWh direkt, 152 g mit Vorkette. Die Vorkette zählt nach dem GHG Protocol nicht zu Scope 1 und 2.",
        "Für den marktbasierten Wert tragen Sie den Faktor Ihres Stromlieferanten ein, belegt durch die Stromrechnung.",
      ],
      quelle: "Quellen: Umweltbundesamt REP-0989, Tabelle 4; REP-1031; IPCC AR6 WG I, Table 7.15.",
    },
    {
      art: "bild",
      eyebrow: "Wesentlichkeit",
      title: "Aus Schweregrad und Wahrscheinlichkeit entsteht eine Rangfolge nach GRI 3.",
      bild: "wesentlichkeit",
      alt: "Rangfolge der negativen und positiven Auswirkungen der Muster GmbH und die wesentlichen Themen Klima und Lieferkette Menschenrechte.",
      caption: "Rangfolge der Auswirkungen. Demodaten der Muster GmbH.",
      text: [
        "Sie erfassen die Auswirkungen Ihres Unternehmens und bewerten Schweregrad und Wahrscheinlichkeit. Die Software bildet daraus die Rangfolge und zeigt, welche Themen wesentlich sind.",
        "Die wesentlichen Themen übernehmen Sie mit einem Klick in den Bericht. In den Demodaten sind das Klima und Lieferkette Menschenrechte.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Freigabe",
      title: "Freigeben lässt sich ein Bericht erst, wenn jede Pflichtangabe erfüllt oder begründet ausgelassen ist.",
      bild: "freigabe",
      alt: "Freigabe-Prüfung für GRI in Übereinstimmung: noch nicht freigabefähig, mit der Liste der fehlenden Pflichtangaben.",
      caption: "Freigabe-Prüfung, noch nicht freigabefähig. Demodaten der Muster GmbH.",
      text: [
        "Vor dem Export prüft die Software jede Pflichtangabe. Offene Punkte stehen in einer Liste, etwa eine fehlende Angabe oder ein Vorschlag, den noch niemand geprüft hat.",
        "Die Prüfung gibt es für GRI und für den VS, mit Basismodul oder mit beiden Modulen.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Ergebnis",
      title: "Ein Bericht, der zeigt, woher jede Zahl kommt.",
      bild: "belege",
      alt: "PDF-Bericht der Muster GmbH, Seite 7: Belege zu Abschnitt 2, je Fußnote mit Quelle, Fundstelle und Zitat.",
      caption: "Belege als Fußnoten im PDF-Bericht. Demodaten der Muster GmbH.",
      punkte: [
        { titel: "Bericht als PDF und DOCX", text: "Mit den Belegen als Fußnoten: Quelle, Fundstelle und Zitat." },
        { titel: "GRI-Inhaltsindex", text: "In Übereinstimmung oder mit Bezug." },
        { titel: "XBRL nach VSME-Taxonomie", text: "Der VS-Datensatz, gegen die Taxonomie geprüft." },
        { titel: "Nur bestätigte Werte", text: "In den Export kommt nichts, was keine zweite Person bestätigt hat." },
      ],
    },
    {
      art: "liste",
      eyebrow: "Im Alltag",
      title: "Einmal erfassen, dann für Bericht, Kunden, EcoVadis und Geschäftsleitung verwenden.",
      items: [
        { titel: "Ein Kunde schickt einen Fragebogen.", text: "Sie antworten aus bestätigten Werten, der Beleg liegt neben jeder Zahl. Ab 2027 zeigt die Liste aus Anhang II des VS, was ein berichtspflichtiger Kunde für seinen Bericht höchstens verlangen darf." },
        { titel: "EcoVadis bewertet neu.", text: "Kennzahlen und Dokumente liegen an einer Stelle, mit dem Stand, der auch im Bericht steht." },
        { titel: "Die Geschäftsleitung soll freigeben.", text: "Die Freigabe-Prüfung zeigt jede offene Pflichtangabe. Zu jedem Wert steht fest, wer ihn vorgeschlagen und wer ihn bestätigt hat." },
        { titel: "Eine Bank will Daten maschinenlesbar.", text: "Die Software gibt den VS-Datensatz als XBRL nach der VSME-Taxonomie der EFRAG aus. Eine eigene Taxonomie für den VS kündigt die EFRAG für das vierte Quartal 2026 an." },
        { titel: "Ein Wert war falsch.", text: "Sie legen einen neuen Vorschlag an. Nach der Bestätigung ersetzt er den alten Wert, der alte bleibt gespeichert." },
        { titel: "Der nächste Bericht steht an.", text: "Mandant, Rollen und Faktoren sind eingerichtet. Werte und Belege des Vorjahrs bleiben nachlesbar." },
      ],
    },
    {
      art: "qualitaet",
      eyebrow: "Qualität",
      title: "Bevor wir gebaut haben, haben wir 23 Rechtsangaben an ihrer Quelle geprüft.",
      text: "Jeder Teil der Software ist gegen eine schriftliche Anforderung gebaut und von einer zweiten, vom Bau getrennten Prüfung abgenommen. Dabei bauen wir absichtlich Fehler ein, und die Tests müssen sie finden.",
      beispiel: "Die Prüfung hat zum Beispiel zwei fehlende GRI-Anforderungen gefunden, 303-4-b und 306-5-d. Beide sind ergänzt.",
    },
    { art: "quellen", eyebrow: "Quellen", title: "Jede Regel und jeder allgemeine Faktor geht auf eine öffentliche Quelle zurück.", hinweis: "Die Links führen zur Quelle oder zu einer amtlichen Übersicht. Stand: November 2026." },
    {
      art: "liste",
      eyebrow: "Grenzen",
      title: "Was die Software nicht kann, sagen wir lieber heute als mitten im Projekt.",
      items: [
        { titel: "Kein Scope 3.", text: "Die Software rechnet Scope 1 und Scope 2. Emissionen aus der Lieferkette, aus der Nutzung Ihrer Produkte und die Vorkette von Brennstoffen und Strom rechnet sie nicht, auch keinen Product Carbon Footprint." },
        { titel: "Keine Nah- und Fernwärme.", text: "Dafür hat die Software keinen Faktor. Diese Emissionen bleiben eine eigene Rechnung." },
        { titel: "Kein vollständiger ESRS-Bericht.", text: "Sie gibt einen Bericht nach GRI und den Datensatz nach dem freiwilligen Standard aus." },
        { titel: "Kein Auslesen von Belegen.", text: "Eine Person trägt jeden Wert ein und hängt den Beleg an. Die Software liest keine Rechnungen oder Dokumente aus." },
        { titel: "Kein Testat.", text: "Sustainista prüft Berichte nicht als Wirtschaftsprüfer. Die Software hält fest, was eine Prüfung nachsehen will: Beleg, Fundstelle, wer bestätigt hat." },
        { titel: "Heute mit Demodaten.", text: "Die Software läuft mit den Demodaten der erfundenen Muster GmbH. Für Ihr Unternehmen eingerichtet wird sie im Pilot." },
      ],
    },
    { art: "schritte", eyebrow: "Zusammenarbeit", title: "In vier Schritten vom Erstgespräch zum ersten Bericht." },
    {
      art: "pakete",
      eyebrow: "Pakete und Pilot",
      title: "Wir starten mit einem Bericht aus Ihren eigenen Daten.",
      pilot: "Ein Bericht mit Ihren eigenen Daten eines Geschäftsjahres, im Standard Ihrer Wahl, bis zur Freigabe-Prüfung und zum Export.",
      paketeTitel: "Drei Pakete",
      preis: "Preis auf Anfrage. Wir nennen ihn mit dem Angebot, abgestimmt auf Standards, Umfang und Begleitung.",
    },
    { art: "kontakt", eyebrow: "Kontakt", title: "Sie erreichen uns direkt.", teamTitel: "Im Team", adresse: "Sustainista GmbH, Rathausstraße 21 Top 10B, 1010 Wien, FN 576551 w", termin: "Kostenloses Erstgespräch" },
  ],
};

export const en: Deck = {
  lang: "en",
  seite: seiteEn,
  meta: {
    title: "Sustainability report: presentation",
    description: "Sustainability reporting software for VS and GRI: situation, features, results, quality, sources, limits and how we work together.",
    ogTitle: "Sustainability report under VS and GRI: presentation",
  },
  ui: { deckLabel: "Sustainability report · Presentation", weiter: "Next", weiterZu: "Next to slide", folie: "Slide", springen: "Jump to slide", drucken: "Print" },
  folien: [
    {
      art: "titel",
      eyebrow: "Sustainista · Sustainability report",
      title: "A sustainability report in which every number has its evidence.",
      unter: "Software and support for reports under the Voluntary Standard (VS) and GRI, for companies in Austria with 250 to 1,000 employees.",
      person: "Dr. Stefan Bauer",
      rolle: "Founder and Managing Director, Sustainista GmbH",
      hinweis: "All examples come from the demo data of the fictitious Muster GmbH.",
    },
    {
      art: "zahlen",
      eyebrow: "Situation",
      title: "Few have to report. Many are asked.",
      zahlen: [
        { zahl: "1,000", text: "employees and a net turnover above 450 million euros: only above both does Omnibus I require reporting under the CSRD." },
        { zahl: "18.03.2026", text: "Omnibus I (Directive (EU) 2026/470) entered into force. Austria must transpose it by 19.03.2027." },
        { zahl: "500", text: "employees: from here § 243b UGB covers large public-interest entities in Austria today." },
        { zahl: "2027", text: "From this financial year, companies subject to reporting may request for their report from partners with up to 1,000 employees only the information in Annex II of the VS." },
      ],
      text: "Customers, banks and EcoVadis still ask for information.",
      quelle: "Sources: Directive (EU) 2026/470; Delegated Regulation (EU) 2026/1560, Art. 1 to 3; BGBl. I Nr. 6/2026, §§ 243b, 243ba, 908 (2a) UGB. Status November 2026, not legal advice.",
    },
    {
      art: "wege",
      eyebrow: "Three frameworks",
      title: "Which framework fits depends on who is asking.",
      wege: [
        { titel: "GRI", text: "Widely used, many readers know it. Report in accordance with or with reference to GRI, with content index. Anyone publishing under GRI from 2027 uses the new standards GRI 102 and GRI 103 for climate and energy." },
        { titel: "Voluntary Standard (VS)", text: "The EU framework for companies without a reporting obligation, since 24.09.2026, with a basic and a comprehensive module. What customers subject to reporting may request at most from 2027 is information from this standard." },
        { titel: "ESRS", text: "The standards for companies subject to reporting; the revised version applies to financial years from 2027. The software does not produce a full ESRS report." },
      ],
      text: "Our proposal for most companies of this size: VS and GRI from the same values. The software checks release for both and exports the VS data set as XBRL.",
      quelle: "Sources: Delegated Regulation (EU) 2026/1560; Delegated Regulation (EU) 2026/1563; GRI 102 and GRI 103 for publications from 01.01.2027.",
    },
    {
      art: "gross",
      eyebrow: "Who it is for",
      title: "Built for companies that are asked but do not have to report.",
      zahl: "250 to 1,000",
      zahlText: "employees: above the EU SME threshold and below the reporting threshold.",
      text: [
        "For companies in Austria that customers, banks or insurers ask for sustainability information, or that want to report under the Voluntary Standard or GRI.",
        "The emission factors come from the Environment Agency Austria, the legal basis follows § 243b UGB. For companies without their own sustainability team there is the package with support.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Enter",
      title: "Every value needs evidence, with location and quote.",
      bild: "erfassung",
      alt: "Saved proposal for GRI 2-8-a: 37 people with evidence, location and quote, proposed by Erika Editor.",
      caption: "Data entry in the software. Demo data of Muster GmbH.",
      text: [
        "You enter a value and attach the evidence, together with the location in the document and a quote.",
        "The value is a proposal at first. It goes into the report only after a second person has confirmed it.",
      ],
      beispiel: "Example: 37 temporary workers, evidence Personalstatistik_2025.xlsx, sheet Fremdpersonal, cell C2.",
    },
    {
      art: "bild",
      eyebrow: "Review",
      title: "Whoever proposes a value cannot confirm it.",
      bild: "pruefung",
      alt: "Review view for Rainer Reviewer: the proposal by Erika Editor with the buttons Confirm and Reject.",
      caption: "Review view in the software. Demo data of Muster GmbH.",
      text: [
        "Only a second person with the reviewer or administrator role can confirm or reject. The database refuses a person's own proposal.",
        "It stores who proposed the value and who confirmed it. The database sets these names itself.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Greenhouse gases",
      title: "The software calculates Scope 1 and 2 with direct values, as the GHG Protocol provides.",
      bild: "treibhausgase",
      alt: "Greenhouse gas result: Scope 1, Scope 2 location-based and Scope 2 market-based, with the factors used, their source and version.",
      caption: "Result with factors, source and version. Demo data of Muster GmbH.",
      text: [
        "From litres of diesel, cubic metres of natural gas and kilowatt hours of electricity it calculates Scope 1 and Scope 2, location-based and market-based, with factors of the Environment Agency Austria and global warming potentials under IPCC AR6.",
        "Calculators that include the upstream chain give higher totals. Electricity in Austria: 123 g CO₂e per kWh direct, 152 g with upstream. Under the GHG Protocol the upstream chain does not count towards Scope 1 and 2.",
        "For the market-based value you enter your electricity supplier's factor, backed by the electricity bill.",
      ],
      quelle: "Sources: Environment Agency Austria REP-0989, table 4; REP-1031; IPCC AR6 WG I, Table 7.15.",
    },
    {
      art: "bild",
      eyebrow: "Materiality",
      title: "Severity and likelihood produce a ranking under GRI 3.",
      bild: "wesentlichkeit",
      alt: "Ranking of the negative and positive impacts of Muster GmbH and the material topics climate and human rights in the supply chain.",
      caption: "Ranking of impacts. Demo data of Muster GmbH.",
      text: [
        "You record the impacts of your company and rate severity and likelihood. The software ranks them and shows which topics are material.",
        "You transfer the material topics to the report with one click. In the demo data these are climate and human rights in the supply chain.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Release",
      title: "A report can be released only when every required disclosure is met or omitted with a reason.",
      bild: "freigabe",
      alt: "Release check for GRI in accordance: not yet releasable, with the list of missing required disclosures.",
      caption: "Release check, not yet releasable. Demo data of Muster GmbH.",
      text: [
        "Before export the software checks every required disclosure. Open items appear in a list, for example a missing disclosure or a proposal nobody has reviewed yet.",
        "The check exists for GRI and for the VS, with the basic module or with both modules.",
      ],
    },
    {
      art: "bild",
      eyebrow: "Result",
      title: "A report that shows where every number comes from.",
      bild: "belege",
      alt: "PDF report of Muster GmbH, page 7: evidence for section 2, each footnote with source, location and quote.",
      caption: "Evidence as footnotes in the PDF report. Demo data of Muster GmbH.",
      punkte: [
        { titel: "Report as PDF and DOCX", text: "With the evidence as footnotes: source, location and quote." },
        { titel: "GRI content index", text: "In accordance with or with reference to GRI." },
        { titel: "XBRL under the VSME taxonomy", text: "The VS data set, validated against the taxonomy." },
        { titel: "Only confirmed values", text: "Nothing goes into the export that a second person has not confirmed." },
      ],
    },
    {
      art: "liste",
      eyebrow: "Day to day",
      title: "Enter once, then use it for the report, customers, EcoVadis and management.",
      items: [
        { titel: "A customer sends a questionnaire.", text: "You answer from confirmed values, with the evidence next to every number. From 2027 the list in Annex II of the VS shows what a customer subject to reporting may request at most for its report." },
        { titel: "EcoVadis rates again.", text: "Figures and documents are in one place, at the state that is also in the report." },
        { titel: "Management is to approve.", text: "The release check shows every open required disclosure. For every value it is recorded who proposed and who confirmed it." },
        { titel: "A bank wants machine-readable data.", text: "The software exports the VS data set as XBRL under the EFRAG VSME taxonomy. EFRAG has announced its own taxonomy for the VS for the fourth quarter of 2026." },
        { titel: "A value was wrong.", text: "You create a new proposal. Once confirmed, it replaces the old value; the old one stays stored." },
        { titel: "The next report is due.", text: "Tenant, roles and factors are set up. Values and evidence of the previous year remain readable." },
      ],
    },
    {
      art: "qualitaet",
      eyebrow: "Quality",
      title: "Before building, we checked 23 legal facts against their source.",
      text: "Every part of the software is built against a written requirement and accepted by a second review, separate from the build. We build in errors on purpose, and the tests must find them.",
      beispiel: "The review found, for example, two missing GRI requirements, 303-4-b and 306-5-d. Both have been added.",
    },
    { art: "quellen", eyebrow: "Sources", title: "Every rule and every general factor goes back to a public source.", hinweis: "The links lead to the source or to an official overview. Status: November 2026." },
    {
      art: "liste",
      eyebrow: "Limits",
      title: "We would rather tell you today what the software cannot do than in the middle of a project.",
      items: [
        { titel: "No Scope 3.", text: "The software calculates Scope 1 and Scope 2. It does not calculate emissions from the supply chain, from the use of your products or the upstream chain of fuels and electricity, nor a product carbon footprint." },
        { titel: "No local or district heating.", text: "The software has no factor for it. These emissions remain a separate calculation." },
        { titel: "No full ESRS report.", text: "It produces a report under GRI and the data set under the Voluntary Standard." },
        { titel: "No reading of documents.", text: "A person enters each value and attaches the evidence. The software does not read invoices or documents." },
        { titel: "No audit opinion.", text: "Sustainista does not audit reports. The software records what an audit wants to see: evidence, location, who confirmed." },
        { titel: "Demo data today.", text: "The software runs with the demo data of the fictitious Muster GmbH. It is set up for your company in the pilot." },
      ],
    },
    { art: "schritte", eyebrow: "Working together", title: "Four steps from the first call to the first report." },
    {
      art: "pakete",
      eyebrow: "Packages and pilot",
      title: "We start with one report from your own data.",
      pilot: "One report with your own data for one financial year, in the standard of your choice, up to the release check and the export.",
      paketeTitel: "Three packages",
      preis: "Price on request. We state it with the offer, matched to standards, scope and support.",
    },
    { art: "kontakt", eyebrow: "Contact", title: "You can reach us directly.", teamTitel: "In the team", adresse: "Sustainista GmbH, Rathausstraße 21 Top 10B, 1010 Vienna, FN 576551 w", termin: "Free initial call" },
  ],
};
