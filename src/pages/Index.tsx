import { Navbar } from '@/components/Navbar';
import { HeroBubbles } from '@/components/HeroBubbles';
import { TopTours } from '@/components/TopTours';
import { PopularPackages } from '@/components/PopularPackages';
import { StatsSection } from '@/components/StatsSection';
import { SpecialOffers } from '@/components/SpecialOffers';
import { MapSection } from '@/components/MapSection';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBubbles />
      <TopTours />
      <PopularPackages />
      <StatsSection />
      <SpecialOffers />
      <MapSection />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
