import Image from "next/image";

/** Hinweis im Seitenkopf: wir modellieren in openLCA (Logo von openlca.org, GreenDelta). */
export default function OpenLcaBadge() {
  return (
    <a
      href="https://www.openlca.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-card border border-border-strong bg-canvas/90 backdrop-blur-sm pl-3 pr-4 py-2 hover:border-brand-600 transition-colors"
    >
      <Image src="/openlca-logo.png" alt="openLCA" width={520} height={317} className="h-8 w-auto" />
      <span className="text-xs leading-snug text-ink-secondary">
        <span className="block font-semibold text-ink">Modelliert in openLCA</span>
        Open Source, jedes Ergebnis nachrechenbar
      </span>
    </a>
  );
}
