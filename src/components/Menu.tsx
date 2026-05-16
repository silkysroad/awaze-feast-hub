import veggiePlatter from '@/assets/gallery/veggie-platter.jpg';
import beefTibsPlatter from '@/assets/gallery/beef-tibs-platter.jpg';
import chickenPlate from '@/assets/dishes/platter-1.jpg';
import nubzPlate from '@/assets/dishes/combo-1.jpg';
import samosas from '@/assets/gallery/samosas.jpg';
import tomatoSalad from '@/assets/gallery/tomato-salad.jpg';

const signatures = [
  { name: 'Veggie', protein: 'Plant-Based', items: ['Gomen', 'Shiro', 'Tikil Gomen', 'Atakilt Wat', 'Misir Wat'], price: 'Rice $18 · Injera $21 · Family $50', photo: veggiePlatter, desc: 'A full spread of our finest vegetable dishes and stews — rich, spiced, and deeply satisfying.' },
  { name: 'The Silk', protein: 'Beef or Lamb', items: ['Awaze Tibs', 'Gomen', 'Tikil Gomen', 'Keysir'], price: 'Rice $18 · Injera $21 · Family $50', photo: beefTibsPlatter, desc: 'Bold berbere-spiced tibs alongside classic sides. The house favorite.' },
  { name: 'Fente Fire', protein: 'Chicken', items: ['Doro Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'], price: 'Rice $18 · Injera $21 · Family $50', photo: chickenPlate, desc: 'Boneless chicken in a spiced butter sauce with earthy sides.' },
  { name: 'The Nubz', protein: 'Beef', items: ['Derq Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'], price: 'Rice $18 · Injera $21 · Family $50', photo: nubzPlate, desc: 'Stir-fried beef with onions and jalapeño — slightly crispy, deeply savory.' },
];

const appetizers = [
  { name: 'Sambusas', desc: 'Crispy pastry filled with spiced beef or lentils, onions & jalapeño', price: '$10', photo: samosas },
  { name: 'Tomato Salad', desc: 'Fresh ripe tomatoes, crisp onions, fragrant herbs', price: '$10', photo: tomatoSalad },
  { name: 'Avocado Salad', desc: 'Ripe avocado, bright lime, smooth olive oil', price: '$12', photo: null },
  { name: 'Tomato Fitfit', desc: 'Torn injera tossed with tomatoes, herbs & spiced butter', price: '$12', photo: null },
];

const proteins = {
  beefLamb: [
    { name: 'Awaze Tibs', desc: 'Beef or lamb sautéed in spicy berbere sauce', spicy: true },
    { name: 'Lega Tibs', desc: 'Beef or lamb with onions, rosemary & jalapeño — mild', spicy: false },
    { name: 'Derq Tibs', desc: 'Beef stir-fried with onions & jalapeño, slightly crispy', spicy: true },
    { name: 'Tibs Wat', desc: 'Slow-cooked beef stew in rich berbere & tomato sauce', spicy: true },
    { name: 'Kitfo', desc: 'Raw minced lean beef with mitmita & niter kibbeh', spicy: true },
  ],
  chicken: [
    { name: 'Doro Tibs', desc: 'Boneless chicken breast in spiced butter sauce', spicy: true },
    { name: 'Doro Wat', desc: 'Classic chicken stew slow-cooked in berbere', spicy: true },
  ],
};

const stews = [
  { name: 'Misir Wat', desc: 'Red lentil stew slow-cooked with berbere', spicy: true },
  { name: 'Shiro', desc: 'Chickpea purée simmered with warm spices', spicy: false },
  { name: 'Kik Alicha', desc: 'Yellow split peas with turmeric & ginger', spicy: false },
];

const veggies = [
  { name: 'Gomen', desc: 'Collard greens slow-cooked with spices & garlic' },
  { name: 'Tikil Gomen', desc: 'Cabbage & carrots, lightly spiced' },
  { name: 'Atakilt Wat', desc: 'String beans & carrots in spiced sauce' },
  { name: 'Keysir', desc: 'Beets & potatoes, earthy and mild' },
];

