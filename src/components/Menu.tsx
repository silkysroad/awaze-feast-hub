import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import meatDish1 from '@/assets/dishes/meat-dish-1.jpg';
import meatDish2 from '@/assets/dishes/meat-dish-2.jpg';
import veggieDish1 from '@/assets/dishes/veggie-dish-1.jpg';
import veggieDish2 from '@/assets/dishes/veggie-dish-2.jpg';
import platter1 from '@/assets/dishes/platter-1.jpg';
import combo1 from '@/assets/dishes/combo-1.jpg';

const menuCategories = ['All', 'Meat', 'Vegetarian', 'Combos', 'Drinks'];

const menuItems = [
  {
    name: 'Doro Wat',
    description: 'Spicy chicken stew slow-cooked with berbere spices and served with hard-boiled eggs',
    price: '$24',
    category: 'Meat',
    featured: true,
    image: meatDish1,
  },
  {
    name: 'Kitfo',
    description: 'Ethiopian steak tartare seasoned with mitmita spice and spiced butter',
    price: '$22',
    category: 'Meat',
    image: meatDish2,
  },
  {
    name: 'Yebeg Tibs',
    description: 'Sautéed lamb cubes with rosemary, garlic, and jalapeño peppers',
    price: '$26',
    category: 'Meat',
    image: meatDish1,
  },
  {
    name: 'Misir Wat',
    description: 'Red lentils simmered in berbere sauce until tender and flavorful',
    price: '$16',
    category: 'Vegetarian',
    featured: true,
    image: veggieDish1,
  },
  {
    name: 'Gomen',
    description: 'Collard greens sautéed with garlic, ginger, and Ethiopian spices',
    price: '$14',
    category: 'Vegetarian',
    image: veggieDish2,
  },
  {
    name: 'Shiro',
    description: 'Chickpea flour stew seasoned with berbere and served creamy',
    price: '$15',
    category: 'Vegetarian',
    image: veggieDish1,
  },
  {
    name: 'Meat Lovers Combo',
    description: 'Doro Wat, Kitfo, and Tibs served with injera and all the fixings',
    price: '$38',
    category: 'Combos',
    featured: true,
    image: platter1,
  },
  {
    name: 'Veggie Delight',
    description: 'Misir Wat, Gomen, Shiro, Ayib, and Salad on a bed of injera',
    price: '$28',
    category: 'Combos',
    image: combo1,
  },
  {
    name: 'Ethiopian Coffee',
    description: 'Traditional jebena coffee with full ceremony experience',
    price: '$6',
    category: 'Drinks',
  },
  {
    name: 'Tej',
    description: 'Traditional honey wine with a sweet and complex flavor',
    price: '$10',
    category: 'Drinks',
  },
];

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Flavors of <span className="text-gradient">Tradition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Each dish is prepared using authentic recipes and the finest ingredients, 
            bringing the true taste of Ethiopia to your table.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 group ${
                item.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                {item.featured && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Chef's Favorite
                  </span>
                )}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-2xl font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="xl">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
