import React, { useState } from 'react';
import { TOURS } from '../data/mockData';
import { Tour, PageView } from '../types';
import { Clock, Users, Search, MapPin, Calendar, Mail, Phone, ChevronRight } from 'lucide-react';

interface TourListingPageProps {
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
  onNavigate: (page: PageView) => void;
  initialFilter?: string;
}

export const TourListingPage: React.FC<TourListingPageProps> = ({
  onSelectTour,
  onBookTour,
  onNavigate,
  initialFilter
}) => {
  const initialDest = (initialFilter && initialFilter.toLowerCase() !== 'all') ? initialFilter : '';
  const [searchTour, setSearchTour] = useState('');
  const [destinationFilter, setDestinationFilter] = useState(initialDest);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [durationFilter, setDurationFilter] = useState('Any');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortField, setSortField] = useState<'date' | 'price' | 'title'>('date');
  const [sortDirection, setSortDirection] = useState<'desc' | 'asc'>('desc');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const categories = ['Cultural', 'Adventure', 'Historical', 'Seaside', 'Discovery'];

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Filter tours
  const filteredTours = TOURS.filter((tour) => {
    const matchesSearch =
      !searchTour ||
      tour.title.toLowerCase().includes(searchTour.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchTour.toLowerCase());

    const cleanDestFilter = destinationFilter.trim().toLowerCase();
    const matchesDest =
      !cleanDestFilter ||
      cleanDestFilter === 'all' ||
      tour.destination.toLowerCase().includes(cleanDestFilter) ||
      tour.country.toLowerCase().includes(cleanDestFilter);

    const matchesCategories =
      selectedCategories.length === 0 || selectedCategories.includes(tour.category);

    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    const matchesPrice = tour.price >= min && tour.price <= max;

    return matchesSearch && matchesDest && matchesCategories && matchesPrice;
  });

  // Sort tours
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortField === 'price') {
      return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    }
    if (sortField === 'title') {
      return sortDirection === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return sortDirection === 'asc' ? 1 : -1;
  });

  const pageSize = 6;
  const totalPages = Math.ceil(sortedTours.length / pageSize) || 1;
  const displayedTours = sortedTours.slice((currentPageNum - 1) * pageSize, currentPageNum * pageSize);

  return (
    <div className="w-full bg-[#fcfbfa] font-sans">
      
      {/* 1. Top Header Banner matching 05_tour.jpg */}
      <div className="relative h-[320px] sm:h-[380px] w-full flex items-center justify-center overflow-hidden">
        {/* Airplane wing over clouds image */}
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85"
          alt="Airplane wing over clouds"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-wide drop-shadow-md">
            Tour List
          </h1>
        </div>
      </div>

      {/* 2. Main Tour Listing & Sidebar Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT 8 COLUMNS: Tour Listing Area */}
          <div className="lg:col-span-8">
            
            {/* Top Sort Header Bar */}
            <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 text-xs text-gray-700">
              <span className="font-medium text-gray-500">Sort by :</span>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value as any)}
                  className="px-3 py-1.5 bg-white border border-gray-300 rounded-xs text-xs text-gray-700 focus:outline-none focus:border-[#c29958] cursor-pointer"
                >
                  <option value="date">Release Date</option>
                  <option value="price">Price</option>
                  <option value="title">Tour Title</option>
                </select>

                <select
                  value={sortDirection}
                  onChange={(e) => setSortDirection(e.target.value as any)}
                  className="px-3 py-1.5 bg-white border border-gray-300 rounded-xs text-xs text-gray-700 focus:outline-none focus:border-[#c29958] cursor-pointer"
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
            </div>

            {/* 2-Columns Tour Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {displayedTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white border border-gray-200 rounded-xs shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                  id={`tour-card-${tour.id}`}
                >
                  {/* Image & Destination Badge & Optional 15% off Ribbon */}
                  <div 
                    className="relative h-60 overflow-hidden cursor-pointer"
                    onClick={() => onSelectTour(tour)}
                  >
                    <img
                      src={tour.image}
                      alt={tour.destination}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />

                    {/* 15% off Ribbon on Top Left */}
                    {tour.discount && (
                      <div 
                        className="absolute top-0 left-0 bg-[#c29958] text-white px-1.5 py-3 text-[10px] font-bold tracking-widest uppercase shadow-md z-10"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                      >
                        <span className="rotate-180">{tour.discount}</span>
                      </div>
                    )}

                    {/* Destination Gold Rectangle Badge on bottom left of image */}
                    <div className="absolute bottom-3 left-4 z-10">
                      <span className="inline-block bg-[#c29958] text-white text-[12px] font-serif font-bold uppercase tracking-wider px-3.5 py-1 shadow-sm">
                        {tour.destination}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tour Title */}
                      <h3 
                        onClick={() => onSelectTour(tour)}
                        className="font-serif text-base font-bold text-[#161616] leading-snug mb-3 hover:text-[#c29958] transition-colors cursor-pointer"
                      >
                        {tour.title}
                      </h3>

                      {/* Tour Description */}
                      <p className="text-gray-500 text-xs leading-relaxed mb-5">
                        {tour.description}
                      </p>
                    </div>

                    {/* Meta Row: Duration & Group Size with top/bottom dividers */}
                    <div className="border-t border-b border-gray-100 py-3 mb-5 flex items-center justify-between text-gray-600 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-[#c29958]/15 flex items-center justify-center text-[#c29958]">
                          <Clock className="w-3.5 h-3.5 text-[#c29958]" />
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block font-normal leading-tight">Duration</span>
                          <span className="text-xs text-gray-600 font-normal">{tour.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-[#c29958]/15 flex items-center justify-center text-[#c29958]">
                          <Users className="w-3.5 h-3.5 text-[#c29958]" />
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block font-normal leading-tight">Group Size</span>
                          <span className="text-xs text-gray-600 font-normal">{tour.groupSize}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Book Now Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-serif text-2xl font-bold text-[#161616]">
                        ${tour.price}
                      </span>

                      <button
                        onClick={() => onBookTour(tour)}
                        className="group/btn relative overflow-hidden bg-[#c29958] text-white px-5 py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider shadow-xs active:scale-95 cursor-pointer inline-flex items-center justify-center"
                      >
                        <span className="absolute inset-0 bg-[#161616] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10">BOOK NOW</span>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls matching 05_tour.jpg */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPageNum(1)}
                className={`w-8 h-8 rounded-xs text-xs font-bold transition-colors cursor-pointer flex items-center justify-center ${
                  currentPageNum === 1
                    ? 'bg-[#c29958] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                1
              </button>

              <button
                onClick={() => setCurrentPageNum(2)}
                className={`w-8 h-8 rounded-xs text-xs font-bold transition-colors cursor-pointer flex items-center justify-center ${
                  currentPageNum === 2
                    ? 'bg-[#c29958] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                2
              </button>

              <button
                onClick={() => setCurrentPageNum((prev) => Math.min(totalPages, prev + 1))}
                className="w-8 h-8 rounded-xs text-xs font-bold bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT 4 COLUMNS: Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Widget 1: FIND YOUR TOUR */}
            <div className="bg-white border border-gray-200 p-6 rounded-xs shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1 h-4 bg-[#c29958] inline-block" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#161616]">
                  Find Your Tour
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Search Tour */}
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search Tour"
                    value={searchTour}
                    onChange={(e) => setSearchTour(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Where To? */}
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Where To?"
                    value={destinationFilter}
                    onChange={(e) => setDestinationFilter(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Month Dropdown */}
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700 bg-white cursor-pointer"
                  >
                    <option value="">Month</option>
                    <option value="September">September 2026</option>
                    <option value="October">October 2026</option>
                    <option value="November">November 2026</option>
                    <option value="December">December 2026</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1.5">Duration</label>
                  <select
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700 bg-white cursor-pointer"
                  >
                    <option value="Any">Any</option>
                    <option value="1-3">1 - 3 Days</option>
                    <option value="4-7">4 - 7 Days</option>
                    <option value="8+">8+ Days</option>
                  </select>
                </div>

                {/* Min Price & Max Price */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-gray-600 font-medium mb-1.5">Min Price</label>
                    <input
                      type="number"
                      placeholder="1"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-1.5">Max Price</label>
                    <input
                      type="number"
                      placeholder="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs focus:outline-none focus:border-[#c29958] text-gray-700"
                    />
                  </div>
                </div>

                {/* Category Checkboxes */}
                <div className="pt-2 space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 text-gray-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 rounded-xs border-gray-300 text-[#c29958] focus:ring-[#c29958] accent-[#c29958]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  id="sidebar-find-now-btn"
                  className="w-full bg-[#c29958] hover:bg-[#b08246] text-white py-3 rounded-xs font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer mt-4 shadow-xs"
                >
                  FIND NOW
                </button>

              </div>
            </div>

            {/* Widget 2: WHY BOOK WITH US? */}
            <div className="bg-white border border-gray-200 p-6 rounded-xs shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1 h-4 bg-[#c29958] inline-block" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#161616]">
                  Why Book With Us?
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#c29958] font-bold">&gt;</span>
                  <span>Best Price Guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c29958] font-bold">&gt;</span>
                  <span>Customer care available 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c29958] font-bold">&gt;</span>
                  <span>Free Travel Insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c29958] font-bold">&gt;</span>
                  <span>Hand-picked Tours & Activities</span>
                </li>
              </ul>
            </div>

            {/* Widget 3: GET A QUESTION? (Golden Box) */}
            <div className="bg-[#c29958] p-7 rounded-xs text-white relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-4 bg-white inline-block" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                  Get A Question?
                </h3>
              </div>

              <p className="text-xs text-white/90 leading-relaxed mb-6">
                Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a href="mailto:holidayplanners@gmail.com" className="text-white hover:underline truncate">
                    holidayplanners@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a href="tel:+1234567890" className="text-white hover:underline">
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
