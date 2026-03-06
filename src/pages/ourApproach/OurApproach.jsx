import { motion } from "framer-motion";
import logo from "../../assets/pathways/path.png";

import phase1 from "../../assets/Website/Student Workshop/1.jpg";
import phase2 from "../../assets/Website/Student Workshop/2.jpg";
import phase3 from "../../assets/Website/Student Workshop/3.jpg";
import phase4 from "../../assets/Website/Student Workshop/4.jpg";
import phase5 from "../../assets/Website/Student Workshop/5.jpg";
import phase6 from "../../assets/Website/Student Workshop/6.jpg";

import FlowLayout from "../../components/FlowLayout";
import HeroSection from "../../components/HeroSection";
import img1 from "../../assets/Website/Student Workshop/7.jpg";
import img2 from "../../assets/Website/Student Workshop/10.jpg";
import { GraduationCap, HeartHandshake, Microscope, Users } from "lucide-react";
import CTASection from "../../components/CTASection";

const methodologies = [
  {
    title: "Child First. System Always.",
    desc: `
      <p>Children do not grow in isolation. Their behaviour, emotions, and decisions are shaped by the systems around them — classrooms, teachers, peers, families, and school culture.</p>

      <p class="mt-0">Our model works simultaneously across:</p>

      <ul class="list-disc pl-6 mt-1 space-y-1">
        <li>Students</li>
        <li>Educators</li>
        <li>Parents</li>
        <li>School leadership</li>
      </ul>

      <p class="mt-0">
        By strengthening all these pillars together, we create environments where emotional learning becomes part of everyday school life rather than a separate activity.
      </p>
    `,
    image: phase1,
    tag: "Principle 01",
    color: "#1E88E5",
  },
  {
    title: "Structure Before Scale",
    desc: `
    <p class="mt-0">
      Emotional development cannot be random. Schools often introduce well-being initiatives without a progression model, which limits their long-term impact.
    </p>

    <p class="mt-0">Our 4-year vertical SEL model ensures:</p>

    <ul class="list-disc pl-6 mt-0 space-y-1">
      <li>Progressive skill development</li>
      <li>Reinforcement across years</li>
      <li>Age-appropriate emotional competencies</li>
      <li>Integration with school culture</li>
    </ul>

    <p class="mt-0">
      This structured progression ensures students do not merely learn about emotions — they practice, internalise, and apply emotional skills over time.
    </p>
  `,
    image: phase2,
    tag: "Principle 02",
    color: "#F59E0B",
  },

  {
    title: "Prevention Before Escalation",
    desc: `<p>
A core principle of the MyPeegu model is early identification and structured intervention. Through our Waves of Intervention framework, we ensure support is available at multiple levels.
</p>

<p class="mt-0 font-semibold text-gray-800">Tier 1 – Universal Development</p>

<p>
School-wide SEL learning, workshops, and culture-building initiatives designed to strengthen emotional awareness, communication, and empathy across all students.
</p>

<p class="mt-0 font-semibold text-gray-800">Tier 2 – Targeted Support</p>

<p>
Small group interventions for students who may require additional guidance in areas such as emotional regulation, peer relationships, or academic stress.
</p>

<p class="mt-0 font-semibold text-gray-800">Tier 3 – Intensive Counselling</p>

<p>
Individual counselling and structured follow-ups for students requiring deeper psychological support.
</p>

<ul class="list-disc pl-6 mt-0">
<li>AI assists in identifying behavioural patterns that may require attention.</li>
<li>Human professionals interpret context and guide intervention.</li>
</ul>`,
    image: phase3,
    tag: "Principle 03",
    color: "#10B981",
  },

  {
  title: "Data With Discernment",
  desc: `<p>
Schools generate large amounts of behavioural and developmental data.
</p>

<p class="mt-2">
However, data alone does not create insight.
</p>

<p class="mt-2">
At MyPeegu, behavioural observations, student reflections, and workshop feedback are carefully organised to identify patterns over time.
</p>

<ul class="list-disc pl-6 mt-2">
<li>AI helps organise and detect patterns within this information.</li>
<li>Human professionals ensure interpretation remains responsible, contextual, and ethical.</li>
</ul>`,
  image: phase4,
  tag: "Principle 04",
  color: "#6366F1",
}
];

const OurApproach = () => {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* 1. MINIMAL HERO SECTION */}
      <HeroSection
        // badge="Our Approach Framework"
        title="Our Approach "
        highlight="Framework."
        description="Our approach is rooted in the belief that emotional development is not accidental — it must be designed, structured, and reinforced."
        buttonText="Explore Our Approach"
        image={phase1}
      />

      {/* 2. THE FLOW LAYOUT */}
      <FlowLayout data={methodologies} />
      {/* --- SERVICE SECTION START --- */}
      <section className="bg-[#F0F7FF] py-10 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 rounded-sm">
          {/* Section Header */}
          <div className="flex flex-col items-center lg:items-start mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-black text-[#0066cc] tracking-tight">
                Our Integrated Services
              </h2>
              <div className="h-1 w-26 bg-yellow-400 rounded-full mt-2" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-xl font-black text-slate-800 text-center lg:text-left leading-tight mt-2"
            >
              A structured, school-wide ecosystem across students, educators,
              parents, and leadership
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceColumn
              icon={Users}
              delay={0.1}
              title="Holistic Development for Students"
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
// Internal Helper Component for Columns
const ServiceColumn = ({ title, items, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-white shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-50"
  >
    {/* Title Container */}
    <div className="h-16 flex items-center justify-center mb-6">
      {/* Red ki jagah Dark Slate/Black use kiya hai taaki contrast bana rahe */}
      <h3 className="text-lg font-bold text-slate-800 text-center leading-snug group-hover:text-[#0066CC] group-hover:scale-105 transition-all duration-300">
        {title}
      </h3>
    </div>

    {/* Icon Circle */}
    {/* Purely Logo Blue: #0066CC */}
    <div className="w-24 h-24 bg-[#0066CC] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-all duration-300">
      <Icon size={44} className="text-white" strokeWidth={1.5} />
    </div>

    {/* Animated List */}
    <ul className="space-y-3 w-full">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-slate-600 group/item cursor-default"
        >
          {/* Bullet Point Blue Shade mein: #0066CC */}
          <span className="text-[#0066CC] font-black text-lg leading-none group-hover/item:translate-x-1 transition-transform">
            »
          </span>
          {/* Text Hover hone par thoda dark hoga */}
          <span className="text-sm font-semibold group-hover/item:text-slate-900 transition-colors">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default OurApproach;
