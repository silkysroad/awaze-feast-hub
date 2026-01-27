import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import diningImage from '@/assets/dining-experience.jpg';

const menuCategories = ['All', 'Meat', 'Vegetarian', 'Sides', 'Drinks'];

const menuItems = [
  {
    name: 'Doro Wat',
    description: 'Spicy chicken stew slow-cooked with berbere spices and served with hard-boiled eggs',
    price: '$24',
    category: 'Meat',
    featured: true,
  },
  {
    name: 'Kitfo',
    description: 'Ethiopian steak tartare seasoned with mitmita spice and spiced butter',
    price: '$22',
    category: 'Meat',
  },
  {
    name: 'Yebeg Tibs',
    description: 'Sautéed lamb cubes with rosemary, garlic, and jalapeño peppers',
    price: '$26',
    category: 'Meat',
  },
  {
    name: 'Misir Wat',
    description: 'Red lentils simmered in berbere sauce until tender and flavorful',
    price: '$16',
    category: 'Vegetarian',
    featured: true,
  },
  {
    name: 'Gomen',
    description: 'Collard greens sautéed with garlic, ginger, and Ethiopian spices',
    price: '$14',
    category: 'Vegetarian',
  },
  {
    name: 'Shiro',
    description: 'Chickpea flour stew seasoned with berbere and served creamy',
    price: '$15',
    category: 'Vegetarian',
  },
  {
    name: 'Injera',
    description: 'Traditional spongy sourdough flatbread made from teff flour',
    price: '$4',
    category: 'Sides',
  },
  {
    name: 'Ayib',
    description: 'Fresh Ethiopian cottage cheese with herbs',
    price: '$8',
    category: 'Sides',
  },
  {
    name: 'Ethiopian Coffee',
    description: 'Traditional jebena coffee with full ceremony experience',
    price: '$6',
    category: 'Drinks',
    featured: true,
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
              className={`bg-card rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 group ${
                item.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {item.featured && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
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
