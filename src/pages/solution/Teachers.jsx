import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Microscope, Users, Star } from "lucide-react";
import { API_ENDPOINTS } from "../../config/api";

import FlowLayout from "../../components/FlowLayout";
import HeroSection from "../../components/HeroSection";
import CTASection from "../../components/CTASection";

// Map for Dynamic Icons
const LucideMap = {
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake,
  Microscope: Microscope,
  Users: Users,
};

const Teachers = () => {
  const [pageData, setPageData] = useState(null);
  const [methodologies, setMethodologies] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.TEACHERS)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setPageData(result.config);
          
          // Map DB fields to FlowLayout required props
          const formattedMethodologies = result.methodologies.map(m => ({
            title: m.title,
            desc: m.description,
            image: m.image_url,
            tag: m.tag,
            color: m.color_hex
          }));
          setMethodologies(formattedMethodologies);
          setServices(result.services);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Teachers data:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-white">Loading Teacher Pathways...</div>;
  }

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
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

      {/* 3. SERVICE SECTION */}
      <section className="bg-[#F0F7FF] py-10 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 rounded-sm">
          <div className="flex flex-col items-center lg:items-start mb-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#E53935] tracking-tight">{pageData.services_heading}</h2>
              <div className="h-1 w-26 bg-[#E53935] rounded-full mt-2" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-xl font-black text-slate-800 text-center lg:text-left leading-tight mt-2">
              {pageData.services_sub}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv, idx) => {
              const IconComp = LucideMap[srv.icon_name] || Star;
              return (
                <ServiceColumn
                  key={srv.id}
                  icon={IconComp}
                  delay={0.1 * (idx + 1)}
                  title={srv.title}
                  items={srv.items || []}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTENT BLOCKS */}
      <section className="bg-white py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* BLOCK 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-3xl font-bold leading-tight">{pageData.block1_title}</h2>
              <div className="space-y-4 text-slate-500 text-md leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: pageData.block1_desc }} />
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
              <img src={pageData.block1_image} alt="R&D" className="rounded-[2rem] shadow-lg w-full h-[350px] object-cover" />
            </motion.div>
          </div>

          {/* IMPACT BAR */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-y border-slate-100">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4 text-[#E53935]"><GraduationCap size={28} /></div>
              <p className="font-bold text-slate-800">Empowering teachers to become facilitators</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-slate-100">
              <div className="w-12 h-12 bg-[#1E88E5]/10 rounded-full flex items-center justify-center mb-4 text-[#1E88E5]"><HeartHandshake size={28} /></div>
              <p className="font-bold text-slate-800">Parents become partners in education</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-[#FFB300]/10 rounded-full flex items-center justify-center mb-4 text-[#FFB300]"><Users size={28} /></div>
              <p className="font-bold text-slate-800">Helping Students tap into their Potential</p>
            </div>
          </motion.div>

          {/* BLOCK 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-3xl font-bold leading-tight">{pageData.block2_title}</h2>
              <div className="space-y-4 text-slate-500 text-md leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: pageData.block2_desc }} />
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <img src={pageData.block2_image} alt="Leader" className="rounded-[2rem] shadow-lg w-full h-[350px] object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Reusable Service Column Component
const ServiceColumn = ({ title, items, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-white shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-50"
  >
    <div className="h-16 flex items-center justify-center mb-6">
      <h3 className="text-lg font-bold text-[#E53935] text-center leading-snug group-hover:scale-105 transition-transform">{title}</h3>
    </div>
    <div className="w-24 h-24 bg-[#0066CC] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-all duration-300">
      <Icon size={44} className="text-white" strokeWidth={1.5} />
    </div>
    <ul className="space-y-3 w-full">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700 group/item cursor-default">
          <span className="text-[#E53935] font-black text-lg leading-none group-hover/item:translate-x-1 transition-transform">»</span>
          <span className="text-sm font-semibold group-hover/item:text-[#1E88E5] transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Teachers;