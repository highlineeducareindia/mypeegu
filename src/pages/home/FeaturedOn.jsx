

import React from 'react';
import { motion } from 'framer-motion';

import partner1 from "../../assets/partners/1.jpg";
import partner2 from "../../assets/partners/2.jpg";
import partner3 from "../../assets/partners/3.jpg";
import partner4 from "../../assets/partners/4.jpg";
import partner5 from "../../assets/partners/5.jpg";
import partner6 from "../../assets/partners/6.jpg";
import partner7 from "../../assets/partners/7.jpg";

const partnersData = [
  { id: 1, name: "Partner 1", image_url: partner1 },
  { id: 2, name: "Partner 2", image_url: partner2 },
  { id: 3, name: "Partner 3", image_url: partner3 },
  { id: 4, name: "Partner 4", image_url: partner4 },
  { id: 5, name: "Partner 5", image_url: partner5 },
  { id: 6, name: "Partner 6", image_url: partner6 },
  { id: 7, name: "Partner 7", image_url: partner7 },
];

const FeaturedOn = () => {
  const duplicatedPartners = [...partnersData, ...partnersData];

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
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              duration: partnersData.length * 4,
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex-shrink-0 w-40 md:w-60 h-32 md:h-44 flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
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