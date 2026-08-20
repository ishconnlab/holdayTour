import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, Search, X, ChevronRight, Compass } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenReserve: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenReserve,
  onOpenSearch
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Tour Packages', page: 'tour' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-40 font-sans">
      {/* Top Dark Contact & Social Bar */}
      <div className="bg-[#242424] text-white text-xs px-4 sm:px-8 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 gap-2">
          
          {/* Left: Contact Info with Vertical Divider */}
          <div className="flex items-center">
            <a 
              href="mailto:holidayplanners@gmail.com" 
              className="flex items-center gap-2 pr-4 text-gray-300 hover:text-[#c29958] transition-colors group"
            >
              <Mail className="w-4 h-4 text-[#c29958] shrink-0" />
              <span className="font-normal text-xs">holidayplanners@gmail.com</span>
            </a>
            
            <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />
            
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 pl-4 text-gray-300 hover:text-[#c29958] transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#c29958] shrink-0" />
              <span className="font-normal text-xs">+123 456 7890</span>
            </a>
          </div>

          {/* Right: Social Links with Vertical Dividers */}
          <div className="flex items-center border-t sm:border-t-0 border-white/10 pt-1 sm:pt-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1 text-gray-300 hover:text-[#c29958] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            
            <div className="h-4 w-px bg-white/20" />
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1 text-gray-300 hover:text-[#c29958] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            
            <div className="h-4 w-px bg-white/20" />
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1 text-gray-300 hover:text-[#c29958] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Main White Navigation Bar matching screenshot */}
      <div className={`w-full bg-white transition-all duration-300 shadow-sm ${
        isScrolled ? 'sticky top-0 z-40 shadow-md py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo matching template */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
            id="header-logo-btn"
          >
            {/* Styled Logo Icon */}
            <div className="w-10 h-10 rounded-full border-2 border-[#161616] flex items-center justify-center p-1 relative shadow-xs group-hover:border-[#c29958] transition-colors">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current text-[#161616] group-hover:text-[#c29958] transition-colors" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3C10.5 3 6 7.5 6 13c0 7.5 10 16 10 16s10-8.5 10-16c0-5.5-4.5-10-10-10z" className="text-[#161616]" />
                <path d="M12 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="#c29958" stroke="#c29958" />
                <path d="M14 9l5 4-5 4" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
            
            {/* Logo Text: Holiday Planners with gold H & P */}
            <div>
              <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#161616] block leading-none">
                <span className="text-[#c29958]">H</span>oliday <span className="text-[#c29958]">P</span>lanners
              </span>
            </div>
          </button>

          {/* Right Action Controls: RESERVE (Gold button) + Search (Round border) + Menu (Round gold) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* 1. Gold RESERVE Button */}
            <button
              id="header-reserve-btn"
              onClick={onOpenReserve}
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xs font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              RESERVE
            </button>

            {/* 2. White Round Search Button with Dark Border */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#161616] hover:border-[#c29958] text-[#161616] hover:text-[#c29958] flex items-center justify-center transition-all cursor-pointer bg-white active:scale-95"
              aria-label="Search tours"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            {/* 3. Gold Round Hamburger Menu Button */}
            <button
              id="header-menu-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c29958] hover:bg-[#b08246] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="w-4 sm:w-5 h-[2.5px] bg-white rounded-full block" />
                  <span className="w-4 sm:w-5 h-[2.5px] bg-white rounded-full block" />
                  <span className="w-4 sm:w-5 h-[2.5px] bg-white rounded-full block" />
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Slide-out Off-Canvas Drawer Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-sm bg-[#161616] text-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto z-10 animate-in slide-in-from-right duration-300 border-l border-[#c29958]/30">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#c29958] flex items-center justify-center font-bold text-white text-lg shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-xl font-bold tracking-tight">
                    <span className="text-[#c29958]">H</span>oliday <span className="text-[#c29958]">P</span>lanners
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c29958] flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-3">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`w-full text-left py-3 px-4 rounded-xs text-sm uppercase tracking-wider font-bold flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#c29958] text-white shadow-md'
                          : 'text-[#cccccc] hover:bg-white/5 hover:text-[#c29958]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </button>
                  );
                })}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenReserve();
                  }}
                  className="w-full bg-[#c29958] hover:bg-[#b08246] text-white py-3 rounded-xs font-bold text-xs uppercase tracking-widest shadow-md transition-colors text-center cursor-pointer"
                >
                  RESERVE NOW
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xs font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#c29958]" />
                  <span>Search Packages</span>
                </button>
              </div>
            </div>

            {/* Contact Information in Drawer */}
            <div className="pt-6 border-t border-white/10 text-xs text-[#999999] space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#c29958]" />
                <span>holidayplanners@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#c29958]" />
                <span>+123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
