import { motion } from 'framer-motion';
import heroSigiriya from '@/assets/hero-sigiriya.jpg';

// Generate random bubbles with sunbeam effect
const generateBubbles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.3 + 0.1,
  }));
};

const bubbles = generateBubbles(25);

function Bubble({ bubble }: { bubble: typeof bubbles[0] }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: bubble.size,
        height: bubble.size,
        left: `${bubble.x}%`,
        background: `radial-gradient(circle at 30% 30%, 
          rgba(255, 255, 255, 0.8) 0%, 
          rgba(255, 255, 255, 0.4) 20%, 
          rgba(245, 158, 11, 0.2) 40%, 
          rgba(16, 185, 129, 0.1) 60%, 
          transparent 70%)`,
        boxShadow: `
          inset 0 0 ${bubble.size / 4}px rgba(255, 255, 255, 0.5),
          inset ${bubble.size / 10}px ${bubble.size / 10}px ${bubble.size / 5}px rgba(255, 255, 255, 0.3),
          0 0 ${bubble.size / 3}px rgba(245, 158, 11, 0.2)
        `,
      }}
      initial={{ 
        y: '120vh', 
        opacity: 0,
        scale: 0.5,
      }}
      animate={{ 
        y: '-20vh',
        opacity: [0, bubble.opacity, bubble.opacity, 0],
        scale: [0.5, 1, 1, 0.8],
        x: [0, Math.sin(bubble.id) * 50, Math.cos(bubble.id) * 30, 0],
      }}
      transition={{
        duration: bubble.duration,
        delay: bubble.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}


export function HeroBubbles() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Sigiriya Rock */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSigiriya})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/40 to-ocean-deep/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} bubble={bubble} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-sunset-gold/30 bg-sunset-gold/10 px-6 py-2 text-sm font-manrope tracking-widest text-sunset-gold uppercase backdrop-blur-sm">
            Premium Sri Lanka Tours 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="heading-xl text-silk-white mb-6 max-w-5xl drop-shadow-lg"
        >
          Your Gateway{' '}
          <span className="text-gradient-gold">to Paradise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="body-lg text-silk-cream/90 mb-12 max-w-2xl drop-shadow-md"
        >
          Let Sri Lanka enchant you with its stunning beauty, rich culture, and warm hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#tours" className="btn-gold">
            Find Your Tour
          </a>
          <a href="#packages" className="btn-outline-gold backdrop-blur-sm">
            Explore Packages
          </a>
        </motion.div>

        {/* Category quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {['Beaches', 'Culture', 'Wildlife', 'Romance'].map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="group flex items-center gap-2 text-silk-cream/70 transition-colors hover:text-sunset-gold"
            >
              <span className="h-1 w-1 rounded-full bg-sunset-gold transition-all group-hover:w-8" />
              <span className="font-manrope text-sm tracking-wider uppercase">{cat}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-manrope tracking-widest text-silk-cream/50 uppercase">
            Scroll to explore
          </span>
          <div className="h-12 w-6 rounded-full border-2 border-silk-cream/30 p-1 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-sunset-gold"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
