import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaGraduationCap, FaPersonChalkboard, FaUsers } from 'react-icons/fa6';
import { API_ENDPOINTS } from "../../config/api";

const HeroSection = () => {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState({
    tagline: "", heading1: "", heading2: "", subheading: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.HERO)
      .then(res => res.json())
      .then(result => {
        if(result.success) setHeroData(result.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Hero data:", err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: 1, name: 'Teacher', route: '/explorer/teachers', icon: <FaPersonChalkboard />, lightColor: 'bg-red-50', textColor: 'text-[#FF4D4D]' },
    { id: 2, name: 'Parent', route: '/explorer/parents', icon: <FaUsers />, lightColor: 'bg-blue-50', textColor: 'text-[#0066CC]' },
    { id: 3, name: 'Student', route: '/explorer/students', icon: <FaGraduationCap />, lightColor: 'bg-yellow-50', textColor: 'text-[#FFB800]' },
  ];

  if (loading) return <div className="min-h-[85vh] flex items-center justify-center bg-[#fcfdfe]"></div>;

  return (
    <div className="bg-[#fcfdfe] overflow-x-hidden">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center px-4 py-10 md:py-16">
        
        {/* Background Decorative Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-5 text-red-100 opacity-40">
            {/* Star size also scales with screen */}
            <FaStar size="clamp(60px, 10vw, 120px)" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-5 right-5 text-blue-100 opacity-40">
            <FaStar size="clamp(80px, 15vw, 160px)" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 px-2">
          
          {/* Tagline Scaling */}
          {/* <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#0066cc] font-black tracking-[0.15em] text-[clamp(0.6rem,1.5vw,0.8rem)] uppercase mb-4 block"
          >
            {heroData.tagline}
          </motion.span> */}

          {/* Heading Scaling: Clamp ensures it's never too small on mobile or too huge on 4K */}
          <motion.h1 
            className="text-[clamp(2.2rem,6vw,4rem)] font-[900] text-[#1a2b4b] mb-6 leading-[1.1] tracking-tight"
          >
            {heroData.heading1} <br />
            <span className="text-[#0066cc] inline-block mt-2">{heroData.heading2}</span>
          </motion.h1>

          {/* Paragraph Scaling: Optimized line-length (max-w) and fluid font */}
          <motion.p 
            className="text-[clamp(1rem,2vw,1.15rem)] text-slate-500 mx-auto max-w-[90%] md:max-w-3xl mx-auto mb-10 font-medium leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: heroData.subheading }} 
          />

          {/* Categories Scaling */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 pb-6">
            {categories.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(item.route)}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer rounded-[2rem] md:rounded-[3.5rem] border-2 md:border-4 flex flex-col items-center justify-center p-3 transition-all duration-300 bg-white border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#0066cc] w-[clamp(100px,25vw,180px)] h-[clamp(110px,25vw,180px)]"
              >
                <div className={`rounded-2xl md:rounded-[2rem] flex items-center justify-center transition-all duration-500 w-[clamp(40px,10vw,64px)] h-[clamp(40px,10vw,64px)] text-[clamp(1.2rem,3vw,2rem)] ${item.textColor} ${item.lightColor}`}>
                  {item.icon}
                </div>
                <h3 className="font-black uppercase tracking-tight mt-3 text-[clamp(0.6rem,1.5vw,0.85rem)] text-gray-500">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;