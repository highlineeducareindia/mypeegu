import React from "react";
import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaUsers,
  FaCheckDouble,
  FaBrain,
  FaLightbulb,
  FaShapes,
  FaBullseye,
  FaBookOpen,
} from "react-icons/fa6";

const ParentPartnership = () => {
  const sessionHighlights = [
    {
      title: "Psychological Insight",
      icon: <FaBrain />,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Practical Strategies",
      icon: <FaLightbulb />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Real-life Scenarios",
      icon: <FaShapes />,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Reflection Tools",
      icon: <FaBullseye />,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      title: "Take-home Frameworks",
      icon: <FaBookOpen />,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="py-10 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* --- LEFT CONTENT (50%) --- */}
          <div className="w-full lg:w-1/2 sticky top-24">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[#0066cc] font-black tracking-[0.2em] text-[10px] uppercase bg-blue-50/50 px-4 py-1.5 rounded-full border border-blue-100/50 inline-block">
                  Unified Ecosystem
                </span>
                <h2 className="text-4xl md:text-5xl font-[900] text-[#1a2b4b] leading-tight ">
                  Parent Partnership
                </h2>
              </div>

              <div className="relative py-3 space-y-3">
                <p className="text-slate-600 text-lg  font-medium leading-relaxed">
                  "Children thrive when schools and families work together. We
                  bridge the gap between school and home."
                </p>

                <p className="text-slate-600 text-lg   font-medium  leading-relaxed">
                  These sessions are not motivational talks but
                  <span className="text-[#1a2b4b]">
                    {" "}
                    structured psychoeducational engagements{" "}
                  </span>
                  designed to help parents understand the emotional needs of
                  children.
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT BENTO GRID (50%) --- */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              {/* Cards Mapping */}
              {sessionHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center text-center justify-center transition-all
                    ${idx === 0 ? "col-span-2 py-10" : "col-span-1 min-h-[180px]"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-xl mb-4 shadow-inner group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-black text-[#1a2b4b] text-[11px] uppercase tracking-wider mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <div className="w-6 h-[2px] bg-gray-100 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentPartnership;
