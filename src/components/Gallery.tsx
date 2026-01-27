import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import platter1 from '@/assets/dishes/platter-1.jpg';
import platter2 from '@/assets/dishes/platter-2.jpg';
import meatDish1 from '@/assets/dishes/meat-dish-1.jpg';
import meatDish2 from '@/assets/dishes/meat-dish-2.jpg';
import veggieDish1 from '@/assets/dishes/veggie-dish-1.jpg';
import combo1 from '@/assets/dishes/combo-1.jpg';

const galleryImages = [
  { src: platter1, alt: 'Ethiopian cuisine platter with colorful stews', span: 'col-span-2 row-span-2' },
  { src: meatDish1, alt: 'Traditional meat dish', span: 'col-span-1 row-span-1' },
  { src: veggieDish1, alt: 'Vegetarian dishes', span: 'col-span-1 row-span-1' },
  { src: platter2, alt: 'Full Ethiopian spread', span: 'col-span-1 row-span-1' },
  { src: combo1, alt: 'Combo platter', span: 'col-span-1 row-span-1' },
  { src: meatDish2, alt: 'Spiced meat stew', span: 'col-span-2 row-span-1' },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            A Feast for the <span className="text-gradient">Eyes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Discover the vibrant colors and rich textures of our authentic Ethiopian dishes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
