import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { contactInfo } from '@/lib/data/tours';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section id="contact" className="section-padding bg-silk-white">
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
            Get In Touch
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you plan the perfect Sri Lankan adventure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-gradient-hero p-8 lg:p-10 h-full">
              <h3 className="font-cinzel text-2xl font-semibold text-silk-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sunset-gold/20">
                    <Phone className="h-5 w-5 text-sunset-gold" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-silk-cream/60 mb-1">Call Us</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="font-mono text-lg text-silk-white hover:text-sunset-gold transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tea-emerald/20">
                    <MessageCircle className="h-5 w-5 text-tea-emerald" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-silk-cream/60 mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-lg text-silk-white hover:text-tea-emerald transition-colors"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cinnamon-warm/20">
                    <Mail className="h-5 w-5 text-cinnamon-warm" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-silk-cream/60 mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-manrope text-lg text-silk-white hover:text-cinnamon-warm transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-silk-white/10">
                    <MapPin className="h-5 w-5 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-silk-cream/60 mb-1">Office</p>
                    <p className="font-manrope text-lg text-silk-white">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sunset-amber/20">
                    <Clock className="h-5 w-5 text-sunset-amber" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-silk-cream/60 mb-1">Availability</p>
                    <p className="font-manrope text-lg text-silk-white">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-silk-white/10">
                <p className="font-manrope text-sm text-silk-cream/60 mb-4">Trusted by travelers worldwide</p>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-silk-white/10 px-3 py-2">
                    <span className="font-mono text-sm text-silk-white">TripAdvisor 4.6⭐</span>
                  </div>
                  <div className="rounded-lg bg-silk-white/10 px-3 py-2">
                    <span className="font-mono text-sm text-silk-white">1K+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 font-manrope text-foreground placeholder:text-muted-foreground focus:border-sunset-gold focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 font-manrope text-foreground placeholder:text-muted-foreground focus:border-sunset-gold focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 font-manrope text-foreground placeholder:text-muted-foreground focus:border-sunset-gold focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Preferred Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 font-manrope text-foreground focus:border-sunset-gold focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 transition-all"
                  >
                    <option value="">Select destination</option>
                    <option value="beach">Beach Tours</option>
                    <option value="cultural">Cultural Heritage</option>
                    <option value="wildlife">Wildlife Safari</option>
                    <option value="honeymoon">Honeymoon Package</option>
                    <option value="adventure">Adventure Tours</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 font-manrope text-foreground placeholder:text-muted-foreground focus:border-sunset-gold focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 transition-all resize-none"
                  placeholder="Tell us about your dream Sri Lanka trip..."
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Inquiry
              </button>

              <p className="text-center font-manrope text-sm text-muted-foreground">
                We typically respond within 2 hours during business hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
