import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Users, Handshake, MapPin, Compass } from 'lucide-react';
import { stats, contactInfo } from '@/lib/data/tours';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  'Satisfied Customers': <Users className="h-8 w-8" />,
  'Trusted Partners': <Handshake className="h-8 w-8" />,
  'Destinations': <MapPin className="h-8 w-8" />,
  'Excursions': <Compass className="h-8 w-8" />,
};

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-silk-white mb-4">
            Trusted by <span className="text-gradient-gold">Thousands</span>
          </h2>
          <p className="body-lg text-silk-cream/70 max-w-2xl mx-auto">
            Join our growing family of happy travelers who have discovered the magic of Sri Lanka
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sunset-gold/20 text-sunset-gold mb-4">
                {iconMap[stat.label]}
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-silk-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-manrope text-sm text-silk-cream/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Callback CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-cinzel text-2xl lg:text-3xl font-semibold text-silk-white mb-2">
                24/7 Emergency Support
              </h3>
              <p className="font-manrope text-silk-cream/70">
                Our team is always here to assist you, anytime, anywhere
              </p>
            </div>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-sunset-gold px-8 py-4 text-ocean-deep transition-all hover:shadow-gold hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ocean-deep/20">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-manrope uppercase tracking-wider opacity-70">Call Us Now</p>
                <p className="font-mono text-xl font-bold">{contactInfo.phone}</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