const drinks = [
  { name: 'Juices & Sodas', desc: 'Coke · Diet · Mirinda · San Pellegrino · Mango Juice · Ginger Ale', price: '$4' },
  { name: 'Beer', desc: 'St George · Castel · Habesha · Asmara · Dashen', price: '$8' },
  { name: 'Wine', desc: 'Red · White — ask your server', price: '$12 / $40' },
  { name: 'Tea', desc: 'Addis Tea · Alattar · Spicy Tea · Peppermint · Green · Ginger', price: '$3' },
];

const coffee = [
  { name: 'Ethiopian Espresso', desc: 'by Buunni Coffee, Harlem · oat · whole · almond', price: '$4' },
  { name: 'Cappuccino', price: '$4' },
  { name: 'Cortado', price: '$4' },
  { name: 'Drip Coffee', price: '$3' },
];

const patties = [
  { name: 'Lamb Awaze', price: '$8' },
  { name: 'Curry Goat', price: '$6' },
  { name: 'Jerk Chicken', price: '$6' },
  { name: 'Jackfruit / Lentil', price: '$5' },
  { name: 'Blueberry Tart', price: '$5' },
  { name: 'Apple Tart', price: '$5' },
];

function SpicyBadge() {
  return (
    <span style={{
      display: 'inline-block', fontFamily: "'Space Mono', monospace",
      fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em',
      color: '#ED2E2E', border: '1px solid #ED2E2E', borderRadius: '2px',
      padding: '0 3px', marginLeft: '6px', verticalAlign: 'middle', lineHeight: '1.7',
    }}>SPICY</span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: '#ED2E2E', marginBottom: '1.25rem' }}>
      {children}
    </p>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#888', marginBottom: '0.75rem', paddingBottom: '6px', borderBottom: '1px solid #ddd' }}>
      {children}
    </p>
  );
}

