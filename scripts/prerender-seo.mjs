import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(indexPath, 'utf8');
const socialImage = {
  url: 'https://awaze.nyc/og-awaze-real-20260706.jpg',
  alt: 'Awaze lamb tibs platter with injera and vegetable sides',
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Awaze Ethiopian Cuisine',
  description: 'Seed-oil-free Ethiopian restaurant in Harlem, NYC. Dine-in, delivery, and catering. Every dish cooked in avocado oil and butter.',
  url: 'https://awaze.nyc',
  telephone: '(917) 639-3112',
  menu: 'https://awaze.nyc/menu',
  acceptsReservations: true,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '12:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '13:00', closes: '22:00' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2288 Frederick Douglass Blvd',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10027',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.8125, longitude: -73.9533 },
  servesCuisine: ['Ethiopian', 'African'],
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/awazenyc'],
};

const routes = [
  {
    path: '/',
    title: 'Awaze | Ethiopian Cuisine, Harlem NYC',
    description: 'Dine in, takeout, family style. Seed oil free. 2288 Frederick Douglass Blvd, Harlem.',
    h1: 'Awaze Ethiopian Cuisine — Seed Oil Free Ethiopian Restaurant in Harlem, NYC',
    body: 'Awaze serves Ethiopian food in Harlem: awaze tibs, doro wat, kitfo, veggie combos, fresh injera, tej honey wine, Ethiopian coffee, dine-in, delivery, reservations, and catering. 2288 Frederick Douglass Blvd, New York, NY 10027.',
    keywords: ['Ethiopian restaurant Harlem', 'seed oil free restaurant NYC', 'Ethiopian food NYC', 'Awaze Ethiopian Cuisine'],
  },
  {
    path: '/menu',
    title: 'Menu — Awaze Ethiopian Cuisine | Seed Oil Free Ethiopian Food Harlem NYC',
    description: 'Full menu for Awaze Ethiopian Cuisine in Harlem. Signature plates, build-your-own combos, stews, sides, Ethiopian coffee by Buunni, and patties. Every dish cooked in avocado oil and butter — no seed oils.',
    h1: 'Awaze Ethiopian Cuisine Menu',
    body: 'Signature plates include The Silk awaze tibs, Fente Fire doro tibs, The Nubz derq tibs, veggie plates, build-your-own Ethiopian platters, doro wat, kitfo, sambusas, tomato salad, avocado salad, tej, Ethiopian coffee, patties, tarts, and baklava.',
    keywords: ['Awaze menu', 'Ethiopian menu Harlem', 'doro wat NYC', 'tibs NYC', 'injera Harlem'],
  },
  {
    path: '/catering',
    title: 'Ethiopian Catering NYC — Awaze | Seed Oil Free Catering New York',
    description: 'Book Awaze for your next event. Seed-oil-free Ethiopian catering in NYC — corporate lunches, weddings, film sets, private parties. Packages from $38/person. Cooked in avocado oil and butter.',
    h1: 'Ethiopian Catering NYC',
    body: 'Awaze offers Ethiopian catering in New York City for corporate lunches, weddings, private parties, film sets, birthdays, and events. Catering packages include The Spread, The Full Table, and The Feast with proteins, sides, injera, sambusas, baklava, and tej.',
    keywords: ['Ethiopian catering NYC', 'seed oil free catering New York', 'corporate catering Harlem', 'Awaze catering'],
  },
  {
    path: '/catering-inquiry',
    title: 'Catering Inquiry — Awaze | Private Events, Graduation Parties, Catering NYC',
    description: 'Request Ethiopian catering or a private event at Awaze in Harlem. Food, drinks, staffing, decorations, photographer, and event styling options.',
    h1: 'Awaze Catering and Private Event Inquiry',
    body: 'Submit details for Awaze catering, graduation parties, private dinners, restaurant buyouts, food trays, drinks, wine, tej, staffing, decorations, photographers, event styling, setup, and breakdown.',
    keywords: ['Awaze catering inquiry', 'graduation party catering NYC', 'private event Harlem', 'Ethiopian catering form'],
  },
  {
    path: '/reservations',
    title: 'Reservations — Awaze | Book a Table in Harlem NYC',
    description: 'Request a table at Awaze Ethiopian Cuisine in Harlem. Choose date, time, party size, occasion, and seating notes.',
    h1: 'Awaze Reservations',
    body: 'Request a reservation at Awaze Ethiopian Cuisine in Harlem with date, time, party size, phone number, occasion, seating preference, and notes for large parties or special events.',
    keywords: ['Awaze reservations', 'reserve Ethiopian restaurant Harlem', 'book table Harlem', 'Awaze book a table'],
  },
  {
    path: '/about',
    title: 'About Awaze — Seed Oil Free Ethiopian Restaurant in Harlem NYC',
    description: 'Awaze is a Black-owned, seed-oil-free Ethiopian restaurant in Harlem, NYC. Every dish cooked in avocado oil and butter. Dine-in, delivery, and catering at 2288 Frederick Douglass Blvd.',
    h1: 'About Awaze Ethiopian Cuisine',
    body: 'Awaze is a Black-owned Ethiopian restaurant in Harlem serving food cooked with avocado oil, butter, and Ethiopian spices. No canola oil, no soybean oil, no vegetable oil, and no seed oils.',
    keywords: ['Black owned restaurant Harlem', 'seed oil free Ethiopian', 'Awaze Harlem'],
  },
  {
    path: '/seed-oil-free',
    title: 'Seed Oil Free Ethiopian Restaurant NYC — Awaze | Harlem',
    description: "Awaze is NYC's only seed-oil-free Ethiopian restaurant. Every dish cooked in avocado oil and real butter — no canola, soybean, or vegetable oil. Dine-in and delivery in Harlem.",
    h1: 'NYC’s Only Seed Oil Free Ethiopian Restaurant',
    body: 'Every dish at Awaze is cooked with avocado oil and real butter. No canola, soybean, vegetable, sunflower, corn, safflower, cottonseed, rice bran, or seed oils. Ethiopian food cooked clean in Harlem.',
    keywords: ['seed oil free restaurant NYC', 'seed oil free Harlem', 'avocado oil restaurant NYC', 'clean eating Ethiopian NYC'],
  },
  {
    path: '/ethiopian-food-guide',
    title: "What is Ethiopian Food? A Beginner's Guide — Awaze, Harlem NYC",
    description: "Everything you need to know about Ethiopian food: what injera is, how to eat with your hands, popular dishes like tibs and doro wat, and why it's the best communal dining experience in NYC.",
    h1: 'What is Ethiopian Food?',
    body: 'Learn about injera, berbere, awaze, niter kibbeh, tibs, doro wat, kitfo, misir wat, shiro, gomen, veggie platters, Ethiopian coffee, and how to eat Ethiopian food with injera.',
    keywords: ['what is Ethiopian food', 'what is injera', 'how to eat Ethiopian food', 'Ethiopian food beginners guide'],
  },
  {
    path: '/delivery',
    title: 'Ethiopian Food Delivery Harlem NYC — Awaze | Uber Eats, DoorDash, GrubHub',
    description: 'Order Awaze Ethiopian food for delivery in Harlem and NYC. Available on Uber Eats, DoorDash, and GrubHub. Seed oil free — every dish cooked in avocado oil and butter.',
    h1: 'Ethiopian Food Delivery in Harlem NYC',
    body: 'Order Awaze Ethiopian Cuisine for delivery through Uber Eats, DoorDash, GrubHub, and Postmates. Delivery favorites include signature combos, family platters, sambusas, awaze tibs, doro wat, and veggie plates.',
    keywords: ['Ethiopian delivery Harlem', 'Ethiopian food delivery NYC', 'Awaze delivery', 'Uber Eats Ethiopian Harlem'],
  },
  {
    path: '/ethiopian-restaurant-harlem',
    title: 'Ethiopian Restaurant Harlem NYC — Awaze on Frederick Douglass Blvd',
    description: 'Awaze is a seed-oil-free Ethiopian restaurant in Harlem, NYC at 2288 Frederick Douglass Blvd. Dine in for fresh injera, awaze tibs, doro wat, veggie combos, tej, and Ethiopian coffee.',
    h1: 'Ethiopian Restaurant in Harlem',
    body: 'Awaze Ethiopian Cuisine is located at 2288 Frederick Douglass Blvd in Harlem, New York. Visit for fresh injera, awaze tibs, doro wat, kitfo, veggie combos, sambusas, tej honey wine, Ethiopian coffee, delivery, and catering.',
    keywords: ['Ethiopian restaurant Harlem', 'Harlem Ethiopian food', 'Frederick Douglass Blvd restaurant', 'best Ethiopian Harlem'],
  },
  {
    path: '/injera-nyc',
    title: 'Injera NYC — Fresh Ethiopian Injera at Awaze Harlem',
    description: 'Looking for injera in NYC? Awaze makes fresh Ethiopian injera in Harlem and serves it with tibs, doro wat, shiro, misir wat, veggie combos, and family platters.',
    h1: 'Fresh Ethiopian Injera in NYC',
    body: 'Injera is Ethiopian sourdough flatbread made from teff flour. At Awaze in Harlem, injera is served with doro wat, awaze tibs, shiro, misir wat, gomen, veggie combos, and family platters.',
    keywords: ['injera NYC', 'injera Harlem', 'Ethiopian injera New York', 'teff injera NYC'],
  },
  {
    path: '/doro-wat-nyc',
    title: 'Doro Wat NYC — Ethiopian Chicken Stew at Awaze Harlem',
    description: 'Try doro wat in NYC at Awaze Ethiopian Cuisine in Harlem. Classic Ethiopian chicken stew with berbere, onions, warm spices, fresh injera, and seed-oil-free cooking.',
    h1: 'Doro Wat in NYC',
    body: 'Doro wat is Ethiopia’s classic chicken stew, slow-cooked with berbere, onions, spices, and served with fresh injera. Try doro wat at Awaze Ethiopian Cuisine in Harlem, NYC.',
    keywords: ['doro wat NYC', 'Ethiopian chicken stew NYC', 'doro wat Harlem', 'berbere chicken NYC'],
  },
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const setTag = (html, selector, replacement) => {
  if (selector === 'title') return html.replace(/<title>.*?<\/title>/s, `<title>${replacement}</title>`);
  return html.replace(selector, replacement);
};

function renderFallback(route) {
  const links = routes
    .filter((item) => item.path !== route.path)
    .map((item) => `<li><a href="${item.path}">${escapeHtml(item.h1)}</a></li>`)
    .join('');
  return `<main style="font-family:Arial,sans-serif;max-width:760px;margin:0 auto;padding:48px 20px;line-height:1.6;color:#1A1A1A;background:#fff">
    <p style="text-transform:uppercase;letter-spacing:.16em;color:#ED2E2E;font-size:12px">Awaze Ethiopian Cuisine · Harlem NYC</p>
    <h1>${escapeHtml(route.h1)}</h1>
    <p>${escapeHtml(route.body)}</p>
    <p><strong>Address:</strong> 2288 Frederick Douglass Blvd, New York, NY 10027 · <strong>Phone:</strong> (917) 639-3112</p>
    <p><strong>Keywords:</strong> ${route.keywords.map(escapeHtml).join(', ')}</p>
    <nav><ul>${links}</ul></nav>
  </main>`;
}

for (const route of routes) {
  const canonical = `https://awaze.nyc${route.path === '/' ? '' : route.path}`;
  let html = baseHtml;
  html = setTag(html, 'title', escapeHtml(route.title));
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${socialImage.url}" />`);
  html = html.replace(/<meta property="og:image:width" content="[^"]*"\s*\/>/, '<meta property="og:image:width" content="1200" />');
  html = html.replace(/<meta property="og:image:height" content="[^"]*"\s*\/>/, '<meta property="og:image:height" content="630" />');
  html = html.replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/, `<meta property="og:image:alt" content="${socialImage.alt}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${socialImage.url}" />`);
  html = html.replace(/<meta name="twitter:image:alt" content="[^"]*"\s*\/>/, `<meta name="twitter:image:alt" content="${socialImage.alt}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${JSON.stringify({ ...restaurantSchema, url: canonical }, null, 2)}\n    </script>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${renderFallback(route)}</div>`);

  const outPath = route.path === '/' ? indexPath : path.join(distDir, route.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => {
  const loc = `https://awaze.nyc${route.path === '/' ? '' : route.path}`;
  const priority = route.path === '/' ? '1.0' : route.path === '/menu' ? '0.9' : ['/catering','/catering-inquiry','/reservations','/seed-oil-free','/delivery','/ethiopian-restaurant-harlem'].includes(route.path) ? '0.8' : '0.7';
  const changefreq = ['/','/menu','/catering','/catering-inquiry','/reservations','/delivery','/ethiopian-restaurant-harlem'].includes(route.path) ? 'weekly' : 'monthly';
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
console.log(`Prerendered SEO HTML for ${routes.length} routes.`);
