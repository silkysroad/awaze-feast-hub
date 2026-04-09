const MONO = "'Space Mono', monospace";
const RED = '#ED2E2E';
const DARK = '#1A1A1A';
const CREAM = '#F5F0E8';

const packages = [
  {
    name: 'The Spread',
    price: '$38',
    unit: 'per person',
    min: '10 guest minimum',
    includes: [
      '2 proteins (beef, lamb, or chicken)',
      '4 sides & stews',
      'Injera — made in-house from teff',
      'Serving trays & setup',
    ],
    ideal: 'Office lunches · Small gatherings · Birthday dinners',
    featured: false,
  },
  {
    name: 'The Full Table',
    price: '$52',
    unit: 'per person',
    min: '15 guest minimum',
    includes: [
      '3 proteins',
      '5 sides & stews',
      'Injera — made in-house from teff',
      'Sambusas to start',
      'Serving trays & setup',
    ],
    ideal: 'Corporate events · Private parties · Baby showers',
    featured: true,
  },
  {
    name: 'The Feast',
    price: '$68',
    unit: 'per person',
    min: '25 guest minimum',
    includes: [
      '4 proteins',
      '6 sides & stews',
      'Injera — made in-house from teff',
      'Sambusas to start',
      'Homemade Baklava dessert',
      'Ethiopian Honey Wine (Tej)',
      'Serving trays, setup & breakdown',
    ],
    ideal: 'Weddings · Film & photo sets · Cultural events',
    featured: false,
  },
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
    <section id="catering" style={{ background: CREAM }} aria-label="Awaze Ethiopian Catering NYC — Seed Oil Free">

      {/* HEADER */}
      <div className="container-narrow" style={{ padding: '5rem 0 3rem' }}>
        <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '1rem' }}>
          Catering
        </p>
        <h2 style={{ fontFamily: MONO, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: DARK, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Feed the Room.<br />Feed it Right.
        </h2>
        <p style={{ fontSize: '15px', color: '#555', maxWidth: '540px', lineHeight: 1.8 }}>
          Awaze brings full Ethiopian feasts to your event — communal, striking, and unlike anything else in the room.
          Every dish cooked in avocado oil and butter. <strong>No seed oils. Ever.</strong>
          <br />The only seed-oil-free Ethiopian catering in New York City.
        </p>
      </div>

      {/* PACKAGES */}
      <div className="container-narrow" style={{ paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#d8d0c8' }}>
          {packages.map(pkg => (
            <div key={pkg.name} style={{
              background: pkg.featured ? DARK : '#FFFFFF',
              color: pkg.featured ? CREAM : DARK,
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderTop: `4px solid ${RED}`,
            }}>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', color: RED }}>
                {pkg.min}
              </p>
              <h3 style={{ fontFamily: MONO, fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1 }}>
                {pkg.name}
              </h3>
              <p style={{ fontFamily: MONO, fontSize: '2rem', fontWeight: 700, color: RED, lineHeight: 1 }}>
                {pkg.price} <span style={{ fontSize: '0.7rem', fontWeight: 400, color: pkg.featured ? '#888' : '#777' }}>{pkg.unit}</span>
              </p>
              <div style={{ width: '24px', height: '2px', background: RED }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {pkg.includes.map(item => (
                  <li key={item} style={{ fontSize: '12px', color: pkg.featured ? '#aaa' : '#666', lineHeight: 1.5 }}>
                    <span style={{ color: RED, marginRight: '6px' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <p style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: `1px dotted ${pkg.featured ? '#333' : '#e0e0e0'}`,
                fontSize: '11px',
                fontStyle: 'italic',
                color: pkg.featured ? '#666' : '#999',
              }}>
                {pkg.ideal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="container-narrow" style={{ paddingBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ flex: 1, height: '1px', background: '#d8d0c8' }} />
        <span style={{ fontFamily: MONO, color: RED, fontSize: '14px' }}>✦</span>
        <div style={{ flex: 1, height: '1px', background: '#d8d0c8' }} />
      </div>

      {/* ADD-ONS */}
      <div className="container-narrow" style={{ paddingBottom: '3rem' }}>
        <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginBottom: '1.25rem' }}>
          Add-Ons
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0' }}>
          {addons.map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid #e0d8d0', fontSize: '13px' }}>
              <span style={{ color: DARK }}>{item.name}</span>
              <span style={{ fontFamily: MONO, fontSize: '11px', color: RED, marginLeft: '16px', whiteSpace: 'nowrap' }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY AWAZE */}
      <div style={{ background: DARK, padding: '4rem 0' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
            {[
              { title: 'Seed Oil Free', body: 'Every dish cooked in avocado oil, butter & love. No canola. No soybean. No seed oils — ever. The cleanest Ethiopian food in New York.' },
              { title: 'Made for Sharing', body: 'Ethiopian food is communal by design. One spread, everyone eats together. It breaks the ice, starts conversations, and makes any event memorable.' },
              { title: 'Harlem Roots', body: "We're a Black-owned restaurant in Harlem. When you book Awaze, you're supporting independent hospitality and a kitchen that actually gives a damn." },
            ].map(item => (
              <div key={item.title}>
                <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: RED, marginBottom: '0.75rem' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-narrow" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '0.5rem', fontStyle: 'italic' }}>
          Trusted for corporate lunches, film sets, weddings, and private events across NYC.
        </p>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '2rem' }}>
          Ready to book or have questions? Reach us directly.
        </p>
        <a
          href="mailto:catering@awaze.nyc"
          style={{
            display: 'inline-block',
            background: RED,
            color: '#FFFFFF',
            padding: '18px 48px',
            fontFamily: MONO,
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = DARK)}
          onMouseOut={e => (e.currentTarget.style.background = RED)}
        >
          Get a Quote →
        </a>
        <p style={{ fontSize: '12px', color: '#aaa', marginTop: '1rem', fontFamily: MONO }}>
          catering@awaze.nyc · 48hr response
        </p>
      </div>

    </section>
  );
}
