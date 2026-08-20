import React from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination, PageView } from '../types';

interface DestinationGridProps {
  onSelectDestination: (destination: Destination) => void;
  onNavigate: (page: PageView) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  onSelectDestination,
  onNavigate
}) => {
  const greece = DESTINATIONS.find(d => d.id === 'greece') || DESTINATIONS[0];
  const thailand = DESTINATIONS.find(d => d.id === 'thailand') || DESTINATIONS[1];
  const switzerland = DESTINATIONS.find(d => d.id === 'switzerland') || DESTINATIONS[2];
  const india = DESTINATIONS.find(d => d.id === 'india') || DESTINATIONS[3];

  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5] relative bg-topo-pattern font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching 01_homepage.jpg */}
        <div className="text-left mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-4 bg-[#c29958] inline-block" />
            <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">Amazing Desitination</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161616] font-normal leading-tight tracking-tight">
            Choose <span className="font-bold">The Destination</span> Just Right <br className="hidden sm:inline" />
            For <span className="font-bold">Your Vacation</span>
          </h2>
        </div>

        {/* Destination Bento Layout matching 01_homepage.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Subgrid (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Wide: Greece */}
            <div
              onClick={() => onSelectDestination(greece)}
              className="group relative h-[250px] sm:h-[300px] rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
              id="destination-card-greece"
            >
              <img
                src={greece.image}
                alt={greece.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              {/* Square Button on Bottom-Left with Progressive Hover Fill */}
              <div className="absolute bottom-6 left-6 overflow-hidden bg-white text-[#161616] px-8 py-2.5 rounded-xs font-serif font-bold text-sm sm:text-base tracking-wider uppercase shadow-md transition-colors duration-300 group-hover:text-white">
                <span className="absolute inset-0 bg-[#c29958] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 transition-colors duration-300">
                  {greece.name}
                </span>
              </div>
            </div>

            {/* Bottom 2 Split Columns: Thailand & Switzerland */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Thailand */}
              <div
                onClick={() => onSelectDestination(thailand)}
                className="group relative h-[230px] sm:h-[260px] rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                id="destination-card-thailand"
              >
                <img
                  src={thailand.image}
                  alt={thailand.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute bottom-6 left-6 overflow-hidden bg-white text-[#161616] px-7 py-2.5 rounded-xs font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-colors duration-300 group-hover:text-white">
                  <span className="absolute inset-0 bg-[#c29958] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 transition-colors duration-300">
                    {thailand.name}
                  </span>
                </div>
              </div>

              {/* Switzerland */}
              <div
                onClick={() => onSelectDestination(switzerland)}
                className="group relative h-[230px] sm:h-[260px] rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                id="destination-card-switzerland"
              >
                <img
                  src={switzerland.image}
                  alt={switzerland.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute bottom-6 left-6 overflow-hidden bg-white text-[#161616] px-7 py-2.5 rounded-xs font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-colors duration-300 group-hover:text-white">
                  <span className="absolute inset-0 bg-[#c29958] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 transition-colors duration-300">
                    {switzerland.name}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Tall Column: India (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div
              onClick={() => onSelectDestination(india)}
              className="group relative h-[380px] sm:h-[450px] lg:h-full min-h-[400px] rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
              id="destination-card-india"
            >
              <img
                src={india.image}
                alt={india.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              <div className="absolute bottom-6 left-6 overflow-hidden bg-white text-[#161616] px-8 py-2.5 rounded-xs font-serif font-bold text-sm sm:text-base tracking-wider uppercase shadow-md transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                <span className="absolute inset-0 bg-[#c29958] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 transition-colors duration-300">
                  {india.name}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* View All Button with Progressive Hover Fill */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('tour')}
            id="view-all-destinations-btn"
            className="group relative overflow-hidden bg-[#c29958] text-white px-9 py-3 rounded-xs font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-[#161616] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 transition-colors duration-300">
              VIEW ALL
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

