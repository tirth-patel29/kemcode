import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import WhyKemcode from '@/components/WhyKemcode';
import ContactCta from '@/components/ContactCta';

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <Services />
      <Projects />
      <Process />
      <WhyKemcode />
      <ContactCta />
    </>
  );
}

export default HomePage;
