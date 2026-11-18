"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, ChevronLeft, Lock } from "lucide-react";
import { STEUERUNG, type FrageDto, type SitzungDto } from "@/lib/pflichtenfinder";
import Ergebnis, { Angaben } from "./Ergebnis";

/**
 * Fragebaum mit genau einer Frage auf einmal. Die Antworten stehen im Query (zurück, teilen, neu laden); nach jeder
 * Antwort fragt die Seite GET /api/pflichtenfinder/sitzung (Elektro) nach nächster Frage, Fortschritt und Ergebnis.
 * Muster: components/compliance/BatteryPassDecisionTree.tsx. Steuerparameter: frage (Antwort ändern), vertiefen.
 */

const PFAD = "/pflichtenfinder";
const ZEICHEN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Zustand = { art: "login" } | { art: "fehler"; text: string } | { art: "ok"; sitzung: SitzungDto };

const istSteuerung = (k: string) => (STEUERUNG as readonly string[]).includes(k);

/** An die Schnittstelle gehen nur Antworten und Stichtag. */
function anfrage(params: URLSearchParams) {
  const q = new URLSearchParams();
  for (const [k, v] of params) if (!istSteuerung(k) || k === "stichtag") q.append(k, v);
  return q.toString();
}

async function laden(_query: string, _signal: AbortSignal): Promise<Zustand> {
  return {
    art: "fehler",
    text: "In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.",
  };
}

