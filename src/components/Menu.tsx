import veggiePlatter from '@/assets/gallery/veggie-platter.jpg';
import beefTibsPlatter from '@/assets/gallery/beef-tibs-platter.jpg';
import chickenTibs from '@/assets/gallery/chicken-tibs.jpg';
import meatDish from '@/assets/gallery/meat-dish-1.jpg';
import samosas from '@/assets/gallery/samosas.jpg';
import tomatoSalad from '@/assets/gallery/tomato-salad.jpg';

const signatures = [
  {
    name: 'Veggie',
    protein: 'Plant-Based',
    items: ['Gomen', 'Shiro', 'Tikil Gomen', 'Atakilt Wat', 'Misir Wat'],
    price: 'Rice $18 · Injera $21 · Family $50',
    photo: veggiePlatter,
    desc: 'A full spread of our finest vegetable dishes and stews — rich, spiced, and deeply satisfying.',
  },
  {
    name: 'The Silk',
    protein: 'Beef or Lamb',
    items: ['Awaze Tibs', 'Gomen', 'Tikil Gomen', 'Keysir'],
    price: 'Rice $18 · Injera $21 · Family $50',
    photo: beefTibsPlatter,
    desc: 'Bold berbere-spiced tibs alongside classic sides. The house favorite.',
  },
  {
    name: 'Fente Fire',
    protein: 'Chicken',
    items: ['Doro Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'],
    price: 'Rice $18 · Injera $21 · Family $50',
    photo: chickenTibs,
    desc: 'Boneless chicken in a spiced butter sauce with earthy sides — warm and bright.',
  },
  {
    name: 'The Nubz',
    protein: 'Beef',
    items: ['Derq Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'],
    price: 'Rice $18 · Injera $21 · Family $50',
    photo: meatDish,
    desc: 'Stir-fried beef with onions and jalapeño — slightly crispy, deeply savory.',
  },
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
  { name: 'Juices & Sodas', desc: 'Coke · Diet · Mirinda · San Pellegrino · Mango Juice · Ginger Ale', price: '$4', featured: false },
  { name: 'Beer', desc: 'St George · Castel · Habesha · Asmara · Dashen', price: '$8', featured: false },
  { name: 'Wine', desc: 'Red · White — ask your server', price: '$12 / $40', featured: false },
  { name: 'Tea', desc: 'Addis Tea · Alattar · Spicy Tea · Peppermint · Green · Ginger', price: '$3', featured: false },
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

const MONO = "'Space Mono', monospace";
const RED = '#ED2E2E';
const DARK = '#1A1A1A';
const CREAM = '#F5F0E8';

function SpicyBadge() {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: MONO,
      fontSize: '8px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: RED,
      border: `1px solid ${RED}`,
      borderRadius: '2px',
      padding: '0 3px',
      marginLeft: '6px',
      verticalAlign: 'middle',
      lineHeight: '1.6',
    }}>SPICY</span>
  );
}

