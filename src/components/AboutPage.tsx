import React from 'react';
import { Bus, Globe, Building2, UserCheck, CheckSquare, Shield, Award, Sparkles } from 'lucide-react';
import { TestimonialsSection } from './TestimonialsSection';
import { InstagramFeed } from './InstagramFeed';
import { PartnersSection } from './PartnersSection';
import { PageView } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenReserve: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReserve }) => {
  return (
    <div className="w-full bg-[#F8FAFC] font-sans animate-in fade-in duration-300">
      
      {/* 1. Hero Banner: About Us */}
      <div className="relative h-[320px] sm:h-[400px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=2000&q=85"
          alt="About Us Holiday Planners group of friends"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/60 to-[#011D4D]/40 backdrop-blur-[0.5px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight drop-shadow-md">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-200 mt-3 uppercase tracking-widest font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:text-[#FF5722] transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#FF5722]">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. 4 Feature Cards Row (Overlapping hero bottom) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-14 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Private Transport */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:border-[#FF5722] hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <Bus className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-2">Private Transport</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia.
            </p>
          </div>

          {/* Card 2: Diverse Destinations */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:border-[#FF5722] hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-2">Diverse Destinations</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia.
            </p>
          </div>

          {/* Card 3: Great Hotels */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:border-[#FF5722] hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-2">Great Hotels</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia.
            </p>
          </div>

          {/* Card 4: Fast Booking */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:border-[#FF5722] hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-2">Fast Booking</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Plan Your Trip with Us Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-5 bg-[#FF5722] rounded-full inline-block" />
              <span className="text-[#FF5722] text-xs uppercase tracking-widest font-bold">About us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#011D4D] font-extrabold leading-tight mb-6 tracking-tight">
              Plan Your <span className="text-[#FF5722]">Trip</span> with Us
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia she had a last view back on the skyline of her hometown.
            </p>

            <button
              onClick={onOpenReserve}
              className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              Book Your Tour
            </button>
          </div>

          {/* Right Overlapping Photos */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[440px] h-[360px] sm:h-[420px]">
              <div className="absolute top-0 right-0 w-[80%] h-[75%] border-4 border-[#011D4D] shadow-xl rounded-xl overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
                  alt="Modern travel architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[60%] border-4 border-[#FF5722] shadow-2xl rounded-xl overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
                  alt="Traveler walking with luggage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Feature Split 1: Pagoda Temple Image + Checklist */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Pagoda Temple Image */}
            <div className="lg:col-span-6 h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80"
                alt="Historic Pagoda Temple"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Headline & Checklist */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#011D4D] font-extrabold leading-tight mb-4 tracking-tight">
                Bookmarksgrove, <span className="text-[#FF5722]">the headline</span> of <span className="italic font-normal text-slate-700">Alphabet Village</span> subline.
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
              </p>

              {/* 2-Column Checkmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>Far far away, behind the word mountains.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>the coast of the Semantics.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>countries Vokalia and Consonantia, there live.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>word mountains, far from the countries Vokalia.</span>
                </div>

                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>Separated they live in Bookmarksgrove right.</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Skills / Quality Progress Bars Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#011D4D] font-extrabold leading-tight mb-4 tracking-tight">
              The headline of <span className="text-[#FF5722]">Alphabet</span> subline.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>

          {/* Right 4 Progress Bars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Accomodation 80% */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#011D4D] mb-1.5 uppercase tracking-wide">
                <span>Accomodation</span>
                <span className="text-[#FF5722]">80%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5722] rounded-full transition-all duration-1000" style={{ width: '80%' }} />
              </div>
            </div>

            {/* 2. Destination 95% */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#011D4D] mb-1.5 uppercase tracking-wide">
                <span>Destination</span>
                <span className="text-[#FF5722]">95%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5722] rounded-full transition-all duration-1000" style={{ width: '95%' }} />
              </div>
            </div>

            {/* 3. Meals 67% */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#011D4D] mb-1.5 uppercase tracking-wide">
                <span>Meals</span>
                <span className="text-[#FF5722]">67%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5722] rounded-full transition-all duration-1000" style={{ width: '67%' }} />
              </div>
            </div>

            {/* 4. Transport 87% */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#011D4D] mb-1.5 uppercase tracking-wide">
                <span>Transport</span>
                <span className="text-[#FF5722]">87%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5722] rounded-full transition-all duration-1000" style={{ width: '87%' }} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Feature Split 2: Checklist on Left + Emerald Lake Mountain Hikers on Right */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline & Checklist */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#011D4D] font-extrabold leading-tight mb-4 tracking-tight">
                Bookmarksgrove, <span className="text-[#FF5722]">the headline</span> of <span className="italic font-normal text-slate-700">Alphabet Village</span> subline.
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
              </p>

              {/* 2-Column Checkmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>Far far away, behind the word mountains.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>the coast of the Semantics.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>countries Vokalia and Consonantia, there live.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>word mountains, far from the countries Vokalia.</span>
                </div>

                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <div className="w-5 h-5 rounded-md bg-[#FF5722] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span>Separated they live in Bookmarksgrove right.</span>
                </div>
              </div>

            </div>

            {/* Right Emerald Lake & Hikers Image */}
            <div className="lg:col-span-6 h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
                alt="Hikers overlooking alpine emerald lake"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Instagram Feed */}
      <InstagramFeed />

      {/* 9. Partners */}
      <PartnersSection />

    </div>
  );
};

