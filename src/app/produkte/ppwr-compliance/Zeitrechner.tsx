"use client";

import { useState } from "react";
import { aufwandBasis, MAX_STUNDEN } from "@/lib/aufwand-basis";

/* Schaetzmodell fuer den heutigen Aufwand.
   Basis je Meldepflicht und Land: 12 Stunden. Der Mindestwert der Eunomia-Studie
   liegt bei 3 Stunden je Regime und Land (Grundlagen, Registrierung, Meldung) und
   klammert Monitoring, Zahlungen und Klaerfaelle ausdruecklich aus; 12 Stunden
   bilden den laufenden Betrieb ueber ein Jahr ab, ohne in die oberen Werte der
   Studie zu gehen. Der SKU-Zuschlag deckt Pflege und Klaerung der Verpackungsdaten. */
const STUNDEN_JE_REGIME_LAND = 12;

const LAENDER = [
  { label: "1 Land", value: 1 },
  { label: "2 Länder", value: 2 },
  { label: "3 bis 5", value: 4 },
  { label: "Mehr als 5", value: 8 },
];

const REGIME = [
  { label: "1 Meldepflicht", value: 1 },
  { label: "2", value: 2 },
  { label: "3 oder mehr", value: 3 },
];

const SKUS = [
  { label: "Bis 100", value: 15 },
  { label: "100 bis 1.000", value: 40 },
  { label: "1.000 bis 10.000", value: 80 },
  { label: "Mehr als 10.000", value: 140 },
];

/* Fremdwerte, keine eigene Messung: Benchmarks Dritter fuer Regulatory- und
   Packaging-Reporting liegen zwischen 44 und 70 Prozent (Specright, Forrester fuer Nasdaq
   Metrio). Wir rechnen bewusst mit dem unteren und mittleren Teil dieser Spanne. */
const QUOTE_MIN = 0.5;
const QUOTE_MAX = 0.7;
const STUNDENSATZ_MIN = 60;
const STUNDENSATZ_MAX = 80;

const btn = (active: boolean) =>
  `px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
    active
      ? "bg-brand-600 border-brand-600 text-white"
      : "bg-white border-border text-ink-secondary hover:border-brand-300"
  }`;

function runden(n: number) {
  return Math.round(n / 5) * 5;
}

