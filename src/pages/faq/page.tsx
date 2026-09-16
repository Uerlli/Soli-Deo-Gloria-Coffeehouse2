import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PagePlaceholder from '@/components/feature/PagePlaceholder';

export default function FaqPage() {
  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />
      <PagePlaceholder
        label="FAQ"
        title="Perguntas frequentes."
        description="Horários, formas de pagamento, estacionamento, acessibilidade e eventos — respondidos de forma direta."
      />
      <Footer />
    </div>
  );
}