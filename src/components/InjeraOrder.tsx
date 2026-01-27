import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function InjeraOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: 1,
    pickupDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate not Tuesday
    const date = new Date(formData.pickupDate);
    if (date.getDay() === 2) {
      toast.error('Sorry, we are closed on Tuesdays. Please select another day.');
      return;
    }
    
    toast.success('Order submitted! We will confirm via phone.');
    setFormData({ name: '', phone: '', quantity: 1, pickupDate: '' });
  };

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="injera" className="section-spacing border-t border-border">
      <div className="container-narrow">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Injera To-Go</h2>
          <p className="text-muted-foreground mb-2">Pack of 10 — $20</p>
          <p className="text-sm text-muted-foreground mb-12">
            Pickup only. Available next day after 2pm. Closed Tuesdays.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm uppercase tracking-wider text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm uppercase tracking-wider text-muted-foreground block mb-2">
                Phone
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label className="text-sm uppercase tracking-wider text-muted-foreground block mb-2">
                Quantity (packs of 10)
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num} className="bg-background">
                    {num} pack{num > 1 ? 's' : ''} — ${num * 20}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm uppercase tracking-wider text-muted-foreground block mb-2">
                Pickup Date (after 2pm)
              </label>
              <input
                type="date"
                required
                min={minDate}
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
              />
              <p className="text-xs text-muted-foreground mt-2">Tuesdays unavailable</p>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="outline" className="w-full">
                Submit Order
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
