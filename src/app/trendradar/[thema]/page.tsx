import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import TrendradarShell from "@/components/trendradar/TrendradarShell";
import TrendCard, { Cite, Prose } from "@/components/trendradar/TrendCard";
import ElektroShowcase from "@/components/ElektroShowcase";
import {
  EDITORIAL, PRODUCT_LINKS, PRODUCT_MAPPING_APPROVED, REGULATORY, SECTORS, SOURCE_DATE_ISO, trendsForSector,
} from "@/lib/trendradar";

/** Redaktionelle Ergänzungen je Themenfeld. Beispiele sind typische Vorgänge, keine Kundenresultate. */
const TOPIC: Record<string, { title: string; example: string[]; magazine: string[]; regulatory: string[] }> = {
  "regulatorik-nachweise": {
    title: "Welche Pflicht gilt, und woher stammt jede Zahl?",
    example: [
      "Ein Unternehmen hat einen VSME-Bericht erstellt und will ihn auf den Freiwilligen Standard VS nach 2026/1560 überführen, der seit 24. September 2026 in Kraft ist. Mit einer Belegkette ist sichtbar, welche Kennzahlen unverändert übernommen werden, welche neu zugeordnet werden müssen und welche Zusatzfrage tatsächlich neue Daten verlangt. Eine alte VSME-Datei wird nicht durch bloße Umbenennung zu einer aktuellen VS-Ausgabe. [S08, S09]",
      "Wird später eine Stromrechnung korrigiert, zeigt dieselbe Kette, welche Emissionskennzahl, welcher Bericht und welche Kundenantwort betroffen sind. Genau dieser Nachweis ist die Grundlage für Regeln als Code und für die Beobachtung regulatorischer Änderungen.",
    ],
    magazine: ["Nachvollziehbare Daten kommen zuerst", "Berichtsstandards bleiben in Bewegung"],
    regulatory: ["Freiwilliger Berichtsstandard VS", "CSRD und CSDDD", "Umweltangaben gegenüber Verbrauchern", "Datenzugang und KI"],
  },
  "produktpaesse-datenaustausch": {
    title: "Was ein Produktpass braucht, damit er Jahre und Anbieterwechsel übersteht",
    example: [
      "Ein Hersteller von Gewerbespeichern muss für Industriebatterien über 2 kWh ab 18. Februar 2027 einen Batteriepass bereitstellen. Zuerst wird festgelegt, auf welcher Ebene der Pass hängt (Modell, Charge oder Einzelstück) und welche dauerhafte Kennung der QR-Code trägt. Danach folgen das Datenprofil und die Zugriffsrollen: was öffentlich sichtbar ist und was nur Behörden, Prüfstellen oder Verwerter sehen. [S04, S16, S17]",
      "Erst wenn Identität und Datenmodell stehen, lohnen Partneraustausch über Datenräume und verifizierbare Nachweise. Für andere ESPR-Produktgruppen entstehen Anforderungen über eigene Rechtsakte; ein im Arbeitsplan genanntes Annahmejahr ist kein allgemeiner DPP-Stichtag. [S05, S06]",
    ],
    magazine: ["Produktpässe brauchen eine dauerhafte Identität"],
    regulatory: ["DPP je Produktgruppe", "DPP Register und Semantik", "Batteriepass"],
  },
  "co2-produktentwicklung": {
    title: "Unternehmensbilanz, PCF, EPD und prospektive LCA sauber trennen",
    example: [
      "Ein Kunde fragt nach dem CO₂-Fußabdruck einer bestimmten Produktvariante. Die Unternehmensbilanz nach Scope 1 bis 3 beantwortet das nicht direkt: Gebraucht wird ein Product Carbon Footprint (PCF) mit Bezugsgröße, Systemgrenze und Faktorversion. Für Bauprodukte kommt die Umweltproduktdeklaration (EPD) als geprüfte Deklaration hinzu. [S10, S11, S12]",
      "Soll entschieden werden, ob eine langlebigere, aber materialintensivere Variante unter einem künftigen Strommix besser abschneidet, ist das eine Frage für prospektive LCA. Ihr Ergebnis zeigt eine Entscheidung unter Annahmen und bleibt von der aktuellen Produktdeklaration getrennt. [S24]",
    ],
    magazine: ["CO₂ Werte werden durch ihren Kontext vergleichbar"],
    regulatory: ["Bauprodukte", "Umweltangaben gegenüber Verbrauchern"],
  },
  kreislaufwirtschaft: {
    title: "Kreislaufwirtschaft braucht dokumentierte Vorgänge",
    example: [
      "Eine Retoure wird als B-Ware eingestuft und zur Weitergabe vorgeschlagen. Dokumentiert ist der Vorgang erst, wenn Zustand, Entscheidung, Empfänger und Beleg verbunden sind. Seit Juli 2026 ist das für große Unternehmen bei bestimmter unverkaufter Bekleidung und Schuhen auch regulatorisch relevant. [S27]",
      "Dasselbe Muster gilt für eine gebrauchte E-Bike-Batterie: Zustandsmessung, Wiederaufbereitung und Weitergabe werden zu Ereignissen am Pass, jeweils mit Messquelle und Methode. Für Verpackungen bringt die PPWR gestaffelte Anforderungen, die gepflegte Material- und Verpackungsprofile verlangen. [S03, S04]",
    ],
    magazine: ["Kreislaufwirtschaft braucht dokumentierte Vorgänge"],
    regulatory: ["Batteriepass", "Verpackungen", "Unverkaufte Bekleidung und Schuhe"],
  },
  "ki-automatisierung": {
    title: "Verfügbares Werkzeug, Pilot oder Forschung?",
    example: [
      "Ein KI-Werkzeug liest Lieferantenrechnungen und schlägt Verbrauchswerte vor. Brauchbar wird das erst mit Fundstelle je Wert, einem eigenen Prüfdatensatz und einer fachlichen Freigabe. Im Pilot werden Genauigkeit, Eingriffszeit, Kosten und Energiebedarf gegen den bisherigen Ablauf gemessen. [S29, S30]",
      "Ein Agent, der Lieferantenanfragen vorbereitet, erhält nur die Werkzeugrechte, die er für genau diese Aufgabe braucht. Ob eine Dokumentextraktion unter den AI Act als hochriskant fällt, hängt vom Einsatz ab; sie ist es nicht automatisch. [S31, S32]",
    ],
    magazine: ["KI braucht einen überprüfbaren Auftrag", "Langfristige Optionen bleiben offen"],
    regulatory: ["Datenzugang und KI"],
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORS.map((s) => ({ thema: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ thema: string }> }): Promise<Metadata> {
  const { thema } = await params;
  const s = SECTORS.find((x) => x.slug === thema);
  if (!s) return {};
  const url = `https://www.example.invalid/trendradar/${s.slug}`;
  const n = trendsForSector(s.slug).length;
  const description = `${TOPIC[s.slug].title}. ${n} Trends bis 2040 mit Anwendung, regulatorischen Grenzen und Primärquellen.`;
  return {
    title: `Trendradar: ${s.short}`,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { type: "article", locale: "de_AT", siteName: "Sustainista", title: `Trendradar: ${s.short}`, description, url, modifiedTime: SOURCE_DATE_ISO },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ thema: string }> }) {
  const { thema } = await params;
  const s = SECTORS.find((x) => x.slug === thema);
  if (!s) notFound();
  const topic = TOPIC[s.slug];
  const trends = trendsForSector(s.slug);
  const products = [...new Set(trends.flatMap((t) => t.products))];
  const regs = REGULATORY.filter((r) => topic.regulatory.includes(r.title));
  const mag = EDITORIAL.magazine.sections.filter((m) => topic.magazine.includes(m.heading));

  return (
    <TrendradarShell
      current={`/trendradar/${s.slug}`}
      eyebrow={`Trendradar · ${s.key}`}
      title={topic.title}
      lead={<p>{s.lead}</p>}
      cta={s.cta}
    >
      <section className="py-16 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Kundenvorgang</p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-5">Ein typischer Fall</h2>
            <Prose paras={topic.example} />
            {mag.map((m) => (
              <div key={m.heading} className="mt-10">
                <h3 className="text-xl font-extrabold text-ink mb-3">{m.heading}</h3>
                <Prose paras={m.paras} />
              </div>
            ))}
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-card border border-border bg-surface p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-3">Trends in diesem Feld</p>
              <ul className="space-y-1.5">
                {trends.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.anchor}`} className="flex items-center gap-2.5 text-sm hover:text-brand-700">
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${t.layer === "core" ? "bg-brand-600 text-canvas" : "border-2 border-dashed border-brand-600 text-brand-700"}`}>{t.num}</span>
                      <span className="flex-1 font-semibold text-ink">{t.short}</span>
                      <span className="text-[11px] text-ink-tertiary">{t.horizon}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <Link href={`/trendradar?thema=${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Im Radar anzeigen <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-card border border-border bg-canvas p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-3">Regulatorische Grenzen</p>
              <ul className="space-y-4">
                {regs.map((r) => (
                  <li key={r.title}>
                    <p className="text-sm font-bold text-ink">{r.title} <span className="font-semibold text-brand-700">· {r.date}</span></p>
                    <p className="text-xs text-ink-secondary leading-relaxed mt-0.5"><Cite text={r.text} /></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-brand-50 border border-brand-200 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-800 mb-3">Passende Angebote</p>
              <ul className="flex flex-wrap gap-2">
                {products.map((p) => (
                  <li key={p}>
                    <Link href={PRODUCT_LINKS[p]} className="inline-flex items-center gap-1 rounded-btn border border-brand-300 bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-800 hover:border-brand-700">
                      {p} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-ink-tertiary">Produktzuordnung intern bestätigt am {PRODUCT_MAPPING_APPROVED}. Sie beschreibt Entwicklungsrichtungen, keine bereits implementierten Funktionen.</p>
            </div>
          </aside>
        </div>
      </section>

      {s.slug === "produktpaesse-datenaustausch" && <ElektroShowcase compact />}

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-2">Alle Trendkarten: {s.short}</h2>
          <p className="text-sm text-ink-secondary mb-6">{trends.filter((t) => t.layer === "core").length} Kerntrends und {trends.filter((t) => t.layer === "foresight").length} Foresight-Felder. Die erste Karte ist geöffnet.</p>
          <div className="space-y-3">
            {trends.map((t, i) => <TrendCard key={t.id} trend={t} open={i === 0} />)}
          </div>
        </div>
      </section>
    </TrendradarShell>
  );
}
