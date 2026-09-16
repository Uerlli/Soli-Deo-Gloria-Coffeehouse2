import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/pages/home/components/HeroSection';
import ManifestoSection from '@/pages/home/components/ManifestoSection';
import PlaceSection from '@/pages/home/components/PlaceSection';
import CoffeeRitualSection from '@/pages/home/components/CoffeeRitualSection';
import MenuPreviewSection from '@/pages/home/components/MenuPreviewSection';
import GallerySection from '@/pages/home/components/GallerySection';
import ExperienceSection from '@/pages/home/components/ExperienceSection';
import VisitSection from '@/pages/home/components/VisitSection';
import InstagramSection from '@/pages/home/components/InstagramSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <PlaceSection />
        <CoffeeRitualSection />
        <MenuPreviewSection />
        <GallerySection />
        <ExperienceSection />
        <VisitSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}