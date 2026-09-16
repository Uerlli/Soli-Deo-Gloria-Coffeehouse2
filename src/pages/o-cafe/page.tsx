import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function OoCafePage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="02 — O Café"
        title="Cada xícara começa muito antes da xícara."
        description="Origem, torra e preparo ganham uma página própria. Microlotes, produtores parceiros e o ritual por trás de cada dose."
      />
      <Footer />
    </div>
  );
}