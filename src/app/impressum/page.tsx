import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Sustainista GmbH. Angaben gemäß § 5 ECG und § 14 UGB.",
  alternates: { canonical: "https://www.example.invalid/impressum" },
  robots: { index: false, follow: false },
};

export default function Impressum() {
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
                <li className="text-ink-secondary font-medium">Impressum</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-10">Impressum</h1>

            <div className="prose prose-sm max-w-none space-y-8">

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Informationspflicht laut §5 ECG</h2>
                <div className="text-sm text-ink-secondary leading-relaxed space-y-1">
                  <p className="font-semibold text-ink">Sustainista GmbH</p>
                  <p>Rathausstraße 21 Top 10B</p>
                  <p>1010 Wien, Österreich</p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Firmenbuch</h2>
                <div className="text-sm text-ink-secondary leading-relaxed space-y-1">
                  <p>Firmenbuchnummer: FN 576551 w</p>
                  <p>Firmenbuchgericht: Handelsgericht Wien</p>
                  <p>Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)</p>
                  <p>Rechtsformbeginn: 17.02.2022</p>
                  <p>UID-Nummer: ATU77902334</p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Vertretung</h2>
                <div className="text-sm text-ink-secondary leading-relaxed space-y-1">
                  <p>Geschäftsführer: Dr. Stefan Bauer (alleinvertretungsberechtigt)</p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Kontakt</h2>
                <div className="text-sm text-ink-secondary leading-relaxed space-y-1">
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:stefan.bauer@example.invalid" className="text-brand-600 hover:text-brand-700 transition-colors">
                      stefan.bauer@example.invalid
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/company/sustainista-innovation-meets-sustainability/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Sustainista auf LinkedIn
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Bankverbindung</h2>
                <div className="text-sm text-ink-secondary leading-relaxed space-y-1">
                  <p>Bank: Musterbank AG (Platzhalter)</p>
                  <p>IBAN: AT00 0000 0000 0000 0000</p>
                  <p>BIC: MUSTERATWWXXX</p>
                  <p className="text-ink-tertiary pt-2">
                    Hinweis: In dieser Kursvorlage sind nur Platzhalter-Bankdaten hinterlegt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Unternehmensgegenstand</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik; Unternehmensberatung einschließlich der Unternehmensorganisation.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Wirtschaftskammerzugehörigkeit</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Mitglied der Wirtschaftskammer Österreich (WKÖ), Fachgruppe Unternehmensberatung.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Anwendbare Rechtsvorschriften</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Gewerbeordnung: <a href="https://www.ris.bka.gv.at/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">www.ris.bka.gv.at</a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Aufsichtsbehörde</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Bezirkshauptmannschaft / Magistrat Wien
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Urheberrecht</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Die Inhalte dieser Website sind urheberrechtlich geschützt. Texte, Bilder, Grafiken und sonstige Inhalte dürfen ohne schriftliche Genehmigung nicht vervielfältigt oder verbreitet werden.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Haftungsausschluss</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für externe Links sind die Betreiber der verlinkten Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">Online-Streitbeilegung</h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Gemäß § 19 Abs. 1 VRUG: Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">
                    ec.europa.eu/consumers/odr
                  </a>.
                  Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <p className="text-xs text-ink-tertiary pt-4 border-t border-border">
                Stand: August 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
