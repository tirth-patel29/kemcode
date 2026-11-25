export type Project = {
  name: string;
  category: string;
  owner: 'Tirth Patel' | 'Het Patel' | 'Studio';
  img: string;
  tone: string;
  url?: string;
};

const TONE = {
  mint: 'bg-accent-tint',
  sand: 'bg-paper-sand',
  mist: 'bg-paper-mist',
} as const;

// Projects shown publicly on the Projects section + Projects page.
// Founder-based grouping has been intentionally removed in favour of a single unified portfolio.
export const FEATURED_PROJECTS: Project[] = [
  { name: 'ShareJadPi', category: 'Live project', owner: 'Studio', img: '/images/sharejadpi.jpg', tone: TONE.mint, url: 'https://sharejadpi.vercel.app/' },
  { name: 'Varni Holidays', category: 'Live project', owner: 'Studio', img: '/images/varniholidays.jpg', tone: TONE.sand, url: 'https://www.varnitours.com/' },
  { name: 'The Anand Cycling Club', category: 'Live project', owner: 'Studio', img: '/images/anandcycling.jpg', tone: TONE.mint, url: 'https://www.anandcycling.com/' },
  { name: 'Healing Home', category: 'Live project', owner: 'Studio', img: '/images/healinghome.jpg', tone: TONE.sand, url: 'https://healing-home-nishith.lovable.app/' },
  { name: 'Sahjanand Gate System', category: 'Live project', owner: 'Studio', img: '/images/sahjanandgate.jpg', tone: TONE.mist, url: 'https://sahjanandsmartgate.vercel.app/' },
  { name: 'Watch Together', category: 'Live project', owner: 'Studio', img: '/images/watchtogether.jpg', tone: TONE.mint, url: 'https://lesswatch-togetherr.vercel.app/' },
];

// Shared neutral placeholder used until real JPGs are supplied.
export const PLACEHOLDER_IMAGE =
  'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=900';
