import React, { useState } from 'react';
import { INSTAGRAM_PHOTOS } from '../data/mockData';
import { Instagram } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-24 bg-white relative font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Instagram Icon */}
        <div className="flex items-center gap-6 mb-12">
          {/* Big Instagram Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xs border-2 border-gray-200 bg-[#faf8f5] flex items-center justify-center text-[#c29958] shrink-0 shadow-xs">
            <Instagram className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 bg-[#c29958] inline-block" />
              <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">Follow On Instagram</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#161616] font-bold tracking-tight">
              @holidayplanners.official
            </h2>
            <p className="text-xs text-gray-400 mt-1">Join our active world travel community</p>
          </div>
        </div>

        {/* 6 Square Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_PHOTOS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="group relative aspect-square rounded-xs overflow-hidden shadow-xs hover:shadow-xl cursor-pointer border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay with Instagram Icon & Title */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                <Instagram className="w-6 h-6 mb-2 text-[#c29958]" />
                <span className="text-[11px] font-semibold leading-tight line-clamp-2">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-[#161616] rounded-xs overflow-hidden shadow-2xl border border-gray-800">
            <img 
              src={selectedImage} 
              alt="Instagram Preview" 
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
            />
            <div className="p-4 bg-[#161616] text-white flex items-center justify-between text-xs border-t border-gray-800">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#c29958]" />
                <span className="font-semibold text-gray-200">Holiday Planners on Instagram</span>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-[#c29958] hover:bg-[#b08246] px-4 py-1.5 rounded-xs text-white uppercase text-[10px] font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

