export type ServiceDetail = {
  name: string;
  icon: string;
  what: string;
  problem: string;
  deliver: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    name: 'Website Design & Development',
    icon: 'Globe',
    what: 'A custom-designed website that fits your brand and works beautifully on every device — built for speed and easy to update.',
    problem: 'An outdated or slow website quietly drives customers away and makes a great business look less credible.',
    deliver: 'Design, development, hosting setup and launch — plus training so you can update content yourself.',
  },
  {
    name: 'Custom Software & Web Applications',
    icon: 'AppWindow',
    what: 'Web applications built around the way your business actually works, instead of forcing your team into off-the-shelf tools.',
    problem: 'Spreadsheets and generic software create busywork, errors and limits as your business grows.',
    deliver: 'From first prototype to a working product: planning, design, development and ongoing support.',
  },
  {
    name: 'E-commerce Development',
    icon: 'ShoppingBag',
    what: 'An online store with a clean catalogue and a smooth, trustworthy checkout — ready to take orders from day one.',
    problem: 'A clunky buying experience loses customers at the exact moment they decided to pay you.',
    deliver: 'Store design, product setup, payment integration and the tools to manage orders yourself.',
  },
  {
    name: 'AI & Workflow Automation',
    icon: 'Bot',
    what: 'Intelligent automations that handle repetitive tasks — data entry, document processing, notifications and follow-ups.',
    problem: 'Your team spends hours every week on manual work that software could do faster and without mistakes.',
    deliver: 'An audit of your current workflows, then built-and-tested automations that slot into your day to day.',
  },
  {
    name: 'CRM & Business Management Systems',
    icon: 'Users',
    what: 'One central system for customers, leads and operations — tailored to how you sell and serve.',
    problem: 'Customer information scattered across inboxes and spreadsheets means dropped leads and missed follow-ups.',
    deliver: 'A tailored system with the views, pipelines and reports your team needs — no licence bloat.',
  },
  {
    name: 'Event Management & Registration Platforms',
    icon: 'CalendarCheck',
    what: 'A platform for your event: registrations, attendee lists, schedules and communication in one place.',
    problem: 'Manual registration and coordination turns event organising into a wall of spreadsheets and group chats.',
    deliver: 'A branded registration site, organiser dashboard and automated attendee communication.',
  },
  {
    name: 'Event Ticketing & Booking Solutions',
    icon: 'Ticket',
    what: 'Reliable ticketing and booking flows — from paid tickets and QR check-in to appointments and slots.',
    problem: 'Third-party booking tools take a cut of every sale and rarely match your event or brand.',
    deliver: 'Custom ticketing or booking with payments, confirmations and entry-day check-in tooling.',
  },
  {
    name: 'Branding & Graphic Design',
    icon: 'Palette',
    what: 'Logos, visual identities and everyday design assets that make your business look consistent and premium.',
    problem: 'Inconsistent visuals make a capable business forgettable — or worse, untrustworthy.',
    deliver: 'Identity design, brand guidelines and the practical assets you need across print and digital.',
  },
  {
    name: 'Social Media Management',
    icon: 'Share2',
    what: 'Well-designed, consistent posts and account handling across your channels — planned and published for you.',
    problem: 'Social media keeps slipping to the bottom of the list, so your channels go quiet for weeks.',
    deliver: 'A content plan, on-brand designs and regular publishing you can actually keep up with.',
  },
  {
    name: 'Digital Marketing & SEO',
    icon: 'TrendingUp',
    what: 'Helping the right people find you: search-friendly pages, clear messaging and measurable campaigns.',
    problem: 'You do great work, but customers searching for it find your competitors first.',
    deliver: 'Search optimisation, campaign setup and simple reporting so you know what is working.',
  },
  {
    name: 'Technical Integrations & Infrastructure',
    icon: 'Server',
    what: 'Connecting your tools, setting up hosting and domains, and keeping the technical foundation solid.',
    problem: 'Tools that do not talk to each other and fragile setups cost time and cause outages.',
    deliver: 'API integrations, hosting and domain setup, and reliable infrastructure you never have to think about.',
  },
];
