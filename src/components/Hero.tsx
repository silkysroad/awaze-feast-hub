import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/dishes/platter-1.jpg';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ethiopian cuisine spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-6"
        >
          Authentic Ethiopian Cuisine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Welcome to{' '}
          <span className="text-gradient-gold">Awaze</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Experience the rich flavors and warm hospitality of Ethiopia. 
          Every dish tells a story of tradition, community, and love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            Reserve Your Table
          </Button>
          <Button variant="heroOutline" size="xl">
            Explore Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
