"use client";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Schnellcheck",
    h2a: "Wie groß ist",
    h2b: "Ihr Datenchaos?",
    hint: "4 Fragen · 2 Minuten · sofortige Einschätzung",
    answered: (n: number, total: number) => `${n} / ${total} beantwortet`,
    showResult: "Ergebnis anzeigen",
    again: "Nochmal",
    emailFailed: "Ihre Auswertung ist da, aber die E-Mail-Anmeldung hat nicht funktioniert. Schreiben Sie uns bitte direkt an stefan.bauer@example.invalid.",
    emailGate: {
      heading: "Wohin soll Ihre Auswertung?",
      sub: "Kostenlos · Kein Spam · Jederzeit abmeldbar",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "m.muster@unternehmen.de",
      submit: "Auswertung anzeigen",
      sending: "Wird gesendet …",
      skip: "Überspringen",
    },
    questions: [
      { id: "data", question: "Wo liegen Ihre Nachhaltigkeitsdaten heute?", options: [
        { label: "Alles in Excel-Dateien und E-Mails", score: 3 },
        { label: "In verschiedenen Systemen, schwer zugänglich", score: 2 },
        { label: "In einem ERP, aber nicht ausgewertet", score: 1 },
        { label: "Strukturiert und regelmäßig berichtet", score: 0 },
      ]},
      { id: "reporting", question: "Wann haben Sie zuletzt einen ESG-Bericht erstellt?", options: [
        { label: "Noch nie", score: 3 },
        { label: "Vor mehr als 2 Jahren", score: 2 },
        { label: "Im letzten Jahr, aber sehr aufwändig", score: 1 },
        { label: "Regelmäßig und weitgehend automatisiert", score: 0 },
      ]},
      { id: "suppliers", question: "Wie erfassen Sie Daten Ihrer Lieferanten?", options: [
        { label: "Gar nicht", score: 3 },
        { label: "Manuell per E-Mail-Anfrage", score: 2 },
        { label: "Mit Fragebögen, aber unstrukturiert", score: 1 },
        { label: "Systematisch und digital", score: 0 },
      ]},
      { id: "pressure", question: "Erhalten Sie Nachhaltigkeitsanfragen von Kund:innen oder Banken?", options: [
        { label: "Ja, regelmäßig, wir haben keine guten Antworten", score: 3 },
        { label: "Gelegentlich, wir improvisieren", score: 2 },
        { label: "Selten, aber wir erwarten mehr", score: 1 },
        { label: "Wir sind gut vorbereitet", score: 0 },
      ]},
    ],
    results: [
      { min: 9, label: "Dringender Handlungsbedarf", text: "Ihr Datenchaos ist groß, und der Druck von außen wächst. Wir können innerhalb von 4 bis 6 Wochen erste, belastbare Ergebnisse liefern.", cta: "Erstgespräch buchen" },
      { min: 5, label: "Strukturierung nötig", text: "Sie haben Ansätze, aber noch kein System. Wir helfen, vorhandene Daten zu strukturieren und Prozesse zu automatisieren.", cta: "Datencheck starten" },
      { min: 2, label: "Optimierungspotenzial", text: "Gute Basis. Automatisierung und Kreislaufwirtschaft können Sie noch deutlich weiterbringen.", cta: "KI-Automatisierung entdecken" },
      { min: 0, label: "Gut aufgestellt", text: "Sie sind bereits gut organisiert. Der nächste Schritt: Kreislaufwirtschaft und digitale Produktpässe.", cta: "Circular Business kennenlernen" },
    ],
  },
  en: {
    eyebrow: "Quick check",
    h2a: "How big is",
    h2b: "your data chaos?",
    hint: "4 questions · 2 minutes · instant assessment",
    answered: (n: number, total: number) => `${n} / ${total} answered`,
    showResult: "Show result",
    again: "Try again",
    emailFailed: "Your result is ready, but the email sign-up did not go through. Please write to us directly at stefan.bauer@example.invalid.",
    emailGate: {
      heading: "Where should we send your assessment?",
      sub: "Free · No spam · Unsubscribe any time",
      emailLabel: "Your email address",
      emailPlaceholder: "j.smith@company.com",
      submit: "Show my result",
      sending: "Sending …",
      skip: "Skip",
    },
    questions: [
      { id: "data", question: "Where does your sustainability data live today?", options: [
        { label: "All in Excel files and emails", score: 3 },
        { label: "In various systems, hard to access", score: 2 },
        { label: "In an ERP, but not analysed", score: 1 },
        { label: "Structured and regularly reported", score: 0 },
      ]},
      { id: "reporting", question: "When did you last produce an ESG report?", options: [
        { label: "Never", score: 3 },
        { label: "More than 2 years ago", score: 2 },
        { label: "Last year, but very time-consuming", score: 1 },
        { label: "Regularly and largely automated", score: 0 },
      ]},
      { id: "suppliers", question: "How do you collect data from your suppliers?", options: [
        { label: "Not at all", score: 3 },
        { label: "Manually via email", score: 2 },
        { label: "With questionnaires, but unstructured", score: 1 },
        { label: "Systematically and digitally", score: 0 },
      ]},
      { id: "pressure", question: "Do you receive sustainability requests from customers or banks?", options: [
        { label: "Yes, regularly, and we don't have good answers", score: 3 },
        { label: "Occasionally, we improvise", score: 2 },
        { label: "Rarely, but we expect more", score: 1 },
        { label: "We are well prepared", score: 0 },
      ]},
    ],
    results: [
      { min: 9, label: "Urgent action needed", text: "Your data chaos is significant and external pressure is growing. We can deliver first, solid results within 4 to 6 weeks.", cta: "Book initial call" },
      { min: 5, label: "Structure needed", text: "You have approaches but no system yet. We help structure existing data and automate processes.", cta: "Start data check" },
      { min: 2, label: "Optimisation potential", text: "Good foundation. Automation and circular economy can take you significantly further.", cta: "Discover AI automation" },
      { min: 0, label: "Well positioned", text: "You are already well organised. The next step: circular economy and digital product passports.", cta: "Explore circular business" },
    ],
  },
};

