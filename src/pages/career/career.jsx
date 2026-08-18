import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Zap,
  Users,
  BookOpen,
  Upload,
  Send,
  Star,
  CheckCircle2,
  Heart,
  Award,
  Briefcase,
} from "lucide-react";
import OnPage from "../../components/OnPage"
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import img1 from "../../assets/career/1.png";
import img2 from "../../assets/career/2.png";
import img3 from "../../assets/career/3.png";
const Career = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-clip">
      <OnPage
        title="Careers & Community"
        description="Join MyPeegu and be part of a community shaping emotionally intelligent schools."
        keywords="careers, psychology jobs, education jobs"
        url="https://www.mypeegu.com/careers-community"
        image="https://www.mypeegu.com/og-image.png"
      />
      {/* 1. HERO SECTION */}
      <HeroSection
        badge="CAREERS & COMMUNITY"
        title="Join a Community Shaping the Future of"
        highlight="Emotionally Intelligent Schools"
        description=""
        buttonText="Join Our Journey"
      />

      {/* 2. INTRODUCTION */}
      <motion.section
        {...fadeInUp}
        className="w-full bg-white py-10 md:py-10 overflow-hidden relative border-b border-slate-100"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Subtle central tick line */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#0066cc] to-transparent rounded-full"></div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-slate-600 mx-auto text-md font-medium">
              MyPeegu is more than a platform—it is a growing community of
              psychologists, educators, counsellors, and professionals committed
              to transforming how schools nurture emotional intelligence and
              well-being.
            </p>
            <p className="text-slate-600 mx-auto text-md font-medium">
              For over <strong className="text-[#1a365d]">15 + years</strong>,
              we have worked with schools across diverse educational
              environments, building systems that help children grow not only
              academically but also emotionally and socially. What began as a
              vision to bring psychology meaningfully into education has evolved
              into a collaborative ecosystem that continues to grow—
              <strong className="text-[#1a365d]">
                and we are still counting.
              </strong>
            </p>
            <p className="text-slate-600 text-md mx-auto font-medium ">
              At MyPeegu, we invite individuals who believe that the future of
              education must combine{" "}
              <strong className="text-[#1a365d]">
                human insight, psychological integrity, and thoughtful
                innovation.
              </strong>
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. OUR ETHOS (Benefit Cards) */}
      <motion.section
        {...fadeInUp}
        className="py-8 md:py-8 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden"
      >
        <div className="text-center mb-12">
          {/* Bilateral Tick Lines */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#FFB300] rounded-full"></div>
            <span className="text-[#FFB300] font-bold uppercase tracking-wider text-sm">
              Core Beliefs
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#FFB300] rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-4 tracking-tight">
            Our Ethos
          </h2>
          <p className="text-slate-600 max-w-3xl  font-medium mx-auto text-base md:text-md leading-relaxed">
            Everything we do is guided by a few core beliefs that define the
            MyPeegu way of working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <BenefitCard
            icon={<BookOpen size={24} />}
            title="Psychology Must Retain Its Integrity"
            desc="We believe that psychology is not a quick fix. It is a discipline grounded in empathy, ethical practice, and a deep understanding of human behaviour. Our work ensures that psychological principles are applied responsibly within school ecosystems."
            color="bg-blue-50 text-blue-600"
            borderColor="bg-blue-500"
          />
          <BenefitCard
            icon={<ShieldCheck size={24} />}
            title="Systems Must Strengthen Care — Not Standardise It"
            desc="Schools need structure to support students effectively. Yet these systems must enhance human care rather than reduce children to processes or labels. Our frameworks bring clarity while respecting the uniqueness of every child."
            color="bg-emerald-50 text-emerald-600"
            borderColor="bg-emerald-500"
          />
          <BenefitCard
            icon={<Zap size={24} />}
            title="Technology Must Support — Not Dominate"
            desc="Innovation plays an important role in understanding behavioural patterns and strengthening intervention systems. However, technology should remain a support mechanism. Real change happens through human relationships between students, educators, counsellors, and families."
            color="bg-amber-50 text-amber-600"
            borderColor="bg-amber-500"
          />
        </div>
      </motion.section>

      {/* 4. LIST SECTIONS */}
      <div className="bg-white py-10 md:py-10 border-y border-slate-100 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-20 md:space-y-24">
          {/* Section A: Professionals */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 relative">
              {/* Premium Tick Line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-[#0066cc] to-blue-300 rounded-full"></div>
                <span className="text-[#0066cc] font-bold uppercase tracking-wider text-sm">
                  Our Team
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-4 leading-tight">
                A Community of Professionals
              </h3>

              {/* Vertical Accent Line Container */}
              <div className="relative">
                <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-blue-100 via-slate-200 to-transparent rounded-full hidden sm:block"></div>
                <div className="sm:pl-6">
                  <p className="text-slate-600 mb-2 leading-relaxed text-base font-medium md:text-md">
                    The MyPeegu community brings together professionals who
                    share a common passion for nurturing emotionally intelligent
                    school environments.
                  </p>
                  <p className="text-[#1a365d] font-semibold mb-2">
                    Our team includes:
                  </p>
                  <ul className="space-y-2">
                    <ListItem text="Psychologists and school counsellors" />
                    <ListItem text="Educators and academic leaders" />
                    <ListItem text="Behaviour specialists and child development experts" />
                    <ListItem text="Mental health professionals and researchers" />
                    <ListItem text="Individuals committed to social-emotional learning and student well-being" />
                  </ul>
                  <p className="text-slate-600 mt-2 leading-relaxed font-medium">
                    Together, we collaborate with schools to build environments
                    where students feel safe, supported, and understood.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-[550px] rounded-xl overflow-hidden border-[8px] border-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 relative group">
                {/* Image */}
                <img
                  src={img1}
                  loading="lazy"
                  alt="Student Development"
                  className="w-full h-full object-cover"
                />

                {/* Floating icon */}
                <div className="absolute -bottom-3 -right-3 bg-white p-4 rounded-2xl shadow-lg border border-slate-50">
                  <Heart className="text-rose-500" size={28} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section B: Opportunities */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="flex justify-center">
              <div className="w-full max-w-[550px] rounded-xl overflow-hidden border-[8px] border-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 relative group">
                <img
                  src={img2}
                  loading="lazy"
                  alt="Student Development"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute -top-4 -left-4 bg-white  rounded-2xl shadow-lg border border-slate-50">
                  <Briefcase className="text-amber-500" size={28} />
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"></div>
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
                  Your Growth
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-4 leading-tight">
                Opportunities for Growth and Exposure
              </h3>

              <div className="relative">
                <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-emerald-100 via-slate-200 to-transparent rounded-full hidden sm:block"></div>
                <div className="sm:pl-6 font-medium">
                  <p className="text-slate-600 mb-2 leading-relaxed text-base md:text-md ">
                    Working with MyPeegu offers professionals the opportunity to
                    engage with diverse school ecosystems and contribute to
                    meaningful educational transformation.
                  </p>
                  <p className="text-[#1a365d] font-semibold mb-2">
                    Team members gain:
                  </p>
                  <ul className="space-y-2">
                    <ListItem
                      text={
                        <>
                          <strong>National and international exposure</strong>{" "}
                          through collaborations with schools across different
                          educational contexts
                        </>
                      }
                      highlightColor="text-emerald-500"
                    />
                    <ListItem
                      text="Opportunities to work with multidisciplinary teams of psychologists and educators"
                      highlightColor="text-emerald-500"
                    />
                    <ListItem
                      text="Hands-on experience implementing structured SEL and well-being frameworks"
                      highlightColor="text-emerald-500"
                    />
                    <ListItem
                      text="Professional growth through training, mentorship, and collaborative learning"
                      highlightColor="text-emerald-500"
                    />
                    <ListItem
                      text="The chance to contribute to large-scale educational impact initiatives"
                      highlightColor="text-emerald-500"
                    />
                  </ul>
                  <p className="text-slate-600 mt-2 leading-relaxed border-t border-slate-100 pt-4">
                    We believe that those who support the growth of children
                    must themselves have opportunities to{" "}
                    <strong className="text-[#1a365d]">
                      learn, grow, and evolve professionally.
                    </strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section C: Building Schools */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></div>
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">
                  Our Mission
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-6 leading-tight">
                Building Emotionally Intelligent Schools
              </h3>

              <div className="relative">
                <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-amber-100 via-slate-200 to-transparent rounded-full hidden sm:block"></div>
                <div className="sm:pl-6 font-medium">
                  <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-md">
                    At MyPeegu, our mission is not limited to delivering
                    programs. We work to create school cultures where emotional
                    intelligence becomes part of everyday learning.
                  </p>
                  <p className="text-[#1a365d] font-semibold mb-2">
                    Together with schools, we strive to build environments
                    where:
                  </p>
                  <ul className="space-y-2">
                    <ListItem
                      text="Students develop resilience, empathy, and responsible decision-making"
                      highlightColor="text-amber-500"
                    />
                    <ListItem
                      text="Teachers feel confident guiding emotional growth in classrooms"
                      highlightColor="text-amber-500"
                    />
                    <ListItem
                      text="Parents feel empowered to support their children’s development"
                      highlightColor="text-amber-500"
                    />
                    <ListItem
                      text="Leadership teams build systems that prioritise well-being alongside academic excellence"
                      highlightColor="text-amber-500"
                    />
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-[550px] rounded-xl overflow-hidden border-[8px] border-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 relative group">
                <img
                  src={img3}
                  loading="lazy"
                  alt="Student Development"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-50">
                  <Star className="text-blue-500" size={28} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. JOIN FORM SECTION (Be Part of the Journey) */}
      <motion.section
        {...fadeInUp}
        className="max-w-4xl mt-10 mb-10 mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative font-medium"
      >
        {/* Decorative corner blur */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="p-8 md:p-10 lg:p-10 flex flex-col justify-center relative z-10">
          <div className="mb-4 text-center">
            {/* Bilateral Tick Lines */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#0066cc] rounded-full"></div>
              <span className="text-[#0066cc] font-bold uppercase tracking-wider text-sm">
                Apply Now
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#0066cc] rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-4 tracking-tight">
              Be Part of the Journey
            </h2>
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              <p>
                If you are passionate about psychology, education, and
                meaningful social impact, MyPeegu offers a space where your work
                can truly matter.
              </p>
              <p>
                Join a community that has been shaping emotionally intelligent
                school ecosystems for{" "}
                <strong className="text-[#1a365d]">
                  over 15+ years—and continues to grow.
                </strong>
              </p>
              <p>
                Together, we can create schools where{" "}
                <strong className="text-[#1a365d]">
                  emotional intelligence is not just taught but lived every day.
                </strong>
              </p>
            </div>
          </div>

          <form
            className="space-y-4 max-w-2xl mx-auto w-full bg-slate-50/50 p-6 md:p-6 rounded-3xl border border-slate-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <InputGroup type="text" placeholder="Full Name" icon={Users} />
              <InputGroup
                type="email"
                placeholder="Professional Email"
                icon={Send}
              />
            </div>
            <InputGroup type="tel" placeholder="Contact Number" icon={Zap} />

            <div className="relative group">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className="flex items-center gap-4 p-4 bg-white border-2 border-dashed border-slate-200 rounded-xl group-hover:border-blue-400 group-hover:bg-blue-50/30 transition-all">
                <div className="bg-blue-50 p-2.5 rounded-lg shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <Upload size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-medium text-sm">
                    Upload Resume / CV
                  </span>
                  <span className="text-slate-400 text-xs">
                    PDF, DOCX up to 5MB
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 text-center">
              <Button
                type="submit"
                className="w-full md:w-auto px-12 py-4 rounded-full bg-[#1E88E5] text-white font-bold hover:bg-[#1565C0] shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

// --- Sub-components ---

const BenefitCard = ({ icon, title, desc, color, borderColor }) => (
  <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-xl">
    {/* Left Accent Reveal Line */}
    <div
      className={`absolute left-0 top-0 bottom-0 w-1 ${borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
    ></div>

    <div className="relative z-10">
      <div className="flex flex-col gap-4 mb-5">
        <div
          className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-inner`}
        >
          {icon}
        </div>
        <h3 className="text-[20px] font-black text-[#1a365d] leading-tight group-hover:text-[#0066cc] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 mx-auto font-medium">{desc}</p>
    </div>
  </div>
);

const ListItem = ({ text, highlightColor = "text-[#0066cc]" }) => (
  <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100/50 hover:bg-white hover:shadow-sm transition-all">
    <CheckCircle2
      className={`${highlightColor} shrink-0 mt-0.5`}
      size={20}
      strokeWidth={2.5}
    />
    <span className="text-slate-700 leading-relaxed font-medium text-sm md:text-base">
      {text}
    </span>
  </li>
);

const InputGroup = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0066cc] transition-colors z-10">
      <Icon size={20} />
    </div>
    <input
      {...props}
      className="w-full bg-white border border-slate-200 rounded-xl p-4 pl-12 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400 shadow-sm"
    />
  </div>
);

export default Career;
