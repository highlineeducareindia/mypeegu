import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, FaArrowTrendUp, FaUsersGear, 
  FaShieldHeart, FaLightbulb, FaMicrochip, FaUserTie 
} from 'react-icons/fa6';

const HolisticProfiling = () => {
  const profilingFeatures = [
    { title: "Emotional Awareness", icon: <FaBrain />, desc: "Recognising feelings in self & others.", color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Behavioural Patterns", icon: <FaArrowTrendUp />, desc: "Identifying recurring triggers.", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Social Interactions", icon: <FaUsersGear />, desc: "Observing peer dynamics.", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Coping Strategies", icon: <FaShieldHeart />, desc: "Navigating stress & pressure.", color: "text-rose-600", bg: "bg-rose-50" },
    { title: "Decision-Making", icon: <FaLightbulb />, desc: "Problem-solving styles.", color: "text-amber-600", bg: "bg-amber-50" }
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* --- LEFT SIDE (50%) --- */}
          <div className="w-full lg:w-1/2 space-y-6 pr-0 lg:pr-10">
            <div className="space-y-2">
              <span className="text-[#0066cc] font-black tracking-widest text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full">
                Beyond Academics
              </span>
              <h2 className="text-3xl md:text-4xl font-[900] text-[#1a2b4b] leading-tight">
                Holistic <span className="text-[#0066cc]">Profiling</span>
              </h2>
            </div>
            
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-md">
              Understanding a student requires more than marks. We identify key development aspects through structured observation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { icon: <FaMicrochip />, text: "AI Pattern Insights", color: "text-blue-600" },
                { icon: <FaUserTie />, text: "Human Interpretation", color: "text-emerald-600" }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className={`w-8 h-8 rounded-lg bg-gray-50 ${item.color} flex items-center justify-center text-sm shadow-inner`}>
                    {item.icon}
                  </div>
                  <p className="text-[11px] font-bold text-[#1a2b4b] leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE (50%) - 3 Column Grid --- */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {profilingFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-4 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm transition-all flex flex-col items-center text-center justify-center min-h-[160px]
                  ${idx === 0 ? 'col-span-2 sm:col-span-1' : 'col-span-1'}`}
              >
                <div className={`w-10 h-10 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center text-lg mb-3 shrink-0`}>
                  {feature.icon}
                </div>
                
                <h4 className="font-black text-[#1a2b4b] text-[10px] uppercase tracking-wide mb-2 leading-tight px-1">
                  {feature.title}
                </h4>
                
                <p className="text-[9px] text-gray-400 font-bold leading-tight line-clamp-2">
                  {feature.desc}
                </p>

                {/* Subtle visual footer */}
                <div className="mt-3 w-8 h-[2px] bg-gray-100 rounded-full group-hover:bg-blue-200 transition-colors" />
              </motion.div>
            ))}

            {/* Placeholder to maintain grid balance if needed */}
            <div className="hidden sm:flex p-4 rounded-[1.5rem] bg-blue-600/5 border border-dashed border-blue-100 items-center justify-center">
               <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest text-center">More Insights</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HolisticProfiling;