export default function DataCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const { locale } = useLanguage();
  const t = tx[locale];

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const answered = Object.keys(answers).length;
  const allAnswered = answered === t.questions.length;
  const result = t.results.find((r) => totalScore >= r.min) ?? t.results[t.results.length - 1];
  const progress = (answered / t.questions.length) * 100;

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setEmailLoading(false);
    setEmailFailed(true);
    setShowEmailGate(false);
    setShowResult(true);
  }

  return (
    <section id="check" className="py-28 bg-canvas">
      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4 justify-center">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-ink-tertiary text-sm">{t.hint}</p>
        </div>

        {showEmailGate ? (
          <div className="rounded-card border border-border p-8 bg-surface">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 border border-border mb-5 mx-auto">
              <Mail className="w-5 h-5 text-brand-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-ink text-center mb-2">{t.emailGate.heading}</h3>
            <p className="text-xs text-ink-tertiary text-center mb-6">{t.emailGate.sub}</p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5" htmlFor="datacheck-email">
                  {t.emailGate.emailLabel}
                </label>
                <input
                  id="datacheck-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailGate.emailPlaceholder}
                  className="w-full bg-canvas border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={emailLoading}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-canvas py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all flex items-center justify-center gap-2 hover:-translate-y-px"
              >
                {emailLoading ? t.emailGate.sending : t.emailGate.submit}
                {!emailLoading && <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={() => { setShowEmailGate(false); setShowResult(true); }}
                className="w-full text-xs text-ink-tertiary hover:text-ink-secondary transition-colors py-1"
              >
                {t.emailGate.skip}
              </button>
            </form>
          </div>
        ) : !showResult ? (
          <div>
            <div className="h-0.5 bg-border rounded-full mb-8 overflow-hidden" role="progressbar" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={t.questions.length}>
              <div className="h-full bg-brand-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="space-y-4">
              {t.questions.map((q, qi) => (
                <div key={q.id} className={`rounded-card border transition-colors p-6 ${answers[q.id] !== undefined ? "border-brand-300 bg-brand-50" : "border-border bg-surface"}`}>
                  <p className="text-sm font-semibold text-ink mb-4">
                    <span className="text-ink-tertiary mr-2 font-mono">{qi + 1}.</span>{q.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt) => (
                      <button type="button" key={opt.label} onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                        className={`text-left px-4 py-3 rounded-btn text-sm transition-all border ${
                          answers[q.id] === opt.score
                            ? "bg-brand-50 border-brand-600 text-brand-700 font-medium"
                            : "bg-canvas border-border text-ink-secondary hover:border-brand-300 hover:text-ink"
                        }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-ink-tertiary">{t.answered(answered, t.questions.length)}</span>
              <button type="button" onClick={() => setShowEmailGate(true)} disabled={!allAnswered}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all ${
                  allAnswered ? "bg-brand-600 text-canvas hover:bg-brand-700 hover:-translate-y-px" : "bg-surface text-ink-tertiary cursor-not-allowed border border-border"
                }`}>
                {t.showResult} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-card border border-border p-8 bg-surface">
            <span className="inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary bg-canvas mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />{result.label}
            </span>
            <p className="text-ink-secondary text-base leading-relaxed mb-7">{result.text}</p>
            {emailFailed && (
              <p role="status" className="text-sm leading-relaxed text-ink-secondary border-l-[3px] border-brand-600 pl-4 mb-7">
                In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors">
                {result.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <button type="button" onClick={() => { setAnswers({}); setShowResult(false); setShowEmailGate(false); setEmail(""); }}
                className="px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary border border-border hover:text-ink hover:border-ink-secondary transition-colors bg-canvas">
                {t.again}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
