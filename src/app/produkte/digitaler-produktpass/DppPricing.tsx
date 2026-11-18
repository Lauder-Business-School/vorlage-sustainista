import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  Plug,
  QrCode,
  RefreshCw,
  Server,
  Tag,
  TrendingDown,
  Workflow,
  XCircle,
} from "lucide-react";

/* Antwort auf die Kosten-FAQ. Wird sichtbar UND im FAQPage-JSON-LD verwendet,
   Google verlangt, dass beide identisch sind. Deshalb genau ein String. */
export const KOSTEN_FAQ_ANTWORT =
  "Die Plattform gibt es in drei Ausbaustufen: Free zum Kennenlernen mit 5 Digitalen Produktpässen, Core für den " +
  "Produktivbetrieb und Enterprise für größere Rollouts mit Governance-Anforderungen. Die Veröffentlichung neuer " +
  "Pässe wird nutzungsabhängig und gestaffelt verrechnet: Die ersten 5 sind kostenlos, danach sinkt der Preis je " +
  "Pass mit wachsendem Volumen. Für bereits veröffentlichte, aktive Pässe fällt keine wiederkehrende Gebühr an. " +
  "Dazu kommt der projektabhängige Aufwand für Datenaudit, Datenmodellierung und Lieferketteneinbindung; er hängt " +
  "von Produktkomplexität, Lieferkettentiefe und vorhandener Datenqualität ab. Die SAP-Integration ist separat " +
  "bepreist: ein einmaliges Initial Enablement und die jährliche Connector-Lizenz. Konkrete Zahlen nennen wir im " +
  "kostenlosen Erstgespräch, abgestimmt auf Ausbaustufe, Volumen und Systemlandschaft, ohne versteckte Beraterstunden.";

const CONTACT = "#kontakt";
const MAIL_SAP =
  "mailto:stefan.bauer@example.invalid?subject=Sustainista DPP Connector for SAP";

/* ── Tarife ── */

const tiers = [
  {
    name: "Free",
    subline: "Digitale Produktpässe kennenlernen.",
    audience: "Für Tests, Einarbeitung und erste DPP-Pilotprojekte.",
    features: [
      "5 Digitale Produktpässe",
      "Manuelle DPP-Erstellung",
      "QR-Code / Digital Link",
      "Gehosteter Digitaler Produktpass",
      "Basis-Produktdatenverwaltung",
      "Basis-Export",
      "Einrichtung im Erstgespräch",
      "Kein Jahresvertrag",
    ],
    cta: { label: "5 DPPs kostenlos anfragen", href: CONTACT },
    highlight: false,
  },
  {
    name: "Core",
    subline: "Vom Pilot in den Produktivbetrieb.",
    audience:
      "Für Unternehmen, die von ersten Pilotprojekten in einen produktiven DPP-Betrieb wechseln.",
    features: [
      "Alles aus Free",
      "DPP-Veröffentlichung zu nutzungsabhängigen Preisen",
      "Massenimport von Produktdaten",
      "REST-API",
      "QR-Code / Digital Link",
      "Gehostete Digitale Produktpässe",
      "Versionshistorie",
      "Strukturierte Produktdatenverwaltung",
      "Laufende Plattformwartung",
      "Updates für sich weiterentwickelnde technische DPP-Standards",
      "Anpassung der unterstützten DPP-Strukturen, wenn sich Anforderungen ändern",
      "Standard-Support",
    ],
    cta: { label: "Core wählen", href: CONTACT },
    highlight: true,
  },
  {
    name: "Enterprise",
    subline: "DPP-Infrastruktur für industrielle Größenordnung.",
    audience:
      "Für Unternehmen mit größeren Produktportfolios, höheren Governance-Anforderungen und komplexen Systemlandschaften.",
    features: [
      "Alles aus Core",
      "DPP-Veröffentlichung zu nutzungsabhängigen Preisen",
      "Rollen für Hersteller, Zulieferer und Administration",
      "Mehrbenutzer- und Organisationsfunktionen",
      "Mandantenfähigkeit für mehrere Einheiten (auf Anfrage)",
      "Erweiterte API- und Automatisierungsfunktionen",
      "Audit- und Governance-Funktionen",
      "Priority-Support",
      "Begleitung der Enterprise-Integration",
      "SAP Connector als Add-on verfügbar",
      "SLA-Optionen (auf Anfrage)",
    ],
    cta: { label: "Sprechen wir darüber", href: CONTACT },
    highlight: false,
  },
];

