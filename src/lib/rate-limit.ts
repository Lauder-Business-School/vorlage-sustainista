const rateMap = new Map<string, { count: number; resetAt: number }>();

/**
 * In-Memory-Rate-Limit pro Serverless-Instanz. Kein harter Schutz auf Vercel
 * (Instanzen teilen den Map-Zustand nicht), nur eine erste Bremse gegen
 * naive Abuse-Skripte. Für echte Durchsetzung: Upstash/Vercel-KV oder Firewall.
 *
 * `scope` trennt die Kontingente pro Route, damit z.B. Webhook-Traffic nicht
 * das Kontakt-Formular-Limit derselben IP verbraucht.
 */
export function checkRateLimit(
  scope: string,
  ip: string,
  limit = 10,
  windowMs = 60_000,
): boolean {
  const key = `${scope}:${ip}`;
  const now = Date.now();
  // prune expired entries
  for (const [k, val] of rateMap.entries()) {
    if (now > val.resetAt) rateMap.delete(k);
  }
  const entry = rateMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}
