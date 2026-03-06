import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSeedling, FaLeaf, FaTree, FaGlobe, 
  FaCircleCheck, FaMicrochip, FaUserTie 
} from 'react-icons/fa6';

const StructuredSEL = () => {
  const selSteps = [
    {
      year: "Year I",
      title: "Self-Awareness",
      desc: "Foundations of emotional vocabulary and recognizing feelings.",
      icon: <FaSeedling />,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      year: "Year II",
      title: "Self-Regulation",
      desc: "Strengthening regulation and building relationship skills.",
      icon: <FaLeaf />,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      year: "Year III",
      title: "Responsible Thinking",
      desc: "Critical reflection and ethical decision-making practices.",
      icon: <FaTree />,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      year: "Year IV",
      title: "Purpose & Impact",
      desc: "Nurturing agency and purpose-driven social impact.",
      icon: <FaGlobe />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- Left Side: 50% Content --- */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-3">
              <span className="text-[#0066cc] font-black tracking-[0.3em] text-[10px] uppercase">
                4-Year Vertical Design
              </span>
              <h2 className="text-3xl md:text-5xl font-[900] text-[#1a2b4b] leading-tight">
                Structured <span className="text-[#0066cc]">SEL Framework</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-500 font-medium leading-relaxed max-w-lg">
              <p className="text-lg text-[#1a2b4b] font-bold italic">
                "Emotional growth is not a workshop. It is a journey."
              </p>
              <p className="text-sm">
                Our framework follows a four-year progression designed to build awareness, 
                strengthen regulation, and nurture purpose-driven individuals.
              </p>
            </div>

            {/* AI + Human Note */}
            <div className="flex gap-4 pt-4">
              <div className="flex-1 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                <FaMicrochip className="text-blue-500 mb-2" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1 font-black">AI Support</p>
                <p className="text-[11px] font-bold text-[#1a2b4b]">Tracks developmental patterns across years.</p>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                <FaUserTie className="text-emerald-500 mb-2" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1 font-black">Human Guide</p>
                <p className="text-[11px] font-bold text-[#1a2b4b]">Educators guide the learning experience.</p>
              </div>
            </div>
          </div>

          {/* --- Right Side: 50% Vertical Timeline --- */}
          <div className="w-full lg:w-1/2 relative">
            {/* Connecting Line */}
            <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-100 via-blue-200 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {selSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center gap-6 group"
                >
                  {/* Year Dot/Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center text-2xl shrink-0 z-10 shadow-sm border border-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-black text-[#1a2b4b] text-sm uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-black text-gray-300 uppercase">{step.year}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StructuredSEL;