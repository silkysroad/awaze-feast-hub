import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const DeliveryPage = () => {
  useSEO({
    title: 'Ethiopian Food Delivery Harlem NYC — Awaze | Uber Eats, DoorDash, GrubHub',
    description: 'Order Awaze Ethiopian food for delivery in Harlem and NYC. Available on Uber Eats, DoorDash, and GrubHub. Seed oil free — every dish cooked in avocado oil and butter.',
    canonical: 'https://awaze.nyc/delivery',
  });

  const platforms = [
    { name: 'Uber Eats', url: 'https://www.ubereats.com/store/awaze-ethiopian-cuisine/bba7cebe-c3c6-4365-9598-70bf2dbee221', color: '#06C167' },
    { name: 'DoorDash', url: 'https://www.doordash.com/store/awaze-ethiopian-cuisine-new-york-30388613', color: '#FF3008' },
    { name: 'GrubHub', url: 'https://www.grubhub.com/restaurant/awaze-ethiopian-cuisine-2288-frederick-douglass-blvd-new-york/8686336', color: '#F63440' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Delivery</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Ethiopian Food<br />Delivered to You
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Get Awaze delivered anywhere in Harlem and Upper Manhattan. Same seed-oil-free cooking, same fresh injera, same bold flavors — straight to your door.
            </p>
          </div>
        </section>

        {/* Order Buttons */}
        <section style={{ background: '#FFFFFF', padding: '3rem 1.25rem' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginBottom: '1.5rem', textAlign: 'center' }}>Order Now</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {platforms.map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', background: '#1A1A1A', color: '#F5F0E8', padding: '18px',
                  fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.1em',
                  textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, textAlign: 'center',
                  borderLeft: `4px solid ${p.color}`,
                }}>
                  Order on {p.name} →
                </a>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>
              Delivery hours match our restaurant hours. Fees and minimums set by each platform.
            </p>
          </div>
        </section>

        {/* What to Order for Delivery */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Best for Delivery</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '1.5rem' }}>What to Order</h2>
            {[
              { name: 'Signature Combos', desc: 'Our most popular delivery order. One protein + classic sides, served with injera. The Lalibela (beef/lamb) and Veggie combos are the top sellers.' },
              { name: 'Awaze Family Platter', desc: 'Feeding the household? One protein + five sides + injera for $50. Enough for 2-3 people.' },
              { name: 'Sambusas', desc: 'Crispy pastry filled with spiced beef or lentils. They travel well and make a great appetizer or snack.' },
              { name: 'Build Your Own Plate', desc: 'Pick your protein and three sides. Customize it exactly how you want.' },
            ].map(item => (
              <div key={item.name} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', fontWeight: 700, color: '#F5F0E8', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seed Oil Free Note */}
        <section style={{ background: '#F5F0E8', padding: '3rem 1.25rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '0.75rem' }}>100% Seed Oil Free</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
              Every delivery order is cooked with the same avocado oil and real butter we use for dine-in. No seed oils, no exceptions — even when it's going in a bag.
            </p>
          </div>
        </section>

        {/* Hours + Location */}
        <section style={{ background: '#FFFFFF', padding: '3rem 1.25rem' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>Delivery Hours</p>
            <div style={{ fontSize: '14px', color: '#555', lineHeight: 2 }}>
              <p>Monday: 6PM – 10PM</p>
              <p>Tuesday: 5PM – 10PM</p>
              <p>Wednesday – Thursday: 5PM – 10PM</p>
              <p>Friday: 4PM – 10PM</p>
              <p>Saturday: 12PM – 10PM</p>
              <p>Sunday: 1PM – 10PM</p>
            </div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#999', marginTop: '1.5rem' }}>
              Delivering from 2288 Frederick Douglass Blvd · Harlem, NYC
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default DeliveryPage;
