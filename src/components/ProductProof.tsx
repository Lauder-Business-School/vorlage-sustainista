import type { LucideIcon } from "lucide-react";
import Partners from "@/components/Partners";
import type { Testimonial } from "@/data/testimonials";

export type BusinessValue = { icon: LucideIcon; title: string; body: string };

type Props = {
  eyebrow?: string;
  titleA: string;
  titleB: string;
  values: BusinessValue[];
  testimonial?: Testimonial;
  /** Logoreihe zeigen (aus, wenn die Seite sie schon an anderer Stelle hat) */
  logos?: boolean;
};

/**
 * Business-Wert, Kundenstimme und Logoreihe als gemeinsamer Abschnitt im unteren Teil jeder Produktseite.
 */
export default function ProductProof({ eyebrow, titleA, titleB, values, testimonial, logos = true }: Props) {
  return (
    <>
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {eyebrow && <p className="text-sm font-semibold text-ink-secondary mb-4">{eyebrow}</p>}
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-14">
            {titleA}<br />
            <span className="text-ink-tertiary">{titleB}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {values.map(({ title, body }) => (
              <div key={title} className="border-t border-border-strong pt-6">
                <h3 className="text-xl font-bold text-ink tracking-tight mb-3">{title}</h3>
                <p className="text-base text-ink-secondary leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {testimonial && (
            <figure className="mt-16 border-t border-border-strong pt-8 grid lg:grid-cols-12 gap-6">
              <blockquote className="lg:col-span-8 text-xl sm:text-2xl leading-relaxed font-medium text-ink">
                „{testimonial.quote}“
              </blockquote>
              <figcaption className="lg:col-span-4 lg:pl-8 lg:self-end">
                <span>
                  <span className="block text-base font-bold text-ink">{testimonial.author}</span>
                  <span className="block text-sm text-ink-secondary">{testimonial.role}</span>
                  <span className="block text-sm text-ink-secondary mt-1">Name anonymisiert</span>
                </span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>
      {logos && <Partners />}
    </>
  );
}
