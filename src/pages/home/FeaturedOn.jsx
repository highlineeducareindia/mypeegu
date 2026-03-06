import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_ENDPOINTS } from "../../config/api"; // Config import

const FeaturedOn = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API Call
    fetch(API_ENDPOINTS.PARTNERS)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setPartners(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching partners:", err);
        setLoading(false);
      });
  }, []);

  // Agar data load ho raha hai ya koi partner nahi hai toh kuch render mat karo
  if (loading || partners.length === 0) return null; 

  // Infinite loop animation ke liye array ko duplicate kar rahe hain
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-10 md:py-10 overflow-hidden bg-white">
      <div className="max-w-full mx-auto">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#D32F2F] tracking-[0.2em] uppercase">
            Featured On
          </h2>
          <div className="h-1 w-12 bg-[#D32F2F] mx-auto mt-4 rounded-full opacity-40" />
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
          
          {/* Edge Fades for a cleaner look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Wrapper */}
          <motion.div 
            className="flex gap-10 md:gap-16 items-center whitespace-nowrap px-8"
            // x: ["0%", "-50%"] ensure karta hai ki duplicate hone par seamless loop bane
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              duration: partners.length * 4, // Partner count ke hisaab se speed adjust (dynamic duration)
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} // Unique key using id and index combined
                className=" flex-shrink-0 w-40 md:w-60 h-32 md:h-44 flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <img 
                  src={partner.image_url} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedOn;