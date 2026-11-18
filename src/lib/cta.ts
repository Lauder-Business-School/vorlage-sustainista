export const CALENDLY_URL = "#kontakt";

type Props = Record<string, string | number | boolean | null>;

/** Conversion-Ereignis-Stub fuer die Kursvorlage (kein externes Tracking aktiv). */
export function trackEvent(_name: string, _props?: Props) {
  /* No-op in der Kursvorlage */
}
