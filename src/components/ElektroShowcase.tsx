export default function ElektroShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <section id="dpp-plattform" className={`bg-ink text-canvas ${compact ? "py-16" : "py-24"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-4">Produktpass-Prototyp</p>
        <h2 className="text-3xl font-black mb-4">Produktdaten sichtbar machen</h2>
        <p className="max-w-2xl">
          Die Live-Verbindung zur ursprünglichen Plattform ist in dieser Lehrvorlage deaktiviert.
          Entwickle hier deine eigene Demonstration mit selbst angelegten Beispieldaten.
        </p>
      </div>
    </section>
  );
}
