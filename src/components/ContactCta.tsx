import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui';

export default function ContactCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="contact" ref={ref} className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center sm:px-12 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
          />
          <motion.div
            style={{ y }}
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl"
          />

          <div className="relative">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              Let&rsquo;s work together
            </p>
            <h2 className="text-balance mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-white sm:text-6xl lg:text-7xl">
              Have an idea? Let&rsquo;s make it digital reality.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">
              Tell us about your project — a website, a platform, an automation or a brand. We
              reply personally, usually within a day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-paper-mist sm:w-auto"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/50">
              Tirth Patel &amp; Het Patel — Co-founders, KEMCODE
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
