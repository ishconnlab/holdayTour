import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, ArrowUp, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page?: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'home' },
    { label: 'Destination', page: 'home' },
    { label: 'Tour', page: 'tour' },
    { label: 'Blog', page: 'home' },
    { label: 'Contact us', page: 'home' },
  ];

  return (
    <footer className="bg-[#242424] text-gray-400 relative overflow-hidden pt-16 pb-12 font-sans bg-world-map border-t border-white/5">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14">
          
          {/* Column 1: Brand, Intro, Newsletter & Payment Icons (5 cols on lg) */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 mb-6 cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center p-1 relative shadow-xs">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3C10.5 3 6 7.5 6 13c0 7.5 10 16 10 16s10-8.5 10-16c0-5.5-4.5-10-10-10z" />
                  <path d="M12 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="#c29958" stroke="#c29958" />
                  <path d="M14 9l5 4-5 4" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white block leading-none">
                <span className="text-[#c29958]">H</span>oliday <span className="text-[#c29958]">P</span>lanners
              </span>
            </div>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm">
              <strong className="text-white font-bold">Holiday Planners</strong> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubscribe} className="flex max-w-sm mb-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#383838] border border-white/60 px-4 py-2.5 text-xs text-white placeholder-gray-300 rounded-l-xs focus:outline-none focus:border-[#c29958]"
              />
              <button
                type="submit"
                id="footer-submit-btn"
                className="bg-[#c29958] hover:bg-[#b08246] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-r-xs transition-colors shrink-0 cursor-pointer"
              >
                SUBMIT
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 mb-4 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            )}

            {/* Payment Cards Icons */}
            <div className="flex items-center gap-2 pt-1">
              <div className="bg-[#003087] text-white text-[10px] font-bold px-2.5 py-1 rounded-xs italic flex items-center gap-0.5">
                <span>PayPal</span>
              </div>
              <div className="bg-[#1a1f71] text-white text-[10px] font-bold px-2.5 py-1 rounded-xs tracking-wider">
                <span>VISA</span>
              </div>
              <div className="bg-[#eb001b] text-white text-[10px] font-bold px-2.5 py-1 rounded-xs flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] border border-white inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] -ml-1.5 inline-block" />
              </div>
              <div className="bg-[#0070d2] text-white text-[9px] font-bold px-2 py-1 rounded-xs tracking-tight">
                <span>AMERICAN EXPRESS</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols on lg) */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="font-sans text-xl font-bold text-white tracking-tight mb-3">
              Navigation
            </h3>
            <div className="w-full h-px bg-white/40 mb-6" />

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (item.page) onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c29958] transition-colors flex items-center gap-2.5 cursor-pointer font-normal"
                  >
                    <span className="text-white text-[10px]">▪</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Need Help ? (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="font-sans text-xl font-bold text-white tracking-tight mb-3">
              Need Help ?
            </h3>
            <div className="w-full h-px bg-white/40 mb-6" />

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Item 1: Call Us */}
              <div className="border-l-2 border-[#c29958] pl-3">
                <span className="text-[11px] text-gray-400 block font-normal">Call Us</span>
                <a href="tel:+1234567890" className="text-white hover:text-[#c29958] transition-colors font-medium">
                  +123 456 7890
                </a>
              </div>

              {/* Item 2: Email for Us */}
              <div className="border-l-2 border-[#c29958] pl-3">
                <span className="text-[11px] text-gray-400 block font-normal">Email for Us</span>
                <a href="mailto:holidayplanners@gmail.com" className="text-white hover:text-[#c29958] transition-colors font-medium">
                  holidayplanners@gmail.com
                </a>
              </div>

              {/* Item 3: Location */}
              <div className="border-l-2 border-[#c29958] pl-3">
                <span className="text-[11px] text-gray-400 block font-normal">Location</span>
                <p className="text-white font-serif text-sm">
                  Main Street, Victoria 8007.
                </p>
              </div>

              {/* Item 4: Follow us */}
              <div className="border-l-2 border-[#c29958] pl-3 pt-1">
                <span className="text-[11px] text-gray-400 block font-normal mb-2">Follow us</span>
                <div className="flex items-center gap-3 text-[#c29958]">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-white/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            Copyright © 2021 <span className="text-[#c29958] font-semibold">Geek Code Lab</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="hover:text-[#c29958] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/40">|</span>
            <span className="hover:text-[#c29958] cursor-pointer transition-colors">Terms of Use</span>
            <span className="text-white/40">|</span>
            <span className="hover:text-[#c29958] cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Gold Button */}
      <button
        onClick={scrollToTop}
        id="back-to-top-btn"
        className="fixed bottom-6 right-6 z-40 bg-[#c29958] hover:bg-[#b08246] text-white w-10 h-10 rounded-xs flex items-center justify-center shadow-xl transition-all active:scale-95 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </footer>
  );
};

