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
    <section id="menu" className="py-16 border-t border-primary/20">
      <div className="container-narrow">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-medium mb-2">Menu</h2>
        <p className="text-muted-foreground text-sm mb-10">Modern Ethiopian Bowls + Platters</p>

        {/* Signature Platters - Compact Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-primary">Signature Platters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {signaturePlatters.map((platter) => (
              <div key={platter.name} className="border-l-2 border-primary/30 pl-3">
                <h4 className="text-sm font-medium">{platter.name}</h4>
                <p className="text-xs text-muted-foreground mb-1">{platter.type}</p>
                <p className="text-xs font-mono text-primary">{platter.priceRice}–{platter.priceFamily}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-12" />

        {/* Appetizers - Three Column */}
        <div className="mb-12">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-primary">Appetizers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
            {appetizers.map((item) => (
              <div key={item.name} className="flex justify-between text-xs">
                <span>{item.name}</span>
                <span className="font-mono text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-12" />

        {/* Build Your Own - Compact */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Build Your Own</h3>
            <span className="text-xs text-muted-foreground">Rice or w/Injera +$3</span>
          </div>
          
          {/* Bowls inline */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs">
            {buildYourOwn.bowls.map((bowl) => (
              <span key={bowl.name}>
                <span className="font-medium">{bowl.name}</span>
                <span className="text-muted-foreground"> ({bowl.desc})</span>
                <span className="font-mono text-primary ml-1">{bowl.price}</span>
              </span>
            ))}
          </div>

          {/* Proteins Grid */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Proteins</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-xs">
              {buildYourOwn.proteins.beef.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="truncate pr-2">{item.name.split(' | ')[0]}</span>
                  <span className="font-mono text-primary shrink-0">$17-18</span>
                </div>
              ))}
              {buildYourOwn.proteins.chicken.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="truncate pr-2">{item.name.split(' | ')[0]}</span>
                  <span className="font-mono text-primary shrink-0">$15</span>
                </div>
              ))}
              {buildYourOwn.proteins.fish.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="truncate pr-2">{item.name.split(' | ')[0]}</span>
                  <span className="font-mono text-primary shrink-0">$17</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stews & Veggies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Stews</p>
              <div className="space-y-1 text-xs">
                {buildYourOwn.stews.map((item) => (
                  <div key={item.name}>{item.name.split(' | ')[0]}</div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Veggies</p>
              <div className="space-y-1 text-xs">
                {buildYourOwn.veggies.map((item) => (
                  <div key={item.name}>{item.name.split(' | ')[0]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider mb-12" />

        {/* Drinks, Coffee, Cafe Mains, Patties - 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-primary">Drinks</h3>
            <div className="space-y-1">
              {drinks.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-mono text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-primary">Coffee</h3>
            <div className="space-y-1">
              {coffee.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-mono text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-primary">Cafe Mains</h3>
            <div className="space-y-1">
              {cafeMains.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="truncate pr-2">{item.name.split(' | ')[0]}</span>
                  <span className="font-mono text-primary shrink-0">{item.price || '$17'}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-primary">Patties & Tarts</h3>
            <div className="space-y-1">
              {[...patties.meat, ...patties.vegetarian.slice(0, 2), ...tarts].map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-mono text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
