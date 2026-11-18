import HomeClient from "./HomeClient";
import ElektroShowcase from "@/components/ElektroShowcase";
import TrendradarTeaser from "@/components/trendradar/TrendradarTeaser";
import References from "@/components/References";

/** Live-Daten der sustainista DPP-Plattform werden stündlich neu gelesen */
export const revalidate = 3600;

export default function Home() {
  return <HomeClient elektro={<ElektroShowcase />} trendradar={<TrendradarTeaser />} references={<References />} />;
}
