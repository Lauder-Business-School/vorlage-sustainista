"use client";
import { useLanguage } from "@/i18n/context";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";

const termsDe = [
  {
    id: "esg",
    term: "ESG",
    fullName: "Environmental, Social and Governance",
    definition:
      "ESG steht für Environmental (Umwelt), Social (Soziales) und Governance (Unternehmensführung), drei Dimensionen, nach denen die Nachhaltigkeit eines Unternehmens bewertet wird. ESG-Daten werden von Banken, Investor:innen und Lieferantenmanagement genutzt, um Risiken und Nachhaltigkeitsleistung zu beurteilen.",
    related: ["csrd", "ghg-protocol"],
  },
  {
    id: "csrd",
    term: "CSRD",
    fullName: "Corporate Sustainability Reporting Directive",
    definition:
      "Die CSRD ist eine EU-Richtlinie, die Unternehmen zur Nachhaltigkeitsberichterstattung verpflichtet. Seit Omnibus I (Richtlinie (EU) 2026/470) gilt sie nur noch für Unternehmen mit mehr als 1.000 Beschäftigten und mehr als 450 Mio. Euro Nettoumsatz; den Standard für börsennotierte KMU gibt es nicht mehr. In Österreich gilt bis zur Umsetzung (fällig 19.03.2027) § 243b UGB für große Unternehmen von öffentlichem Interesse mit mehr als 500 Arbeitnehmern, mit Befreiung bis 450 Mio. Euro Umsatz oder bis 1.000 Arbeitnehmer. Für Unternehmen aus Drittstaaten gelten eigene Regeln ab dem Geschäftsjahr 2028. Die Berichtspflichten folgen den ESRS-Standards.",
    related: ["esrs", "esg"],
  },
  {
    id: "esrs",
    term: "ESRS",
    fullName: "European Sustainability Reporting Standards",
    definition:
      "ESRS sind die technischen Berichtsstandards zur CSRD, vergleichbar mit IFRS für die Finanzbuchhaltung. Sie definieren, welche Nachhaltigkeitsinformationen Unternehmen in welchem Format offenlegen müssen. Branchenspezifische ESRS sind mit Omnibus I gestrichen.",
    related: ["csrd"],
  },
  {
    id: "ghg-protocol",
    term: "GHG Protocol",
    fullName: "Greenhouse Gas Protocol",
    definition:
      "Das GHG Protocol ist der international anerkannteste Standard zur Messung und Berichterstattung von Treibhausgasemissionen. Es unterteilt Emissionen in Scope 1 (direkte Emissionen), Scope 2 (zugekaufte Energie) und Scope 3 (vor- und nachgelagerte Wertschöpfungskette).",
    related: ["scope-3", "pcf"],
  },
  {
    id: "scope-3",
    term: "Scope 3",
    fullName: "Scope 3: Indirekte Emissionen der Wertschöpfungskette",
    definition:
      "Scope 3 umfasst alle indirekten Treibhausgasemissionen entlang der vor- und nachgelagerten Wertschöpfungskette, von Lieferanten, Transport, Produktnutzung bis zur Entsorgung. Scope 3 macht bei den meisten Unternehmen 70 bis 90% der gesamten CO₂-Emissionen aus.",
    related: ["ghg-protocol", "pcf"],
  },
  {
    id: "pcf",
    term: "PCF: Product Carbon Footprint",
    fullName: "Product Carbon Footprint (Produktbezogener CO₂-Fußabdruck)",
    definition:
      "Der Product Carbon Footprint (PCF) ist die produktspezifische CO₂-Bilanz über den gesamten Lebenszyklus, von Rohstoffgewinnung bis zur Entsorgung. Die Berechnung erfolgt nach ISO 14067 oder GHG Protocol (Scope 3 Kategorie 10/11). PCF-Werte werden zunehmend von Kund:innen und Ausschreibungen verlangt.",
    related: ["ghg-protocol", "dpp", "iso-14067"],
  },
  {
    id: "iso-14067",
    term: "ISO 14067",
    fullName: "ISO 14067: Product Carbon Footprint Standard",
    definition:
      "ISO 14067 ist der internationale Norm für die Berechnung und Kommunikation des Product Carbon Footprint. Sie legt Methodik, Systemgrenzen und Kommunikationsanforderungen für produktbezogene CO₂-Bilanzen fest und ist Grundlage für CSRD-konforme PCF-Berechnungen.",
    related: ["pcf"],
  },
  {
    id: "dpp",
    term: "DPP: Digitaler Produktpass",
    fullName: "Digitaler Produktpass (Digital Product Passport)",
    definition:
      "Der Digitale Produktpass (DPP) ist ein strukturierter, maschinenlesbarer Datensatz, der alle relevanten Informationen zu einem Produkt über seinen gesamten Lebenszyklus enthält: Materialzusammensetzung, CO₂-Fußabdruck, Reparierbarkeit, Recyclingfähigkeit. Er wird durch die EU-Ökodesign-Verordnung (ESPR) ab 2027 schrittweise verpflichtend.",
    related: ["espr", "pcf"],
  },
  {
    id: "espr",
    term: "ESPR",
    fullName: "Ecodesign for Sustainable Products Regulation",
    definition:
      "Die ESPR (EU-Verordnung 2024/1781) ist die Rechtsgrundlage für den Digitalen Produktpass. Sie legt Mindestanforderungen an Nachhaltigkeit, Reparierbarkeit und Datentransparenz für Produkte fest, die in der EU in Verkehr gebracht werden. Batterien sind die erste Produktgruppe mit DPP-Pflicht (ab 2027).",
    related: ["dpp"],
  },
  {
    id: "kmu",
    term: "KMU",
    fullName: "Kleine und mittlere Unternehmen",
    definition:
      "KMU sind Unternehmen mit weniger als 250 Mitarbeitenden und einem Jahresumsatz unter 50 Mio. Euro (EU-Definition). Sustainista hat sich auf KMU spezialisiert, weil diese oft unter Nachhaltigkeitsdruck stehen (von Banken, Lieferanten, Regularien), aber kaum Zugang zu praxistauglichen Lösungen haben.",
    related: ["csrd", "esg"],
  },
  {
    id: "lca",
    term: "LCA: Ökobilanz",
    fullName: "Life Cycle Assessment (Lebenszyklusanalyse / Ökobilanz)",
    definition:
      "Eine LCA (Lebenszyklusanalyse) bewertet die Umweltwirkungen eines Produkts über seinen gesamten Lebenszyklus, von der Rohstoffgewinnung über Produktion und Nutzung bis zur Entsorgung. LCA ist die Basis für die PCF-Berechnung nach ISO 14067.",
    related: ["pcf", "iso-14067"],
  },
  {
    id: "kreislaufwirtschaft",
    term: "Kreislaufwirtschaft",
    fullName: "Circular Economy / Kreislaufwirtschaft",
    definition:
      "Kreislaufwirtschaft ist ein wirtschaftliches Modell, das darauf abzielt, Ressourcen so lange wie möglich im Wirtschaftskreislauf zu halten, durch Wiederverwendung, Reparatur, Refurbishment und Recycling. Der Digitale Produktpass ist ein zentrales Werkzeug für die Kreislaufwirtschaft.",
    related: ["dpp", "espr"],
  },
  {
    id: "scope-1",
    term: "Scope 1",
    fullName: "Scope 1: Direkte Treibhausgasemissionen",
    definition:
      "Scope 1 umfasst alle Treibhausgasemissionen, die direkt aus Quellen im Eigentum oder unter der Kontrolle eines Unternehmens entstehen, etwa aus der eigenen Heizungsanlage, Produktionsöfen oder dem firmeneigenen Fuhrpark. Scope 1 bildet zusammen mit Scope 2 und Scope 3 die vollständige Treibhausgasbilanz nach GHG Protocol.",
    related: ["scope-2", "scope-3", "ghg-protocol"],
  },
  {
    id: "scope-2",
    term: "Scope 2",
    fullName: "Scope 2: Indirekte Emissionen aus zugekaufter Energie",
    definition:
      "Scope 2 erfasst indirekte Treibhausgasemissionen aus dem Bezug von Strom, Fernwärme, Dampf oder Kühlenergie. Obwohl die Emissionen physisch außerhalb des Unternehmens entstehen, werden sie dem Verbraucher zugerechnet. Für viele Unternehmen ist ein Wechsel auf Ökostrom der schnellste Hebel zur Scope-2-Reduktion.",
    related: ["scope-1", "scope-3", "ghg-protocol"],
  },
  {
    id: "eu-taxonomie",
    term: "EU-Taxonomie",
    fullName: "EU-Taxonomieverordnung: Klassifizierungssystem für nachhaltige Wirtschaftstätigkeiten",
    definition:
      "Die EU-Taxonomie ist ein verbindliches Klassifizierungssystem, das festlegt, welche Wirtschaftstätigkeiten als ökologisch nachhaltig gelten. Banken und Investor:innen nutzen es, um Kapital gezielt in grüne Projekte zu lenken. Für Unternehmen bedeutet das: Wer CSRD-pflichtig ist, muss ausweisen, wie taxonomiekonform die eigene Geschäftstätigkeit ist.",
    related: ["csrd", "esg"],
  },
  {
    id: "sbti",
    term: "SBTi",
    fullName: "Science Based Targets initiative",
    definition:
      "Die SBTi ist ein internationales Rahmenwerk, das Unternehmen hilft, Klimaziele wissenschaftlich zu verankern, ausgerichtet an den Pfaden des Pariser Abkommens. Ein SBTi-validiertes Ziel signalisiert Investor:innen, Kund:innen und Lieferanten, dass Klimamaßnahmen ernst genommen werden. Die Zertifizierung setzt eine strukturierte Emissionsbilanz nach GHG Protocol voraus.",
    related: ["ghg-protocol", "scope-3", "csrd"],
  },
  {
    id: "csddd",
    term: "CSDDD",
    fullName: "Corporate Sustainability Due Diligence Directive",
    definition:
      "Die CSDDD (EU-Lieferkettenrichtlinie) verpflichtet große Unternehmen dazu, Menschenrechts- und Umweltrisiken entlang der gesamten globalen Lieferkette zu identifizieren, zu dokumentieren und zu beheben. Sie geht damit über die reine Berichtspflicht der CSRD hinaus und fordert aktives Handeln. Für österreichische und deutsche KMU relevant, wenn sie Lieferanten größerer Konzerne sind.",
    related: ["csrd", "esg", "scope-3"],
  },
  {
    id: "battery-passport",
    term: "Battery Passport",
    fullName: "Batteriepass (Battery Passport)",
    definition:
      "Der Batteriepass ist ein digitaler Datensatz für Elektrofahrzeug-, LV- und Industriebatterien über 2 kWh, der ab 18. Februar 2027 in der EU verpflichtend ist. Er enthält Modell-, Leistungs-, Material- und Entsorgungsangaben nach Anhang XIII der Batterieverordnung, maschinenlesbar und über QR-Code abrufbar; CO₂- und Rezyklatangaben kommen frühestens 2028 hinzu. Sustainista bietet mit Battery Passport Light eine praxistaugliche Lösung für Hersteller, die die Anforderungen der EU-Batterieverordnung schnell erfüllen müssen.",
    related: ["dpp", "espr", "pcf"],
  },
  {
    id: "gri",
    term: "GRI-Standards",
    fullName: "Global Reporting Initiative Standards",
    definition:
      "Die GRI-Standards sind das weltweit am weitesten verbreitete Rahmenwerk für Nachhaltigkeitsberichte. Unternehmen nutzen sie, um ihre ökologischen, sozialen und governance-relevanten Auswirkungen strukturiert offenzulegen. Die GRI-Standards sind modular aufgebaut und werden häufig ergänzend zur CSRD-Berichterstattung eingesetzt, da sie international anerkannt sind.",
    related: ["csrd", "esrs", "esg"],
  },
  {
    id: "co2-bepreisung",
    term: "CO₂-Bepreisung",
    fullName: "Carbon Pricing / CO₂-Bepreisung",
    definition:
      "CO₂-Bepreisung ist ein marktwirtschaftliches Instrument, bei dem der Ausstoß von Treibhausgasen mit einem Preis belegt wird, entweder über eine CO₂-Steuer oder über Emissionszertifikate im Emissionshandel. Für Unternehmen bedeutet das: Emissionen haben einen direkten Kosteneffekt. Wer seinen CO₂-Fußabdruck kennt, kann gezielt gegensteuern und Wettbewerbsvorteile sichern.",
    related: ["emissionshandel", "ghg-protocol", "scope-1"],
  },
  {
    id: "emissionshandel",
    term: "Emissionshandel (ETS)",
    fullName: "EU Emissions Trading System",
    definition:
      "Das EU-Emissionshandelssystem (EU ETS) legt eine Obergrenze für zulässige Treibhausgasemissionen großer Industrie- und Energieunternehmen fest. Wer mehr emittiert als erlaubt, muss Zertifikate kaufen. Ab 2027 wird mit dem EU ETS 2 auch der Gebäude- und Straßenverkehrssektor einbezogen. Das schafft direkten Kostendruck und macht eine verlässliche Emissionsbilanz zur Pflicht.",
    related: ["co2-bepreisung", "ghg-protocol", "scope-1"],
  },
  {
    id: "green-deal",
    term: "Green Deal",
    fullName: "Europäischer Green Deal",
    definition:
      "Der Europäische Green Deal ist das politische Leitprogramm der EU, das Europa bis 2050 zum ersten klimaneutralen Kontinent machen soll. Er ist der Rahmen, aus dem CSRD, ESPR, EU-Taxonomie, CSDDD und Batteriepass entstanden sind. Wer die regulatorischen Entwicklungen der letzten Jahre verstehen will, kommt am Green Deal nicht vorbei.",
    related: ["csrd", "espr", "eu-taxonomie", "csddd"],
  },
  {
    id: "sdgs",
    term: "SDGs",
    fullName: "Sustainable Development Goals / Nachhaltige Entwicklungsziele",
    definition:
      "Die 17 SDGs sind die globalen Nachhaltigkeitsziele der Vereinten Nationen, verabschiedet 2015 mit Zielhorizont 2030. Sie decken Klimaschutz, Armutsbekämpfung, Bildung, Gesundheit und vieles mehr ab. In Nachhaltigkeitsberichten nach GRI oder CSRD werden Unternehmensbeiträge häufig den relevanten SDGs zugeordnet, um die gesellschaftliche Wirkung sichtbar zu machen.",
    related: ["esg", "csrd", "gri"],
  },
  {
    id: "sustainable-finance",
    term: "Sustainable Finance",
    fullName: "Nachhaltige Finanzierung",
    definition:
      "Sustainable Finance bezeichnet die Einbeziehung von Umwelt-, Sozial- und Governance-Kriterien (ESG) in Finanzierungs- und Investitionsentscheidungen. Banken vergeben zunehmend günstigere Kredite an Unternehmen, die ESG-Kriterien erfüllen. Die EU-Taxonomie ist dabei das zentrale Klassifizierungswerkzeug, das definiert, welche Aktivitäten als grün gelten.",
    related: ["esg", "eu-taxonomie", "green-bonds"],
  },
  {
    id: "green-bonds",
    term: "Green Bonds",
    fullName: "Grüne Anleihen",
    definition:
      "Green Bonds sind Finanzierungsinstrumente, deren Emissionserlöse ausschließlich für umwelt- und klimafreundliche Projekte verwendet werden, etwa erneuerbare Energien, Gebäudesanierung oder nachhaltige Mobilität. Für Emittenten gilt: Die Nachhaltigkeitswirkung muss transparent nachgewiesen werden, oft auf Basis der EU-Taxonomie.",
    related: ["sustainable-finance", "eu-taxonomie", "esg"],
  },
  {
    id: "stranded-assets",
    term: "Stranded Assets",
    fullName: "Gestrandete Vermögenswerte",
    definition:
      "Stranded Assets sind Vermögenswerte, die durch verschärfte Klimaregulierung oder gesellschaftlichen Wandel vorzeitig an Wert verlieren oder unrentabel werden, etwa Kohlekraftwerke, Ölreserven oder schlecht gedämmte Gebäude. Für Unternehmen und Investor:innen ist die frühzeitige Identifikation solcher Risiken ein zentraler Bestandteil von ESG-Strategien.",
    related: ["esg", "eu-taxonomie", "sustainable-finance"],
  },
  {
    id: "epr",
    term: "EPR",
    fullName: "Extended Producer Responsibility / Erweiterte Produzentenverantwortung",
    definition:
      "EPR (Erweiterte Produzentenverantwortung) verpflichtet Hersteller, die Verantwortung für ihre Produkte auch nach der Nutzungsphase zu übernehmen, bei der Sammlung, Sortierung und dem Recycling. EPR ist eine der Triebfedern hinter dem Digitalen Produktpass, denn wer Produkte zurücknehmen muss, braucht verlässliche Informationen über Materialzusammensetzung und Recyclingfähigkeit.",
    related: ["dpp", "espr", "kreislaufwirtschaft"],
  },
  {
    id: "eco-design",
    term: "Eco-Design",
    fullName: "Ökodesign / Umweltgerechte Produktgestaltung",
    definition:
      "Eco-Design bedeutet, Umweltaspekte bereits bei der Produktentwicklung zu berücksichtigen: Langlebigkeit, Reparierbarkeit, Recyclingfähigkeit, Schadstofffreiheit. Die EU-Ökodesign-Verordnung (ESPR) setzt Eco-Design-Anforderungen schrittweise für verschiedene Produktgruppen verbindlich um und bildet die rechtliche Grundlage für den Digitalen Produktpass.",
    related: ["espr", "dpp", "epr"],
  },
  {
    id: "emas",
    term: "EMAS",
    fullName: "Eco-Management and Audit Scheme",
    definition:
      "EMAS ist das EU-Umweltmanagementsystem für Organisationen, die ihre Umweltleistung systematisch verbessern und öffentlich kommunizieren wollen. Eine EMAS-Registrierung geht über ISO 14001 hinaus, da sie eine externe Validierung und eine öffentliche Umwelterklärung erfordert. In der CSRD-Berichterstattung kann EMAS als Grundlage für bestimmte Nachweise dienen.",
    related: ["ums", "csrd", "esg"],
  },
  {
    id: "csr",
    term: "CSR",
    fullName: "Corporate Social Responsibility",
    definition:
      "CSR bezeichnet die gesellschaftliche Verantwortung von Unternehmen als freiwilligen Beitrag zu nachhaltiger Entwicklung, über gesetzliche Mindestanforderungen hinaus. CSR ist der Vorläuferbegriff zu ESG: Während CSR eher auf freiwillige Maßnahmen abzielte, setzt ESG auf messbare Kennzahlen und hat durch CSRD und Berichtspflichten eine gesetzliche Dimension bekommen.",
    related: ["esg", "csrd"],
  },
  {
    id: "wertschoepfungskette",
    term: "Wertschöpfungskette",
    fullName: "Value Chain / Wertschöpfungskette",
    definition:
      "Die Wertschöpfungskette umfasst alle Stufen eines Produkts oder einer Dienstleistung, von der Rohstoffgewinnung über Produktion, Transport und Nutzung bis zur Entsorgung. Im Nachhaltigkeitskontext ist sie zentral für Scope-3-Emissionen: Der größte Teil der CO₂-Belastung eines Unternehmens entsteht typischerweise vor- und nachgelagert in der eigenen Wertschöpfungskette.",
    related: ["scope-3", "ghg-protocol", "csddd"],
  },
  {
    id: "gwp",
    term: "GWP",
    fullName: "Global Warming Potential / Treibhauspotenzial",
    definition:
      "Das Global Warming Potential (GWP) gibt an, wie stark ein Treibhausgas im Vergleich zu CO₂ zur Erderwärmung beiträgt, bezogen auf einen Zeithorizont von 100 Jahren. Methan hat beispielsweise ein GWP von etwa 28. Bei PCF-Berechnungen und LCAs werden alle relevanten Treibhausgase auf Basis ihrer GWP-Faktoren in CO₂-Äquivalente umgerechnet.",
    related: ["pcf", "lca", "ghg-protocol"],
  },
  {
    id: "lieferkettengesetz",
    term: "Lieferkettengesetz",
    fullName: "Lieferkettensorgfaltspflichtengesetz (LkSG)",
    definition:
      "Das deutsche Lieferkettensorgfaltspflichtengesetz (LkSG, seit 2023 in Kraft) verpflichtet Unternehmen ab 1.000 Mitarbeitenden dazu, Menschenrechts- und Umweltrisiken in ihren Lieferketten zu prüfen und zu beheben. Es ist die nationale Vorwegnahme der EU-weiten CSDDD und betrifft auch österreichische Unternehmen, die in Deutschland tätig sind oder deutsche Konzerne beliefern.",
    related: ["csddd", "esg", "wertschoepfungskette"],
  },
  {
    id: "energieaudit",
    term: "Energieaudit",
    fullName: "Energieaudit nach EN 16247",
    definition:
      "Ein Energieaudit ist eine systematische Analyse des Energieverbrauchs eines Unternehmens oder Gebäudes. In der EU sind Nicht-KMU alle vier Jahre zu einem Energieaudit verpflichtet. Das Audit identifiziert Einsparpotenziale und ist häufig der erste konkrete Schritt hin zu einer messbaren CO₂-Reduktion nach Scope 1 und 2.",
    related: ["scope-1", "scope-2", "ghg-protocol"],
  },
  {
    id: "naturkapital",
    term: "Naturkapital",
    fullName: "Natural Capital / Naturkapital",
    definition:
      "Naturkapital bezeichnet den Bestand natürlicher Ressourcen wie Böden, Wälder, Gewässer und Artenvielfalt, der die Grundlage wirtschaftlicher Wertschöpfung bildet. Im CSRD-Kontext ist Naturkapital durch die ESRS E4 (Biodiversität) und E3 (Wasser) relevant. Unternehmen werden zunehmend verpflichtet, Abhängigkeiten und Einflüsse auf das Naturkapital zu messen und offenzulegen.",
    related: ["csrd", "esrs", "esg"],
  },
  {
    id: "co2-kompensation",
    term: "CO₂-Kompensation",
    fullName: "Carbon Offsetting / CO₂-Kompensation",
    definition:
      "CO₂-Kompensation bezeichnet den finanziellen Ausgleich eigener Emissionen durch die Unterstützung von Klimaschutzprojekten anderswo, etwa Aufforstung oder Erneuerbare-Energien-Projekte in Entwicklungsländern. Wichtig zu wissen: Kompensation ersetzt keine echte Emissionsreduktion. Regulierungen wie die CSRD und die SBTi setzen klare Grenzen, was als Kompensation angerechnet werden darf.",
    related: ["scope-3", "sbti", "ghg-protocol"],
  },
  {
    id: "ressourceneffizienz",
    term: "Ressourceneffizienz",
    fullName: "Resource Efficiency / Ressourceneffizienz",
    definition:
      "Ressourceneffizienz misst, wie viel wirtschaftlicher Nutzen pro eingesetzter Einheit natürlicher Ressourcen (Rohstoffe, Energie, Wasser, Fläche) erzielt wird. Im Unternehmenskontext ist Ressourceneffizienz sowohl ein ökologisches Ziel als auch ein wirtschaftliches Argument: Weniger Materialeinsatz bedeutet direkt niedrigere Kosten und geringere Scope-3-Emissionen.",
    related: ["kreislaufwirtschaft", "scope-3", "lca"],
  },
  {
    id: "klimaresilienz",
    term: "Klimaresilienz",
    fullName: "Climate Resilience / Klimaresilienz",
    definition:
      "Klimaresilienz beschreibt die Fähigkeit eines Unternehmens, eines Standorts oder einer Lieferkette, die physischen Risiken des Klimawandels zu antizipieren und zu bewältigen, etwa Extremwetter, Hitzestress oder Wasserknappheit. Die CSRD verpflichtet Unternehmen zur Offenlegung klimabezogener Risiken nach dem TCFD-Rahmenwerk. Klimaresilienz ist damit nicht nur ökologisches, sondern auch finanzielles Risikomanagement.",
    related: ["csrd", "esg", "sdgs"],
  },
  {
    id: "ums",
    term: "UMS",
    fullName: "Umweltmanagementsystem (ISO 14001)",
    definition:
      "Ein Umweltmanagementsystem (UMS) ist ein strukturiertes Rahmenwerk, mit dem Unternehmen ihre Umweltauswirkungen systematisch erfassen, steuern und kontinuierlich verbessern. ISO 14001 ist der internationale Standard dafür. Ein zertifiziertes UMS erleichtert die CSRD-Berichterstattung erheblich, weil zentrale Daten zu Energie, Emissionen und Ressourcen bereits erfasst sind.",
    related: ["emas", "csrd", "ghg-protocol"],
  },
  {
    id: "vsme",
    term: "VSME",
    fullName: "Voluntary Sustainability Reporting Standard for non-listed SMEs",
    definition:
      "Der VSME ist der von EFRAG entwickelte freiwillige Berichtsstandard für nicht börsennotierte KMU. Er bündelt die Kennzahlen, die Banken, Kunden und Investoren am häufigsten anfragen, in einem schlanken Basis- und Erweiterungsmodul. Seit 24. September 2026 ist mit der Delegierten Verordnung (EU) 2026/1560 der Freiwillige Standard VS in Kraft; bestehende VSME-Berichte sollten kontrolliert auf den neuen Stand überführt werden.",
    related: ["voluntary-standard", "csrd", "ghg-protocol"],
  },
  {
    id: "voluntary-standard",
    term: "Freiwilliger Standard VS",
    fullName: "Voluntary Standard nach Delegierter Verordnung (EU) 2026/1560",
    definition:
      "Der Freiwillige Standard VS ist seit 24. September 2026 in Kraft und löst den VSME als Referenz für freiwillige Nachhaltigkeitsberichte ab. Artikel 3 begrenzt bestimmte CSRD-bezogene Datenanfragen an kleinere Unternehmen; diese Begrenzung gilt für Geschäftsjahre ab 1. Januar 2027. Freiwillige Berichte bleiben freiwillig. Eine alte VSME-Datei wird nicht durch Umbenennung zu einer VS-Ausgabe.",
    related: ["vsme", "csrd", "esrs"],
  },
  {
    id: "pact",
    term: "PACT",
    fullName: "Partnership for Carbon Transparency (WBCSD)",
    definition:
      "PACT ist eine Initiative des WBCSD mit Methodik und technischer Spezifikation für den Austausch produktbezogener CO₂-Werte (PCF) zwischen Lieferanten und Kunden. Ein PACT-Datenpaket enthält neben dem Wert auch Bezugsgröße, Systemgrenze, Zeitraum und Datenqualität. Es macht unterschiedliche Berechnungen nicht automatisch vergleichbar, schafft aber eine gemeinsame Struktur.",
    related: ["pcf", "iso-14067", "scope-3"],
  },
  {
    id: "epd",
    term: "EPD",
    fullName: "Umweltproduktdeklaration (Environmental Product Declaration)",
    definition:
      "Eine EPD ist eine geprüfte, nach ISO 14025 und für Bauprodukte nach EN 15804 erstellte Deklaration der Umweltwirkungen eines Produkts auf Basis einer Ökobilanz. Mit der Bauproduktenverordnung 2024/3110 gewinnen digitale, maschinenlesbare EPD-Daten an Bedeutung. Eine EPD ist von einem Product Carbon Footprint und von einer Unternehmensbilanz zu unterscheiden.",
    related: ["lca", "pcf", "dpp"],
  },
  {
    id: "gs1-digital-link",
    term: "GS1 Digital Link",
    fullName: "GS1 Digital Link Standard",
    definition:
      "GS1 Digital Link verbindet eine Produktkennung wie die GTIN, ergänzt um Charge oder Seriennummer, mit einer Web-Adresse. Ein QR-Code mit GS1 Digital Link führt über einen Resolver zum passenden Produktpass oder zu weiteren Informationen. Für echte Produkte braucht es dafür eine GTIN aus einer GS1-Mitgliedschaft des Herstellers.",
    related: ["dpp", "battery-passport", "espr"],
  },
  {
    id: "ppwr",
    term: "PPWR",
    fullName: "Verpackungsverordnung (EU) 2025/40",
    definition:
      "Die PPWR (Packaging and Packaging Waste Regulation) ist die EU-Verpackungsverordnung und gilt seit 12. August 2026 unmittelbar in allen Mitgliedstaaten. Sie regelt Anforderungen an Verpackungen und Pflichten der Wirtschaftsakteure, mit gestaffelten Einzelanforderungen bis über 2030 hinaus. Die operative Mengenmeldung bleibt national organisiert, etwa über die ARA in Österreich oder LUCID in Deutschland.",
    related: ["epr", "kreislaufwirtschaft", "eco-design"],
  },
  {
    id: "prospektive-lca",
    term: "Prospektive LCA",
    fullName: "Prospektive Ökobilanz (Prospective Life Cycle Assessment)",
    definition:
      "Eine prospektive LCA bewertet Produkte unter zukünftigen Bedingungen, etwa einem anderen Strommix oder neuen Herstellungsverfahren, und arbeitet dazu mit Szenarien. Sie hilft bei langfristigen Produktentscheidungen, etwa ob eine langlebigere, aber materialintensivere Variante besser abschneidet. Ihre Ergebnisse bleiben von einer aktuellen Produktdeklaration getrennt.",
    related: ["lca", "pcf", "epd"],
  },
];

