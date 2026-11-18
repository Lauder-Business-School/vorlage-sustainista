import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import McpUrlKopieren from "@/components/plattform/McpUrlKopieren";
import McpLiveDemo from "@/components/plattform/McpLiveDemo";
import StandardWegweiser from "@/components/plattform/StandardWegweiser";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, FileStack, Fingerprint, Plug, ScanLine, UserCheck } from "lucide-react";
import { de as bericht } from "@/app/produkte/nachhaltigkeitsbericht/content";
import { DPP_PLATTFORM_URL, MCP_URL } from "@/lib/plattform";

const SEITE = "https://www.example.invalid/plattform";
const TITEL = "Sustainista Plattform: Digitaler Produktpass und Nachhaltigkeitsbericht";
const BESCHREIBUNG =
  "Zwei Software-Produkte, ein Prinzip: Digitaler Produktpass inkl. EU-Batteriepass und Nachhaltigkeitsbericht nach VS und GRI. Jeder Wert mit Herkunft, Freigabe durch Menschen, Zugang auch über Claude und ChatGPT.";

export const metadata: Metadata = {
  title: { absolute: "Plattform: Produktpass & Nachhaltigkeitsbericht | Sustainista" },
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
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Sustainista Digitaler Produktpass",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: DPP_PLATTFORM_URL,
      description: "Digitaler Produktpass und EU-Batteriepass: Datenmodell nach Anhang XIII, GS1 Digital Link, Schnittstelle nach EN 18222.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Sustainista Nachhaltigkeitsbericht",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.example.invalid/produkte/nachhaltigkeitsbericht",
      description: bericht.hero.lead.join(" "),
    },
  ],
};

const DPP_PUNKTE = [
  "Datenmodell nach Anhang XIII und EN 18223",
  "QR-Code und GS1 Digital Link je Stück",
  "Zugriffsrollen nach Art. 77, öffentliche und geschützte Sicht",
  "Maschinenschnittstelle nach EN 18222",
];

const PRINZIPIEN = [
  {
    icon: Fingerprint,
    titel: "Jeder Wert mit Herkunft",
    text: "Ob aus dem ERP, aus einem Lieferantendokument oder von einer KI gelesen: die Plattform merkt sich, woher ein Wert kommt. Ein KI-Vorschlag ist als solcher markiert.",
  },
  {
    icon: UserCheck,
    titel: "Menschen geben frei",
    text: "Im Produktpass hält ein unbestätigter KI-Wert die Veröffentlichung auf. Im Nachhaltigkeitsbericht prüft eine zweite Person jeden Wert. Die Erklärung bleibt beim Unternehmen.",
  },
  {
    icon: FileStack,
    titel: "Offene Standards statt Insel",
    text: "EN 18222 und GS1 Digital Link für Pässe, PDF, DOCX und XBRL für Berichte. Ihre Daten bleiben exportierbar und anschlussfähig.",
  },
  {
    icon: Plug,
    titel: "Dort, wo Ihr Team arbeitet",
    text: "Über das Model Context Protocol fragen Claude und ChatGPT die Plattform direkt. Ohne zweite Oberfläche, ohne zusätzliches KI-Abo.",
  },
];

const EINSTIEG = [
  { titel: "Software selbst nutzen", text: "Nachhaltigkeitsbericht mit Beleg je Wert, Vier-Augen-Prüfung und Freigabe-Prüfung. Ihr Team erfasst, eine zweite Person prüft.", link: "/produkte/nachhaltigkeitsbericht#pakete", linkText: "Pakete Nachhaltigkeitsbericht" },
  { titel: "Readiness prüfen", text: "Compliance Check für Batterie- und Produktpass in rund vier Wochen: Rollenmatrix, Gap-Analyse, Musterpass, Lieferantenanfragen, Maßnahmenplan.", link: "/produkte/compliance-check", linkText: "Compliance Check" },
  { titel: "Komplett umgesetzt", text: "Vom Datenaudit bis zum veröffentlichten Pass auf der DPP-Plattform, oder der Bericht mit Begleitung durch Sustainista.", link: "/produkte/digitaler-produktpass", linkText: "Digitaler Produktpass" },
];

