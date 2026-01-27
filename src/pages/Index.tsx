import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { Hours } from '@/components/Hours';
import { InjeraOrder } from '@/components/InjeraOrder';
import { Reservations } from '@/components/Reservations';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Hours />
      <InjeraOrder />
      <Reservations />
      <Footer />
    </div>
  );
};

export default Index;
