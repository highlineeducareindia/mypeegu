import React from "react";
import { motion } from "framer-motion";
import phase1 from "../../assets/approach/1.jpg";
import phase2 from "../../assets/approach/2.jpg";
import phase3 from "../../assets/approach/3.jpg";
import phase4 from "../../assets/approach/4.jpg";
import FlowLayout from "../../components/FlowLayout";
import HeroSection from "../../components/HeroSection";
import {
  GraduationCap,
  HeartHandshake,
  Microscope,
  Users,
  CheckCircle2,
} from "lucide-react";
import CTASection from "../../components/CTASection";
import OnPage from "../../components/OnPage";

const methodologies = [
  {
    title: "Child First. System Always.",
    desc: `
      <p class="mb-2">Children do not grow in isolation. Their behaviour, emotions, and decisions are shaped by the systems around them — classrooms, teachers, peers, families, and school culture.</p>

      <p class="mb-2">Our model works simultaneously across:</p>

      <ul class="list-disc pl-6 mb-2 space-y-1">
        <li>Students</li>
        <li>Educators</li>
        <li>Parents</li>
        <li>School leadership</li>
      </ul>

      <p>
        By strengthening all these pillars together, we create environments where emotional learning becomes part of everyday school life rather than a separate activity.
      </p>
    `,
    image: phase1,
    tag: "OUR APPROACH FRAMEWORK",
    color: "#1E88E5",
  },
  {
    title: "Structure Before Scale",
    desc: `
    <p class="mb-2">
      Emotional development cannot be random.
    </p>
    
    <p class="mb-2">
      Schools often introduce well-being initiatives without a progression model, which limits their long-term impact.
    </p>

    <p class="mb-2">Our <strong class="font-bold text-[#1a365d]">4-year vertical SEL model</strong> ensures:</p>

    <ul class="list-disc pl-6 mb-2 space-y-1">
      <li>Progressive skill development</li>
      <li>Reinforcement across years</li>
      <li>Age-appropriate emotional competencies</li>
      <li>Integration with school culture</li>
    </ul>

    <p>
      This structured progression ensures students do not merely learn about emotions — they <strong class="font-bold text-[#1a365d]">practice, internalise, and apply emotional skills over time.</strong>
    </p>
  `,
    image: phase2,
    tag: "Principle 02",
    color: "#F59E0B",
  },
  {
    title: "Prevention Before Escalation",
    desc: `
    <p class="mb-2">
      A core principle of the MyPeegu model is early identification and structured intervention.
    </p>

    <p class="mb-2">
      Through our <strong class="font-bold text-[#1a365d]">Waves of Intervention framework</strong>, we ensure support is available at multiple levels.
    </p>

    <p class="font-bold text-[#1a365d] text-lg mb-0">Tier 1 – Universal Development</p>
    <p class="mb-2">
      School-wide SEL learning, workshops, and culture-building initiatives designed to strengthen emotional awareness, communication, and empathy across all students.
    </p>

    <p class="font-bold text-[#1a365d] text-lg mb-0">Tier 2 – Targeted Support</p>
    <p class="mb-2">
      Small group interventions for students who may require additional guidance in areas such as emotional regulation, peer relationships, or academic stress.
    </p>

    <p class="font-bold text-[#1a365d] text-lg mb-0">Tier 3 – Intensive Counselling</p>
    <p class="mb-2">
      Individual counselling and structured follow-ups for students requiring deeper psychological support.
    </p>

    <ul class="pl-0 space-y-1 mt-2">
      <li>AI assists in identifying behavioural patterns that may require attention.</li>
      <li>Human professionals interpret context and guide intervention.</li>
    </ul>
    `,
    image: phase3,
    tag: "Principle 03",
    color: "#10B981",
  },
  {
    title: "Data With Discernment",
    desc: `
    <p class="mb-2">
      Schools generate large amounts of behavioural and developmental data.
    </p>

    <p class="mb-2">
      However, data alone does not create insight.
    </p>

    <p class="mb-2">
      At MyPeegu, behavioural observations, student reflections, and workshop feedback are carefully organised to identify patterns over time.
    </p>

    <ul class="pl-0 space-y-1 mt-2">
      <li>AI helps organise and detect patterns within this information.</li>
      <li>Human professionals ensure interpretation remains responsible, contextual, and ethical.</li>
    </ul>
    `,
    image: phase4,
    tag: "Principle 04",
    color: "#6366F1",
  },
];

