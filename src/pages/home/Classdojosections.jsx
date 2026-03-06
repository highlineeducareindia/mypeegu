import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from "../../config/api"; 

/* ========================================================================
   TAILWIND BYPASS COLOR MAPPER
   Kyunki Tailwind dynamic classes ko delete kar deta hai, hum ye function
   use karenge jo DB ki string ko padh kar direct HEX color de dega.
   Isse background hamesha dikhega aur UI bilkul nahi badlega.
======================================================================== */
const getBgStyle = (bgClass) => {
  // Agar DB se color empty aata hai, toh default Blue set hoga
  if (!bgClass || bgClass.trim() === '') return { backgroundColor: '#3b82f6' }; 

  const str = bgClass.toLowerCase();
  
  if (str.includes('blue')) return { backgroundColor: '#60a5fa' }; // Tailwind bg-blue-400
  if (str.includes('red')) return { backgroundColor: '#ef4444' };
  if (str.includes('green')) return { backgroundColor: '#22c55e' };
  if (str.includes('yellow') || str.includes('amber')) return { backgroundColor: '#f59e0b' };
  if (str.includes('purple') || str.includes('indigo')) return { backgroundColor: '#8b5cf6' };
  if (str.includes('orange')) return { backgroundColor: '#f97316' };
  if (str.includes('pink')) return { backgroundColor: '#ec4899' };
  if (str.includes('teal') || str.includes('cyan')) return { backgroundColor: '#06b6d4' };

  // Ultimate Fallback
  return { backgroundColor: '#3b82f6' }; 
};

/* ─── 1. Shared Components (AAPKA ORIGINAL UI) ─── */
const LoopConnector = ({ flip = false }) => {
  // Aapka original SVG path
  const path = flip
    ? `M 1200 30 C 900 -20, 600 80, 400 140 C 200 200, 100 130, 120 80 C 140 30, 200 20, 240 60 C 280 100, 260 170, 180 200 C 80 240, -50 280, -100 340`
    : `M 0 30 C 300 -20, 600 80, 800 140 C 1000 200, 1100 130, 1080 80 C 1060 30, 1000 20, 960 60 C 920 100, 940 170, 1020 200 C 1120 240, 1250 280, 1300 340`;

  return (
    <div className="relative h-[180px] -my-[15px] pointer-events-none overflow-hidden z-0">
      <svg width="100%" height="100%" viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid meet" className="overflow-hidden">
        <path d={path} fill="none" stroke="#d0dce8" strokeWidth="2.5" strokeDasharray="10 12" strokeLinecap="round" />
      </svg>
    </div>
  );
};

const SectionWrapper = ({ imageSrc, title, description, icon, imageLeft = true, bgColor = "bg-white" }) => {
  return (
    <section className={`relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-32  ${bgColor}`}>
      {/* Image Container */}
      <div className={`relative z-20 w-full md:w-1/2 flex justify-center mb-8 md:mb-0 ${imageLeft ? 'order-1' : 'order-1 md:order-2'}`}>
        <img 
          src={imageSrc} 
          alt="feature" 
          className="max-w-[90%] md:max-w-[550px] h-auto object-contain drop-shadow-lg" 
        />
      </div>

      {/* Text Container */}
      <div className={`w-full md:w-1/2 ${imageLeft ? 'md:pl-16 order-2' : 'md:pr-16 order-2 md:order-1'}`}>
        
        {/* YAHAN COLORS FIX HUE HAIN - Inline Style Use Kiya Hai (Aapka original rounded-full class barkarar hai) */}
        <div style={icon.style} className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg text-white">
          {icon.svg}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </section>
  );
};

/* ─── 2. Icons Data Dictionary ─── */
const Icons = {
  chat: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>,
  window: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M21 3H3C2 3 1 4 1 5v14c0 1 1 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 16H3V5h18v14zM5 15l4-5 3 4 2-2 4 5H5z" /></svg>,
  calendar: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V9h14v12zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" /></svg>,
  toolkit: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.71 4.63l-1.34-1.34a1 1 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 000-1.41zM7 14l-3 3 1 3 3-1 .75-.75L6.25 15.5 7 14zm-4.5 5.5L5 21l-2 1-1-1 1-2z" /></svg>,
  play: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
};

/* ─── 3. Main Page Component ─── */
export default function ClassDojoLanding() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.FEATURES)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setFeatures(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-20 text-center text-gray-500 font-bold">Loading Features...</div>;

  return (
    <div className="font-sans antialiased bg-white overflow-x-hidden max-w-7xl mx-auto py-16 overflow-hidden">
      
      {features.map((feature, index) => {
        // Aapka original logic
        const isImageLeft = index % 2 === 0;
        const showConnector = index < features.length - 1;
        const isFlipped = !isImageLeft;

        // Safe Icon Matcher (Capital letter ho ya small, match kar lega)
        const rawIconName = feature.icon_name ? feature.icon_name.toLowerCase().trim() : 'chat';
        const finalIconSVG = Icons[rawIconName] || Icons.chat;

        return (
          <React.Fragment key={feature.id}>
            <SectionWrapper 
              imageSrc={feature.image_url}
              title={feature.title}
              description={feature.description}
              icon={{ 
                style: getBgStyle(feature.icon_bg), // Direct color apply
                svg: finalIconSVG
              }}
              imageLeft={isImageLeft}
            />
            {showConnector && <LoopConnector flip={isFlipped} />}
          </React.Fragment>
        );
      })}

    </div>
  );
}