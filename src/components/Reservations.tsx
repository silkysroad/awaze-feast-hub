import { useEffect } from 'react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const SQUARE_BOOKING_URL = 'https://square.site/book/LYH1098JZC66T/awaze-new-york-ny';

export function Reservations() {
  useEffect(() => {
    // Load Square Appointments widget script
    if (!document.getElementById('sq-appointments-widget')) {
      const script = document.createElement('script');
      script.id = 'sq-appointments-widget';
      script.src = 'https://square.site/appointments/buyer/widget/LYH1098JZC66T/awaze-new-york-ny.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reservations" style={{ borderTop: '1px solid #e5e5e5' }}>

      {/* Hero photo strip */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={restaurantInterior}
          alt="Awaze Ethiopian Cuisine"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) brightness(0.75)' }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem 1.25rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '6px' }}>
            Reservations
          </p>
          <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Book a Table
          </h2>
        </div>
      </div>

      {/* Booking content */}
      <div style={{ padding: '2.5rem 1.25rem 3rem', background: '#FFFFFF' }}>
        <p style={{ fontSize: '14px', color: '#777', marginBottom: '2rem', lineHeight: 1.7 }}>
          Reserve your table directly through our Square booking system. Confirmed instantly.
        </p>

        {/* Square Appointments embed button */}
        <div style={{ marginBottom: '2rem' }}>
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-sq-widget="appointments"
            style={{
              display: 'block',
              background: '#ED2E2E',
              color: '#FFFFFF',
              padding: '18px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 700,
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            Book a Table →
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#777', fontSize: '13px', lineHeight: 1.6 }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#ED2E2E', fontWeight: 700, flexShrink: 0 }}>✦</span>
            <span>Open Wednesday–Monday · Closed every Tuesday</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#ED2E2E', fontWeight: 700, flexShrink: 0 }}>✦</span>
            <span>Up to 16 guests · For larger parties call us directly</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#ED2E2E', fontWeight: 700, flexShrink: 0 }}>✦</span>
            <span>You'll receive a confirmation via text or email</span>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#aaa' }}>
            Questions? Call{' '}
            <a href="tel:+19176393112" style={{ color: '#ED2E2E', textDecoration: 'none', fontWeight: 700 }}>
              (917) 639-3112
            </a>
          </p>
        </div>
      </div>

    </section>
  );
}
