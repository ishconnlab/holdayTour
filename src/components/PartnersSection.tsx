import React from 'react';
import { PARTNERS } from '../data/mockData';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#faf8f5] border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1 h-4 bg-[#c29958] inline-block" />
            <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">Trusted Partners</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#161616] font-bold tracking-tight">
            Our Global <span className="font-normal text-gray-500 italic font-serif">Members & Affiliates</span>
          </h2>
        </div>

        {/* 4 Partner Logo Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xs py-6 px-4 flex items-center justify-center shadow-xs hover:border-[#c29958] hover:shadow-lg transition-all group cursor-default min-h-[96px]"
            >
              <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-gray-800 group-hover:text-[#c29958] transition-colors">
                {partner.name === 'Booking.com' && (
                  <span className="font-sans font-bold">Booking<span className="text-[#c29958]">.com</span></span>
                )}
                {partner.name === 'amadeus' && (
                  <span className="font-sans tracking-wide lowercase text-gray-700 group-hover:text-[#c29958] font-medium">a<span className="uppercase font-bold text-[#c29958]">Ma</span>DEUS</span>
                )}
                {partner.name === 'travelgenio' && (
                  <span className="font-sans font-medium text-gray-700 group-hover:text-[#c29958]">travel<span className="text-[#c29958] font-bold">genio</span></span>
                )}
                {partner.name === 'Travelport' && (
                  <span className="font-sans font-bold tracking-tighter text-gray-900 group-hover:text-[#c29958]">Travelport <span className="text-[#c29958]">▶</span></span>
                )}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