/* ── Funktionsvergleich ── */

type Cell = string | "check" | "cross";

const featureMatrix: { head: string[]; rows: { cells: Cell[] }[]; highlightCol: number } = {
  head: ["Funktion", "Free", "Core", "Enterprise"],
  highlightCol: 2,
  rows: [
    { cells: ["Jährliche Plattformgebühr", "kostenlos", "auf Anfrage", "auf Anfrage"] },
    { cells: ["Kostenlose DPPs", "5", "erste 5 inklusive", "erste 5 inklusive"] },
    { cells: ["DPP-Veröffentlichung", "5 inklusive", "nutzungsabhängig", "nutzungsabhängig"] },
    { cells: ["QR-Code / Digital Link", "check", "check", "check"] },
    { cells: ["Gehosteter DPP", "check", "check", "check"] },
    { cells: ["Massenimport", "cross", "check", "check"] },
    { cells: ["REST-API", "cross", "check", "check"] },
    { cells: ["Versionshistorie", "Basis", "check", "check"] },
    { cells: ["Plattform- und Standard-Updates", "cross", "inklusive", "inklusive"] },
    { cells: ["Rollen und Berechtigungen", "cross", "check", "check"] },
    { cells: ["Mandantenfähigkeit (Multi-Entity)", "cross", "cross", "auf Anfrage"] },
    { cells: ["Erweiterte Integrationen", "cross", "API", "check"] },
    { cells: ["SAP Connector", "cross", "separat buchbar", "separat buchbar"] },
    { cells: ["Support", "Basis", "Standard", "Priority"] },
  ],
};

/* ── Nutzungsabhängige Veröffentlichung ── */

const usageRows = [
  { volume: "Erste 5 DPPs", fee: "kostenlos" },
  { volume: "Bis 10.000 DPPs", fee: "Staffelpreis je DPP" },
  { volume: "10.001 bis 100.000 DPPs", fee: "reduzierter Staffelpreis" },
  { volume: "Über 100.000 DPPs", fee: "stark reduzierter Staffelpreis" },
  { volume: "Sehr große Volumina", fee: "individuelles Angebot" },
];

/* ── SAP ── */

const sapPackages = [
  {
    kicker: "Initial Enablement",
    body: "Wir verbinden Ihre SAP-Umgebung und machen den ersten automatisierten DPP-Workflow produktionsreif.",
    items: [
      "Analyse der SAP-Systemlandschaft",
      "Einrichtung der Verbindung",
      "Authentifizierung und API-Konfiguration",
      "Initiales Daten-Mapping",
      "Anbindung der relevanten Produktstammdaten",
      "DEV-, QAS- und PROD-Setup innerhalb einer vereinbarten SAP-Landschaft",
      "Initiales DPP-Mapping",
      "End-to-End-Tests",
      "Begleitung beim Go-live",
    ],
  },
  {
    kicker: "Annual Connector License",
    body: "Der Connector bleibt gewartet, während sich SAP-Schnittstellen, DPP-Anforderungen und die Sustainista-Plattform weiterentwickeln.",
    items: [
      "Weiternutzung des Sustainista DPP Connector for SAP",
      "Wartung des Connectors",
      "Wartung für unterstützte SAP-Releases",
      "Anpassungen an relevante SAP-APIs",
      "Updates der Sustainista-API",
      "Anpassung der DPP-Datenstrukturen",
      "Monitoring",
      "Fehlerbehandlung",
      "Connector-Updates",
      "Standardwartung und Support",
    ],
  },
];

const sapFlow = [
  { icon: Database, label: "SAP", sub: "Produktstammdaten" },
  { icon: Plug, label: "Sustainista DPP Connector", sub: "Mapping & Automatisierung" },
  { icon: Server, label: "Sustainista DPP-Infrastruktur", sub: "Struktur, Versionen, API" },
  { icon: QrCode, label: "Digitaler Produktpass", sub: "QR-Code & Digital Link" },
  { icon: Globe, label: "Europäisches DPP-Ökosystem", sub: "Behörden, Handel, Verwertung" },
];