const termsEn = [
  {
    id: "esg",
    term: "ESG",
    fullName: "Environmental, Social and Governance",
    definition:
      "ESG stands for Environmental, Social and Governance: three dimensions used to assess a company's sustainability performance. ESG data is used by banks, investors and supply chain managers to evaluate risks and sustainability credentials.",
    related: ["csrd", "ghg-protocol"],
  },
  {
    id: "csrd",
    term: "CSRD",
    fullName: "Corporate Sustainability Reporting Directive",
    definition:
      "The CSRD is an EU directive that requires companies to report on sustainability. Since Omnibus I (Directive (EU) 2026/470) it only applies to companies with more than 1,000 employees and more than €450m net turnover; the standard for listed SMEs was abolished. In Austria § 243b UGB applies until transposition (due 19 March 2027) to large public-interest entities with more than 500 employees, with an exemption up to €450m turnover or up to 1,000 employees. Separate rules apply to non-EU companies from financial year 2028. Reporting obligations follow the ESRS standards.",
    related: ["esrs", "esg"],
  },
  {
    id: "esrs",
    term: "ESRS",
    fullName: "European Sustainability Reporting Standards",
    definition:
      "ESRS are the technical reporting standards for the CSRD, comparable to IFRS for financial accounting. They define which sustainability information companies must disclose and in what format. Sector-specific ESRS were abolished with Omnibus I.",
    related: ["csrd"],
  },
  {
    id: "ghg-protocol",
    term: "GHG Protocol",
    fullName: "Greenhouse Gas Protocol",
    definition:
      "The GHG Protocol is the most internationally recognised standard for measuring and reporting greenhouse gas emissions. It divides emissions into Scope 1 (direct emissions), Scope 2 (purchased energy) and Scope 3 (upstream and downstream value chain).",
    related: ["scope-3", "pcf"],
  },
  {
    id: "scope-3",
    term: "Scope 3",
    fullName: "Scope 3: Indirect Value Chain Emissions",
    definition:
      "Scope 3 covers all indirect greenhouse gas emissions along the upstream and downstream value chain: from suppliers, transport and product use through to disposal. Scope 3 accounts for 70 to 90% of total CO₂ emissions for most companies.",
    related: ["ghg-protocol", "pcf"],
  },
  {
    id: "pcf",
    term: "PCF: Product Carbon Footprint",
    fullName: "Product Carbon Footprint",
    definition:
      "The Product Carbon Footprint (PCF) is the product-specific CO₂ balance across the entire life cycle, from raw material extraction through to disposal. The calculation follows ISO 14067 or the GHG Protocol (Scope 3 categories 10/11). PCF figures are increasingly required by customers and procurement processes.",
    related: ["ghg-protocol", "dpp", "iso-14067"],
  },
  {
    id: "iso-14067",
    term: "ISO 14067",
    fullName: "ISO 14067: Product Carbon Footprint Standard",
    definition:
      "ISO 14067 is the international standard for calculating and communicating the Product Carbon Footprint. It specifies methodology, system boundaries and communication requirements for product-level CO₂ assessments and forms the basis for CSRD-compliant PCF calculations.",
    related: ["pcf"],
  },
  {
    id: "dpp",
    term: "DPP: Digital Product Passport",
    fullName: "Digital Product Passport",
    definition:
      "The Digital Product Passport (DPP) is a structured, machine-readable data record containing all relevant information about a product across its entire life cycle: material composition, carbon footprint, repairability and recyclability. It will become mandatory in phases under the EU Ecodesign Regulation (ESPR) from 2027.",
    related: ["espr", "pcf"],
  },
  {
    id: "espr",
    term: "ESPR",
    fullName: "Ecodesign for Sustainable Products Regulation",
    definition:
      "The ESPR (EU Regulation 2024/1781) is the legal basis for the Digital Product Passport. It sets minimum sustainability, repairability and data transparency requirements for products placed on the EU market. Batteries are the first product group subject to mandatory DPP requirements (from 2027).",
    related: ["dpp"],
  },
  {
    id: "kmu",
    term: "KMU",
    fullName: "Small and Medium-Sized Enterprises (SMEs)",
    definition:
      "SMEs are companies with fewer than 250 employees and an annual turnover below €50 million (EU definition). Sustainista specialises in SMEs because they are often under sustainability pressure (from banks, suppliers and regulations) but have limited access to practical solutions.",
    related: ["csrd", "esg"],
  },
  {
    id: "lca",
    term: "LCA: Life Cycle Assessment",
    fullName: "Life Cycle Assessment (LCA)",
    definition:
      "A Life Cycle Assessment (LCA) evaluates the environmental impacts of a product across its entire life cycle: from raw material extraction through production and use to disposal. LCA is the foundation for PCF calculations under ISO 14067.",
    related: ["pcf", "iso-14067"],
  },
  {
    id: "kreislaufwirtschaft",
    term: "Kreislaufwirtschaft",
    fullName: "Circular Economy",
    definition:
      "The circular economy is an economic model that aims to keep resources in use for as long as possible: through reuse, repair, refurbishment and recycling. The Digital Product Passport is a central tool for enabling the circular economy.",
    related: ["dpp", "espr"],
  },
  {
    id: "scope-1",
    term: "Scope 1",
    fullName: "Scope 1: Direct Greenhouse Gas Emissions",
    definition:
      "Scope 1 covers all greenhouse gas emissions arising directly from sources owned or controlled by a company, for example from its own heating systems, production furnaces or company fleet. Together with Scope 2 and Scope 3, Scope 1 forms the complete greenhouse gas inventory under the GHG Protocol.",
    related: ["scope-2", "scope-3", "ghg-protocol"],
  },
  {
    id: "scope-2",
    term: "Scope 2",
    fullName: "Scope 2: Indirect Emissions from Purchased Energy",
    definition:
      "Scope 2 captures indirect greenhouse gas emissions from the purchase of electricity, district heating, steam or cooling energy. Although the emissions physically occur outside the company, they are attributed to the consumer. For many companies, switching to renewable electricity is the fastest lever for reducing Scope 2 emissions.",
    related: ["scope-1", "scope-3", "ghg-protocol"],
  },
  {
    id: "eu-taxonomie",
    term: "EU-Taxonomie",
    fullName: "EU Taxonomy Regulation: Classification System for Sustainable Economic Activities",
    definition:
      "The EU Taxonomy is a binding classification system that defines which economic activities qualify as environmentally sustainable. Banks and investors use it to channel capital into green projects. For companies, this means: anyone subject to CSRD must disclose how taxonomy-aligned their business activities are.",
    related: ["csrd", "esg"],
  },
  {
    id: "sbti",
    term: "SBTi",
    fullName: "Science Based Targets initiative",
    definition:
      "The SBTi is an international framework that helps companies set climate targets grounded in science, aligned with the pathways of the Paris Agreement. An SBTi-validated target signals to investors, customers and suppliers that climate action is being taken seriously. Certification requires a structured emissions inventory under the GHG Protocol.",
    related: ["ghg-protocol", "scope-3", "csrd"],
  },
  {
    id: "csddd",
    term: "CSDDD",
    fullName: "Corporate Sustainability Due Diligence Directive",
    definition:
      "The CSDDD (EU Supply Chain Directive) requires large companies to identify, document and address human rights and environmental risks throughout their entire global supply chain. It goes beyond the mere reporting obligations of the CSRD and demands active intervention. Relevant for Austrian and German SMEs that supply larger corporations.",
    related: ["csrd", "esg", "scope-3"],
  },
  {
    id: "battery-passport",
    term: "Battery Passport",
    fullName: "Battery Passport",
    definition:
      "The Battery Passport is a digital record for EV, light means of transport (LMT) and industrial batteries above 2 kWh, mandatory in the EU from 18 February 2027. It contains model, performance, material and end-of-life data under Annex XIII of the Batteries Regulation, machine-readable and accessible via QR code; carbon footprint and recycled content data follow from 2028 at the earliest. Sustainista offers Battery Passport Light as a practical solution for manufacturers needing to meet EU Battery Regulation requirements quickly.",
    related: ["dpp", "espr", "pcf"],
  },
  {
    id: "gri",
    term: "GRI Standards",
    fullName: "Global Reporting Initiative Standards",
    definition:
      "The GRI Standards are the world's most widely used framework for sustainability reporting. Companies use them to disclose their environmental, social and governance impacts in a structured way. The GRI Standards are modular and are frequently used alongside CSRD reporting, given their international recognition.",
    related: ["csrd", "esrs", "esg"],
  },
  {
    id: "co2-bepreisung",
    term: "CO₂-Bepreisung",
    fullName: "Carbon Pricing",
    definition:
      "Carbon pricing is a market-based instrument that puts a price on greenhouse gas emissions, either through a carbon tax or through emission allowances in an emissions trading scheme. For companies, this means emissions have a direct cost impact. Knowing your carbon footprint enables targeted action and competitive advantage.",
    related: ["emissionshandel", "ghg-protocol", "scope-1"],
  },
  {
    id: "emissionshandel",
    term: "Emissionshandel (ETS)",
    fullName: "EU Emissions Trading System",
    definition:
      "The EU Emissions Trading System (EU ETS) sets a cap on permissible greenhouse gas emissions from large industrial and energy companies. Those emitting more than allowed must purchase allowances. From 2027, EU ETS 2 will also cover the buildings and road transport sectors. This creates direct cost pressure and makes reliable emissions accounting mandatory.",
    related: ["co2-bepreisung", "ghg-protocol", "scope-1"],
  },
  {
    id: "green-deal",
    term: "Green Deal",
    fullName: "European Green Deal",
    definition:
      "The European Green Deal is the EU's flagship policy programme to make Europe the world's first climate-neutral continent by 2050. It is the framework from which the CSRD, ESPR, EU Taxonomy, CSDDD and Battery Passport have emerged. Anyone seeking to understand the regulatory developments of recent years cannot ignore the Green Deal.",
    related: ["csrd", "espr", "eu-taxonomie", "csddd"],
  },
  {
    id: "sdgs",
    term: "SDGs",
    fullName: "Sustainable Development Goals",
    definition:
      "The 17 SDGs are the United Nations' global sustainability goals, adopted in 2015 with a target horizon of 2030. They cover climate protection, poverty reduction, education, health and much more. In sustainability reports under GRI or CSRD, company contributions are frequently mapped to relevant SDGs to make their societal impact visible.",
    related: ["esg", "csrd", "gri"],
  },
  {
    id: "sustainable-finance",
    term: "Sustainable Finance",
    fullName: "Sustainable Finance",
    definition:
      "Sustainable Finance refers to the integration of environmental, social and governance criteria (ESG) into financing and investment decisions. Banks are increasingly offering better loan terms to companies that meet ESG criteria. The EU Taxonomy is the central classification tool defining which activities qualify as green.",
    related: ["esg", "eu-taxonomie", "green-bonds"],
  },
  {
    id: "green-bonds",
    term: "Green Bonds",
    fullName: "Green Bonds",
    definition:
      "Green Bonds are financial instruments whose proceeds are used exclusively for environmentally and climate-friendly projects, such as renewable energy, building renovation or sustainable mobility. For issuers, the sustainability impact must be transparently demonstrated, often on the basis of the EU Taxonomy.",
    related: ["sustainable-finance", "eu-taxonomie", "esg"],
  },
  {
    id: "stranded-assets",
    term: "Stranded Assets",
    fullName: "Stranded Assets",
    definition:
      "Stranded assets are assets that lose value prematurely or become unprofitable due to tightened climate regulation or societal change, for example coal power plants, oil reserves or poorly insulated buildings. For companies and investors, early identification of such risks is a core element of ESG strategies.",
    related: ["esg", "eu-taxonomie", "sustainable-finance"],
  },
  {
    id: "epr",
    term: "EPR",
    fullName: "Extended Producer Responsibility",
    definition:
      "EPR (Extended Producer Responsibility) requires manufacturers to take responsibility for their products even after the use phase, covering collection, sorting and recycling. EPR is one of the key drivers behind the Digital Product Passport: anyone obliged to take products back needs reliable information on material composition and recyclability.",
    related: ["dpp", "espr", "kreislaufwirtschaft"],
  },
  {
    id: "eco-design",
    term: "Eco-Design",
    fullName: "Eco-Design / Environmentally Conscious Product Design",
    definition:
      "Eco-design means integrating environmental considerations into product development from the outset: durability, repairability, recyclability and freedom from hazardous substances. The EU Ecodesign Regulation (ESPR) progressively makes eco-design requirements binding for different product groups and forms the legal basis for the Digital Product Passport.",
    related: ["espr", "dpp", "epr"],
  },
  {
    id: "emas",
    term: "EMAS",
    fullName: "Eco-Management and Audit Scheme",
    definition:
      "EMAS is the EU environmental management system for organisations that want to systematically improve and publicly communicate their environmental performance. EMAS registration goes beyond ISO 14001 because it requires external validation and a public environmental statement. In CSRD reporting, EMAS can serve as the basis for certain disclosures.",
    related: ["ums", "csrd", "esg"],
  },
  {
    id: "csr",
    term: "CSR",
    fullName: "Corporate Social Responsibility",
    definition:
      "CSR refers to a company's voluntary contribution to sustainable development, going beyond legal minimum requirements. CSR is the precursor concept to ESG: while CSR focused on voluntary measures, ESG emphasises measurable indicators and has acquired a legal dimension through CSRD and reporting obligations.",
    related: ["esg", "csrd"],
  },
  {
    id: "wertschoepfungskette",
    term: "Wertschöpfungskette",
    fullName: "Value Chain",
    definition:
      "The value chain encompasses all stages of a product or service: from raw material extraction through production, transport and use to disposal. In the sustainability context, it is central to Scope 3 emissions: the largest share of a company's CO₂ burden typically arises upstream and downstream in its own value chain.",
    related: ["scope-3", "ghg-protocol", "csddd"],
  },
  {
    id: "gwp",
    term: "GWP",
    fullName: "Global Warming Potential",
    definition:
      "Global Warming Potential (GWP) indicates how strongly a greenhouse gas contributes to global warming compared to CO₂, measured over a 100-year time horizon. Methane, for example, has a GWP of approximately 28. In PCF calculations and LCAs, all relevant greenhouse gases are converted to CO₂ equivalents based on their GWP factors.",
    related: ["pcf", "lca", "ghg-protocol"],
  },
  {
    id: "lieferkettengesetz",
    term: "Lieferkettengesetz",
    fullName: "German Supply Chain Due Diligence Act (LkSG)",
    definition:
      "The German Supply Chain Due Diligence Act (LkSG, in force since 2023) requires companies with 1,000 or more employees to audit and address human rights and environmental risks in their supply chains. It is the national precursor to the EU-wide CSDDD and also affects Austrian companies operating in Germany or supplying German corporations.",
    related: ["csddd", "esg", "wertschoepfungskette"],
  },
  {
    id: "energieaudit",
    term: "Energieaudit",
    fullName: "Energy Audit (EN 16247)",
    definition:
      "An energy audit is a systematic analysis of a company's or building's energy consumption. In the EU, non-SMEs are required to carry out an energy audit every four years. The audit identifies savings potential and is often the first concrete step towards measurable CO₂ reduction under Scope 1 and 2.",
    related: ["scope-1", "scope-2", "ghg-protocol"],
  },
  {
    id: "naturkapital",
    term: "Naturkapital",
    fullName: "Natural Capital",
    definition:
      "Natural capital refers to the stock of natural resources (soils, forests, water bodies and biodiversity) that forms the foundation of economic value creation. In the CSRD context, natural capital is addressed through ESRS E4 (biodiversity) and E3 (water). Companies are increasingly required to measure and disclose their dependencies on and impacts on natural capital.",
    related: ["csrd", "esrs", "esg"],
  },
  {
    id: "co2-kompensation",
    term: "CO₂-Kompensation",
    fullName: "Carbon Offsetting",
    definition:
      "Carbon offsetting involves financially compensating for one's own emissions by supporting climate protection projects elsewhere, such as reforestation or renewable energy projects in developing countries. Important to note: offsetting does not replace genuine emissions reduction. Regulations such as the CSRD and SBTi set clear limits on what may be counted as an offset.",
    related: ["scope-3", "sbti", "ghg-protocol"],
  },
  {
    id: "ressourceneffizienz",
    term: "Ressourceneffizienz",
    fullName: "Resource Efficiency",
    definition:
      "Resource efficiency measures how much economic value is generated per unit of natural resource used: raw materials, energy, water, land. In the business context, resource efficiency is both an environmental goal and a commercial argument: lower material input means directly lower costs and reduced Scope 3 emissions.",
    related: ["kreislaufwirtschaft", "scope-3", "lca"],
  },
  {
    id: "klimaresilienz",
    term: "Klimaresilienz",
    fullName: "Climate Resilience",
    definition:
      "Climate resilience describes the ability of a company, site or supply chain to anticipate and manage the physical risks of climate change, such as extreme weather, heat stress or water scarcity. The CSRD requires companies to disclose climate-related risks in line with the TCFD framework. Climate resilience is therefore not just an environmental issue but also financial risk management.",
    related: ["csrd", "esg", "sdgs"],
  },
  {
    id: "ums",
    term: "UMS",
    fullName: "Environmental Management System (ISO 14001)",
    definition:
      "An environmental management system (EMS) is a structured framework that enables companies to systematically record, manage and continuously improve their environmental impacts. ISO 14001 is the international standard for this. A certified EMS significantly simplifies CSRD reporting because key data on energy, emissions and resources is already captured.",
    related: ["emas", "csrd", "ghg-protocol"],
  },
  {
    id: "vsme",
    term: "VSME",
    fullName: "Voluntary Sustainability Reporting Standard for non-listed SMEs",
    definition:
      "The VSME is EFRAG's voluntary reporting standard for non-listed SMEs, bundling the metrics banks, customers and investors request most often into a basic and a comprehensive module. Since 24 September 2026 the Voluntary Standard VS under Delegated Regulation (EU) 2026/1560 is in force; existing VSME reports should be migrated in a controlled way.",
    related: ["voluntary-standard", "csrd", "ghg-protocol"],
  },
  {
    id: "voluntary-standard",
    term: "Voluntary Standard (VS)",
    fullName: "Voluntary Standard under Delegated Regulation (EU) 2026/1560",
    definition:
      "The Voluntary Standard VS has been in force since 24 September 2026. Article 3 limits certain CSRD-related data requests to smaller companies for financial years starting on or after 1 January 2027. Voluntary reports remain voluntary, and an old VSME file does not become a VS report by renaming it.",
    related: ["vsme", "csrd", "esrs"],
  },
  {
    id: "pact",
    term: "PACT",
    fullName: "Partnership for Carbon Transparency (WBCSD)",
    definition:
      "PACT is a WBCSD initiative providing a methodology and technical specification for exchanging product carbon footprints between suppliers and customers, including reference unit, system boundary, period and data quality. It gives a shared structure but does not make different calculations automatically comparable.",
    related: ["pcf", "iso-14067", "scope-3"],
  },
  {
    id: "epd",
    term: "EPD",
    fullName: "Environmental Product Declaration",
    definition:
      "An EPD is a verified declaration of a product's environmental impacts based on a life cycle assessment, following ISO 14025 and, for construction products, EN 15804. Under the Construction Products Regulation 2024/3110, digital machine-readable EPD data gains importance. An EPD differs from a product carbon footprint and from a corporate carbon balance.",
    related: ["lca", "pcf", "dpp"],
  },
  {
    id: "gs1-digital-link",
    term: "GS1 Digital Link",
    fullName: "GS1 Digital Link Standard",
    definition:
      "GS1 Digital Link connects a product identifier such as a GTIN, optionally with batch or serial number, to a web address. A QR code using GS1 Digital Link leads through a resolver to the right product passport. Real products need a GTIN from the manufacturer's GS1 membership.",
    related: ["dpp", "battery-passport", "espr"],
  },
  {
    id: "ppwr",
    term: "PPWR",
    fullName: "Packaging and Packaging Waste Regulation (EU) 2025/40",
    definition:
      "The PPWR is the EU packaging regulation, directly applicable in all member states since 12 August 2026. It sets packaging requirements and obligations for economic operators, with staggered requirements reaching beyond 2030. Quantity reporting remains national, for example via ARA in Austria or LUCID in Germany.",
    related: ["epr", "kreislaufwirtschaft", "eco-design"],
  },
  {
    id: "prospektive-lca",
    term: "Prospective LCA",
    fullName: "Prospective Life Cycle Assessment",
    definition:
      "A prospective LCA assesses products under future conditions, such as a different electricity mix or new production processes, using scenarios. It supports long-term product decisions and stays separate from a current product declaration.",
    related: ["lca", "pcf", "epd"],
  },
];

