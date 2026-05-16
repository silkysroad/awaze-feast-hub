import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { CalendarDays, Clipboard, Mail, Sparkles, Users, Utensils } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

type InquiryForm = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  guestCount: string;
  serviceStyle: string;
  location: string;
  budget: string;
  foodInterests: string;
  drinkInterests: string;
  addOns: string[];
  decorationNotes: string;
  priority: string;
  notes: string;
};

const initialForm: InquiryForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  startTime: '',
  endTime: '',
  guestCount: '',
  serviceStyle: '',
  location: '',
  budget: '',
  foodInterests: '',
  drinkInterests: '',
  addOns: [],
  decorationNotes: '',
  priority: '',
  notes: '',
};

const eventTypes = ['Graduation', 'Birthday', 'Wedding', 'Corporate', 'Private dinner', 'Memorial', 'Film/photo set', 'Other'];
const serviceStyles = ['Catering pickup', 'Delivery/dropoff', 'Staffed catering', 'Private event at Awaze', 'Full restaurant buyout', 'Not sure yet'];
const budgetRanges = ['$500-$1,000', '$1,000-$2,000', '$2,000-$3,500', '$3,500-$5,000', '$5,000+', 'Not sure yet'];
const priorities = ['Food', 'Vibe / presentation', 'Convenience', 'Photos', 'Budget', 'Full-service help'];
const addOnOptions = [
  'Decorations / room styling',
  'Flowers / balloons / table styling',
  'Photographer',
  'On-site servers',
  'Bartender / drink service',
  'Wine / tej package',
  'Printed menu cards',
  'Setup and breakdown',
  'Music / DJ help',
];

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

const sectionStyle = {
  padding: '1.25rem',
  borderTop: '1px solid #ded5cb',
} as const;

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

function SectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
      <div style={{ width: 34, height: 34, display: 'grid', placeItems: 'center', background: '#ED2E2E', color: '#fff' }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: 2 }}>
          {eyebrow}
        </p>
        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', color: '#1A1A1A', margin: 0 }}>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function CateringInquiryPage() {
  useSEO({
    title: 'Catering Inquiry — Awaze | Private Events, Graduation Parties, Catering NYC',
    description: 'Request Ethiopian catering or a private event at Awaze in Harlem. Food, drinks, staffing, decorations, photographer, and event styling options.',
    canonical: 'https://awaze.nyc/catering-inquiry',
  });

  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [copied, setCopied] = useState(false);

  const update = (field: keyof InquiryForm, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
  };

  const toggleAddOn = (value: string) => {
    setForm(current => ({
      ...current,
      addOns: current.addOns.includes(value)
        ? current.addOns.filter(item => item !== value)
        : [...current.addOns, value],
    }));
  };

  const inquiryText = useMemo(() => {
    return [
      'New catering/private event inquiry',
      '',
      'Contact',
      `Name: ${form.name || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      '',
      'Event',
      `Type: ${form.eventType || 'Not provided'}`,
      `Date: ${form.eventDate || 'Not provided'}`,
      `Time: ${form.startTime || 'Not provided'} - ${form.endTime || 'Not provided'}`,
      `Guests: ${form.guestCount || 'Not provided'}`,
      `Service style: ${form.serviceStyle || 'Not provided'}`,
      `Location: ${form.location || 'Not provided'}`,
      `Budget: ${form.budget || 'Not provided'}`,
      `Top priority: ${form.priority || 'Not provided'}`,
      '',
      'Food and drinks',
      form.foodInterests || 'Not provided',
      '',
      'Drinks / wine / tej',
      form.drinkInterests || 'Not provided',
      '',
      'Add-ons',
      form.addOns.length ? form.addOns.join(', ') : 'None selected',
      '',
      'Decor / styling notes',
      form.decorationNotes || 'Not provided',
      '',
      'Other notes',
      form.notes || 'Not provided',
    ].join('\n');
  }, [form]);

  const mailtoHref = useMemo(() => {
    const subject = `Awaze catering inquiry${form.eventType ? ` - ${form.eventType}` : ''}${form.eventDate ? ` - ${form.eventDate}` : ''}`;
    return `mailto:awazenyc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryText)}`;
  }, [form.eventDate, form.eventType, inquiryText]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  const copyInquiry = async () => {
    await navigator.clipboard.writeText(inquiryText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen" style={{ background: '#F5F0E8' }}>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <section style={{ padding: '3rem 1.25rem 2rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>
            Awaze private events
          </p>
          <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 9vw, 4rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.02, marginBottom: '1rem' }}>
            Tell Us What<br />You Are Planning.
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#555', maxWidth: 620 }}>
            Use this form for catering, graduation parties, private dinners, buyouts, drinks, staffing, decorations, and event styling. The more detail you share, the faster we can quote it.
          </p>
        </section>

        <form onSubmit={handleSubmit}>
          <section style={sectionStyle}>
            <SectionHeading icon={<Users size={18} />} eyebrow="Step 1" title="Contact" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <Field label="Name">
                <input required style={inputStyle} value={form.name} onChange={event => update('name', event.target.value)} />
              </Field>
              <Field label="Phone">
                <input required style={inputStyle} type="tel" value={form.phone} onChange={event => update('phone', event.target.value)} />
              </Field>
              <Field label="Email">
                <input style={inputStyle} type="email" value={form.email} onChange={event => update('email', event.target.value)} />
              </Field>
            </div>
          </section>

          <section style={sectionStyle}>
            <SectionHeading icon={<CalendarDays size={18} />} eyebrow="Step 2" title="Event details" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
              <Field label="Event type">
                <select required style={inputStyle} value={form.eventType} onChange={event => update('eventType', event.target.value)}>
                  <option value="">Select one</option>
                  {eventTypes.map(item => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label="Event date">
                <input required style={inputStyle} type="date" value={form.eventDate} onChange={event => update('eventDate', event.target.value)} />
              </Field>
              <Field label="Start time">
                <input style={inputStyle} type="time" value={form.startTime} onChange={event => update('startTime', event.target.value)} />
              </Field>
              <Field label="End time">
                <input style={inputStyle} type="time" value={form.endTime} onChange={event => update('endTime', event.target.value)} />
              </Field>
              <Field label="Guest count">
                <input required style={inputStyle} inputMode="numeric" value={form.guestCount} onChange={event => update('guestCount', event.target.value)} placeholder="Approximate is fine" />
              </Field>
              <Field label="Service style">
                <select required style={inputStyle} value={form.serviceStyle} onChange={event => update('serviceStyle', event.target.value)}>
                  <option value="">Select one</option>
                  {serviceStyles.map(item => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label="Budget range">
                <select style={inputStyle} value={form.budget} onChange={event => update('budget', event.target.value)}>
                  <option value="">Select one</option>
                  {budgetRanges.map(item => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label="Most important">
                <select style={inputStyle} value={form.priority} onChange={event => update('priority', event.target.value)}>
                  <option value="">Select one</option>
                  {priorities.map(item => <option key={item}>{item}</option>)}
                </select>
              </Field>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Field label="Event address or venue">
                <input style={inputStyle} value={form.location} onChange={event => update('location', event.target.value)} placeholder="Awaze, home, office, venue, or TBD" />
              </Field>
            </div>
          </section>

          <section style={sectionStyle}>
            <SectionHeading icon={<Utensils size={18} />} eyebrow="Step 3" title="Food and drinks" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <Field label="Food notes">
                <textarea
                  required
                  style={{ ...inputStyle, minHeight: 132, resize: 'vertical' }}
                  value={form.foodInterests}
                  onChange={event => update('foodInterests', event.target.value)}
                  placeholder="Example: 2 meat trays, 4 veggie trays, 50 sambusas, baklava, gluten-free injera, allergies..."
                />
              </Field>
              <Field label="Drinks / wine / tej">
                <textarea
                  style={{ ...inputStyle, minHeight: 132, resize: 'vertical' }}
                  value={form.drinkInterests}
                  onChange={event => update('drinkInterests', event.target.value)}
                  placeholder="Wine, tej, non-alcoholic drinks, coffee/tea, bar service, no drinks, TBD..."
                />
              </Field>
            </div>
          </section>

          <section style={sectionStyle}>
            <SectionHeading icon={<Sparkles size={18} />} eyebrow="Step 4" title="Add-ons" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '1rem' }}>
              {addOnOptions.map(item => (
                <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: 44, padding: '10px 12px', background: form.addOns.includes(item) ? '#1A1A1A' : '#fffaf4', color: form.addOns.includes(item) ? '#F5F0E8' : '#1A1A1A', border: '1px solid #d8d0c8', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form.addOns.includes(item)}
                    onChange={() => toggleAddOn(item)}
                    style={{ width: 18, height: 18, accentColor: '#ED2E2E' }}
                  />
                  <span style={{ fontSize: 14 }}>{item}</span>
                </label>
              ))}
            </div>
            <Field label="Decorations / styling notes">
              <textarea
                style={{ ...inputStyle, minHeight: 116, resize: 'vertical' }}
                value={form.decorationNotes}
                onChange={event => update('decorationNotes', event.target.value)}
                placeholder="Colors, theme, balloons, flowers, graduation school colors, table setup, photo moment, inspiration links..."
              />
            </Field>
          </section>

          <section style={sectionStyle}>
            <Field label="Anything else we should know?">
              <textarea
                style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
                value={form.notes}
                onChange={event => update('notes', event.target.value)}
                placeholder="Timeline, restrictions, parking/loading, must-haves, dealbreakers, or questions."
              />
            </Field>
          </section>

          <section style={{ padding: '1.25rem 1.25rem 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#ED2E2E', color: '#fff', border: 0, padding: '18px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
                <Mail size={16} /> Send inquiry
              </button>
              <button type="button" onClick={copyInquiry} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#1A1A1A', color: '#F5F0E8', border: 0, padding: '18px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}>
                <Clipboard size={16} /> {copied ? 'Copied' : 'Copy details'}
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#777', lineHeight: 1.7, marginTop: '1rem', textAlign: 'center' }}>
              Submitting opens your email or text app with the inquiry filled in. You can also copy the details and send them to Awaze directly.
            </p>
          </section>
        </form>
      </main>
      <Footer />
    </div>
  );
}
