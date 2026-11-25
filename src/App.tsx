import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';

const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'KEMCODE — Ideas Into Digital Reality',
    description:
      'KEMCODE is a premium technology and digital solutions studio. We design, develop and build digital solutions that solve real business problems.',
  },
  '/about': {
    title: 'About — KEMCODE',
    description:
      'Meet KEMCODE: a technology-first digital studio founded by equal co-founders Tirth Patel and Het Patel.',
  },
  '/services': {
    title: 'Services — KEMCODE',
    description:
      'Websites, custom software, e-commerce, AI automation, CRM systems, event platforms, branding, marketing and infrastructure.',
  },
  '/projects': {
    title: 'Projects — KEMCODE',
    description:
      'Selected projects by KEMCODE co-founders Tirth Patel and Het Patel, across web, mobile, automation and events.',
  },
  '/contact': {
    title: 'Contact — KEMCODE',
    description:
      'Have a project in mind? Tell us what you are planning and how KEMCODE can help turn your idea into reality.',
  },
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const meta = META[pathname] ?? META['/'];
    document.title = meta.title;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = meta.description;
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center sm:px-8">
      <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest text-ink sm:text-6xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-ink-mute">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
      >
        Back to Home
      </Link>
    </div>
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <RouteEffects />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
