import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function OoLugarPage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="01 — O Lugar"
        title="Arquitetura que respira com a natureza."
        description="A página completa do espaço está chegando: a matéria, a luz que muda hora a hora, o terraço e a mata ao redor."
      />
      <Footer />
    </div>
  );
}