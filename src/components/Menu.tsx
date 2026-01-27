const signaturePlatters = [
  {
    name: 'Lalibela',
    type: 'Beef or Lamb',
    items: ['Awaze Tibs | Spicy Tibsi', 'Gomen | Hamli', 'Tikil Gomen | Hmilti Alicha', 'Keysir'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'Harlem',
    type: 'Chicken',
    items: ['Doro Tibs | Dorho Tibsi', 'Gomen | Hamli', 'Tikil Gomen | Hmilti Alicha', 'Misir Wat | Ades'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'Veggie',
    type: 'Veggie',
    items: ['Gomen | Hamli', 'Shiro', 'Tikil Gomen | Hmilti Alicha', 'Atakilt Wat | Hmilti Alicha'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
  {
    name: 'Danakil',
    type: 'Beef',
    items: ['Beef Derq Tibs | Beef Derq Tibsi', 'Gomen | Hamli', 'Tikil Gomen | Hmilti Alicha', 'Misir Wat | Ades'],
    priceRice: '$18',
    priceInjera: '$21',
    priceFamily: '$50',
  },
];

const appetizers = [
  { name: 'Tomato Salad', desc: 'Fresh, bright, tangy salad with ripe tomatoes, crisp onions, and fragrant herbs', price: '$10' },
  { name: 'Avocado Salad', desc: 'Creamy and zesty with ripe avocado, bright lime juice, and smooth olive oil', price: '$10' },
  { name: 'Awaze Salad', desc: 'Bold, zesty salad with crisp mixed greens in spicy awaze vinaigrette', price: '$10' },
  { name: 'Tomato Fitfit', desc: 'Crispy, golden pastry shells filled with flavorful ground beef or lentils', price: '$10' },
  { name: 'Sambusas', desc: 'Crispy pastry shells filled with ground beef or lentils, onions and jalapeño', price: '$10' },
];

const buildYourOwn = {
  bowls: [
    { name: 'Awaze Protein', desc: '1 protein, 3 veggies/stew', price: '$15-$18' },
    { name: 'Awaze Veggie', desc: '4 veggies/stews', price: '$14' },
  ],
  proteins: {
    beef: [
      { name: 'Awaze Tibs | Awaze Tibsi', desc: 'Tender, juicy cubes of beef or lamb sautéed with tomatoes, onions, and jalapeño in bold awaze sauce' },
      { name: 'Lega Tibs | Mild Tibsi', desc: 'Mild, tender cubes sautéed with onions, tomatoes, and jalapeño for a juicy, well-balanced dish' },
      { name: 'Alicha Tibs | Qulwa', desc: 'Mild, comforting stew slow-cooked with garlic, onions, and turmeric' },
      { name: 'Tibs Wat | Tibsi', desc: 'Rich, bold, spicy stew simmered with onions, garlic, tomatoes, and berbere spice' },
      { name: 'Siga Wat | Zigni', desc: 'Robust, hearty stew made with tender meat, onions, garlic, tomatoes, and berbere' },
      { name: 'Derq Tibs | Derq Tibsi', desc: 'Tender cubes stir-fried with fresh onions and jalapeño' },
    ],
    chicken: [
      { name: 'Siga Wat | Zigni', desc: 'Robust stew with tender chicken, onions, garlic, tomatoes, and berbere' },
      { name: 'Doro Tibs | Dorho Tibsi', desc: 'Tender, juicy boneless chicken breast sautéed with tomatoes and onions in bold awaze sauce' },
    ],
    fish: [
      { name: 'Assa Dullet', desc: 'Flaky pieces of tilapia stir-fried with garlic, red onions, jalapeños, and herbs', price: '$17' },
    ],
  },
  stews: [
    { name: 'Misir Wat | Ades', desc: 'Rich, spicy, slightly tangy red lentil stew with berbere, onions, and garlic' },
    { name: 'Shiro', desc: 'Smooth, creamy, savory chickpea puree slow-cooked with onions, garlic, and warm spices' },
    { name: 'Kik Alicha | Alicha Ades', desc: 'Mild, comforting split pea stew slow-cooked with onions, garlic, ginger, and turmeric' },
  ],
  veggies: [
    { name: 'Gomen | Hamli', desc: 'Savory, slightly bitter dish made with chopped collard greens, slow-cooked with onions and spices' },
    { name: 'Atakilt Wat | Hmilti Alicha', desc: 'Mild aromatic vegetable dish with tender string beans and carrots, slow-cooked with turmeric' },
    { name: 'Tikil Gomen | Hmilti Alicha', desc: 'Mildly sweet dish with tender cabbage and carrots, slow-cooked with turmeric and garlic' },
    { name: 'Keysir', desc: 'Vibrant, sweet, earthy dish made with tender beets, slow-cooked with potatoes' },
  ],
};

const drinks = [
  { name: 'Juices & Sodas', desc: 'Coke, Diet, Mirinda, San Pelligrino, Mango Juice, Ginger Ale, Lemon', price: '$5' },
  { name: 'Beer', desc: 'St George, Castel, Habesha, Asmara, Dashen', price: '$8' },
  { name: 'Wines', desc: 'Red Rift Valley, Ethiopian Made in Eastern Shoa, Zeway, Oromo Region', price: '$40' },
  { name: 'Tea', desc: 'Addis Tea, Alattar, Spicy Tea', price: '$3' },
];

const coffee = [
  { name: 'Espresso Shot', price: '$3' },
  { name: 'Cappucino', price: '$4' },
  { name: 'Cortado', price: '$4' },
  { name: 'Drip-House Blend', price: '$3' },
];

const patties = {
  meat: [
    { name: 'Lamb Awaze', price: '$8' },
    { name: 'Curry Goat', price: '$6' },
    { name: 'Jerk Chicken', price: '$6' },
  ],
  vegetarian: [
    { name: 'Jackfruit', price: '$5' },
    { name: 'Pumpkin', price: '$5' },
    { name: 'Ackee', price: '$5' },
    { name: 'Lentil & Chickpea', price: '$5' },
  ],
};

const cafeMains = [
  { name: 'Veggie Platter', desc: 'Traditional vegetarian sampler of tender lentils, spiced chickpeas, turmeric-kissed cabbage, carrots, potatoes, beets and sautéed greens', price: '$14' },
  { name: 'Doro Wat | Dorho Tsebhi', desc: 'Classic stew of tender chicken breast stewed with spicy berbere, sauced onion, ginger, garlic and served with a hard-boiled egg', price: '$15' },
  { name: 'Special Lega Tibs | Mild Tibsi', desc: 'Mild, tender cubes of beef or lamb sautéed with onions, tomatoes, and jalapeño', priceBeef: '$17', priceLamb: '$18' },
];

const tarts = [
  { name: 'Blueberry', price: '$5' },
  { name: 'Apple', price: '$5' },
];

export function Menu() {
  return (
    <section id="menu" className="section-spacing border-t border-border">
      <div className="container-narrow">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Menu</h2>
        <p className="text-muted-foreground mb-16">Modern Ethiopian Bowls + Platters</p>

        {/* Signature Platters */}
        <div className="mb-20">
          <h3 className="text-xl font-medium uppercase tracking-wider mb-8 text-primary">Signature Platters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signaturePlatters.map((platter) => (
              <div key={platter.name} className="border-t border-border pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-medium">{platter.name}</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{platter.type}</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {platter.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="text-xs text-muted-foreground font-mono">
                  Rice {platter.priceRice} · Injera {platter.priceInjera} · Family {platter.priceFamily}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-20" />

        {/* Appetizers */}
        <div className="mb-20">
          <h3 className="text-xl font-medium uppercase tracking-wider mb-8 text-primary">Appetizers</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {appetizers.map((item) => (
              <div key={item.name} className="flex justify-between gap-4">
                <div>
                  <h4 className="font-medium mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="font-mono text-sm shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-20" />

        {/* Build Your Own */}
        <div className="mb-20">
          <h3 className="text-xl font-medium uppercase tracking-wider mb-2 text-primary">Build Your Own</h3>
          <p className="text-muted-foreground text-sm mb-8">Rice or w/Injera +$3</p>
          
          {/* Bowls */}
          <div className="mb-12">
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Bowls</h4>
            <div className="space-y-3">
              {buildYourOwn.bowls.map((bowl) => (
                <div key={bowl.name} className="flex justify-between">
                  <div>
                    <span className="font-medium">{bowl.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">— {bowl.desc}</span>
                  </div>
                  <span className="font-mono text-sm">{bowl.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proteins */}
          <div className="mb-12">
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Step 1: Pick Your Protein</h4>
            
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Beef $17 or Lamb $18</p>
              <div className="grid md:grid-cols-2 gap-4">
                {buildYourOwn.proteins.beef.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Chicken $15</p>
              <div className="grid md:grid-cols-2 gap-4">
                {buildYourOwn.proteins.chicken.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Fish $17</p>
              <div className="grid md:grid-cols-2 gap-4">
                {buildYourOwn.proteins.fish.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Veggies/Stews */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Step 2: Pick Veggies/Stew</h4>
            
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Stews</p>
              <div className="grid md:grid-cols-2 gap-4">
                {buildYourOwn.stews.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Veggies</p>
              <div className="grid md:grid-cols-2 gap-4">
                {buildYourOwn.veggies.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Add-ons: Sambusas $10 · Extra Veggie $5 · Extra Protein $5
            </p>
          </div>
        </div>

        <div className="divider mb-20" />

        {/* Drinks */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wider mb-8 text-primary">Drinks</h3>
            <div className="space-y-4">
              {drinks.map((item) => (
                <div key={item.name} className="flex justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="font-mono text-sm shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium uppercase tracking-wider mb-8 text-primary">Coffee</h3>
            <div className="space-y-3">
              {coffee.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="font-medium text-sm">{item.name}</span>
                  <span className="font-mono text-sm">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Syrups: Sugar · Stevia $0.50 · Vanilla +$0.50 · Simple Syrup +$0.50
            </p>
          </div>
        </div>

        <div className="divider mb-20" />

        {/* Cafe Mains & Patties */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-medium uppercase tracking-wider mb-2 text-primary">Cafe Mains</h3>
            <p className="text-muted-foreground text-sm mb-8">w/Injera +$3</p>
            <div className="space-y-6">
              {cafeMains.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between gap-4">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <span className="font-mono text-sm shrink-0">
                      {item.price || `Beef ${item.priceBeef} · Lamb ${item.priceLamb}`}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium uppercase tracking-wider mb-8 text-primary">Patties</h3>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Meat</p>
              <div className="space-y-2">
                {patties.meat.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Vegetarian</p>
              <div className="space-y-2">
                {patties.vegetarian.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium uppercase tracking-wider mb-4 text-primary">Tarts</h3>
              <div className="space-y-2">
                {tarts.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
