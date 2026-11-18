"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Info, RotateCcw } from "lucide-react";

interface Option {
  label: string;
  score: number;
  /** Markiert Antworten, die den Sonderfall "begrenzter Anwendungsfall" auslösen */
  offRamp?: boolean;
}

interface Question {
  id: string;
  question: string;
  tooltip?: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "size",
    question: "Wie ist Ihr Unternehmen einzustufen (einschließlich relevanter Konzernbeziehungen)?",
    tooltip:
      "Die Einstufung hängt nicht nur von Beschäftigtenzahl und Umsatz ab. Auch verbundene oder beteiligte Unternehmen können relevant sein.",
    options: [
      { label: "Großes Unternehmen", score: 2 },
      { label: "Mittelgroßes Unternehmen", score: 1 },
      { label: "Klein- oder Kleinstunternehmen", score: 0 },
      { label: "Unklar", score: 1 },
    ],
  },
  {
    id: "market",
    question:
      "Bringt Ihr Unternehmen Kleidung, Bekleidungsaccessoires oder Schuhe im EU-Markt in Verkehr?",
    options: [
      { label: "Ja, regelmäßig", score: 2 },
      { label: "Teilweise", score: 1 },
      { label: "Nein", score: 0, offRamp: true },
      { label: "Unklar", score: 1 },
    ],
  },
  {
    id: "stock",
    question:
      "Entstehen Restbestände, Retouren, Qualitätsabweichungen oder andere nicht regulär verkaufte Waren?",
    options: [
      { label: "Ja, regelmäßig", score: 2 },
      { label: "Gelegentlich", score: 1 },
      { label: "Kaum oder nie", score: 0, offRamp: true },
      { label: "Unklar", score: 1 },
    ],
  },
  {
    id: "options",
    question:
      "Ist je Produkt oder Charge nachvollziehbar, welche Kreislaufoptionen geprüft wurden?",
    options: [
      { label: "Ja, vollständig", score: 0 },
      { label: "Teilweise", score: 1 },
      { label: "Nein", score: 2 },
    ],
  },
  {
    id: "evidence",
    question:
      "Sind Partnerbestätigungen, Übergaben und Behandlungsnachweise zentral auffindbar?",
    options: [
      { label: "Ja, vollständig", score: 0 },
      { label: "Teilweise", score: 1 },
      { label: "Nein", score: 2 },
    ],
  },
  {
    id: "systems",
    question:
      "Sind die relevanten Daten in ERP, WMS oder einem gemeinsamen System verbunden?",
    options: [
      { label: "Weitgehend zentral", score: 0 },
      { label: "Auf mehrere Systeme verteilt", score: 1 },
      { label: "Überwiegend in Excel, E-Mails oder PDFs", score: 2 },
    ],
  },
];

interface ResultDef {
  label: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  sizeNote?: string;
}

function getResult(answers: number[]): ResultDef {
  const offRamp = answers.some((optIdx, qIdx) => questions[qIdx].options[optIdx]?.offRamp);
  const isSmall = questions[0]?.options[answers[0]]?.label === "Klein- oder Kleinstunternehmen";
  const sizeNote = isSmall
    ? "Hinweis: Klein- und Kleinstunternehmen sind vom Vernichtungsverbot grundsätzlich ausgenommen. Anforderungen von Handelspartnern, Ausschreibungen oder künftige Regelungen können dennoch relevant werden. Die Einstufung sollte bei Konzern- oder Beteiligungsverhältnissen im Einzelfall geprüft werden."
    : undefined;
  if (offRamp) {
    return {
      label: "Der konkrete Circular-Stock-Anwendungsfall scheint derzeit begrenzt.",
      text: "Die regulatorische Betroffenheit kann dennoch von Produkt- und Unternehmensstruktur abhängen. Für andere Nachhaltigkeits- oder Produktdatenthemen finden Sie passende Sustainista-Lösungen in unserem Produktbereich.",
      ctaLabel: "Andere Sustainista-Lösungen ansehen",
      ctaHref: "/produkte",
    };
  }
  const score = answers.reduce((sum, optIdx, qIdx) => sum + questions[qIdx].options[optIdx].score, 0);
  if (score <= 3) {
    return {
      sizeNote,
      label: "Gute Ausgangsbasis",
      text: "Wesentliche Strukturen scheinen bereits vorhanden zu sein. Ein fokussierter Daten- und Nachweischeck kann zeigen, ob Offenlegung, Partnernachweise und Systemanschlüsse vollständig abgedeckt sind.",
      ctaLabel: "Daten- und Nachweischeck anfragen",
      ctaHref: "#kontakt",
    };
  }
  if (score <= 7) {
    return {
      sizeNote,
      label: "Relevante Lücken",
      text: "Einzelne Prozesse und Daten sind vorhanden, aber vermutlich noch nicht durchgängig verbunden. Ein Readiness Sprint schafft eine gemeinsame Entscheidungs- und Nachweislogik.",
      ctaLabel: "Readiness Sprint ansehen",
      ctaHref: "#readiness-sprint",
    };
  }
  return {
    sizeNote,
    label: "Akuter Strukturierungsbedarf",
    text: "Mehrere zentrale Informationen liegen vermutlich verteilt oder sind nicht vollständig nachvollziehbar. Der sinnvollste Einstieg ist ein klar abgegrenzter Warenstrom mit einer gemeinsamen Prozess- und Datenanalyse.",
    ctaLabel: "Circular-Stock-Check buchen",
    ctaHref: "#kontakt",
  };
}