export default function Pflichtenfinder() {
  const params = useSearchParams();
  const router = useRouter();
  const [versuch, setVersuch] = useState(0);
  const [geladen, setGeladen] = useState<{ fuer: string; z: Zustand } | null>(null);
  const query = anfrage(params);
  const schluessel = `${query}#${versuch}`;
  const laedt = geladen?.fuer !== schluessel;
  const buehne = useRef<HTMLDivElement>(null);
  const schonGezeigt = useRef(false);

  useEffect(() => {
    const ab = new AbortController();
    laden(query, ab.signal).then((z) => {
      if (!ab.signal.aborted) setGeladen({ fuer: `${query}#${versuch}`, z });
    });
    return () => ab.abort();
  }, [query, versuch]);

  const gehe = (aendern: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(params.toString());
    p.delete("fehler");
    aendern(p);
    const s = p.toString();
    router.push(s ? `${PFAD}?${s}` : PFAD, { scroll: false });
  };

  const z = geladen?.z;
  const sitzung = z?.art === "ok" ? z.sitzung : null;
  const gewuenscht = params.get("frage");
  const frage = sitzung
    ? (sitzung.fragen.find((f) => f.id === gewuenscht) ??
      sitzung.fragen.find((f) => f.id === sitzung.naechste) ??
      (params.get("vertiefen") === "1" ? sitzung.fragen.find((f) => f.id === sitzung.vertiefung[0]) : undefined))
    : undefined;
  const ansicht = sitzung ? (frage ? frage.id : sitzung.ergebnis ? "ergebnis" : "leer") : null;

  // Antworten auf Fragen, die nach einer Änderung nicht mehr gestellt werden, fallen weg (wie im bisherigen Formular).
  useEffect(() => {
    if (laedt || !sitzung) return;
    const ids = new Set(sitzung.fragen.map((f) => f.id));
    const p = new URLSearchParams(params.toString());
    const veraltet = [...new Set(p.keys())].filter((k) => !istSteuerung(k) && !ids.has(k));
    if (!veraltet.length) return;
    veraltet.forEach((k) => p.delete(k));
    router.replace(p.size ? `${PFAD}?${p}` : PFAD, { scroll: false });
  }, [laedt, sitzung, params, router]);

  // Nach jedem Wechsel Fokus auf die neue Überschrift; beim ersten Laden nicht.
  useEffect(() => {
    if (!ansicht) return;
    if (schonGezeigt.current) {
      if (buehne.current && buehne.current.getBoundingClientRect().top < 0) buehne.current.scrollIntoView({ behavior: "instant", block: "start" });
      document.getElementById(ansicht === "ergebnis" ? "ergebnis" : "frage")?.focus({ preventScroll: true });
    }
    schonGezeigt.current = true;
  }, [ansicht]);

  const beantworten = (f: FrageDto, werte: string[]) =>
    gehe((p) => {
      p.delete(f.id);
      werte.forEach((w) => p.append(f.id, w));
      p.delete("frage");
      if (f.vertiefung) p.set("vertiefen", "1");
    });

  const zurueckZu = (f: FrageDto) => {
    if (!sitzung) return;
    const vorher = sitzung.fragen[sitzung.fragen.findIndex((x) => x.id === f.id) - 1];
    if (vorher) gehe((p) => p.set("frage", vorher.id));
  };

  const link = () => {
    const q = anfrage(params);
    return `${typeof window === "undefined" ? "" : window.location.origin}${PFAD}${q ? `?${q}` : ""}`;
  };

  let inhalt: React.ReactNode;
  if (!z) {
    inhalt = <Platzhalter />;
  } else if (z.art === "login") {
    const p = new URLSearchParams(params.toString());
    p.delete("fehler");
    inhalt = <Anmeldung fehler={params.get("fehler") === "1"} zurueck={p.size ? `${PFAD}?${p}` : PFAD} />;
  } else if (z.art === "fehler") {
    inhalt = (
      <div role="alert" className="max-w-[56ch]">
        <h2 className="text-2xl font-extrabold text-ink">Das hat nicht geklappt</h2>
        <p className="mt-2 text-ink-secondary">{z.text}</p>
        <button type="button" onClick={() => setVersuch((v) => v + 1)} className="mt-6 inline-flex items-center rounded-btn bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-canvas hover:bg-brand-700">
          Erneut versuchen
        </button>
      </div>
    );
  } else if (frage && sitzung) {
    const kurz = sitzung.fragen.filter((f) => !f.vertiefung);
    const tief = sitzung.fragen.filter((f) => f.vertiefung);
    const ersteFrage = sitzung.fragen[0]?.id === frage.id;
    const ausErgebnis = sitzung.naechste === null && (gewuenscht !== null || params.get("vertiefen") === "1");
    inhalt = (
      <>
        <Fortschritt
          frage={frage}
          kurz={kurz}
          tief={tief}
          gesamt={sitzung.fortschritt.gesamt}
          zurueck={
            ersteFrage ? null : (
              <button type="button" onClick={() => zurueckZu(frage)} disabled={laedt} className="-ml-1 inline-flex items-center gap-1 rounded-btn py-1 pr-2 text-sm font-semibold text-ink-secondary hover:text-ink disabled:opacity-50">
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Zurück
              </button>
            )
          }
        />
        <FrageAnsicht key={`${frage.id}:${frage.antwort.join(",")}`} frage={frage} gesperrt={laedt} onAntwort={(w) => beantworten(frage, w)} />
        {ausErgebnis && (
          <button type="button" onClick={() => gehe((p) => { p.delete("frage"); p.delete("vertiefen"); })} disabled={laedt} className="mt-8 rounded-btn py-2 text-sm font-semibold text-brand-700 underline underline-offset-2 decoration-brand-300 hover:decoration-brand-700 disabled:opacity-50">
            Ohne Änderung zum Ergebnis
          </button>
        )}
        {sitzung.fragen.some((f) => f.antwort.length > 0) && (
          <section aria-labelledby="bisher-h" className="mt-16">
            <h2 id="bisher-h" className="mb-3 text-sm font-semibold text-ink-secondary">Ihre bisherigen Antworten</h2>
            <Angaben fragen={sitzung.fragen} gesperrt={laedt} onAendern={(id) => gehe((p) => p.set("frage", id))} />
          </section>
        )}
      </>
    );
  } else if (sitzung?.ergebnis) {
    inhalt = (
      <Ergebnis
        e={sitzung.ergebnis}
        fragen={sitzung.fragen}
        offeneVertiefung={sitzung.vertiefung.length}
        stichtag={params.get("stichtag")}
        link={link()}
        gesperrt={laedt}
        onAendern={(id) => gehe((p) => p.set("frage", id))}
        onVertiefen={() => gehe((p) => p.set("vertiefen", "1"))}
        onStichtag={(iso) => gehe((p) => p.set("stichtag", iso))}
        onNeu={() => router.push(PFAD, { scroll: false })}
      />
    );
  } else {
    inhalt = (
      <div role="alert" className="max-w-[56ch]">
        <h2 className="text-2xl font-extrabold text-ink">Zu diesen Antworten gibt es kein Ergebnis</h2>
        <p className="mt-2 text-ink-secondary">Bitte beginnen Sie neu.</p>
        <button type="button" onClick={() => router.push(PFAD, { scroll: false })} className="mt-6 inline-flex items-center rounded-btn bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-canvas hover:bg-brand-700">
          Neu beginnen
        </button>
      </div>
    );
  }

  return (
    <div ref={buehne} className="scroll-mt-24 max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20 min-h-[60vh]">
      {inhalt}
      <p className="mt-16 max-w-[62ch] text-sm text-ink-tertiary">
        Alle Angaben ohne Gewähr. Keine Rechtsberatung. Heute vollständig: Batterien. Ökodesign-Produkte, Spielzeug, Bauprodukte und
        Entwaldungsverordnung folgen.
      </p>
    </div>
  );
}

