"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleHelp, RotateCcw, ShieldAlert, ShieldCheck } from "lucide-react";

/**
 * Entscheidungsbaum: Brauche ich einen Batteriepass? (Art. 77 VO (EU) 2023/1542)
 * Orientierung, keine Rechtsberatung. Rechtsstand 11.10.2026.
 */

type Category = "industrial" | "ev" | "lmt" | "portable" | "sli";
type Capacity = "over2" | "upto2";
type Role = "placer" | "distributor" | "remanufacturer" | "user";
type Timing = "after" | "before";
type Answers = { category?: Category; capacity?: Capacity; role?: Role; timing?: Timing };

type Option<T extends string> = { value: T; label: string; hint?: string };
type Step =
  | { key: "category"; question: string; options: Option<Category>[] }
  | { key: "capacity"; question: string; options: Option<Capacity>[] }
  | { key: "role"; question: string; options: Option<Role>[] }
  | { key: "timing"; question: string; options: Option<Timing>[] };

const STEPS: Step[] = [
  {
    key: "category",
    question: "Um welche Batterie geht es?",
    options: [
      { value: "industrial", label: "Industriebatterie", hint: "z. B. Heim- oder Gewerbespeicher, Speichersystem, Stapler" },
      { value: "ev", label: "Traktionsbatterie für Elektrofahrzeuge", hint: "Pkw, Lkw, Bus" },
      { value: "lmt", label: "Batterie für leichte Verkehrsmittel (LMT)", hint: "E-Bike, E-Scooter, Pedelec" },
      { value: "portable", label: "Gerätebatterie", hint: "Werkzeug, Laptop, Haushaltsgerät" },
      { value: "sli", label: "Starterbatterie (SLI)", hint: "Anlasser, Beleuchtung, Zündung" },
    ],
  },
  {
    key: "capacity",
    question: "Wie groß ist die Kapazität je Batterie?",
    options: [
      { value: "over2", label: "Mehr als 2 kWh", hint: "die meisten stationären Speicher" },
      { value: "upto2", label: "2 kWh oder weniger" },
    ],
  },
  {
    key: "role",
    question: "Welche Rolle haben Sie bei dieser Batterie?",
    options: [
      { value: "placer", label: "Hersteller, Importeur oder Verkauf unter eigener Marke", hint: "Sie bringen die Batterie in der EU in Verkehr oder nehmen sie in Betrieb" },
      { value: "distributor", label: "Händler", hint: "Sie verkaufen Batterien weiter, die ein anderer in der EU in Verkehr gebracht hat" },
      { value: "remanufacturer", label: "Wiederaufbereitung oder Umnutzung", hint: "Second Life, Refurbishment, Umbau zum Speicher" },
      { value: "user", label: "Betreiber oder Nutzer", hint: "Sie setzen die Batterie nur ein" },
    ],
  },
  {
    key: "timing",
    question: "Wann wird die Batterie in Verkehr gebracht oder in Betrieb genommen?",
    options: [
      { value: "after", label: "Am oder nach dem 18. Februar 2027" },
      { value: "before", label: "Vor dem 18. Februar 2027" },
    ],
  },
];

type Result = {
  tone: "yes" | "no" | "check";
  title: string;
  text: string;
  next: { label: string; href: string };
};

const COMPLIANCE = { label: "Compliance Check ansehen", href: "/produkte/compliance-check" };

