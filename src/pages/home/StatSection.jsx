import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { API_ENDPOINTS } from "../../config/api";
import { icons } from "lucide-react";

// Dynamic Icon Renderer
const DynamicIcon = ({ name, className, strokeWidth }) => {
  const IconComponent = icons[name] || icons["Star"];
  return <IconComponent className={className} strokeWidth={strokeWidth} />;
};

const StatSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [headerData, setHeaderData] = useState(null);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.STATS)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setHeaderData(result.header);
          setStats(result.items);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Stats data:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="py-10 bg-[#F8FAFC] min-h-[40vh] flex items-center justify-center text-slate-500 font-bold">
        Loading Impact Numbers...
      </div>
    );

  return (
    <section className="relative py-10 bg-[#F8FAFC] overflow-hidden">
      {/* Soft Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dynamic Header */}
        {headerData && (
          <div className="text-center mb-8 md:mb-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest text-[#FEBF48] uppercase bg-blue-50/50 rounded-full border border-blue-100/50"
            >
              {headerData.badge_text}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight leading-tight px-2"
            >
              {headerData.main_heading} <br className="block md:hidden" />
              <span className="text-[#0066CC] pl-1">
                {headerData.highlight_text}
              </span>
            </motion.h2>
          </div>
        )}

        {/* Dynamic Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6"
        >
          {stats.map((stat, index) => {
            const safeGradient =
              stat.gradient_class || "from-blue-500 to-indigo-600";

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative group ${index === stats.length - 1 && stats.length % 2 !== 0 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="h-full bg-white/70 backdrop-blur-md border border-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group-hover:bg-white flex flex-col items-center text-center">
                  {/* BACKGROUND COLOR & ICON CONTAINER */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${safeGradient} text-white mb-4 md:mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {/* Yahan aapka Lucide icon render hoga */}
                    <DynamicIcon
                      name={stat.icon_name}
                      className="w-6 h-6 md:w-7 md:h-7"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">
                      {inView && (
                        <CountUp
                          end={parseInt(stat.number_value) || 0}
                          duration={2.5}
                          separator=","
                          suffix={parseInt(stat.number_value) >= 100 ? "+" : ""}
                        />
                      )}
                    </h3>
                    <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight mt-1">
                      {stat.label}
                    </p>
                  </div>

                  {/* Bottom aesthetic line */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r ${safeGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