/* ── Warum Sustainista ── */

const advantages = [
  {
    icon: Tag,
    title: "Planbares Modell",
    body: "Fester Jahrestarif je Ausbaustufe plus nutzungsabhängige Veröffentlichung, ohne versteckte Zusatzposten.",
  },
  {
    icon: TrendingDown,
    title: "Für Skalierung gebaut",
    body: "Die Veröffentlichungskosten sinken deutlich, sobald die DPP-Volumina wachsen.",
  },
  {
    icon: RefreshCw,
    title: "Laufende Weiterentwicklung",
    body: "Die Plattform wird weitergepflegt, während sich Standards und technische Anforderungen für Digitale Produktpässe verändern.",
  },
  {
    icon: Workflow,
    title: "Enterprise-Automatisierung",
    body: "APIs und der Sustainista DPP Connector for SAP binden DPP-Prozesse in bestehende Systemlandschaften ein.",
  },
];

/* Konsortium des Forschungsprojekts PACE-DPP, Logos und Schreibweisen von
   dpp-austria.at/partners übernommen (Stand 13.08.2026). */
const paceDppPartners = [
  { name: "VIRTUAL VEHICLE", src: "/pace-virtual-vehicle.png", note: "Koordination" },
  { name: "SIEMENS AG Österreich", src: "/pace-siemens.png" },
  { name: "Infineon", src: "/pace-infineon.png" },
  { name: "Technische Universität Wien", src: "/pace-tu-wien.png", label: "TU Wien" },
  { name: "Technische Universität Berlin", src: "/pace-tu-berlin.png", label: "TU Berlin" },
  { name: "Silicon Austria Labs", src: "/pace-silicon-austria-labs.png" },
  { name: "Research Studios Austria", src: "/pace-research-studios.png" },
  { name: "Papierholz Austria", src: "/pace-papierholz.png" },
  { name: "SETLabs Research", src: "/pace-setlabs.png" },
  { name: "MEDS – Spath Micro Electronic Design", src: "/pace-meds.png", label: "MEDS" },
  { name: "OwnYourData", src: "/pace-ownyourdata.png" },
  { name: "KRONE", src: "/pace-krone.png" },
  { name: "Forschung Burgenland", src: "/pace-forschung-burgenland.png" },
  { name: "Sustainista GmbH", src: "/pace-sustainista.png", own: true },
];

/* ── Anbietervergleich ── */

const providerMatrix: {
  head: string[];
  rows: { cells: Cell[]; own?: boolean }[];
} = {
  head: [
    "Anbieter",
    "Öffentliche Plattformpreise",
    "DPP- und Volumenpreise",
    "ERP- und SAP-Ansatz",
    "Positionierung",
  ],
  rows: [
    {
      own: true,
      cells: [
        "Sustainista",
        "Free zum Kennenlernen; Core und Enterprise auf Anfrage",
        "Erste 5 kostenlos; danach gestaffelt, der Preis je DPP sinkt mit dem Volumen",
        "Eigener Sustainista DPP Connector for SAP",
        "Niedrige DPP-Nutzungskosten, Enterprise-Automatisierung und eigene SAP-Integration",
      ],
    },
    {
      cells: [
        "dpp.cloud",
        "Growth: € 3.000 Setup + € 7.000/Jahr; Professional: € 5.000 Setup + € 12.000/Jahr",
        "SKU-Aktivierungspakete, entsprechend € 1,00 / € 0,50 / € 0,25 pro SKU",
        "ERP-/PIM-Integration inklusive SAP-bezogener Produktdaten-Workflows",
        "Enterprise- und High-Volume-Plattform mit ausgeprägten Service- und Customer-Experience-Funktionen",
      ],
    },
    {
      cells: [
        "Arkive",
        "Starter € 299/Monat; Growth € 999/Monat; Enterprise individuell",
        "€ 0,25 pro erzeugtem DPP im Starter; € 0,10 im Growth",
        "ERP-/PLM-Integration; tiefe SAP-, Oracle- und Individualintegration über dediziertes Engineering",
        "Enterprise-DPP mit Fokus auf Datenqualität, Lieferkette und Lebenszyklusanalyse",
      ],
    },
    {
      cells: [
        "OriginPass",
        "Starter € 79/Monat; Growth € 249/Monat; Scale € 699/Monat",
        "250 / 1.500 / 5.000 aktive DPPs je nach Tarif",
        "BMS-/ERP-Integrationen und erweiterte Workflows werden individuell bepreist",
        "Strukturierte ESPR-orientierte Plattform mit Modell-, Chargen- und Artikelebene",
      ],
    },
    {
      cells: [
        "osapiens",
        "Preise auf Anfrage",
        "Enterprise-Preise",
        "Enterprise-Integration in bestehende Produkt- und Compliance-Prozesse",
        "Breite Enterprise-Plattform für Produktcompliance und Nachhaltigkeit",
      ],
    },
    {
      cells: [
        "Spherity VERA",
        "Preise auf Anfrage",
        "Individuell",
        "Enterprise-Integration und interoperable Datenökosysteme",
        "Enterprise-DPP mit starkem Fokus auf verifizierbare Daten und vertrauenswürdige digitale Identitäten",
      ],
    },
  ],
};