// Alphabetische Reihenfolge, gilt für Anzeige, Buchstaben-Index und JSON-LD.
const byTerm = (locale: string) => (a: { term: string }, b: { term: string }) =>
  a.term.localeCompare(b.term, locale, { numeric: true, sensitivity: "base" });

termsDe.sort(byTerm("de"));
termsEn.sort(byTerm("en"));

// Erwartet eine bereits sortierte Liste: gruppiert nach Anfangsbuchstabe.
function groupByLetter<T extends { term: string }>(terms: T[]) {
  const groups: { letter: string; terms: T[] }[] = [];
  for (const term of terms) {
    const letter = term.term[0].toUpperCase();
    const last = groups[groups.length - 1];
    if (last && last.letter === letter) last.terms.push(term);
    else groups.push({ letter, terms: [term] });
  }
  return groups;
}

const tx = {
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Glossar",
    eyebrow: "Fachbegriffe erklärt",
    h1: "Glossar",
    sub: "ESG, CSRD, Digitaler Produktpass, Product Carbon Footprint, die wichtigsten Fachbegriffe der Nachhaltigkeitswelt klar erklärt, von A bis Z.",
    azNavLabel: "Nach Anfangsbuchstabe springen",
    letterHeading: "Begriffe mit",
    relatedTerms: "Verwandte Begriffe:",
    ctaEyebrow: "Mehr als Definitionen",
    ctaH2: "Wir setzen diese Begriffe in die Praxis um.",
    ctaSub: "Sustainista begleitet KMU in Österreich und DACH von der ESG-Analyse über den Digitalen Produktpass bis zur vollständigen KI-Automatisierung.",
    ctaBtn1: "Leistungen ansehen",
    ctaBtn2: "Kostenloses Gespräch",
    terms: termsDe,
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Glossary",
    eyebrow: "Terms explained",
    h1: "Glossary",
    sub: "ESG, CSRD, Digital Product Passport, Product Carbon Footprint: the most important terms in the sustainability world clearly explained, from A to Z.",
    azNavLabel: "Jump to letter",
    letterHeading: "Terms starting with",
    relatedTerms: "Related terms:",
    ctaEyebrow: "More than definitions",
    ctaH2: "We put these terms into practice.",
    ctaSub: "Sustainista supports SMEs in Austria and DACH from ESG analysis through the Digital Product Passport to full AI automation.",
    ctaBtn1: "View services",
    ctaBtn2: "Free consultation",
    terms: termsEn,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": "https://www.example.invalid/glossar",
      "name": "Sustainista Glossar: ESG, CSRD, DPP und Nachhaltigkeit",
      "url": "https://www.example.invalid/glossar",
      "publisher": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "description": "Definitionen zu ESG, CSRD, ESRS, GHG Protocol, Digitalem Produktpass (DPP), Product Carbon Footprint (PCF) und KI-Automatisierung, erklärt von Sustainista.",
      "hasDefinedTerm": termsDe.map((t) => ({
        "@type": "DefinedTerm",
        "@id": `https://www.example.invalid/glossar#${t.id}`,
        "name": t.term,
        "alternateName": t.fullName,
        "description": t.definition,
        "inDefinedTermSet": "https://www.example.invalid/glossar",
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Glossar", "item": "https://www.example.invalid/glossar" },
      ],
    },
  ],
};

