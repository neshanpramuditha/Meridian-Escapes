import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data/tours';

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '').replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-24 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="font-manrope text-sm font-semibold hidden sm:inline">
        Chat with us
      </span>
    </motion.a>
  );
}
