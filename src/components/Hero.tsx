import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative" style={{ background: '#F5F0E8' }}>
      <div className="container-narrow text-center">
        <img
          src={logo}
          alt="Awaze Ethiopian Cuisine — Seed Oil Free Restaurant Harlem NYC"
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-10"
        />
        <p className="text-sm uppercase mb-3" style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.25em', color: '#ED2E2E' }}>
          Seed Oil Free · Harlem, NYC
        </p>
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-10">
          Ethiopian Cuisine · Avocado Oil · Butter &amp; Love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reservations">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Reserve a Table
            </Button>
          </a>
          <a href="#catering">
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary">
              Catering →
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <a
          href="#menu"
          className="text-muted-foreground text-xs uppercase tracking-widest hover:text-primary transition-colors"
        >
          Scroll
        </a>
      </div>
    </section>
  );
}
