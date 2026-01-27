import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="container-narrow text-center">
        <Logo className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-12" />
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-12">
          Modern Ethiopian · Harlem
        </p>
        <a href="#reservations">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Reserve a Table
          </Button>
        </a>
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
