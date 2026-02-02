import { motion } from 'framer-motion';
import { Star, Clock, Percent, ArrowRight } from 'lucide-react';
import { specialOffers } from '@/lib/data/tours';

export function SpecialOffers() {
  return (
    <section id="offers" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1 text-sm font-manrope tracking-widest text-destructive uppercase mb-4">
            Limited Time
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Special <span className="text-gradient-gold">Offers</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Exclusive deals on our most popular packages - book now and save big
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card card-hover"
            >
              {/* Discount badge */}
              {offer.discount && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1 rounded-full bg-destructive px-3 py-1 text-sm font-bold text-destructive-foreground"
                  >
                    <Percent className="h-4 w-4" />
                    {offer.discount}% OFF
                  </motion.div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                {/* Duration badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-ocean-deep/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-silk-white">
                    <Clock className="h-3 w-3" />
                    {offer.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="inline-block rounded-full bg-sunset-gold/10 px-2 py-0.5 text-xs font-medium text-sunset-gold mb-2">
                      {offer.category}
                    </span>
                    <h3 className="font-cinzel text-xl font-semibold text-foreground">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < offer.rating ? 'fill-sunset-gold text-sunset-gold' : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({offer.reviews})</span>
                </div>

                <p className="font-manrope text-sm text-muted-foreground mb-4 line-clamp-2">
                  {offer.description}
                </p>

                {/* Includes pills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {offer.includes.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <div className="flex items-center gap-2">
                      {offer.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${offer.originalPrice}
                        </span>
                      )}
                      <span className="price-tag text-2xl">${offer.price}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                  <button className="flex items-center gap-1 rounded-full border-2 border-sunset-gold px-4 py-2 text-sm font-semibold text-sunset-gold transition-all hover:bg-sunset-gold hover:text-ocean-deep">
                    Book
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
