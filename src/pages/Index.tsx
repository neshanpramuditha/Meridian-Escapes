import { Navbar } from '@/components/Navbar';
import { Hero3D } from '@/components/Hero3D';
import { TopTours } from '@/components/TopTours';
import { PopularPackages } from '@/components/PopularPackages';
import { StatsSection } from '@/components/StatsSection';
import { SpecialOffers } from '@/components/SpecialOffers';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero3D />
      <TopTours />
      <PopularPackages />
      <StatsSection />
      <SpecialOffers />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
