# Project memory

## Product intent & audience

- Marketing/business website showcasing services, projects, and company info with a contact channel.
- Audience: potential clients exploring offerings, past work, and reaching out for enquiries.
- Built to be deploy-ready as a static/client-side app; no backend wired yet.

## Brand personality & voice

- Professional, polished, welcoming tone.
- Action-oriented CTAs with friendly phrasing (e.g. "Discuss Your Idea").
- User-friendly error states ("Page not found" with homepage return button).

## Visual design & UX direction

- Multi-page site: Home, Services, Projects, About, Contact, 404 catch-all.
- Homepage has services and projects overview sections that link into dedicated detail pages.
- Consistent closing CTA banner pattern across Services, About, and Projects pages.
- Icons via lucide-react; logos and UI icons from the same library.
- Tailwind CSS for styling; components kept production-quality, non-generic.
- 404 route prevents blank screens on unknown URLs.

## Decisions, constraints & rationale

- Vite + React + JSX; `@/` path alias maps to `src/`.
- No additional UI/theme/icon packages beyond lucide-react unless explicitly requested.
- Contact form stores submissions in browser only (localStorage); email or dashboard integration deferred to a future phase.
- Routing implemented with a catch-all for unknown paths.
- Phase 2 verified with a clean production build; site is deployment-ready in current state.

## Open questions & assumptions

- Contact form backend (email delivery or dashboard) is the identified next step — no provider chosen yet.
- Deployment target (host/platform) not specified.
- Routing library assumed to be react-router-dom (inferred from multi-page + catch-all pattern); confirm if not.
- No analytics, SEO metadata strategy, or form-validation requirements discussed yet.