export function Menu() {
  return (
    <section id="menu" style={{ background: '#F5F0E8' }}>

      {/* HEADER */}
      <div style={{ padding: '3.5rem 1.25rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '10px' }}>
          Seed Oil Free · Avocado Oil · Butter &amp; Love
        </p>
        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2.2rem, 10vw, 4rem)', fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.02em', lineHeight: 1 }}>
          Menu
        </h2>
      </div>

      {/* SIGNATURES */}
      <div style={{ padding: '0 0 3rem' }}>
        <div style={{ textAlign: 'center', padding: '0 1.25rem 1.5rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888' }}>The Chef's Signatures</p>
        </div>
        {signatures.map((sig, i) => (
          <div key={sig.name} style={{ borderTop: '1px solid #d8d0c8' }}>
            {/* Photo — always on top on mobile */}
            <div style={{ height: 'clamp(220px, 55vw, 380px)', overflow: 'hidden' }}>
              <img src={sig.photo} alt={sig.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.92) contrast(1.04)' }} />
            </div>
            {/* Text */}
            <div style={{ padding: '1.75rem 1.25rem', background: i % 2 === 0 ? '#F5F0E8' : '#FFFFFF' }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', marginBottom: '6px' }}>{sig.protein}</p>
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '10px' }}>{sig.name}</h3>
              <div style={{ width: '24px', height: '2px', background: '#ED2E2E', marginBottom: '12px' }} />
              <p style={{ fontSize: '13px', color: '#666', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '12px' }}>{sig.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px' }}>
                {sig.items.map(item => (
                  <li key={item} style={{ fontSize: '13px', color: '#444', lineHeight: 1.9 }}>
                    <span style={{ color: '#ED2E2E', marginRight: '6px' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#ED2E2E', fontWeight: 700 }}>{sig.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* APPETIZERS */}
      <div style={{ background: '#FFFFFF', padding: '3rem 1.25rem' }}>
        <SectionLabel>Appetizers</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {appetizers.map(app => (
            <div key={app.name} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              {app.photo && (
                <div style={{ width: '80px', height: '80px', flexShrink: 0, overflow: 'hidden', borderRadius: '2px' }}>
                  <img src={app.photo} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                  <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{app.name}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#ED2E2E', marginLeft: '8px', whiteSpace: 'nowrap' }}>{app.price}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', lineHeight: 1.5 }}>{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUILD YOUR OWN */}
      <div style={{ background: '#F5F0E8', padding: '3rem 1.25rem' }}>
        <SectionLabel>Build Your Own</SectionLabel>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '1.75rem', lineHeight: 1.7 }}>
          <strong>Awaze Protein</strong> — 1 protein + 3 veggies/stews <span style={{ fontFamily: "'Space Mono', monospace", color: '#ED2E2E' }}>$20–21</span><br />
          <strong>Awaze Veggie</strong> — any 4 veggies/stews <span style={{ fontFamily: "'Space Mono', monospace", color: '#ED2E2E' }}>$20</span><br />
          <strong>Awaze Family</strong> — 1 protein + 5 sides <span style={{ fontFamily: "'Space Mono', monospace", color: '#ED2E2E' }}>$50</span><br />
          <span style={{ color: '#888', fontSize: '12px' }}>With injera or rice +$3 · Family: injera included</span>
        </p>

        {/* Proteins */}
        <SubLabel>Beef / Lamb <span style={{ color: '#ED2E2E' }}>$20</span></SubLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.75rem' }}>
          {proteins.beefLamb.map(item => (
            <div key={item.name}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
              {item.spicy && <SpicyBadge />}
              <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginTop: '2px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <SubLabel>Chicken <span style={{ color: '#ED2E2E' }}>$21</span></SubLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.75rem' }}>
          {proteins.chicken.map(item => (
            <div key={item.name}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
              {item.spicy && <SpicyBadge />}
              <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginTop: '2px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <SubLabel>Stews</SubLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.75rem' }}>
          {stews.map(item => (
            <div key={item.name}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
              {item.spicy && <SpicyBadge />}
              <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginTop: '2px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <SubLabel>Vegetables</SubLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.75rem' }}>
          {veggies.map(item => (
            <div key={item.name}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
              <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginTop: '2px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #d8d0c8' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#ED2E2E', fontWeight: 700 }}>+ Extra Veggie $5 &nbsp;·&nbsp; + Extra Protein $5</p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: '#ED2E2E', fontWeight: 700, marginTop: '6px' }}>+ Gluten-Free Injera &nbsp;$5</p>
        </div>
      </div>

      {/* TEJ */}
      <div style={{ background: '#1A1A1A', padding: '3rem 1.25rem' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>✦ Ethiopia's Oldest Drink</p>
        <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Ethiopian<br />Honey Wine
        </h3>
        <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          Tej is brewed from fermented honey and gesho — Ethiopia's native buckthorn. Amber in color, lightly bitter, naturally sweet. Nothing else on the menu tastes like it.
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', color: '#ED2E2E', fontWeight: 700, marginBottom: '2rem' }}>$9 glass &nbsp;·&nbsp; $35 bottle</p>

        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '1rem' }}>Other Drinks</p>
          {drinks.map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid #2a2a2a' }}>
              <div>
                <span style={{ fontSize: '13px', color: '#ccc', fontWeight: 600 }}>{item.name}</span>
                <p style={{ fontSize: '11px', color: '#555', fontStyle: 'italic' }}>{item.desc}</p>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#ED2E2E', marginLeft: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COFFEE + PATTIES */}
      <div style={{ background: '#FFFFFF', padding: '3rem 1.25rem' }}>
        <SectionLabel>Signature Coffee</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '3rem' }}>
          {coffee.map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px dotted #eee' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
                {item.desc && <p style={{ fontSize: '11px', color: '#888', fontStyle: 'italic' }}>{item.desc}</p>}
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#ED2E2E', marginLeft: '12px', whiteSpace: 'nowrap' }}>{item.price}</span>
            </div>
          ))}
        </div>

        <SectionLabel>Patties &amp; Tarts</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {patties.map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px dotted #eee' }}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>{item.name}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#ED2E2E', marginLeft: '12px' }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div style={{ background: '#F5F0E8', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
          All items cooked in avocado oil, butter &amp; love. No seed oils. Please inform your server of any allergies.
        </p>
      </div>

    </section>
  );
}
