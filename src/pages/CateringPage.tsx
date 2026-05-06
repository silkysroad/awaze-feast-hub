import { Header } from '@/components/Header';
import { Catering } from '@/components/Catering';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const CateringPage = () => {
  useSEO({
    title: 'Ethiopian Catering NYC — Awaze | Seed Oil Free Catering New York',
    description: 'Book Awaze for your next event. Seed-oil-free Ethiopian catering in NYC — corporate lunches, weddings, film sets, private parties. Packages from $38/person. Cooked in avocado oil and butter.',
    canonical: 'https://awaze.nyc/catering',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ paddingTop: '64px' }}>
        <Catering />
      </div>
      <Footer />
    </div>
  );
};

export default CateringPage;
