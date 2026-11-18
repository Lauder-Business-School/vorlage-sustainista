"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { CALENDLY_URL, trackEvent } from "@/lib/cta";

type Approach = { id: string; title: string; subtitle: string; desc: string; badge: string; href: string; hrefLabel: string };
type Option = { label: string; score: number };

const tx = {
  de: {
    eyebrow: "Betroffenheits-Radar",
    h2a: "Welcher Ansatz",
    h2b: "passt zu Ihnen?",
    hint: "Drei Fragen, ca. 1 Minute, ohne E-Mail. Das Ergebnis erscheint sofort.",
    q: [
      "Welche Aussage passt am besten?",
      "Erhalten Sie Nachhaltigkeitsanfragen von Kund:innen oder Banken?",
      "Wo liegen Ihre Nachhaltigkeitsdaten heute?",
    ],
    approaches: [
      { id: "esg", trigger: "Wir erhalten Nachhaltigkeitsanfragen von Kunden oder Banken.", title: "ESG Ready", subtitle: "CO₂-Bilanz, ESG-Erstbericht, VSME", desc: "Ein valider, bankentauglicher ESG-Bericht, ohne eigene Nachhaltigkeitsabteilung. In 4 bis 6 Wochen.", badge: "Häufigster Einstieg", href: "/produkte/esg-analyse", hrefLabel: "ESG-Analyse kennenlernen" },
      { id: "ki", trigger: "Wir erfassen viele Nachhaltigkeitsdaten manuell.", title: "KI-Automatisierung", subtitle: "Datenpipelines, Rechnungsextraktion, Reporting", desc: "KI liest Rechnungen, PDFs und Lieferantenanfragen automatisch aus. Sie prüfen nur noch die Ergebnisse.", badge: "Zeit & Ressourcen sparen", href: "/produkte/ki-automatisierung", hrefLabel: "KI-Automatisierung entdecken" },
      { id: "dpp", trigger: "Unsere Produkte brauchen digitale Nachweise oder Produktpässe.", title: "Digitaler Produktpass", subtitle: "EU ESPR, Circular Business, Produktdaten", desc: "Produktdaten strukturiert erfassen und als EU-konformen Digitalen Produktpass bereitstellen, für Händler, Hersteller und Zulieferer.", badge: "ESPR: je Produktgruppe", href: "/produkte/digitaler-produktpass", hrefLabel: "DPP-Lösung ansehen" },
      { id: "battery", trigger: "Wir handeln, verleihen oder refurbishen Batterieprodukte.", title: "Battery Passport Light", subtitle: "EU Battery Regulation, State of Health, QR-Code", desc: "Ohne Batteriepass dürfen Industrie-, Fahrzeug- und E-Bike-Batterien ab 2027 nicht mehr in der EU vermarktet werden. Pragmatische Lösung für Händler.", badge: "Ab 2027 gesetzlich Pflicht", href: "/produkte/digitaler-produktpass#battery", hrefLabel: "Battery Passport kennenlernen" },
    ] as (Approach & { trigger: string })[],
    pressure: [
      { label: "Ja, regelmäßig, wir haben keine guten Antworten", score: 3 },
      { label: "Gelegentlich, wir improvisieren", score: 2 },
      { label: "Selten, aber wir erwarten mehr", score: 1 },
      { label: "Wir sind gut vorbereitet", score: 0 },
    ] as Option[],
    data: [
      { label: "Alles in Excel-Dateien und E-Mails", score: 3 },
      { label: "In verschiedenen Systemen, schwer zugänglich", score: 2 },
      { label: "In einem ERP, aber nicht ausgewertet", score: 1 },
      { label: "Strukturiert und regelmäßig berichtet", score: 0 },
    ] as Option[],
    levels: [
      { min: 5, label: "Dringender Handlungsbedarf", text: "Der Druck von außen wächst, die Datenbasis fehlt. Erste belastbare Ergebnisse liefern wir in 4 bis 6 Wochen." },
      { min: 3, label: "Strukturierung nötig", text: "Sie haben Ansätze, aber noch kein System. Wir strukturieren vorhandene Daten und automatisieren die Prozesse." },
      { min: 1, label: "Optimierungspotenzial", text: "Gute Basis. Automatisierung und digitale Nachweise bringen Sie deutlich weiter." },
      { min: 0, label: "Gut aufgestellt", text: "Sie sind bereits gut organisiert. Nächster Schritt: Produktpässe und Kreislaufwirtschaft." },
    ],
    resultLabel: "Ihre Empfehlung",
    empty: "Wählen Sie links Ihre Situation. Die Empfehlung erscheint hier.",
    level: "Einschätzung",
    fundTitle: "Förderhinweis",
    fund: "Für Wiener Unternehmen ist der Einstieg über ÖkoBusiness Wien möglich, in Niederösterreich über Ökomanagement NÖ. Festpreisangebot nach dem Erstgespräch.",
    fundLink: "Förderung im Detail",
    book: "Kostenloses Erstgespräch buchen",
    reset: "Zurücksetzen",
    mailTitle: "Ergebnis per E-Mail erhalten",
    mailPlaceholder: "ihre@firma.at",
    mailSend: "Senden",
    mailThanks: "Danke, wir melden uns mit Ihrem Ergebnis.",
    mailError: "Das hat nicht geklappt. Bitte buchen Sie direkt einen Termin.",
    mailPrivacy: "Optional. Nur für diese Rückmeldung, gemäß Datenschutzerklärung.",
    progress: (n: number) => `${n} von 3 beantwortet`,
  },
  en: {
    eyebrow: "Relevance radar",
    h2a: "Which approach",
    h2b: "fits you?",
    hint: "Three questions, about 1 minute, no email. The result appears instantly.",
    q: [
      "Which statement fits best?",
      "Do you receive sustainability requests from customers or banks?",
      "Where does your sustainability data live today?",
    ],
    approaches: [
      { id: "esg", trigger: "We receive sustainability requests from customers or banks.", title: "ESG Ready", subtitle: "CO₂ accounting, first ESG report, VSME", desc: "A valid, bank-grade ESG report without an in-house sustainability department. In 4 to 6 weeks.", badge: "Most common entry", href: "/produkte/esg-analyse", hrefLabel: "Explore ESG analysis" },
      { id: "ki", trigger: "We collect a lot of sustainability data manually.", title: "AI Automation", subtitle: "Data pipelines, invoice extraction, reporting", desc: "AI reads invoices, PDFs and supplier requests automatically. You only review the results.", badge: "Save time & resources", href: "/produkte/ki-automatisierung", hrefLabel: "Discover AI automation" },
      { id: "dpp", trigger: "Our products need digital evidence or product passports.", title: "Digital Product Passport", subtitle: "EU ESPR, circular business, product data", desc: "Capture product data in a structured way and provide it as an EU-compliant Digital Product Passport, for retailers, manufacturers and suppliers.", badge: "EU obligation from 2026", href: "/produkte/digitaler-produktpass", hrefLabel: "View DPP solution" },
      { id: "battery", trigger: "We sell, lease or refurbish battery products.", title: "Battery Passport Light", subtitle: "EU Battery Regulation, State of Health, QR code", desc: "Without a battery passport, industrial, vehicle and e-bike batteries can no longer be marketed in the EU from 2027. Pragmatic solution for retailers.", badge: "Legally mandatory from 2027", href: "/produkte/digitaler-produktpass#battery", hrefLabel: "Learn about Battery Passport" },
    ] as (Approach & { trigger: string })[],
    pressure: [
      { label: "Yes, regularly, and we don't have good answers", score: 3 },
      { label: "Occasionally, we improvise", score: 2 },
      { label: "Rarely, but we expect more", score: 1 },
      { label: "We are well prepared", score: 0 },
    ] as Option[],
    data: [
      { label: "All in Excel files and emails", score: 3 },
      { label: "In various systems, hard to access", score: 2 },
      { label: "In an ERP, but not analysed", score: 1 },
      { label: "Structured and regularly reported", score: 0 },
    ] as Option[],
    levels: [
      { min: 5, label: "Urgent action needed", text: "External pressure is growing and the data foundation is missing. We deliver first solid results within 4 to 6 weeks." },
      { min: 3, label: "Structure needed", text: "You have approaches but no system yet. We structure existing data and automate the processes." },
      { min: 1, label: "Optimisation potential", text: "Good foundation. Automation and digital evidence take you significantly further." },
      { min: 0, label: "Well positioned", text: "You are already well organised. Next step: product passports and circular economy." },
    ],
    resultLabel: "Your recommendation",
    empty: "Pick your situation on the left. The recommendation appears here.",
    level: "Assessment",
    fundTitle: "Funding note",
    fund: "Companies in Vienna can start via ÖkoBusiness Wien, in Lower Austria via Ökomanagement NÖ. Fixed-price offer after the first call.",
    fundLink: "Funding in detail",
    book: "Book a free initial call",
    reset: "Reset",
    mailTitle: "Get your result by email",
    mailPlaceholder: "you@company.com",
    mailSend: "Send",
    mailThanks: "Thank you, we will get back to you with your result.",
    mailError: "That did not work. Please book a call directly.",
    mailPrivacy: "Optional. Used only for this reply, per our privacy policy.",
    progress: (n: number) => `${n} of 3 answered`,
  },
};

