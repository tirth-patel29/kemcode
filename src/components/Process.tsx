import { PROCESS_STEPS } from '@/data/content';
import { Reveal, SectionHeading } from '@/components/ui';

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-paper-line bg-paper-sand py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our process" className="text-center [&>div]:flex [&>div]:justify-center [&_h2]:mx-auto">
          Understand. Design. Build. Deliver.
        </SectionHeading>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={0.08 * i}>
              <div className="group relative h-full rounded-3xl border border-paper-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-32px_rgba(16,16,18,0.18)]">
                <span className="font-display text-sm font-medium tabular-nums text-accent">
                  {step.num}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">{step.desc}</p>
                <div className="mt-7 h-px w-full bg-paper-line">
                  <div className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
