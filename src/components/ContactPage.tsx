import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { PageView } from '../types';
import { InstagramFeed } from './InstagramFeed';
import { PartnersSection } from './PartnersSection';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F8FAFC] font-sans animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="relative h-[300px] sm:h-[360px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=85"
          alt="Contact Holiday Planners"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/60 to-[#011D4D]/40 backdrop-blur-[0.5px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-200 mt-3 uppercase tracking-widest font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:text-[#FF5722] transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#FF5722]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white p-8 border border-slate-200/80 text-center rounded-xl hover:border-[#FF5722] shadow-xs hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-1">Call Us Anytime</h3>
            <p className="text-xs text-slate-500 mb-3">Speak directly with tour planners</p>
            <a href="tel:+1234567890" className="text-sm font-bold text-[#FF5722] hover:underline">+123 456 7890</a>
          </div>

          <div className="bg-white p-8 border border-slate-200/80 text-center rounded-xl hover:border-[#FF5722] shadow-xs hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-1">Email Support</h3>
            <p className="text-xs text-slate-500 mb-3">24/7 Response for travel quotes</p>
            <a href="mailto:holidayplanners@gmail.com" className="text-sm font-bold text-[#FF5722] hover:underline">holidayplanners@gmail.com</a>
          </div>

          <div className="bg-white p-8 border border-slate-200/80 text-center rounded-xl hover:border-[#FF5722] shadow-xs hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#011D4D] mb-1">Our Location</h3>
            <p className="text-xs text-slate-500 mb-3">Visit our agency branch</p>
            <span className="text-sm font-bold text-[#011D4D]">Main Street, Victoria 8007, Australia</span>
          </div>

        </div>

        {/* Contact Form & Office Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-white p-8 border border-slate-200/80 shadow-xs rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-[#FF5722] rounded-full inline-block" />
              <span className="text-[#FF5722] text-xs uppercase tracking-widest font-bold">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-[#011D4D] font-extrabold mb-6 tracking-tight">
              Send Us A Message
            </h2>

            {submitted ? (
              <div className="bg-orange-50/50 border border-orange-200 p-8 text-center rounded-xl">
                <CheckCircle2 className="w-12 h-12 text-[#FF5722] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#011D4D] mb-2">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our travel planning specialist will reach out to you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-6 py-2.5 text-xs uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#011D4D] mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#011D4D] mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#011D4D] mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#011D4D] mb-1.5">Destination Interested In</label>
                    <input
                      type="text"
                      placeholder="Greece, Switzerland, Thailand..."
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011D4D] mb-1.5">Your Travel Requirements & Notes *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your dates, number of travelers, budget, preferred activities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-[#011D4D] focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-send-btn"
                  className="bg-[#FF5722] hover:bg-[#f4511e] text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Hours & Benefits */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#011D4D] text-white p-8 rounded-xl shadow-md border border-slate-800">
              <div className="flex items-center gap-2 text-[#FF5722] mb-4">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Opening Hours</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-white">09:00 AM - 07:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white">10:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Sunday:</span>
                  <span className="text-[#FF5722] font-semibold">Emergency Support Only</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-xs">
              <h3 className="text-lg font-bold text-[#011D4D] mb-3">Why Book Direct?</h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Direct agent contact with no middleman fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>100% Customized itineraries to your preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Guaranteed best rates on hotels & tours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>24/7 Dedicated concierge during your entire journey</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      <InstagramFeed />
      <PartnersSection />
    </div>
  );
};

