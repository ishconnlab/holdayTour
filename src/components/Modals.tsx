import React, { useState } from 'react';
import { Tour, Destination, BlogPost, SpecialOffer } from '../types';
import { X, Clock, Users, Star, MapPin, Calendar, CheckCircle2, Shield, Compass, ChevronRight } from 'lucide-react';

/* =========================================================
   1. Quick Search Modal
   ========================================================= */
interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose, onSearch }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#011D4D]/80 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-2xl p-6 sm:p-8 relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#011D4D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-4 bg-[#FF5722] rounded-full inline-block" />
            <span className="text-[#FF5722] text-xs font-bold uppercase tracking-wider">Search Holiday Planners</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#011D4D] tracking-tight">Find Your Dream Vacation</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Type destination, tour name, or country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#011D4D] placeholder-slate-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-400 mr-1">Popular:</span>
              {['Greece', 'Switzerland', 'Thailand', 'India'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => { setQuery(item); }}
                  className="text-xs bg-slate-100 hover:bg-[#FF5722] hover:text-white text-slate-600 px-3 py-1 rounded-md transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


/* =========================================================
   2. Tour Detail Modal
   ========================================================= */
interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  onBookTour: (tour: Tour) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  onBookTour
}) => {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#011D4D]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative my-8 border border-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-80 w-full shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FF5722] px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md">
                {tour.destination}
              </span>
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#FF5722] text-[#FF5722]" />
                <span>{tour.rating} ({tour.reviewsCount} reviews)</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-700">
            <div>
              <span className="text-slate-400 block uppercase text-[10px] font-semibold">Duration</span>
              <strong className="text-[#011D4D] text-sm">{tour.duration}</strong>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px] font-semibold">Group Size</span>
              <strong className="text-[#011D4D] text-sm">{tour.groupSize}</strong>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px] font-semibold">Category</span>
              <strong className="text-[#011D4D] text-sm">{tour.category}</strong>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px] font-semibold">Price</span>
              <strong className="text-[#FF5722] text-base">${tour.price}</strong>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#011D4D] mb-2">Tour Overview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Included / Excluded */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/60">
              <h4 className="font-bold text-xs text-emerald-900 uppercase tracking-wider mb-2">
                Included in Package
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-800">
                <li className="flex items-center gap-2">✓ 4-Star & 5-Star Hotel Accommodations</li>
                <li className="flex items-center gap-2">✓ Daily Gourmet Breakfast & Dinners</li>
                <li className="flex items-center gap-2">✓ Dedicated English-speaking Tour Guide</li>
                <li className="flex items-center gap-2">✓ Private Air-Conditioned Transportation</li>
                <li className="flex items-center gap-2">✓ All Sightseeing & Monument Entrance Fees</li>
              </ul>
            </div>

            <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200/60">
              <h4 className="font-bold text-xs text-rose-900 uppercase tracking-wider mb-2">
                Not Included
              </h4>
              <ul className="space-y-1.5 text-xs text-rose-800">
                <li className="flex items-center gap-2">✕ International Flight Tickets</li>
                <li className="flex items-center gap-2">✕ Personal Travel Insurance</li>
                <li className="flex items-center gap-2">✕ Personal Souvenirs & Alcoholic Drinks</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs text-slate-500 block">Total Price / Person</span>
            <span className="text-2xl font-black text-[#011D4D]">${tour.price}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookTour(tour);
            }}
            className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all active:scale-95 cursor-pointer"
          >
            Book This Tour Now
          </button>
        </div>

      </div>
    </div>
  );
};


/* =========================================================
   4. Destination Detail Modal
   ========================================================= */
interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onExploreTours: (destName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onExploreTours
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#011D4D]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative my-8 border border-slate-100">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 w-full">
          <img
            src={destination.image}
            alt={destination.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-xs uppercase font-bold text-[#FF5722] tracking-widest">{destination.country}</span>
            <h2 className="text-3xl font-extrabold">{destination.name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            {destination.description}
          </p>

          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs">
            <div>
              <span className="text-slate-400 block uppercase font-semibold">Best Season To Visit</span>
              <strong className="text-[#011D4D] text-sm">{destination.bestTime}</strong>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-semibold">Available Tour Itineraries</span>
              <strong className="text-[#011D4D] text-sm">{destination.toursCount} Packages</strong>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-sm text-xs font-bold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onExploreTours(destination.name);
              }}
              className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-6 py-2.5 rounded-sm text-xs uppercase font-bold tracking-wider shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              View Tours in {destination.name}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


/* =========================================================
   5. Blog Article Reader Modal
   ========================================================= */
interface BlogArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#011D4D]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative my-8 border border-slate-100 max-h-[90vh] flex flex-col">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-[#FF5722] px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md inline-block mb-2">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-300 mt-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
          <p className="font-semibold text-[#011D4D] text-base">
            {post.excerpt}
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <p>
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <div className="p-4 bg-orange-50/60 border-l-4 border-[#FF5722] rounded-r-lg italic text-[#011D4D] my-4">
            “Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you.”
          </div>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/20 cursor-pointer"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};

