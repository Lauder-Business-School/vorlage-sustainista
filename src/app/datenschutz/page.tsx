import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Sustainista GmbH gemäß DSGVO.",
  alternates: { canonical: "https://www.example.invalid/datenschutz" },
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
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
                <li className="text-ink-secondary font-medium">Datenschutz</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-4">Datenschutzerklärung</h1>
            <p className="text-sm text-ink-tertiary mb-10">Stand: Juni 2026</p>

            <div className="space-y-8 text-sm text-ink-secondary leading-relaxed">

              <section>
                <h2 className="text-base font-bold text-ink mb-3">1. Verantwortlicher</h2>
                <p>
                  Verantwortlicher im Sinne der DSGVO:<br />
                  <span className="font-semibold text-ink">Sustainista GmbH</span><br />
                  Geschäftsführer: Dr. Stefan Bauer<br />
                  Wien, Österreich<br />
                  E-Mail: <a href="mailto:stefan.bauer@example.invalid" className="text-brand-600 hover:text-brand-700 transition-colors">stefan.bauer@example.invalid</a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">2. Allgemeines zur Datenverarbeitung</h2>
                <p className="mb-3">
                  Wir verarbeiten personenbezogene Daten unserer Nutzer:innen grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt nur auf Grundlage einer gesetzlichen Erlaubnis oder mit Einwilligung der betroffenen Person.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">3. Cookies</h2>
                <p className="mb-3">
                  Diese Website verwendet technisch notwendige Cookies sowie (nach Ihrer Einwilligung über den Cookie-Banner) optionale analytische Cookies.
                </p>
                <p className="mb-3">
                  <span className="font-semibold text-ink">Technisch notwendige Cookies</span> sind für den Betrieb der Website erforderlich. Sie können in Ihrem Browser gespeichert werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
                <p>
                  <span className="font-semibold text-ink">Optionale Cookies</span> werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser anpassen oder den Cookie-Banner erneut aufrufen.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">4. Kontaktformular, E-Mail-Kontakt & Lead-Erfassung</h2>
                <p className="mb-3">
                  Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die angegebenen Daten (Name, E-Mail-Adresse, Unternehmen, Nachricht) zwecks Bearbeitung der Anfrage und für eventuelle Anschlussfragen gespeichert.
                </p>
                <p className="mb-3">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Geschäftsanfragen).
                </p>
                <p className="mb-3">
                  <span className="font-semibold text-ink">Speicherdauer:</span> Kontakt- und Anfragedaten werden spätestens 24 Monate nach dem letzten Kontakt gelöscht oder anonymisiert, sofern keine gesetzliche Aufbewahrungspflicht besteht.
                </p>
                <p className="mb-3">
                  <span className="font-semibold text-ink">KI-gestützte Kommunikation:</span> Bei der Beantwortung von Anfragen setzen wir KI-Unterstützung ein. Dazu werden Ihr Name, Ihr Unternehmen sowie der bisherige E-Mail-Verlauf an die Anthropic PBC API (USA) übermittelt, um eine kontextgerechte Antwort zu erstellen. Anthropic verarbeitet diese Daten ausschließlich zur Erbringung des Dienstleistungsauftrags. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln (Art. 46 DSGVO). Ein Auftragsverarbeitungsvertrag mit Anthropic ist abgeschlossen.
                </p>
                <p>
                  <span className="font-semibold text-ink">E-Mail-Versand und -Empfang:</span> Ausgehende E-Mails werden über <span className="font-semibold text-ink">Resend Inc.</span> (USA) versendet. Eingehende Antworten werden über <span className="font-semibold text-ink">Agentmail</span> (USA) empfangen und verarbeitet. Beide Anbieter sind Auftragsverarbeiter gemäß Art. 28 DSGVO. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">5. Server-Logfiles</h2>
                <p>
                  Der Hosting-Anbieter (Vercel Inc.) erhebt und speichert automatisch Informationen in Server-Log-Dateien. Dazu gehören: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">6. Hosting & Auftragsverarbeiter</h2>
                <p className="mb-3">
                  Diese Website wird bei <span className="font-semibold text-ink">Vercel Inc.</span>, 340 Pine Street, Suite 401, San Francisco, CA 94104, USA gehostet. Vercel ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Es besteht ein Auftragsverarbeitungsvertrag. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln.
                </p>
                <p className="mb-3">
                  Kontakt- und Anfragedaten (Name, E-Mail, Unternehmen, Notizen) werden in einer Datenbank bei <span className="font-semibold text-ink">Supabase Inc.</span>, 970 Toa Payoh North, Singapur, gespeichert. Supabase ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Es besteht ein Auftragsverarbeitungsvertrag. Die Daten werden in einer EU-Region (Frankfurt) gespeichert.
                </p>
                <p className="mb-3">
                  Für den E-Mail-Versand nutzen wir <span className="font-semibold text-ink">Resend Inc.</span> (USA). Resend ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln.
                </p>
                <p className="mb-3">
                  Für den Empfang und die Verwaltung von E-Mail-Antworten nutzen wir <span className="font-semibold text-ink">Agentmail</span> (USA). Agentmail ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln.
                </p>
                <p>
                  Für KI-gestützte Texterstellung nutzen wir <span className="font-semibold text-ink">Anthropic PBC</span>, 548 Market St, San Francisco, CA 94104, USA. Anthropic ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Dabei werden ausschließlich die für die jeweilige Anfrage notwendigen Daten übermittelt. Der Transfer in die USA basiert auf EU-Standardvertragsklauseln.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">7. Ihre Rechte</h2>
                <p className="mb-3">Sie haben folgende Rechte gegenüber uns hinsichtlich Ihrer personenbezogenen Daten:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p className="mt-3">
                  Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                  <a href="mailto:stefan.bauer@example.invalid" className="text-brand-600 hover:text-brand-700 transition-colors">stefan.bauer@example.invalid</a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-ink mb-3">8. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:<br />
                  <span className="font-semibold text-ink">Österreichische Datenschutzbehörde</span><br />
                  Barichgasse 40 bis 42, 1030 Wien<br />
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">www.dsb.gv.at</a>
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
