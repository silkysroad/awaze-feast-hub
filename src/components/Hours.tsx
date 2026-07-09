const hours = [
  { day: 'Monday',    time: '3PM – 10PM' },
  { day: 'Tuesday',   time: '3PM – 10PM' },
  { day: 'Wednesday', time: '3PM – 10PM' },
  { day: 'Thursday',  time: '3PM – 10PM' },
  { day: 'Friday',    time: '2PM – 10PM' },
  { day: 'Saturday',  time: '2PM – 10PM' },
  { day: 'Sunday',    time: '2PM – 10PM' },
];

export function Hours() {
  return (
    <section id="hours" className="section-spacing border-t border-primary/20" style={{ background: '#FFFFFF' }}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Hours */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-10" style={{ fontFamily: "'Space Mono', monospace" }}>Hours</h2>
            <div className="space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between text-sm ${item.time === 'Closed' ? 'text-muted-foreground' : ''}`}
                >
                  <span className="uppercase tracking-wider font-medium">{item.day}</span>
                  <span className="font-mono" style={{ color: item.time === 'Closed' ? undefined : '#ED2E2E', fontFamily: "'Space Mono', monospace" }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 italic">Open Monday through Thursday, 3PM – 10PM.</p>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-10" style={{ fontFamily: "'Space Mono', monospace" }}>Location</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Address</p>
                <p className="text-lg">2288 Frederick Douglass Blvd</p>
                <p className="text-lg">New York, NY 10027</p>
                <p className="text-sm text-muted-foreground mt-1">Harlem, between 128th & 129th St</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Phone</p>
                <a href="tel:+19176393112" className="text-lg hover:text-primary transition-colors">
                  (917) 639-3112
                </a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Catering Inquiries</p>
                <a href="mailto:catering@awaze.nyc" className="text-sm hover:text-primary transition-colors" style={{ color: '#ED2E2E' }}>
                  catering@awaze.nyc
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=2288+Frederick+Douglass+Blvd+New+York+NY+10027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest border-b border-primary pb-0.5 text-primary hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
