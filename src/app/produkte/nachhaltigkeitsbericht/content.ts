/**
 * Texte der Produktseite Nachhaltigkeitsbericht, deutsch und englisch. Beide Fassungen teilen
 * Aufbau und Bilder (NachhaltigkeitsberichtView), damit sie nicht auseinanderlaufen.
 *
 * Jede Aussage stammt aus der Tabelle „Erlaubte Aussagen“ der Spec N9
 * (CLAUDE-OUTPUTS/sustainista/esrs-reporting-2026-10-29/N9-spec-READONLY.md); die Quelle je Satz
 * steht in N9-bericht.md. Zahlen in den Beispielen sind Demodaten der erfundenen Muster GmbH.
 * Neue Aussagen nur mit Beleg aus diesen Abnahmen.
 */

export const DE_PATH = "/produkte/nachhaltigkeitsbericht";
export const EN_PATH = "/produkte/nachhaltigkeitsbericht/en";
export const BASE_URL = "https://www.example.invalid";

type Datei = { src: string; width: number; height: number };
/** mobil: Aufnahme der Software in 390 px Breite, unter 640 px statt des Desktop-Ausschnitts. */
type Bild = Datei & { alt: string; mobil?: Datei };

export type BerichtContent = {
  lang: "de" | "en";
  meta: { title: string; description: string; ogTitle: string };
  breadcrumb: { home: string; produkte: string; current: string };
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    lead: string[];
    fuerWen: { k: string; v: string }[];
    chips: string[];
    ctaDemo: string;
    ctaAblauf: string;
    ctaPraesentation: string;
    bild: Bild;
    caption: string;
  };
  ablauf: { eyebrow: string; h2a: string; h2b: string; intro: string; tablistLabel: string; schritte: { reiter: string; titel: string; text: string[]; bild: Bild }[] };
  standards: { eyebrow: string; h2a: string; h2b: string; intro: string; items: { label: string; text: string }[]; bild: Bild; caption: string };
  nachweis: { eyebrow: string; h2a: string; h2b: string; items: { titel: string; text: string }[]; bild: Bild; caption: string };
  nutzen: { eyebrow: string; h2a: string; h2b: string; items: { titel: string; text: string }[] };
  rechtslage: { eyebrow: string; h2a: string; h2b: string; items: { wann: string; titel: string; text: string }[]; standTitel: string; hinweis: string };
  pakete: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    intro: string;
    preis: string;
    cta: string;
    items: { name: string; subline: string; audience: string; features: string[]; highlight: boolean }[];
    hinweisTitel: string;
    hinweisText: string;
  };
  beispiel: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    text: string[];
    felder: { name: string; email: string; firma: string; optional: string };
    platzhalter: { name: string; email: string; firma: string };
    senden: string;
    sendet: string;
    dankeTitel: string;
    dankeText: string;
    sofortLink: string;
    fehler: string;
    quelle: string;
  };
  quellen: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    intro: string;
    items: { gruppe: string; titel: string; text: string; links: { label: string; url: string }[] }[];
  };
  /** „Wie wir sicherstellen, dass es stimmt“ (Nachtrag 5): jede Zahl mit Quelle in N9-bericht.md. */
  pruefung: { eyebrow: string; h2a: string; h2b: string; intro: string; zahlen: { zahl: string; titel: string; text: string }[]; behobenTitel: string; behoben: string[] };
  /** Nur aus /ueber-uns und Impressum (Nachtrag 5, W-23). */
  hintergrund: { eyebrow: string; h2a: string; h2b: string; name: string; rolle: string; text: string[]; team: { name: string; rolle: string; text: string }[]; firma: string; link: string };
  grenzen: { eyebrow: string; h2a: string; h2b: string; intro: string; items: { titel: string; text: string }[] };
  zusammenarbeit: { eyebrow: string; h2a: string; h2b: string; schritte: { titel: string; text: string }[]; paketeLink: string; praesentationText: string; praesentationLink: string };
  mitbringen: { eyebrow: string; h2a: string; h2b: string; intro: string; items: { titel: string; text: string }[] };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  weiter: { eyebrow: string; h2: string; links: { href: string; titel: string; text: string }[] };
  demo: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    text: string[];
    felder: { name: string; email: string; firma: string; nachricht: string; optional: string };
    platzhalter: { name: string; email: string; firma: string; nachricht: string };
    senden: string;
    sendet: string;
    dankeTitel: string;
    dankeText: string;
    fehler: string;
    datenschutzA: string;
    datenschutzLink: string;
    datenschutzB: string;
    quelle: string;
  };
};

export const bilder = {
  uebersicht: { src: "/produkte/nachhaltigkeitsbericht/01-uebersicht.webp", width: 1180, height: 900, mobil: { src: "/produkte/nachhaltigkeitsbericht/01-uebersicht-mobil.webp", width: 375, height: 700 } },
  erfassung: { src: "/produkte/nachhaltigkeitsbericht/02-erfassung-beleg.webp", width: 1180, height: 600, mobil: { src: "/produkte/nachhaltigkeitsbericht/02-erfassung-beleg-mobil.webp", width: 375, height: 740 } },
  pruefung: { src: "/produkte/nachhaltigkeitsbericht/03-vier-augen-pruefung.webp", width: 1180, height: 585, mobil: { src: "/produkte/nachhaltigkeitsbericht/03-vier-augen-pruefung-mobil.webp", width: 375, height: 720 } },
  treibhausgase: { src: "/produkte/nachhaltigkeitsbericht/04-treibhausgase-ergebnis.webp", width: 960, height: 530, mobil: { src: "/produkte/nachhaltigkeitsbericht/04-treibhausgase-ergebnis-mobil.webp", width: 375, height: 540 } },
  wesentlichkeit: { src: "/produkte/nachhaltigkeitsbericht/05-wesentlichkeit-rangfolge.webp", width: 1180, height: 430, mobil: { src: "/produkte/nachhaltigkeitsbericht/05-wesentlichkeit-rangfolge-mobil.webp", width: 375, height: 626 } },
  freigabe: { src: "/produkte/nachhaltigkeitsbericht/06-freigabe-offen.webp", width: 1180, height: 570, mobil: { src: "/produkte/nachhaltigkeitsbericht/06-freigabe-offen-mobil.webp", width: 375, height: 700 } },
  export: { src: "/produkte/nachhaltigkeitsbericht/08-export.webp", width: 1180, height: 680, mobil: { src: "/produkte/nachhaltigkeitsbericht/08-export-mobil.webp", width: 375, height: 700 } },
  index: { src: "/produkte/nachhaltigkeitsbericht/07-gri-inhaltsindex.webp", width: 1240, height: 1120 },
  belege: { src: "/produkte/nachhaltigkeitsbericht/08-pdf-belege.webp", width: 1240, height: 700 },
};