const OurApproach = () => {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-clip">
        <OnPage
        title="Our Approach"
        description="Discover MyPeegu’s structured approach to building emotionally intelligent schools through SEL frameworks, interventions, and data-driven insights."
        keywords="SEL framework, emotional intelligence in schools, student wellbeing system, MyPeegu approach"
        url="https://www.mypeegu.com/our-approach"
        image="../../assets/approach/1.jpg"
      />
      {/* 1. MINIMAL HERO SECTION */}
      <HeroSection
        title="OUR APPROACH"
        highlight="FRAMEWORK"
        description={
          <span className="text-slate-600">
            Our approach is rooted in the belief that emotional development is
            not accidental — it must be{" "}
            <strong className="font-bold text-[#1a365d]">
              designed, structured, and reinforced.
            </strong>
          </span>
        }
        buttonText="Explore Our Approach"
        image={phase1}
      />

      {/* 2. THE FLOW LAYOUT */}
      <FlowLayout data={methodologies} />

      {/* --- SERVICE SECTION START --- */}
      <section className="py-10 md:py-10 bg-slate-50 overflow-visible  w-full relative">
        {/* Subtle background pattern for premium feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 flex flex-col items-center"
            >
              {/* Premium Bilateral Tick Lines */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#0066cc] rounded-full"></div>
                <span className="text-[#0066cc] font-bold uppercase tracking-widest text-sm">
                  Our Ecosystem
                </span>
                <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#0066cc] rounded-full"></div>
              </div>

              <h2 className="text-3xl md:text-3xl lg:text-4xl font-black text-[#1a365d] tracking-tight ">
                Our Integrated Services
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Vertical Accent Line (Desktop only) */}
              {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-4 h-[3px] w-12 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full hidden sm:block"></div> */}

              <p className="text-lg md:text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mt-2 ">
                A structured, school-wide ecosystem across students, educators,
                parents, and leadership.
              </p>
            </motion.div>
          </div>

          {/* Services Grid - Optimized Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 ">
            <ServiceColumn
              icon={Users}
              delay={0.1}
              title="Holistic Development for Students"
              accentColor="blue"
              items={[
                "Holistic emotional profiling",
                "Structured SEL progression",
                "Targeted interventions & counselling",
                "Guided reflection practices",
                "Longitudinal growth tracking",
              ]}
            />
            <ServiceColumn
              icon={GraduationCap}
              delay={0.2}
              title="Self-Motivated Competent Educators"
              accentColor="emerald"
              items={[
                "Psychology-informed classroom practices",
                "Capacity building workshops",
                "Trauma-aware teaching frameworks",
                "Reflective supervision",
                "Professional growth pathways",
              ]}
            />
            <ServiceColumn
              icon={HeartHandshake}
              delay={0.3}
              title="Holistic Development for Parents"
              accentColor="amber"
              items={[
                "Psychoeducational sessions",
                "Emotional coaching at home",
                "Strength-based parenting tools",
                "Developmental guidance",
                "Consistent school–home alignment",
              ]}
            />
            <ServiceColumn
              icon={Microscope}
              delay={0.4}
              title="Data & Research Analysis"
              accentColor="purple"
              items={[
                "Behavioural observation systems",
                "Leadership review frameworks",
                "Emotional climate insights",
                "Policy alignment support",
                "Data-informed governance",
              ]}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
const ServiceColumn = ({ title, items, icon: Icon, delay, accentColor }) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hoverText: "group-hover:text-blue-700",
      iconBg: "from-blue-100 to-blue-50",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hoverText: "group-hover:text-emerald-700",
      iconBg: "from-emerald-100 to-emerald-50",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      hoverText: "group-hover:text-amber-700",
      iconBg: "from-amber-100 to-amber-50",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hoverText: "group-hover:text-purple-700",
      iconBg: "from-purple-100 to-purple-50",
    },
  };

  const theme = colorMap[accentColor] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="group relative flex flex-col p-6 lg:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden"
    >
      {/* Left Accent Reveal Line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* ICON AUR TITLE PARALLEL (Side-by-Side) */}
      <div className="flex flex-row items-center gap-4 mb-2 w-full">
        {/* Icon Container - shrink-0 lagaya taaki icon chhota na ho aur text ke parallel rahe */}
        <div
          className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${theme.iconBg} shadow-inner group-hover:scale-105 transition-transform duration-500`}
        >
          <Icon size={28} className={theme.text} strokeWidth={2.5} />
        </div>

        {/* Title Container */}
        <div className="flex flex-col text-left">
          <h3
            className={`text-[16px] md:text-[18px] font-black text-[#1a365d] leading-tight ${theme.hoverText} transition-colors duration-300`}
          >
            {title}
          </h3>
          <div
            className={`h-[2px] w-8 mt-2 rounded-full ${theme.bg} opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100`}
          ></div>
        </div>
      </div>

      {/* Animated Premium List */}
      <ul className="space-y-3 w-full mt-auto text-left">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50 group-hover:bg-slate-50 transition-colors"
          >
            <CheckCircle2
              size={18}
              strokeWidth={2.5}
              className={`${theme.text} shrink-0 mt-0.5`}
            />
            <span className="text-[14px] md:text-[15px] text-slate-700 font-medium leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default OurApproach;
