import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui';

export default function CtaBanner({
  heading,
  sub,
  label = 'Start a Project',
}: {
  heading: string;
  sub: string;
  label?: string;
}) {
  return (
    <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-white sm:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/70">{sub}</p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-paper-mist"
            >
              {label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
