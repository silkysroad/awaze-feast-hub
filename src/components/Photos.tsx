import firfir from '@/assets/gallery/firfir.jpg';
import chickenTibs from '@/assets/gallery/chicken-tibs.jpg';
import beefPatties from '@/assets/gallery/beef-patties.jpg';
import beefTibsPlatter from '@/assets/gallery/beef-tibs-platter.jpg';
import veggiePlatter from '@/assets/gallery/veggie-platter.jpg';
import tomatoSalad from '@/assets/gallery/tomato-salad.jpg';
import samosas from '@/assets/gallery/samosas.jpg';

const photos = [
  { src: beefTibsPlatter, alt: 'Beef Tibs with Injera' },
  { src: veggiePlatter, alt: 'Vegetarian Platter' },
  { src: firfir, alt: 'Firfir' },
  { src: chickenTibs, alt: 'Chicken Tibs' },
  { src: samosas, alt: 'Sambusas' },
  { src: beefPatties, alt: 'Beef Patties' },
  { src: tomatoSalad, alt: 'Fresh Tomato Salad' },
];

export function Photos() {
  return (
    <section id="photos" className="py-24 bg-muted/30">
      <div className="container-narrow">
        <h2 className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16">
          Photos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