export default function Zeitrechner() {
  const [laender, setLaender] = useState(2);
  const [regime, setRegime] = useState(2);
  const [skuZuschlag, setSkuZuschlag] = useState(40);
  const [eigenerWert, setEigenerWert] = useState("");

  const geschaetzt = laender * regime * STUNDEN_JE_REGIME_LAND + skuZuschlag;
  const { kind, basis, eigeneZahl } = aufwandBasis(eigenerWert, geschaetzt);

  const sparMin = runden(basis * QUOTE_MIN);
  const sparMax = runden(basis * QUOTE_MAX);
  const euroMin = Math.round((sparMin * STUNDENSATZ_MIN) / 100) * 100;
  const euroMax = Math.round((sparMax * STUNDENSATZ_MAX) / 100) * 100;

  // Jeder Eingabefall bekommt einen sichtbaren Satz. Stilles Zurueckfallen auf die
  // Schaetzung war der eigentliche Fehler: die Zahl stimmte nicht mit der Eingabe zusammen.
  const hinweis: Record<typeof kind, string | null> = {
    leer: null,
    gueltig: `Gerechnet mit Ihrer Zahl: ${basis.toLocaleString("de-DE")} Stunden pro Jahr.`,
    null: null,
    ungueltig: "Das ist keine Zahl. Tragen Sie Stunden pro Jahr ein, zum Beispiel 120. Bis dahin steht unsere Schätzung.",
    negativ: "Stunden können nicht negativ sein. Bis zur Korrektur steht unsere Schätzung.",
    zu_gross: `Mehr als ${MAX_STUNDEN.toLocaleString("de-DE")} Stunden pro Jahr liegt außerhalb der Spanne der zugrunde gelegten Studie. Bis zur Korrektur steht unsere Schätzung.`,
  };

  return (
    <div className="border border-border rounded-card bg-white p-7 sm:p-8">
      <p className="text-base font-bold text-ink mb-1.5">Was heißt das für Ihre Struktur?</p>
      <p className="text-sm text-ink-secondary leading-relaxed mb-7 max-w-[56ch]">
        Drei Angaben genügen für eine grobe Einordnung. Wenn Sie Ihren heutigen Aufwand kennen, tragen Sie
        ihn unten ein, dann rechnen wir mit Ihrer Zahl statt mit unserer Schätzung.
      </p>

      <fieldset className="mb-5">
        <legend className="block text-xs font-semibold text-ink-secondary mb-2">
          In wie vielen Ländern setzen Sie in Verkehr?
        </legend>
        <div className="flex flex-wrap gap-2">
          {LAENDER.map((l) => (
            <button key={l.label} type="button" onClick={() => setLaender(l.value)} aria-pressed={laender === l.value} className={btn(laender === l.value)}>
              {l.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-5">
        <legend className="block text-xs font-semibold text-ink-secondary mb-2">
          Wie viele Meldepflichten betreffen Sie (Verpackung, Batterien, Elektro …)?
        </legend>
        <div className="flex flex-wrap gap-2">
          {REGIME.map((r) => (
            <button key={r.label} type="button" onClick={() => setRegime(r.value)} aria-pressed={regime === r.value} className={btn(regime === r.value)}>
              {r.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="block text-xs font-semibold text-ink-secondary mb-2">Wie viele Artikel bzw. SKUs?</legend>
        <div className="flex flex-wrap gap-2">
          {SKUS.map((s) => (
            <button key={s.label} type="button" onClick={() => setSkuZuschlag(s.value)} aria-pressed={skuZuschlag === s.value} className={btn(skuZuschlag === s.value)}>
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mb-7">
        <label htmlFor="eigener-wert" className="block text-xs font-semibold text-ink-secondary mb-1.5">
          Ihr heutiger Aufwand in Stunden pro Jahr <span className="font-normal text-ink-tertiary">(optional)</span>
        </label>
        <input
          id="eigener-wert"
          type="text"
          inputMode="numeric"
          value={eigenerWert}
          onChange={(e) => setEigenerWert(e.target.value)}
          placeholder={`Unsere Schätzung: ${geschaetzt} Stunden`}
          className="w-full max-w-xs bg-canvas border border-border rounded-field px-4 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:border-brand-600 focus:outline-none transition-colors"
        />
      </div>

      {hinweis[kind] && (
        <p role="status" className="text-sm leading-relaxed text-ink-secondary border-l-[3px] border-brand-600 pl-4 mb-6">
          {hinweis[kind]}
        </p>
      )}

      <div className="border-t border-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary mb-3">
          Modellwert, keine Zusage
        </p>

        {kind === "null" ? (
          <>
            <p className="text-2xl font-black text-ink tracking-tight mb-2 max-w-[46ch] leading-tight">
              Bei null Stunden Ausgangsaufwand gibt es nichts einzusparen.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[60ch]">
              Dann ist Zeit nicht Ihre Frage. Die bleibende Frage ist, ob die gemeldete Menge
              belastbar hergeleitet ist und ob Sie sie in einem Jahr noch erklären können. Genau
              darum geht es im Datencheck weiter oben.
            </p>
          </>
        ) : (
          <>
            <p className="text-4xl font-black text-ink tracking-tight mb-1">
              {sparMin} bis {sparMax}{" "}
              <span className="text-lg font-bold text-ink-secondary">Stunden pro Jahr</span>
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed mb-4">
              Das entspricht rund {euroMin.toLocaleString("de-DE")} bis {euroMax.toLocaleString("de-DE")} Euro
              Arbeitszeit im Jahr, gerechnet mit {STUNDENSATZ_MIN} bis {STUNDENSATZ_MAX} Euro Vollkosten je Stunde.
            </p>
            <p className="text-xs text-ink-tertiary leading-relaxed max-w-[60ch]">
              Modellwert auf Basis von {eigeneZahl ? "Ihrer Angabe" : `unserer Schätzung von ${geschaetzt} Stunden`},
              multipliziert mit einer Einsparquote von 50 bis 70 Prozent. Diese Quote ist ein
              <strong className="font-semibold text-ink-secondary"> Fremdwert</strong>: sie stammt aus den unten
              genannten Studien und Fallberichten über andere Unternehmen, nicht aus einer Messung bei Sustainista.
              Vermiedene Fehler, zu hohe Lizenzentgelte und externe Beraterkosten sind nicht eingerechnet.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
