import { motion } from 'framer-motion';
import { topTours } from '@/lib/data/tours';
import { TourCard } from './TourCard';

export function TopTours() {
  return (
    <section id="tours" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-tea-emerald/30 bg-tea-emerald/10 px-4 py-1 text-sm font-manrope tracking-widest text-tea-emerald uppercase mb-4">
            Featured Experiences
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Top Tours <span className="text-gradient-gold">2026</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most extraordinary journeys across Sri Lanka
          </p>
        </motion.div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#packages"
            className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-sunset-gold hover:underline"
          >
            View All Tours
            <span className="h-8 w-8 rounded-full bg-sunset-gold/10 flex items-center justify-center">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
