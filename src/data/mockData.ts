import { Destination, Tour, SpecialOffer, BlogPost, Testimonial } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'greece',
    name: 'Greece',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    toursCount: 18,
    rating: 4.9,
    description: 'Experience whitewashed cliffside towns, azure Aegean seas, ancient Acropolis history, and sun-soaked Mediterranean islands.',
    bestTime: 'May to October',
    highlights: ['Santorini Sunset', 'Athens Acropolis', 'Mykonos Windmills', 'Crete Beaches']
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    toursCount: 24,
    rating: 4.8,
    description: 'Emerald waters, dramatic limestone karsts, golden temples, bustling night markets, and warm Thai hospitality.',
    bestTime: 'November to April',
    highlights: ['Phi Phi Islands', 'Bangkok Grand Palace', 'Chiang Mai Elephants', 'Phuket Old Town']
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    toursCount: 15,
    rating: 5.0,
    description: 'Panoramic Alpine peaks, crystalline glacial lakes, scenic train rides, and charming Swiss chalets.',
    bestTime: 'All Year Round',
    highlights: ['Matterhorn in Zermatt', 'Jungfraujoch Glacier', 'Lucerne Lake Cruise', 'Interlaken Adventure']
  },
  {
    id: 'india',
    name: 'India',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    toursCount: 32,
    rating: 4.7,
    description: 'Ancient spiritual heritage, towering deities, majestic desert forts of Rajasthan, and vibrant cultural festivals.',
    bestTime: 'October to March',
    highlights: ['Shiva Sacred Shrines', 'Taj Mahal Agra', 'Jaisalmer Golden Fort', 'Varanasi Ghats']
  },
  {
    id: 'italy',
    name: 'Italy',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    toursCount: 22,
    rating: 4.9,
    description: 'Pastel cliffside villages of Cinque Terre, historic Roman architecture, Venetian canals, and world-class culinary wonders.',
    bestTime: 'April to October',
    highlights: ['Cinque Terre Coastal Hike', 'Rome Colosseum', 'Amalfi Coast Drive', 'Florence Duomo']
  },
  {
    id: 'japan',
    name: 'Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    toursCount: 19,
    rating: 4.95,
    description: 'Traditional Kyoto pagodas, cherry blossoms, futuristic Tokyo avenues, Mount Fuji views, and serene Zen gardens.',
    bestTime: 'March to May & Sept to Nov',
    highlights: ['Kyoto Yasaka Pagoda', 'Tokyo Shinjuku', 'Mt. Fuji Lakes', 'Nara Deer Park']
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Jungfraugipfel, Thailand',
    location: 'Krabi & Phi Phi, Thailand',
    price: 970,
    originalPrice: 1100,
    discount: '12% off',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    duration: '5 Days / 4 Nights'
  },
  {
    id: 'offer-2',
    title: 'Jungfrau Mountain, Swiss',
    location: 'Bernese Oberland, Switzerland',
    price: 1380,
    originalPrice: 1620,
    discount: '15% off',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    duration: '7 Days / 6 Nights'
  },
  {
    id: 'offer-3',
    title: 'Cinque Terre, Italy',
    location: 'Liguria Coast, Italy',
    price: 1700,
    originalPrice: 2180,
    discount: '22% off',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    duration: '6 Days / 5 Nights'
  },
  {
    id: 'offer-4',
    title: 'Parthenon, Greece',
    location: 'Athens & Cyclades, Greece',
    price: 1250,
    originalPrice: 1470,
    discount: '15% off',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
    duration: '6 Days / 5 Nights'
  },
  {
    id: 'offer-5',
    title: 'Santorini Caldera Luxury',
    location: 'Oia, Greece',
    price: 1850,
    originalPrice: 2300,
    discount: '20% off',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    duration: '4 Days / 3 Nights'
  },
  {
    id: 'offer-6',
    title: 'Kyoto Heritage & Temples',
    location: 'Kyoto, Japan',
    price: 1420,
    originalPrice: 1690,
    discount: '16% off',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    duration: '8 Days / 7 Nights'
  }
];

