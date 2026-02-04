import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';

const destinations = [
  { name: 'Colombo', lat: 6.9271, lng: 79.8612, type: 'city', description: 'Capital City & Base' },
  { name: 'Sigiriya', lat: 7.9570, lng: 80.7603, type: 'heritage', description: 'Ancient Rock Fortress' },
  { name: 'Kandy', lat: 7.2906, lng: 80.6337, type: 'culture', description: 'Temple of the Tooth' },
  { name: 'Ella', lat: 6.8667, lng: 81.0466, type: 'nature', description: 'Hill Country Paradise' },
  { name: 'Galle', lat: 6.0535, lng: 80.2210, type: 'heritage', description: 'Colonial Fort City' },
  { name: 'Yala', lat: 6.3728, lng: 81.5088, type: 'wildlife', description: 'National Park Safari' },
  { name: 'Mirissa', lat: 5.9483, lng: 80.4716, type: 'beach', description: 'Whale Watching Beach' },
  { name: 'Nuwara Eliya', lat: 6.9497, lng: 80.7891, type: 'nature', description: 'Tea Plantations' },
];

const typeColors: Record<string, string> = {
  city: 'bg-sunset-gold',
  heritage: 'bg-cinnamon-warm',
  culture: 'bg-tea-emerald',
  nature: 'bg-tea-mint',
  wildlife: 'bg-cinnamon-dark',
  beach: 'bg-ocean-light',
};

export function MapSection() {
  return (
    <section id="map" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-manrope tracking-wider text-muted-foreground uppercase mb-6">
            <Compass className="h-4 w-4 text-sunset-gold" />
            Explore Destinations
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Discover <span className="text-gradient-gold">Sri Lanka</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            From ancient temples to pristine beaches, explore the diverse wonders of the Pearl of the Indian Ocean.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-card rounded-3xl border border-border overflow-hidden shadow-card"
          >
            {/* Map background - stylized Sri Lanka outline */}
            <div className="absolute inset-0 p-8">
              <svg
                viewBox="0 0 200 300"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
              >
                {/* Sri Lanka outline */}
                <path
                  d="M100 20 C140 30 160 60 165 100 C170 140 160 180 140 220 C120 260 100 280 90 285 C80 280 60 250 50 200 C40 150 50 100 70 60 C85 30 95 20 100 20"
                  fill="hsl(var(--tea-emerald) / 0.2)"
                  stroke="hsl(var(--tea-emerald))"
                  strokeWidth="2"
                />
                
                {/* Grid lines */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 30}
                    x2="200"
                    y2={i * 30}
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                ))}
                {[...Array(7)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 30}
                    y1="0"
                    x2={i * 30}
                    y2="300"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                ))}
              </svg>
            </div>

            {/* Destination markers */}
            {destinations.map((dest, i) => {
              // Convert lat/lng to relative position on stylized map
              const x = ((dest.lng - 79.5) / 2.5) * 100;
              const y = ((9.5 - dest.lat) / 4) * 100;
              
              return (
                <motion.div
                  key={dest.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  className="absolute group cursor-pointer"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className={`relative w-4 h-4 ${typeColors[dest.type]} rounded-full shadow-lg transition-transform group-hover:scale-150`}>
                    <div className={`absolute inset-0 ${typeColors[dest.type]} rounded-full animate-ping opacity-30`} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-elegant whitespace-nowrap">
                      <p className="font-cinzel font-semibold text-foreground text-sm">{dest.name}</p>
                      <p className="text-xs text-muted-foreground">{dest.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Compass */}
            <div className="absolute top-6 right-6">
              <Navigation className="h-8 w-8 text-muted-foreground opacity-50" />
            </div>
          </motion.div>

          {/* Destination List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-sunset-gold/30 transition-colors group cursor-pointer"
              >
                <div className={`w-3 h-3 ${typeColors[dest.type]} rounded-full flex-shrink-0`} />
                <div className="flex-1">
                  <h4 className="font-cinzel font-semibold text-foreground group-hover:text-sunset-gold transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{dest.description}</p>
                </div>
                <MapPin className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            { type: 'city', label: 'City' },
            { type: 'heritage', label: 'Heritage' },
            { type: 'culture', label: 'Culture' },
            { type: 'nature', label: 'Nature' },
            { type: 'wildlife', label: 'Wildlife' },
            { type: 'beach', label: 'Beach' },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <div className={`w-3 h-3 ${typeColors[item.type]} rounded-full`} />
              <span className="text-sm text-muted-foreground font-manrope">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
