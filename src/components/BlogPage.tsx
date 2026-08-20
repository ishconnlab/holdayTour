import React from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost, PageView } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { InstagramFeed } from './InstagramFeed';
import { PartnersSection } from './PartnersSection';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigate: (page: PageView) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost, onNavigate }) => {
  return (
    <div className="w-full bg-[#F8FAFC] font-sans animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="relative h-[300px] sm:h-[360px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2000&q=85"
          alt="Travel News & Stories"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011D4D]/90 via-[#011D4D]/60 to-[#011D4D]/40 backdrop-blur-[0.5px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight">
            Latest News & Articles
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-200 mt-3 uppercase tracking-widest font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:text-[#FF5722] transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#FF5722]">Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#FF5722] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FF5722] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5722]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#011D4D] leading-snug mb-3 group-hover:text-[#FF5722] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF5722]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      <InstagramFeed />
      <PartnersSection />
    </div>
  );
};

