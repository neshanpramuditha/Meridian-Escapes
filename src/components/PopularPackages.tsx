import { motion } from 'framer-motion';
import { Star, Check, ArrowRight } from 'lucide-react';
import { popularPackages } from '@/lib/data/tours';

export function PopularPackages() {
  return (
    <section id="packages" className="section-padding bg-silk-white">
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
            Curated Journeys
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Popular <span className="text-gradient-gold">Packages</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Complete travel experiences designed for unforgettable memories
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {popularPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-silk-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-ocean-deep">
                    {pkg.category}
                  </span>
                </div>
                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-ocean-deep/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-silk-white">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-2">
                  {pkg.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < pkg.rating ? 'fill-sunset-gold text-sunset-gold' : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
                </div>

                <p className="font-manrope text-sm text-muted-foreground mb-4 line-clamp-2">
                  {pkg.longDescription}
                </p>

                {/* Includes */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-full bg-tea-emerald/10 px-2 py-1 text-xs text-tea-emerald"
                      >
                        <Check className="h-3 w-3" />
                        {item}
                      </span>
                    ))}
                    {pkg.includes.length > 3 && (
                      <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                        +{pkg.includes.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="price-tag text-2xl">${pkg.price}</p>
                  </div>
                  <button className="flex items-center gap-2 rounded-full bg-sunset-gold px-4 py-2 text-sm font-semibold text-ocean-deep transition-all hover:shadow-gold hover:scale-105">
                    Book Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
