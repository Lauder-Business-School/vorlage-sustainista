/** Fiktive Beispiel-Referenzen für die Kursvorlage. */
const REFERENCES = [
  {
    name: "Musterbetrieb A (Beispiel)",
    kind: "Fallstudie · ESG-Bericht",
    badge: "MB",
    text: "Für einen mittelständischen Technologiebetrieb wurde beispielhaft ein ESG-Bericht erstellt – als Vorlage dafür, wie Nachhaltigkeitsdaten prüfbar und strukturiert aufbereitet werden.",
    link: { href: "/produkte/nachhaltigkeitsbericht", label: "Nachhaltigkeitsbericht ansehen" },
  },
  {
    name: "Beispiel-Netzwerk B (Beispiel)",
    kind: "Partner · ESG-Datenaustausch",
    badge: "BN",
    text: "Beispielhafte Einbindung in ein standardisiertes ESG-Datennetzwerk, über das Unternehmen Nachhaltigkeitskennzahlen strukturiert an Finanzpartner übermitteln.",
    link: { href: "/produkte/esg-analyse", label: "ESG-Analyse & CO₂-Bilanz" },
  },
  {
    name: "Musterunternehmen C (Beispiel)",
    kind: "Kunde · Industrie, international",
    badge: "MU",
    text: "Product-Carbon-Footprint-Berechnung nach Produktkategorieregeln (PCR) als illustratives Anwendungsbeispiel für internationale Produktionsbetriebe.",
    link: { href: "/produkte/product-carbon-footprint", label: "Product Carbon Footprint" },
  },
] as const;

export default function References() {
  return (
    <section className="py-20 bg-canvas border-t border-border" aria-labelledby="references-h">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Referenzen (Beispiele)</p>
        <h2 id="references-h" className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.05] mb-10 max-w-[26ch]">
          Mit wem wir arbeiten.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REFERENCES.map((r) => (
            <article key={r.name} className="flex flex-col rounded-card border border-border bg-surface p-6">
              <div className="mb-5 flex h-12 items-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-canvas text-sm font-black tracking-tight text-brand-700">
                  {r.badge}
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-1">{r.kind}</p>
              <h3 className="text-lg font-extrabold text-ink mb-2">
                {r.name}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed flex-1 mb-4">{r.text}</p>
              <a href={r.link.href} className="text-sm font-semibold text-brand-700 underline underline-offset-2">{r.link.label}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
