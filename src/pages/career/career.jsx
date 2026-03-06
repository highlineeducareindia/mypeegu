import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Globe, Zap, Users, Calendar, BookOpen, Upload, Send, Star
} from "lucide-react";
import { API_ENDPOINTS } from "../../config/api";

import TestimonialSection from "../home/TestimonialSection";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";

// Dynamic Icon Map
const LucideMap = {
  ShieldCheck, Globe, Zap, Users, Calendar, BookOpen, Upload, Send
};

const career = () => {
  const [pageData, setPageData] = useState(null);
  const [stats, setStats] = useState([]);
  const [connectCards, setConnectCards] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.TRIBE_PAGE)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setPageData(result.config);
          setStats(result.stats);
          setConnectCards(result.connect_cards);
          setBenefits(result.benefits);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Tribe data:", err);
        setLoading(false);
      });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  if (loading || !pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-white">Loading Tribe Ecosystem...</div>;
  }

  return (
    <div className="min-h-screen overflow-hidden ">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
      />
      {/* 2. WORK CULTURE */}
      <motion.section {...fadeInUp} className="w-full bg-white py-10 md:py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="lg:w-7/12 space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-2">
                  {pageData.culture_title}
                </h2>
                <div className="h-1 w-24 bg-[#FFB300] rounded-full mx-auto lg:mx-0" />
              </div>

              <div 
                className="text-slate-600 text-md leading-relaxed space-y-2 font-medium"
                dangerouslySetInnerHTML={{ __html: pageData.culture_desc }}
              />

              <Button className="px-10 py-4 rounded-full bg-[#1E88E5] text-white font-bold shadow-xl shadow-blue-200 hover:bg-[#1565C0] hover:scale-105 transition-all duration-300">
                {pageData.culture_btn}
              </Button>
            </div>

            <div className="lg:w-5/12 w-full relative">
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 overflow-hidden">
                <img src={pageData.culture_image} alt="Work Culture" className="w-full object-cover aspect-[4/3] rounded-xl" />
              </motion.div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FFB300]/10 rounded-full -z-10 blur-2xl" />
            </div>

          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* 3. COMMUNITY & STATS */}
        <section className="grid lg:grid-cols-2 gap-16 items-center py-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-black mb-2">{pageData.community_title}</h2>
            <div className="h-1 w-24 bg-[#FFB300] rounded-full mb-4" />
            <p className="text-slate-600 text-md leading-relaxed mb-8">
              {pageData.community_desc}
            </p>
            <div className="grid grid-cols-3 gap-4 font-[#0066cc]">
              {stats.map(stat => {
                const IconComp = LucideMap[stat.icon_name] || Star;
                return <Stat key={stat.id} icon={IconComp} label={stat.label} />;
              })}
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-4" {...fadeInUp}>
            {connectCards.map(card => (
              <ConnectCard key={card.id} title={card.title} desc={card.description} />
            ))}
          </motion.div>
        </section>
      </div>

      <div className="mt-10">
        <TestimonialSection />
      </div>

      {/* 4. WHY JOIN US SECTION */}
      <motion.section {...fadeInUp} className="py-10 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {pageData.why_title}
          </h2>
          <div className="h-1 w-20 bg-[#FFB300] rounded-full mx-auto mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-[16px] leading-relaxed">
            {pageData.why_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(ben => {
            const IconComp = LucideMap[ben.icon_name] || Star;
            return (
              <BenefitCard
                key={ben.id}
                icon={<IconComp size={24} />}
                title={ben.title}
                desc={ben.description}
                color={ben.color_class}
                hoverColor={ben.hover_color}
                shadowHover={ben.shadow_hover}
              />
            );
          })}
        </div>
      </motion.section>

      {/* 5. JOIN FORM SECTION */}
      <motion.section {...fadeInUp} className="max-w-7xl mb-10 mx-auto bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch h-auto lg:h-[550px]">
          
          <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                {pageData.form_title}
              </h2>
              <div className="h-1 w-20 bg-[#FFB300] rounded-full mb-3" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                {pageData.form_desc}
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup type="text" placeholder="Full Name" icon={Users} />
                <InputGroup type="email" placeholder="Professional Email" icon={Send} />
              </div>
              <InputGroup type="tel" placeholder="Contact Number" icon={Zap} />

              <div className="relative group">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                <div className="flex items-center gap-3 p-3 bg-slate-50 border-2 border-dashed border-slate-100 rounded-xl group-hover:border-blue-400 transition-all">
                  <div className="bg-white p-2 rounded-lg shadow-sm"><Upload size={16} className="text-blue-600" /></div>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Upload Resume / CV</span>
                </div>
              </div>

              <textarea placeholder="Why would you like to work with MyPeegu?" rows="2" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm resize-none" />

              <div className="pt-2">
                <Button type="submit" className="w-full md:w-max px-12 py-3.5 rounded-full bg-[#0066cc] text-white font-bold hover:shadow-lg transition-all">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/3 w-full relative">
            <img src={pageData.form_image} alt="Collaborating at MyPeegu" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
          </div>

        </div>
      </motion.section>

    </div>
  );
};

// Sub-components
const Stat = ({ icon: Icon, label }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-50 text-center hover:-translate-y-1 transition-transform">
    <Icon className="mx-auto text-[#0066cc] mb-3" size={32} />
    <p className="font-bold text-slate-900 text-sm md:text-base">{label}</p>
  </div>
);

const ConnectCard = ({ title, desc }) => (
  <div className="group p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-400/30 transition-all duration-200 flex justify-between items-center cursor-pointer">
    <div className="space-y-1">
      <h4 className="font-bold text-slate-800 text-base group-hover:text-[#0066cc] transition-colors">{title}</h4>
      <p className="text-slate-500 text-sm leading-snug">{desc}</p>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-200">
      <span className="text-xl leading-none">→</span>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, desc, color, shadowHover, hoverColor }) => (
  <div className={`group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:border-transparent ${shadowHover}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-5">
        <div className={`w-12 h-12 flex-shrink-0 rounded-xl ${color} flex items-center justify-center transition-all duration-300 ${hoverColor} group-hover:text-white group-hover:scale-110 shadow-sm`}>
          {icon}
        </div>
        <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-slate-950 transition-colors">{title}</h3>
      </div>
      <p className="text-slate-600 text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);

const InputGroup = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
      <Icon size={20} />
    </div>
    <input {...props} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 pl-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
  </div>
);

export default career;