function evaluate(a: Answers): Result | null {
  if (!a.category) return null;
  const inScope = a.category === "ev" || a.category === "lmt" || (a.category === "industrial" && a.capacity === "over2");
  if (a.category === "industrial" && !a.capacity) return null;
  if (!inScope) {
    return {
      tone: "no",
      title: "Kein Batteriepass nach Art. 77",
      text:
        a.category === "industrial"
          ? "Industriebatterien bis 2 kWh fallen nicht unter die Passpflicht. Andere Pflichten der Batterieverordnung, etwa Kennzeichnung, QR-Code oder Sorgfaltspflichten, können trotzdem gelten."
          : "Geräte- und Starterbatterien fallen nicht unter die Passpflicht nach Art. 77. Andere Pflichten der Batterieverordnung, etwa Kennzeichnung, QR-Code und Rücknahme, gelten trotzdem.",
      next: { label: "Batteriepass-Selbstcheck", href: "/batteriepass-check" },
    };
  }
  if (!a.role) return null;
  if (a.role === "remanufacturer") {
    return {
      tone: "yes",
      title: "Ja: Nach Wiederaufbereitung oder Umnutzung braucht die Batterie einen neuen Pass",
      text: "Der neue Pass wird mit dem Pass der ursprünglichen Batterie verknüpft (Art. 77 Abs. 7). Die Pflicht liegt bei dem Wirtschaftsakteur, der die wiederaufbereitete oder umgenutzte Batterie in Verkehr bringt oder in Betrieb nimmt.",
      next: COMPLIANCE,
    };
  }
  if (a.role === "user") {
    return {
      tone: "check",
      title: "Keine eigene Passpflicht, aber fragen Sie nach",
      text: "Als Betreiber oder Nutzer müssen Sie keinen Pass ausstellen. Ab dem Stichtag sollte jede neu gekaufte Batterie dieser Kategorie einen Pass mit QR-Code haben; fordern Sie ihn beim Lieferanten an. Bauen Sie die Batterie um oder nutzen sie für einen anderen Zweck, kann eine eigene Pflicht entstehen.",
      next: { label: "Batteriepass verstehen", href: "/produkte/batteriepass" },
    };
  }
  if (a.role === "distributor") {
    return {
      tone: "check",
      title: "Die Passpflicht liegt beim Inverkehrbringer, Sie prüfen mit",
      text: "Den Pass stellt der Wirtschaftsakteur aus, der die Batterie in der EU in Verkehr bringt. Als Händler sollten Sie sicherstellen, dass ab dem Stichtag nur Batterien mit gültigem Pass in Ihr Sortiment kommen. Importieren Sie selbst oder verkaufen unter eigener Marke, gelten Sie als Inverkehrbringer und sind selbst pflichtig.",
      next: { label: "Batteriepass-Selbstcheck", href: "/batteriepass-check" },
    };
  }
  if (!a.timing) return null;
  if (a.timing === "before") {
    return {
      tone: "no",
      title: "Für bereits in Verkehr gebrachte Batterien ist kein Pass nötig",
      text: "Die Passpflicht gilt für Batterien, die ab dem 18. Februar 2027 in Verkehr gebracht oder in Betrieb genommen werden. Für alle danach in Verkehr gebrachten Stück brauchen Sie ihn, und das betrifft meist schon die Produktion der nächsten Monate.",
      next: COMPLIANCE,
    };
  }
  return {
    tone: "yes",
    title: "Ja: Sie brauchen einen Batteriepass, ab 18. Februar 2027",
    text: "Ohne gültigen Pass darf die Batterie ab dem Stichtag nicht in Verkehr gebracht werden. Klären Sie jetzt, auf welcher Ebene der Pass hängt (Stück, Charge oder Modell), welche Pflichtfelder fehlen und welche Daten von Lieferanten kommen müssen; diese sollten bis etwa 20. Jänner 2027 vorliegen.",
    next: COMPLIANCE,
  };
}

/** Nächste offene Frage; Kapazität nur bei Industriebatterien, Rolle und Zeitpunkt nur im Geltungsbereich */
function nextStep(a: Answers): Step | null {
  if (!a.category) return STEPS[0];
  if (a.category === "industrial" && !a.capacity) return STEPS[1];
  if (evaluate(a)) return null;
  if (!a.role) return STEPS[2];
  if (!a.timing) return STEPS[3];
  return null;
}

