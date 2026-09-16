import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function ExperienciaPage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="04 — Experiência"
        title="O café como ponto de encontro."
        description="Degustações, encontros e celebrações discretas — a página da experiência está a caminho."
      />
      <Footer />
    </div>
  );
}