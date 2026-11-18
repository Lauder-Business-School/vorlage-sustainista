import { ImageResponse } from "next/og";

/**
 * Vorschaubild 1200x630 für geteilte Links (Teams, LinkedIn). Vorher hing hier
 * angebot-sustainista.png mit 1920x613 (3,1:1), das beim Teilen beschnitten wurde
 * und nur Fahrzeuge zeigte. Erzeugt zur Bauzeit, kein Asset im Repo.
 */

export const alt = "Batteriepass 2027: Pflicht für Speicher, E-Autos und E-Bikes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#31572c",
          color: "#f2f9ea",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c5e4a0" }}>
          Digitaler Batteriepass
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 1000 }}>
            Ab 18. Februar 2027 Pflicht für Speicher, E-Autos und E-Bikes.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#e1f2ce", maxWidth: 980 }}>
            Industriebatterien über 2 kWh, Elektrofahrzeug- und LV-Batterien. Vom Datenaudit bis zum veröffentlichten Pass.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #4f772d",
            paddingTop: 26,
            fontSize: 22,
            color: "#c5e4a0",
          }}
        >
          <div style={{ display: "flex" }}>Batterieverordnung (EU) 2023/1542, Art. 77</div>
          <div style={{ display: "flex", color: "#f2f9ea", fontWeight: 700 }}>Sustainista</div>
        </div>
      </div>
    ),
    size,
  );
}
