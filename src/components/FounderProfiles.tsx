import { Reveal } from '@/components/ui';
import { FOUNDERS } from '@/data/founders';

function FounderCard({
  name,
  role,
  bio,
  focus,
  delay,
}: {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-3xl border border-paper-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-32px_rgba(16,16,18,0.2)] sm:p-9">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink font-display text-lg font-semibold text-white">
          {name
            .split(' ')
            .map((w) => w[0])
            .join('')}
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-accent">{role}</p>
        <p className="mt-4 flex-1 leading-relaxed text-ink-mute">{bio}</p>
        <div className="mt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">Focus</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {focus.map((s) => (
              <span
                key={s}
                className="rounded-full border border-paper-line px-3 py-1.5 text-[13px] text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FounderProfiles() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {FOUNDERS.map((f, i) => (
          <FounderCard key={f.name} {...f} delay={0.08 * i} />
        ))}
      </div>
    </div>
  );
}
