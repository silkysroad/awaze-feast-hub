import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const MenuPage = () => {
  useSEO({
    title: 'Menu — Awaze Ethiopian Cuisine | Seed Oil Free Ethiopian Food Harlem NYC',
    description: 'Full menu for Awaze Ethiopian Cuisine in Harlem. Signature plates, build-your-own combos, appetizers, Ethiopian coffee by Buunni, and Jamaican-Ethiopian patties. Every dish cooked in avocado oil and butter — no seed oils ever.',
    canonical: 'https://awaze.nyc/menu',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
