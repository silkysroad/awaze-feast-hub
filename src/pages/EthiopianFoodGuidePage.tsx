import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const EthiopianFoodGuidePage = () => {
  useSEO({
    title: 'What is Ethiopian Food? A Beginner\'s Guide — Awaze, Harlem NYC',
    description: 'Everything you need to know about Ethiopian food: what injera is, how to eat with your hands, popular dishes like tibs and doro wat, and why it\'s the best communal dining experience in NYC.',
    canonical: 'https://awaze.nyc/ethiopian-food-guide',
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#F5F0E8', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>The Guide</p>
            <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              What is<br />Ethiopian Food?
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              If you've never had Ethiopian food, you're in for something special. It's one of the world's oldest and most flavorful cuisines — and it's designed to be shared. Here's everything you need to know before your first visit.
            </p>
          </div>
        </section>

        {/* Injera */}
        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>The Foundation</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>What is Injera?</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Injera is a soft, spongy sourdough flatbread made from teff — a tiny grain native to Ethiopia. It's naturally gluten-friendly, slightly tangy from fermentation, and serves as both your plate and your utensil.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              At Awaze, our injera is made fresh in-house every day using traditional teff flour. The fermentation process takes days — there are no shortcuts.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              Your food arrives on a large piece of injera spread across a shared platter. You tear off smaller pieces and use them to scoop up stews, vegetables, and meats. No forks needed. That's not a novelty — it's how Ethiopian food has been eaten for centuries.
            </p>
          </div>
        </section>

        {/* How to Eat */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>How to Eat Ethiopian Food</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Tear the injera', text: 'Rip off a small piece of injera — about the size of your palm. Use your right hand (tradition).' },
                { step: '02', title: 'Scoop', text: 'Use the torn piece to pinch and scoop up a bit of stew, meat, or vegetables from the platter.' },
                { step: '03', title: 'Eat in one bite', text: 'Pop the whole thing in your mouth — injera and filling together. That\'s one perfect bite.' },
                { step: '04', title: 'Share', text: 'Ethiopian food is communal. Everyone eats from the same platter. It\'s how bonds are built.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '24px', fontWeight: 700, color: '#ED2E2E', lineHeight: 1, minWidth: '40px' }}>{item.step}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', fontWeight: 700, color: '#F5F0E8', marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Dishes */}
        <section style={{ background: '#F5F0E8', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>Popular Ethiopian Dishes</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '2rem' }}>What to Order</h2>
            
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', paddingBottom: '6px', borderBottom: '1px solid #ddd' }}>Meat Dishes</p>
            {[
              { name: 'Awaze Tibs', desc: 'The house signature. Beef or lamb sautéed in spicy berbere sauce with onions and peppers. Bold, aromatic, and deeply satisfying.' },
              { name: 'Doro Wat', desc: 'Ethiopia\'s most famous dish. Chicken slow-cooked in a rich berbere and onion sauce, often with a hard-boiled egg. Complex, warming, unforgettable.' },
              { name: 'Kitfo', desc: 'Seasoned minced lean beef with mitmita spice and niter kibbeh (spiced butter). Served raw, rare, or fully cooked — your choice.' },
              { name: 'Doro Tibs', desc: 'Boneless chicken breast sautéed in spiced butter sauce. Lighter than Doro Wat but just as flavorful.' },
            ].map(dish => (
              <div key={dish.name} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', fontWeight: 700, color: '#1A1A1A', marginBottom: '2px' }}>{dish.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{dish.desc}</p>
              </div>
            ))}

            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', marginTop: '2rem', paddingBottom: '6px', borderBottom: '1px solid #ddd' }}>Vegetarian & Vegan Dishes</p>
            {[
              { name: 'Misir Wat', desc: 'Red lentil stew slow-cooked with berbere spices. Rich, hearty, and completely plant-based. A staple of Ethiopian cuisine.' },
              { name: 'Shiro', desc: 'Creamy chickpea purée simmered with garlic and warm spices. Comfort food at its finest.' },
              { name: 'Gomen', desc: 'Collard greens slow-cooked with garlic and spices. Simple, earthy, and deeply nourishing.' },
              { name: 'Atakilt Wat', desc: 'String beans and carrots in a mild spiced sauce. Light, fresh, and a perfect complement to richer dishes.' },
            ].map(dish => (
              <div key={dish.name} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', fontWeight: 700, color: '#1A1A1A', marginBottom: '2px' }}>{dish.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{dish.desc}</p>
              </div>
            ))}

            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, fontStyle: 'italic', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ddd' }}>
              Ethiopian cuisine is one of the most naturally vegan-friendly in the world. During Orthodox fasting days, many Ethiopians eat entirely plant-based — so the vegetarian dishes aren't an afterthought. They're central to the tradition.
            </p>
          </div>
        </section>

        {/* What is Berbere / What is Awaze */}
        <section style={{ background: '#FFFFFF', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ED2E2E', marginBottom: '1rem' }}>The Spices</p>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>What is Berbere? What is Awaze?</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              <strong>Berbere</strong> is Ethiopia's signature spice blend — a complex mix of chili peppers, garlic, ginger, fenugreek, coriander, cardamom, and more. Every family has their own recipe. It's the soul of Ethiopian cooking.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              <strong>Awaze</strong> — our restaurant's namesake — is a thick, spicy paste made by blending berbere with oil and sometimes vinegar or wine. It's used as a marinade, a dipping sauce, and a flavor base for dishes like our Awaze Tibs.
            </p>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.9 }}>
              <strong>Niter kibbeh</strong> is Ethiopian spiced clarified butter — similar to ghee but infused with turmeric, cardamom, fenugreek, and other warm spices. It adds incredible depth to stews and sautés.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#1A1A1A', padding: '3.5rem 1.25rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 700, color: '#F5F0E8', marginBottom: '1rem' }}>Ready to Try It?</h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              First time? Start with one of our Signature Plates — a curated combo of proteins and sides served on fresh injera. Let your server guide you. We love showing people their first Ethiopian meal.
            </p>
            <Link to="/menu" style={{ display: 'inline-block', background: '#ED2E2E', color: '#FFFFFF', padding: '16px 32px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
              See the Menu →
            </Link>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#666', marginTop: '1.5rem' }}>
              Awaze Ethiopian Cuisine · 2288 Frederick Douglass Blvd · Harlem, NYC
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default EthiopianFoodGuidePage;
