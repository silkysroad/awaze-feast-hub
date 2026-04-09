const packages = [
  { name: 'The Spread', price: '$38', unit: 'per person', min: '10 guest minimum', includes: ['2 proteins (beef, lamb, or chicken)', '4 sides & stews', 'Injera — made in-house from teff', 'Serving trays & setup'], ideal: 'Office lunches · Small gatherings · Birthday dinners', featured: false },
  { name: 'The Full Table', price: '$52', unit: 'per person', min: '15 guest minimum', includes: ['3 proteins', '5 sides & stews', 'Injera — made in-house from teff', 'Sambusas to start', 'Serving trays & setup'], ideal: 'Corporate events · Private parties · Baby showers', featured: true },
  { name: 'The Feast', price: '$68', unit: 'per person', min: '25 guest minimum', includes: ['4 proteins', '6 sides & stews', 'Injera — made in-house from teff', 'Sambusas to start', 'Homemade Baklava dessert', 'Ethiopian Honey Wine (Tej)', 'Serving trays, setup & breakdown'], ideal: 'Weddings · Film & photo sets · Cultural events', featured: false },
];

const addons = [
  { name: 'Gluten-Free Injera', price: '+$3 / person' },
  { name: 'Extra Protein', price: '+$8 / person' },
  { name: 'Ethiopian Honey Wine (Tej)', price: '+$9 / person' },
  { name: 'Delivery & Setup (within 10 miles)', price: '+$150 flat' },
  { name: 'On-Site Staff', price: '+$45 / hour' },
];

export function Catering() {
  return (
    <section id="catering" style={{ background: '#F5F0E8' }}>

      {/* HEADER */}
      <div style={{ padding: '3.5rem 1.25rem 2.5rem' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Catering</p>
        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 9vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Feed the Room.<br />Feed it Right.
        </h2>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, maxWidth: '500px' }}>
          Awaze brings full Ethiopian feasts to your event — communal, striking, and unlike anything else in the room.
          Every dish cooked in avocado oil and butter. <strong>No seed oils. Ever.</strong>
        </p>
      </div>

      {/* PACKAGES — stacked on mobile */}
      <div style={{ padding: '0 0 2.5rem' }}>
        {packages.map(pkg => (
          <div key={pkg.name} style={{
            margin: '0 1.25rem 1rem',
            background: pkg.featured ? '#1A1A1A' : '#FFFFFF',
            color: pkg.featured ? '#F5F0E8' : '#1A1A1A',
            borderTop: '4px solid #ED2E2E',
            padding: '1.75rem',
          }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '6px' }}>{pkg.min}</p>
            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.6rem', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }}>{pkg.name}</h3>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.75rem', fontWeight: 700, color: '#ED2E2E', marginBottom: '12px' }}>
              {pkg.price} <span style={{ fontSize: '0.65rem', fontWeight: 400, color: pkg.featured ? '#888' : '#777' }}>{pkg.unit}</span>
            </p>
            <div style={{ width: '20px', height: '2px', background: '#ED2E2E', marginBottom: '12px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px' }}>
              {pkg.includes.map(item => (
                <li key={item} style={{ fontSize: '13px', color: pkg.featured ? '#aaa' : '#666', lineHeight: 1.8 }}>
                  <span style={{ color: '#ED2E2E', marginRight: '6px' }}>—</span>{item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '12px', fontStyle: 'italic', color: pkg.featured ? '#555' : '#999', paddingTop: '12px', borderTop: `1px dotted ${pkg.featured ? '#333' : '#e0e0e0'}` }}>
              {pkg.ideal}
            </p>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1.25rem 2rem' }}>
        <div style={{ flex: 1, height: '1px', background: '#d8d0c8' }} />
        <span style={{ fontFamily: "'Space Mono', monospace", color: '#ED2E2E', fontSize: '14px' }}>✦</span>
        <div style={{ flex: 1, height: '1px', background: '#d8d0c8' }} />
      </div>

      {/* ADD-ONS */}
      <div style={{ padding: '0 1.25rem 3rem' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>Add-Ons</p>
        {addons.map(item => (
          <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid #e0d8d0', fontSize: '14px' }}>
            <span style={{ color: '#1A1A1A', paddingRight: '1rem' }}>{item.name}</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#ED2E2E', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
          </div>
        ))}
      </div>

      {/* WHY AWAZE */}
      <div style={{ background: '#1A1A1A', padding: '3rem 1.25rem' }}>
        {[
          { title: 'Seed Oil Free', body: 'Every dish cooked in avocado oil, butter & love. No canola. No soybean. No seed oils — ever. The cleanest Ethiopian food in New York.' },
          { title: 'Made for Sharing', body: 'Ethiopian food is communal by design. One spread, everyone eats together. It breaks the ice, starts conversations, and makes any event memorable.' },
          { title: 'Harlem Roots', body: "We're a Black-owned restaurant in Harlem. When you book Awaze, you're supporting independent hospitality and a kitchen that actually gives a damn." },
        ].map((item, i) => (
          <div key={item.title} style={{ marginBottom: i < 2 ? '2rem' : 0 }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '6px' }}>{item.title}</p>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8 }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '0.5rem', fontStyle: 'italic' }}>
          Trusted for corporate lunches, film sets, weddings, and private events across NYC.
        </p>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '1.75rem' }}>Ready to book? Reach us directly.</p>
        <a href="mailto:catering@awaze.nyc" style={{
          display: 'block', background: '#ED2E2E', color: '#FFFFFF',
          padding: '18px', fontFamily: "'Space Mono', monospace",
          fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
          textDecoration: 'none', fontWeight: 700,
        }}>
          Get a Quote →
        </a>
        <p style={{ fontSize: '12px', color: '#aaa', marginTop: '1rem', fontFamily: "'Space Mono', monospace" }}>
          catering@awaze.nyc · 48hr response
        </p>
      </div>

    </section>
  );
}
