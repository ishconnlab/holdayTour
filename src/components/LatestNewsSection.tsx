import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost, PageView } from '../types';
import { User, MessageSquare, ArrowRight } from 'lucide-react';

interface LatestNewsSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigate: (page: PageView) => void;
}

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({
  onSelectPost,
  onNavigate
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStart = Math.max(0, BLOG_POSTS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  const displayedPosts = BLOG_POSTS.slice(startIndex, startIndex + visibleCount).concat(
    BLOG_POSTS.slice(0, Math.max(0, startIndex + visibleCount - BLOG_POSTS.length))
  ).slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-white relative font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header and Controls matching 01_homepage.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-4 bg-[#c29958] inline-block" />
              <span className="text-[#c29958] text-xs font-semibold uppercase tracking-wider">From The Blog?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161616] font-normal leading-tight tracking-tight">
              <span className="font-bold">Latest News</span> & Articles
            </h2>
          </div>

          {/* Stacked Prev / Next Buttons in Gold */}
          <div className="flex flex-col gap-1 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              id="news-prev-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous News"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              id="news-next-btn"
              className="bg-[#c29958] hover:bg-[#b08246] text-white px-3 py-1.5 rounded-xs text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next News"
            >
              Next
            </button>
          </div>
        </div>

        {/* 3 News Articles Grid matching 01_homepage.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-gray-200 rounded-xs shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              id={`blog-card-${post.id}`}
            >
              {/* Image & Date Badge */}
              <div 
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => onSelectPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Date Square Badge on Bottom-Left of image matching template */}
                <div className="absolute bottom-0 left-0 bg-[#c29958] text-white text-center px-3 py-1.5 shadow-md">
                  <span className="font-serif text-lg font-bold block leading-none">01</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest block mt-0.5">JAN</span>
                </div>
              </div>

              {/* Card Body matching 01_homepage.jpg */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta: Posted By & Comments */}
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <User className="w-3.5 h-3.5 text-[#c29958]" />
                      <span>ADMIN</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <MessageSquare className="w-3.5 h-3.5 text-[#c29958]" />
                      <span>COMMENTS: 0</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectPost(post)}
                    className="font-serif text-lg font-bold text-[#161616] leading-snug mb-3 hover:text-[#c29958] transition-colors cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPost(post)}
                    className="text-[#c29958] hover:text-[#b08246] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setStartIndex(dot % Math.max(1, BLOG_POSTS.length - 2))}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                startIndex === dot ? 'w-6 bg-[#c29958]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`News slide ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

