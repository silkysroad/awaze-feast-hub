import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-food.jpg';
import interiorImage from '@/assets/restaurant-interior.jpg';
import diningImage from '@/assets/dining-experience.jpg';
import coffeeImage from '@/assets/coffee-ceremony.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Ethiopian cuisine platter', span: 'col-span-2 row-span-2' },
  { src: interiorImage, alt: 'Restaurant ambiance', span: 'col-span-1 row-span-1' },
  { src: coffeeImage, alt: 'Coffee ceremony', span: 'col-span-1 row-span-1' },
  { src: diningImage, alt: 'Dining experience', span: 'col-span-2 row-span-1' },
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
            Step inside Awaze and discover an atmosphere where tradition meets modern elegance.
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
