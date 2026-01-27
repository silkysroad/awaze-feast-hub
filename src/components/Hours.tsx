const hours = [
  { day: 'Monday', time: '7am–2pm, 5pm–10pm' },
  { day: 'Tuesday', time: 'Closed' },
  { day: 'Wednesday', time: '7am–2pm, 5pm–10pm' },
  { day: 'Thursday', time: '7am–2pm, 5pm–10pm' },
  { day: 'Friday', time: '7am–10pm' },
  { day: 'Saturday', time: '7am–10pm' },
  { day: 'Sunday', time: '7am–10pm' },
];

export function Hours() {
  return (
    <section id="hours" className="section-spacing border-t border-border">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-12">Hours</h2>
            <div className="space-y-3">
              {hours.map((item) => (
                <div 
                  key={item.day} 
                  className={`flex justify-between text-sm ${
                    item.time === 'Closed' ? 'text-muted-foreground' : ''
                  }`}
                >
                  <span className="uppercase tracking-wider">{item.day}</span>
                  <span className="font-mono">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-12">Location</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Address</p>
                <p className="text-lg">2288 Frederick Douglass Blvd</p>
                <p className="text-lg">New York, NY 10027</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:+19176393112" className="text-lg hover:text-primary transition-colors">
                  (917) 639-3112
                </a>
              </div>
              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=2288+Frederick+Douglass+Blvd+New+York+NY+10027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