export const TOURS: Tour[] = [
  {
    id: 'tour-italy-1',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'ITALY',
    country: 'Italy',
    duration: '2 days',
    groupSize: '6 People',
    price: 1200,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
    rating: 4.9,
    reviewsCount: 164,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Cinque Terre Coastal Hike', 'Vernazza Harbor Walk', 'Traditional Pesto Workshop', 'Sunset Wine Tasting'],
    included: ['Boutique Coastal Hotel', 'Daily Breakfast', 'Cinque Terre Train Card', 'Local Guide'],
    excluded: ['Flights', 'Personal Expenses'],
    departureDates: ['2026-09-12', '2026-09-26', '2026-10-10']
  },
  {
    id: 'tour-greece-1',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'GREECE',
    country: 'Greece',
    duration: '6 days 3 hours',
    groupSize: '15+ People',
    price: 2500,
    originalPrice: 2950,
    discount: '15% off',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
    category: 'Historical',
    rating: 4.9,
    reviewsCount: 148,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Athens Historic Walking Tour', 'Acropolis VIP Access', 'Santorini Sunset Cruise', 'Delphi Day Excursion'],
    included: ['5-Star Luxury Hotels', 'Daily Buffet Breakfast', 'Private Chauffeur & Transfers', 'English Speaking Guide', 'Museum Fast Passes'],
    excluded: ['International Flights', 'Travel Insurance', 'Personal Souvenirs', 'Alcoholic Beverages'],
    departureDates: ['2026-09-15', '2026-10-01', '2026-10-20']
  },
  {
    id: 'tour-switzerland-1',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'SWITZERLAND',
    country: 'Switzerland',
    duration: '7 days 8 hours',
    groupSize: '50+ People',
    price: 750,
    originalPrice: 880,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    rating: 5.0,
    reviewsCount: 310,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Glacier Express Scenic Train', 'Matterhorn Gondola Ride', 'Lucerne Chapel Bridge Tour', 'Swiss Chocolate Tasting'],
    included: ['Swiss Travel Pass (1st Class)', 'Scenic Mountain Chalets', 'Alpine Breakfast & Dinners', 'Professional Tour Guide'],
    excluded: ['Ski Rental Equipment', 'Flights', 'Personal Laundry'],
    departureDates: ['2026-09-18', '2026-10-08', '2026-10-28']
  },
  {
    id: 'tour-italy-2',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'ITALY',
    country: 'Italy',
    duration: '2 days',
    groupSize: '6 People',
    price: 1200,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
    rating: 4.85,
    reviewsCount: 98,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Cinque Terre Coastal Hike', 'Vernazza Harbor Walk', 'Traditional Pesto Workshop', 'Sunset Wine Tasting'],
    included: ['Boutique Coastal Hotel', 'Daily Breakfast', 'Cinque Terre Train Card', 'Local Guide'],
    excluded: ['Flights', 'Personal Expenses'],
    departureDates: ['2026-09-12', '2026-09-26', '2026-10-10']
  },
  {
    id: 'tour-greece-2',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'GREECE',
    country: 'Greece',
    duration: '6 days 3 hours',
    groupSize: '15+ People',
    price: 2500,
    originalPrice: 2950,
    discount: '15% off',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
    category: 'Historical',
    rating: 4.9,
    reviewsCount: 148,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Athens Historic Walking Tour', 'Acropolis VIP Access', 'Santorini Sunset Cruise', 'Delphi Day Excursion'],
    included: ['5-Star Luxury Hotels', 'Daily Buffet Breakfast', 'Private Chauffeur & Transfers', 'English Speaking Guide', 'Museum Fast Passes'],
    excluded: ['International Flights', 'Travel Insurance', 'Personal Souvenirs', 'Alcoholic Beverages'],
    departureDates: ['2026-09-15', '2026-10-01', '2026-10-20']
  },
  {
    id: 'tour-switzerland-2',
    title: 'Holiday Planners is a World Leading Online Tour Booking Platform',
    destination: 'SWITZERLAND',
    country: 'Switzerland',
    duration: '7 days 8 hours',
    groupSize: '50+ People',
    price: 750,
    originalPrice: 880,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    rating: 5.0,
    reviewsCount: 310,
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    highlights: ['Glacier Express Scenic Train', 'Matterhorn Gondola Ride', 'Lucerne Chapel Bridge Tour', 'Swiss Chocolate Tasting'],
    included: ['Swiss Travel Pass (1st Class)', 'Scenic Mountain Chalets', 'Alpine Breakfast & Dinners', 'Professional Tour Guide'],
    excluded: ['Ski Rental Equipment', 'Flights', 'Personal Laundry'],
    departureDates: ['2026-09-18', '2026-10-08', '2026-10-28']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Things to See and Do When Traveling Abroad',
    date: 'June 6, 2020',
    author: 'Admin',
    category: 'Travel Tips',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    content: `When planning your dream vacation, knowing what hidden gems to look out for can turn a standard holiday into an unforgettable lifelong memory. From sampling authentic local cuisines to discovering untouched coastal beaches away from tourist crowds, here is our essential travel checklist.`
  },
  {
    id: 'blog-2',
    title: 'Travel the Most Beautiful Roads in the World',
    date: 'May 18, 2020',
    author: 'Admin',
    category: 'Road Trips',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    content: `Nothing rivals the sheer sense of freedom that comes from driving along panoramic coastal highway routes and mountain passes. Whether cruising through Italy's Amalfi Coast or winding through the Swiss Alpine valleys, scenic roads define the romance of travel.`
  },
  {
    id: 'blog-3',
    title: 'Journeys are Best Measured in New Friends',
    date: 'April 5, 2020',
    author: 'Admin',
    category: 'Inspiration',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    content: `Travel is never merely about the locations stamped on your passport; it is about the warm friendships formed over shared meals, the stories exchanged with fellow travelers, and the kind strangers whose smiles transcend language barriers.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mathew A. Stephenson',
    source: 'Rated by travelers on twitter',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    source: 'Rated on TripAdvisor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The trip to Greece and Switzerland planned by Holiday Planners was seamless from start to finish. The hotels were breathtaking, transportation was on point, and our guide went above and beyond.'
  },
  {
    id: 'test-3',
    name: 'Carlos Mendoza',
    source: 'Verified Traveler Review',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Booking was super fast and transparent. We scored an amazing last minute offer for Jaisalmer desert tour and had the experience of a lifetime!'
  }
];

export const INSTAGRAM_PHOTOS = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
    title: 'Golden Temple Sunrise'
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80',
    title: 'Historic European Landmark'
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    title: 'Taj Mahal Marble Reflection'
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    title: 'Statue of Liberty Sunset'
  },
  {
    id: 'insta-5',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Alpine Lake Tranquility'
  },
  {
    id: 'insta-6',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
    title: 'Architectural Wonder'
  }
];

export const PARTNERS = [
  { name: 'Booking.com', text: 'Booking.com' },
  { name: 'amadeus', text: 'aMaDEUS' },
  { name: 'travelgenio', text: 'travelgenio' },
  { name: 'Travelport', text: 'Travelport' }
];
