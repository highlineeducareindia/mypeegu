import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import img from "../../assets/Website/Student Workshop/9.jpg";

const testimonials = [
  {
    id: 1,
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and deliver results.",
    author: "Patrick Nowacki",
    role: "UX Manager at Superhabits",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patrick",
  },
  {
    id: 2,
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    author: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rob",
  },
  {
    id: 3,
    text: "Working with the DesignMe team has been an absolute pleasure. Their attention to detail and creative solutions have transformed our brand identity completely.",
    author: "Sarah Mitchell",
    role: "Marketing Director at TechCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const current = testimonials[currentIndex] || testimonials[0];

  useEffect(() => {
    if (!isAutoPlaying || isVideoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isVideoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#F0F7FF] py-10 lg:py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Video/Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-2xl group"
            >
              {!isVideoPlaying ? (
                <div 
                  className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                  onClick={() => { setIsVideoPlaying(true); setIsAutoPlaying(false); }}
                >
                  <img
                    src={img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Success Workspace"
                  />
                  {/* Subtle vignette for button contrast */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-300" />

                  <button className="relative z-20 w-20 h-20 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <FaPlay size={22} className="ml-1" />
                    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20" />
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  allowFullScreen
                />
              )}
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7">
            <div className="flex flex-col justify-between min-h-[450px]">
              
              {/* Header */}
              <div className="mb-10 lg:mb-6">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-[11px] uppercase tracking-[0.5em] text-[#FDC04B] font-black mb-4 block"
                >
                  Testimonials
                </motion.span>
                <h2 className="text-4xl lg:text-[40px] font-bold text-black leading-[1.05] tracking-tight ">
                  Don't take our word for it. <br />
                 <span className="text-blue-800">
                  Hear from our partners.
                  </span>
                </h2>
              </div>
              {/* Testimonial Quote */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="text-4xl font-serif text-blue-100 block -mb-2">“</span>
                    <p className="   font-lg font-medium leading-relaxed mb-10 max-w-lg  text-slate-500 ">
                      {current.text}
                    </p>
                    

                    <div className="flex items-center gap-4">
                      <img
                        src={current.avatar}
                        className="w-14 h-14 rounded-full border-2 border-white shadow-lg bg-white"
                        alt={current.author}
                      />
                      <div>
                        <h4 className="text-lg font-bold text-black leading-none mb-1">
                          {current.author}
                        </h4>
                        <p className="text-blue-800 text-xs font-bold uppercase tracking-wider">
                          {current.role}
                        </p>
                        
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-black active:scale-90"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-white hover:text-black border border-transparent hover:border-black/10 transition-all duration-300 shadow-xl active:scale-90"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>

                {/* Modern Indicator Dots */}
                <div className="flex gap-3 items-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        i === currentIndex 
                        ? "w-12 bg-blue-800" 
                        : "w-2 bg-gray-200 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default TestimonialSection;