/** Illustration des Herkunftsprinzips; keine Aufnahme der Software. */
function PassVorschau() {
  const zeilen = [
    { feld: "Hersteller", wert: "Muster Batterien GmbH", status: "bestätigt" },
    { feld: "Batteriechemie", wert: "LFP", status: "bestätigt" },
    { feld: "Nennkapazität", wert: "280 Ah", status: "bestätigt" },
    { feld: "CO₂-Fußabdruck", wert: "aus Datenblatt gelesen", status: "KI-Vorschlag" },
  ];
  return (
    <figure className="rounded-card border border-border bg-canvas p-5 shadow-ambient-low" aria-label="Illustration: Batteriepass mit Herkunft je Wert">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4 mb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Batteriepass · Entwurf</p>
          <p className="font-mono text-sm font-semibold text-ink">ATDEMODEMO0002</p>
        </div>
        <ScanLine className="h-8 w-8 text-brand-600" aria-hidden="true" />
      </div>
      <dl className="divide-y divide-border">
        {zeilen.map((z) => (
          <div key={z.feld} className="flex items-center justify-between gap-3 py-2.5">
            <div className="min-w-0">
              <dt className="text-xs text-ink-tertiary">{z.feld}</dt>
              <dd className="truncate text-sm font-medium text-ink">{z.wert}</dd>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                z.status === "bestätigt" ? "bg-brand-50 text-brand-700" : "border border-caution/40 text-caution"
              }`}
            >
              {z.status}
            </span>
          </div>
        ))}
      </dl>
      <figcaption className="mt-4 rounded-btn bg-surface px-3 py-2.5 text-xs text-ink-secondary leading-relaxed">
        Veröffentlichung gesperrt, bis ein Mensch den KI-Vorschlag gegen die Quelle bestätigt. Illustration mit Demodaten.
      </figcaption>
    </figure>
  );
}

export default function PlattformPage() {
  const nb = bericht.hero;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Navigation />
      <main>
        {/* Kopf */}
        <section className="page-header page-header--matrix relative pt-28 pb-20 sm:pt-32 sm:pb-24">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">Startseite</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">Plattform</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">Sustainista Plattform</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink max-w-4xl" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Zwei Pflichten.{" "}
              <span className="text-brand-600">Eine Plattform.</span>
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl mb-10">
              Produktpass und Nachhaltigkeitsbericht folgen derselben Logik: Daten sammeln, belegen, prüfen,
              freigeben. Sustainista bildet beides in Software ab, in der jeder Wert seine Herkunft trägt und
              Menschen das letzte Wort haben.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#produkte" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                Produkte ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/plattform/ki-zugang" className="inline-flex items-center gap-2 border border-brand-300 hover:border-brand-500 text-brand-700 px-6 py-3 rounded-btn text-sm font-semibold transition-all bg-canvas">
                <Plug className="h-4 w-4" aria-hidden="true" /> Mit Claude oder ChatGPT verbinden
              </Link>
            </div>
          </div>
        </section>

        {/* Zwei Produkte */}
        <section id="produkte" className="py-20 sm:py-24 scroll-mt-24" aria-labelledby="produkte-titel">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Software</span>
            <h2 id="produkte-titel" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-3xl">
              Zwei Produkte, <span className="text-brand-600">ein Datenfundament.</span>
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* DPP */}
              <article className="flex flex-col rounded-card border border-border bg-surface p-7 sm:p-9">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Produkt 01</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> live auf dpp.example.invalid
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight mb-3">Digitaler Produktpass</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  Für Hersteller, Importeure und Händler, die Batterien oder ESPR-Produkte in Verkehr bringen. Der
                  Batteriepass ist Pflicht ab 18. Februar 2027 für EV-, LMT- und Industriebatterien über 2 kWh.
                </p>
                <ul className="mb-8 space-y-2.5">
                  {DPP_PUNKTE.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mb-8">
                  <PassVorschau />
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link href="/produkte/digitaler-produktpass" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-5 py-2.5 rounded-btn font-semibold text-sm">
                    Produktpass <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/produkte/batteriepass" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink px-5 py-2.5 rounded-btn text-sm font-semibold bg-canvas">
                    Batteriepass
                  </Link>
                  <a href={DPP_PLATTFORM_URL} className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
                    Zur Plattform →
                  </a>
                </div>
              </article>

              {/* Nachhaltigkeitsbericht */}
              <article className="flex flex-col rounded-card border border-border bg-surface p-7 sm:p-9">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Produkt 02</span>
                  <span className="rounded-full border border-border bg-canvas px-2.5 py-1 text-[11px] font-semibold text-ink-secondary">
                    VS · GRI
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight mb-3">Nachhaltigkeitsbericht</h3>
                {nb.lead.map((satz) => (
                  <p key={satz} className="text-sm text-ink-secondary leading-relaxed mb-3">{satz}</p>
                ))}
                <ul className="mb-8 mt-3 flex flex-wrap gap-2">
                  {nb.chips.map((c) => (
                    <li key={c} className="rounded-full bg-canvas border border-border px-3 py-1 text-xs font-medium text-ink">{c}</li>
                  ))}
                </ul>
                <figure className="mb-8 overflow-hidden rounded-card border border-border bg-canvas">
                  <Image
                    src={nb.bild.src}
                    width={nb.bild.width}
                    height={nb.bild.height}
                    alt={nb.bild.alt}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="border-t border-border px-4 py-2.5 text-xs text-ink-tertiary">{nb.caption}</figcaption>
                </figure>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link href="/produkte/nachhaltigkeitsbericht" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-5 py-2.5 rounded-btn font-semibold text-sm">
                    Nachhaltigkeitsbericht <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/produkte/nachhaltigkeitsbericht/praesentation" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink px-5 py-2.5 rounded-btn text-sm font-semibold bg-canvas">
                    {nb.ctaPraesentation}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <StandardWegweiser className="border-t border-border" />

        {/* Prinzipien */}
        <section className="py-20 sm:py-24 bg-surface border-y border-border" aria-labelledby="prinzip">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Ein Prinzip</span>
            <h2 id="prinzip" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-3xl">
              KI beschleunigt. <span className="text-brand-600">Belege entscheiden.</span>
            </h2>
            <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {PRINZIPIEN.map(({ icon: Icon, titel, text }) => (
                <article key={titel} className="bg-canvas p-7">
                  <Icon className="h-5 w-5 text-brand-600 mb-5" aria-hidden="true" />
                  <h3 className="text-base font-bold text-ink mb-2">{titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KI-Zugang */}
        <section className="py-20 sm:py-24" aria-labelledby="ki">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-7">
              <span className="eyebrow mb-5 block">Neu: KI-Zugang</span>
              <h2 id="ki" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
                Sustainista in <span className="text-brand-600">Claude und ChatGPT.</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                Die DPP-Plattform spricht das Model Context Protocol. Tragen Sie eine URL als Connector ein, und Ihr
                Assistent liest den EU-Batteriepass-Katalog, öffentliche Pässe und GS1-Links direkt aus der
                Plattform. Antworten mit Rechtsgrundlage statt aus dem Gedächtnis.
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Heute öffentlich und nur lesend. Als nächste Stufe bereiten wir die Anmeldung mit Ihrem
                Sustainista-Konto vor: dann arbeitet der Assistent an Ihren eigenen Pässen, und jede Freigabe bleibt
                bei Ihnen.
              </p>
            </div>
            <div className="min-w-0 lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-3">Connector-URL</p>
              <McpUrlKopieren url={MCP_URL} />
              <Link href="/plattform/ki-zugang" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                So richten Sie den Connector ein <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-12">
            <McpLiveDemo />
          </div>
        </section>

        {/* Einstieg */}
        <section className="py-20 sm:py-24 bg-surface border-t border-border" aria-labelledby="einstieg">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="eyebrow mb-5 block">Einstieg</span>
            <h2 id="einstieg" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-3xl">
              So viel Software, <span className="text-brand-600">wie Sie brauchen.</span>
            </h2>
            <ol className="grid gap-5 md:grid-cols-3">
              {EINSTIEG.map((e, i) => (
                <li key={e.titel} className="rounded-card border border-border bg-canvas p-7">
                  <span className="text-xs font-bold text-brand-600">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{e.titel}</h3>
                  <p className="mt-2 mb-5 text-sm text-ink-secondary leading-relaxed">{e.text}</p>
                  <Link href={e.link} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                    {e.linkText} →
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
