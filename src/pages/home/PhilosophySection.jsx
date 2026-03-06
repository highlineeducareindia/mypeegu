import React from "react";
import { motion } from "framer-motion"; 
import {
  ShieldCheck,
  Users,
  Brain,
  Heart,
  XCircle,
  CheckCircle2,
} from "lucide-react";

const PhilosophySection = () => {
  const pillars = [
    {
      title: "Human-First",
      desc: "We do not replace humans. Our tech is a tool for professionals, not a substitute.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Empathy Focused",
      desc: "We do not automate empathy. Compassion remains at the heart of every interaction.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Psychology Led",
      desc: "We do not reduce psychology to algorithms. Human insight always leads.",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Deep Impact",
      desc: "Real transformation remains deeply human. We provide the precision support.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-10 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest text-[#FEBF48] uppercase bg-blue-50/50 rounded-full border border-blue-100/50">
            Core Positioning
          </h2>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            The Convergence of{" "}
            <span className="text-[#0066CC]">Psychology & Precision</span>
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-600 text-lg font-medium">
            At MyPeegu, technology is designed to support insight, organization,
            and continuity, while human professionals lead interpretation and
            relationship-building.
          </p>
        </motion.div>

        {/* Four Pillars Grid - Added responsive grid-cols-1 and sm:grid-cols-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }} // Subtle hover animation
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;