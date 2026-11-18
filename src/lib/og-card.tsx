import { ImageResponse } from "next/og";

/** Gemeinsames Vorschaubild 1200x630 für geteilte Links (LinkedIn, Teams, KI-Vorschauen) */
export const OG_SIZE = { width: 1200, height: 630 };

export function ogCard({ eyebrow, title, sub, footer }: { eyebrow: string; title: string; sub: string; footer: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#31572c", color: "#f2f9ea", padding: "72px 80px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c5e4a0" }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 1040 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#e1f2ce", maxWidth: 1000 }}>{sub}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #4f772d", paddingTop: 26, fontSize: 22, color: "#c5e4a0" }}>
          <div style={{ display: "flex" }}>{footer}</div>
          <div style={{ display: "flex", color: "#f2f9ea", fontWeight: 700 }}>Sustainista</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
