import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck } from 'lucide-react'; // UserCheck icon import kiya
import { API_ENDPOINTS } from "../../config/api";

const CommunitySection = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.COMMUNITY)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          // Mapping backend fields to frontend component format
          const formattedCards = result.data.map(item => ({
            id: item.id,
            type: item.type,
            title: item.title,
            // avatar: item.avatar_url, // Ab avatar ki zarurat nahi hai testimonials mein
            content: item.content,
            url: item.image_url,
            color: item.bg_color
          }));
          setCards(formattedCards);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading community data:", err);
        setLoading(false);
      });
  }, []);

  const InfiniteRow = ({ items, direction }) => {
    const isLeft = direction === 'left';
    
    // Agar data load nahi hua hai ya khali hai, toh blank space dikhao
    if (items.length === 0) return null;

    return (
      <div className="relative flex overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div 
          className="flex flex-nowrap gap-4 md:gap-6 shrink-0 px-2"
          animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ 
            duration: items.length * 4, // Dynamic speed based on items
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className={`
                w-[280px] h-[220px]       /* Mobile size */
                md:w-[320px] md:h-[260px] /* Desktop size */
                rounded-[30px] md:rounded-[40px] 
                p-5 md:p-7
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                border border-white shrink-0 
                flex flex-col justify-center 
                transition-transform hover:scale-105 duration-300 
                ${item.color}
              `}
            >
              {item.type === 'text' ? (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      {/* --- UPDATE: Image ki jagah UserCheck Icon --- */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066CC]">
                        <UserCheck size={20} className="md:size-[24px]" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                           <h3 className="text-sm md:text-base font-bold text-slate-800 tracking-tight">{item.title}</h3>
                        </div>
                        <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Educator</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] font-medium italic line-clamp-4 tracking-tight">
                      "{item.content}"
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Heart size={16} className="text-rose-400 fill-rose-400" />
                  </div>
                </div>
              ) : (
                <img 
                  src={item.url} 
                  alt="community" 
                  className="w-full h-full object-cover rounded-[24px] md:rounded-[20px] pointer-events-none" 
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  if (loading) return <div className="min-h-[60vh] bg-[#F7FAFF] flex items-center justify-center">Loading Community...</div>;

  return (
    <section className="relative bg-[#F7FAFF] py-10 md:py-10 overflow-hidden w-full flex flex-col items-center">
      
      {/* Responsive Background Decor */}
      <div className="absolute top-10 left-[5%] text-blue-100 rotate-12 pointer-events-none select-none hidden sm:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" />
        </svg>
      </div>

      {/* Heading - Fluid Typography */}
      <div className="relative z-10 text-center mb-8 md:mb-8 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tight leading-[1.1]"
        >
          Our community is our <br className="hidden sm:block" /> 
          <span className="text-[#0066CC]"> superpower</span>
        </motion.h2>
      </div>

      {/* Infinite Scrolling Rows */}
      <div className="w-full space-y-2 md:space-y-4">
        {cards.length > 0 && (
          <>
            <InfiniteRow items={cards} direction="right" />
            <InfiniteRow items={cards} direction="left" />
          </>
        )}
      </div>
    </section>
  );
};

export default CommunitySection;