import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import heroBeach from '@/assets/hero-beach.jpg';
import heroCultural from '@/assets/hero-cultural.jpg';
import heroWildlife from '@/assets/hero-wildlife.jpg';
import heroHoneymoon from '@/assets/hero-honeymoon.jpg';

const galleryImages = [
  { id: 1, title: 'Sigiriya Rock', category: 'Heritage', image: heroCultural },
  { id: 2, title: 'Mirissa Beach', category: 'Beach', image: heroBeach },
  { id: 3, title: 'Yala Safari', category: 'Wildlife', image: heroWildlife },
  { id: 4, title: 'Ella Romance', category: 'Romance', image: heroHoneymoon },
  { id: 5, title: 'Coastal Paradise', category: 'Beach', image: heroBeach },
  { id: 6, title: 'Tea Plantations', category: 'Nature', image: heroHoneymoon },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-ocean-deep">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-sunset-gold/30 bg-sunset-gold/10 px-4 py-1 text-sm font-manrope tracking-widest text-sunset-gold uppercase mb-4">
            Visual Journey
          </span>
          <h2 className="heading-lg text-silk-white mb-4">
            Explore <span className="text-gradient-gold">Sri Lanka</span>
          </h2>
          <p className="body-lg text-silk-cream/70 max-w-2xl mx-auto">
            A glimpse into the breathtaking beauty that awaits you
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 || index === 5 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 || index === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block rounded-full bg-sunset-gold/20 px-2 py-0.5 text-xs text-sunset-gold mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-cinzel text-lg font-semibold text-silk-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-silk-cream/20 bg-silk-cream/5 px-6 py-3 font-manrope text-sm text-silk-cream transition-all hover:bg-silk-cream/10 hover:border-sunset-gold/50"
          >
            <Instagram className="h-5 w-5" />
            Follow @MeridianEscapes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