function Choice({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center justify-between gap-3 border-b border-border px-1 py-3 text-left text-sm transition-colors hover:text-ink ${selected ? "bg-brand-50 text-brand-700 font-semibold" : "text-ink-secondary"}`}
    >
      <span>{label}</span>
      {selected && <Check className="w-4 h-4 shrink-0 text-brand-600" aria-hidden="true" />}
    </button>
  );
}

function EmailCapture({ t, resultText, approachTitle }: { t: (typeof tx)["de"]; resultText: string; approachTitle: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("error");
  }

  if (state === "done") return <p className="border-t border-border py-4 text-sm text-brand-700 font-semibold" role="status">{t.mailThanks}</p>;
  return (
    <form onSubmit={submit} className="border-t border-border py-4">
      <label htmlFor="radar-email" className="block text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-2">{t.mailTitle}</label>
      <div className="flex gap-2">
        <input
          id="radar-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.mailPlaceholder}
          className="min-w-0 flex-1 bg-canvas border border-border rounded-field px-3 py-2 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600"
        />
        <button type="submit" disabled={state === "sending"} className="rounded-btn border border-brand-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 hover:bg-brand-50 disabled:opacity-60">
          {t.mailSend}
        </button>
      </div>
      <p className="mt-2 text-klein text-ink-tertiary">{t.mailPrivacy}</p>
      {state === "error" && <p role="alert" className="mt-2 text-klein text-red-600">In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.</p>}
    </form>
  );
}

export default function Radar() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const [a, setA] = useState<string | null>(null);
  const [p, setP] = useState<number | null>(null);
  const [d, setD] = useState<number | null>(null);

  const approach = t.approaches.find((x) => x.id === a);
  const answered = [a, p, d].filter((v) => v !== null).length;
  const level = p !== null && d !== null ? t.levels.find((l) => p + d >= l.min) : undefined;

  function pick(step: string, value: string | number, set: () => void) {
    set();
    trackEvent("radar_answer", { step, value: String(value) });
  }

  return (
    <section id="ansatz" className="py-24 sm:py-28 bg-surface scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-base text-ink-secondary">{t.hint}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-8">
            <fieldset>
              <legend className="mb-2 flex items-baseline gap-3">
                <span className="text-marke font-bold tabular-nums text-brand-600">01</span>
                <span className="text-base font-bold text-ink">{t.q[0]}</span>
              </legend>
              <div className="border-t border-border">
                {t.approaches.map((x) => (
                  <Choice key={x.id} label={x.trigger} selected={a === x.id} onSelect={() => pick("situation", x.id, () => setA(x.id))} />
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 flex items-baseline gap-3">
                <span className="text-marke font-bold tabular-nums text-brand-600">02</span>
                <span className="text-base font-bold text-ink">{t.q[1]}</span>
              </legend>
              <div className="border-t border-border">
                {t.pressure.map((o) => (
                  <Choice key={o.label} label={o.label} selected={p === o.score} onSelect={() => pick("pressure", o.score, () => setP(o.score))} />
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 flex items-baseline gap-3">
                <span className="text-marke font-bold tabular-nums text-brand-600">03</span>
                <span className="text-base font-bold text-ink">{t.q[2]}</span>
              </legend>
              <div className="border-t border-border">
                {t.data.map((o) => (
                  <Choice key={o.label} label={o.label} selected={d === o.score} onSelect={() => pick("data", o.score, () => setD(o.score))} />
                ))}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-6">
            <div aria-live="polite" className="lg:sticky lg:top-28 rounded-card border border-border bg-canvas p-7 sm:p-9">
              <div className="flex items-center justify-between mb-5">
                <p className="eyebrow">{t.resultLabel}</p>
                <p className="text-klein text-ink-tertiary tabular-nums">{t.progress(answered)}</p>
              </div>

              {!approach ? (
                <p className="text-sm text-ink-secondary leading-relaxed">{t.empty}</p>
              ) : (
                <div className="animate-fade-in">
                  <p className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-2">{approach.badge}</p>
                  <h3 className="text-3xl font-extrabold tracking-tight text-ink leading-tight">{approach.title}</h3>
                  <p className="text-sm font-semibold text-brand-600 mt-1 mb-4">{approach.subtitle}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-[52ch]">{approach.desc}</p>

                  {level && (
                    <div className="border-t border-border py-4">
                      <p className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1">{t.level}</p>
                      <p className="text-base font-bold text-ink mb-1">{level.label}</p>
                      <p className="text-sm text-ink-secondary leading-relaxed">{level.text}</p>
                    </div>
                  )}

                  <div className="border-t border-border py-4 mb-2">
                    <p className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1">{t.fundTitle}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {t.fund}{" "}
                      <a href="#foerderung" className="font-semibold text-brand-700 underline underline-offset-2 hover:no-underline">{t.fundLink}</a>
                    </p>
                  </div>

                  <EmailCapture t={t} resultText={level?.label ?? ""} approachTitle={approach.title} />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("cta_click", { id: "calendly", location: "radar", approach: approach.id })}
                      className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                    >
                      <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                      {t.book}
                    </a>
                    <Link
                      href={approach.href}
                      onClick={() => trackEvent("cta_click", { id: "radar_product", location: "radar", approach: approach.id })}
                      className="inline-flex items-center gap-2 px-2 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary hover:text-ink"
                    >
                      {approach.hrefLabel} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}

              {answered > 0 && (
                <button
                  type="button"
                  onClick={() => { setA(null); setP(null); setD(null); }}
                  className="mt-6 text-klein text-ink-tertiary hover:text-ink underline underline-offset-2"
                >
                  {t.reset}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