export default function CircularStockCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const selected = answers[step];

  function selectOption(optIdx: number) {
    const next = [...answers];
    next[step] = optIdx;
    setAnswers(next);
  }

  function goNext() {
    if (selected === undefined) return;
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  }

  function goBack() {
    if (done) setDone(false);
    else if (step > 0) setStep(step - 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
    setDone(false);
  }

  if (done) {
    const result = getResult(answers);
    const isInternalAnchor = result.ctaHref.startsWith("#");
    return (
      <div className="bg-white border border-border rounded-card p-7 sm:p-10 shadow-ambient-low" role="status">
        <p className="eyebrow mb-4">Ihr Ergebnis</p>
        <h3 className="text-xl sm:text-2xl font-black text-ink tracking-tight mb-4">{result.label}</h3>
        <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-2xl">{result.text}</p>
        {result.sizeNote && (
          <p className="text-xs text-ink-secondary leading-relaxed bg-surface border border-border rounded-field px-4 py-3 mb-8 max-w-2xl">
            {result.sizeNote}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {isInternalAnchor ? (
            <a
              href={result.ctaHref}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
            >
              {result.ctaLabel}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <Link
              href={result.ctaHref}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
            >
              {result.ctaLabel}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 border border-border hover:border-ink-tertiary text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Nochmal starten
          </button>
        </div>
        <p className="text-xs text-ink-tertiary leading-relaxed">
          Das Ergebnis ist eine allgemeine Orientierung und keine rechtliche Bewertung.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-card p-7 sm:p-10 shadow-ambient-low">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-ink-secondary">
            Frage {step + 1} von {total}
          </span>
          <span className="text-xs text-ink-tertiary">{Math.round((step / total) * 100)} %</span>
        </div>
        <div
          className="h-2 bg-brand-100 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={step}
          aria-label={`Fortschritt: Frage ${step + 1} von ${total}`}
        >
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-lg sm:text-xl font-bold text-ink tracking-tight leading-snug mb-2">
          {current.question}
        </legend>
        {current.tooltip && (
          <p className="flex items-start gap-2 text-xs text-ink-tertiary leading-relaxed mb-5 max-w-xl">
            <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-brand-600" aria-hidden="true" />
            {current.tooltip}
          </p>
        )}
        <div className="space-y-2 mt-5" role="radiogroup" aria-label={current.question}>
          {current.options.map((opt, i) => (
            <label
              key={opt.label}
              className={`flex items-center gap-3 border rounded-card px-4 py-3.5 cursor-pointer transition-colors ${
                selected === i
                  ? "border-brand-600 bg-brand-50"
                  : "border-border bg-canvas hover:border-brand-300"
              }`}
            >
              <input
                type="radio"
                name={current.id}
                value={i}
                checked={selected === i}
                onChange={() => selectOption(i)}
                className="w-4 h-4 accent-[#4f772d] flex-shrink-0"
              />
              <span className="text-sm font-medium text-ink">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors px-3 py-2 rounded-btn"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Zurück
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={selected === undefined}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
        >
          {step === total - 1 ? "Ergebnis anzeigen" : "Weiter"}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
