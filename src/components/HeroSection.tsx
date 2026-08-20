import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageView } from '../types';

interface HeroSectionProps {
  onSearchSubmit: (params: { where: string; when: string; type: string }) => void;
  onNavigate: (page: PageView) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    titleLine1: 'Enjoy The Travel With',
    titleLine2: 'Holiday Planners',
    subtitle: 'A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
    titleLine1: 'Enjoy The Travel With',
    titleLine2: 'Holiday Planners',
    subtitle: 'Discover unforgettable destinations, tailored luxury vacations, and curated experiences worldwide with best price guarantee.',
  },
  {
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85',
    titleLine1: 'Enjoy The Travel With',
    titleLine2: 'Holiday Planners',
    subtitle: 'A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.',
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearchSubmit, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');
  const [travelType, setTravelType] = useState('');

  // Auto-play slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({ where, when, type: travelType });
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative w-full font-sans">
      {/* Hero Banner Area */}
      <section className="relative w-full bg-[#161616] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-center">
        {/* Background Image Slides */}
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt="Travel background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        {/* Prev & Next Side Badges */}
        <button
          onClick={handlePrev}
          id="hero-prev-btn"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#c29958] hover:bg-[#b08246] text-white px-2.5 py-4 text-[11px] font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center cursor-pointer rounded-r-xs"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          aria-label="Previous Slide"
        >
          <span className="rotate-180">Prev</span>
        </button>

        <button
          onClick={handleNext}
          id="hero-next-btn"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#c29958] hover:bg-[#b08246] text-white px-2.5 py-4 text-[11px] font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center cursor-pointer rounded-l-xs"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          aria-label="Next Slide"
        >
          <span>Next</span>
        </button>

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center pt-20 sm:pt-28 pb-20 sm:pb-24">
          
          {/* Line 1: Enjoy The Travel With */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-3 tracking-tight drop-shadow-md">
            {slide.titleLine1}
          </h1>

          {/* Line 2: Holiday Planners in Gold Banner Rectangle */}
          <div className="inline-block my-2">
            <div className="bg-[#c29958] text-white font-serif text-3xl sm:text-5xl md:text-6xl font-bold px-6 sm:px-10 py-1.5 sm:py-2.5 rounded-xs shadow-lg">
              {slide.titleLine2}
            </div>
          </div>

          {/* Subtitle paragraph */}
          <p className="text-gray-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal drop-shadow mt-5 mb-2">
            {slide.subtitle}
          </p>

        </div>
      </section>

      {/* Floating Booking Search Bar Overlapping Seamlessly */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-14">
        <div className="bg-white rounded-xs shadow-2xl p-4 sm:p-6 border border-gray-100/80">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
            
            {/* Field 1: Where To? */}
            <div className="relative">
              <div className="relative flex items-center">
                <MapPin className="absolute left-3.5 w-4 h-4 text-[#c29958] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Where To?"
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xs text-xs text-[#161616] placeholder-gray-500 font-medium focus:outline-none focus:border-[#c29958] transition-colors"
                />
              </div>
            </div>

            {/* Field 2: When? */}
            <div className="relative">
              <div className="relative flex items-center">
                <Calendar className="absolute left-3.5 w-4 h-4 text-[#c29958] pointer-events-none" />
                <select
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white border border-gray-300 rounded-xs text-xs text-gray-700 font-medium focus:outline-none focus:border-[#c29958] transition-colors cursor-pointer appearance-none"
                >
                  <option value="">When?</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <span className="absolute right-3 pointer-events-none text-gray-400 text-xs">▼</span>
              </div>
            </div>

            {/* Field 3: Travel Type */}
            <div className="relative">
              <div className="relative flex items-center">
                <Flag className="absolute left-3.5 w-4 h-4 text-[#c29958] pointer-events-none" />
                <select
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white border border-gray-300 rounded-xs text-xs text-gray-700 font-medium focus:outline-none focus:border-[#c29958] transition-colors cursor-pointer appearance-none"
                >
                  <option value="">Travel Type</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Relaxation">Relaxation</option>
                  <option value="Family">Family Tour</option>
                  <option value="Honeymoon">Honeymoon</option>
                </select>
                <span className="absolute right-3 pointer-events-none text-gray-400 text-xs">▼</span>
              </div>
            </div>

            {/* Field 4: FIND NOW button in Gold with progressive hover fill */}
            <div>
              <button
                type="submit"
                id="hero-find-now-btn"
                className="group relative overflow-hidden w-full bg-[#c29958] text-white py-3 px-4 rounded-xs font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-[#161616] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">FIND NOW</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
