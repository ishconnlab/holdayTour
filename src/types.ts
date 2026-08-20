export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  toursCount: number;
  rating: number;
  description: string;
  bestTime: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  category: 'Adventure' | 'Cultural' | 'Relaxation' | 'City Break' | 'Wildlife' | 'Historical' | 'Seaside' | 'Discovery';
  rating: number;
  reviewsCount: number;
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  departureDates: string[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  duration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  source: string;
  avatar: string;
  rating: number;
  quote: string;
}

export type PageView = 'home' | 'tour';
