import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { contactInfo, destinations } from '@/lib/data/tours';

const footerLinks = {
  tours: [
    { name: 'Beach Tours', href: '#' },
    { name: 'Cultural Heritage', href: '#' },
    { name: 'Wildlife Safari', href: '#' },
    { name: 'Honeymoon Packages', href: '#' },
    { name: 'Adventure Tours', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Travel Insurance', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'Payment Options', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-ocean-deep">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sunset-gold to-sunset-amber flex items-center justify-center">
                <span className="font-cinzel text-lg font-bold text-ocean-deep">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-semibold text-silk-white leading-none">
                  Meridian
                </span>
                <span className="font-manrope text-xs tracking-wider text-sunset-gold uppercase">
                  Escapes
                </span>
              </div>
            </a>
            <p className="font-manrope text-sm text-silk-cream/60 mb-6 max-w-xs">
              Your trusted partner for unforgettable Sri Lankan adventures since 2010.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-silk-white/5 text-silk-cream/60 transition-all hover:bg-sunset-gold hover:text-ocean-deep"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-silk-white mb-4">Tours</h4>
            <ul className="space-y-3">
              {footerLinks.tours.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-silk-cream/60 hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-silk-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-silk-cream/60 hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-silk-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-silk-cream/60 hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-cinzel text-sm font-semibold text-silk-white mb-4">Destinations</h4>
            <div className="flex flex-wrap gap-2">
              {destinations.slice(0, 8).map((dest) => (
                <a
                  key={dest.name}
                  href="#"
                  className="rounded-full bg-silk-white/5 px-3 py-1 font-manrope text-xs text-silk-cream/60 hover:bg-sunset-gold/20 hover:text-sunset-gold transition-all"
                >
                  {dest.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-silk-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-manrope text-sm text-silk-cream/40">
              © 2026 Meridian Escapes. All rights reserved.
            </p>
            <div className="flex items-center gap-1 font-manrope text-sm text-silk-cream/40">
              Made with <Heart className="h-4 w-4 text-destructive mx-1" /> in Sri Lanka
            </div>
            <div className="flex gap-6">
              <a href="#" className="font-manrope text-sm text-silk-cream/40 hover:text-silk-cream transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-manrope text-sm text-silk-cream/40 hover:text-silk-cream transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
