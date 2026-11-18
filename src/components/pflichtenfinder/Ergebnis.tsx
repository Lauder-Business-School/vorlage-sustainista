"use client";
import { useState } from "react";
import { ChevronDown, Circle, Link2, RotateCcw, Sparkles } from "lucide-react";
import type { EintragDto, ErgebnisDto, FrageDto, KatalogGruppeDto } from "@/lib/pflichtenfinder";

/**
 * Ergebnis des Pflichtenfinders. Alle Inhalte kommen fertig aus `ergebnis` (Elektro). Regeln aus der Übergabe N1:
 * Teile, die `null` sind, entfallen ganz (keine Überschrift, kein Platzhalter); eigene Texte nennen nie einen Pass;
 * `wortlaut: null` ist geschützter Normtext und erscheint nicht. Verneinende Aussagen tragen data-pass="verneint".
 */

const verneint = (pass: EintragDto["pass"]) => (pass === "verneint" ? "verneint" : undefined);
const extern = { target: "_blank", rel: "noopener noreferrer" } as const;
const linkCls = "text-brand-700 underline underline-offset-2 decoration-brand-300 hover:decoration-brand-700";

function Teil({ id, titel, lead, ton, children }: { id: string; titel: string; lead?: string; ton?: "caution"; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`teil-${id}`} className="border-t border-border pt-10 mt-12 first:mt-0">
      <h3 id={`teil-${id}`} className={`text-2xl font-extrabold tracking-tight text-ink ${ton === "caution" ? "flex items-center gap-3" : ""}`}>
        {ton === "caution" && <span className="h-2.5 w-2.5 rounded-full bg-caution" aria-hidden="true" />}
        {titel}
      </h3>
      {lead && <p className="mt-2 max-w-[62ch] text-ink-secondary leading-relaxed">{lead}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Eintrag({ e }: { e: EintragDto }) {
  const details =
    e.hinweis || e.klaerenSie.length || e.katalog.length || e.offenePunkte.length || e.ohneKatalogeintrag || e.abweichungen.length || e.engineLinks.length;
  const kopf = (
    <>
      <span className="block text-[1.0625rem] font-bold leading-snug text-ink" data-pass={verneint(e.pass)}>{e.titel}</span>
      <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-secondary">
        {e.frist && <span className="font-semibold text-brand-700">{e.frist}</span>}
        {e.fundstelle && <span>{e.fundstelle}</span>}
        {e.entwurf && <span className="rounded-btn border border-caution px-1.5 text-klein font-semibold text-caution">Entwurf, nicht erlassen</span>}
        {e.adressatOffen && <span>Adressat im Rechtsakt nicht festgelegt</span>}
      </span>
    </>
  );
  if (!details) return <li data-regel={e.id} className="border-b border-border py-5">{kopf}</li>;
  return (
    <li data-regel={e.id} className="border-b border-border">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
          <span className="min-w-0">{kopf}</span>
          <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="max-w-[68ch] space-y-3 pb-6 text-sm leading-relaxed text-ink">
          {e.hinweis && <p data-pass={verneint(e.pass)}>{e.hinweis}</p>}
          {e.klaerenSie.length > 0 && <p><span className="font-semibold">Klären Sie:</span> {e.klaerenSie.join("; ")}</p>}
          {e.katalog.length > 0 && (
            <ul className="space-y-3 border-l-2 border-brand-200 pl-4">
              {e.katalog.map((k) => (
                <li key={k.id} data-pass={verneint(e.pass)}>
                  <span className="font-semibold text-brand-700">{k.id}</span> <span className="text-ink-secondary">{k.quelle}</span>
                  {k.wortlaut && <span className="mt-1 block text-ink-secondary" lang="en">{k.wortlaut}</span>}
                  {k.auslegungOffen.map((a) => <span key={a} className="mt-1 block text-ink-secondary" lang="en">{a}</span>)}
                  {k.nachweis && <span className="mt-1 block text-ink-tertiary">So weisen Sie es nach: {k.nachweis}</span>}
                </li>
              ))}
            </ul>
          )}
          {e.offenePunkte.map((op) => (
            <p key={op.id}><span className="font-semibold">{op.id}</span> Offener Punkt im Katalog: <span lang="en">{op.text}</span></p>
          ))}
          {e.ohneKatalogeintrag && <p className="text-ink-tertiary">Ohne Eintrag im Anforderungskatalog: {e.ohneKatalogeintrag}.</p>}
          {e.abweichungen.map((w) => (
            <p key={w.id}><span className="font-semibold">{w.id}</span> Abweichung dokumentiert: {w.text}</p>
          ))}
          {e.engineLinks.length > 0 && (
            <p>
              Auf der Plattform:{" "}
              {e.engineLinks.map((l, i) => (
                <span key={l.href}>{i > 0 && ", "}<a className={linkCls} href={l.href} {...extern}>{l.label}<span className="sr-only"> (öffnet in neuem Tab)</span></a></span>
              ))}
            </p>
          )}
        </div>
      </details>
    </li>
  );
}

const Eintraege = ({ liste }: { liste: EintragDto[] }) => (
  <ul className="border-t border-border">{liste.map((e) => <Eintrag key={e.id} e={e} />)}</ul>
);

function Gruppen({ offen, gruppen }: { offen: { id: string; text: string }[]; gruppen: KatalogGruppeDto[] }) {
  return (
    <>
      {offen.length > 0 && (
        <p className="mb-4 text-sm text-ink-secondary">
          Offen im Katalog:{" "}
          {offen.map((o, i) => <span key={o.id}>{i > 0 && "; "}<span className="font-semibold">{o.id}</span> <span lang="en">{o.text}</span></span>)}
        </p>
      )}
      <ul className="border-t border-border">
        {gruppen.map((g) => (
          <li key={g.kategorie} className="border-b border-border">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="font-bold text-ink">{g.titel} <span className="font-normal text-ink-tertiary">({g.eintraege.length})</span></span>
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="max-w-[68ch] text-sm text-ink-secondary">{g.prinzip}</p>
              <ul className="mt-3 space-y-3 pb-5 text-sm">
                {g.eintraege.map((x) => (
                  <li key={x.id}>
                    <span className="font-semibold text-brand-700">{x.id}</span> <span className="text-ink-secondary">{x.quelle}</span>
                    {x.merkmale && <span className="block text-ink-tertiary">{x.merkmale}</span>}
                    {x.hinweis && <span className="block text-ink-tertiary" lang="en">{x.hinweis}</span>}
                    {x.wortlaut && <span className="block text-ink-secondary" lang="en">{x.wortlaut}</span>}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}

/** Bisherige Antworten mit „Ändern“; im Fragebaum und unter dem Ergebnis. */
export function Angaben({ fragen, onAendern, gesperrt }: { fragen: FrageDto[]; onAendern: (id: string) => void; gesperrt?: boolean }) {
  const beantwortet = fragen.filter((f) => f.antwort.length > 0);
  if (!beantwortet.length) return null;
  return (
    <dl className="divide-y divide-border border-y border-border">
      {beantwortet.map((f) => (
        <div key={f.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 py-3">
          <dt className="text-sm text-ink-tertiary">{f.titel}</dt>
          <dd className="col-start-1 font-semibold text-ink">{f.antwort.map((a) => f.werte.find((w) => w.wert === a)?.label ?? a).join(", ")}</dd>
          <dd className="col-start-2 row-span-2 row-start-1">
            <button
              type="button"
              disabled={gesperrt}
              onClick={() => onAendern(f.id)}
              aria-label={`Ändern: ${f.titel}`}
              className="rounded-btn px-2 py-1 text-sm font-semibold text-brand-700 hover:bg-brand-50 disabled:opacity-50"
            >
              Ändern
            </button>
          </dd>
        </div>
      ))}
    </dl>
  );
}

interface Props {
  e: ErgebnisDto;
  fragen: FrageDto[];
  offeneVertiefung: number;
  stichtag: string | null;
  link: string;
  gesperrt: boolean;
  onAendern: (id: string) => void;
  onVertiefen: () => void;
  onStichtag: (iso: string) => void;
  onNeu: () => void;
}

export default function Ergebnis({ e, fragen, offeneVertiefung, stichtag, link, gesperrt, onAendern, onVertiefen, onStichtag, onNeu }: Props) {
  const [kopiert, setKopiert] = useState<"ja" | "nein" | null>(null);
  const [t, m, j] = e.stichtag.split(".");
  const zahlen: [number, string][] = [
    [e.zahlen.pflichten, e.zahlen.pflichten === 1 ? "Pflicht" : "Pflichten"],
    [e.zahlen.zuKlaeren, "zu klären"],
    [e.zahlen.hintergrund, "Hintergrund"],
    [e.zahlen.nichtBetroffen, "nicht betroffen"],
  ];
  const kopieren = () =>
    navigator.clipboard.writeText(link).then(
      () => setKopiert("ja"),
      () => setKopiert("nein"),
    );

  return (
    <div className={gesperrt ? "opacity-60 transition-opacity" : undefined} aria-busy={gesperrt}>
      <header className="animate-slide-up">
        <h2 id="ergebnis" tabIndex={-1} className="text-[2rem] sm:text-[2.5rem] font-black tracking-tight leading-[1.08] text-ink focus-visible:outline-none">
          Ihr Ergebnis
        </h2>
        <p className="mt-2 text-ink-secondary">{e.stand}. Keine Rechtsberatung.</p>

        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-4">
          {zahlen.map(([n, label], i) => (
            <div key={label} className={`flex flex-col-reverse gap-1 p-5 ${i === 0 ? "bg-brand-700" : "bg-canvas"}`}>
              <dt className={`text-sm font-semibold ${i === 0 ? "text-brand-100" : "text-ink-secondary"}`}>{label}</dt>
              <dd className={`text-5xl font-black tabular-nums leading-none ${i === 0 ? "text-white" : i === 1 && n > 0 ? "text-caution" : "text-ink"}`}>{n}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-4">
          <label className="text-sm text-ink-secondary">
            <span className="block mb-1">Stichtag der Auswertung</span>
            <input
              type="date"
              value={stichtag ?? `${j}-${m}-${t}`}
              onChange={(ev) => ev.target.value && onStichtag(ev.target.value)}
              className="rounded-field border border-ink-tertiary bg-canvas px-3 py-2 text-ink"
            />
          </label>
          <button type="button" onClick={kopieren} className="inline-flex items-center gap-2 rounded-btn border border-border px-4 py-2.5 text-sm font-semibold text-brand-700 hover:border-brand-600 hover:bg-brand-50">
            <Link2 className="h-4 w-4" aria-hidden="true" /> Link zum Ergebnis kopieren
          </button>
          <button type="button" onClick={onNeu} className="inline-flex items-center gap-2 px-1 py-2.5 text-sm font-semibold text-ink-secondary hover:text-ink">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Neu beginnen
          </button>
          <span role="status" className="text-sm text-brand-700">{kopiert === "ja" ? "Link kopiert" : kopiert === "nein" ? "Kopieren nicht möglich, bitte die Adresse aus der Adresszeile nehmen" : ""}</span>
        </div>
      </header>

      <div className="mt-14">
        {e.klaerenSieZuerst.length > 0 && (
          <Teil id="klaeren" ton="caution" titel="Klären Sie zuerst" lead="Diese Pflichten hängen an Antworten, die noch fehlen oder mit „Weiß ich nicht“ beantwortet sind. Der Pflichtenfinder rät hier nicht.">
            <Eintraege liste={e.klaerenSieZuerst} />
          </Teil>
        )}
        {e.pflichten.length > 0 && (
          <Teil id="pflichten" titel="Ihre Pflichten" lead="Aus Rechtsakten, die für Ihre Rolle gelten. Jede Pflicht nennt Frist, Fundstelle und Katalogeintrag.">
            <Eintraege liste={e.pflichten} />
          </Teil>
        )}
        {e.fristen.length > 0 && (
          <Teil id="fristen" titel="Fristen">
            <ol className="relative ml-1.5 border-l-2 border-brand-200">
              {e.fristen.map((f, i) => (
                <li key={`${f.datum}-${i}`} className="relative pb-5 pl-6 last:pb-0">
                  <span className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${f.bedingt ? "border-caution bg-canvas" : "border-brand-600 bg-brand-600"}`} aria-hidden="true" />
                  <span className="block font-bold tabular-nums text-ink">{f.datum}</span>
                  <span className="block text-ink-secondary" data-pass={verneint(f.pass)}>{f.titel}</span>
                </li>
              ))}
            </ol>
            {e.fristen.some((f) => f.bedingt) && (
              <p className="mt-5 text-sm text-ink-secondary">* frühestens; der Beginn hängt an einem Folgerechtsakt, der noch fehlt.</p>
            )}
          </Teil>
        )}
        {e.handlungsplan.length > 0 && (
          <Teil id="plan" titel="Handlungsplan" lead="Zuerst, was schon gilt, dann was kommt, dann was an fehlenden Rechtsakten hängt; innerhalb davon nach Katalogpriorität.">
            <ol className="space-y-4">
              {e.handlungsplan.map((s, i) => (
                <li key={`${s.titel}-${i}`} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold tabular-nums text-brand-700" aria-hidden="true">{i + 1}</span>
                  <span className="pt-1">
                    <span className="font-semibold text-ink" data-pass={verneint(s.pass)}>{s.titel}</span>{" "}
                    <span className="text-ink-secondary">({s.frist})</span>
                  </span>
                </li>
              ))}
            </ol>
          </Teil>
        )}
        {e.hintergrund.length > 0 && (
          <Teil id="hintergrund" titel="Hintergrund, Empfehlungen, nicht betroffen">
            <Eintraege liste={e.hintergrund} />
          </Teil>
        )}
        {e.profil && (
          <Teil id="profil" titel="Ihr Konfigurationsprofil" lead={`Die ${e.profil.length} Parameter des Anforderungskatalogs mit verantwortlicher Funktion. Offen heißt: aus Ihren Antworten und dem Recht noch nicht bestimmbar.`}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- waagrecht scrollbarer Bereich braucht Tastaturfokus (WCAG 2.1.1, axe: scrollable-region-focusable) */}
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Konfigurationsprofil, seitlich scrollbar">
              <table className="w-full min-w-[34rem] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-border text-ink-secondary">
                    <th scope="col" className="py-2 pr-4 font-semibold">Parameter</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">Status</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">Wert</th>
                    <th scope="col" className="py-2 font-semibold">Verantwortlich</th>
                  </tr>
                </thead>
                <tbody>
                  {e.profil.map((z) => (
                    <tr key={z.parameter} className="border-b border-border align-top">
                      <th scope="row" className="py-3 pr-4 font-semibold text-ink">{z.parameter}</th>
                      <td className={`py-3 pr-4 ${z.status === "offen" ? "font-semibold text-caution" : "text-ink"}`}>{z.status}</td>
                      <td className="py-3 pr-4 text-ink-secondary">
                        {z.werte.map((w) => <span key={`${w.text}-${w.fundstelle}`} className="block">{w.text} <span className="text-ink-tertiary">{w.fundstelle}</span></span>)}
                      </td>
                      <td className="py-3 text-ink-secondary">{z.verantwortlich}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Teil>
        )}
        {e.zuschnitte && (
          <Teil id="zuschnitt" titel="Zuschnitt auf der Plattform" lead="Was die Elektro-Plattform für Ihre Batteriekategorie verlangt, gelesen aus ihrem Feldkatalog.">
            <ul className="border-t border-border">
              {e.zuschnitte.map((z) => (
                <li key={z.kategorie} className="border-b border-border py-5 text-sm text-ink-secondary">
                  <p className="text-[1.0625rem] font-bold text-ink">{z.name}</p>
                  <p className="mt-1">
                    {z.pflichtfelder} Pflichtfelder im Feldkatalog, davon {z.faellig} zum Stichtag fällig
                    {z.spaeter.map((s) => `, ${s}`).join("")}
                    {z.bedingt > 0 && `, ${z.bedingt} bedingt`}.
                  </p>
                  <p className="mt-1">Zugangsstufen: {z.zugangsstufen}</p>
                  <p className="mt-2"><a className={linkCls} href={z.katalog} {...extern}>Feldkatalog dieser Kategorie öffnen<span className="sr-only"> (öffnet in neuem Tab)</span></a></p>
                </li>
              ))}
            </ul>
          </Teil>
        )}
        {e.pruefliste && (
          <Teil id="pruefliste" titel="Was nicht vergessen werden darf" lead="Prüfliste aus dem Anforderungskatalog.">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {e.pruefliste.map((q) => (
                <li key={q} className="flex gap-3 text-ink">
                  <Circle className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> <span>{q}</span>
                </li>
              ))}
            </ul>
          </Teil>
        )}
        {e.loesung && (
          <Teil id="loesung" titel="Anforderungen an Ihre Software" lead="Aus den einschlägigen Normen und den Annahmen des Projektteams: Prüffragen an einen Anbieter. Normtexte sind urheberrechtlich geschützt; wo der Wortlaut fehlt, stehen Norm und Abschnitt.">
            <Gruppen offen={e.loesung.offen} gruppen={e.loesung.gruppen} />
          </Teil>
        )}
        {e.empfehlungen && (
          <Teil id="empfehlungen" titel="Empfehlungen und Chancen" lead="Keine Pflichten: Methodennormen, ergänzende Quellen und Themen, die über das Minimum hinaus Nutzen bringen. Bedingte Einträge gelten nur, wenn Sie die genannten Daten tatsächlich führen.">
            <Gruppen offen={e.empfehlungen.offen} gruppen={e.empfehlungen.gruppen} />
          </Teil>
        )}

        {offeneVertiefung > 0 && (
          <section aria-labelledby="vertiefen-h" className="mt-14 rounded-card bg-brand-50 p-6 sm:p-8">
            <h3 id="vertiefen-h" className="flex items-center gap-2.5 text-xl font-extrabold text-ink">
              <Sparkles className="h-5 w-5 text-brand-600" aria-hidden="true" /> Ergebnis genauer machen
            </h3>
            <p className="mt-2 max-w-[56ch] text-ink-secondary">
              {offeneVertiefung === 1 ? "Eine weitere Frage schärft" : `${offeneVertiefung} weitere Fragen schärfen`} das Ergebnis. Freiwillig, Sie
              können jederzeit zurück zum Ergebnis.
            </p>
            <button type="button" onClick={onVertiefen} disabled={gesperrt} className="mt-5 inline-flex items-center rounded-btn bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-canvas hover:bg-brand-700 disabled:opacity-50">
              Weitere Fragen beantworten
            </button>
          </section>
        )}

        <section aria-labelledby="angaben-h" className="mt-14">
          <h3 id="angaben-h" className="text-xl font-extrabold text-ink">Ihre Angaben</h3>
          <div className="mt-4"><Angaben fragen={fragen} onAendern={onAendern} gesperrt={gesperrt} /></div>
        </section>
      </div>
    </div>
  );
}
