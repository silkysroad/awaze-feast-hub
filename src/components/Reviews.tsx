import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely incredible Ethiopian food! The vegetarian platter was bursting with flavor. The injera was perfectly spongy and the staff was so welcoming. Will definitely be back!',
    date: 'January 2026',
  },
  {
    name: 'Marcus T.',
    rating: 5,
    text: 'Best Ethiopian food in Harlem, hands down. The beef tibs were perfectly spiced and the portion sizes are generous. A hidden gem!',
    date: 'January 2026',
  },
  {
    name: 'Aisha K.',
    rating: 5,
    text: 'Feels like eating at my grandmother\'s house. Authentic flavors, warm atmosphere, and reasonable prices. The sambusas are a must-try!',
    date: 'December 2025',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="container-narrow">
        <h2 className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Reviews
        </h2>
        <div className="flex items-center justify-center gap-1 mb-16">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">5.0 on Google</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{review.name}</span>
                <span className="mx-2">·</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
