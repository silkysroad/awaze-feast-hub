const signaturePlatters = [
  {
    name: 'Veggie',
    type: 'Plant-Based',
    items: ['Gomen', 'Shiro', 'Tikil Gomen', 'Atakilt Wat', 'Misir Wat'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'The Silk',
    type: 'Beef or Lamb',
    items: ['Awaze Tibs', 'Gomen', 'Tikil Gomen', 'Keysir'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'Fente Fire',
    type: 'Chicken',
    items: ['Doro Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'The Nubz',
    type: 'Beef',
    items: ['Derq Tibs', 'Gomen', 'Tikil Gomen', 'Misir Wat'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
];

const appetizers = [
  { name: 'Sambusas', desc: 'Crispy pastry filled with spiced beef or lentils, onions & jalapeño', price: '$10' },
  { name: 'Tomato Salad', desc: 'Fresh ripe tomatoes, crisp onions, fragrant herbs', price: '$10' },
  { name: 'Avocado Salad', desc: 'Ripe avocado, bright lime, smooth olive oil', price: '$12' },
  { name: 'Tomato Fitfit', desc: 'Torn injera tossed with tomatoes, herbs & spiced butter', price: '$12' },
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
  { name: '✦ Ethiopian Honey Wine (Tej)', desc: 'Brewed from fermented honey & gesho. Amber, lightly bitter, naturally sweet. Ethiopia\'s oldest drink.', price: '$9 glass · $35 bottle', featured: true },
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

export function Menu() {
  return (
    <section id="menu" className="py-16 border-t border-primary/20" style={{ background: '#F5F0E8' }}>
      <div className="container-narrow">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>Menu</h2>
          <p className="text-sm text-muted-foreground">Seed Oil Free · Avocado Oil · Butter &amp; Love</p>
        </div>

        {/* The Chef's Signatures */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5" style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.2em' }}>The Chef's Signatures</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {signaturePlatters.map((platter) => (
              <div key={platter.name} className="flex flex-col gap-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'Space Mono', monospace" }}>{platter.type}</p>
                <h4 className="text-2xl font-bold leading-tight" style={{ fontFamily: "'Space Mono', monospace" }}>{platter.name}</h4>
                <div className="w-5 h-0.5 bg-red-600 my-1" />
                <p className="text-xs text-muted-foreground italic leading-relaxed">{platter.items.join(' · ')}</p>
                <p className="text-xs font-bold text-red-600 mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>Rice {platter.priceRice} · Injera {platter.priceInjera} · Family {platter.priceFamily}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-10" />

        {/* Appetizers */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Appetizers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {appetizers.map((item) => (
              <div key={item.name} className="flex flex-col gap-0.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-xs font-bold text-red-600 ml-2" style={{ fontFamily: "'Space Mono', monospace" }}>{item.price}</span>
                </div>
                <p className="text-xs text-muted-foreground italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-10" />

        {/* Build Your Own */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-red-600 mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>Build Your Own</p>
          <p className="text-xs text-muted-foreground mb-5">
            <strong>Awaze Protein</strong> — 1 protein + 3 veggies/stews <span className="text-red-600 font-bold">$20–21</span>
            &nbsp;·&nbsp;
            <strong>Awaze Veggie</strong> — any 4 veggies/stews <span className="text-red-600 font-bold">$20</span>
            &nbsp;·&nbsp;
            <strong>Awaze Family</strong> — 1 protein + 5 sides <span className="text-red-600 font-bold">$50</span>
            <br />
            <span className="text-muted-foreground">With injera or rice +$3 · Family: injera included</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proteins */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>Beef / Lamb <span className="text-red-600">$20</span></p>
              <div className="space-y-2">
                {proteins.beefLamb.map((item) => (
                  <div key={item.name} className="flex items-start gap-2">
                    <div className="flex-1">
                      <span className="text-sm font-semibold">{item.name}</span>
                      {item.spicy && <span className="ml-2 text-xs font-bold text-red-600 border border-red-600 rounded px-1 py-px" style={{ fontSize: '9px', letterSpacing: '0.08em' }}>SPICY</span>}
                      <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-5 mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>Chicken <span className="text-red-600">$21</span></p>
              <div className="space-y-2">
                {proteins.chicken.map((item) => (
                  <div key={item.name}>
                    <span className="text-sm font-semibold">{item.name}</span>
                    {item.spicy && <span className="ml-2 text-xs font-bold text-red-600 border border-red-600 rounded px-1 py-px" style={{ fontSize: '9px', letterSpacing: '0.08em' }}>SPICY</span>}
                    <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stews + Veggies */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>Stews</p>
              <div className="space-y-2 mb-6">
                {stews.map((item) => (
                  <div key={item.name}>
                    <span className="text-sm font-semibold">{item.name}</span>
                    {item.spicy && <span className="ml-2 text-xs font-bold text-red-600 border border-red-600 rounded px-1 py-px" style={{ fontSize: '9px', letterSpacing: '0.08em' }}>SPICY</span>}
                    <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>Vegetables</p>
              <div className="space-y-2">
                {veggies.map((item) => (
                  <div key={item.name}>
                    <span className="text-sm font-semibold">{item.name}</span>
                    <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-5 pt-4 border-t border-primary/20">
            <p className="text-xs text-red-600 font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>+ Extra Veggie $5 · + Extra Protein $5</p>
            <p className="text-sm font-bold text-red-600 mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>+ Gluten-Free Injera $5</p>
          </div>
        </div>

        <div className="divider mb-10" />

        {/* Drinks + Coffee + Patties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          {/* Drinks */}
          <div>
            <p className="text-xs uppercase tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Drinks</p>
            <div className="space-y-3">
              {drinks.map((item) => (
                <div key={item.name} className={item.featured ? 'p-3 border border-red-600/40 rounded' : ''} style={item.featured ? { background: '#FFF8F2' } : {}}>
                  <div className="flex justify-between items-baseline">
                    <span className={`font-semibold ${item.featured ? 'text-red-700' : ''}`}>{item.name}</span>
                    <span className="text-xs font-bold text-red-600 ml-2 shrink-0" style={{ fontFamily: "'Space Mono', monospace" }}>{item.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coffee */}
          <div>
            <p className="text-xs uppercase tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Signature Coffee</p>
            <div className="space-y-2">
              {coffee.map((item) => (
                <div key={item.name} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    {item.desc && <p className="text-xs text-muted-foreground italic">{item.desc}</p>}
                  </div>
                  <span className="text-xs font-bold text-red-600 ml-2 shrink-0" style={{ fontFamily: "'Space Mono', monospace" }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Patties & Tarts */}
          <div>
            <p className="text-xs uppercase tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Patties &amp; Tarts</p>
            <div className="space-y-2">
              {patties.map((item) => (
                <div key={item.name} className="flex justify-between items-baseline">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-xs font-bold text-red-600 ml-2 shrink-0" style={{ fontFamily: "'Space Mono', monospace" }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 pt-6 border-t border-primary/20">
          <p className="text-xs text-muted-foreground text-center italic">
            All items cooked in avocado oil, butter &amp; love. No seed oils. Please inform your server of any allergies.
          </p>
        </div>

      </div>
    </section>
  );
}
