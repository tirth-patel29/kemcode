import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className = '',
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-mute">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-5xl lg:text-6xl">
          {children}
        </h2>
      </Reveal>
    </div>
  );
}
