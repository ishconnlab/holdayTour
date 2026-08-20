import React from 'react';
import { Globe, Award, Headphones } from 'lucide-react';

export const TravelingHighlightsBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      
      {/* Background Banner with Panoramic Mountain Image matching 01_homepage.jpg */}
      <div className="relative h-[340px] sm:h-[380px] w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Traveling highlights mountain view"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered Heading matching 01_homepage.jpg */}
        <div className="relative z-10 text-center px-4 max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight drop-shadow-md">
            Traveling Highlights
          </h2>
          <p className="text-[#c29958] text-base sm:text-lg md:text-xl mt-2 font-serif font-medium">
            Your New Traveling Idea
          </p>
        </div>
      </div>

      {/* 3 Gold Feature Columns Overlapping Bottom of Banner matching 01_homepage.jpg */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20 pb-16">
        <div className="bg-[#c29958] text-white shadow-2xl rounded-xs grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 overflow-hidden">
          
          {/* Feature 1: 700+ Destinations */}
          <div className="p-7 sm:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-[#c29958]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wide mb-2 text-white">
                700+ DESTINATIONS
              </h3>
              <p className="text-white/90 text-xs leading-relaxed">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </div>

          {/* Feature 2: Best Price Guarantee */}
          <div className="p-7 sm:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#c29958]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wide mb-2 text-white">
                BEST PRICE GUARANTEE
              </h3>
              <p className="text-white/90 text-xs leading-relaxed">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </div>

          {/* Feature 3: Top Notch Support */}
          <div className="p-7 sm:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6 text-[#c29958]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wide mb-2 text-white">
                TOP NOTCH SUPPORT
              </h3>
              <p className="text-white/90 text-xs leading-relaxed">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