export const de: BerichtContent = {
  lang: "de",
  meta: {
    title: "Software für Nachhaltigkeitsberichte nach VS und GRI",
    description:
      "Nachhaltigkeitsbericht nach dem freiwilligen Standard (VS) und nach GRI. Jeder Wert mit Beleg, Vier-Augen-Prüfung, Scope 1 und 2, Freigabe-Prüfung und Export als PDF, DOCX und XBRL.",
    ogTitle: "Nachhaltigkeitsbericht nach VS und GRI: jeder Wert mit Beleg",
  },
  breadcrumb: { home: "Startseite", produkte: "Produkte", current: "Nachhaltigkeitsbericht" },
  hero: {
    eyebrow: "Software für Nachhaltigkeitsberichte",
    h1a: "Nachhaltigkeits\u00ADbericht",
    h1b: "nach VS und GRI.",
    lead: [
      "Für Unternehmen in Österreich mit 250 bis 1.000 Beschäftigten, die von Kunden, Banken oder Versicherungen nach Nachhaltigkeitsangaben gefragt werden oder nach dem freiwilligen Standard (VS) oder nach GRI berichten wollen.",
      "Sie erfassen jeden Wert mit Beleg, eine zweite Person prüft ihn, und am Ende exportieren Sie den Bericht als PDF, DOCX und XBRL.",
    ],
    fuerWen: [
      { k: "250 bis 1.000 Beschäftigte", v: "Mittelstand über der KMU-Grenze der EU" },
      { k: "Kunden, Banken, Versicherungen", v: "fragen in der Lieferkette nach Angaben" },
      { k: "Österreich", v: "Faktoren des Umweltbundesamts, § 243b UGB" },
    ],
    chips: ["VS nach Delegierter Verordnung (EU) 2026/1560", "GRI mit Inhaltsindex", "Scope 1 und 2", "PDF, DOCX und XBRL"],
    ctaDemo: "Demo anfragen",
    ctaAblauf: "Ablauf ansehen",
    ctaPraesentation: "Präsentation ansehen",
    bild: { ...bilder.uebersicht, alt: "Übersicht der GRI-Datenpunkte der Muster GmbH für die Periode 2025. Jede Zeile zeigt den aktuellen Wert und den Status bestätigt oder vorgeschlagen." },
    caption: "Übersicht einer Berichtsperiode: je Datenpunkt der aktuelle Wert und sein Status. Demodaten der Muster GmbH.",
  },
  ablauf: {
    eyebrow: "Ablauf",
    h2a: "Sechs Schritte",
    h2b: "bis zum Bericht.",
    intro: "Alle Bilder stammen aus der Software. Die Daten gehören zur erfundenen Muster GmbH.",
    tablistLabel: "Schritte der Software",
    schritte: [
      {
        reiter: "Erfassen",
        titel: "Werte erfassen, mit Beleg",
        text: [
          "Sie tragen einen Wert ein und laden den Beleg hoch. Dazu kommen die Fundstelle im Dokument und ein Zitat.",
          "Beispiel aus den Demodaten: 37 Leiharbeitskräfte, Beleg Personalstatistik_2025.xlsx, Blatt Fremdpersonal, Zelle C2.",
        ],
        bild: { ...bilder.erfassung, alt: "Gespeicherter Vorschlag zu GRI 2-8-a: 37 Personen mit Beleg, Fundstelle und Zitat, vorgeschlagen von Erika Editor." },
      },
      {
        reiter: "Prüfen",
        titel: "Vier-Augen-Prüfung",
        text: [
          "Ein erfasster Wert ist zuerst nur ein Vorschlag. Bestätigen oder ablehnen kann ihn nur eine Person mit der Rolle Prüfer oder Administrator.",
          "Die Software speichert, wer den Wert vorgeschlagen und wer ihn bestätigt hat.",
        ],
        bild: { ...bilder.pruefung, alt: "Prüfansicht für Rainer Reviewer: der Vorschlag von Erika Editor mit den Schaltflächen Bestätigen und Ablehnen." },
      },
      {
        reiter: "Treibhausgase",
        titel: "Treibhausgase rechnen",
        text: [
          "Sie geben Verbräuche ein, zum Beispiel Liter Diesel, Kubikmeter Erdgas und Kilowattstunden Strom. Die Software rechnet Scope 1 und Scope 2, standortbasiert und marktbasiert.",
          "Sie verwendet die Faktoren des Umweltbundesamts Österreich und die Treibhauspotenziale nach IPCC AR6. Jeder Faktor steht mit Quelle und Version im Ergebnis.",
        ],
        bild: { ...bilder.treibhausgase, alt: "Ergebnis Treibhausgase: Scope 1, Scope 2 standortbasiert und Scope 2 marktbasiert, darunter die verwendeten Faktoren mit Quelle und Version." },
      },
      {
        reiter: "Wesentlichkeit",
        titel: "Wesentlichkeit nach GRI 3",
        text: [
          "Sie erfassen die Auswirkungen Ihres Unternehmens und bewerten Schweregrad und Wahrscheinlichkeit. Die Software bildet daraus eine Rangfolge und zeigt, welche Themen wesentlich sind.",
          "Die wesentlichen Themen übernehmen Sie mit einem Klick in den Bericht. In den Demodaten sind das Klima und Lieferkette Menschenrechte.",
        ],
        bild: { ...bilder.wesentlichkeit, alt: "Rangfolge der negativen und positiven Auswirkungen der Muster GmbH und die wesentlichen Themen Klima und Lieferkette Menschenrechte." },
      },
      {
        reiter: "Freigabe",
        titel: "Freigabe-Prüfung",
        text: [
          "Vor dem Export prüft die Software jede Pflichtangabe. Offene Punkte stehen in einer Liste, etwa eine fehlende Angabe oder ein Vorschlag, den noch niemand geprüft hat.",
          "Freigabefähig ist der Bericht erst, wenn jede Pflichtangabe erfüllt oder begründet ausgelassen ist.",
        ],
        bild: { ...bilder.freigabe, alt: "Freigabe-Prüfung für GRI in Übereinstimmung: noch nicht freigabefähig, mit der Liste der fehlenden Pflichtangaben." },
      },
      {
        reiter: "Export",
        titel: "Export",
        text: [
          "Der Bericht entsteht als PDF und als DOCX, mit GRI-Inhaltsindex. Den VS-Datensatz gibt die Software als XBRL nach der VSME-Taxonomie aus, gegen die Taxonomie geprüft.",
          "In den Export kommen nur bestätigte Werte.",
        ],
        bild: { ...bilder.export, alt: "Export-Seite: GRI-Bericht mit Inhaltsindex als PDF oder DOCX und der VS-Datensatz als XBRL, jeweils mit dem Stand der Freigabe." },
      },
    ],
  },
  standards: {
    eyebrow: "Standards und Ausgaben",
    h2a: "Genau benannt.",
    h2b: "Ohne Sammelbegriffe.",
    intro: "Diese Standards und Formate unterstützt die Software.",
    items: [
      { label: "VS Basismodul", text: "Freiwilliger Standard nach der Delegierten Verordnung (EU) 2026/1560, Basismodul." },
      { label: "VS Basis- und umfassendes Modul", text: "Derselbe Standard mit dem Zusatzmodul. Die Freigabe-Prüfung kennt beide Varianten." },
      { label: "GRI Universal Standards", text: "Bericht in Übereinstimmung (in accordance) oder mit Bezug (with reference), jeweils mit GRI-Inhaltsindex." },
      { label: "GRI 3", text: "Wesentlichkeitsanalyse mit Rangfolge der Auswirkungen und Liste der wesentlichen Themen." },
      { label: "Scope 1 und Scope 2", text: "Standortbasiert und marktbasiert. Faktoren des Umweltbundesamts Österreich, Treibhauspotenziale nach IPCC AR6." },
      { label: "PDF und DOCX", text: "Der Bericht mit Belegen als Fußnoten und dem GRI-Inhaltsindex." },
      { label: "XBRL", text: "Der VS-Datensatz nach der VSME-Taxonomie, gegen die Taxonomie geprüft." },
    ],
    bild: { ...bilder.index, alt: "GRI-Inhaltsindex im PDF-Bericht der Muster GmbH: Verwendungserklärung, wesentliche Themen und je Angabe die Fundstelle im Bericht." },
    caption: "GRI-Inhaltsindex im PDF-Bericht, Seite 12. Demodaten der Muster GmbH.",
  },
  nachweis: {
    eyebrow: "Nachvollziehbarkeit",
    h2a: "Jeder Wert",
    h2b: "hat eine Herkunft.",
    items: [
      { titel: "Beleg und Fundstelle", text: "Jeder bestätigte Wert hat einen Beleg, eine Fundstelle und ein Zitat. Im PDF stehen sie als Fußnote." },
      { titel: "Nichts wird überschrieben", text: "Ein gespeicherter Wert lässt sich weder ändern noch löschen. Eine Korrektur ist ein neuer Vorschlag. Nach der Bestätigung ersetzt er den alten Wert, der alte bleibt gespeichert." },
      { titel: "Wer was bestätigt hat", text: "Zu jedem Wert steht fest, wer ihn vorgeschlagen und wer ihn bestätigt oder abgelehnt hat. Diese Namen setzt die Datenbank selbst." },
      { titel: "Getrennte Mandanten", text: "Jedes Unternehmen ist in der Datenbank ein eigener Mandant. Eine Person sieht nur die Daten der Unternehmen, in denen sie Mitglied ist." },
    ],
    bild: { ...bilder.belege, alt: "PDF-Bericht der Muster GmbH, Seite 7: Belege zu Abschnitt 2, je Fußnote mit Quelle, Fundstelle und Zitat." },
    caption: "Belege als Fußnoten im PDF-Bericht, Seite 7. Demodaten der Muster GmbH.",
  },
  nutzen: {
    eyebrow: "Nutzen",
    h2a: "Anfragen beantworten,",
    h2b: "Belege griffbereit haben.",
    items: [
      { titel: "Eine Antwort für Kunden und Banken", text: "Kunden und Banken fragen nach Nachhaltigkeitsangaben, etwa nach der Belegschaft. Ein Bericht nach dem freiwilligen Standard (VS) oder nach GRI beantwortet das mit Wert und Beleg. Beispiel aus den Demodaten: 398 unbefristet Beschäftigte zum 31.12.2025, laut Personalstatistik." },
      { titel: "Zwei Standards an einem Ort", text: "Belege, Treibhausgase und Wesentlichkeit liegen in derselben Software. Freigabe-Prüfung und Export gibt es für VS und für GRI." },
      { titel: "Belege für eine spätere Prüfung", text: "Zu jedem bestätigten Wert sieht ein Prüfer Beleg, Fundstelle und Zitat und wer ihn vorgeschlagen und bestätigt hat. Beispiel: Geschäftsführung mit zwei Mitgliedern und Beirat mit drei Mitgliedern, Beleg Organigramm_2025.pdf, Seite 1." },
    ],
  },
  rechtslage: {
    eyebrow: "Rechtslage",
    h2a: "Was gilt,",
    h2b: "kurz gefasst.",
    items: [
      { wann: "18.03.2026", titel: "Omnibus I in Kraft", text: "Richtlinie (EU) 2026/470. Berichtspflichtig ist nur noch, wer mehr als 1.000 Beschäftigte und mehr als 450 Mio. Euro Nettoumsatz hat." },
      { wann: "2026", titel: "Freiwilliger Standard (VS)", text: "Delegierte Verordnung (EU) 2026/1560 mit Basismodul und umfassendem Modul. Nutzbar für alle Unternehmen ohne Berichtspflicht." },
      { wann: "Heute in Österreich", titel: "§ 243b UGB", text: "Erfasst große Unternehmen von öffentlichem Interesse mit mehr als 500 Arbeitnehmern. Befreit ist nach § 908 Abs. 2a UGB, wer bis zu 450 Mio. Euro Umsatz erzielt oder nicht mehr als 1.000 Arbeitnehmer beschäftigt." },
      { wann: "19.03.2027", titel: "Umsetzung von Omnibus I", text: "Bis dahin müssen die Mitgliedstaaten Omnibus I in nationales Recht umsetzen." },
      { wann: "Ab Geschäftsjahr 2027", titel: "Begrenzung der Anfragen in der Lieferkette", text: "Von Partnern mit bis zu 1.000 Beschäftigten dürfen berichtspflichtige Unternehmen nur noch die Angaben aus Anhang II des VS verlangen (Art. 3). In Österreich verweist § 243ba UGB heute auf die VSME-Empfehlung (EU) 2025/1710." },
    ],
    standTitel: "Stand der Rechtslage",
    hinweis: "Zuletzt geprüft im November 2026. Ändert sich die Rechtslage, prüfen wir die Folgen und passen Software und Seite an. Keine Rechtsberatung.",
  },
  pakete: {
    eyebrow: "Pakete",
    h2a: "Drei Pakete,",
    h2b: "Preis auf Anfrage.",
    intro: "Alle Pakete enthalten die Software mit Beleg je Wert, Vier-Augen-Prüfung und Freigabe-Prüfung. Sie unterscheiden sich in den Standards und in der Begleitung durch Sustainista.",
    preis: "Preis auf Anfrage",
    cta: "Angebot anfragen",
    items: [
      { name: "Basis", subline: "Bericht nach dem freiwilligen Standard.", audience: "Für Unternehmen, die Anfragen von Kunden und Banken mit einem Bericht nach VS beantworten wollen.", features: ["VS Basismodul nach Delegierter Verordnung (EU) 2026/1560", "Werte mit Beleg, Fundstelle und Zitat", "Rollen für Erfassen und Prüfen", "Scope 1 und 2, standortbasiert und marktbasiert", "Freigabe-Prüfung für das Basismodul", "VS-Datensatz als XBRL nach VSME-Taxonomie"], highlight: false },
      { name: "VS und GRI", subline: "Beide Standards in einer Software.", audience: "Für Unternehmen, die zusätzlich nach GRI berichten oder das umfassende Modul des VS brauchen.", features: ["Alles aus Basis", "VS Basis- und umfassendes Modul", "GRI in Übereinstimmung oder mit Bezug, mit Inhaltsindex", "Wesentlichkeitsanalyse nach GRI 3", "Bericht als PDF und DOCX mit Belegen als Fußnoten"], highlight: true },
      { name: "Mit Begleitung", subline: "Software und Beratung von Sustainista.", audience: "Für Unternehmen ohne eigenes Team für Nachhaltigkeit.", features: ["Alles aus VS und GRI", "Erstgespräch und Festlegung des Umfangs", "Präsentation der Ergebnisse und Feedback-Schleife", "Maßnahmenplan mit Prioritäten aus der Bilanz"], highlight: false },
    ],
    hinweisTitel: "Welches Paket passt, klären wir im Erstgespräch.",
    hinweisText: "Den Preis nennen wir mit dem Angebot, abgestimmt auf Standards, Umfang und Begleitung.",
  },
  beispiel: {
    eyebrow: "Beispielbericht",
    h2a: "Beispielbericht",
    h2b: "per E-Mail.",
    text: [
      "Ein Nachhaltigkeitsbericht der erfundenen Muster GmbH nach GRI, als PDF, mit GRI-Inhaltsindex und den Belegen als Fußnoten.",
      "Alle Daten sind erfunden. Jede Seite trägt das Wasserzeichen „Entwurf“.",
    ],
    felder: { name: "Name", email: "E-Mail", firma: "Unternehmen", optional: "(optional)" },
    platzhalter: { name: "Vor- und Nachname", email: "name@unternehmen.at", firma: "Firmenname" },
    senden: "Beispielbericht anfordern",
    sendet: "Wird gesendet …",
    dankeTitel: "Danke.",
    dankeText: "Sie erhalten den Bericht per E-Mail.",
    sofortLink: "Hier können Sie ihn gleich öffnen (PDF)",
    fehler: "Die Anforderung konnte nicht gesendet werden. Bitte versuchen Sie es noch einmal oder schreiben Sie an stefan.bauer@example.invalid.",
    quelle: "Anforderung: Beispielbericht Muster GmbH (Produktseite Nachhaltigkeitsbericht)",
  },
  quellen: {
    eyebrow: "Quellen und Grundlagen",
    h2a: "Worauf die Software",
    h2b: "beruht.",
    intro: "Jede Regel und jeder Faktor in der Software geht auf eine dieser Quellen zurück. Die Links führen zur Quelle oder zu einer amtlichen Übersicht.",
    items: [
      { gruppe: "Recht EU", titel: "Richtlinie (EU) 2026/470 (Omnibus I)", text: "Ändert die CSRD: berichtspflichtig ist nur, wer mehr als 1.000 Beschäftigte und mehr als 450 Mio. Euro Nettoumsatz hat. Übersicht der Europäischen Wertpapier- und Marktaufsichtsbehörde (ESMA).", links: [{ label: "Übersicht der ESMA", url: "https://www.esma.europa.eu/esmas-activities/sustainable-finance/sustainability-reporting" }] },
      { gruppe: "Recht EU", titel: "Delegierte Verordnung (EU) 2026/1560 (freiwilliger Standard VS)", text: "Kommissionsfassung und Anhänge: Anhang I mit Basismodul und umfassendem Modul, Anhang II mit der Begrenzung der Anfragen in der Lieferkette.", links: [{ label: "Kommissionsfassung C(2026) 5011 vom 03.07.2026 (PDF)", url: "https://ec.europa.eu/finance/docs/level-2-measures/csrd-delegated-act-2026-5011_en.pdf" }, { label: "Anhänge zur Kommissionsfassung (PDF)", url: "https://ec.europa.eu/finance/docs/level-2-measures/csrd-delegated-act-2026-5011-annex_en.pdf" }] },
      { gruppe: "Recht EU", titel: "Empfehlung (EU) 2025/1710 (VSME)", text: "Empfehlung der Kommission zum freiwilligen KMU-Standard VSME. Seit dem Inkrafttreten des VS am 24.09.2026 hat sie keine Rechtswirkung mehr; in Österreich verweist § 243ba UGB weiter auf ihren Anhang I.", links: [{ label: "Übersicht der EFRAG", url: "https://knowledgehub.efrag.org/eng/interactive/vsme" }] },
      { gruppe: "Recht Österreich", titel: "§ 243b UGB (Nachhaltigkeitsberichtsgesetz, BGBl. I Nr. 6/2026)", text: "Nachhaltigkeitserklärung nach § 243b UGB, Begrenzung der Anfragen nach § 243ba UGB, Übergangsbestimmung § 908 Abs. 2a UGB.", links: [{ label: "ris.bka.gv.at (PDF)", url: "https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2026_I_6/BGBLA_2026_I_6.pdfsig" }] },
      { gruppe: "Standard", titel: "GRI Universal Standards 2021", text: "GRI 1: Foundation 2021, GRI 2: General Disclosures 2021 und GRI 3: Material Topics 2021, Grundlage für Inhaltsindex, Freigabe-Prüfung und Wesentlichkeitsanalyse.", links: [{ label: "GRI 1 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12334" }, { label: "GRI 2 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12358" }, { label: "GRI 3 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12453" }] },
      { gruppe: "Daten", titel: "Emissionsfaktoren des Umweltbundesamts Österreich", text: "Austria's National Inventory Document 2026 (REP-1031) und Harmonisierte österreichische direkte und vorgelagerte THG-Emissionsfaktoren für relevante Energieträger & Technologien, Datenstand 2025 (REP-0989).", links: [{ label: "REP-1031 (PDF)", url: "https://www.umweltbundesamt.at/fileadmin/site/publikationen/rep1031.pdf" }, { label: "REP-0989 (PDF)", url: "https://www.umweltbundesamt.at/fileadmin/site/publikationen/rep0989.pdf" }] },
      { gruppe: "Daten", titel: "Treibhauspotenziale nach IPCC AR6", text: "IPCC Sixth Assessment Report, Working Group I, Chapter 7, Table 7.15, und Supplementary Material, Table 7.SM.7.", links: [{ label: "Kapitel 7 (PDF)", url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf" }, { label: "Ergänzung (PDF)", url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07_SM.pdf" }] },
      { gruppe: "Format", titel: "VSME-XBRL-Taxonomie der EFRAG (Stand 2026-05-01)", text: "Grundlage für den Export des VS-Datensatzes als XBRL; der Export ist gegen diese Taxonomie geprüft.", links: [{ label: "Taxonomie, xbrl.efrag.org (ZIP)", url: "https://xbrl.efrag.org/downloads/vsme/VSME-XBRL-Taxonomy-May-2026.zip" }, { label: "Einstiegspunkt vsme-all.xsd", url: "https://xbrl.efrag.org/taxonomy/vsme/2026-05-01/vsme-all.xsd" }] },
    ],
  },
  pruefung: {
    eyebrow: "Qualität",
    h2a: "Wie wir sicherstellen,",
    h2b: "dass es stimmt.",
    intro: "Jeder Teil der Software ist gegen eine schriftliche Anforderung gebaut. Eine zweite, vom Bau getrennte Prüfung hat ihn abgenommen. Zu jeder Prüfung gehören Gegenproben: Wir bauen absichtlich Fehler ein, und die Tests müssen sie finden.",
    zahlen: [
      { zahl: "23", titel: "Rechtsangaben vor dem Bau geprüft", text: "Schwellen, Fristen und Rechtsakte, jede Angabe mit Quelle und wörtlichem Zitat. Gebaut wurde erst danach." },
      { zahl: "388", titel: "GRI-Anforderungen erfasst", text: "Aus den Texten von 34 GRI-Standards. Dazu 143 Datenpunkte der VSME-Taxonomie und 36 Absätze aus Anhang I des VS." },
      { zahl: "143", titel: "Datenpunkte von VSME und VS abgeglichen", text: "Für jeden Datenpunkt der VSME ist festgehalten, ob und wo der VS ihn verlangt. Für jeden der 36 Absätze des VS ebenso." },
      { zahl: "33", titel: "Faktoren mit Seitenangabe", text: "25 Werte des Umweltbundesamts Österreich (19 Emissionsfaktoren und 6 Energiegehalte) und 8 Treibhauspotenziale nach IPCC AR6, jeder mit PDF-Seite und Zitat. Ein Prüfprogramm vergleicht jeden Wert mit der Seite. In der Gegenprobe fand es alle 146.108 eingebauten Abweichungen." },
      { zahl: "0", titel: "Fehler im XBRL-Export", text: "Geprüft mit Arelle, einem frei verfügbaren Prüfprogramm für XBRL, gegen die VSME-Taxonomie der EFRAG: 0 Fehler, 0 Inkonsistenzen." },
      { zahl: "621", titel: "Tests der Datenbank", text: "Sie prüfen unter anderem Rechte, getrennte Mandanten, die Vier-Augen-Prüfung und die Versionen der Werte. Alle 621 bestehen." },
    ],
    behobenTitel: "Gefunden und behoben",
    behoben: [
      "Im GRI-Katalog fehlten zwei Anforderungen (303-4-b und 306-5-d). Die zweite Prüfung hat sie gefunden, sie sind ergänzt.",
      "Ein Wert konnte nach einer Ablehnung doppelt im Bericht zählen. Das ist behoben und durch einen Test abgesichert.",
      "Wer einen Wert vorschlug und zugleich Prüfer war, konnte den eigenen Vorschlag bestätigen. Heute lehnt die Datenbank das ab.",
    ],
  },
  hintergrund: {
    eyebrow: "Fachlicher Hintergrund",
    h2a: "Wer hinter",
    h2b: "Sustainista steht.",
    name: "Dr. Stefan Bauer",
    rolle: "Gründer und Geschäftsführer der Sustainista GmbH, Wien",
    text: [
      "Mehr als 15 Jahre Erfahrung an der Schnittstelle von Technologie, Innovation und Nachhaltigkeit, als Forscher, Strategieberater und Unternehmensgründer.",
      "Er verantwortet die inhaltliche Qualität jedes Projekts und arbeitet direkt mit Geschäftsführungen zusammen.",
    ],
    team: [
      { name: "Silke Herrnreiter", rolle: "Expertin ESG und Nachhaltigkeitsstrategie", text: "ESG-Strategie, Nachhaltigkeitsberichterstattung und Unternehmenstransformation." },
      { name: "Sara Safavirad", rolle: "Expertin ESG und Compliance", text: "ESG-Regulierung, CSRD und nachhaltiges Finanzwesen." },
    ],
    firma: "Sustainista GmbH, FN 576551 w, Handelsgericht Wien.",
    link: "Mehr über das Team",
  },
  grenzen: {
    eyebrow: "Grenzen",
    h2a: "Was die Software",
    h2b: "nicht macht.",
    intro: "Damit Sie wissen, woran Sie sind.",
    items: [
      { titel: "Kein Scope 3", text: "Die Software rechnet Scope 1 und Scope 2. Emissionen aus der Lieferkette und aus der Nutzung Ihrer Produkte rechnet sie nicht." },
      { titel: "Kein vollständiger ESRS-Bericht", text: "Sie unterstützt den freiwilligen Standard (VS) und GRI. Einen Bericht nach den ESRS, wie ihn berichtspflichtige Unternehmen brauchen, erstellt sie nicht." },
      { titel: "Kein Auslesen von Belegen", text: "Werte trägt eine Person ein und hängt den Beleg an. Die Software liest keine Rechnungen oder Dokumente aus." },
      { titel: "Kein Testat", text: "Sustainista prüft Berichte nicht als Wirtschaftsprüfer und erteilt kein Testat. Beleg, Fundstelle und Zitat je Wert liegen für eine Prüfung bereit." },
    ],
  },
  zusammenarbeit: {
    eyebrow: "Zusammenarbeit",
    h2a: "So arbeiten",
    h2b: "wir zusammen.",
    schritte: [
      { titel: "Erstgespräch und Umfang", text: "Wir zeigen die Software mit den Demodaten der Muster GmbH und klären, welcher Standard und welches Paket zu Ihnen passen." },
      { titel: "Einrichtung mit Ihren Daten", text: "Wir richten einen eigenen Mandanten für Ihr Unternehmen ein, mit Ihrer Berichtsperiode und den Rollen für Erfassen und Prüfen." },
      { titel: "Bericht mit Begleitung", text: "Sie erfassen die Werte mit Belegen. Im Paket mit Begleitung unterstützen wir Sie dabei und präsentieren die Ergebnisse." },
      { titel: "Freigabe und Export", text: "Die Freigabe-Prüfung zeigt, was noch fehlt. Danach exportieren Sie den Bericht als PDF und DOCX und den VS-Datensatz als XBRL." },
    ],
    paketeLink: "Zu den Paketen",
    praesentationText: "Die Präsentation führt in 17 Folien durch Software, Quellen, Grenzen und Zusammenarbeit.",
    praesentationLink: "Präsentation ansehen",
  },
  mitbringen: {
    eyebrow: "Was Sie mitbringen",
    h2a: "Diese Unterlagen",
    h2b: "brauchen wir meist.",
    intro: "Die Liste stammt aus den Belegen des Beispielberichts der Muster GmbH. Was davon nötig ist, hängt vom Standard ab.",
    items: [
      { titel: "Firmenbuchauszug", text: "Firma, Rechtsform und Sitz." },
      { titel: "Geschäftsbericht", text: "Standorte, Konsolidierungskreis, Berichtszeitraum und Strategie." },
      { titel: "Personalstatistik", text: "Beschäftigte zum Stichtag und Leiharbeitskräfte." },
      { titel: "Organigramm", text: "Geschäftsführung, Aufsicht und wer für Nachhaltigkeit zuständig ist." },
      { titel: "Verhaltenskodex und Lieferantenkodex", text: "Grundsätze und Meldewege." },
      { titel: "Verbrauchsmengen", text: "Diesel in Litern, Erdgas in Kubikmetern, Strom in Kilowattstunden, etwa aus einer Aufstellung zu Treibhausgasen." },
      { titel: "Stromrechnung", text: "Mit der Stromkennzeichnung Ihres Lieferanten, für Scope 2 marktbasiert." },
      { titel: "Unterlagen zur Wesentlichkeit", text: "Zum Beispiel das Protokoll eines Workshops, falls vorhanden." },
    ],
  },
  faq: {
    eyebrow: "Häufige Fragen",
    h2: "Häufige Fragen zur Software",
    items: [
      {
        q: "Für wen ist die Software gedacht?",
        a: "Für Unternehmen mit 250 bis 1.000 Beschäftigten. Sie wollen nach dem freiwilligen Standard (VS) oder nach GRI berichten. Oder Kunden und Banken fragen sie nach diesen Angaben.",
      },
      {
        q: "Muss mein Unternehmen nach der CSRD berichten?",
        a: "Nach Omnibus I (Richtlinie (EU) 2026/470) ist nur berichtspflichtig, wer mehr als 1.000 Beschäftigte und mehr als 450 Mio. Euro Nettoumsatz hat. In Österreich gilt derzeit § 243b UGB. Er erfasst große Unternehmen von öffentlichem Interesse mit mehr als 500 Arbeitnehmern. Befreit ist nach § 908 Abs. 2a UGB, wer bis zu 450 Mio. Euro Umsatz erzielt oder nicht mehr als 1.000 Arbeitnehmer beschäftigt. Österreich muss Omnibus I bis 19.03.2027 umsetzen.",
      },
      {
        q: "Ist das eine ESRS-Software?",
        a: "Nein. Die Software unterstützt den freiwilligen Standard (VS) nach der Delegierten Verordnung (EU) 2026/1560 und GRI. Einen Bericht nach den ESRS brauchen nur berichtspflichtige Unternehmen, nach Omnibus I also jene mit mehr als 1.000 Beschäftigten und mehr als 450 Mio. Euro Nettoumsatz. Diesen Bericht erstellt die Software nicht. Der VS ist für alle Unternehmen ohne Berichtspflicht nutzbar.",
      },
      {
        q: "Was ist der freiwillige Standard (VS)?",
        a: "Der VS ist der freiwillige Standard für Nachhaltigkeitsberichte nach der Delegierten Verordnung (EU) 2026/1560. Er hat ein Basismodul und ein umfassendes Modul. Die Software prüft beide Varianten: nur das Basismodul oder Basis- und umfassendes Modul zusammen.",
      },
      {
        q: "Welche Dateien erzeugt die Software?",
        a: "Den Bericht als PDF und als DOCX, jeweils mit GRI-Inhaltsindex und den Belegen als Fußnoten. Dazu den VS-Datensatz als XBRL nach der VSME-Taxonomie. Die XBRL-Datei ist gegen die Taxonomie geprüft.",
      },
      {
        q: "Wie rechnet die Software Treibhausgase?",
        a: "Sie rechnet Scope 1 und Scope 2, standortbasiert und marktbasiert. Grundlage sind die Faktoren des Umweltbundesamts Österreich und die Treibhauspotenziale nach IPCC AR6. Jedes Ergebnis nennt die verwendeten Faktoren mit Quelle und Version.",
      },
      {
        q: "Wann ist ein Bericht freigabefähig?",
        a: "Erst wenn jede Pflichtangabe erfüllt oder begründet ausgelassen ist. Bis dahin zeigt die Freigabe-Prüfung jeden offenen Punkt mit dem betroffenen Datenpunkt.",
      },
      {
        q: "Was passiert, wenn ein Wert falsch ist?",
        a: "Sie legen einen neuen Vorschlag an. Nach der Bestätigung ersetzt er den alten Wert. Der alte Wert bleibt gespeichert. Wird der neue Vorschlag abgelehnt, gilt weiter der alte Wert.",
      },
      {
        q: "Welche Pakete gibt es, und wie erfahre ich den Preis?",
        a: "Es gibt drei Pakete: Basis mit dem VS Basismodul, VS und GRI mit beiden Standards, und ein Paket mit Begleitung durch Sustainista. Den Preis nennen wir auf Anfrage, zusammen mit dem Angebot.",
      },
      {
        q: "Kann ich einen Beispielbericht ansehen?",
        a: "Ja. Über das Formular auf dieser Seite fordern Sie den Beispielbericht der erfundenen Muster GmbH an. Sie erhalten ihn per E-Mail. Alle Daten sind erfunden, jede Seite trägt das Wasserzeichen „Entwurf“.",
      },
      {
        q: "Sieht ein anderes Unternehmen meine Daten?",
        a: "Nein. Jedes Unternehmen ist in der Datenbank ein eigener Mandant. Eine Person sieht nur die Daten der Unternehmen, in denen sie Mitglied ist.",
      },
    ],
  },
  weiter: {
    eyebrow: "Weiterlesen",
    h2: "Passende Seiten",
    links: [
      { href: "/produkte/esg-analyse", titel: "ESG-Analyse und Bericht", text: "Unsere Beratung zur CO₂-Bilanz und zum ersten Nachhaltigkeitsbericht." },
      { href: "/csrd-kmu", titel: "CSRD und KMU", text: "Was die Berichtspflicht nach Omnibus I für Ihr Unternehmen bedeutet." },
    ],
  },
  demo: {
    eyebrow: "Demo",
    h2a: "Demo",
    h2b: "anfragen.",
    text: [
      "Wir zeigen Ihnen die Software mit den Demodaten der Muster GmbH, vom ersten Wert bis zum Export.",
      "Schreiben Sie uns kurz. Wir melden uns per E-Mail mit einem Terminvorschlag.",
    ],
    felder: { name: "Name", email: "E-Mail", firma: "Unternehmen", nachricht: "Nachricht", optional: "(optional)" },
    platzhalter: { name: "Vor- und Nachname", email: "name@unternehmen.at", firma: "Firmenname", nachricht: "Zum Beispiel: Wir wollen 2026 erstmals nach VS berichten." },
    senden: "Demo anfragen",
    sendet: "Wird gesendet …",
    dankeTitel: "Danke, Ihre Anfrage ist angekommen.",
    dankeText: "Wir melden uns per E-Mail mit einem Terminvorschlag.",
    fehler: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es noch einmal oder schreiben Sie an stefan.bauer@example.invalid.",
    datenschutzA: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer ",
    datenschutzLink: "Datenschutzerklärung",
    datenschutzB: " zu.",
    quelle: "Quelle: Produktseite Nachhaltigkeitsbericht (/produkte/nachhaltigkeitsbericht, de), Demo-Anfrage",
  },
};

