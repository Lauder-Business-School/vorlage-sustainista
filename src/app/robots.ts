import type { MetadataRoute } from "next";

// Crawler lesen nur ihre eigene Gruppe: die Sperren stehen deshalb in jeder Gruppe, nicht nur unter "*".
const DISALLOW = ["/api/", "/intern/", "/decks/"];

/**
 * Suchmaschinen und KI-Crawler, die ausdrücklich erlaubt sind.
 * Trainings-, Such- und Nutzer-Agenten getrennt aufgeführt, damit Sustainista
 * in klassischer Suche, KI-Antworten (ChatGPT, Claude, Perplexity, Gemini, Copilot)
 * und Agenten-Abrufen auftaucht.
 */
const CRAWLER = [
  // Klassische Suche
  "Googlebot", "Googlebot-Image", "Bingbot", "Slurp", "DuckDuckBot", "Applebot", "YandexBot", "Ecosia",
  // OpenAI
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  // Anthropic
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai", "Claude-Web",
  // Perplexity
  "PerplexityBot", "Perplexity-User",
  // Google KI, Apple KI, Microsoft, Meta, Amazon, Mistral, Cohere, You.com, DuckDuckGo
  "Google-Extended", "Applebot-Extended", "MicrosoftPreview", "meta-externalagent", "FacebookBot",
  "Amazonbot", "MistralAI-User", "cohere-ai", "YouBot", "DuckAssistBot",
  // Offene Korpora
  "CCBot",
  // Vorschauen in LinkedIn, Teams, Slack
  "LinkedInBot", "Twitterbot", "Slackbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...CRAWLER.map((userAgent) => ({ userAgent, allow: ["/", "/llms.txt", "/llms-full.txt"], disallow: DISALLOW })),
    ],
    sitemap: "https://www.example.invalid/sitemap.xml",
    host: "https://www.example.invalid",
  };
}
