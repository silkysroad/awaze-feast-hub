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
    <section
      id="catering"
      className="py-16 border-t border-primary/20"
      style={{ background: '#F5F0E8' }}
      aria-label="Awaze Ethiopian Catering NYC — Seed Oil Free"
    >
      <div className="container-narrow">

        {/* Header */}
        <div className="mb-3">
          <p className="text-xs uppercase tracking-widest text-red-600 mb-3" style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.2em' }}>Catering</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
            Feed the Room.<br />Feed it Right.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Awaze brings full Ethiopian feasts to your event — communal, striking, and unlike anything else in the room.
            Every dish cooked in avocado oil and butter. <strong>No seed oils. Ever.</strong> The only seed-oil-free Ethiopian catering in New York City.
          </p>
        </div>

        <div className="divider my-8" />

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col gap-3 p-6"
              style={{
                background: pkg.featured ? '#1A1A1A' : '#FFFFFF',
                color: pkg.featured ? '#F5F0E8' : 'inherit',
                borderTop: '3px solid #ED2E2E',
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Mono', monospace", color: '#ED2E2E', letterSpacing: '0.15em' }}>
                  {pkg.min}
                </p>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>{pkg.name}</h3>
                <p className="text-3xl font-bold text-red-600 mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {pkg.price} <span className="text-sm font-normal" style={{ color: pkg.featured ? '#aaa' : '#666' }}>{pkg.unit}</span>
                </p>
              </div>

              <div className="w-5 h-0.5 bg-red-600" />

              <ul className="space-y-1.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-xs flex gap-2" style={{ color: pkg.featured ? '#ccc' : '#555' }}>
                    <span className="text-red-600 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs mt-auto pt-3" style={{ color: pkg.featured ? '#888' : '#999', borderTop: '1px dotted', borderColor: pkg.featured ? '#333' : '#ddd', fontStyle: 'italic' }}>
                {pkg.ideal}
              </p>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Add-Ons</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {addons.map((item) => (
              <div key={item.name} className="flex justify-between text-sm py-2 border-b border-primary/10">
                <span>{item.name}</span>
                <span className="text-red-600 font-bold ml-2 shrink-0" style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Awaze */}
        <div className="p-6 mb-10" style={{ background: '#FFFFFF', borderLeft: '3px solid #ED2E2E' }}>
          <p className="text-xs uppercase tracking-widest text-red-600 mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>Why Awaze</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-bold mb-1">Seed Oil Free</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Every dish cooked in avocado oil, butter & love. No canola. No soybean. No seed oils — ever. The cleanest Ethiopian food in New York.</p>
            </div>
            <div>
              <p className="font-bold mb-1">Made for Sharing</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Ethiopian food is communal by design. One spread, everyone eats together. It breaks the ice, starts conversations, and makes any event memorable.</p>
            </div>
            <div>
              <p className="font-bold mb-1">Harlem Roots</p>
              <p className="text-muted-foreground text-xs leading-relaxed">We're a Black-owned restaurant in Harlem. When you book Awaze, you're supporting independent hospitality and a kitchen that actually gives a damn.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Ready to book or have questions? Reach us directly.</p>
          <a
            href="mailto:catering@awaze.nyc"
            className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace", background: '#ED2E2E', color: '#FFFFFF', letterSpacing: '0.15em' }}
          >
            Get a Quote
          </a>
          <p className="text-xs text-muted-foreground mt-3">catering@awaze.nyc · 48hr response</p>
        </div>

      </div>
    </section>
  );
}
