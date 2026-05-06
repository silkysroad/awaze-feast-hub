import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const SeedOilFreePage = () => {
  useSEO({
    title: 'Seed Oil Free Ethiopian Restaurant NYC — Awaze | Harlem',
    description: 'Awaze is NYC\'s only seed-oil-free Ethiopian restaurant. Every dish cooked in avocado oil and real butter — no canola, soybean, or vegetable oil. Dine-in and delivery in Harlem.',
    canonical: 'https://awaze.nyc/seed-oil-free',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#1A1A1A', padding: '4rem 1.25rem 3.5rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>100% Seed Oil Free</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              NYC's Only Seed Oil Free<br />Ethiopian Restaurant
            </h1>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              At Awaze, we believe the oil you cook with matters as much as the spices you season with. That's why every single dish in our kitchen — from our signature Awaze Tibs to our slow-simmered Doro Wat — is prepared exclusively with avocado oil and real butter.
            </p>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9 }}>
              No canola oil. No soybean oil. No vegetable oil. No sunflower oil. No corn oil. No seed oils of any kind — not in our kitchen, not in our supply chain, not ever.
            </p>
          </div>
        </section>

        {/* What We Use */}
        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1.5rem' }}>What We Cook With</p>
            {[
              { name: 'Avocado Oil', desc: 'Cold-pressed avocado oil for all sautéing and high-heat cooking. High smoke point, clean flavor, packed with monounsaturated fats.' },
              { name: 'Real Butter & Niter Kibbeh', desc: 'Traditional Ethiopian spiced clarified butter — infused with turmeric, cardamom, fenugreek, and other aromatics. The backbone of Ethiopian cooking done right.' },
              { name: 'Olive Oil', desc: 'Extra virgin olive oil for salads and cold preparations. Simple, clean, no compromise.' },
            ].map(item => (
              <div key={item.name} style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Don't Use */}
        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>What You'll Never Find in Our Kitchen</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
              {['Canola Oil', 'Soybean Oil', 'Vegetable Oil', 'Sunflower Oil', 'Corn Oil', 'Safflower Oil', 'Cottonseed Oil', 'Rice Bran Oil'].map(oil => (
                <div key={oil} style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', padding: '10px 14px', background: '#f8f4f0', color: '#999', textDecoration: 'line-through' }}>
                  {oil}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Most restaurants — including most Ethiopian restaurants — cook with cheap seed oils because they're inexpensive. We made a different choice. We pay more for better oils because our food and our community deserve better ingredients.
            </p>
          </div>
        </section>

        {/* Why Ethiopian + Seed Oil Free */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Why Ethiopian Food & Clean Oils Are a Natural Fit</p>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Ethiopian cuisine has always been about real, whole ingredients. Berbere spice blends passed down through generations. Teff grain fermented into injera. Niter kibbeh — spiced butter — that takes hours to prepare. The food was clean long before "clean eating" was a trend.
            </p>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Swapping in seed oils breaks that tradition. We keep it intact. Every dish at Awaze tastes the way Ethiopian food is supposed to taste — because we use the ingredients it was designed to be cooked with.
            </p>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.9 }}>
              Our injera is made fresh in-house from teff flour — naturally gluten-friendly. Our stews are slow-simmered with real spices. Our tibs are sautéed in avocado oil. No shortcuts. No seed oils. Just honest food.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem' }}>Taste the Difference</h2>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Come see what Ethiopian food tastes like when it's cooked the way it was meant to be. Dine in at our Harlem location or order delivery.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/menu" style={{ display: 'block', background: '#ED2E2E', color: '#FFFFFF', padding: '16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                View Our Menu →
              </Link>
              <Link to="/catering" style={{ display: 'block', background: '#1A1A1A', color: '#F5F0E8', padding: '16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                Book Catering →
              </Link>
            </div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#999', marginTop: '1.5rem' }}>
              2288 Frederick Douglass Blvd · Harlem, NYC<br />
              <a href="tel:+19176393112" style={{ color: '#ED2E2E' }}>(917) 639-3112</a>
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default SeedOilFreePage;
