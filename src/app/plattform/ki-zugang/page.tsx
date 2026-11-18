import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import McpUrlKopieren from "@/components/plattform/McpUrlKopieren";
import McpLiveDemo from "@/components/plattform/McpLiveDemo";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, Check, X } from "lucide-react";
import { MCP_URL, MCP_WERKZEUGE } from "@/lib/plattform";

const SEITE = "https://www.example.invalid/plattform/ki-zugang";
const TITEL = "Sustainista in Claude und ChatGPT: der DPP-Connector";
const BESCHREIBUNG =
  "Binden Sie die Sustainista DPP-Plattform als Connector in Claude oder ChatGPT ein: EU-Batteriepass-Katalog, öffentliche Pässe und GS1-Auflösung direkt im Chat. Ohne Installation, ohne Schlüssel, nur lesend.";

export const metadata: Metadata = {
  title: TITEL,
  description: BESCHREIBUNG,
  alternates: { canonical: SEITE },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: SEITE,
    title: TITEL,
    description: BESCHREIBUNG,
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: TITEL }],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sustainista DPP Connector (MCP)",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Claude, ChatGPT, jeder MCP-Client",
  url: SEITE,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  description: BESCHREIBUNG,
  publisher: { "@type": "Organization", name: "Sustainista", url: "https://www.example.invalid" },
};

const CLIENTS = [
  {
    name: "Claude",
    schritte: [
      "Einstellungen öffnen, Bereich „Connectors“.",
      "„Custom Connector hinzufügen“ wählen.",
      "Name „Sustainista DPP“ und die URL oben eintragen, speichern.",
      "Im Chat den Connector aktivieren und eine Frage stellen.",
    ],
  },
  {
    name: "ChatGPT",
    schritte: [
      "Einstellungen öffnen, Bereich „Apps & Connectors“.",
      "Unter „Erweitert“ den Entwicklermodus einschalten.",
      "Connector anlegen: Name, URL oben, Authentifizierung „Keine“.",
      "Im Chat über das Plus-Menü den Connector zuschalten.",
    ],
  },
  {
    name: "Andere MCP-Clients",
    schritte: [
      "Transport „Streamable HTTP“ wählen.",
      "URL oben eintragen, ohne Schlüssel.",
      "Die vier Werkzeuge erscheinen automatisch.",
      "Funktioniert z. B. mit Cursor, VS Code und dem MCP Inspector.",
    ],
  },
];

const DARF = [
  "den EU-Datenpunktkatalog nach Anhang XIII lesen",
  "veröffentlichte Pässe in der öffentlichen Sicht lesen",
  "GS1 Digital Links zu Pässen auflösen",
];

const DARF_NICHT = [
  "Werte schreiben oder ändern",
  "einen Pass veröffentlichen: das bleibt die Erklärung des Wirtschaftsakteurs",
  "zugriffsbeschränkte Angaben nach Art. 77 Abs. 2 sehen",
  "eine Konformitätsaussage treffen: ein vollständiger Pass ist keine Rechtsbestätigung",
];

const AUSBAU = [
  {
    stufe: "Heute",
    titel: "Öffentlich lesen",
    text: "Katalog, öffentliche Pässe und GS1-Auflösung für jede Person mit Claude oder ChatGPT. Kein Konto nötig.",
    status: "verfügbar",
  },
  {
    stufe: "Nächste Stufe",
    titel: "Mit Ihrem Sustainista-Konto anmelden",
    text: "Anmeldung im Connector per OAuth: Ihre eigenen Pässe, Lückenliste je Pass, Arbeitsvorrat mit Blockadegrund. Was die KI aus Ihren Unterlagen liest, landet als Vorschlag mit Herkunft „KI-extrahiert“ und hält den Pass auf, bis ein Mensch ihn bestätigt.",
    status: "in Vorbereitung",
  },
  {
    stufe: "Danach",
    titel: "Nachhaltigkeitsbericht im Chat",
    text: "Dasselbe Prinzip für den Nachhaltigkeitsbericht: Werte mit Beleg nachfragen, Lücken erkennen, Freigabe bleibt beim Vier-Augen-Prinzip in der Software.",
    status: "geplant",
  },
];

