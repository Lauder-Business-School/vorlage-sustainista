/** Radargeometrie laut Briefing; gemeinsam für interaktiven Radar und Teaser */
import { RINGS, SECTORS, TRENDS, ringIndex, sectorOf, type Trend } from "@/lib/trendradar";

/* ── Geometrie laut Briefing ── */
export const W = 1400;
export const H = 1120;
export const CX = 700;
export const CY = 560;
export const RING_R = [90, 165, 245, 325, 410];
export const DOT_R = [66, 125, 205, 284, 367];
export const SECTOR_DEG = 72;
export const DOT_SIZE = 17;

export const rad = (deg: number) => (deg * Math.PI) / 180;
/** Sektor i beginnt so, dass Sektor 0 oben zentriert ist (−90° = oben) */
export const sectorStart = (i: number) => -90 - SECTOR_DEG / 2 + i * SECTOR_DEG;
export const polar = (r: number, deg: number) => [CX + r * Math.cos(rad(deg)), CY + r * Math.sin(rad(deg))] as const;

export type Placed = { t: Trend; x: number; y: number };

/** Gleichmäßige Verteilung je Sektor und Ring; reine Funktion außerhalb der Komponente */
function computeLayout(): Placed[] {
  const out: Placed[] = [];
  SECTORS.forEach((s, si) => {
    RINGS.forEach((_, ri) => {
      const group = TRENDS.filter((t) => sectorOf(t).key === s.key && ringIndex(t) === ri);
      group.forEach((t, k) => {
        const deg = sectorStart(si) + SECTOR_DEG * ((k + 0.5) / group.length);
        const [x, y] = polar(DOT_R[ri], deg);
        out.push({ t, x, y });
      });
    });
  });
  return out;
}

export function arcPath(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = polar(r1, a0);
  const [x1, y1] = polar(r1, a1);
  const [x2, y2] = polar(r0, a1);
  const [x3, y3] = polar(r0, a0);
  return `M${x0},${y0} A${r1},${r1} 0 0 1 ${x1},${y1} L${x2},${y2} A${r0},${r0} 0 0 0 ${x3},${y3} Z`;
}

export const LAYOUT = computeLayout();