function Platzhalter() {
  return (
    <div aria-busy="true" aria-label="Wird geladen" className="animate-pulse space-y-4">
      <div className="h-2 rounded-full bg-surface" />
      <div className="h-10 w-3/4 rounded-btn bg-surface" />
      <div className="h-20 rounded-card bg-surface" />
      <div className="h-20 rounded-card bg-surface" />
    </div>
  );
}

function Fortschritt({ frage, kurz, tief, gesamt, zurueck }: { frage: FrageDto; kurz: FrageDto[]; tief: FrageDto[]; gesamt: number; zurueck: React.ReactNode }) {
  const inTiefe = frage.vertiefung;
  const liste = inTiefe ? tief : kurz;
  const nr = liste.findIndex((f) => f.id === frage.id) + 1;
  const von = inTiefe ? tief.length : gesamt;
  return (
    <div className="mb-8">
      <div className="mb-3 flex min-h-8 items-center justify-between gap-4">
        {zurueck}
        <p className="ml-auto text-sm font-semibold text-ink-secondary" aria-live="polite">
          {inTiefe ? "Vertiefung, " : ""}Frage {nr} von {von}
        </p>
      </div>
      <div className="flex gap-1.5" aria-hidden="true">
        {liste.map((f) => (
          <span
            key={f.id}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              f.id === frage.id ? "bg-brand-400" : f.antwort.length > 0 ? "bg-brand-600" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function FrageAnsicht({ frage, gesperrt, onAntwort }: { frage: FrageDto; gesperrt: boolean; onAntwort: (werte: string[]) => void }) {
  const [auswahl, setAuswahl] = useState<string[]>(frage.antwort);
  const umschalten = (w: string) => setAuswahl((a) => (a.includes(w) ? a.filter((x) => x !== w) : [...a, w]));
  const waehlen = (w: string) => (frage.mehrfach ? umschalten(w) : onAntwort([w]));

  // Tastatur: Buchstabe wählt die Antwort, Enter bestätigt die Mehrfachauswahl.
  useEffect(() => {
    const taste = (ev: KeyboardEvent) => {
      if (gesperrt || ev.metaKey || ev.ctrlKey || ev.altKey) return;
      const ziel = ev.target as HTMLElement;
      // Nur auf der Seite selbst, nicht in Navigation, Footer oder Eingabefeldern.
      if (ziel !== document.body && !ziel.closest("main")) return;
      if (ziel.closest("input, textarea, select, [contenteditable]")) return;
      if (ev.key === "Enter" && frage.mehrfach && auswahl.length && ziel.tagName !== "BUTTON" && ziel.tagName !== "A") {
        onAntwort(auswahl);
        return;
      }
      const i = ZEICHEN.indexOf(ev.key.toUpperCase());
      if (ev.key.length === 1 && i >= 0 && i < frage.werte.length) {
        ev.preventDefault();
        if (frage.mehrfach) setAuswahl((a) => (a.includes(frage.werte[i].wert) ? a.filter((x) => x !== frage.werte[i].wert) : [...a, frage.werte[i].wert]));
        else onAntwort([frage.werte[i].wert]);
      }
    };
    window.addEventListener("keydown", taste);
    return () => window.removeEventListener("keydown", taste);
  }, [auswahl, frage, gesperrt, onAntwort]);

  const viele = frage.werte.length > 4;
  return (
    <fieldset className="animate-slide-up" aria-describedby={frage.hilfe ? "frage-hilfe" : undefined}>
      <legend className="contents">
        <h2 id="frage" tabIndex={-1} className="text-[1.75rem] sm:text-[2.5rem] font-black tracking-tight leading-[1.1] text-ink max-w-[24ch] focus-visible:outline-none">
          {frage.titel}
        </h2>
      </legend>
      {frage.hilfe && <p id="frage-hilfe" className="mt-3 max-w-[60ch] text-ink-secondary leading-relaxed">{frage.hilfe}</p>}
      {frage.mehrfach && <p className="mt-3 text-sm font-semibold text-brand-700">Mehrere Antworten möglich</p>}

      <div className={`mt-8 grid grid-cols-1 gap-3 ${viele ? "sm:grid-cols-2" : ""}`}>
        {frage.werte.map((w, i) => {
          const an = frage.mehrfach ? auswahl.includes(w.wert) : frage.antwort.includes(w.wert);
          return (
            <button
              key={w.wert}
              type="button"
              aria-pressed={an}
              aria-keyshortcuts={ZEICHEN[i]}
              disabled={gesperrt}
              onClick={() => waehlen(w.wert)}
              className={`group flex min-h-16 w-full items-center gap-4 rounded-card border bg-white px-4 py-3.5 text-left transition-[border-color,background-color,transform] duration-150 hover:-translate-y-px hover:border-brand-600 hover:shadow-ambient-low disabled:cursor-wait disabled:hover:translate-y-0 aria-pressed:border-brand-600 aria-pressed:bg-brand-50 ${
                w.wert === "weiss_nicht" ? "border-dashed border-border-strong" : "border-border"
              }`}
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn border border-border-strong text-sm font-bold text-ink-secondary transition-colors group-hover:border-brand-600 group-hover:text-brand-700 group-aria-pressed:border-brand-600 group-aria-pressed:bg-brand-600 group-aria-pressed:text-white"
              >
                {an && frage.mehrfach ? <Check className="h-4 w-4" /> : ZEICHEN[i]}
              </span>
              <span className="min-w-0 text-[1.0625rem] font-semibold leading-snug text-ink">{w.label}</span>
            </button>
          );
        })}
      </div>

      {frage.mehrfach && (
        <button
          type="button"
          onClick={() => onAntwort(auswahl)}
          disabled={gesperrt || auswahl.length === 0}
          className="mt-8 inline-flex items-center rounded-btn bg-brand-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-canvas transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-border-strong disabled:text-ink-secondary"
        >
          Weiter
        </button>
      )}
    </fieldset>
  );
}

function Anmeldung({ fehler, zurueck }: { fehler: boolean; zurueck: string }) {
  const [hinweis, setHinweis] = useState(false);
  return (
    <div className="max-w-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50" aria-hidden="true">
        <Lock className="h-5 w-5 text-brand-700" />
      </span>
      <h2 className="mt-6 text-[1.75rem] sm:text-[2rem] font-black tracking-tight leading-[1.1] text-ink">Zugang mit Passwort</h2>
      <p className="mt-3 text-ink-secondary leading-relaxed">
        Der Pflichtenfinder ist eine Vorabversion. Nach der Anmeldung geht es mit Ihren Antworten weiter.
      </p>
      {(fehler || hinweis) && (
        <p id="pf-fehler" role="alert" className="mt-5 rounded-field border border-caution bg-canvas px-4 py-3 text-sm font-semibold text-caution">
          In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.
        </p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHinweis(true);
        }}
        className="mt-6"
      >
        <input type="hidden" name="zurueck" value={zurueck} />
        <label htmlFor="pf-passwort" className="block text-sm font-semibold text-ink">Passwort</label>
        <input
          id="pf-passwort"
          name="passwort"
          type="password"
          required
          autoComplete="current-password"
          aria-invalid={fehler || hinweis || undefined}
          aria-describedby={fehler || hinweis ? "pf-fehler" : undefined}
          className="mt-1.5 w-full rounded-field border border-ink-tertiary bg-white px-4 py-3 text-ink focus:border-brand-600"
        />
        <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-btn bg-brand-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-canvas hover:bg-brand-700 sm:w-auto">
          Anmelden
        </button>
      </form>
    </div>
  );
}