export default function GlossarPage() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const terms = t.terms;
  const groups = groupByLetter(terms);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>

        {/* Hero */}
        <section className="page-header relative min-h-[40vh] flex items-end pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">{t.breadcrumbHome}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{t.breadcrumbCurrent}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">{t.eyebrow}</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              {t.h1}
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl">
              {t.sub}
            </p>
          </div>
        </section>

        {/* A–Z navigation */}
        <section className="py-6 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <nav aria-label={t.azNavLabel} className="flex flex-wrap gap-1.5">
              {groups.map((group) => (
                <a
                  key={group.letter}
                  href={`#buchstabe-${group.letter}`}
                  className="min-w-[2rem] text-center text-xs font-black px-2.5 py-1.5 rounded-full border border-border bg-canvas text-ink-secondary hover:text-brand-600 hover:border-brand-200 transition-colors"
                >
                  {group.letter}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Terms, grouped A–Z */}
        <section className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">
            {groups.map((group) => (
              <div key={group.letter} className="space-y-12">
                <h2
                  id={`buchstabe-${group.letter}`}
                  className="scroll-mt-24 flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-brand-600"
                >
                  <span className="sr-only">{t.letterHeading} </span>
                  {group.letter}
                  <span aria-hidden="true" className="flex-1 h-px bg-border" />
                </h2>
                {group.terms.map((term) => (
                  <article key={term.id} id={term.id} className="scroll-mt-24 border-b border-border pb-12 last:border-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="text-2xl font-black text-ink tracking-tight">{term.term}</h3>
                      <a href={`#${term.id}`} className="text-xs text-ink-tertiary hover:text-ink transition-colors mt-1">#{term.id}</a>
                    </div>
                    <p className="text-xs text-brand-600 font-semibold mb-4">{term.fullName}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-5">{term.definition}</p>
                    {term.related.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-ink-tertiary font-medium">{t.relatedTerms}</span>
                        {term.related.map((r) => {
                          const rel = terms.find((x) => x.id === r);
                          return rel ? (
                            <a
                              key={r}
                              href={`#${r}`}
                              className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface text-ink-secondary hover:text-brand-600 hover:border-brand-200 transition-colors"
                            >
                              {rel.term}
                            </a>
                          ) : null;
                        })}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow mb-4 justify-center">{t.ctaEyebrow}</p>
            <h2 className="text-2xl font-black text-ink mb-3">
              {t.ctaH2}
            </h2>
            <p className="text-sm text-ink-secondary mb-8 max-w-lg mx-auto leading-relaxed">
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                {t.ctaBtn1}
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 border border-border text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                {t.ctaBtn2}
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
