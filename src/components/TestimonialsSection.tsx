import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentReview = TESTIMONIALS[activeIndex] || TESTIMONIALS[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Solid Gold Box + Giant Quotation Marks */}
          <div className="lg:col-span-5 relative">
            {/* Dot Pattern above gold box */}
            <div className="flex gap-1.5 mb-2 pl-4">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              ))}
            </div>

            {/* Gold Container */}
            <div className="bg-[#c29958] p-8 sm:p-12 text-white shadow-sm relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-0.5 h-4 bg-white inline-block" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  Testimonials
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight tracking-tight">
                Customer <span className="font-bold">Reviews</span>
              </h2>
            </div>

            {/* Giant Gold Quotation Mark Graphic */}
            <div className="mt-6 sm:mt-8 flex items-center gap-4 pl-6 text-[#c29958] select-none">
              <div className="flex gap-3">
                {/* Quotation Glyph 1 */}
                <div className="w-12 h-16 sm:w-16 sm:h-20 bg-[#c29958] relative rounded-xs">
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white" />
                  <div className="absolute -bottom-4 left-0 w-5 h-6 bg-[#c29958] -skew-x-12" />
                </div>
                {/* Quotation Glyph 2 */}
                <div className="w-12 h-16 sm:w-16 sm:h-20 bg-[#c29958] relative rounded-xs">
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white" />
                  <div className="absolute -bottom-4 left-0 w-5 h-6 bg-[#c29958] -skew-x-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stars, Review Quote, Author and Carousel Indicators */}
          <div className="lg:col-span-7 lg:pl-6 pt-4 lg:pt-0">
            {/* 5 Gold Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 fill-[#c29958] text-[#c29958]" 
                />
              ))}
            </div>

            {/* Review Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>

            {/* Author Name & Rating Source */}
            <div className="mb-8">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#c29958] mb-0.5">
                {currentReview.name || 'John Doe'}
              </h4>
              <p className="text-xs text-gray-400">
                Rated by travelers on facebook
              </p>
            </div>

            {/* Carousel Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeIndex === dotIdx 
                      ? 'bg-[#c29958] ring-2 ring-[#c29958]/30' 
                      : 'border-2 border-gray-400 bg-transparent hover:border-[#c29958]'
                  }`}
                  aria-label={`Testimonial slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


