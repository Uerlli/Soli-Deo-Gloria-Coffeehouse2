import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function CardapioPage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="03 — Cardápio"
        title="Do simples do dia ao detalhe que fica."
        description="O cardápio completo, por categoria, com tudo o que é servido na casa e o que muda com a estação."
      />
      <Footer />
    </div>
  );
}