import React from "react";
import { Shield, Users, Home, TrendingUp, Heart, CheckCircle2 } from "lucide-react";

import HeroSection from "../../components/HeroSection";
import CTASection from "../../components/CTASection";

// Import images
import heroImage from "../../assets/time/hero.png";
import phase1Image from "../../assets/pathways/1.png";
import phase2Image from "../../assets/Website/Student Workshop/5.jpg";
import phase3Image from "../../assets/pathways/4.png";
import phase4Image from "../../assets/pathways/6.png";

const InstitutionalArchitecture = () => {
  // 1. Hero Section Data
  const pageData = {
    hero_badge: "Institutional Architecture",
    hero_title: "Institutional Architecture",
    hero_highlight: "in Action",
    hero_desc: "MyPeegu’s Institutional Architecture is designed to integrate seamlessly with the academic calendar, ensuring that well-being initiatives evolve alongside the school’s educational journey. Rather than introducing isolated activities, our framework follows a structured annual cycle.",
    hero_btn: "See How It Works",
    hero_image: heroImage,
  };

  // 2. The 4 Phases Data (Formatted for the ZigZag Layout)
  const phases = [
    {
      id: "01",
      title: "Foundation and Alignment",
      desc: "At the beginning of the academic year, we work closely with school leadership to establish a clear foundation. We focus on understanding the school's context and aligning the well-being framework with institutional priorities.",
      features: ["Observation Systems", "SEL Framework"],
      image: phase1Image,
      reverse: false, // Image left, Text right
    },
    {
      id: "02",
      title: "Implementation and Engagement",
      desc: "Once the framework is established, the focus shifts to implementing structured initiatives across the school community. Emotional learning and behavioural awareness become part of everyday school life rather than isolated interventions.",
      features: ["Student SEL Sessions", "Parent Coaching"],
      image: phase2Image,
      reverse: true, // Text left, Image right
    },
    {
      id: "03",
      title: "Monitoring and Insight",
      desc: "Throughout the academic year, MyPeegu supports schools in tracking the effectiveness of well-being initiatives through structured monitoring systems and AI-supported pattern analysis to ensure timely interventions.",
      features: ["Monthly Trackers", "Happiness Surveys"],
      image: phase3Image,
      reverse: false,
    },
    {
      id: "04",
      title: "Reflection and Institutional Learning",
      desc: "Towards the end of the academic cycle, schools engage in a process of reflection and institutional learning. Leadership teams review key insights to refine their strategies for the following academic year.",
      features: ["Behavioural Trends", "Impact Analysis"],
      image: phase4Image,
      reverse: true,
    },
  ];

  // 3. Outcomes Data
  const outcomes = [
    {
      title: "Stronger Emotional Resilience Among Students",
      desc: "Students develop the ability to recognise and regulate emotions, build healthier relationships, and make responsible decisions. Over time, this contributes to greater confidence, improved behaviour, and stronger engagement in learning.",
      icon: <Shield className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50",
    },
    {
      title: "More Confident and Supported Educators",
      desc: "Teachers gain deeper understanding of student behaviour and emotional development. With structured tools and psychoeducational training, educators feel better equipped to manage classroom challenges, build relationships, and support student well-being.",
      icon: <Users className="text-emerald-600" size={28} />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Greater Alignment Between School and Home",
      desc: "Through parent engagement and coaching sessions, families gain insights into child development and behavioural support strategies. This alignment creates a consistent environment that supports children’s emotional growth.",
      icon: <Home className="text-amber-600" size={28} />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Leadership Clarity Through Structured Insights",
      desc: "School leaders gain access to meaningful insights into behavioural trends, SEL progress, and intervention outcomes. These insights help leadership teams make informed decisions about policies, support systems, and resource allocation.",
      icon: <TrendingUp className="text-purple-600" size={28} />,
      bgColor: "bg-purple-50",
    },
    {
      title: "A Culture of Emotional Intelligence",
      desc: "Perhaps the most important outcome is the gradual transformation of school culture. Over time, emotional intelligence becomes embedded in everyday interactions. The school evolves into a space where learning is not only academic but also deeply human.",
      icon: <Heart className="text-pink-600" size={28} />,
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden w-full">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
        image={pageData.hero_image}
      />

      {/* 2. THE FRAMEWORK CYCLE (New Zig-Zag Layout Based on Screenshot) */}
      <section className="py-16 md:py-24 bg-white overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`flex flex-col gap-10 lg:gap-20 items-center ${
                phase.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img 
                    src={phase.image} 
                    alt={phase.title} 
                    className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-slate-100"
                  />
                  {/* Optional decorative background blob */}
                  <div className={`absolute -inset-4 bg-blue-50/50 rounded-[3rem] -z-10 blur-xl ${phase.reverse ? '-right-4' : '-left-4'}`} />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Phase Badge (Like the screenshot) */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[2px] bg-[#0066cc]"></div>
                  <span className="text-[#0066cc] font-bold uppercase tracking-[0.15em] text-sm">
                    PHASE {phase.id}
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4b] leading-tight mb-6">
                  {phase.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {phase.desc}
                </p>

                {/* Bottom Tags / Features (Red Checkmarks like screenshot) */}
                <div className="flex flex-wrap gap-6 sm:gap-8">
                  {phase.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={20} strokeWidth={2.5} className="text-[#e74c3c]" />
                      <span className="font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUTCOMES SECTION (Kept from previous version) */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider text-[#0066cc] uppercase bg-blue-100 px-4 py-1.5 rounded-full mb-4 inline-block">
              Measurable Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2b4b] mt-4 mb-6">
              Outcomes Schools Experience
            </h2>
            <p className="text-lg text-gray-600">
              When well-being systems are integrated into institutional architecture, schools begin to experience meaningful transformation across all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 4 ? 'lg:col-span-3 lg:w-2/3 mx-auto' : ''}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${outcome.bgColor} flex items-center justify-center mb-6`}>
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {outcome.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <CTASection />
      
    </div>
  );
};

export default InstitutionalArchitecture;