const positioning = [
  {
    n: "01",
    title: "Kostenlos starten",
    body: "Die ersten 5 Digitalen Produktpässe entstehen ohne Plattformvertrag.",
  },
  {
    n: "02",
    title: "Planbare Jahrestarife",
    body: "Core und Enterprise laufen als fester Jahrestarif, ohne versteckte Zusatzposten.",
  },
  {
    n: "03",
    title: "Veröffentlichung für Volumen gebaut",
    body: "Bei hohen Volumina sinkt der Preis je veröffentlichtem Pass deutlich.",
  },
  {
    n: "04",
    title: "SAP-Automatisierung mit klarem Rahmen",
    body: "Die SAP-Integration hat einen definierten Umfang: einmaliges Initial Enablement plus jährliche Connector-Lizenz.",
  },
];

/* ── Zellen und Tabellen ── */

function CellContent({ value, own }: { value: Cell; own?: boolean }) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <CheckCircle2 className="text-brand-600 shrink-0" size={17} strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">Enthalten</span>
        <span className="text-brand-700 font-medium hidden md:inline" aria-hidden="true">Ja</span>
      </span>
    );
  }
  if (value === "cross") {
    return (
      <>
        <XCircle className="text-ink-tertiary" size={17} strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">Nicht enthalten</span>
      </>
    );
  }
  return <span className={own ? "font-medium" : undefined}>{value}</span>;
}

