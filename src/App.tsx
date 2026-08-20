/**
 * Holiday Planners - Travel & Tour Website
 * Rebuilt strictly to exact ThemeForest design specifications (Home and Tour pages only)
 */

import React, { useState } from 'react';
import { PageView, Tour, Destination, BlogPost, SpecialOffer } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutPreviewSection } from './components/AboutPreviewSection';
import { DestinationGrid } from './components/DestinationGrid';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { TravelingHighlightsBanner } from './components/TravelingHighlightsBanner';
import { TrendingToursSection } from './components/TrendingToursSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LatestNewsSection } from './components/LatestNewsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
import { TourListingPage } from './components/TourListingPage';

import {
  QuickSearchModal,
  TourDetailModal,
  DestinationModal,
  BlogArticleModal
} from './components/Modals';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [tourFilter, setTourFilter] = useState<string>('All');

  // Modals state
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState(false);
  const [selectedTourDetail, setSelectedTourDetail] = useState<Tour | null>(null);
  const [selectedDestinationDetail, setSelectedDestinationDetail] = useState<Destination | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Navigation handler
  const handleNavigate = (page: PageView) => {
    if (page === 'tour') {
      setTourFilter('');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hero Search Handler
  const handleHeroSearch = (params: { where: string; when: string; type: string }) => {
    if (params.where || params.type) {
      setTourFilter(params.where || params.type);
    } else {
      setTourFilter('All');
    }
    setCurrentPage('tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct Search Modal Submit
  const handleQuickSearch = (query: string) => {
    setTourFilter(query);
    setCurrentPage('tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct tour / offer selection and exploration
  const handleBookTour = (tour: Tour) => {
    setTourFilter(tour.destination || '');
    setCurrentPage('tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookOffer = (offer: SpecialOffer) => {
    setTourFilter(offer.location || '');
    setCurrentPage('tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGeneralReserve = () => {
    setTourFilter('');
    setCurrentPage('tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between selection:bg-[#c39659] selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsQuickSearchOpen(true)}
        onOpenReserve={handleOpenGeneralReserve}
      />

      {/* 2. Page Views Content (Strictly Home & Tour Pages Only) */}
      <main className="flex-1 w-full">
        
        {/* HOMEPAGE */}
        {currentPage === 'home' && (
          <div className="w-full animate-in fade-in duration-300">
            {/* Hero Section with Slider & Search Form */}
            <HeroSection
              onSearchSubmit={handleHeroSearch}
              onNavigate={handleNavigate}
            />

            {/* About Preview with dual overlapping photos */}
            <AboutPreviewSection onNavigate={handleNavigate} />

            {/* Amazing Destinations Bento Grid (Greece, India, Thailand, Switzerland) */}
            <DestinationGrid
              onSelectDestination={(dest) => setSelectedDestinationDetail(dest)}
              onNavigate={handleNavigate}
            />

            {/* Amazing Offers Carousel (Jungfraugipfel, Cinque Terre, Parthenon) */}
            <SpecialOffersSection onBookOffer={handleBookOffer} />

            {/* Traveling Highlights Banner with 3 gold feature columns */}
            <TravelingHighlightsBanner />

            {/* Trending, Best Selling Tours & Fun Destinations Grid */}
            <TrendingToursSection
              onSelectTour={(tour) => setSelectedTourDetail(tour)}
              onBookTour={handleBookTour}
            />

            {/* Customer Reviews & Testimonials Section */}
            <TestimonialsSection />

            {/* Latest News & Tours Articles */}
            <LatestNewsSection
              onSelectPost={(post) => setSelectedBlogPost(post)}
              onNavigate={handleNavigate}
            />

            {/* Instagram Feed (6 photos) */}
            <InstagramFeed />

            {/* Partners Members (Booking.com, Amadeus, Travelgenio, Travelport) */}
            <PartnersSection />
          </div>
        )}

        {/* TOUR PACKAGES PAGE */}
        {currentPage === 'tour' && (
          <TourListingPage
            onSelectTour={(tour) => setSelectedTourDetail(tour)}
            onBookTour={handleBookTour}
            onNavigate={handleNavigate}
            initialFilter={tourFilter}
          />
        )}

      </main>

      {/* 3. Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 4. Interactive Modals */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onSearch={handleQuickSearch}
      />

      <TourDetailModal
        tour={selectedTourDetail}
        onClose={() => setSelectedTourDetail(null)}
        onBookTour={handleBookTour}
      />

      <DestinationModal
        destination={selectedDestinationDetail}
        onClose={() => setSelectedDestinationDetail(null)}
        onExploreTours={(destName) => {
          setTourFilter(destName);
          setCurrentPage('tour');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <BlogArticleModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />

    </div>
  );
}
