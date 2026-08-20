import React from 'react';
import { PageView } from '../types';
import { Compass } from 'lucide-react';

interface AboutPreviewSectionProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPreviewSection: React.FC<AboutPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-white relative overflow-hidden font-sans border-b border-gray-100">
      {/* Background Watermark swoosh/compass decoration matching template */}
      <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none">
        <Compass className="w-[450px] h-[450px] text-gray-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dual Overlapping Photo Composition matching 01_homepage.jpg */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px] h-[380px] sm:h-[450px]">
              
              {/* Top/Back Image with dark frame */}
              <div className="absolute top-0 right-0 w-[78%] h-[74%] border-4 border-[#161616] shadow-xl rounded-xs overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
                  alt="Modern travel architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom/Front Overlapping Image with gold frame */}
              <div className="absolute bottom-0 left-0 w-[62%] h-[65%] border-4 border-[#c29958] shadow-2xl rounded-xs overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
                  alt="Traveler with luggage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right: Content details matching 01_homepage.jpg */}
          <div className="lg:col-span-6">
            {/* Tag: | About us */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 bg-[#c29958] inline-block" />
              <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">About us</span>
            </div>

            {/* Heading: Plan Your Trip with Us */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161616] font-normal leading-tight mb-6 tracking-tight">
              Plan Your <span className="font-bold">Trip</span> with Us
            </h2>

            {/* Body paragraph matching reference template */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-8">
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline
            </p>

            {/* Action Button: READ MORE in Gold with progressive hover fill */}
            <button
              onClick={() => onNavigate('tour')}
              id="about-preview-read-more-btn"
              className="group relative overflow-hidden bg-[#c29958] text-white px-8 py-3 rounded-xs font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-[#161616] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">READ MORE</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

