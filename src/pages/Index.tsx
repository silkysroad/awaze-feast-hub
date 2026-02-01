import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { Photos } from '@/components/Photos';
import { Hours } from '@/components/Hours';
import { InjeraOrder } from '@/components/InjeraOrder';
import { Reservations } from '@/components/Reservations';
import { Reviews } from '@/components/Reviews';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Photos />
      <Hours />
      <InjeraOrder />
      <Reservations />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
