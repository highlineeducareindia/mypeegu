import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../config/api"; // Config import

const StarRating = () => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3, 4].map((s) => (
      <svg key={s} className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          fill="#FEBF48"
        />
      </svg>
    ))}
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="half">
          <stop offset="60%" stopColor="#FBBF24" />
          <stop offset="60%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="url(#half)"
      />
    </svg>
  </div>
);

// ImgCard waise hi rahega, bas conditionally render hoga
const ImgCard = ({ src, alt, rotate = 0, className = "", delay = "0s", isVisible }) => {
  if (!src) return <div className={`w-full ${className}`}></div>; // Agar image nahi hai toh blank space chhod do

  return (
    <div
      className={`photo-item ${isVisible ? "animate-in" : ""} ${className}`}
      style={{ 
        animationDelay: delay,
        "--start-rotation": `${rotate}deg`,
        "--swing-duration": `${3 + Math.random() * 2}s`
      }}
    >
      <div className="swing-wrapper w-full h-full">
        <div className="scale-wrapper w-full h-full">
          <div className="relative w-full h-full overflow-hidden cursor-pointer rounded-[24px] md:rounded-[36px] shadow-lg">
            <img src={src} alt={alt || "Gallery Image"} className="w-full h-full object-cover block bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // API Call
    fetch(API_ENDPOINTS.GALLERY)
      .then(res => res.json())
      .then(result => {
        if(result.success) setImages(result.data);
      })
      .catch(err => console.error("Error fetching gallery:", err));
  }, []);

  // Helper function: array index ke basis par safe data nikalo
  const getImgSrc = (index) => images[index]?.image_url || null;
  const getImgAlt = (index) => images[index]?.alt_text || "Workshop Image";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-10 px-4 md:px-6 overflow-hidden bg-[linear-gradient(155deg,#eef2ff_0%,#ffffff_48%,#f5f0ff_100%)] font-sans">
      
      {/* (Aapka CSS ekdum waise ka waisa yahan rahega) */}
      <style>{`
        @keyframes swingAnimation {
          0%, 100% { transform: rotate(var(--start-rotation)); }
          50%       { transform: rotate(calc(var(--start-rotation) * -0.3)); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(80px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .photo-item { opacity: 0; transform: translateY(80px); }
        .photo-item.animate-in { animation: slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .swing-wrapper { transform-origin: top center; will-change: transform; }
        .photo-item.animate-in .swing-wrapper { animation: swingAnimation var(--swing-duration, 3s) ease-in-out infinite; }
        .scale-wrapper {
          transform-origin: center center;
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, filter;
        }
        .photo-item:hover .scale-wrapper {
          transform: scale(1.05) translateY(-8px);
          filter: brightness(1.06) drop-shadow(0 20px 28px rgba(90, 50, 200, 0.2));
          z-index: 50;
        }
        .photo-item:active .scale-wrapper {
          transform: scale(0.95) translateY(3px);
          filter: brightness(0.96) drop-shadow(0 4px 8px rgba(0,0,0,0.12));
          transition: transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.1s ease;
        }
        .text-reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .text-reveal.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Header */}
      <div className={`text-center mb-4 md:mb-8 relative z-20 text-reveal ${isVisible ? "animate-in" : ""}`}>
        <StarRating />
       <p className="text-gray-500 font-bold text-xs md:text-sm mt-2 uppercase tracking-wide">
4.8/5 Rated by Schools
</p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Mobile Title */}
        <div className={`flex flex-col items-center mb-10 md:hidden text-reveal ${isVisible ? "animate-in" : ""}`} style={{ transitionDelay: '0.2s' }}>
          <h2 className="text-2xl font-black text-gray-900 leading-tight text-center">
            Keeping teachers, <span className="text-[#0066cc]">families,</span> and <span className="text-[#FEBF48]">kids</span> connected
          </h2>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center">

          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6 lg:mt-12">
            <ImgCard isVisible={isVisible} delay="0.1s" rotate={-6} className="h-40 md:h-48" src={getImgSrc(0)} alt={getImgAlt(0)} />
            <ImgCard isVisible={isVisible} delay="0.3s" rotate={4}  className="h-40 md:h-48" src={getImgSrc(1)} alt={getImgAlt(1)} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ImgCard isVisible={isVisible} delay="0.2s" rotate={3}  className="h-44 md:h-52" src={getImgSrc(2)} alt={getImgAlt(2)} />
            <ImgCard isVisible={isVisible} delay="0.4s" rotate={-4} className="h-40 md:h-48" src={getImgSrc(3)} alt={getImgAlt(3)} />
          </div>

          {/* Column 3 - Center (Image + Text) */}
          <div className={`hidden md:flex flex-col items-center gap-6 text-reveal ${isVisible ? "animate-in" : ""}`} style={{ transitionDelay: '0.5s' }}>
            <ImgCard isVisible={isVisible} delay="0.5s" rotate={-2} className="w-full h-56" src={getImgSrc(4)} alt={getImgAlt(4)} />
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight text-center">
              Keeping <span className="text-red-500">teachers,</span> <span className="text-[#0066cc]">families,</span> and <span className="text-[#FEBF48]">kids</span> connected
            </h2>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ImgCard isVisible={isVisible} delay="0.25s" rotate={5}  className="h-44 md:h-52" src={getImgSrc(5)} alt={getImgAlt(5)} />
            <ImgCard isVisible={isVisible} delay="0.45s" rotate={-3} className="h-40 md:h-48" src={getImgSrc(6)} alt={getImgAlt(6)} />
          </div>

          {/* Column 5 */}
          <div className="flex md:hidden lg:flex flex-col gap-4 md:gap-6 lg:mt-12">
            <ImgCard isVisible={isVisible} delay="0.15s" rotate={-5} className="h-40 md:h-48" src={getImgSrc(7)} alt={getImgAlt(7)} />
            <ImgCard isVisible={isVisible} delay="0.35s" rotate={4}  className="h-40 md:h-48" src={getImgSrc(8)} alt={getImgAlt(8)} />
          </div>

        </div>
      </div>
    </section>
  );
}