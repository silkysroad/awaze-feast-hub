import logo from '@/assets/logo.png';

const hours = [
  { day: 'Mon', time: '6PM–10PM' },
  { day: 'Tue', time: 'Closed' },
  { day: 'Wed', time: '5PM–10PM' },
  { day: 'Thu', time: '5PM–10PM' },
  { day: 'Fri', time: '4PM–10PM' },
  { day: 'Sat', time: '12PM–10PM' },
  { day: 'Sun', time: '1PM–10PM' },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-16" style={{ background: '#1A1A1A', color: '#F5F0E8' }}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Awaze Ethiopian Cuisine" className="h-8 w-auto mb-4" style={{ filter: 'invert(1)' }} />
            <p className="text-xs text-gray-400 leading-relaxed mt-3">
              Seed oil free Ethiopian cuisine.<br />
              Avocado oil · Butter &amp; Love.<br />
              No canola. No soybean. Ever.
            </p>
          </div>

          {/* Visit */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Visit</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>2288 Frederick Douglass Blvd</p>
              <p>Harlem, New York, NY 10027</p>
              <a href="tel:+19176393112" className="block hover:text-white transition-colors" style={{ color: '#ED2E2E' }}>
                (917) 639-3112
              </a>
              <a
                href="https://maps.google.com/?q=2288+Frederick+Douglass+Blvd+New+York+NY+10027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Hours</p>
            <div className="space-y-1.5">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.day}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: item.time === 'Closed' ? '#555' : '#ED2E2E' }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Connect</p>
            <div className="space-y-2 text-sm">
              <a href="https://www.instagram.com/awazenyc" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="mailto:catering@awaze.nyc" className="block text-gray-300 hover:text-white transition-colors">Catering Inquiries</a>
              <a href="#reservations" className="block text-gray-300 hover:text-white transition-colors">Reserve a Table</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Awaze Ethiopian Cuisine · Harlem, NYC · All rights reserved.</p>
          <p style={{ fontFamily: "'Space Mono', monospace" }}>awaze.nyc · @awazenyc</p>
        </div>
      </div>
    </footer>
  );
}
