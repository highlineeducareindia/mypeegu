import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_ENDPOINTS } from "../../config/api";
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaBuilding,
  FaStar // Fallback icon
} from "react-icons/fa"; // Aap chaho toh fa6 bhi use kar sakte ho

// Dictionary to convert DB string to actual React Icon
const IconMap = {
  FaGraduationCap: FaGraduationCap,
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaUsers: FaUsers,
  FaBuilding: FaBuilding,
};

const PillarsSection = () => {
  const [headerData, setHeaderData] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.PILLARS)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setHeaderData(result.header);
          setSolutions(result.cards);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Pillars data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-24 bg-white min-h-[50vh] flex items-center justify-center">Loading Architecture...</div>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Header */}
        {headerData && (
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {headerData.title}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              {headerData.subtitle}
            </p>
          </div>
        )}

        {/* Dynamic 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {solutions.map((item, idx) => {
            const IconComponent = IconMap[item.icon_name] || FaStar;

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Dynamic Icon */}
                <div className={`w-16 h-16 ${item.bg_color} ${item.accent_color} rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Dynamic Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight min-h-[56px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Dynamic Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Subtle Indicator */}
                <div className="mt-auto w-10 h-0.5 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-blue-600 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Philosophy Footnote */}
        {headerData && headerData.footer_text && (
          <div className="mt-20 pt-10 border-t border-slate-50 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400">
              {headerData.footer_text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PillarsSection;