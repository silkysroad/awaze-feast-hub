export function Reservations() {
  return (
    <section id="reservations" className="section-spacing border-t border-primary/20">
      <div className="container-narrow">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Reservations</h2>
          <p className="text-muted-foreground mb-8">
            Book a table for up to 16 guests. For larger parties, please call us directly.
          </p>

          {/* Square Appointments Widget Placeholder */}
          <div className="border border-border p-12 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Square Appointments Widget
            </p>
            <p className="text-xs text-muted-foreground">
              Embed code goes here
            </p>
            {/* 
              To integrate Square Appointments:
              Replace this div with your Square Appointments embed code.
              Example: <script src="https://square.site/appointments/..."></script>
            */}
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              Maximum party size: 16 guests
            </p>
            <p className="text-sm text-muted-foreground">
              For special events or large groups, call{' '}
              <a href="tel:+19176393112" className="text-primary hover:opacity-80 transition-opacity">
                (917) 639-3112
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
