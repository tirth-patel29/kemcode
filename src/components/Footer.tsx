import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper-line bg-paper-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <Link to="/" className="font-display text-2xl font-semibold tracking-tightest text-ink">
              KEMCODE<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-mute">
              A premium technology and digital solutions studio. Ideas into digital reality.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-paper-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-mute">
            © {new Date().getFullYear()} KEMCODE. All rights reserved.
          </p>
          <p className="text-[13px] text-ink-mute">Founded by Tirth Patel &amp; Het Patel</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line bg-paper text-ink transition-colors hover:border-ink"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
