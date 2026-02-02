import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Tour } from '@/lib/data/tours';

interface TourCardProps {
  tour: Tour;
  index: number;
}

export function TourCard({ tour, index }: TourCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000 h-[480px] w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative h-full w-full preserve-3d"
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-card shadow-card">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-sunset-gold px-3 py-1 text-xs font-semibold text-ocean-deep capitalize">
                  {tour.category}
                </span>
              </div>
              {/* Duration */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-ocean-deep/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-silk-white">
                  <Clock className="h-3 w-3" />
                  {tour.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-cinzel text-xl font-semibold text-foreground mb-2">
                {tour.title}
              </h3>
              <p className="font-manrope text-sm text-muted-foreground line-clamp-2 mb-4">
                {tour.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < tour.rating ? 'fill-sunset-gold text-sunset-gold' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">From</span>
                  <p className="price-tag text-2xl">${tour.price}</p>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-sunset-gold hover:underline">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="h-full w-full rounded-3xl bg-gradient-to-br from-ocean-deep to-ocean-mid p-6 shadow-elegant">
            <h3 className="font-cinzel text-xl font-semibold text-silk-white mb-4">
              Tour Highlights
            </h3>

            <ul className="space-y-3 mb-6">
              {tour.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-silk-cream/90">
                  <MapPin className="h-4 w-4 text-sunset-gold flex-shrink-0" />
                  <span className="font-manrope text-sm">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-silk-white/10 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-silk-cream/60 text-sm">Starting from</span>
                <span className="price-tag text-3xl">${tour.price}</span>
              </div>

              <button className="btn-gold w-full text-center">
                Book This Tour
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-silk-cream/40">
              Free cancellation up to 48h before
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
