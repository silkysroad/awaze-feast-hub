import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const DoroWatNYCPage = () => {
  useSEO({
    title: 'Doro Wat NYC — Ethiopian Chicken Stew at Awaze Harlem',
    description: 'Try doro wat in NYC at Awaze Ethiopian Cuisine in Harlem. Classic Ethiopian chicken stew with berbere, onions, warm spices, fresh injera, and seed-oil-free cooking.',
    canonical: 'https://awaze.nyc/doro-wat-nyc',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main style={{ paddingTop: '64px' }}>
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Classic Ethiopian Stew</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>Doro Wat<br />in NYC</h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Doro wat is Ethiopia’s iconic chicken stew — slow-cooked with onions, berbere, warm spices, and served with fresh injera. At Awaze in Harlem, our Ethiopian stews are cooked seed-oil-free with real butter and avocado oil.
            </p>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.35rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>What makes doro wat special?</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              The depth comes from slow-cooked onions, berbere spice, and niter kibbeh — Ethiopian spiced clarified butter. It is rich, warming, and built to be scooped with injera.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              If you want a lighter chicken option, try Fente Fire, our doro tibs plate. If you want the classic stew experience, order doro wat with injera and veggie sides.
            </p>
            <Link to="/menu" style={{ display: 'inline-block', marginTop: '2rem', background: '#ED2E2E', color: '#FFFFFF', padding: '16px 24px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>See the Menu →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoroWatNYCPage;
