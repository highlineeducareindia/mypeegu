import React from "react";
import { motion } from "framer-motion";
import awardImg1 from "../../components/assets/awards/1.png";
import awardImg2 from "../../components/assets/awards/2.png";
import awardImg3 from "../../components/assets/awards/3.png";
import awardImg4 from "../../components/assets/awards/4.png";

const awardsData = [
  {
    id: 1,
    category: "EDUCATION EXCELLENCE",
    image: awardImg1,
    title: "Best Child Development Programme",
    organization: "Mega@K-12",
    year: "2023",
  },
  {
    id: 2,
    category: "INNOVATION & GROWTH",
    image: awardImg2,
    title: "Recognized Among Top 5 Start-ups in Asia",
    organization: "NASSCOM Asia",
    year: "2022",
  },
  {
    id: 3,
    category: "GLOBAL IMPACT",
    image: awardImg3,
    title: "Ranked Among Top 5 Start-ups in the World",
    organization: "1776 Global Summit",
    year: "2021",
  },
  {
    id: 4,
    category: "HOLISTIC DEVELOPMENT",
    image: awardImg4,
    title: "Best Holistic Development Programme",
    organization: "Education Today",
    year: "2023",
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#f7f9fc] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
            <div className="w-6 sm:w-8 h-[3px] rounded-full bg-[#FFB300]" />
            <span className="text-[#FFB300] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em]">
              Milestones of Success
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-[1000] text-[#1a365d] tracking-tight leading-[1.15]">
              Awards &amp; <span className="text-[#0066cc]">Recognition</span>
            </h2>
          </div>

          <div className="mt-6 sm:mt-8 h-px bg-slate-200" />
        </motion.div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
          {awardsData.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,102,204,0.12)" }}
              className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:border-[#0066cc]/40 transition-all duration-300 w-full max-w-[320px] sm:max-w-none"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-center w-full mb-3.5">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50/80 border border-blue-100 px-2.5 py-0.5 rounded-full">
                  {award.category}
                </span>
              </div>

              {/* Award Image Container */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-slate-100 bg-slate-50/70 flex items-center justify-center p-3.5 mb-4 group-hover:border-[#0066cc]/20 transition-colors">
                <img
                  src={award.image}
                  alt={award.organization}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Award Title */}
              <h3 className="text-[#0d1f3c] text-[14px] sm:text-[15px] font-bold mb-3 group-hover:text-[#0066cc] transition-colors duration-200 leading-snug min-h-[42px] flex items-center justify-center">
                {award.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-slate-200 mb-3" />

              {/* Organization & Year */}
              <div className="mt-auto pt-1">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Awarded By
                </p>
                <p className="text-slate-700 text-xs sm:text-[13px] font-semibold mt-0.5">
                  {award.organization}
                </p>
                <span className="inline-block mt-1 text-[11px] font-bold text-slate-400">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}