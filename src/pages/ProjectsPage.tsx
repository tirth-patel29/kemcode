import { FEATURED_PROJECTS, PLACEHOLDER_IMAGE } from '@/data/projects';
import { Reveal, SectionHeading } from '@/components/ui';
import { ArrowUpRight } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Selected projects" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
          Real work, built by real founders.
        </SectionHeading>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-mute">
            A selection of live projects across web, automation and platforms — each one opens
            directly to the live site.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * (i % 3)}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-paper-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-32px_rgba(16,16,18,0.2)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-paper-mist">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      if (el.src !== PLACEHOLDER_IMAGE) el.src = PLACEHOLDER_IMAGE;
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-paper-line px-5 py-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors group-hover:text-accent">
                    View Live
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Have a project like these?"
        sub="Every project above started as a conversation. Let's talk about yours."
        label="Let's Build Something"
      />
    </div>
  );
}
