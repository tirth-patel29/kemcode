import { Reveal, SectionHeading } from '@/components/ui';
import CtaBanner from '@/components/CtaBanner';
import FounderProfiles from '@/components/FounderProfiles';
import { Code2, Cpu, Server, Compass, Heart, Puzzle } from 'lucide-react';

const VALUES = [
  {
    icon: Compass,
    title: 'Problems first, tools second',
    desc: 'We start from the business problem, not the tech stack. The right tool is the one that solves your problem cleanly.',
  },
  {
    icon: Heart,
    title: 'Craft in every detail',
    desc: 'Design, code and communication should all feel considered. We care about the small things because they add up.',
  },
  {
    icon: Puzzle,
    title: 'Build, run, maintain',
    desc: 'We ship systems we know how to run, because we run our own. Delivery is the start, not the finish line.',
  },
];

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Web, mobile and custom software built end to end.',
  },
  {
    icon: Cpu,
    title: 'Automation',
    desc: 'AI workflows, integrations and intelligent pipelines.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    desc: 'Hosting, self-hosting and the systems that keep things online.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36">
      {/* Story & vision */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our story" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
          A studio built by two engineers who ship.
        </SectionHeading>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-mute">
            KEMCODE is a technology-first digital solutions studio founded by two equal
            co-founders, Tirth Patel and Het Patel. We design, develop and build digital products
            that solve real business problems — working as true partners from the first
            conversation to launch, and beyond.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-paper-line bg-paper p-6">
                <c.icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-medium text-ink">{c.title}</p>
                <p className="mt-1 text-[13px] leading-snug text-ink-mute">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* What we believe in */}
      <section className="border-y border-paper-line bg-paper-sand mt-20 py-20 sm:mt-28 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we believe in" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
            Clear thinking, honest work.
          </SectionHeading>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="group h-full rounded-3xl border border-paper-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-32px_rgba(16,16,18,0.18)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-tint">
                    <v.icon className="h-5 w-5 text-accent" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-mute">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our approach">
              Solve the business problem, not just the brief.
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-mute">
                Every engagement starts with understanding: your goals, your users and the real
                problem behind the request. From there we design the simplest thing that solves it,
                build it with modern, maintainable technology, and stay involved as it runs in the
                real world.
              </p>
            </Reveal>
          </div>
          <div className="space-y-4">
            {[
              ['01', 'Listen and map', 'We dig into how your business actually works before proposing anything.'],
              ['02', 'Design the simplest fix', 'The smallest well-crafted solution that solves the real problem.'],
              ['03', 'Build with care', 'Modern, maintainable code — with working previews, not slide decks.'],
              ['04', 'Run and improve', 'Launch is day one. We keep iterating as your business grows.'],
            ].map(([num, title, desc], i) => (
              <Reveal key={num} delay={0.06 * i}>
                <div className="flex gap-5 rounded-2xl border border-paper-line bg-paper p-6">
                  <span className="font-display text-sm font-medium tabular-nums text-accent">
                    {num}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">{title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-mute">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-paper-line bg-paper-sand py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="The founders" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
            Two equal partners, one shared standard.
          </SectionHeading>
          <div className="mt-14">
            <FounderProfiles />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to build something together?"
        sub="Tell us about your project — we'll map the simplest path from idea to a working product."
        label="Discuss Your Idea"
      />
    </div>
  );
}
