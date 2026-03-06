import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../../config/api"; // Path check kar lena apne folder ke hisaab se

export default function AwardsSection() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API se data fetch karna
    fetch(API_ENDPOINTS.AWARDS)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setAwards(result.data);
        } else {
          setError("Data laane mein error aayi!");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error: ", err);
        setError("Network error. Server check karein.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#f7f9fc] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] rounded-full bg-[#E31E24]" />
            <span className="text-[#E31E24] text-[11px] font-bold uppercase tracking-[0.22em] ">
              Milestones of Success
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tight leading-[1.1]">
              Awards &amp; <span className="text-[#0066cc]">Recognition</span>
            </h2>
            <p className="text-slate-500 max-w-sm sm:text-right">
              Honored by leading global organizations for our unwavering
              commitment to educational excellence.
            </p>
          </div>
          <div className="mt-8 h-px bg-slate-200" />
        </motion.div>

        {/* ── Loading & Error Handling ── */}
        {loading && <p className="text-center text-slate-500 py-10">Awards load ho rahe hain...</p>}
        {error && <p className="text-center text-red-500 py-10">{error}</p>}

        {/* ── Inline 4-column Cards ── */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,102,204,0.10)" }}
                className="group bg-white border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col items-center text-center shadow-sm hover:border-[#0066cc]/30 transition-all duration-300 w-full max-w-[260px] sm:max-w-none"
              >
                {/* Top: category */}
                <div className="flex items-center gap-2 mb-3 w-full justify-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#0066cc] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                    {award.category}
                  </span>
                </div>

                {/* Logo */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center p-3 mb-3 group-hover:border-[#0066cc]/20 transition-colors">
                  <img
                    src={award.image}
                    alt={award.organization}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#0d1f3c] text-sm md:text-[15px] font-bold mb-2 group-hover:text-[#0066cc] transition-colors duration-200 leading-snug min-h-[40px] flex items-center">
                  {award.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-slate-200 mb-3" />

                {/* Org + Year */}
                <div className="mt-auto">
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                    Awarded By
                  </p>
                  <p className="text-slate-700 text-xs md:text-[13px] font-semibold">
                    {award.organization}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-slate-400">
                    {award.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}