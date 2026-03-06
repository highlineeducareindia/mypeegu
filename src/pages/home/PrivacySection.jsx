import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaSearch,
  FaChalkboardTeacher,
  FaComments,
  FaStar // Fallback icon
} from "react-icons/fa";
import { API_ENDPOINTS } from "../../config/api";

// Icon Mapping Dictionary (String to Component)
const IconMap = {
  FaClipboardCheck: FaClipboardCheck,
  FaSearch: FaSearch,
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaComments: FaComments,
};

const PrivacySection = () => {
  const [bookingOptions, setBookingOptions] = useState([]);
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.BOOKING_SECTION)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setBookingOptions(result.options);
          setCtaData(result.cta);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching booking data:", err);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="w-full">
      {/* --- TOP SECTION: BOOKING OPTIONS --- */}
      <section className="">
        <div className="max-w-7xl mx-auto relative z-10 p-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-black/90 text-2xl sm:text-3xl md:text-4xl font-['Dancing_Script',cursive] mb-3"
            >
              Book a Demo
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Booking Options
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {bookingOptions.map((option) => {
              // Dynamic Icon Loading (Fallback to FaStar if not found)
              const Icon = IconMap[option.icon_name] || FaStar;

              return (
                <motion.div key={option.id} variants={cardVariants} whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }} className="group cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-5 sm:p-6 h-full min-h-[140px] flex items-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    
                    {/* Dynamic Gradient Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color_class} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                    />

                    {/* Image / Icon Container */}
                    <div className="relative flex-shrink-0">
                      <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }} className="relative w-16 h-16 sm:w-20 sm:h-20">
                        <img
                          src={option.image_url}
                          alt={option.title}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-md group-hover:shadow-xl transition-shadow duration-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center border-4 border-white shadow-md">
                          <Icon className={`text-2xl sm:text-3xl bg-gradient-to-br ${option.color_class} bg-clip-text text-transparent`} />
                        </div>
                        <div className={`absolute inset-0 rounded-full border-2 border-dashed border-slate-200 group-hover:border-[#E31E24] group-hover:rotate-180 transition-all duration-700`}></div>
                      </motion.div>

                      {/* Icon Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br ${option.color_class} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white text-xs" />
                      </motion.div>
                    </div>

                    {/* Dynamic Content */}
                    <div className="relative flex-1 min-w-0">
                      <h3 className="text-[#E31E24] text-lg sm:text-xl font-bold mb-1 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                        {option.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium group-hover:text-slate-700 transition-colors">
                        {option.description}
                      </p>
                    </div>

                    <motion.div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                      <svg className="w-5 h-5 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM CTA SECTION --- */}
      {ctaData && (
        <section className="relative h-[550px] overflow-hidden">
          <img src={ctaData.image_url} className="absolute inset-0 w-full h-full object-cover" alt="CTA Background" />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-0 left-0 w-full z-20 overflow-hidden leading-none">
            <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-[120px] md:h-[180px] scale-x-[-1]">
              <path fill="white" d="M0,60 C150,20 350,0 600,25 C900,55 1150,40 1440,25 L1440,0 L0,0 Z" />
            </svg>
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-black mb-8">{ctaData.heading}</h2>
            <Button className="px-12 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
              {ctaData.button_text}
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default PrivacySection;