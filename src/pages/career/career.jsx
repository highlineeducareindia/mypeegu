import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Globe, Zap, Users, Calendar, BookOpen, Upload, Send, Star, Heart
} from "lucide-react";

import TestimonialSection from "../home/TestimonialSection";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";

// Import images
import heroImage from "../../assets/time/time1.png";
import cultureImage from "../../assets/Website/Student Workshop/3.jpg";
import formImage from "../../assets/Website/Parent Workshop/1.jpg";

// Dynamic Icon Map
const LucideMap = {
  ShieldCheck, Globe, Zap, Users, Calendar, BookOpen, Upload, Send, Heart, Star
};

const Careers = () => {
  // 1. Static Content Mapped from your provided text
  const pageData = {
    hero_badge: "CAREERS & COMMUNITY",
    hero_title: "Join a Community Shaping the Future of",
    hero_highlight: "Emotionally Intelligent Schools",
    hero_desc: "MyPeegu is more than a platform—it is a growing community of psychologists, educators, counsellors, and professionals committed to transforming how schools nurture emotional intelligence and well-being. For over 15+ years, we have worked with schools across diverse educational environments building systems that help children grow not only academically but also emotionally and socially. What began as a vision to bring psychology meaningfully into education has evolved into a collaborative ecosystem that continues to grow—and we are still counting.  At MyPeegu, we invite individuals who believe that the future of education must combine human insight, psychological integrity, and thoughtful innovation.",
    hero_btn: "Explore Opportunities",
    hero_image: heroImage,
    
    culture_title: "Our Ethos",
    culture_desc: `
      <p class="mb-4">Everything we do is guided by a few core beliefs that define the MyPeegu way of working.</p>
      <p class="mb-2"><strong class="text-slate-900">Psychology Must Retain Its Integrity</strong><br/>We believe that psychology is not a quick fix. It is a discipline grounded in empathy, ethical practice, and a deep understanding of human behaviour.</p>
      <p class="mb-2"><strong class="text-slate-900">Systems Must Strengthen Care — Not Standardise It</strong><br/>Schools need structure to support students effectively. Yet these systems must enhance human care rather than reduce children to processes or labels.</p>
      <p><strong class="text-slate-900">Technology Must Support — Not Dominate</strong><br/>Innovation plays an important role in understanding behavioural patterns. However, real change happens through human relationships.</p>
    `,
    culture_btn: "Read More",
    culture_image: cultureImage,

    community_title: "A Community of Professionals",
    community_desc: "The MyPeegu community brings together professionals who share a common passion for nurturing emotionally intelligent school environments. Our mission is to create school cultures where emotional intelligence becomes part of everyday learning.",
    
    why_title: "Opportunities for Growth",
    why_desc: "Working with MyPeegu offers professionals the opportunity to engage with diverse school ecosystems and contribute to meaningful educational transformation. We believe those who support children must also learn, grow, and evolve.",

    form_title: "Be Part of the Journey",
    form_desc: "If you are passionate about psychology, education, and meaningful social impact, MyPeegu offers a space where your work can truly matter. Join a community shaping emotionally intelligent ecosystems for over 15+ years.",
    form_image: formImage
  };

  // 2. Mapped "Our Team Includes" to Stats
  const stats = [
    { id: 1, icon_name: "Heart", label: "Psychologists & Counsellors" },
    { id: 2, icon_name: "BookOpen", label: "Educators & Academic Leaders" },
    { id: 3, icon_name: "ShieldCheck", label: "Behaviour & Mental Health Experts" }
  ];

  // 3. Mapped "Building Emotionally Intelligent Schools" to Connect Cards
  const connectCards = [
    { id: 1, title: "Empowered Students", description: "Students develop resilience, empathy, and responsible decision-making." },
    { id: 2, title: "Confident Teachers", description: "Teachers feel confident guiding emotional growth in classrooms." },
    { id: 3, title: "Supported Parents", description: "Parents feel empowered to support their children’s development." },
    { id: 4, title: "Visionary Leadership", description: "Leadership teams build systems that prioritise well-being alongside academics." }
  ];

  // 4. Mapped "Team Members Gain" to Benefit Cards
  const benefits = [
    { id: 1, title: "Global Exposure", description: "National and international exposure through collaborations with schools across different educational contexts.", icon_name: "Globe", color_class: "bg-blue-100 text-blue-600", hover_color: "group-hover:bg-blue-600", shadow_hover: "hover:shadow-blue-900/10" },
    { id: 2, title: "Multidisciplinary Teams", description: "Opportunities to work with multidisciplinary teams of psychologists and educators.", icon_name: "Users", color_class: "bg-emerald-100 text-emerald-600", hover_color: "group-hover:bg-emerald-600", shadow_hover: "hover:shadow-emerald-900/10" },
    { id: 3, title: "Hands-on Experience", description: "Hands-on experience implementing structured SEL and well-being frameworks.", icon_name: "ShieldCheck", color_class: "bg-purple-100 text-purple-600", hover_color: "group-hover:bg-purple-600", shadow_hover: "hover:shadow-purple-900/10" },
    { id: 4, title: "Professional Growth", description: "Professional growth through continuous training, mentorship, and collaborative learning.", icon_name: "Zap", color_class: "bg-amber-100 text-amber-600", hover_color: "group-hover:bg-amber-600", shadow_hover: "hover:shadow-amber-900/10" },
    { id: 5, title: "Large-Scale Impact", description: "The chance to contribute to large-scale educational impact initiatives.", icon_name: "Star", color_class: "bg-pink-100 text-pink-600", hover_color: "group-hover:bg-pink-600", shadow_hover: "hover:shadow-pink-900/10" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
        image={pageData.hero_image}
      />

      {/* 2. WORK CULTURE (Ethos) */}
      <motion.section {...fadeInUp} className="w-full bg-white py-10 md:py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="lg:w-7/12 space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] mb-2">
                  {pageData.culture_title}
                </h2>
                <div className="h-1 w-24 bg-[#FFB300] rounded-full mx-auto lg:mx-0" />
              </div>

              <div 
                className="text-slate-600 text-md leading-relaxed space-y-2 font-medium"
                dangerouslySetInnerHTML={{ __html: pageData.culture_desc }}
              />
            </div>

            <div className="lg:w-5/12 w-full relative">
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 overflow-hidden">
                <img src={pageData.culture_image} alt="Work Culture" className="w-full object-cover aspect-[4/3] rounded-xl shadow-lg" />
              </motion.div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FFB300]/10 rounded-full -z-10 blur-2xl" />
            </div>

          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* 3. COMMUNITY & OUTCOMES */}
        <section className="grid lg:grid-cols-2 gap-16 items-center py-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{pageData.community_title}</h2>
            <div className="h-1 w-24 bg-[#FFB300] rounded-full mb-4" />
            <p className="text-slate-600 text-md leading-relaxed mb-8">
              {pageData.community_desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-[#0066cc]">
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

      {/* 4. BENEFITS (Opportunities for Growth) */}
      <motion.section {...fadeInUp} className="py-16 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {pageData.why_title}
          </h2>
          <div className="h-1 w-20 bg-[#FFB300] rounded-full mx-auto mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-[16px] leading-relaxed">
            {pageData.why_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
      <motion.section {...fadeInUp} className="max-w-7xl mb-16 mx-auto bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch h-auto lg:h-[550px]">
          
          <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2">
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

          <div className="lg:w-1/3 w-full relative h-64 lg:h-auto">
            <img src={pageData.form_image} alt="Collaborating at MyPeegu" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-white/40 lg:from-transparent to-white/10 lg:to-white/10" />
          </div>

        </div>
      </motion.section>

    </div>
  );
};

// Sub-components
const Stat = ({ icon: Icon, label }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-50 text-center hover:-translate-y-1 transition-transform flex flex-col items-center justify-center h-full">
    <Icon className="text-[#0066cc] mb-3" size={32} />
    <p className="font-bold text-slate-900 text-sm md:text-[15px]">{label}</p>
  </div>
);

const ConnectCard = ({ title, desc }) => (
  <div className="group p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-400/30 transition-all duration-200 flex justify-between items-center cursor-pointer">
    <div className="space-y-1 pr-4">
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
        <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-tight">{title}</h3>
      </div>
      <p className="text-slate-600 text-[15px] leading-relaxed">{desc}</p>
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

export default Careers;