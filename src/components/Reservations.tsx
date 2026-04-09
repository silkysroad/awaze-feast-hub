import { useState } from 'react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const MONO = "'Space Mono', monospace";
const RED = '#ED2E2E';
const DARK = '#1A1A1A';
const CREAM = '#F5F0E8';

const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

export function Reservations() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', partySize: '2', notes: '',
  });
  const [error, setError] = useState('');

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.date) {
      const d = new Date(form.date + 'T12:00:00');
      if (d.getDay() === 2) {
        setError('We are closed every Tuesday. Please select another date.');
        return;
      }
    }

    const body = `Reservation Request\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDate: ${form.date}\nTime: ${form.time}\nParty Size: ${form.partySize}\nSpecial Requests: ${form.notes || 'None'}`;
    const mailto = `mailto:info@awaze.nyc?subject=Reservation Request — ${form.name}, ${form.partySize} guests, ${form.date}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid #ccc`,
    padding: '10px 0',
    fontSize: '14px',
    color: DARK,
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: MONO,
    fontSize: '9px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#888',
    display: 'block',
    marginBottom: '4px',
  };

  return (
    <section id="reservations" style={{ borderTop: '1px solid #e5e5e5' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>

        {/* LEFT — Form */}
        <div style={{ padding: 'clamp(2rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: RED, marginBottom: '1rem' }}>
            Reservations
          </p>
          <h2 style={{ fontFamily: MONO, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: DARK, lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Book a Table
          </h2>
          <p style={{ fontSize: '13px', color: '#777', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Up to 16 guests. We'll confirm within 2 hours during business hours.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input required style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" />
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Date *</label>
                <input required type="date" style={inputStyle} value={form.date} onChange={e => update('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label style={labelStyle}>Time *</label>
                <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.time} onChange={e => update('time', e.target.value)}>
                  <option value="">Select a time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Phone *</label>
                <input required type="tel" style={inputStyle} value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(212) 000-0000" />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" style={inputStyle} value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Special Requests</label>
              <textarea
                style={{ ...inputStyle, resize: 'none', height: '70px', borderBottom: '1px solid #ccc' }}
                value={form.notes}
                onChange={e => update('notes', e.target.value)}
                placeholder="Allergies, celebrations, accessibility needs..."
              />
            </div>

            {error && (
              <p style={{ color: RED, fontFamily: MONO, fontSize: '11px' }}>{error}</p>
            )}

            <button type="submit" style={{
              background: DARK,
              color: '#FFFFFF',
              border: 'none',
              padding: '16px 32px',
              fontFamily: MONO,
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s',
              width: '100%',
            }}
              onMouseOver={e => (e.currentTarget.style.background = RED)}
              onMouseOut={e => (e.currentTarget.style.background = DARK)}
            >
              Request Reservation →
            </button>

            <p style={{ fontSize: '11px', color: '#aaa', fontStyle: 'italic', textAlign: 'center' }}>
              For parties over 16 or private events, call us at{' '}
              <a href="tel:+19176393112" style={{ color: RED, textDecoration: 'none' }}>(917) 639-3112</a>
            </p>
          </form>
        </div>

        {/* RIGHT — Photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
          <img
            src={restaurantInterior}
            alt="Awaze Ethiopian Cuisine — Harlem"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.85) brightness(0.85)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(26,26,26,0.3) 0%, transparent 60%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem',
          }}>
            <p style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.15em', color: CREAM, opacity: 0.7 }}>
              2288 Frederick Douglass Blvd<br />Harlem, New York City
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
