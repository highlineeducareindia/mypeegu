import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Auto-Scroll ke liye import
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import HeroSection from "../../components/HeroSection";
import CTASection from "../../components/CTASection";

// Images Import
import phase1 from "../../assets/teacher/t5.jpg";
import phase2 from "../../assets/teacher/t1.jpg";
import phase3 from "../../assets/teacher/t2.jpeg";
import phase4 from "../../assets/teacher/t3.jpeg";
import phase5 from "../../assets/teacher/t4.jpeg";
import OnPage from "../../components/OnPage";

const Teachers = () => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  // 100% EXACT CLIENT CONTENT
  const workshops = [
    {
      id: "1",
      title: "Child First Approach",
      subtitle: "Understanding the Child Beyond the Classroom Role",
      desc1:
        "The Child First Approach workshop encourages educators to view students beyond their academic performance or behavioural labels. It focuses on understanding the developmental, emotional, and social factors that influence a child’s behaviour and learning.",
      desc2:
        "Teachers often encounter behaviours such as disengagement, resistance, or emotional outbursts without having the opportunity to explore the underlying causes. This workshop helps educators move from a <strong>reaction-based approach to a relationship-based approach</strong>.",
      themes: [
        "Understanding the emotional needs of children in learning environments",
        "Recognising behaviour as a form of communication",
        "Building trust and psychological safety in classrooms",
        "Developing empathy without compromising classroom structure",
        "Creating stronger teacher-student connections",
      ],
      experience:
        "Through reflective activities and case-based discussions, teachers explore how small shifts in language, expectations, and classroom interactions can significantly influence student behaviour and engagement.",
      experienceOutcomesIntro:
        "Educators leave the session with practical strategies for:",
      experienceOutcomes: [
        "strengthening student relationships",
        "responding constructively to challenging behaviour",
        "fostering inclusive and supportive classroom environments.",
      ],
      boldEnding: "",
      image: phase1,
    },
    {
      id: "2",
      title: "Reinventing Classroom Management",
      subtitle: "Moving Beyond Control Toward Engagement",
      desc1:
        "Classroom management is often perceived as maintaining discipline and order. However, sustainable classroom management requires understanding the psychological dynamics that shape student behaviour.",
      desc2:
        "This workshop helps teachers re-examine traditional disciplinary models and explore approaches that promote <strong>engagement, accountability, and mutual respect</strong>.",
      themes: [
        "Understanding the roots of classroom disruptions",
        "Preventive classroom structures that reduce behavioural escalation",
        "Setting expectations that promote student ownership",
        "Balancing authority with approachability",
        "Building classroom cultures where students feel respected and responsible",
      ],
      experience:
        "Teachers reflect on common classroom challenges and analyse how different responses influence student behaviour. Through interactive discussions and real classroom scenarios, educators learn strategies for:",
      experienceOutcomes: [
        "preventing behavioural disruptions before they escalate",
        "fostering collaborative classroom environments",
        "creating predictable routines that support learning.",
      ],
      boldEnding:
        "The session encourages teachers to move from <strong>discipline-driven classrooms to relationship-driven learning spaces</strong>.",
      image: phase2,
    },
    {
      id: "3",
      title: "Mindshift & Internal Locus of Control",
      subtitle: "Strengthening Teacher Mindset and Professional Resilience",
      desc1:
        "Teaching can be emotionally demanding. External pressures, diverse classroom needs, and time constraints often make educators feel that many factors are beyond their control.",
      desc2:
        "The Mindshift & Internal Locus of Control workshop helps teachers reflect on their personal mindset and recognise the areas where they can exercise influence and agency.",
      themes: [
        "Understanding internal vs external locus of control",
        "Recognising thought patterns that influence professional stress",
        "Reframing challenges as opportunities for growth",
        "Strengthening resilience and emotional regulation",
        "Building collaborative mindsets within teaching teams",
      ],
      experience:
        "Teachers participate in guided reflections that help them identify personal triggers, beliefs, and patterns that may affect their interactions with students and colleagues. By shifting focus from external constraints to internal strengths, educators develop strategies for:",
      experienceOutcomes: [
        "maintaining emotional balance in challenging situations",
        "approaching classroom difficulties with clarity and confidence",
        "fostering supportive peer collaboration.",
      ],
      boldEnding:
        "The workshop helps teachers rediscover their <strong>sense of purpose, control, and professional fulfilment</strong>.",
      image: phase3,
    },
    {
      id: "4",
      title: "Compassionate Curiosity",
      subtitle:
        "Understanding Behaviour Through Inquiry Rather Than Assumption",
      desc1:
        "Students often display behaviours that teachers may initially interpret as defiance, indifference, or lack of discipline. However, behaviour frequently reflects underlying emotional or social challenges.",
      desc2:
        "The <em>Compassionate Curiosity</em> workshop introduces educators to a mindset that replaces quick judgments with thoughtful inquiry.",
      themes: [
        "Understanding behaviour through a psychological lens",
        "Asking reflective questions before responding to student actions",
        "Building emotional awareness in classroom interactions",
        "Supporting students without enabling disruptive behaviour",
        "Strengthening communication and listening skills",
      ],
      experience:
        "Teachers examine real classroom scenarios and practice reframing their responses through curiosity and empathy. Through guided discussions and role-based exercises, educators learn how to:",
      experienceOutcomes: [
        "pause before reacting to difficult behaviour",
        "explore the underlying context behind student responses",
        "create opportunities for meaningful conversations with students.",
      ],
      boldEnding:
        "This approach helps teachers cultivate classrooms where <strong>students feel understood while still being guided toward accountability and growth</strong>.",
      image: phase4,
    },
    {
      id: "5",
      title: "Trauma-Informed Classrooms",
      subtitle: "Creating Emotionally Safe Learning Environments",
      desc1:
        "Many students bring experiences from home, community, or personal challenges that influence their emotional responses and behaviour in school.",
      desc2:
        "A trauma-informed classroom recognises that some behaviours may stem from emotional distress rather than intentional disruption. This workshop introduces teachers to the principles of <strong>trauma-informed educational practice</strong>.",
      themes: [
        "Understanding how stress and trauma affect learning and behaviour",
        "Recognising signs of emotional distress in students",
        "Responding to difficult situations with sensitivity and stability",
        "Building classroom routines that promote emotional safety",
        "Supporting students while maintaining classroom boundaries",
      ],
      experience:
        "Teachers learn how to identify behavioural patterns that may signal deeper challenges and how to respond in ways that support both the individual student and the classroom environment. Educators gain practical strategies for:",
      experienceOutcomes: [
        "creating predictable and safe classroom structures",
        "managing emotional escalations calmly",
        "working collaboratively with counsellors and school support systems.",
      ],
      boldEnding:
        "The focus remains on helping teachers maintain <strong>compassion without compromising structure or learning expectations</strong>. These workshops help educators:",
      finalBullets: [
        "Build stronger relationships with students",
        "Understand behavioural triggers",
        "Respond to emotional challenges effectively",
        "Create psychologically safe learning environments",
      ],
      image: phase5,
    },
  ];

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-clip">
      <OnPage
        title="Teacher Development"
        description="Explore MyPeegu’s psycho-educational workshops for teachers focused on classroom management, emotional intelligence, and student engagement."
        keywords="teacher training, classroom management, emotional intelligence for teachers, educator workshops, MyPeegu teachers"
        url="https://www.mypeegu.com/solution/educator-excellence"
        image="../../assets/teacher/t4.jpeg"
      />

      {/* 1. HERO SECTION */}
      <HeroSection
        badge="EDUCATOR EXCELLENCE"
        title="Psycho-Educational Workshops"
        highlight="for Teachers"
        description="Teachers play a pivotal role in shaping the emotional climate of a school. Their interactions, responses, and expectations influence not only academic outcomes but also students’ sense of belonging, safety, and self-confidence."
        buttonText="Explore Our Workshops"
        image={phase1}
      />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-slate-600 text-[16px] leading-snug space-y-4 font-medium"
          >
            <p>
              MyPeegu’s educator workshops are designed as{" "}
              <strong className="text-slate-800">
                psycho-educational learning experiences
              </strong>{" "}
              that help teachers better understand student behaviour, emotional
              development, and classroom dynamics.
            </p>
            <p>
              Rather than providing theoretical lectures, our sessions combine:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-1">
              <ListItem text="Psychological insights" />
              <ListItem text="Practical classroom strategies" />
              <ListItem text="Reflective exercises" />
              <ListItem text="Scenario-based discussions" />
              <ListItem text="Collaborative problem solving" />
            </div>
            <p className="mt-3">
              Each workshop is designed to help teachers{" "}
              <strong className="text-slate-800">
                translate psychological understanding into everyday classroom
                practice
              </strong>
              , strengthening both educator confidence and student engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ZIG-ZAG WORKSHOPS SECTION */}
      <section className="py-10 md:py-10 bg-white font-medium">
        <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-20">
          {workshops.map((workshop, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={workshop.id}
                id={`workshop-${workshop.id}`} // <--- Auto-Scroll ID assigned here
                className={`flex flex-col gap-8 lg:gap-12 items-center scroll-mt-24 ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* IMAGE COLUMN */}
                <div className="w-full lg:w-5/12 flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-md lg:max-w-lg"
                  >
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-xl border border-slate-100 relative z-10"
                    />
                    <div
                      className={`absolute -inset-4 bg-blue-50/50 rounded-[3rem] -z-10 blur-xl ${isReverse ? "-right-4" : "-left-4"}`}
                    />
                  </motion.div>
                </div>

                {/* TEXT COLUMN */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isReverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Title Area */}
                    <div className="mb-3 border-b border-slate-100 pb-3">
                      <h2 className="text-2xl md:text-3xl font-black text-[#1a365d] leading-tight mb-1">
                        {workshop.title}
                      </h2>
                      <h3 className="text-lg font-bold text-[#0066cc]">
                        {workshop.subtitle}
                      </h3>
                    </div>

                    {/* Description Area */}
                    <div className="text-slate-700 text-[16px] leading-snug space-y-2 mb-1">
                      <p dangerouslySetInnerHTML={{ __html: workshop.desc1 }} />
                      {workshop.desc2 && (
                        <p
                          dangerouslySetInnerHTML={{ __html: workshop.desc2 }}
                        />
                      )}
                    </div>

                    {/* Key Themes */}
                    <div className="mb-1">
                      <h4 className="font-bold text-slate-900 text-[17px] mb-1.5">
                        Key Themes Explored
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[16px]">
                        {workshop.themes.map((theme, i) => (
                          <li key={i}>{theme}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Workshop Experience */}
                    <div>
                      <h4 className="font-bold text-slate-900 text-[17px] mb-1.5 mt-3">
                        Workshop Experience
                      </h4>
                      <div className="text-slate-700 text-[16px] leading-snug space-y-2">
                        <p>{workshop.experience}</p>

                        {workshop.experienceOutcomesIntro && (
                          <p>{workshop.experienceOutcomesIntro}</p>
                        )}

                        <ul className="list-disc pl-5 space-y-1">
                          {workshop.experienceOutcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>

                        {workshop.boldEnding && (
                          <p
                            className="mt-2 text-slate-900"
                            dangerouslySetInnerHTML={{
                              __html: workshop.boldEnding,
                            }}
                          />
                        )}

                        {workshop.finalBullets && (
                          <ul className="list-disc pl-5 mt-1 space-y-1 font-bold text-slate-800">
                            {workshop.finalBullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WORKSHOP IMPACT & HIGHLIGHTS */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-5 text-center">
              Workshop Impact
            </h2>

            <div className="text-slate-600 text-[16px] leading-snug space-y-4 text-center font-medium">
              <p>
                Each workshop is designed to be{" "}
                <strong className="text-slate-800">
                  practical, reflective, and immediately applicable to classroom
                  contexts
                </strong>
                . Teachers leave with tools, insights, and strategies that can
                be implemented within their daily interactions with students.
              </p>

              <p>
                Across schools where these workshops have been conducted,{" "}
                <strong className="text-slate-800">
                  educator feedback has consistently reflected strong engagement
                  and practical value
                </strong>
                .
              </p>

              <p className="text-medium text-slate-600">
                <strong className="text-slate-800">
                  On average, MyPeegu educator workshops have received a
                  participant rating of 4.6 out of 5
                </strong>
                , highlighting their relevance, applicability, and impact on
                classroom practice.
              </p>

              {/* Exact Yellow Highlighted Text */}
              <div className="space-y-3 pt-3 text-left flex flex-col items-center">
                <p className="bg-[#FFF8B0] px-4 py-2 rounded-md italic font-medium inline-block w-full sm:w-auto shadow-sm">
                  Each module is contextualised to the school’s developmental
                  needs, staff profile, and behavioural trends.
                </p>
                <p className="bg-[#FFF8B0] px-4 py-2 rounded-md italic font-medium inline-block w-full sm:w-auto shadow-sm">
                  Additional modules are curated based on institutional
                  requirements, leadership priorities, and emerging challenges
                  within the school community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Component for Intro List Items
const ListItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="text-[#0066cc] shrink-0 mt-1" size={20} />
    <span className="text-slate-700 font-medium">{text}</span>
  </div>
);

export default Teachers;
