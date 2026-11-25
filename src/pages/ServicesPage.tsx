import { Link } from 'react-router-dom';
import { ArrowUpRight, AppWindow, Bot, CalendarCheck, Globe, Palette, Server, Share2, ShoppingBag, Ticket, TrendingUp, Users } from 'lucide-react';
import { SERVICE_DETAILS } from '@/data/serviceDetails';
import { Reveal, SectionHeading } from '@/components/ui';
import CtaBanner from '@/components/CtaBanner';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  AppWindow,
  ShoppingBag,
  Bot,
  Users,
  CalendarCheck,
  Ticket,
  Palette,
  Share2,
  TrendingUp,
  Server,
};

function CtaRow() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-paper-line pt-6">
      <Link
        to="/contact"
        className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
      >
        Start a Project
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      <Link
        to="/projects"
        className="text-sm font-medium text-ink-soft underline decoration-paper-line underline-offset-4 transition-colors hover:text-ink"
      >
        See related work
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="What we do" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
          Everything a business needs to go digital.
        </SectionHeading>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-mute">
            Eleven capabilities, one accountable team. Here is what each service involves, the
            problem it solves and what we deliver.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {SERVICE_DETAILS.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Server;
            return (
              <Reveal key={s.name} delay={0.04 * (i % 4)}>
                <article className="group rounded-3xl border border-paper-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-32px_rgba(16,16,18,0.18)] sm:p-10">
                  <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="lg:w-72 lg:shrink-0">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-tint">
                        <Icon className="h-5 w-5 text-accent" />
                      </span>
                      <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                        {s.name}
                      </h2>
                      <span className="mt-3 block font-display text-sm font-medium tabular-nums text-ink-mute">
                        {String(i + 1).padStart(2, '0')} / 11
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                            What it is
                          </p>
                          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.what}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                            The problem it solves
                          </p>
                          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.problem}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                            What we deliver
                          </p>
                          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.deliver}</p>
                        </div>
                      </div>
                      <CtaRow />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBanner
        heading="Not sure which service you need?"
        sub="Describe the problem — we'll recommend the simplest way to solve it."
        label="Discuss Your Idea"
      />
    </div>
  );
}
