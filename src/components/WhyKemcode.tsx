import { WHY_POINTS } from '@/data/content';
import { Reveal, SectionHeading } from '@/components/ui';
import { Check } from 'lucide-react';

export default function WhyKemcode() {
  return (
    <section id="why" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Why KEMCODE">
              Small team. Senior craft. Real outcomes.
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-mute">
                You get two founders who treat your project like their own product — from the first
                sketch to the server it runs on.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-paper-line border-y border-paper-line">
            {WHY_POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.06 * i}>
                <div className="group flex gap-5 py-8 transition-colors">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper-line bg-paper transition-colors duration-300 group-hover:border-accent group-hover:bg-accent-tint">
                    <Check className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-mute">{point.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
