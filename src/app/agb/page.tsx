import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB: Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Sustainista GmbH",
  alternates: { canonical: "https://www.example.invalid/agb" },
  robots: { index: false, follow: false },
};

export default function AGB() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative page-header pt-28 pb-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">AGB</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-sm text-ink-tertiary mb-10">Stand: Mai 2026</p>

            <div className="rounded-card border border-brand-200 bg-brand-50 px-7 py-6 mb-10">
              <p className="text-sm text-brand-700 leading-relaxed">
                <span className="font-semibold">Hinweis:</span> Die vollständigen AGB befinden sich derzeit in Ausarbeitung. Für alle aktuellen Vertragsbeziehungen gelten die individuell vereinbarten Bedingungen sowie die einschlägigen gesetzlichen Vorschriften des österreichischen und europäischen Rechts. Bei Fragen wenden Sie sich bitte an{" "}
                <a href="mailto:stefan.bauer@example.invalid" className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
                  stefan.bauer@example.invalid
                </a>.
              </p>
            </div>

            <div className="space-y-6 text-sm text-ink-secondary leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 1 Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Sustainista GmbH (nachfolgend &ldquo;Sustainista&rdquo;) und ihren Auftraggeber:innen (nachfolgend &ldquo;Kund:innen&rdquo;) über Beratungs-, Umsetzungs- und Softwaredienstleistungen im Bereich Nachhaltigkeit, ESG-Datenmanagement und KI-Automatisierung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 2 Vertragsschluss</h2>
                <p>
                  Verträge kommen durch schriftliche Auftragsbestätigung oder schriftliche Vereinbarung zustande. Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 3 Leistungsumfang</h2>
                <p>
                  Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der Leistungsbeschreibung. Sustainista behält sich vor, Leistungen durch qualifizierte Dritte erbringen zu lassen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 4 Vergütung</h2>
                <p>
                  Die Vergütung richtet sich nach dem jeweiligen Angebot. Alle Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 5 Geistiges Eigentum</h2>
                <p>
                  Sustainista räumt Kund:innen nach vollständiger Bezahlung das nicht-exklusive Nutzungsrecht an den erarbeiteten Ergebnissen ein. Das Urheberrecht verbleibt bei Sustainista.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 6 Datenschutz</h2>
                <p>
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
                  <Link href="/datenschutz" className="text-brand-600 hover:text-brand-700 transition-colors">Datenschutzerklärung</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 7 Haftung</h2>
                <p>
                  Sustainista haftet nur für Schäden, die auf grober Fahrlässigkeit oder Vorsatz beruhen. Eine Haftung für entgangenen Gewinn ist ausgeschlossen. Die Haftung ist auf den Auftragswert begrenzt.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">§ 8 Anwendbares Recht & Gerichtsstand</h2>
                <p>
                  Es gilt österreichisches Recht unter Ausschluss der Kollisionsnormen. Gerichtsstand ist Wien, Österreich.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
