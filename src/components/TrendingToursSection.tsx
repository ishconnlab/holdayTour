import React, { useState } from 'react';
import { TOURS } from '../data/mockData';
import { Tour } from '../types';
import { Clock, Users } from 'lucide-react';

interface TrendingToursSectionProps {
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
}

export const TrendingToursSection: React.FC<TrendingToursSectionProps> = ({
  onSelectTour,
  onBookTour
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStart = Math.max(0, TOURS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  const displayedTours = TOURS.slice(startIndex, startIndex + visibleCount).concat(
    TOURS.slice(0, Math.max(0, startIndex + visibleCount - TOURS.length))
  ).slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-white relative bg-world-map font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Controls matching 01_homepage.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-4 bg-[#c29958] inline-block" />
              <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">Amazing Tours</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161616] font-normal leading-tight tracking-tight">
              Trending, <span className="font-bold">Best Selling Tours</span> And<br />
              Fun Destinations
            </h2>
          </div>

          {/* Stacked Prev / Next Buttons in Gold on Right/Top matching 01_homepage.jpg */}
          <div className="flex flex-col gap-1 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              id="tours-prev-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous Tour"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              id="tours-next-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next Tour"
            >
              Next
            </button>
          </div>
        </div>

        {/* 3 Tour Cards Grid matching 01_homepage.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white border border-gray-200 rounded-xs shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              id={`tour-card-${tour.id}`}
            >
              {/* Tour Header Image & Vertical Discount Ribbon */}
              <div 
                className="relative h-60 overflow-hidden cursor-pointer"
                onClick={() => onSelectTour(tour)}
              >
                <img
                  src={tour.image}
                  alt={tour.destination}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vertical Ribbon Tag on Top-Left */}
                <div 
                  className="absolute top-0 left-0 bg-[#c29958] text-white px-1.5 py-3 text-[10px] font-bold tracking-widest uppercase shadow-md z-10"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  <span className="rotate-180">{tour.discount || '15% Off'}</span>
                </div>
              </div>

              {/* Tour Body Details matching 01_homepage.jpg */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Destination Gold Pill Tag */}
                  <div className="mb-2">
                    <span className="inline-block bg-[#c29958] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-xs">
                      {tour.destination}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectTour(tour)}
                    className="font-serif text-lg font-bold text-[#161616] leading-snug mb-3 hover:text-[#c29958] transition-colors cursor-pointer"
                  >
                    {tour.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
                    {tour.description}
                  </p>
                </div>

                {/* Meta details: Duration & Group Size */}
                <div className="border-t border-b border-gray-100 py-3 mb-6 grid grid-cols-2 gap-2 text-gray-600 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c29958]" />
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-semibold">Duration</span>
                      <span className="font-bold text-[#161616]">{tour.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#c29958]" />
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-semibold">Group Size</span>
                      <span className="font-bold text-[#161616]">{tour.groupSize}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Book Now Action in Gold */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-serif text-2xl font-bold text-[#161616]">${tour.price}</span>
                  </div>

                  <button
                    onClick={() => onBookTour(tour)}
                    id={`book-now-btn-${tour.id}`}
                    className="group/btn relative overflow-hidden bg-[#c29958] text-white px-6 py-2 rounded-xs font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer inline-flex items-center justify-center"
                  >
                    <span className="absolute inset-0 bg-[#161616] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10">BOOK NOW</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setStartIndex(dot % Math.max(1, TOURS.length - 2))}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                startIndex === dot ? 'w-6 bg-[#c29958]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Slide dot ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

