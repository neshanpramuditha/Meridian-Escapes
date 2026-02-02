import heroBeach from '@/assets/hero-beach.jpg';
import heroCultural from '@/assets/hero-cultural.jpg';
import heroWildlife from '@/assets/hero-wildlife.jpg';
import heroHoneymoon from '@/assets/hero-honeymoon.jpg';

export interface Tour {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'beach' | 'honeymoon' | 'cultural' | 'wildlife' | 'adventure';
  highlights: string[];
  featured?: boolean;
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  includes: string[];
}

export const topTours: Tour[] = [
  {
    id: 'tropical-bliss',
    title: 'Tropical Bliss Tour',
    duration: '7 Nights / 8 Days',
    description: 'Experience the ultimate beach paradise with pristine shores, luxury resorts, and unforgettable sunsets.',
    price: 1299,
    rating: 5,
    reviews: 25,
    image: heroBeach,
    category: 'beach',
    highlights: ['Mirissa Beach', 'Whale Watching', 'Galle Fort', 'Beach Resorts'],
    featured: true,
  },
  {
    id: 'honeymoon-special',
    title: 'Honeymoon Tour',
    duration: '8 Nights / 9 Days',
    description: 'Create magical memories with your loved one in romantic settings across the island.',
    price: 2499,
    rating: 5,
    reviews: 17,
    image: heroHoneymoon,
    category: 'honeymoon',
    highlights: ['3/4/5 Star Hotels', 'Candlelit Dinners', 'Spa Treatments', 'Private Tours'],
    featured: true,
  },
  {
    id: 'cultural-treasures',
    title: 'Cultural Treasures',
    duration: '3 Nights / 4 Days',
    description: 'Discover ancient heritage through temples, ruins, and living traditions.',
    price: 699,
    rating: 5,
    reviews: 31,
    image: heroCultural,
    category: 'cultural',
    highlights: ['Sigiriya Rock', 'Dambulla Cave Temple', 'Kandy Temple', 'Ancient Ruins'],
    featured: true,
  },
  {
    id: 'island-wonders',
    title: 'Island Wonders',
    duration: '8 Nights / 9 Days',
    description: 'Complete discovery tour featuring temples, tea plantations, beaches, and wildlife.',
    price: 1899,
    rating: 4,
    reviews: 22,
    image: heroWildlife,
    category: 'adventure',
    highlights: ['Ella Train', 'Yala Safari', 'Tea Plantations', 'Colonial History'],
    featured: true,
  },
];

export const popularPackages: Package[] = [
  {
    id: 'tropical-bliss-pkg',
    title: 'Tropical Bliss',
    duration: '7N/8D',
    description: 'Beach paradise with crystal waters',
    longDescription: 'On Arrival at Bandaranaike International Airport, you will be met by our representative and transfer to Dambulla. Experience the finest beaches and coastal beauty Sri Lanka has to offer.',
    price: 1299,
    rating: 5,
    reviews: 25,
    image: heroBeach,
    category: 'Beach',
    includes: ['Airport Transfer', 'Beach Hotels', 'Whale Watching', 'Galle Fort Tour'],
  },
  {
    id: 'honeymoon-pkg',
    title: 'Honeymoon Special',
    duration: '8N/9D',
    description: 'Luxury romance island-wide',
    longDescription: '3/4/5 Star Hotels Island wide. Create unforgettable memories with your loved one across the most romantic destinations in Sri Lanka.',
    price: 2499,
    rating: 5,
    reviews: 17,
    image: heroHoneymoon,
    category: 'Romance',
    includes: ['Luxury Hotels', 'Private Dining', 'Spa Package', 'Sunset Cruise'],
  },
  {
    id: 'island-wonders-pkg',
    title: 'Island Wonders',
    duration: '8N/9D',
    description: 'Complete Sri Lanka experience',
    longDescription: 'Discover temples, tea plantations, beaches, and wildlife in one comprehensive tour that captures the essence of Sri Lanka.',
    price: 1899,
    rating: 4,
    reviews: 22,
    image: heroWildlife,
    category: 'Discovery',
    includes: ['All Inclusive', 'Safari Tour', 'Train Ride', 'Cultural Sites'],
  },
];

export const specialOffers: Package[] = [
  {
    id: 'cultural-heritage',
    title: 'Cultural Heritage',
    duration: '6N/7D',
    description: 'Ancient temples & UNESCO sites',
    longDescription: 'Explore the rich cultural heritage of Sri Lanka through its ancient temples, UNESCO World Heritage sites, and living traditions.',
    price: 899,
    originalPrice: 1124,
    discount: 20,
    rating: 5,
    reviews: 18,
    image: heroCultural,
    category: 'Cultural',
    includes: ['Sigiriya', 'Dambulla', 'Kandy', 'Polonnaruwa'],
  },
  {
    id: 'hill-country',
    title: 'Hill Country Escape',
    duration: '5N/6D',
    description: 'Tea trails & misty mountains',
    longDescription: 'Journey through emerald tea plantations, misty mountains, and colonial hill stations in the heart of Sri Lanka.',
    price: 749,
    originalPrice: 882,
    discount: 15,
    rating: 5,
    reviews: 14,
    image: heroHoneymoon,
    category: 'Nature',
    includes: ['Ella', 'Nuwara Eliya', 'Tea Factory', 'Train Journey'],
  },
  {
    id: 'beach-bliss',
    title: 'Beach Bliss',
    duration: '8N/9D',
    description: 'Coastal paradise & ocean views',
    longDescription: 'Relax on pristine beaches, enjoy water sports, and witness spectacular sunsets along the southern coast.',
    price: 1199,
    rating: 5,
    reviews: 21,
    image: heroBeach,
    category: 'Beach',
    includes: ['Mirissa', 'Unawatuna', 'Hikkaduwa', 'Whale Watching'],
  },
];

export const destinations = [
  { name: 'Yala', type: 'Wildlife Safari' },
  { name: 'Ella', type: 'Hill Country' },
  { name: 'Galle', type: 'Colonial Heritage' },
  { name: 'Sigiriya', type: 'Ancient Wonder' },
  { name: 'Mirissa', type: 'Beach Paradise' },
  { name: 'Kandy', type: 'Cultural Capital' },
  { name: 'Dambulla', type: 'Cave Temples' },
  { name: 'Nuwara Eliya', type: 'Tea Country' },
  { name: 'Trincomalee', type: 'Eastern Coast' },
  { name: 'Arugam Bay', type: 'Surf Paradise' },
  { name: 'Bentota', type: 'Water Sports' },
  { name: 'Polonnaruwa', type: 'Ancient City' },
];

export const stats = [
  { label: 'Satisfied Customers', value: 1000, suffix: '+' },
  { label: 'Trusted Partners', value: 2000, suffix: '+' },
  { label: 'Destinations', value: 150, suffix: '+' },
  { label: 'Excursions', value: 100, suffix: '+' },
];

export const contactInfo = {
  phone: '+94 114 38 77 66',
  whatsapp: '+94 114 38 77 66',
  email: 'info@meridianescapes.lk',
  address: 'Colombo, Sri Lanka',
  hours: '24/7 Emergency Support',
};
