import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hours } from '@/components/Hours';
import { useSEO } from '@/hooks/useSEO';

const HarlemEthiopianPage = () => {
  useSEO({
    title: 'Ethiopian Restaurant Harlem NYC — Awaze on Frederick Douglass Blvd',
    description: 'Awaze is a seed-oil-free Ethiopian restaurant in Harlem, NYC at 2288 Frederick Douglass Blvd. Dine in for fresh injera, awaze tibs, doro wat, veggie combos, tej, and Ethiopian coffee.',
    canonical: 'https://awaze.nyc/ethiopian-restaurant-harlem',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main style={{ paddingTop: '64px' }}>
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Harlem, NYC</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Ethiopian Restaurant<br />in Harlem
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Awaze Ethiopian Cuisine serves modern Ethiopian food at 2288 Frederick Douglass Blvd, between 128th and 129th Street. Come for fresh injera, bold berbere spice, lamb and beef tibs, doro wat, veggie platters, tej honey wine, and Ethiopian coffee — all cooked with avocado oil and real butter, never seed oils.
            </p>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.35rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>What to order at Awaze</h2>
            {[
              ['The Silk', 'Our signature awaze tibs plate: beef or lamb sautéed with berbere, onions, peppers, avocado oil, and butter.'],
              ['Doro Wat', 'A classic Ethiopian chicken stew slow-cooked with berbere, onions, and warm spices.'],
              ['Veggie Combo', 'Misir wat, shiro, gomen, atakilt, tikil gomen, and more — naturally vegan-friendly and built for sharing.'],
              ['Tej', 'Ethiopian honey wine, served by the glass or bottle.'],
            ].map(([name, desc]) => (
              <div key={name} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: '#1A1A1A', fontWeight: 700, marginBottom: '4px' }}>{name}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              <Link to="/menu" style={{ display: 'block', background: '#ED2E2E', color: '#FFFFFF', padding: '16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>See the Menu →</Link>
              <a href="https://maps.google.com/?q=2288+Frederick+Douglass+Blvd+New+York+NY+10027" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#1A1A1A', color: '#F5F0E8', padding: '16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>Get Directions →</a>
            </div>
          </div>
        </section>

        <Hours />
      </main>
      <Footer />
    </div>
  );
};

export default HarlemEthiopianPage;
