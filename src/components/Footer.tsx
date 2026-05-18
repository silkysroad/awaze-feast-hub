import { Link } from 'react-router-dom';
import { useMemo, useState, type FormEvent } from 'react';
import logo from '@/assets/logo.png';

const hours = [
  { day: 'Mon', time: '1PM–10PM' },
  { day: 'Tue', time: '1PM–10PM' },
  { day: 'Wed', time: '1PM–10PM' },
  { day: 'Thu', time: '1PM–10PM' },
  { day: 'Fri', time: '4PM–10PM' },
  { day: 'Sat', time: '12PM–10PM' },
  { day: 'Sun', time: '1PM–10PM' },
];

export function Footer() {
  const [contact, setContact] = useState({ email: '', phone: '' });

  const signupBody = useMemo(() => {
    return [
      'New Awaze customer signup',
      '',
      'Email: ' + (contact.email || 'Not provided'),
      'Phone: ' + (contact.phone || 'Not provided'),
      '',
      'Source: awaze.nyc footer',
      'Requested: Add me to Awaze updates / Awaze Insiders when live',
    ].join('\n');
  }, [contact]);

  const submitSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent('Awaze customer signup');
    window.location.href = 'mailto:awazenyc@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(signupBody);
  };

  return (
    <footer className="border-t border-primary/20 py-16" style={{ background: '#1A1A1A', color: '#F5F0E8' }}>
      <div className="container-narrow">
        <div style={{ border: '1px solid #343434', padding: '1.25rem', marginBottom: '2.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', alignItems: 'end' }}>
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '0.5rem' }}>Awaze updates</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.15rem', lineHeight: 1.2, margin: 0 }}>Join the list for events, catering drops, and rewards.</h2>
          </div>
          <form onSubmit={submitSignup} style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            <input
              aria-label="Email for Awaze updates"
              type="email"
              value={contact.email}
              onChange={event => setContact(current => ({ ...current, email: event.target.value }))}
              placeholder="email"
              style={{ width: '100%', border: '1px solid #444', background: '#111', color: '#F5F0E8', padding: '12px', borderRadius: 0 }}
            />
            <input
              aria-label="Phone for Awaze updates"
              type="tel"
              value={contact.phone}
              onChange={event => setContact(current => ({ ...current, phone: event.target.value }))}
              placeholder="phone"
              style={{ width: '100%', border: '1px solid #444', background: '#111', color: '#F5F0E8', padding: '12px', borderRadius: 0 }}
            />
            <button type="submit" style={{ background: '#ED2E2E', color: '#fff', border: 0, padding: '13px 16px', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
              Join
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/">
              <img src={logo} alt="Awaze Ethiopian Cuisine" className="h-8 w-auto mb-4" style={{ filter: 'invert(1)' }} />
            </Link>
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
              <Link to="/menu" className="block text-gray-300 hover:text-white transition-colors">Full Menu</Link>
              <Link to="/reservations" className="block text-gray-300 hover:text-white transition-colors">Reservations</Link>
              <Link to="/catering" className="block text-gray-300 hover:text-white transition-colors">Catering</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/ethiopian-restaurant-harlem" className="block text-gray-300 hover:text-white transition-colors">Ethiopian Restaurant Harlem</Link>
              <Link to="/injera-nyc" className="block text-gray-300 hover:text-white transition-colors">Injera NYC</Link>
              <Link to="/doro-wat-nyc" className="block text-gray-300 hover:text-white transition-colors">Doro Wat NYC</Link>
              <a href="mailto:catering@awaze.nyc" className="block text-gray-300 hover:text-white transition-colors">catering@awaze.nyc</a>
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
