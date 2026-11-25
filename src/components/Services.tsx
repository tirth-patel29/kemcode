import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { Reveal, SectionHeading } from '@/components/ui';

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="scroll-mt-24 border-y border-paper-line bg-paper-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Agency services">
            Everything a business needs to go digital.
          </SectionHeading>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-ink-mute">
              Eleven capabilities, one accountable team — from your first landing page to a fully
              automated operation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-paper-line bg-paper">
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <div
                  key={s.name}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer border-b border-paper-line last:border-b-0 transition-colors duration-300 ${
                    isActive ? 'bg-paper-sand/60' : 'bg-paper'
                  }`}
                >
                  <div className="flex items-center gap-5 px-6 py-6 sm:gap-8 sm:px-10">
                    <span
                      className={`font-display text-sm font-medium tabular-nums transition-colors ${
                        isActive ? 'text-accent' : 'text-ink-mute'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`flex-1 font-display text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${
                        isActive ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {s.name}
                    </h3>
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive ? 'translate-x-0 text-accent opacity-100' : '-translate-x-2 text-ink-mute opacity-0'
                      }`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl px-6 pb-6 pl-[3.75rem] leading-relaxed text-ink-mute sm:px-10 sm:pl-[4.75rem]">
                          {s.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-paper-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              Explore all services in detail
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
