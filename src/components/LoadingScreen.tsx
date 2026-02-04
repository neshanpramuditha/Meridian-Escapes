import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  progress: number;
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ocean-deep"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean-navy to-ocean-deep" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sunset-gold/5"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <motion.img
            src={logo}
            alt="Meridian Escapes Logo"
            className="h-24 w-24 md:h-32 md:w-32 object-contain"
            animate={{
              filter: ['drop-shadow(0 0 20px rgba(245,158,11,0.3))', 'drop-shadow(0 0 40px rgba(245,158,11,0.6))', 'drop-shadow(0 0 20px rgba(245,158,11,0.3))'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="font-cinzel text-3xl md:text-4xl font-semibold text-silk-white tracking-wide">
            Meridian
          </h1>
          <p className="font-manrope text-sm md:text-base tracking-[0.3em] text-sunset-gold uppercase mt-1">
            Escapes
          </p>
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-manrope text-sm text-silk-cream/60 mb-4 tracking-wider"
        >
          Preparing your journey...
        </motion.p>

        {/* Progress bar container */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '200px', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-1 w-48 md:w-56 bg-ocean-slate/30 rounded-full overflow-hidden"
        >
          {/* Progress fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-sunset-gold to-sunset-amber rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Progress percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-xs text-sunset-gold/80 mt-3"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 font-manrope text-xs text-silk-cream/40 tracking-widest"
      >
        Your Gateway to Paradise
      </motion.p>
    </motion.div>
  );
}
