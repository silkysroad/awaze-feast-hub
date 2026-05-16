import { Header } from '@/components/Header';
import { Reservations } from '@/components/Reservations';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

export default function ReservationsPage() {
  useSEO({
    title: 'Reservations — Awaze | Book a Table in Harlem NYC',
    description: 'Request a table at Awaze Ethiopian Cuisine in Harlem. Choose date, time, party size, occasion, and seating notes.',
    canonical: 'https://awaze.nyc/reservations',
  });

  return (
    <div className="min-h-screen" style={{ background: '#F5F0E8' }}>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

