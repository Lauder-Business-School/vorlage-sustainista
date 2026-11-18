"use client";

import { useState } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";

const CALENDLY = "#kontakt";

type Status = "idle" | "sending" | "done" | "error";

async function submitLead(_payload: { name: string; email: string; company?: string; notes?: string }) {
  throw new Error("In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet.");
}

const inputClass =
  "w-full bg-canvas border border-border rounded-field px-4 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:border-brand-600 focus:outline-none transition-colors";
const labelClass = "block text-xs font-semibold text-ink-secondary mb-1.5";

/* ── Lead Magnet: PPWR & ARA Compliance Guide ── */

export function PpwrGuideForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setStatus("sending");
    try {
      await submitLead({
        name,
        email,
        company: company || undefined,
        notes: "Anforderung: PPWR & ARA Compliance Guide 2026 (Produktseite PPWR Compliance)",
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="bg-canvas border border-border rounded-card p-7">
        <CheckCircle2 className="w-6 h-6 text-brand-600 mb-3" strokeWidth={1.5} aria-hidden="true" />
        <p className="text-base font-bold text-ink mb-2">Angekommen. Danke.</p>
        <p className="text-sm text-ink-secondary leading-relaxed mb-5">
          Wir senden Ihnen den Guide an {email}. Wenn Sie die Zeit nicht abwarten möchten: Im
          30-minütigen Erstgespräch gehen wir Ihre Situation direkt durch.
        </p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-5 py-2.5 rounded-btn font-semibold text-sm"
        >
          30 Min. PPWR-Check buchen
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-canvas border border-border rounded-card p-7">
      <div className="space-y-4 mb-5">
        <div>
          <label htmlFor="guide-name" className={labelClass}>
            Name
          </label>
          <input
            id="guide-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vor- und Nachname"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="guide-email" className={labelClass}>
            E-Mail-Adresse
          </label>
          <input
            id="guide-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@unternehmen.at"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="guide-company" className={labelClass}>
            Unternehmen <span className="font-normal text-ink-tertiary">(optional)</span>
          </label>
          <input
            id="guide-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Firmenname"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-colors text-white px-5 py-3 rounded-btn font-semibold text-sm"
      >
        {status === "sending" ? "Wird gesendet …" : "Guide anfordern"}
        {status !== "sending" && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-xs text-ink-secondary">
          In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.
        </p>
      )}

      <p className="mt-4 text-xs text-ink-tertiary leading-relaxed">
        Wir brauchen nur Name und E-Mail. Kein Newsletter-Zwang, jederzeit abbestellbar, Daten
        gemäß{" "}
        <a href="/datenschutz" className="underline hover:text-ink-secondary">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}

/* ── Qualifizierung vor dem Erstgespräch ── */

const LAENDER = ["Österreich", "Deutschland", "Weitere EU-Länder"];

const SYSTEME = [
  "ARA (Österreich)",
  "System + LUCID (Deutschland)",
  "Beides",
  "Noch keines",
  "Weiß ich nicht sicher",
];

const SKUS = ["Bis 100", "100 bis 1.000", "1.000 bis 10.000", "Mehr als 10.000"];

const DATENORTE = [
  "ERP-System",
  "Excel-Dateien",
  "PIM oder Shop",
  "Verteilt über mehrere Systeme",
  "Unklar",
];

export function PpwrQualifier() {
  const [laender, setLaender] = useState<string[]>([]);
  const [system, setSystem] = useState("");
  const [skus, setSkus] = useState("");
  const [datenort, setDatenort] = useState("");
  const [herausforderung, setHerausforderung] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function toggleLand(land: string) {
    setLaender((prev) => (prev.includes(land) ? prev.filter((l) => l !== land) : [...prev, land]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setStatus("sending");
    try {
      await submitLead({
        name,
        email,
        notes: [
          "PPWR-Check angefragt (Produktseite PPWR Compliance)",
          `Länder: ${laender.length ? laender.join(", ") : "keine Angabe"}`,
          `System heute: ${system || "keine Angabe"}`,
          `Artikel/SKUs: ${skus || "keine Angabe"}`,
          `Verpackungsdaten liegen: ${datenort || "keine Angabe"}`,
          `Größte Herausforderung: ${herausforderung || "keine Angabe"}`,
        ].join("\n"),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="bg-white border border-border rounded-card p-8">
        <CheckCircle2 className="w-7 h-7 text-brand-600 mb-4" strokeWidth={1.5} aria-hidden="true" />
        <p className="text-lg font-bold text-ink mb-2">Wir haben Ihre Angaben.</p>
        <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-[52ch]">
          Damit können wir das Gespräch vorbereiten, statt es mit Grundlagenfragen zu beginnen.
          Wählen Sie jetzt einen Termin, der Ihnen passt.
        </p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden="true" />
          Termin auswählen
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-card p-7 sm:p-8">
      <fieldset className="mb-6">
        <legend className={labelClass}>1. In welchen Ländern setzen Sie Verpackungen in Verkehr?</legend>
        <div className="flex flex-wrap gap-2">
          {LAENDER.map((land) => {
            const active = laender.includes(land);
            return (
              <button
                key={land}
                type="button"
                onClick={() => toggleLand(land)}
                aria-pressed={active}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  active
                    ? "bg-brand-50 border-brand-300 text-brand-700"
                    : "bg-canvas border-border text-ink-secondary hover:border-brand-300"
                }`}
              >
                {land}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="q-system" className={labelClass}>
            2. Nehmen Sie heute an einem System teil?
          </label>
          <select
            id="q-system"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
            className={inputClass}
          >
            <option value="">Bitte wählen</option>
            {SYSTEME.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-skus" className={labelClass}>
            3. Wie viele Artikel bzw. SKUs ungefähr?
          </label>
          <select id="q-skus" value={skus} onChange={(e) => setSkus(e.target.value)} className={inputClass}>
            <option value="">Bitte wählen</option>
            {SKUS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-daten" className={labelClass}>
            4. Wo liegen Ihre Verpackungsdaten heute?
          </label>
          <select
            id="q-daten"
            value={datenort}
            onChange={(e) => setDatenort(e.target.value)}
            className={inputClass}
          >
            <option value="">Bitte wählen</option>
            {DATENORTE.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-pain" className={labelClass}>
            5. Was ist aktuell die größte Herausforderung?
          </label>
          <input
            id="q-pain"
            type="text"
            value={herausforderung}
            onChange={(e) => setHerausforderung(e.target.value)}
            placeholder="In einem Satz genügt"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 pt-6 border-t border-border">
        <div>
          <label htmlFor="q-name" className={labelClass}>
            Name
          </label>
          <input
            id="q-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vor- und Nachname"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="q-email" className={labelClass}>
            E-Mail-Adresse
          </label>
          <input
            id="q-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@unternehmen.at"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm"
        >
          {status === "sending" ? "Wird gesendet …" : "Angaben senden und Termin wählen"}
          {status !== "sending" && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
        </button>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ink-secondary hover:text-ink underline underline-offset-4 transition-colors"
        >
          Lieber direkt einen Termin buchen
        </a>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-xs text-ink-secondary">
          In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.
        </p>
      )}

      <p className="mt-4 text-xs text-ink-tertiary leading-relaxed">
        Fünf Fragen, keine Pflichtfelder außer Name und E-Mail. Die Angaben dienen nur der
        Vorbereitung des Gesprächs.
      </p>
    </form>
  );
}