export function Menu() {
  return (
    <section id="menu" style={{ background: CREAM }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '5rem 0 2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: RED, marginBottom: '12px' }}>
          Seed Oil Free · Avocado Oil · Butter &amp; Love
        </p>
        <h2 style={{ fontFamily: MONO, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: DARK, letterSpacing: '-0.02em', lineHeight: 1 }}>
          Menu
        </h2>
      </div>

      {/* ── SIGNATURES ── */}
      <div className="container-narrow" style={{ paddingBottom: '4rem' }}>
        <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginBottom: '2.5rem', textAlign: 'center' }}>
          The Chef's Signatures
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {signatures.map((sig, i) => (
            <div key={sig.name} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              minHeight: '380px',
              borderTop: `1px solid #d8d0c8`,
            }}>
              {/* Photo */}
              <div style={{ order: i % 2 === 0 ? 0 : 1, overflow: 'hidden' }}>
                <img
                  src={sig.photo}
                  alt={sig.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.92) contrast(1.04)' }}
                />
              </div>
              {/* Text */}
              <div style={{
                order: i % 2 === 0 ? 1 : 0,
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
                background: i % 2 === 0 ? CREAM : '#FFFFFF',
              }}>
                <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888' }}>
                  {sig.protein}
                </p>
                <h3 style={{ fontFamily: MONO, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: DARK, lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {sig.name}
                </h3>
                <div style={{ width: '28px', height: '2px', background: RED }} />
                <p style={{ fontSize: '13px', color: '#666', fontStyle: 'italic', lineHeight: 1.6 }}>
                  {sig.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sig.items.map(item => (
                    <li key={item} style={{ fontSize: '12px', color: '#444', lineHeight: 1.8 }}>
                      <span style={{ color: RED, marginRight: '6px' }}>—</span>{item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, marginTop: '0.5rem' }}>
                  {sig.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── APPETIZERS ── */}
      <div style={{ background: '#FFFFFF', padding: '4rem 0' }}>
        <div className="container-narrow">
          <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '2rem' }}>
            Appetizers
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {appetizers.map(app => (
              <div key={app.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {app.photo && (
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img src={app.photo} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.92)' }} />
                  </div>
                )}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: DARK }}>{app.name}</span>
                    <span style={{ fontFamily: MONO, fontSize: '12px', color: RED, marginLeft: '12px' }}>{app.price}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', lineHeight: 1.5 }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BUILD YOUR OWN ── */}
      <div style={{ background: CREAM, padding: '4rem 0' }}>
        <div className="container-narrow">
          <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '0.5rem' }}>
            Build Your Own
          </p>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>
            <strong>Awaze Protein</strong> — 1 protein + 3 veggies/stews <span style={{ fontFamily: MONO, color: RED }}>$20–21</span>
            &nbsp;·&nbsp;
            <strong>Awaze Veggie</strong> — any 4 veggies/stews <span style={{ fontFamily: MONO, color: RED }}>$20</span>
            &nbsp;·&nbsp;
            <strong>Awaze Family</strong> — 1 protein + 5 sides <span style={{ fontFamily: MONO, color: RED }}>$50</span>
            <br />
            <span style={{ color: '#888', fontSize: '12px' }}>With injera or rice +$3 · Family: injera included</span>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Proteins */}
            <div>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '6px' }}>
                Beef / Lamb <span style={{ color: RED }}>$20</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {proteins.beefLamb.map(item => (
                  <div key={item.name}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>
                      {item.name}{item.spicy && <SpicyBadge />}
                    </div>
                    <div style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '6px' }}>
                Chicken <span style={{ color: RED }}>$21</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {proteins.chicken.map(item => (
                  <div key={item.name}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>
                      {item.name}{item.spicy && <SpicyBadge />}
                    </div>
                    <div style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stews + Veggies */}
            <div>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '6px' }}>
                Stews
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {stews.map(item => (
                  <div key={item.name}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>
                      {item.name}{item.spicy && <SpicyBadge />}
                    </div>
                    <div style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '6px' }}>
                Vegetables
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {veggies.map(item => (
                  <div key={item.name}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #d8d0c8' }}>
            <p style={{ fontFamily: MONO, fontSize: '11px', color: RED, fontWeight: 700 }}>
              + Extra Veggie $5 &nbsp;·&nbsp; + Extra Protein $5
            </p>
            <p style={{ fontFamily: MONO, fontSize: '13px', color: RED, fontWeight: 700, marginTop: '6px' }}>
              + Gluten-Free Injera &nbsp;$5
            </p>
          </div>
        </div>
      </div>

      {/* ── TEJ FEATURE ── */}
      <div style={{ background: DARK, padding: '4rem 0' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '1rem' }}>
                ✦ Ethiopia's Oldest Drink
              </p>
              <h3 style={{ fontFamily: MONO, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: CREAM, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Ethiopian<br />Honey Wine
              </h3>
              <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Tej is brewed from fermented honey and gesho — Ethiopia's native buckthorn. Amber in color, lightly bitter, naturally sweet. Nothing else on the menu tastes like it.
              </p>
              <p style={{ fontFamily: MONO, fontSize: '12px', color: RED, fontWeight: 700 }}>
                $9 glass &nbsp;·&nbsp; $35 bottle
              </p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #333' }}>
              <p style={{ fontFamily: MONO, fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '1.5rem' }}>
                Drinks
              </p>
              {drinks.map(item => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '8px 0', borderBottom: '1px solid #2a2a2a' }}>
                  <div>
                    <span style={{ fontSize: '13px', color: '#ccc', fontWeight: 600 }}>{item.name}</span>
                    {item.desc && <p style={{ fontSize: '11px', color: '#666', fontStyle: 'italic' }}>{item.desc}</p>}
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: '11px', color: RED, marginLeft: '12px', whiteSpace: 'nowrap' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COFFEE + PATTIES ── */}
      <div style={{ background: '#FFFFFF', padding: '4rem 0' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '1.5rem' }}>
                Signature Coffee
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {coffee.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '0.75rem', borderBottom: '1px dotted #eee' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>{item.name}</span>
                      {item.desc && <p style={{ fontSize: '11px', color: '#888', fontStyle: 'italic' }}>{item.desc}</p>}
                    </div>
                    <span style={{ fontFamily: MONO, fontSize: '12px', color: RED, marginLeft: '12px', whiteSpace: 'nowrap' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '1.5rem' }}>
                Patties &amp; Tarts
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {patties.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: '0.75rem', borderBottom: '1px dotted #eee' }}>
                    <span style={{ fontWeight: 700, fontSize: '13px', color: DARK }}>{item.name}</span>
                    <span style={{ fontFamily: MONO, fontSize: '12px', color: RED, marginLeft: '12px' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER NOTE ── */}
      <div style={{ background: CREAM, padding: '2rem 0', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
          All items cooked in avocado oil, butter &amp; love. No seed oils. Please inform your server of any allergies.
        </p>
      </div>

    </section>
  );
}
