import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '@/components/ui';
import FounderProfiles from '@/components/FounderProfiles';
import { Code2, Cpu, Server } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Web, mobile and custom software',
  },
  {
    icon: Cpu,
    title: 'Automation',
    desc: 'AI workflows and integrations',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    desc: 'Self-hosted home-lab experience',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="About the studio">
              A studio built by two engineers who ship.
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-mute">
                KEMCODE is a technology and digital solutions studio founded by two equal
                co-founders — Tirth Patel and Het Patel. We design, develop and build digital
                solutions that solve real business problems, working as true partners from the first
                conversation to launch.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {CAPABILITIES.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-paper-line bg-paper p-5">
                    <c.icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-sm font-medium text-ink">{c.title}</p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-mute">{c.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-paper-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                Read our full story
              </Link>
            </Reveal>
          </div>

          <FounderProfiles />
        </div>
      </div>
    </section>
  );
}
