import { MARQUEE_PHRASES } from '@/data/content';
import { Asterisk } from 'lucide-react';

export default function Marquee() {
  const items = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];
  return (
    <section className="border-y border-paper-line bg-paper-sand py-5">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {items.map((phrase, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-ink-soft sm:text-xl">
                {phrase}
              </span>
              <Asterisk className="h-5 w-5 shrink-0 text-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
