import logo from '@/assets/logo.png';

const hours = [
  { day: 'Mon', time: '7am–2pm, 5pm–10pm' },
  { day: 'Tue', time: 'Closed' },
  { day: 'Wed', time: '7am–2pm, 5pm–10pm' },
  { day: 'Thu', time: '7am–2pm, 5pm–10pm' },
  { day: 'Fri', time: '7am–10pm' },
  { day: 'Sat', time: '7am–10pm' },
  { day: 'Sun', time: '7am–10pm' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="Awaze" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Modern Ethiopian · Harlem
            </p>
          </div>

          {/* Address & Phone */}
          <div className="space-y-4">
            <div>
              <p className="text-sm">2288 Frederick Douglass Blvd</p>
              <p className="text-sm">New York, NY 10027</p>
            </div>
            <a href="tel:+19176393112" className="text-sm hover:text-primary transition-colors block">
              (917) 639-3112
            </a>
          </div>

          {/* Hours */}
          <div>
            <div className="space-y-1">
              {hours.map((item) => (
                <div 
                  key={item.day} 
                  className={`flex justify-between text-sm ${
                    item.time === 'Closed' ? 'text-muted-foreground' : ''
                  }`}
                >
                  <span>{item.day}</span>
                  <span className="font-mono text-xs">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Awaze. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
