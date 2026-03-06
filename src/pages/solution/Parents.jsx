import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../../config/api";

import FlowLayout from "../../components/FlowLayout";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import ParentPartnership from "./ParentPartnership";

const Parents = () => {
  const [pageData, setPageData] = useState(null);
  const [methodologies, setMethodologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.PARENTS_PAGE)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setPageData(result.config);
          
          // Map DB keys to FlowLayout expected props
          const formattedMethodologies = result.methodologies.map(m => ({
            title: m.title,
            desc: m.description,
            image: m.image_url,
            tag: m.tag,
            color: m.color_hex
          }));
          setMethodologies(formattedMethodologies);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Parents page data:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-white">Loading Parent Pathways...</div>;
  }

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. DYNAMIC HERO SECTION */}
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
        image={pageData.hero_image}
      />


      {/* 2. THE FLOW LAYOUT */}
      {methodologies.length > 0 && <FlowLayout data={methodologies} />}
      <ParentPartnership />

      {/* 3. SIGN UP FORM SECTION */}
      <section className="py-8 px-4 ">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F0F7FF] rounded-3xl shadow-lg border border-slate-100 p-4 md:p-10"
          >
            {/* Dynamic Heading */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-[#0066CC] mb-2">
                {pageData.form_heading}
              </h2>
              <p className="text-slate-600 text-lg">
                {pageData.form_sub}
              </p>
            </div>

            {/* FORM (UI Layout) */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Email ID" type="email" />
              <Input placeholder="Subject" />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="md:col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#337AB7] focus:ring-2 focus:ring-[#337AB7]/20 outline-none resize-none transition"
              />

              <div className="md:col-span-2 flex justify-center">
                <Button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Reusable Input Component
const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#337AB7] focus:ring-2 focus:ring-[#337AB7]/20 outline-none transition"
  />
);

export default Parents;