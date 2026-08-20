import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination, PageView } from '../types';
import { Star, MapPin, Compass, Search } from 'lucide-react';
import { InstagramFeed } from './InstagramFeed';
import { PartnersSection } from './PartnersSection';

interface DestinationPageProps {
  onSelectDestination: (destination: Destination) => void;
  onNavigate: (page: PageView) => void;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({
  onSelectDestination,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-[#F8FAFC] font-sans animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="relative h-[300px] sm:h-[360px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Destinations Worldwide"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/60 to-[#011D4D]/40 backdrop-blur-[0.5px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight">
            Our Destinations
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-200 mt-3 uppercase tracking-widest font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:text-[#FF5722] transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#FF5722]">Destinations</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF5722]" />
            <input
              type="text"
              placeholder="Search destination or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
            />
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-[#011D4D] font-bold">{filtered.length}</strong> world-class destinations
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((destination) => (
            <div
              key={destination.id}
              onClick={() => onSelectDestination(destination)}
              className="group bg-white rounded-xl overflow-hidden shadow-xs border border-slate-200/80 hover:border-[#FF5722] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`destination-full-card-${destination.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/70 via-transparent to-black/10" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-[#011D4D] rounded-md flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#FF5722] text-[#FF5722]" />
                  <span>{destination.rating}</span>
                </div>

                {/* Name Pill */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-1.5 rounded-lg shadow-sm border border-slate-100">
                  <span className="text-base font-bold text-[#011D4D]">{destination.name}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>Best Time: <strong className="text-slate-800 font-semibold">{destination.bestTime}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>{destination.toursCount} Available Tour Packages</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider group-hover:underline">
                    Explore Packages →
                  </span>
                  <button className="bg-orange-50 hover:bg-[#FF5722] text-[#FF5722] hover:text-white px-4 py-1.5 rounded-md text-xs font-bold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <InstagramFeed />
      <PartnersSection />
    </div>
  );
};

