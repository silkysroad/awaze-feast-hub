import logo from '@/assets/logo.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Awaze" className="h-8 w-auto" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#hours" className="text-muted-foreground hover:text-primary transition-colors">Hours</a>
          <a href="#injera" className="text-muted-foreground hover:text-primary transition-colors">Injera</a>
          <a href="#reservations" className="text-primary border-b border-primary pb-0.5 hover:opacity-80 transition-opacity">Reserve</a>
        </nav>

        <a href="#reservations" className="md:hidden text-sm uppercase tracking-widest border-b border-foreground pb-0.5">
          Reserve
        </a>
      </div>
    </header>
  );
}
