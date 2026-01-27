import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import interiorImage from '@/assets/restaurant-interior.jpg';
import coffeeImage from '@/assets/coffee-ceremony.jpg';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            A Taste of <span className="text-gradient">Ethiopia</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={interiorImage}
                  alt="Restaurant interior"
                  className="rounded-2xl shadow-elevated w-full h-64 object-cover"
                />
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <p className="font-display text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Years of Excellence</p>
                </div>
              </div>
              <div className="pt-8">
                <img
                  src={coffeeImage}
                  alt="Ethiopian coffee ceremony"
                  className="rounded-2xl shadow-elevated w-full h-80 object-cover"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Named after the beloved Ethiopian spice blend that brings warmth and depth 
              to our dishes, <strong className="text-foreground">Awaze</strong> is more than 
              a restaurant—it's a celebration of heritage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began with a simple mission: to share the authentic flavors of 
              Ethiopia with our community. Every recipe has been passed down through 
              generations, prepared with love and served with the traditional hospitality 
              that defines Ethiopian culture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the moment you step through our doors, you become part of our family. 
              Gather around the mesob, share injera with loved ones, and experience the 
              communal spirit that makes Ethiopian dining truly special.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '50+', label: 'Authentic Dishes' },
                { number: '100%', label: 'Fresh Ingredients' },
                { number: '5★', label: 'Customer Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
