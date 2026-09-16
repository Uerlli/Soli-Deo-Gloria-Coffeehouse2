import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function SobrePage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="Sobre"
        title="A história do Projeto Soli Deo Gloria."
        description="Como o café nasceu dentro do projeto, o que guia cada escolha e o que queremos que você sinta ao chegar."
      />
      <Footer />
    </div>
  );
}