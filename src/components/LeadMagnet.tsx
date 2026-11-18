"use client";
import { useState } from "react";
import { ArrowRight, Download, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { trackEvent } from "@/lib/cta";

const tx = {
  de: {
    eyebrow: "Kostenloser Download",
    h2a: "ESG-Starter-Checkliste",
    h2b: "für österreichische KMU",
    desc: "12 konkrete Schritte zum ESG-fähigen Unternehmen, inklusive Förderübersicht und CSRD-Fahrplan. Sofort-Download, kein Spam.",
    highlights: [
      "Scope 1–3 Datenbasis aufbauen",
      "Förderprogramme AT/DE auf einen Blick",
      "CSRD-Readiness-Checkliste",
    ],
    emailLabel: "Ihre E-Mail-Adresse",
    emailPlaceholder: "m.muster@unternehmen.de",
    submit: "Checkliste herunterladen",
    sending: "Wird vorbereitet …",
    successTitle: "Checkliste ist unterwegs.",
    successBody: "Schauen Sie in Ihr Postfach. Wir senden den Download-Link innerhalb weniger Minuten.",
    error: "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut.",
    privacy: "Kein Spam. Jederzeit abmeldbar. Daten gemäß Datenschutzerklärung.",
  },
  en: {
    eyebrow: "Free download",
    h2a: "ESG Starter Checklist",
    h2b: "for SMEs in DACH",
    desc: "12 concrete steps to become ESG-ready, including a funding overview and CSRD roadmap. Instant download, no spam.",
    highlights: [
      "Build your Scope 1–3 data foundation",
      "Funding programmes AT/DE at a glance",
      "CSRD readiness checklist",
    ],
    emailLabel: "Your email address",
    emailPlaceholder: "j.smith@company.com",
    submit: "Download checklist",
    sending: "Preparing …",
    successTitle: "Checklist on its way.",
    successBody: "Check your inbox. We send the download link within a few minutes.",
    error: "Something went wrong. Please try again.",
    privacy: "No spam. Unsubscribe any time. Data per privacy policy.",
  },
};

function Wrapper({ embedded, children }: { embedded: boolean; children: React.ReactNode }) {
  if (embedded) return <div>{children}</div>;
  return (
    <section className="py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">{children}</div>
    </section>
  );
}

export default function LeadMagnet({ embedded = false }: { embedded?: boolean }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { locale } = useLanguage();
  const t = tx[locale];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(false);
    setError(true);
  }

  return (
    <Wrapper embedded={embedded}>
        <div className={embedded ? "grid grid-cols-1 gap-8" : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>

          <div>
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className={embedded ? "text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-[1.1] mb-4" : "text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-5"}>
              {t.h2a}<br />
              <span className="text-ink-tertiary">{t.h2b}</span>
            </h2>
            <p className="text-ink-secondary text-sm leading-relaxed mb-6">{t.desc}</p>
            <ul className="space-y-2">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-canvas border border-border rounded-card p-8">
            {submitted ? (
              <div role="status" className="flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-brand-50 border border-border flex items-center justify-center mb-5">
                  <Download className="w-6 h-6 text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{t.successTitle}</h3>
                <p className="text-ink-secondary text-sm">{t.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input name="website" type="text" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="flex items-center justify-center w-14 h-14 rounded-card bg-brand-50 border border-brand-100 mb-2">
                  <Download className="w-6 h-6 text-brand-600" aria-hidden="true" />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5" htmlFor="leadmagnet-email">
                    {t.emailLabel}
                  </label>
                  <input
                    id="leadmagnet-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full bg-surface border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all"
                  />
                </div>

                {error && (
                  <div role="alert" className="rounded-field border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-canvas py-3.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all flex items-center justify-center gap-2 hover:-translate-y-px"
                >
                  {loading ? t.sending : (
                    <>{t.submit} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></>
                  )}
                </button>

                <p className="flex items-center gap-1.5 text-[11px] text-ink-tertiary">
                  <Shield className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                  {t.privacy}
                </p>
              </form>
            )}
          </div>

        </div>
    </Wrapper>
  );
}
