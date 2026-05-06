import { Header } from '@/components/Header';
import { Hours } from '@/components/Hours';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: 'About Awaze — Seed Oil Free Ethiopian Restaurant in Harlem NYC',
    description: 'Awaze is a Black-owned, seed-oil-free Ethiopian restaurant in Harlem, NYC. Every dish cooked in avocado oil and butter. Dine-in, delivery, and catering at 2288 Frederick Douglass Blvd.',
    canonical: 'https://awaze.nyc/about',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Our Story</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Ethiopian Food,<br />Done Right.
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Awaze is a Black-owned Ethiopian restaurant in the heart of Harlem. We opened our doors on Frederick Douglass Boulevard with a simple mission: serve the food we grew up eating, made with ingredients we actually trust.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              That means every single dish — from our signature Awaze Tibs to our slow-cooked Doro Wat — is prepared with avocado oil, real butter, and Ethiopian spices. No canola. No soybean. No seed oils. Ever.
            </p>
          </div>
        </section>

        {/* Seed Oil Free Section */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>100% Seed Oil Free</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Clean Cooking.<br />No Compromises.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'What We Use', text: 'Cold-pressed avocado oil for sautéing. Real grass-fed butter and niter kibbeh (Ethiopian spiced clarified butter) for stews and sauces. Olive oil for salads.' },
                { label: 'What We Don\'t', text: 'No canola oil. No soybean oil. No vegetable oil. No sunflower oil. No corn oil. No seed oils of any kind — not in our kitchen, not in our supply chain.' },
                { label: 'Why It Matters', text: 'We believe the oil you cook with matters as much as the spices you season with. Ethiopian food is rich, communal, and meant to nourish. We honor that by keeping our ingredients clean.' },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.8 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Ethiopian Food */}
        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>The Experience</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              How Ethiopian<br />Dining Works
            </h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Ethiopian food is communal by design. Dishes arrive on a shared platter lined with injera — a soft, spongy sourdough flatbread made from teff flour. You tear off pieces of injera and use them to scoop up stews, sautéed meats, and vegetables. No utensils needed.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              It's tactile, social, and unlike any other dining experience. First-timers love it. Regulars crave it.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Our injera is made fresh in-house from teff — naturally gluten-friendly and fermented for that signature tang. Every plate is designed to share, but we won't judge if you keep the Awaze Tibs to yourself.
            </p>
          </div>
        </section>

        {/* Harlem */}
        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Harlem, NYC</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              2288 Frederick<br />Douglass Blvd
            </h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              We're in the heart of Harlem, between 128th and 129th Street on Frederick Douglass Boulevard. Whether you're coming from uptown, downtown, or across the bridge — you're welcome at our table.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Dine in with us, order delivery through Uber Eats, DoorDash, or GrubHub, or <a href="/catering" style={{ color: '#ED2E2E', textDecoration: 'underline' }}>book us for your next event</a>.
            </p>
          </div>
        </section>

        <Hours />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
