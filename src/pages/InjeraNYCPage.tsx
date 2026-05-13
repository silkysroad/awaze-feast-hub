import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const InjeraNYCPage = () => {
  useSEO({
    title: 'Injera NYC — Fresh Ethiopian Injera at Awaze Harlem',
    description: 'Looking for injera in NYC? Awaze makes fresh Ethiopian injera in Harlem and serves it with tibs, doro wat, shiro, misir wat, veggie combos, and family platters.',
    canonical: 'https://awaze.nyc/injera-nyc',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main style={{ paddingTop: '64px' }}>
        <section style={{ background: '#1A1A1A', padding: '4rem 1.25rem 3.5rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Fresh Injera in NYC</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>Fresh Ethiopian<br />Injera in Harlem</h1>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9 }}>
              Injera is the heart of Ethiopian food: a soft, tangy sourdough flatbread made from teff flour. At Awaze in Harlem, injera is the foundation for our tibs, doro wat, shiro, misir wat, veggie combos, and family platters.
            </p>
          </div>
        </section>

        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.35rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>How to eat with injera</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Tear off a small piece, scoop up stew or sautéed meat, and eat it all in one bite. Injera is plate, utensil, and flavor all at once — the fermented tang balances rich berbere spice and buttery Ethiopian stews.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              First time trying Ethiopian food? Start with a signature plate or veggie combo. You’ll get a full spread of flavors on injera, built for sharing.
            </p>
            <Link to="/ethiopian-food-guide" style={{ display: 'inline-block', marginTop: '2rem', background: '#ED2E2E', color: '#FFFFFF', padding: '16px 24px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>Read the Ethiopian Food Guide →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InjeraNYCPage;
