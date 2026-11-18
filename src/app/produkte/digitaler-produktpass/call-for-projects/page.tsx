import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CallForProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-5 py-24">
        <h1 className="text-4xl font-bold">Projektvorlage</h1>
        <p className="mt-6">Diese Präsentation ist in der Kursvorlage nicht enthalten. Hier kannst du eine eigene Projektidee vorstellen.</p>
        <Link className="inline-block mt-8 underline" href="/produkte/digitaler-produktpass">Zurück zum Digitalen Produktpass</Link>
      </main>
      <Footer />
    </>
  );
}
