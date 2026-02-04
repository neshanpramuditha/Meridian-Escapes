import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data/tours';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Tours', href: '#tours' },
  { name: 'Packages', href: '#packages' },
  { name: 'Offers', href: '#offers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ocean-deep/95 backdrop-blur-xl shadow-elegant'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Meridian Escapes Logo" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-cinzel text-lg font-semibold text-silk-white leading-none">
                Meridian
              </span>
              <span className="font-manrope text-xs tracking-wider text-sunset-gold uppercase">
                Escapes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-manrope text-sm tracking-wide text-silk-cream/80 transition-colors hover:text-sunset-gold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden md:flex items-center gap-2 rounded-full border border-sunset-gold/30 bg-sunset-gold/10 px-4 py-2 text-sm font-manrope text-sunset-gold transition-all hover:bg-sunset-gold hover:text-ocean-deep"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-silk-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ocean-deep/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xl font-semibold text-silk-white">
                  Meridian Escapes
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-silk-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-cinzel text-2xl text-silk-white hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="btn-gold flex items-center justify-center gap-2 w-full"
                >
                  <Phone className="h-5 w-5" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
