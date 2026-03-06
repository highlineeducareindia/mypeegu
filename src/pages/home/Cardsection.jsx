import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { API_ENDPOINTS } from "../../config/api";

const Cardsection = () => {
  const [ctaData, setCtaData] = useState({
    title: "",
    button_text: "",
    button_link: "",
    image_url: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.CTA_SECTION)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setCtaData(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching CTA Data:", err);
        setLoading(false);
      });
  }, []);

  // Agar load ho raha hai toh section hide rakhne ki zarurat nahi, 
  // hum default skeleton ya loading text dikha sakte hain.
  if (loading) return <div className="min-h-[430px] flex items-center justify-center">Loading...</div>;

  return (
    <div>
      {/* card section */}
      <div className="flex items-center justify-center min-h-[430px] bg-white p-6">
        <div className="relative w-full max-w-6xl bg-[#F0F7FF] rounded-[50px] py-10 px-4 flex flex-col items-center justify-center overflow-hidden border border-blue-50/50">
          
          {/* Animated Dots */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [45, 50, 45] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[32%] w-6 h-6 bg-[#FFD700] rounded-lg shadow-sm"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [10, 20, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-[32%] w-6 h-6 bg-[#FF4D4D] rounded-md shadow-sm"
          />
          
          <div className="relative z-10 mb-6 group">
            {/* Dynamic Image */}
            {ctaData.image_url && (
              <motion.img
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={ctaData.image_url}
                alt="My Peegu CTA"
                className="h-32 md:h-40 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
          
          <div className="relative z-10 text-center max-w-2xl">
            {/* Dynamic Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#222222] tracking-tight mb-8">
              {ctaData.title || "A world of adventure awaits."}
            </h1>
            
            {/* Dynamic Button Text and Link */}
            {ctaData.button_link && ctaData.button_text && (
              <Link to={ctaData.button_link}>
                <Button>{ctaData.button_text}</Button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cardsection;