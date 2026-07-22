import React from "react";
import {
  Shield,
  Users,
  Home,
  TrendingUp,
  Heart,
  CheckCircle2,
} from "lucide-react";

import HeroSection from "../../components/HeroSection";
import CTASection from "../../components/CTASection";
import phase1Image from "../../assets/architecture/a1.jpg";
import phase2Image from "../../assets/architecture/a2.jpg";
import phase3Image from "../../assets/architecture/a3.jpg";
import phase4Image from "../../assets/architecture/a6.jpg";
import OnPage from "../../components/OnPage";

const InstitutionalArchitecture = () => {
  // 2. The 4 Phases Data
  const phases = [
    {
      id: "1",
      title: "Foundation and Alignment",
      intro: (
        <>
          <p className="mb-2">
            At the beginning of the academic year, MyPeegu works closely with
            school leadership to establish a clear foundation for the well-being
            ecosystem.
          </p>
          <p className="mb-4">
            This stage focuses on understanding the school’s context and
            aligning the well-being framework with institutional priorities.
          </p>
          <p className="font-semibold text-[#1a2b4b] mb-2">
            Key activities include:
          </p>
        </>
      ),
      list: [
        "Orientation and alignment meetings with school leadership and educators",
        "Establishment of behavioural observation systems",
        "Introduction of the SEL framework for students",
        "Planning of educator training and parent engagement sessions",
        "Configuration of data governance and reporting systems",
      ],
      outro: (
        <p className="mt-4 pt-4 text-slate-600">
          This phase ensures that the school begins the year with{" "}
          <strong className="text-[#1a2b4b]">
            clarity, structure, and shared understanding
          </strong>{" "}
          of the well-being framework.
        </p>
      ),
      image: phase1Image,
      reverse: false,
    },
    {
      id: "2",
      title: "Implementation and Engagement",
      intro: (
        <>
          <p className="mb-2">
            Once the framework is established, the focus shifts to implementing
            structured initiatives across the school community.
          </p>
          <p className="font-semibold text-[#1a2b4b] mb-2">
            During this phase, MyPeegu works with schools to ensure consistent
            engagement through:
          </p>
        </>
      ),
      list: [
        "Student SEL sessions and developmental activities",
        "Psychoeducational workshops for educators",
        "Psychometric Assessments for educators and Students",
        "Parent coaching and engagement sessions",
        "Structured behavioural observations within classrooms",
        "Targeted counselling and support interventions",
      ],
      outro: (
        <p className="mt-4 pt-4 text-slate-600">
          These activities ensure that emotional learning and behavioural
          awareness become part of{" "}
          <strong className="text-[#1a2b4b]">
            everyday school life rather than isolated interventions.
          </strong>
        </p>
      ),
      image: phase2Image,
      reverse: true,
    },
    {
      id: "3",
      title: "Monitoring and Insight",
      intro: (
        <>
          <p className="mb-2">
            Throughout the academic year, MyPeegu supports schools in tracking
            the effectiveness of well-being initiatives through structured
            monitoring systems.
          </p>
          <p className="font-semibold text-[#1a2b4b] mb-2">This includes:</p>
        </>
      ),
      list: [
        "Monthly service implementation trackers",
        "Behavioural observation reviews",
        "Leadership review meetings",
        "Emotional climate and happiness surveys",
        "Pattern analysis and insight generation through AI-supported systems",
      ],
      outro: (
        <p className="mt-4 pt-4 text-slate-600">
          These monitoring mechanisms help schools understand emerging patterns
          and ensure that interventions remain{" "}
          <strong className="text-[#1a2b4b]">
            timely, relevant, and responsive to student needs.
          </strong>
        </p>
      ),
      image: phase3Image,
      reverse: false,
    },
    {
      id: "4",
      title: "Reflection and Institutional Learning",
      intro: (
        <>
          <p className="mb-2">
            Towards the end of the academic cycle, schools engage in a process
            of reflection and institutional learning.
          </p>
          <p className="font-semibold text-[#1a2b4b] mb-2">
            Leadership teams review key insights gathered throughout the year,
            including:
          </p>
        </>
      ),
      list: [
        "Behavioural trends across different age groups",
        "Impact of SEL initiatives",
        "Feedback from educators, students, and parents",
        "Effectiveness of counselling and intervention systems",
      ],
      outro: (
        <p className="mt-4 pt-4 text-slate-600">
          This reflection phase helps schools refine their strategies and
          strengthen their well-being systems for the following academic year.
        </p>
      ),
      image: phase4Image,
      reverse: true,
    },
  ];
  // 3. Outcomes Data
  const outcomes = [
    {
      title: "Stronger Emotional Resilience Among Students",
      desc: [
        "Students develop the ability to recognise and regulate emotions, build healthier relationships, and make responsible decisions.",
        "Over time, this contributes to greater confidence, improved behaviour, and stronger engagement in learning.",
      ],
      icon: <Shield className="text-blue-600" size={24} />,
      bgColor: "bg-blue-500", // Changed to stronger color for the top border accent
      iconBg: "bg-blue-50",
    },
    {
      title: "More Confident and Supported Educators",
      desc: [
        "Teachers gain deeper understanding of student behaviour and emotional development.",
        "With structured tools and psychoeducational training, educators feel better equipped to manage classroom challenges, build relationships, and support student well-being.",
      ],
      icon: <Users className="text-emerald-600" size={24} />,
      bgColor: "bg-emerald-500",
      iconBg: "bg-emerald-50",
    },
    {
      title: "Greater Alignment Between School and Home",
      desc: [
        "Through parent engagement and coaching sessions, families gain insights into child development and behavioural support strategies.",
        "This alignment between school and home creates a consistent environment that supports children’s emotional growth.",
      ],
      icon: <Home className="text-amber-600" size={24} />,
      bgColor: "bg-amber-500",
      iconBg: "bg-amber-50",
    },
    {
      title: "Leadership Clarity Through Structured Insights",
      desc: [
        "School leaders gain access to meaningful insights into behavioural trends, SEL progress, and intervention outcomes.",
        "These insights help leadership teams make informed decisions about policies, support systems, and resource allocation.",
      ],
      icon: <TrendingUp className="text-purple-600" size={24} />,
      bgColor: "bg-purple-500",
      iconBg: "bg-purple-50",
    },
    {
      title: "A Culture of Emotional Intelligence",
      desc: [
        "Perhaps the most important outcome is the gradual transformation of school culture.",
        "Over time, emotional intelligence becomes embedded in everyday interactions between students, teachers, and families.",
        "The school evolves into a space where learning is not only academic but also deeply human—supporting the development of thoughtful, resilient, and responsible individuals.",
      ],
      icon: <Heart className="text-pink-600" size={24} />,
      bgColor: "bg-pink-500",
      iconBg: "bg-pink-50",
    },
  ];

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-clip">
      <OnPage
        title="Institutional Architecture"
        description="Explore how MyPeegu’s institutional architecture integrates emotional wellbeing into school systems through a structured annual cycle."
        keywords="institutional architecture, school wellbeing system, SEL implementation, MyPeegu framework"
        url="https://www.mypeegu.com/institutional-architecture"
        image="../../assets/architecture/a6.jpg"
      />
      <HeroSection
        title="Institutional Architecture"
        highlight="in Action"
        description={
          <span className="text-slate-600">
            <strong className="font-bold text-[#1a365d]">
              {" "}
              How the MyPeegu Framework Works Across the School Year
            </strong>
            <p>
              {" "}
              MyPeegu’s Institutional Architecture is designed to integrate
              seamlessly with the academic calendar, ensuring that well-being
              initiatives evolve alongside the school’s educational journey.
            </p>
            <p>
              Rather than introducing isolated activities, our framework follows
              a structured annual cycle where observation, implementation,
              reflection, and improvement occur continuously throughout the
              year.
            </p>
          </span>
        }
      />

      {/* 2. THE FRAMEWORK CYCLE */}
      <section className="py-10 md:py-10 bg-white overflow-hidden w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden lg:block"></div>

          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`relative z-10 flex flex-col gap-8 lg:gap-10 items-center ${
                phase.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative bg-white rounded-2xl p-1 group">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md border border-slate-100 z-20 relative transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div
                    className={`absolute -inset-3 bg-blue-50/50 rounded-[2rem] -z-10 blur-lg transition-all duration-500 group-hover:bg-blue-100/60 ${phase.reverse ? "-right-3" : "-left-3"}`}
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center bg-white/80 backdrop-blur-sm rounded-3xl lg:px-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[3px] bg-gradient-to-r from-[#0066cc] to-blue-300 rounded-full"></div>
                  <span className="text-[#0066cc] font-bold uppercase tracking-wider text-sm">
                    Phase {phase.id}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] leading-tight mb-4">
                  {phase.title}
                </h2>

                <div className="relative">
                  <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-blue-100 via-slate-200 to-transparent rounded-full hidden sm:block"></div>

                  <div className="sm:pl-6 text-slate-600 mx-auto font-medium ">
                    {phase.intro}

                    <ul className="space-y-2 mt-3 mb-4">
                      {phase.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100/50"
                        >
                          <CheckCircle2
                            size={18}
                            strokeWidth={2.5}
                            className="text-[#0066cc] shrink-0 mt-0.5"
                          />
                          <span className="text-slate-700 font-medium text-sm md:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="relative">
                      <div className="absolute top-0 left-0 w-8 h-px bg-[#0066cc]"></div>
                      {phase.outro}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUTCOMES SECTION (Fully Centered) */}
      <section className="py-10 md:py-10 bg-slate-50 overflow-x-hidden w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                Our Impact
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 tracking-tight">
              Outcomes Schools Experience
            </h2>
            <p className="text-slate-500 mx-auto font-medium">
              When well-being systems are integrated into institutional
              architecture, schools begin to experience meaningful and
              measurable transformation.
            </p>
          </div>

          {/* Using Flexbox instead of Grid to perfectly center odd number of cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center text-center relative p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden border border-slate-100"
              >
                {/* Changed to Top Accent Line for better centered aesthetic */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${outcome.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div
                  className={`w-14 h-14 rounded-full ${outcome.iconBg} flex items-center justify-center mb-5 shadow-inner`}
                >
                  {outcome.icon}
                </div>

                <h3 className="text-lg font-bold text-[#1a2b4b] mb-3 leading-snug group-hover:text-blue-900 transition-colors">
                  {outcome.title}
                </h3>

                <div className=" leading-relaxed space-y-2 text-md md:text-medium text-slate-500 md:font-medium">
                  {outcome.desc.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
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
