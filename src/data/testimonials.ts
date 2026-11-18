export type Testimonial = { quote: string; author: string; role: string; initials: string };

export const TESTIMONIALS: Partial<Record<
  "esg" | "pcf" | "lca" | "ki" | "dpp" | "batterie" | "csm" | "ppwr",
  Testimonial
>> = {};