export const en: BerichtContent = {
  lang: "en",
  meta: {
    title: "Sustainability reporting software for VS and GRI",
    description:
      "Sustainability report under the Voluntary Standard (VS) and GRI. Every value with evidence, four-eyes review, Scope 1 and 2, release check and export as PDF, DOCX and XBRL.",
    ogTitle: "Sustainability report under VS and GRI: every value with evidence",
  },
  breadcrumb: { home: "Home", produkte: "Products", current: "Sustainability report" },
  hero: {
    eyebrow: "Sustainability reporting software",
    h1a: "Sustainability report",
    h1b: "under VS and GRI.",
    lead: [
      "For companies in Austria with 250 to 1,000 employees that customers, banks or insurers ask for sustainability information, or that want to report under the Voluntary Standard (VS) or GRI.",
      "You enter each value with evidence, a second person reviews it, and at the end you export the report as PDF, DOCX and XBRL.",
    ],
    fuerWen: [
      { k: "250 to 1,000 employees", v: "mid-sized companies above the EU SME threshold" },
      { k: "Customers, banks, insurers", v: "ask for information in the value chain" },
      { k: "Austria", v: "Environment Agency Austria factors, § 243b UGB" },
    ],
    chips: ["VS under Delegated Regulation (EU) 2026/1560", "GRI with content index", "Scope 1 and 2", "PDF, DOCX and XBRL"],
    ctaDemo: "Request a demo",
    ctaAblauf: "See the steps",
    ctaPraesentation: "View presentation",
    bild: { ...bilder.uebersicht, alt: "Overview of the GRI data points of Muster GmbH for the 2025 period. Each row shows the current value and its status, confirmed or proposed." },
    caption: "Overview of a reporting period: the current value and its status per data point. Demo data of Muster GmbH. The software interface is in German.",
  },
  ablauf: {
    eyebrow: "Steps",
    h2a: "Six steps",
    h2b: "to the report.",
    intro: "All images come from the software. The data belongs to the fictitious Muster GmbH.",
    tablistLabel: "Steps in the software",
    schritte: [
      {
        reiter: "Enter",
        titel: "Enter values, with evidence",
        text: [
          "You enter a value and upload the evidence. You add the location in the document and a quote.",
          "Example from the demo data: 37 temporary workers, evidence Personalstatistik_2025.xlsx, sheet Fremdpersonal, cell C2.",
        ],
        bild: { ...bilder.erfassung, alt: "Saved proposal for GRI 2-8-a: 37 persons with evidence, location and quote, proposed by Erika Editor." },
      },
      {
        reiter: "Review",
        titel: "Four-eyes review",
        text: [
          "An entered value is only a proposal at first. Only a person with the reviewer or administrator role can confirm or reject it.",
          "The software stores who proposed the value and who confirmed it.",
        ],
        bild: { ...bilder.pruefung, alt: "Review view for Rainer Reviewer: the proposal by Erika Editor with the buttons Confirm and Reject." },
      },
      {
        reiter: "Greenhouse gases",
        titel: "Calculate greenhouse gases",
        text: [
          "You enter consumption, for example litres of diesel, cubic metres of natural gas and kilowatt hours of electricity. The software calculates Scope 1 and Scope 2, location-based and market-based.",
          "It uses the factors of the Environment Agency Austria (Umweltbundesamt) and the global warming potentials from IPCC AR6. Every factor appears in the result with its source and version.",
        ],
        bild: { ...bilder.treibhausgase, alt: "Greenhouse gas result: Scope 1, Scope 2 location-based and Scope 2 market-based, followed by the factors used with source and version." },
      },
      {
        reiter: "Materiality",
        titel: "Materiality under GRI 3",
        text: [
          "You record the impacts of your company and rate severity and likelihood. The software ranks them and shows which topics are material.",
          "You transfer the material topics to the report with one click. In the demo data these are climate and human rights in the supply chain.",
        ],
        bild: { ...bilder.wesentlichkeit, alt: "Ranking of the negative and positive impacts of Muster GmbH and the material topics climate and human rights in the supply chain." },
      },
      {
        reiter: "Release",
        titel: "Release check",
        text: [
          "Before export the software checks every required disclosure. Open items appear in a list, such as a missing disclosure or a proposal nobody has reviewed yet.",
          "The report can only be released once every required disclosure is met or omitted with a reason.",
        ],
        bild: { ...bilder.freigabe, alt: "Release check for GRI in accordance: not yet ready for release, with the list of missing required disclosures." },
      },
      {
        reiter: "Export",
        titel: "Export",
        text: [
          "The report is produced as PDF and DOCX, with a GRI content index. The software outputs the VS data set as XBRL under the VSME taxonomy, validated against the taxonomy.",
          "Only confirmed values go into the export.",
        ],
        bild: { ...bilder.export, alt: "Export page: GRI report with content index as PDF or DOCX and the VS data set as XBRL, each with its release status." },
      },
    ],
  },
  standards: {
    eyebrow: "Standards and outputs",
    h2a: "Named precisely.",
    h2b: "No umbrella terms.",
    intro: "The software supports these standards and formats.",
    items: [
      { label: "VS basic module", text: "Voluntary Standard under Delegated Regulation (EU) 2026/1560, basic module." },
      { label: "VS basic and comprehensive module", text: "The same standard with the additional module. The release check covers both options." },
      { label: "GRI Universal Standards", text: "Reporting in accordance with or with reference to the GRI Standards, each with a GRI content index." },
      { label: "GRI 3", text: "Materiality assessment with a ranking of impacts and a list of material topics." },
      { label: "Scope 1 and Scope 2", text: "Location-based and market-based. Factors of the Environment Agency Austria, global warming potentials from IPCC AR6." },
      { label: "PDF and DOCX", text: "The report with evidence as footnotes and the GRI content index." },
      { label: "XBRL", text: "The VS data set under the VSME taxonomy, validated against the taxonomy." },
    ],
    bild: { ...bilder.index, alt: "GRI content index in the PDF report of Muster GmbH: statement of use, material topics and the location in the report for each disclosure." },
    caption: "GRI content index in the PDF report, page 12. Demo data of Muster GmbH.",
  },
  nachweis: {
    eyebrow: "Traceability",
    h2a: "Every value",
    h2b: "has an origin.",
    items: [
      { titel: "Evidence and location", text: "Every confirmed value has evidence, a location and a quote. In the PDF they appear as a footnote." },
      { titel: "Nothing is overwritten", text: "A stored value can be neither changed nor deleted. A correction is a new proposal. Once confirmed it replaces the old value, and the old value stays stored." },
      { titel: "Who confirmed what", text: "For every value it is recorded who proposed it and who confirmed or rejected it. The database sets these names itself." },
      { titel: "Separate tenants", text: "Each company is a separate tenant in the database. A person only sees the data of the companies they are a member of." },
    ],
    bild: { ...bilder.belege, alt: "PDF report of Muster GmbH, page 7: evidence for section 2, each footnote with source, location and quote." },
    caption: "Evidence as footnotes in the PDF report, page 7. Demo data of Muster GmbH.",
  },
  nutzen: {
    eyebrow: "Benefits",
    h2a: "Answer requests,",
    h2b: "keep the evidence at hand.",
    items: [
      { titel: "One answer for customers and banks", text: "Customers and banks ask for sustainability information, for example about the workforce. A report under the Voluntary Standard (VS) or GRI answers with value and evidence. Example from the demo data: 398 permanent employees on 31.12.2025, according to the personnel statistics." },
      { titel: "Two standards in one place", text: "Evidence, greenhouse gases and materiality live in the same software. Release check and export exist for VS and for GRI." },
      { titel: "Evidence for a later audit", text: "For every confirmed value an auditor sees evidence, location and quote, and who proposed and confirmed it. Example: management with two members and advisory board with three members, evidence Organigramm_2025.pdf, page 1." },
    ],
  },
  rechtslage: {
    eyebrow: "Legal situation",
    h2a: "What applies,",
    h2b: "in brief.",
    items: [
      { wann: "18 Mar 2026", titel: "Omnibus I in force", text: "Directive (EU) 2026/470. Only companies with more than 1,000 employees and a net turnover of more than 450 million euros have to report." },
      { wann: "2026", titel: "Voluntary Standard (VS)", text: "Delegated Regulation (EU) 2026/1560 with a basic and a comprehensive module. Open to all companies without a reporting obligation." },
      { wann: "Today in Austria", titel: "§ 243b UGB", text: "Covers large public-interest entities with more than 500 employees. Under § 908 (2a) UGB a company is exempt if its turnover is up to 450 million euros or it has no more than 1,000 employees." },
      { wann: "19 Mar 2027", titel: "Transposition of Omnibus I", text: "By this date Member States must transpose Omnibus I into national law." },
      { wann: "From financial year 2027", titel: "Limit on requests in the value chain", text: "From partners with up to 1,000 employees, reporting companies may only request the information in Annex II of the VS (Art. 3). In Austria § 243ba UGB currently refers to the VSME Recommendation (EU) 2025/1710." },
    ],
    standTitel: "Status of the law",
    hinweis: "Last checked in November 2026. If the law changes, we review the consequences and adapt the software and this page. Not legal advice.",
  },
  pakete: {
    eyebrow: "Packages",
    h2a: "Three packages,",
    h2b: "price on request.",
    intro: "All packages include the software with evidence per value, four-eyes review and release check. They differ in the standards and in the support from Sustainista.",
    preis: "Price on request",
    cta: "Request a quote",
    items: [
      { name: "Basic", subline: "Report under the Voluntary Standard.", audience: "For companies that want to answer requests from customers and banks with a report under the VS.", features: ["VS basic module under Delegated Regulation (EU) 2026/1560", "Values with evidence, location and quote", "Roles for entering and reviewing", "Scope 1 and 2, location-based and market-based", "Release check for the basic module", "VS data set as XBRL under the VSME taxonomy"], highlight: false },
      { name: "VS and GRI", subline: "Both standards in one software.", audience: "For companies that also report under GRI or need the comprehensive module of the VS.", features: ["Everything in Basic", "VS basic and comprehensive module", "GRI in accordance or with reference, with content index", "Materiality assessment under GRI 3", "Report as PDF and DOCX with evidence as footnotes"], highlight: true },
      { name: "With support", subline: "Software and consulting from Sustainista.", audience: "For companies without their own sustainability team.", features: ["Everything in VS and GRI", "Initial call and agreement on scope", "Presentation of results and feedback round", "Action plan with priorities from the carbon accounts"], highlight: false },
    ],
    hinweisTitel: "We clarify which package fits in the initial call.",
    hinweisText: "We state the price with the quote, matched to standards, scope and support.",
  },
  beispiel: {
    eyebrow: "Sample report",
    h2a: "Sample report",
    h2b: "by email.",
    text: [
      "A sustainability report of the fictitious Muster GmbH under GRI, as PDF, with GRI content index and the evidence as footnotes. The report is in German.",
      "All data is fictitious. Every page carries the watermark „Entwurf“ (draft).",
    ],
    felder: { name: "Name", email: "Email", firma: "Company", optional: "(optional)" },
    platzhalter: { name: "First and last name", email: "name@company.com", firma: "Company name" },
    senden: "Request sample report",
    sendet: "Sending …",
    dankeTitel: "Thank you.",
    dankeText: "You will receive the report by email.",
    sofortLink: "You can open it right here (PDF)",
    fehler: "The request could not be sent. Please try again or write to stefan.bauer@example.invalid.",
    quelle: "Anforderung: Beispielbericht Muster GmbH (Produktseite Nachhaltigkeitsbericht, en)",
  },
  quellen: {
    eyebrow: "Sources",
    h2a: "What the software",
    h2b: "is based on.",
    intro: "Every rule and every factor in the software goes back to one of these sources. The links lead to the source or to an official overview.",
    items: [
      { gruppe: "EU law", titel: "Directive (EU) 2026/470 (Omnibus I)", text: "Amends the CSRD: only companies with more than 1,000 employees and a net turnover of more than 450 million euros have to report. Overview by the European Securities and Markets Authority (ESMA).", links: [{ label: "Overview by ESMA", url: "https://www.esma.europa.eu/esmas-activities/sustainable-finance/sustainability-reporting" }] },
      { gruppe: "EU law", titel: "Delegated Regulation (EU) 2026/1560 (Voluntary Standard VS)", text: "Commission version and annexes: Annex I with the basic and the comprehensive module, Annex II with the limit on requests in the value chain.", links: [{ label: "Commission version C(2026) 5011 of 03.07.2026 (PDF)", url: "https://ec.europa.eu/finance/docs/level-2-measures/csrd-delegated-act-2026-5011_en.pdf" }, { label: "Annexes to the Commission version (PDF)", url: "https://ec.europa.eu/finance/docs/level-2-measures/csrd-delegated-act-2026-5011-annex_en.pdf" }] },
      { gruppe: "EU law", titel: "Recommendation (EU) 2025/1710 (VSME)", text: "Commission recommendation on the voluntary SME standard VSME. Since the VS entered into force on 24.09.2026 it no longer has legal effect; in Austria § 243ba UGB still refers to its Annex I.", links: [{ label: "Overview by EFRAG", url: "https://knowledgehub.efrag.org/eng/interactive/vsme" }] },
      { gruppe: "Austrian law", titel: "§ 243b UGB (Sustainability Reporting Act, BGBl. I Nr. 6/2026)", text: "Sustainability statement under § 243b UGB, limit on requests under § 243ba UGB, transitional provision § 908 (2a) UGB.", links: [{ label: "ris.bka.gv.at (PDF)", url: "https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2026_I_6/BGBLA_2026_I_6.pdfsig" }] },
      { gruppe: "Standard", titel: "GRI Universal Standards 2021", text: "GRI 1: Foundation 2021, GRI 2: General Disclosures 2021 and GRI 3: Material Topics 2021, the basis for content index, release check and materiality assessment.", links: [{ label: "GRI 1 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12334" }, { label: "GRI 2 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12358" }, { label: "GRI 3 (PDF)", url: "https://globalreporting.org/pdf.ashx?id=12453" }] },
      { gruppe: "Data", titel: "Emission factors of the Environment Agency Austria", text: "Austria's National Inventory Document 2026 (REP-1031) and the harmonised Austrian direct and upstream GHG emission factors for relevant energy carriers and technologies, data status 2025 (REP-0989).", links: [{ label: "REP-1031 (PDF)", url: "https://www.umweltbundesamt.at/fileadmin/site/publikationen/rep1031.pdf" }, { label: "REP-0989 (PDF)", url: "https://www.umweltbundesamt.at/fileadmin/site/publikationen/rep0989.pdf" }] },
      { gruppe: "Data", titel: "Global warming potentials from IPCC AR6", text: "IPCC Sixth Assessment Report, Working Group I, Chapter 7, Table 7.15, and Supplementary Material, Table 7.SM.7.", links: [{ label: "Chapter 7 (PDF)", url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07.pdf" }, { label: "Supplement (PDF)", url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter07_SM.pdf" }] },
      { gruppe: "Format", titel: "EFRAG VSME XBRL taxonomy (version 2026-05-01)", text: "The basis for exporting the VS data set as XBRL; the export is validated against this taxonomy.", links: [{ label: "Taxonomy, xbrl.efrag.org (ZIP)", url: "https://xbrl.efrag.org/downloads/vsme/VSME-XBRL-Taxonomy-May-2026.zip" }, { label: "Entry point vsme-all.xsd", url: "https://xbrl.efrag.org/taxonomy/vsme/2026-05-01/vsme-all.xsd" }] },
    ],
  },
  pruefung: {
    eyebrow: "Quality",
    h2a: "How we make sure",
    h2b: "it is right.",
    intro: "Every part of the software is built against a written requirement. A second review, separate from the build, accepted it. Every review includes counter-checks: we build in errors on purpose, and the tests must find them.",
    zahlen: [
      { zahl: "23", titel: "legal facts checked before building", text: "Thresholds, deadlines and legal acts, each with a source and a verbatim quote. Building started only afterwards." },
      { zahl: "388", titel: "GRI requirements recorded", text: "From the texts of 34 GRI Standards. In addition 143 data points of the VSME taxonomy and 36 paragraphs from Annex I of the VS." },
      { zahl: "143", titel: "data points matched between VSME and VS", text: "For every VSME data point it is recorded whether and where the VS requires it. The same for each of the 36 paragraphs of the VS." },
      { zahl: "33", titel: "factors with page reference", text: "25 values of the Environment Agency Austria (19 emission factors and 6 energy contents) and 8 global warming potentials under IPCC AR6, each with PDF page and quote. A checking program compares every value with the page. In the counter-check it found all 146,108 deviations built in." },
      { zahl: "0", titel: "errors in the XBRL export", text: "Checked with Arelle, a freely available XBRL validator, against the EFRAG VSME taxonomy: 0 errors, 0 inconsistencies." },
      { zahl: "621", titel: "database tests", text: "Among other things they check permissions, separate tenants, the four-eyes review and the versions of values. All 621 pass." },
    ],
    behobenTitel: "Found and fixed",
    behoben: [
      "Two requirements were missing from the GRI catalogue (303-4-b and 306-5-d). The second review found them; they have been added.",
      "A value could count twice in the report after a rejection. This is fixed and secured by a test.",
      "A person who proposed a value and was also a reviewer could confirm their own proposal. Today the database refuses this.",
    ],
  },
  hintergrund: {
    eyebrow: "Professional background",
    h2a: "Who is behind",
    h2b: "Sustainista.",
    name: "Dr. Stefan Bauer",
    rolle: "Founder and Managing Director of Sustainista GmbH, Vienna",
    text: [
      "More than 15 years of experience at the intersection of technology, innovation and sustainability: as a researcher, strategy consultant and entrepreneur.",
      "He is responsible for the content quality of every project and works directly with management teams.",
    ],
    team: [
      { name: "Silke Herrnreiter", rolle: "ESG and Sustainability Strategy Expert", text: "ESG strategy, sustainability reporting and corporate transformation." },
      { name: "Sara Safavirad", rolle: "ESG and Compliance Expert", text: "ESG regulation, CSRD and sustainable finance." },
    ],
    firma: "Sustainista GmbH, FN 576551 w, Commercial Court Vienna.",
    link: "More about the team",
  },
  grenzen: {
    eyebrow: "Limits",
    h2a: "What the software",
    h2b: "does not do.",
    intro: "So you know where you stand.",
    items: [
      { titel: "No Scope 3", text: "The software calculates Scope 1 and Scope 2. It does not calculate emissions from the supply chain or from the use of your products." },
      { titel: "No full ESRS report", text: "It supports the Voluntary Standard (VS) and GRI. It does not produce a report under the ESRS as required for companies subject to reporting." },
      { titel: "No reading of documents", text: "A person enters each value and attaches the evidence. The software does not read invoices or documents." },
      { titel: "No audit opinion", text: "Sustainista does not audit reports as an auditor and gives no audit opinion. Evidence, location and quote for each value are ready for an audit." },
    ],
  },
  zusammenarbeit: {
    eyebrow: "Working together",
    h2a: "How we",
    h2b: "work together.",
    schritte: [
      { titel: "Initial call and scope", text: "We show the software with the demo data of Muster GmbH and clarify which standard and which package suit you." },
      { titel: "Setup with your data", text: "We set up a separate tenant for your company, with your reporting period and the roles for entering and reviewing." },
      { titel: "Report with support", text: "You enter the values with evidence. In the package with support we help you and present the results." },
      { titel: "Release and export", text: "The release check shows what is still missing. Then you export the report as PDF and DOCX and the VS data set as XBRL." },
    ],
    paketeLink: "See the packages",
    praesentationText: "The presentation walks through software, sources, limits and working together in 17 slides.",
    praesentationLink: "View presentation",
  },
  mitbringen: {
    eyebrow: "What you bring",
    h2a: "The documents",
    h2b: "we usually need.",
    intro: "The list comes from the evidence of the sample report of Muster GmbH. What is needed depends on the standard.",
    items: [
      { titel: "Company register extract", text: "Company name, legal form and registered office." },
      { titel: "Annual report", text: "Sites, scope of consolidation, reporting period and strategy." },
      { titel: "Personnel statistics", text: "Employees at the reporting date and temporary workers." },
      { titel: "Organisation chart", text: "Management, supervision and who is responsible for sustainability." },
      { titel: "Code of conduct and supplier code", text: "Principles and reporting channels." },
      { titel: "Consumption figures", text: "Diesel in litres, natural gas in cubic metres, electricity in kilowatt hours, for example from a greenhouse gas statement." },
      { titel: "Electricity bill", text: "With your supplier's electricity disclosure, for market-based Scope 2." },
      { titel: "Materiality documents", text: "For example the minutes of a workshop, if available." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    h2: "Frequently asked questions",
    items: [
      {
        q: "Who is the software for?",
        a: "For companies with 250 to 1,000 employees. They want to report under the Voluntary Standard (VS) or GRI. Or customers and banks ask them for this information.",
      },
      {
        q: "Does my company have to report under the CSRD?",
        a: "Under Omnibus I (Directive (EU) 2026/470) only companies with more than 1,000 employees and a net turnover of more than 450 million euros have to report. In Austria § 243b UGB currently applies. It covers large public-interest entities with more than 500 employees. Under § 908 (2a) UGB a company is exempt if its turnover is up to 450 million euros or it has no more than 1,000 employees. Austria has to transpose Omnibus I by 19 March 2027.",
      },
      {
        q: "Is this ESRS software?",
        a: "No. The software supports the Voluntary Standard (VS) under Delegated Regulation (EU) 2026/1560 and GRI. A report under the ESRS is only needed by companies subject to reporting, which under Omnibus I means those with more than 1,000 employees and a net turnover of more than 450 million euros. The software does not produce that report. The VS is open to all companies without a reporting obligation.",
      },
      {
        q: "What is the Voluntary Standard (VS)?",
        a: "The VS is the voluntary standard for sustainability reports under Delegated Regulation (EU) 2026/1560. It has a basic module and a comprehensive module. The software checks both options: the basic module alone or the basic and comprehensive modules together.",
      },
      {
        q: "Which files does the software produce?",
        a: "The report as PDF and DOCX, each with a GRI content index and the evidence as footnotes. In addition the VS data set as XBRL under the VSME taxonomy. The XBRL file is validated against the taxonomy.",
      },
      {
        q: "How does the software calculate greenhouse gases?",
        a: "It calculates Scope 1 and Scope 2, location-based and market-based. It uses the factors of the Environment Agency Austria and the global warming potentials from IPCC AR6. Every result names the factors used with source and version.",
      },
      {
        q: "When can a report be released?",
        a: "Only once every required disclosure is met or omitted with a reason. Until then the release check shows every open item with the data point concerned.",
      },
      {
        q: "What happens if a value is wrong?",
        a: "You create a new proposal. Once confirmed it replaces the old value. The old value stays stored. If the new proposal is rejected, the old value remains valid.",
      },
      {
        q: "Which packages are there, and how do I get a price?",
        a: "There are three packages: Basic with the VS basic module, VS and GRI with both standards, and a package with support from Sustainista. We state the price on request, together with the quote.",
      },
      {
        q: "Can I see a sample report?",
        a: "Yes. Use the form on this page to request the sample report of the fictitious Muster GmbH. You will receive it by email. All data is fictitious and every page carries the watermark „Entwurf“ (draft).",
      },
      {
        q: "Can another company see my data?",
        a: "No. Each company is a separate tenant in the database. A person only sees the data of the companies they are a member of.",
      },
    ],
  },
  weiter: {
    eyebrow: "Read more",
    h2: "Related pages",
    links: [
      { href: "/produkte/esg-analyse", titel: "ESG analysis and report", text: "Our consulting on carbon accounting and the first sustainability report (in German)." },
      { href: "/csrd-kmu", titel: "CSRD and SMEs", text: "What the reporting obligation after Omnibus I means for your company (in German)." },
    ],
  },
  demo: {
    eyebrow: "Demo",
    h2a: "Request",
    h2b: "a demo.",
    text: [
      "We show you the software with the demo data of Muster GmbH, from the first value to the export.",
      "Send us a short message. We will reply by email with a proposed date.",
    ],
    felder: { name: "Name", email: "Email", firma: "Company", nachricht: "Message", optional: "(optional)" },
    platzhalter: { name: "First and last name", email: "name@company.com", firma: "Company name", nachricht: "For example: we want to report under the VS for the first time in 2026." },
    senden: "Request a demo",
    sendet: "Sending …",
    dankeTitel: "Thank you, your request has arrived.",
    dankeText: "We will reply by email with a proposed date.",
    fehler: "The request could not be sent. Please try again or write to stefan.bauer@example.invalid.",
    datenschutzA: "By submitting you agree to the processing of your data in accordance with our ",
    datenschutzLink: "privacy policy",
    datenschutzB: ".",
    quelle: "Quelle: Produktseite Nachhaltigkeitsbericht (/produkte/nachhaltigkeitsbericht/en, en), Demo-Anfrage",
  },
};
