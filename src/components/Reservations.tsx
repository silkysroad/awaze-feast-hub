import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { CalendarDays, Clipboard, Phone } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior-real.jpg';

type ReservationForm = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  seating: string;
  insiders: boolean;
  notes: string;
};

const initialForm: ReservationForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '',
  occasion: '',
  seating: '',
  insiders: true,
  notes: '',
};

const inputStyle = {
  width: '100%',
  border: '1px solid #d8d0c8',
  background: '#fffaf4',
  color: '#1A1A1A',
  padding: '13px 12px',
  fontSize: '16px',
  borderRadius: 0,
  outline: 'none',
} as const;

const labelStyle = {
  display: 'block',
  fontFamily: "'Space Mono', monospace",
  fontSize: '9px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  color: '#6f6861',
  marginBottom: '8px',
};

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

export function Reservations() {
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [copied, setCopied] = useState(false);

  const update = (field: keyof ReservationForm, value: string | boolean) => {
    setForm(current => ({ ...current, [field]: value }));
  };

  const reservationText = useMemo(() => {
    return [
      'New Awaze reservation request',
      '',
      'Guest',
      'Name: ' + (form.name || 'Not provided'),
      'Phone: ' + (form.phone || 'Not provided'),
      'Email: ' + (form.email || 'Not provided'),
      '',
      'Reservation',
      'Date: ' + (form.date || 'Not provided'),
      'Time: ' + (form.time || 'Not provided'),
      'Party size: ' + (form.guests || 'Not provided'),
      'Occasion: ' + (form.occasion || 'Not provided'),
      'Seating preference: ' + (form.seating || 'No preference'),
      'Awaze Insiders opt-in: ' + (form.insiders ? 'Yes - add 200 points when I dine' : 'No'),
      '',
      'Notes',
      form.notes || 'Not provided',
    ].join('\n');
  }, [form]);

  const mailtoHref = useMemo(() => {
    const subject = 'Awaze reservation request' + (form.date ? ' - ' + form.date : '') + (form.time ? ' ' + form.time : '');
    return 'mailto:awazenyc@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(reservationText);
  }, [form.date, form.time, reservationText]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  const copyReservation = async () => {
    await navigator.clipboard.writeText(reservationText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="reservations" style={{ borderTop: '1px solid #e5e5e5' }}>
      <style>{'@keyframes awazeRoomDrift { 0% { transform: scale(1.03) translate3d(0, 0, 0); } 100% { transform: scale(1.08) translate3d(-1.5%, -1%, 0); } }'}</style>

      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={restaurantInterior}
          alt="Awaze Ethiopian Cuisine dining room"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 58%',
            filter: 'saturate(1.04) contrast(1.06) brightness(0.82) sepia(0.08)',
            animation: 'awazeRoomDrift 16s ease-in-out infinite alternate',
            transformOrigin: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.48))' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem 1.25rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '6px' }}>
            Reservations
          </p>
          <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Book a Table
          </h2>
        </div>
      </div>

      <div style={{ padding: '2.5rem 1.25rem 3rem', background: '#FFFFFF' }}>
        <p style={{ fontSize: '14px', color: '#777', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Send a table request with date, time, party size, and notes. For same-day large parties, call after submitting so the floor can confirm quickly.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
            <Field label="Name">
              <input required style={inputStyle} value={form.name} onChange={event => update('name', event.target.value)} />
            </Field>
            <Field label="Phone">
              <input required style={inputStyle} type="tel" value={form.phone} onChange={event => update('phone', event.target.value)} />
            </Field>
            <Field label="Email">
              <input style={inputStyle} type="email" value={form.email} onChange={event => update('email', event.target.value)} />
            </Field>
            <Field label="Date">
              <input required style={inputStyle} type="date" value={form.date} onChange={event => update('date', event.target.value)} />
            </Field>
            <Field label="Time">
              <input required style={inputStyle} type="time" value={form.time} onChange={event => update('time', event.target.value)} />
            </Field>
            <Field label="Party size">
              <input required style={inputStyle} inputMode="numeric" value={form.guests} onChange={event => update('guests', event.target.value)} placeholder="Example: 6" />
            </Field>
            <Field label="Occasion">
              <input style={inputStyle} value={form.occasion} onChange={event => update('occasion', event.target.value)} placeholder="Birthday, graduation, date night..." />
            </Field>
            <Field label="Seating">
              <select style={inputStyle} value={form.seating} onChange={event => update('seating', event.target.value)}>
                <option value="">No preference</option>
                <option>Indoor</option>
                <option>Outdoor / sidewalk</option>
                <option>Bar area</option>
                <option>Large party tables</option>
              </select>
            </Field>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#fffaf4', border: '1px solid #d8d0c8', padding: '12px', marginBottom: '1rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={form.insiders}
                onChange={event => update('insiders', event.target.checked)}
                style={{ width: 18, height: 18, marginTop: 2, accentColor: '#ED2E2E' }}
              />
              <span style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                Add me to Awaze Insiders when I dine. I want the 200-point welcome bonus and occasional Awaze updates by phone/email.
              </span>
            </label>
            <Field label="Notes">
              <textarea
                style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
                value={form.notes}
                onChange={event => update('notes', event.target.value)}
                placeholder="High chair, large party, separate checks, casual setup, allergies, timing, special requests..."
              />
            </Field>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '1rem' }}>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#ED2E2E', color: '#fff', border: 0, padding: '18px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
              <CalendarDays size={16} /> Send Reservation
            </button>
            <button type="button" onClick={copyReservation} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#1A1A1A', color: '#F5F0E8', border: 0, padding: '18px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
              <Clipboard size={16} /> {copied ? 'Copied' : 'Copy Details'}
            </button>
          </div>
        </form>

        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee', display: 'grid', gap: '0.75rem', color: '#777', fontSize: '13px', lineHeight: 1.6 }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#ED2E2E', fontWeight: 700, flexShrink: 0 }}>✦</span>
            <span>Open daily · Tuesday 5PM-10PM</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#ED2E2E', fontWeight: 700, flexShrink: 0 }}>✦</span>
            <span>Large parties are welcome, but confirmation is manual.</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Phone size={15} color="#ED2E2E" />
            <span>
              Questions? Call{' '}
              <a href="tel:+19176393112" style={{ color: '#ED2E2E', textDecoration: 'none', fontWeight: 700 }}>
                (917) 639-3112
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
