import { Header } from '@/components/Header';
import { Hours } from '@/components/Hours';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: 'About Awaze — Seed Oil Free Ethiopian Restaurant in Harlem NYC',
    description: 'Awaze is a Black-owned, seed-oil-free Ethiopian restaurant in Harlem, NYC. Every dish cooked in avocado oil and butter. Dine-in, delivery, and catering. 2288 Frederick Douglass Blvd.',
    canonical: 'https://awaze.nyc/about',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">

        {/* Hero */}
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>About</p>
          <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Harlem's Seed Oil Free<br />Ethiopian Kitchen
          </h1>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.9, maxWidth: '560px' }}>
            Awaze is a Black-owned Ethiopian restaurant on Frederick Douglass Boulevard in Harlem.
            We opened in 2024 with one rule: cook everything the way it should be cooked.
            That means avocado oil, real butter, and spices from Ethiopia. No canola. No soybean. No seed oils — ever.
          </p>
        </section>

        {/* Philosophy */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '560px' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Why Seed Oil Free</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Because the Oil Matters
            </h2>
            <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Most restaurants cook with cheap seed oils — canola, soybean, vegetable blends.
              They're everywhere because they're cheap, not because they're good.
            </p>
            <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              We use avocado oil for sautéing, real butter for richness, and niter kibbeh — Ethiopian spiced clarified butter — for depth.
              It costs more. It tastes better. And you can feel the difference.
            </p>
            <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.9 }}>
              Every single dish at Awaze is seed oil free. Not some of the menu. Not "upon request." All of it, all the time.
              That's the standard.
            </p>
          </div>
        </section>

        {/* The Food */}
        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '560px' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>The Food</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Ethiopian, the Right Way
            </h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Injera made in-house from teff. Berbere and mitmita ground from whole spices.
              Tibs seared to order. Stews slow-cooked until they're right.
            </p>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Ethiopian food is communal by nature — one spread, everyone eats together, hands and injera.
              It's how food is meant to be shared.
            </p>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9 }}>
              We also serve Jamaican-Ethiopian patties — a Harlem-born collaboration.
              Lamb awaze, curry goat, jerk chicken, and plant-based options. All baked in-house, all seed oil free.
            </p>
          </div>
        </section>

        {/* Community */}
        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '560px' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Community</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Harlem Roots
            </h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              We're on Frederick Douglass Boulevard, between 128th and 129th. Harlem is home.
              When you eat at Awaze, you're supporting a family-run, independent restaurant
              that puts quality over shortcuts.
            </p>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9 }}>
              We cater corporate events, weddings, film sets, and private parties across New York City.
              Same food, same standards, wherever we go.
            </p>
          </div>
        </section>

        {/* Hours & Location */}
        <Hours />

      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