export default function KiZugangPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Navigation />
      <main>
        {/* Kopf */}
        <section className="page-header page-header--netz relative pt-28 pb-20 sm:pt-32 sm:pb-24">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/plattform" className="hover:text-ink-secondary transition-colors">Plattform</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">KI-Zugang</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">KI-Zugang · Model Context Protocol</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink max-w-4xl" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Ihre KI.{" "}
              <span className="text-brand-600">Unsere geprüften Daten.</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-10">
              Binden Sie die Sustainista DPP-Plattform als Connector in Claude oder ChatGPT ein. Dann beantwortet
              Ihr Assistent Fragen zum EU-Batteriepass aus dem Katalog der Plattform statt aus dem Gedächtnis,
              liest veröffentlichte Pässe und löst QR-Codes auf. Ohne Installation, ohne Schlüssel.
            </p>
            <p className="text-marke uppercase tracking-[0.08em] font-semibold text-ink-tertiary mb-3">Connector-URL</p>
            <McpUrlKopieren url={MCP_URL} />
            <p className="mt-3 text-xs text-ink-tertiary">Öffentlich, nur lesend, kostenlos. Begrenzt auf ein Abrufvolumen, das kein Gespräch erreicht.</p>
            <a href="#live" className="mt-8 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
              Erst hier ausprobieren <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Live ausprobieren */}
        <section id="live" className="py-20 sm:py-24 border-b border-border scroll-mt-24" aria-labelledby="live-titel">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Ohne Anmeldung ausprobieren</span>
            <h2 id="live-titel" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-5 max-w-3xl">
              Fragen Sie die Plattform. <span className="text-brand-600">Jetzt, hier im Browser.</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-10">
              Das ist derselbe Aufruf, den Ihr Assistent absetzt, wenn Sie ihm eine Frage stellen. Die Antwort kommt
              in diesem Moment von dpp.example.invalid, mit Rechtsgrundlage und Zugriffsstufe je Datenpunkt.
            </p>
            <McpLiveDemo />
          </div>
        </section>

        {/* Einrichten */}
        <section className="py-20 sm:py-24" aria-labelledby="einrichten">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">In zwei Minuten eingerichtet</span>
            <h2 id="einrichten" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-3xl">
              Eine URL, kein Konto, <span className="text-brand-600">keine Installation.</span>
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {CLIENTS.map((c) => (
                <article key={c.name} className="rounded-card border border-border bg-surface p-7">
                  <h3 className="text-lg font-bold text-ink mb-5">{c.name}</h3>
                  <ol className="space-y-3">
                    {c.schritte.map((s, i) => (
                      <li key={s} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas border border-border text-xs font-bold text-brand-700" aria-hidden="true">
                          {i + 1}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink-tertiary max-w-3xl">
              Menübezeichnungen ändern sich bei Claude und ChatGPT gelegentlich. Je nach Tarif kann das Einbinden
              eigener Connectoren durch Ihre Organisation freigeschaltet werden müssen.
            </p>
          </div>
        </section>

        {/* Werkzeuge */}
        <section className="py-20 sm:py-24 bg-surface border-y border-border" aria-labelledby="werkzeuge">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Was Ihr Assistent damit kann</span>
            <h2 id="werkzeuge" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-3xl">
              Vier Werkzeuge, <span className="text-brand-600">eine Quelle der Wahrheit.</span>
            </h2>
            <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
              {MCP_WERKZEUGE.map((w) => (
                <article key={w.name} className="bg-canvas p-7">
                  <code className="text-xs font-mono font-semibold text-brand-700">{w.name}</code>
                  <h3 className="mt-2 text-lg font-bold text-ink">{w.titel}</h3>
                  <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{w.text}</p>
                  <p className="mt-5 rounded-btn bg-surface px-4 py-3 text-sm text-ink leading-relaxed">
                    <span className="sr-only">Beispielfrage: </span>„{w.beispiel}“
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grenzen */}
        <section className="py-20 sm:py-24" aria-labelledby="grenzen">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5 block">Vertrauen durch Grenzen</span>
              <h2 id="grenzen" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                Die KI liest. <span className="text-brand-600">Menschen entscheiden.</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Der Connector ist eine dünne Schicht über derselben Schnittstelle, die auch jeder Browser und jeder
                QR-Scan nutzt. Prüfung, Zugriffsrollen und Veröffentlichung bleiben in der Plattform. Der Assistent
                kann nichts sehen, was nicht ohnehin öffentlich ist, und nichts verändern.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-card border border-border bg-surface p-6">
                <h3 className="text-sm font-bold text-ink mb-4">Der Assistent kann</h3>
                <ul className="space-y-3">
                  {DARF.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-ink-secondary leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-border bg-canvas p-6">
                <h3 className="text-sm font-bold text-ink mb-4">Der Assistent kann nicht</h3>
                <ul className="space-y-3">
                  {DARF_NICHT.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-ink-secondary leading-relaxed">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-tertiary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Geschäftsmodell / Ausbau */}
        <section className="py-20 sm:py-24 bg-brand-800 text-brand-50" aria-labelledby="ausbau">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block text-brand-200">Bring your own AI</span>
            <h2 id="ausbau" className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] mb-6 max-w-3xl text-white">
              Kein weiteres KI-Abo. Ihr Assistent wird zum Compliance-Werkzeug.
            </h2>
            <p className="text-base text-brand-100 leading-relaxed max-w-3xl mb-14">
              Ihr Team arbeitet bereits mit Claude oder ChatGPT. Statt eine zweite KI-Oberfläche einzuführen, bringt
              Sustainista Katalog, Regeln und Ihre Pässe dorthin, wo gearbeitet wird. Die Plattform bleibt das
              System, in dem Werte geprüft, belegt und freigegeben werden.
            </p>
            <ol className="grid gap-5 md:grid-cols-3">
              {AUSBAU.map((a) => (
                <li key={a.titel} className="rounded-card border border-brand-700 bg-brand-700/40 p-7">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-200">{a.stufe}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${a.status === "verfügbar" ? "bg-brand-50 text-brand-800" : "border border-brand-400/60 text-brand-100"}`}>
                      {a.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{a.titel}</h3>
                  <p className="text-sm text-brand-100 leading-relaxed">{a.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-btn bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-white">
                Pilotkunde für die nächste Stufe werden
              </a>
              <Link href="/plattform" className="inline-flex items-center gap-2 rounded-btn border border-brand-400/60 px-6 py-3 text-sm font-semibold text-brand-50 transition-colors hover:border-brand-200">
                Zur Plattform-Übersicht
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