function MatrixTable({
  head,
  rows,
  highlightCol,
  minWidth = "min-w-[46rem]",
}: {
  head: string[];
  rows: { cells: Cell[]; own?: boolean }[];
  highlightCol?: number;
  minWidth?: string;
}) {
  return (
    <>
      {/* Desktop: Tabelle */}
      <div className="hidden sm:block overflow-x-auto">
        <table className={`w-full border-collapse ${minWidth}`}>
          <thead>
            <tr className="border-b border-border">
              {head.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`py-4 text-xs font-semibold uppercase tracking-[0.08em] ${
                    i === 0 ? "text-left pr-6 text-ink-secondary" : "px-4 text-left"
                  } ${i === highlightCol ? "bg-brand-50 text-brand-700 rounded-t-[6px]" : "text-ink-secondary"}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={String(row.cells[0])}
                className={`border-b border-border ${
                  row.own ? "bg-brand-50" : ri % 2 === 0 ? "bg-white" : "bg-canvas"
                }`}
              >
                {row.cells.map((cell, ci) => (
                  <td
                    key={`${String(row.cells[0])}-${ci}`}
                    className={`py-3.5 align-top text-sm leading-relaxed ${
                      ci === 0
                        ? `pr-6 font-medium ${row.own ? "text-brand-700" : "text-ink"}`
                        : `px-4 ${row.own ? "text-brand-700" : "text-ink-secondary"}`
                    } ${ci === highlightCol && !row.own ? "bg-brand-50 text-brand-700" : ""}`}
                  >
                    {ci === 0 && row.own ? (
                      <span className="flex flex-col gap-1">
                        <span>{cell as string}</span>
                        <span className="text-marke font-bold uppercase tracking-[0.08em] text-brand-600">
                          Unser Modell
                        </span>
                      </span>
                    ) : (
                      <CellContent value={cell} own={row.own} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil: Karten */}
      <div className="sm:hidden space-y-4">
        {rows.map((row) => (
          <div
            key={String(row.cells[0])}
            className={`rounded-card border overflow-hidden ${
              row.own ? "border-brand-300 bg-brand-50" : "border-border bg-white"
            }`}
          >
            <div
              className={`px-4 py-2.5 border-b ${
                row.own ? "border-brand-200 bg-brand-100" : "border-border bg-surface"
              }`}
            >
              <span className={`text-sm font-semibold ${row.own ? "text-brand-700" : "text-ink"}`}>
                {row.cells[0] as string}
              </span>
              {row.own && (
                <span className="ml-2 text-marke font-bold uppercase tracking-[0.08em] text-brand-700">
                  Unser Modell
                </span>
              )}
            </div>
            <dl className={`divide-y ${row.own ? "divide-brand-200" : "divide-border"}`}>
              {row.cells.slice(1).map((cell, i) => (
                <div key={head[i + 1]} className="px-4 py-3">
                  <dt className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-1">
                    {head[i + 1]}
                  </dt>
                  <dd className={`text-sm leading-relaxed ${row.own ? "text-brand-700" : "text-ink-secondary"}`}>
                    <CellContent value={cell} own={row.own} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Sections ── */

export default function DppPricing() {
  return (
    <>
      {/* Pricing */}
      <section id="preise" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Preise</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
            Digitale Produktpässe<br />
            <span className="text-ink-tertiary">für jede Ausbaustufe.</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-4">
            Digitale Produktpässe kostenlos kennenlernen, mit einem festen Jahrestarif in den
            Produktivbetrieb gehen und Enterprise-Rollouts automatisieren, sobald die Anforderungen wachsen.
          </p>
          <p className="text-xs text-ink-tertiary mb-14">
            Hinweis: Alle dargestellten Pakete und Preismodelle sind illustrative Prototyp-Beispiele für diese Kursvorlage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-card p-8 border flex flex-col ${
                  t.highlight
                    ? "bg-brand-700 border-brand-600 shadow-ambient-medium"
                    : "bg-canvas border-border"
                }`}
              >
                <p
                  className={`text-marke font-bold uppercase tracking-[0.08em] mb-6 ${
                    t.highlight ? "text-brand-200" : "text-ink-tertiary"
                  }`}
                >
                  {t.name}
                </p>

                <p className={`text-base font-bold mb-2 ${t.highlight ? "text-white" : "text-ink"}`}>
                  {t.subline}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    t.highlight ? "text-brand-200" : "text-ink-secondary"
                  }`}
                >
                  {t.audience}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                          t.highlight ? "bg-brand-300" : "bg-brand-500"
                        }`}
                        aria-hidden="true"
                      />
                      <span className={t.highlight ? "text-brand-100" : "text-ink-secondary"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={t.cta.href}
                  className={`inline-flex items-center justify-center gap-2 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                    t.highlight
                      ? "bg-canvas text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 hover:bg-brand-700 text-white"
                  }`}
                >
                  {t.cta.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-surface border border-border rounded-card p-6 max-w-[68ch]">
            <p className="text-base font-bold text-ink mb-2">
              Die Einrichtung läuft über uns, nicht über ein Anmeldeformular.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed">
              Es gibt keine Selbstregistrierung. Wir richten Ihren Zugang, das Datenmodell für Ihre
              Produktkategorie und die technische Anbindung gemeinsam im Erstgespräch ein, inklusive
              der Frage, welche Pflichtfelder Sie heute schon liefern können und wo noch Daten fehlen.
              Erst danach entstehen laufende Kosten.
            </p>
          </div>

          <p className="mt-6 text-xs text-ink-tertiary max-w-[68ch]">
            Die Tarife für Core und Enterprise nennen wir auf Anfrage; alle Angaben verstehen sich
            exklusive Umsatzsteuer. Core und Enterprise werden jährlich abgerechnet, die Veröffentlichung
            neuer Digitaler Produktpässe wird nutzungsabhängig und gestaffelt verrechnet.
          </p>
        </div>
      </section>

      {/* Funktionsvergleich */}
      <section className="py-24 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Funktionsvergleich</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
            Was in welchem Tarif<br />
            <span className="text-ink-tertiary">enthalten ist.</span>
          </h2>
          <MatrixTable
            head={featureMatrix.head}
            rows={featureMatrix.rows}
            highlightCol={featureMatrix.highlightCol}
            minWidth="min-w-[40rem]"
          />
          <p className="mt-6 text-xs text-ink-tertiary max-w-[68ch]">
            Mit „auf Anfrage&ldquo; gekennzeichnete Punkte klären wir vor Vertragsabschluss anhand Ihrer
            Systemlandschaft ab. Regulatorische Anforderungen entwickeln sich weiter: Core und Enterprise
            enthalten die laufende Pflege der Plattform und der unterstützten DPP-Strukturen. Eine
            rechtliche Garantie für die Konformität einzelner Produkte ist damit nicht verbunden.
          </p>
        </div>
      </section>

      {/* Nutzungsabhängige Veröffentlichung */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Nutzungsabhängiges Modell</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                Ein gestaffeltes Modell für die<br />
                <span className="text-ink-tertiary">DPP-Veröffentlichung.</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-5 max-w-[68ch]">
                Sie zahlen, wenn ein neuer Digitaler Produktpass veröffentlicht wird. Nicht jedes Jahr
                erneut, nur weil der Pass existiert.
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-[68ch]">
                Die Staffel wirkt progressiv: Die ersten 5 Pässe sind kostenlos, und mit jeder weiteren
                Volumenstufe sinkt der Preis je veröffentlichtem Pass. Welche Stufe für Sie greift,
                stimmen wir im Erstgespräch auf Ihr geplantes Volumen ab.
              </p>

              <div className="bg-surface border border-border rounded-card p-6">
                <p className="text-base font-bold text-ink mb-2">Keine laufende Gebühr pro aktivem Pass.</p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Unser Modell ist auf neue DPP-Veröffentlichungen ausgelegt und nicht auf
                  wiederkehrende Gebühren für aktive Pässe. Aktualisierungen und Korrekturen an einem
                  bestehenden Pass gelten nicht als neue Veröffentlichung.
                </p>
              </div>
            </div>

            <div className="bg-canvas border border-border rounded-card overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
                <span className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-secondary">
                  Jährliches DPP-Volumen
                </span>
                <span className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-secondary">
                  Veröffentlichungsgebühr
                </span>
              </div>
              <dl>
                {usageRows.map((r, i) => (
                  <div
                    key={r.volume}
                    className={`flex items-baseline justify-between gap-4 px-6 py-4 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <dt className="text-sm text-ink-secondary">{r.volume}</dt>
                    <dd className="text-sm font-bold text-ink text-right">{r.fee}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Connector: Highlight */}
      <section id="sap-connector" className="py-24 bg-ink">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-brand-400">Sustainista DPP Connector for SAP</p>
            <h2
              className="font-black text-white tracking-tight leading-[1.03] mb-6"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
            >
              Von SAP-Produktdaten<br />
              zum Digitalen Produktpass.
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-4">
              Bestehende SAP-Produktdaten mit Sustainista verbinden und den Weg vom ERP-System zu
              strukturierten Digitalen Produktpässen automatisieren.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-14 max-w-[68ch]">
              Damit werden vorhandene Produktdaten zu skalierbaren DPP-Workflows, ohne dass ein weiteres
              manuelles Datensilo entsteht.
            </p>
          </div>

          {/* SAP Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {sapPackages.map((pkg) => (
              <div key={pkg.kicker} className="rounded-card border border-white/15 bg-white/[0.04] p-8">
                <p className="text-marke font-bold uppercase tracking-[0.08em] text-brand-400 mb-5">
                  {pkg.kicker}
                </p>
                <p className="text-sm text-white/70 leading-relaxed mb-6">{pkg.body}</p>
                <ul className="space-y-2">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full bg-brand-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-white/75">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/75 leading-relaxed max-w-[68ch] mb-16">
            Die Preise für Initial Enablement und Connector-Lizenz nennen wir auf Anfrage.
            Kundenspezifische SAP-Anpassungen, Legacy-Middleware, individuelle Mappings, zusätzliche
            SAP-Landschaften und größere Eigenentwicklungen werden separat kalkuliert. Welche SAP-Releases
            und Schnittstellen unterstützt werden, klären wir im Rahmen des Initial Enablement.
          </p>

          {/* Integrationsfluss */}
          <p className="eyebrow mb-6 text-brand-400">Integrationsfluss</p>
          <ol className="flex flex-col lg:flex-row lg:items-stretch gap-2 mb-8">
            {sapFlow.map(({ icon: Icon, label, sub }, i) => (
              <li key={label} className="flex flex-col lg:flex-row lg:items-center lg:flex-1 gap-2">
                <div className="flex-1 rounded-card border border-white/15 bg-white/[0.04] px-4 py-5 h-full">
                  <Icon className="w-5 h-5 text-brand-400 mb-3" strokeWidth={1.5} aria-hidden="true" />
                  <p className="text-sm font-bold text-white leading-snug mb-1">{label}</p>
                  <p className="text-xs text-white/75 leading-snug">{sub}</p>
                </div>
                {i < sapFlow.length - 1 && (
                  <>
                    <ArrowDown
                      className="w-4 h-4 text-white/35 mx-auto lg:hidden"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="w-4 h-4 text-white/35 hidden lg:block flex-shrink-0"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>

          <p className="text-sm text-white/70 leading-relaxed max-w-[68ch] mb-10">
            Ihr ERP bleibt die Quelle der Produktdaten. Sustainista liefert die DPP-Ebene zwischen
            Unternehmenssystemen und dem entstehenden europäischen DPP-Ökosystem.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT}
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 transition-colors text-ink px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em]"
            >
              Über SAP-Integration sprechen
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={MAIL_SAP}
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
            >
              stefan.bauer@example.invalid
            </a>
          </div>
        </div>
      </section>

      {/* Warum Sustainista */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Warum Sustainista</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
            Mehr als ein DPP-Generator.<br />
            <span className="text-ink-tertiary">Ohne die Komplexität einer großen Enterprise-Suite.</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-12">
            Sustainista verbindet ein planbares DPP-Modell mit der Infrastruktur, die Unternehmen für den
            Weg vom ersten Pilotprojekt zum automatisierten Enterprise-Rollout brauchen. Starten Sie mit
            fünf kostenlosen Pässen, binden Sie Ihre Systeme an, sobald Sie bereit sind, und skalieren Sie
            auf große Produktportfolios ohne teure Abogebühren pro Pass.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 border-t border-border">
            {advantages.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-b border-border py-7">
                <Icon className="w-5 h-5 text-brand-600 mb-4" strokeWidth={1.5} aria-hidden="true" />
                <dt className="text-base font-bold text-ink mb-2">{title}</dt>
                <dd className="text-sm text-ink-secondary leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Anbietervergleich */}
      {/* PACE-DPP Forschungspartnerschaft */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start">
            <Image
              src="/pace-dpp-logo.png"
              alt="PACE-DPP"
              width={320}
              height={160}
              className="h-20 w-auto object-contain"
            />
            <div>
              <p className="eyebrow mb-4">Forschungspartnerschaft</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                Sustainista ist Konsortialpartner<br />
                <span className="text-ink-tertiary">im Forschungsprojekt PACE-DPP.</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-5 max-w-[68ch]">
                PACE-DPP erarbeitet die technischen und regulatorischen Grundlagen für ein
                Datenökosystem rund um den Digitalen Produktpass, mit Anwendungsfällen aus
                Elektronik- und Papierlieferketten. Das Leuchtturmprojekt wird von Virtual Vehicle
                koordiniert und von BMK, FFG, BMWK und DLR-PT gefördert.
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-[68ch]">
                Was wir hier für Kundinnen und Kunden bauen, entsteht damit im selben Umfeld, in dem
                die Standards für den Digitalen Produktpass gerade entwickelt werden.
              </p>

              <p className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-4">
                Das Konsortium
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
                {paceDppPartners.map((p) => (
                  <li
                    key={p.name}
                    className={`rounded-card border px-4 py-4 flex flex-col items-center justify-center gap-2 ${
                      p.own ? "border-brand-300 bg-brand-50" : "border-border bg-canvas"
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={230}
                      height={134}
                      className={`h-10 w-auto object-contain ${p.own ? "" : "opacity-80"}`}
                    />
                    <span
                      className={`text-marke text-center leading-tight ${
                        p.own ? "font-semibold text-brand-700" : "text-ink-secondary"
                      }`}
                    >
                      {p.label ?? p.name}
                    </span>
                    {(p.note || p.own) && (
                      <span className="text-marke font-semibold uppercase tracking-[0.08em] text-brand-600 text-center leading-tight">
                        {p.own ? "Das sind wir" : p.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="https://dpp-austria.at/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em]"
              >
                Partnerliste auf dpp-austria.at
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="marktvergleich" className="py-24 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Marktvergleich</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
            Wie sich Sustainista<br />
            <span className="text-ink-tertiary">einordnet.</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-3">
            Ein sachlicher Blick auf ausgewählte Plattformen für Digitale Produktpässe und ihre öffentlich
            verfügbaren Angaben. Sustainista verbindet einen zugänglichen Einstieg mit einem Upgrade-Pfad in
            Richtung Enterprise-Integration und SAP-Automatisierung; unsere Tarife stimmen wir individuell ab.
          </p>
          <p className="text-xs text-ink-tertiary mb-12">Stand der Vergleichsdaten: 13. August 2026</p>

          <MatrixTable head={providerMatrix.head} rows={providerMatrix.rows} minWidth="min-w-[64rem]" />

          <p className="mt-6 text-xs text-ink-tertiary leading-relaxed max-w-[80ch]">
            Die Angaben zu anderen Anbietern basieren auf öffentlich verfügbaren Preis- und
            Produktinformationen, geprüft im August 2026. Preise verstehen sich, sofern zutreffend,
            exklusive Umsatzsteuer und können sich ändern. Individuelle Enterprise-Angebote,
            Implementierungsprojekte und verhandelte Konditionen können von veröffentlichten Listenpreisen
            abweichen. Für aktuelle kommerzielle Bedingungen wenden Sie sich bitte an den jeweiligen
            Anbieter. Genannte Anbieter- und Produktnamen sind Marken ihrer jeweiligen Eigentümer.
          </p>
        </div>
      </section>

      {/* Positionierung */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Positionierung</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
            Zwischen Self-Service<br />
            <span className="text-ink-tertiary">und Enterprise-Komplexität.</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">
            Günstige Generatoren sind ein guter Weg, erste Pässe zu erzeugen. Große
            Enterprise-Plattformen bieten einen breiten Funktionsumfang, starten dafür aber häufig mit
            deutlich höheren Plattform- oder Implementierungskosten. Sustainista ist für Unternehmen
            gebaut, die beides wollen: einen einfachen Einstieg und einen klaren Weg zu Integration,
            Automatisierung und DPP-Betrieb in industrieller Größenordnung.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {positioning.map((p) => (
              <div key={p.n} className="bg-canvas border border-border rounded-card p-7">
                <span className="text-3xl font-black text-ink-tertiary mb-4 block">{p.n}</span>
                <h3 className="text-base font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Nächster Schritt</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              Mit fünf DPPs starten.<br />
              <span className="text-ink-tertiary">Skalieren, wenn Sie bereit sind.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-[68ch]">
              Testen Sie Sustainista mit Ihren ersten fünf Digitalen Produktpässen oder sprechen Sie mit
              uns über Enterprise- und SAP-Integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em]"
              >
                Kostenlos starten
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={MAIL_SAP}
                className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors bg-canvas"
              >
                Sprechen wir darüber
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
