import { Header } from '@/components/Header';
import { Catering } from '@/components/Catering';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const CateringPage = () => {
  useSEO({
    title: 'Ethiopian Catering NYC — Awaze | Seed Oil Free Catering New York',
    description: 'Awaze brings seed-oil-free Ethiopian feasts to your event in NYC. Communal dining, injera made in-house from teff, cooked in avocado oil and butter. Corporate lunches, weddings, film sets. Starting at $38/person.',
    canonical: 'https://awaze.nyc/catering',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Catering />
      </div>
      <Footer />
    </div>
  );
};

export default CateringPage;