const TONE = {
  yes: { box: "border-brand-600 bg-brand-50", icon: ShieldAlert, iconCls: "text-brand-700", label: "Passpflicht" },
  no: { box: "border-border bg-surface", icon: ShieldCheck, iconCls: "text-ink-secondary", label: "Keine Passpflicht" },
  check: { box: "border-caution/50 bg-[color-mix(in_srgb,var(--color-caution)_6%,var(--color-canvas))]", icon: CircleHelp, iconCls: "text-caution", label: "Mitprüfen" },
};

export default function BatteryPassDecisionTree({ id = "entscheidungsbaum" }: { id?: string }) {
  const [a, setA] = useState<Answers>({});
  const step = nextStep(a);
  const result = evaluate(a);
  const answered = STEPS.filter((s) => a[s.key] !== undefined);
  const total = a.category && a.category !== "industrial" && !["ev", "lmt"].includes(a.category) ? 1 : a.category === "industrial" ? 4 : 3;

  const choose = (key: Step["key"], value: string) => setA((cur) => ({ ...cur, [key]: value }));
  const back = (key: Step["key"]) => {
    const idx = STEPS.findIndex((s) => s.key === key);
    setA((cur) => {
      const nextA: Answers = { ...cur };
      STEPS.slice(idx).forEach((s) => delete nextA[s.key]);
      return nextA;
    });
  };

  return (
    <section id={id} className="py-20 bg-white border-t border-border scroll-mt-24" aria-labelledby={`${id}-h`}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Entscheidungsbaum · 1 Minute</p>
        <h2 id={`${id}-h`} className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-3">Brauche ich einen Batteriepass?</h2>
        <p className="text-ink-secondary mb-8 max-w-[62ch]">Bis zu vier Fragen nach Art. 77 der Batterieverordnung. Ergebnis sofort, ohne E-Mail.</p>

        <div className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
          {/* Fortschritt und bisherige Antworten */}
          <div className="mb-5 flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full ${i < answered.length ? "bg-brand-600" : "bg-border"}`} />
            ))}
          </div>
          {answered.length > 0 && (
            <ol className="mb-6 flex flex-wrap gap-2">
              {answered.map((s) => {
                const opt = (s.options as Option<string>[]).find((o) => o.value === a[s.key]);
                return (
                  <li key={s.key}>
                    <button type="button" onClick={() => back(s.key)} className="inline-flex items-center gap-1.5 rounded-btn border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800 hover:border-brand-600" title="Antwort ändern">
                      <Check className="h-3 w-3" aria-hidden="true" /> {opt?.label}
                    </button>
                  </li>
                );
              })}
            </ol>
          )}

          {step && (
            <fieldset>
              <legend className="text-lg font-extrabold text-ink mb-4">{step.question}</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(step.options as Option<string>[]).map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => choose(step.key, o.value)}
                    className="text-left rounded-btn border border-border bg-surface px-4 py-3 hover:border-brand-600 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-600 transition-colors"
                  >
                    <span className="block text-sm font-bold text-ink">{o.label}</span>
                    {o.hint && <span className="block text-xs text-ink-tertiary mt-0.5">{o.hint}</span>}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {result && !step && (() => {
            const t = TONE[result.tone];
            const Icon = t.icon;
            return (
              <div className={`rounded-card border-2 p-5 sm:p-6 ${t.box}`} aria-live="polite">
                <p className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] mb-2 ${t.iconCls}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" /> {t.label}
                </p>
                <p className="text-xl font-black text-ink leading-snug mb-2">{result.title}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{result.text}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href={result.next.href} className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-canvas hover:bg-brand-700">
                    {result.next.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <button type="button" onClick={() => setA({})} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-secondary hover:text-ink">
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Neu starten
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
        <p className="mt-4 text-xs text-ink-tertiary">Orientierung nach Art. 77 VO (EU) 2023/1542, Rechtsstand 11. Oktober 2026. Keine Rechtsberatung; Sonderfälle wie Pass je Turm, Rack oder System klären wir im Compliance Check.</p>
      </div>
    </section>
  );
}
