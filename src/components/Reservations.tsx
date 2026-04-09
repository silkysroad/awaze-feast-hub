import { useState } from 'react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid #ccc', padding: '12px 0', fontSize: '15px',
  color: '#1A1A1A', outline: 'none', fontFamily: 'inherit',
  WebkitAppearance: 'none', borderRadius: 0,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace", fontSize: '9px',
  letterSpacing: '0.18em', textTransform: 'uppercase' as const,
  color: '#888', display: 'block', marginBottom: '4px',
};

export function Reservations() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', partySize: '2', notes: '' });
  const [error, setError] = useState('');

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.date) {
      const d = new Date(form.date + 'T12:00:00');
      if (d.getDay() === 2) { setError('We are closed every Tuesday. Please choose another date.'); return; }
    }
    const body = `Reservation Request\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDate: ${form.date}\nTime: ${form.time}\nParty Size: ${form.partySize}\nSpecial Requests: ${form.notes || 'None'}`;
    window.location.href = `mailto:info@awaze.nyc?subject=Reservation — ${form.name}, ${form.partySize} guests, ${form.date}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="reservations" style={{ borderTop: '1px solid #e5e5e5' }}>
      {/* Hero photo strip */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img src={restaurantInterior} alt="Awaze Ethiopian Cuisine" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) brightness(0.75)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem 1.25rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '6px' }}>Reservations</p>
          <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em' }}>Book a Table</h2>
        </div>
      </div>

      {/* Form */}
      <div style={{ padding: '2rem 1.25rem 3rem', background: '#FFFFFF' }}>
        <p style={{ fontSize: '14px', color: '#777', marginBottom: '2rem', lineHeight: 1.6 }}>
          Up to 16 guests. We'll confirm within 2 hours during business hours.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={labelStyle}>Name *</label>
            <input required style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Date *</label>
              <input required type="date" style={inputStyle} value={form.date} onChange={e => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} />
            </div>
            <div>
              <label style={labelStyle}>Time *</label>
              <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.time} onChange={e => update('time', e.target.value)}>
                <option value="">Select</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Phone *</label>
              <input required type="tel" style={inputStyle} value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(212) 000-0000" />
            </div>
            <div>
              <label style={labelStyle}>Party Size *</label>
              <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.partySize} onChange={e => update('partySize', e.target.value)}>
                {Array.from({ length: 16 }, (_, i) => i + 1).map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
          </div>

          <div>
            <label style={labelStyle}>Special Requests</label>
            <textarea style={{ ...inputStyle, resize: 'none', height: '80px' }} value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Allergies, celebrations, accessibility..." />
          </div>

          {error && <p style={{ color: '#ED2E2E', fontFamily: "'Space Mono', monospace", fontSize: '11px' }}>{error}</p>}

          <button type="submit" style={{
            background: '#1A1A1A', color: '#FFFFFF', border: 'none',
            padding: '18px', fontFamily: "'Space Mono', monospace",
            fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
            cursor: 'pointer', width: '100%', marginTop: '0.5rem',
          }}>
            Request Reservation →
          </button>

          <p style={{ fontSize: '12px', color: '#aaa', textAlign: 'center' }}>
            Larger parties or private events?{' '}
            <a href="tel:+19176393112" style={{ color: '#ED2E2E', textDecoration: 'none', fontWeight: 700 }}>(917) 639-3112</a>
          </p>
        </form>
      </div>
    </section>
  );
}
