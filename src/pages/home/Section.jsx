import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleExclamation,
  FaArrowsSpin,
  FaBridge,
  FaArrowTrendUp,
  FaBuildingShield,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const DifferenceSection = () => {
  const traditionalPoints = [
    "Isolated workshops conducted periodically",
    "Counselling that begins only after issues escalate",
    "Limited tracking of behavioural or emotional patterns",
    "Lack of structured reinforcement within classrooms",
    "Minimal alignment between school and home",
  ];

  const mypeeguPoints = [
    {
      text: "Longitudinal SEL design embedded year-round",
      icon: <FaArrowsSpin />,
    },
    {
      text: "Tiered intervention for early identification",
      icon: <FaArrowTrendUp />,
    },
    {
      text: "Trauma-informed systems for emotional safety",
      icon: <FaBuildingShield />,
    },
    {
      text: "Institutional governance & leadership review",
      icon: <FaCheckCircle />,
    },
    {
      text: "AI-supported pattern recognition that strengthens insights without replacing professional judgment In the MyPeegu ecosystem, psychology leads and technology strengthens delivery. ",
      icon: <FaBridge />,
    },
  ];

  return (
    <section className="py-10 md:py-10 px-4 bg-[#fcfdfe] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#1a2b4b] mb-2 md:mb-2 leading-tight"
          >
            What Makes Us <span className="text-[#0066cc]">Different</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 mx-auto  text-lg font-medium max-w-2xl "
          >
            Many schools attempt to address well-being through isolated
            initiatives — a workshop here, a counselling session there, or a
            short-term campaign. While these efforts are valuable, they often
            remain disconnected from the larger ecosystem of the school.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Traditional Model Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-4 -right-4 p-6 opacity-[0.05] text-gray-900 pointer-events-none">
              <FaCircleExclamation size={120} />
            </div>

            <h3 className="text-lg md:text-xl font-black text-gray-400 uppercase tracking-wider mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gray-200"></span>
              Traditional Model
            </h3>

            <ul className="space-y-5 md:space-y-6 flex-grow">
              {traditionalPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 md:gap-4 text-gray-500 group"
                >
                  <div className="mt-1.5 text-red-300 flex-shrink-0">
                    <FaCircleExclamation size={16} />
                  </div>
                  <span className="font-medium text-sm md:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MyPeegu Model Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0066cc] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-4 -right-4 p-6 opacity-10 text-white pointer-events-none">
              <FaCheckCircle size={120} />
            </div>

            <h3 className="text-lg md:text-xl font-black uppercase tracking-wider mb-4 md:mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-400"></span>
              The MyPeegu Model
            </h3>

            <ul className="space-y-4 md:space-y-4 flex-grow">
              {mypeeguPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 group">
                  <div className="mt-1 text-yellow-400 text-xl flex-shrink-0">
                    {point.icon}
                  </div>
                  <span className="font-medium text-sm md:text-base leading-snug">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
