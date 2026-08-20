import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../data/mockData';
import { SpecialOffer } from '../types';

interface SpecialOffersSectionProps {
  onBookOffer: (offer: SpecialOffer) => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ onBookOffer }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;
  const maxStart = Math.max(0, SPECIAL_OFFERS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header and Controls Row matching 01_homepage.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-4 bg-[#c29958] inline-block" />
              <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">Amazing Offers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161616] font-normal leading-tight tracking-tight">
              Special <span className="font-bold">Deals</span> And Last Minute<br />
              <span className="font-bold">Amazing Offers</span>
            </h2>
          </div>

          {/* Stacked Prev / Next Buttons in Gold on Right/Top */}
          <div className="flex flex-col gap-1 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              id="offers-prev-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous Offer"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              id="offers-next-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next Offer"
            >
              Next
            </button>
          </div>
        </div>

        {/* 4 Cards Grid matching 01_homepage.jpg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OFFERS.slice(startIndex, startIndex + visibleCount).concat(
            SPECIAL_OFFERS.slice(0, Math.max(0, startIndex + visibleCount - SPECIAL_OFFERS.length))
          ).slice(0, 4).map((offer, idx) => (
            <div
              key={`${offer.id}-${idx}`}
              onClick={() => onBookOffer(offer)}
              className="group relative h-[320px] rounded-xs overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              id={`offer-card-${offer.id}`}
            >
              {/* Image */}
              <img
                src={offer.image}
                alt={offer.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

              {/* Vertical Discount Tag on Top-Left matching 01_homepage.jpg */}
              <div 
                className="relative z-10 self-start bg-[#c29958] text-white px-1.5 py-3 text-[10px] font-bold tracking-widest uppercase shadow-md"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                <span className="rotate-180">{offer.discount}</span>
              </div>

              {/* Bottom Details matching 01_homepage.jpg */}
              <div className="relative z-10 flex items-center justify-between bg-black/80 p-3.5 m-2.5 rounded-xs transition-all">
                <div className="truncate pr-2">
                  <h3 className="text-white font-serif text-sm font-bold truncate">
                    {offer.title}
                  </h3>
                </div>
                
                {/* Gold Price Box on Right */}
                <div className="bg-[#c29958] text-white px-2.5 py-1 rounded-xs text-xs font-bold shrink-0 shadow-sm">
                  ${offer.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching 01_homepage.jpg */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setStartIndex(dot % Math.max(1, SPECIAL_OFFERS.length - 3))}
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

