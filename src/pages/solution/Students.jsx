import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Heart,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import HeroSection from "../../components/HeroSection";
import CTASection from "../../components/CTASection";
import phase1 from "../../assets/student/1.jpg";
import phase2 from "../../assets/student/2.jpg";
import phase3 from "../../assets/student/1.jpg";
import phase4 from "../../assets/student/4year.jpeg";
import FlowLayout from "../../components/FlowLayout";
import OnPage from "../../components/OnPage";

const features = [
  "Trauma-informed",
  "Evidence-based",
  "Context-aware",
  "Structured with follow-up",
];

const Students = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const methodologies = [
    {
      title: "Year 1 – Self-Awareness & Emotional Foundations",
      desc: `
    <p class="mb-1">
      I can understand myself, recognise feelings, and behave kindly in everyday situations.
    </p>
    <p class="mb-2">
      Students begin to develop the emotional language necessary to understand themselves
      and interact with others with kindness and respect.
    </p>
    <p class="mb-2 font-bold text-slate-800">Focus areas include:</p>
    <ul class="list-disc pl-6 space-y-1 mb-2">
      <li>Emotional vocabulary</li>
      <li>Understanding behaviour and reactions</li>
      <li>Recognising feelings in self and others</li>
      <li>Building empathy and kindness</li>
      <li>Learning safe ways to express emotions</li>
    </ul>
    <p>
      This stage establishes the foundation upon which future emotional learning is built.
    </p>
  `,
      image: phase1,
      tag: "YEAR 01",
      color: "#1E88E5",
    },
    {
      title: "Year 2 – Regulation & Relationship Skills",
      desc: `
    <p class="mb-1">
      I can use strategies, repair relationships, and understand how thoughts and feelings influence behaviour.
    </p>
    <p class="mb-2">
      Students begin to understand how emotions influence actions and relationships.
    </p>
    <p class="mb-2 font-bold text-slate-800">Focus areas include:</p>
    <ul class="list-disc pl-6 space-y-1 mb-2">
      <li>Emotional regulation strategies</li>
      <li>Managing frustration and disappointment</li>
      <li>Repairing conflicts and misunderstandings</li>
      <li>Taking responsibility in relationships</li>
      <li>Understanding fairness and empathy</li>
    </ul>
    <p>
      This year strengthens emotional control and social awareness.
    </p>
  `,
      image: phase2,
      tag: "YEAR 02",
      color: "#F59E0B",
    },
    {
      title: "Year 3 – Reflection & Responsible Decision-Making",
      desc: `
    <p class="mb-1">
      I can reflect, think critically, consider others’ perspectives, and make responsible choices.
    </p>
    <p class="mb-2">
      Students begin to develop deeper thinking about behaviour and consequences.
    </p>
     <p class="mb-2 font-bold text-slate-800">Focus areas include:</p>
    <ul class="list-disc pl-6 space-y-1 mb-2">
      <li>Perspective-taking</li>
      <li>Problem-solving and conflict resolution</li>
      <li>Responsible decision-making</li>
      <li>Ethical reasoning</li>
      <li>Self-regulation under challenging situations</li>
    </ul>
    <p>
      This stage builds cognitive-emotional maturity.
    </p>
  `,
      image: phase3,
      tag: "YEAR 03",
      color: "#10B981",
    },
    {
      title: "Year 4 – Purpose, Agency & Impact",
      desc: `
    <p class="mb-1">
      I Can Care, Speak Up, Think Deeply, Act Wisely, and Make a Difference.
    </p>
    <p class="mb-2">
      Students move beyond self-management to understanding their role in the wider community.
    </p>
     <p class="mb-2 font-bold text-slate-800">Focus areas include:</p>
    <ul class="list-disc pl-6 space-y-1 mb-2">
      <li>Leadership and personal agency</li>
      <li>Social responsibility and civic awareness</li>
      <li>Ethical action and integrity</li>
      <li>Voice and advocacy</li>
      <li>Purpose-driven thinking</li>
    </ul>
    <p>
      This stage helps students move from self-development to meaningful contribution.
    </p>
  `,
      image: phase4,
      tag: "YEAR 04",
      color: "#6366F1",
    },
  ];

  const profilingFeatures = [
    { title: "Emotional awareness", icon: Heart },
    { title: "Behavioural patterns", icon: Brain },
    { title: "Social interactions", icon: Users },
    { title: "Coping strategies", icon: ShieldCheck },
    { title: "Decision-making styles", icon: Lightbulb },
  ];

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <OnPage
        title="Student Development"
        description="Discover MyPeegu’s student development programs focused on emotional intelligence, SEL frameworks, and holistic growth across school years."
        keywords="student development, SEL programs, emotional intelligence in schools, MyPeegu students"
        url="https://www.mypeegu.com/solution/student-development"
        image="https://www.mypeegu.com/og-image.png"
      />
      {/* 1. HERO SECTION */}
      <HeroSection
        title="STUDENT "
        highlight="DEVELOPMENT"
        description={
          <>
            <p>Student development lies at the heart of the MyPeegu model.</p>
            <p>
              Our goal is not simply to help students manage emotions — it is to
              support them in becoming thoughtful, responsible, and self-aware
              individuals capable of navigating complex social and academic
              environments.
            </p>
          </>
        }
        buttonText="Explore Programs"
        image=""
      />

      {/* 2. HOLISTIC PROFILING SECTION */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] mb-3">
            Holistic <span className="text-[#0066cc]">Profiling</span>
          </h2>
          <div className="h-1 w-20 bg-[#FFB300] rounded-full mb-6"></div>

          <p className="text-slate-600 mb-4  font-medium leading-relaxed">
            Understanding a student requires more than observing academic
            performance.
          </p>
          <p className="text-slate-600 mb-4  font-medium leading-relaxed">
            Through structured observation frameworks and reflection tools, we
            help schools understand key aspects of student development,
            including:
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {profilingFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow transition"
                >
                  <Icon className="w-4 h-4 text-[#0066cc]" />
                  <span className="text-slate-600   font-medium leading-relaxed">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-slate-600 mb-4  font-medium leading-relaxed mt-4">
            AI assists in organising behavioural insights and identifying
            recurring patterns.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Counsellors and educators interpret these insights to provide
            meaningful support.
          </p>
        </div>
      </section>

      {/* 3. STRUCTURED SEL INTRO */}
      <section className="py-4 pt-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] mb-2">
            Structured SEL <span className="text-[#0066cc]">(Year I – IV)</span>
          </h2>
          <div className="h-1 w-30 bg-[#FFB300] rounded-full mx-auto mb-6"></div>

          <h3 className="text-slate-700 mb-2 font-bold leading-relaxed">
            Structured SEL Framework – 4-Year Vertical Design
          </h3>

          <p className="text-slate-600 mb-2  font-medium leading-relaxed">
            Emotional growth is not a workshop. It is a journey that unfolds
            over time through emotional awareness, reflection, practice, and
            reinforcement.
          </p>
          <p className="text-slate-600 mb-2 font-medium leading-relaxed">
            MyPeegu’s SEL framework follows a{" "}
            <strong>four-year progression</strong> designed to build emotional
            awareness, strengthen regulation, encourage responsible thinking,
            and ultimately nurture purpose-driven individuals.
          </p>
          <p className="text-slate-600  font-medium leading-relaxed">
            AI supports continuity by tracking developmental patterns across
            years. Human educators and counsellors guide the learning
            experience.
          </p>
        </div>
      </section>

      {/* 4. ZIG-ZAG WORKSHOPS SECTION (Replaced FlowLayout with specific IDs) */}
      <FlowLayout data={methodologies} />

      {/* 5. COUNSELLING SECTION */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] mb-3">
            Counselling &{" "}
            <span className="text-[#0066cc]">Targeted Interventions</span>
          </h2>
          <div className="h-1 w-20 bg-[#FFB300] rounded-full mb-6"></div>

          <p className="text-slate-600 mb-4  font-medium leading-relaxed">
            Our counselling model is grounded in professional psychological
            practice.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-slate-600 font-semibold whitespace-nowrap">
              It is:
            </span>
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1.5 bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow transition"
              >
                <span className="text-slate-600   font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 mb-4  font-medium leading-relaxed">
            Counsellors work closely with teachers, parents, and school
            leadership to ensure that students receive holistic support.
          </p>
          <p className="text-slate-600 mb-4  font-medium leading-relaxed">
            AI supports documentation, progress tracking, and continuity of
            care.
          </p>
          <p className="text-slate-600 mb-4   leading-relaxed font-bold">
            Therapeutic engagement remains deeply human.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Students;
