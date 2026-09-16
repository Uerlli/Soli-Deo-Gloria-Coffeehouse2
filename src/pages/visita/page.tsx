import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function VisitaPage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="05 — Visita"
        title="A parte que nenhum site substitui."
        description="Mapa, horários, contato e tudo o que você precisa antes de subir a serra — reunidos em um só lugar."
      />
      <Footer />
    </div>
  );
}