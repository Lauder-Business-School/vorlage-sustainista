import { BASE_URL, type BerichtContent } from "./content";

/** JSON-LD je Sprache: Seite, Brotkrumen und FAQ (gleicher Text wie auf der Seite). */
export function schemaOrg(c: BerichtContent, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: c.meta.title,
        description: c.meta.description,
        url,
        inLanguage: c.lang,
        isPartOf: { "@id": `${BASE_URL}/produkte` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.breadcrumb.home, item: BASE_URL },
          { "@type": "ListItem", position: 2, name: c.breadcrumb.produkte, item: `${BASE_URL}/produkte` },
          { "@type": "ListItem", position: 3, name: c.breadcrumb.current, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
