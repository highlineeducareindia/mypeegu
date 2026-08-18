import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

import HeroSection from "../../components/HeroSection";
import Button from "../../components/Button";

// Images Import
import phase1 from "../../assets/parents/1.jpg";
import phase2 from "../../assets/parents/2.jpg";
import phase3 from "../../assets/parents/3.jpg";
import phase4 from "../../assets/parents/4.jpg";
import phase5 from "../../assets/parents/5.jpg";
import FlowLayout from "../../components/FlowLayout";
import OnPage from "../../components/OnPage";

const Parents = () => {
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
  // const workshops = [
  //   {
  //     id: "1",
  //     title: "Conscious Parenting",
  //     subtitle: "Building Awareness in the Parent–Child Relationship",
  //     desc1:
  //       "Parenting often operates on autopilot—driven by habits, cultural expectations, or the way we ourselves were raised. Conscious parenting invites parents to pause, reflect, and become more intentional in how they respond to their children.",
  //     desc2:
  //       "This workshop focuses on helping parents recognise how their own beliefs, emotions, and reactions influence their child’s behaviour and development.",
  //     themes: [
  //       "Understanding how children learn through observation and modelling",
  //       "Recognising emotional triggers in parent–child interactions",
  //       "Developing greater patience and mindful responses",
  //       "Encouraging open communication and trust",
  //       "Balancing guidance with respect for the child’s individuality",
  //     ],
  //     experience:
  //       "Parents explore everyday parenting situations—such as handling mistakes, responding to emotional outbursts, or managing expectations—and reflect on how different responses shape a child’s sense of security and confidence. Through guided discussions and reflective exercises, parents begin to develop greater awareness of how small changes in communication and behaviour can create more positive and supportive family dynamics.",
  //     experienceOutcomesIntro: null,
  //     experienceOutcomes: [],
  //     boldEnding:
  //       "The goal is to help parents move from <strong>reactive parenting to intentional parenting</strong>.",
  //     image: phase1,
  //   },
  //   {
  //     id: "2",
  //     title: "Setting Boundaries & Navigating Power Struggles",
  //     subtitle: "Creating Structure Without Constant Conflict",
  //     desc1:
  //       "Many parents struggle to maintain boundaries while preserving a warm and trusting relationship with their children. Situations involving refusal, negotiation, or resistance can often escalate into repeated power struggles.",
  //     desc2:
  //       "This workshop helps parents understand how boundaries support children’s emotional security and behavioural development.",
  //     themes: [
  //       "Why boundaries are essential for healthy development",
  //       "Understanding the difference between discipline and punishment",
  //       "Managing resistance, negotiation, and defiance constructively",
  //       "Maintaining consistency without escalating conflict",
  //       "Encouraging cooperation while preserving authority",
  //     ],
  //     experience:
  //       "Parents examine common family scenarios—such as homework struggles, screen-time negotiations, bedtime routines, and sibling conflicts—and explore ways to respond calmly and consistently.",
  //     experienceOutcomesIntro:
  //       "Practical strategies are shared to help parents:",
  //     experienceOutcomes: [
  //       "set clear and predictable expectations",
  //       "respond to challenging behaviour without emotional escalation",
  //       "maintain authority while preserving connection.",
  //     ],
  //     boldEnding:
  //       "The workshop emphasises that effective boundaries <strong>create safety, clarity, and mutual respect within the family</strong>.",
  //     image: phase2,
  //   },
  //   {
  //     id: "3",
  //     title: "Emotional Coaching at Home",
  //     subtitle: "Helping Children Understand and Regulate Emotions",
  //     desc1:
  //       "Children often struggle to articulate what they are feeling. When emotions are misunderstood or dismissed, children may express distress through behaviour rather than communication.",
  //     desc2:
  //       "This workshop introduces parents to the concept of <strong>emotional coaching</strong>—helping children recognise, express, and manage their emotions in healthy ways.",
  //     themes: [
  //       "Understanding the emotional development of children",
  //       "Recognising emotional signals behind behaviour",
  //       "Helping children name and understand their feelings",
  //       "Teaching constructive ways to manage strong emotions",
  //       "Supporting emotional resilience and self-regulation",
  //     ],
  //     experience:
  //       "Parents learn practical techniques to support children during moments of frustration, disappointment, anxiety, or anger. Through interactive examples and guided discussions, parents explore how everyday interactions—such as responding to mistakes, disappointment, or conflict—can become opportunities for emotional learning.",
  //     experienceOutcomesIntro: null,
  //     experienceOutcomes: [],
  //     boldEnding:
  //       "Parents leave the session with tools that help them <strong>validate emotions while guiding behaviour</strong>, strengthening their child’s ability to navigate feelings independently over time.",
  //     image: phase3,
  //   },
  //   {
  //     id: "4",
  //     title: "Understanding Adolescent Psychology",
  //     subtitle: "Supporting Teenagers Through a Period of Change",
  //     desc1:
  //       "Adolescence is a period marked by rapid emotional, social, and cognitive changes. Teenagers begin exploring independence, identity, and social belonging, which can sometimes create tension within families.",
  //     desc2:
  //       "This workshop helps parents better understand the psychological and developmental shifts that occur during adolescence.",
  //     themes: [
  //       "Emotional and neurological changes during adolescence",
  //       "Understanding identity formation and independence",
  //       "Navigating communication challenges with teenagers",
  //       "Supporting responsible decision-making",
  //       "Balancing freedom with guidance and boundaries",
  //     ],
  //     experience:
  //       "Parents reflect on the evolving needs of teenagers and explore strategies that encourage open dialogue rather than confrontation.",
  //     experienceOutcomesIntro: "The session focuses on helping parents:",
  //     experienceOutcomes: [
  //       "maintain trust and connection during teenage years",
  //       "guide decision-making without excessive control",
  //       "support adolescents as they navigate social pressures and responsibilities.",
  //     ],
  //     boldEnding:
  //       "The goal is to help parents transition from <strong>direct control toward supportive guidance</strong>.",
  //     image: phase4,
  //   },
  //   {
  //     id: "5",
  //     title: "Strength-Based Parenting",
  //     subtitle: "Focusing on What Children Do Well",
  //     desc1:
  //       "In many families, attention is often directed toward correcting mistakes or addressing weaknesses. While guidance is important, children thrive when their strengths are recognised and nurtured.",
  //     desc2:
  //       "This workshop introduces parents to a <strong>strength-based perspective</strong>, encouraging them to identify and cultivate their child’s abilities, interests, and positive qualities.",
  //     themes: [
  //       "Understanding the impact of positive reinforcement on development",
  //       "Recognising a child’s natural strengths and talents",
  //       "Encouraging confidence through constructive feedback",
  //       "Balancing encouragement with realistic expectations",
  //       "Helping children develop resilience through self-belief",
  //     ],
  //     experience:
  //       "Parents explore how focusing on strengths can influence a child’s motivation, emotional well-being, and willingness to take on challenges.",
  //     experienceOutcomesIntro: "Practical strategies help parents:",
  //     experienceOutcomes: [
  //       "identify and nurture individual strengths",
  //       "support children through setbacks and failures",
  //       "encourage perseverance and confidence.",
  //     ],
  //     boldEnding:
  //       "This approach shifts the parenting focus from <strong>correcting weaknesses to nurturing potential</strong>.",
  //     image: phase5,
  //   },
  // ];
  const methodologies = [
    {
      title: "Conscious Parenting",
      tag: "WORKSHOP 01",
      color: "#0066cc",
      desc: `
<p class="mb-2 font-bold text-[#0066cc]">
  Building Awareness in the Parent–Child Relationship
</p>
      <p class="mb-2">
        Parenting often operates on autopilot—driven by habits, cultural expectations, or the way we ourselves were raised. Conscious parenting invites parents to pause, reflect, and become more intentional in how they respond to their children.
      </p>

      <p class="mb-2">
        This workshop focuses on helping parents recognise how their own beliefs, emotions, and reactions influence their child’s behaviour and development.
      </p>

      <p class="text-slate-800 font-bold">Key Themes Explored:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>Understanding how children learn through observation and modelling</li>
        <li>Recognising emotional triggers in parent–child interactions</li>
        <li>Developing patience and mindful responses</li>
        <li>Encouraging open communication and trust</li>
        <li>Balancing guidance with respect for the child’s individuality</li>
      </ul>
    <p class="text-slate-800 font-bold">Workshop Experience</p>
      <p class="mb-2">
       Parents explore everyday parenting situations—such as handling mistakes, responding to emotional outbursts, or managing expectations—and reflect on how different responses shape a child’s sense of security and confidence. Through guided discussions and reflective exercises, parents begin to develop greater awareness of how small changes in communication and behaviour can create more positive and supportive family dynamics.
      </p>

      <p class="font-medium">
        The goal is to help parents move from <strong class="text-slate-800">reactive parenting to intentional parenting</strong>.
      </p>
    `,
      image: phase1,
    },

    {
      title: "Setting Boundaries & Navigating Power Struggles",
      tag: "WORKSHOP 02",
      color: "#F59E0B",
      desc: `
    <p class="mb-2 font-bold text-[#0066cc]">Creating Structure Without Constant Conflict</p>
      <p class="mb-2">
        Many parents struggle to maintain boundaries while preserving a warm and trusting relationship with their children. Situations involving refusal, negotiation, or resistance can often escalate into repeated power struggles.
      </p>

      <p class="mb-2">
        This workshop helps parents understand how boundaries support children’s emotional security and behavioural development.
      </p>

     <p class="text-slate-800 font-bold">Key Themes Explored:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>Why boundaries are essential for healthy development</li>
        <li>Understanding the difference between discipline and punishment</li>
        <li>Managing resistance, negotiation, and defiance constructively</li>
        <li>Maintaining consistency without escalating conflict</li>
        <li>Encouraging cooperation while preserving authority</li>
      </ul>
     <p class="text-slate-800 font-bold">Workshop Experience</p>
       <p>Parents examine common family scenarios—such as homework struggles, screen-time negotiations, bedtime routines, and sibling conflicts—and explore ways to respond calmly and consistently.</p>

      <p class="mb-2 font-semibold">Practical strategies are shared to help parents:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>set clear and predictable expectations</li>
        <li>respond to challenging behaviour without emotional escalation</li>
        <li>maintain authority while preserving connection.</li>
      </ul>

      <p class="font-medium">
       The workshop emphasises that effective boundaries<strong class="text-slate-800"> create safety, clarity, and mutual respect within the family</strong>.
      </p>
    `,
      image: phase2,
    },

    {
      title: "Emotional Coaching at Home",
      tag: "WORKSHOP 03",
      color: "#10B981",
      desc: `
<p class="mb-2 font-bold text-[#0066cc]">Helping Children Understand and Regulate Emotions</p>
      <p class="mb-2">
        Children often struggle to articulate what they are feeling. When emotions are misunderstood or dismissed, children may express distress through behaviour rather than communication.
      </p>

      <p class="mb-2">
       This workshop introduces parents to the concept of  <strong class="text-slate-800"> emotional coaching </strong>—helping children recognise, express, and manage their emotions in healthy ways.
      </p>

      <p class="text-slate-800 font-bold">Key Themes Explored:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>Understanding the emotional development of children</li>
        <li>Recognising emotional signals behind behaviour</li>
        <li>Helping children name and understand their feelings</li>
        <li>Teaching constructive ways to manage strong emotions</li>
        <li>Supporting emotional resilience and self-regulation</li>
      </ul>
     <p class="text-slate-800 font-bold">Workshop Experience</p>
      <p class="">
        Parents learn practical techniques to support children during moments of frustration, disappointment, anxiety, or anger. Through interactive examples and guided discussions, parents explore how everyday interactions—such as responding to mistakes, disappointment, or conflict—can become opportunities for emotional learning.
      </p>

      <p class="font-medium">
        Parents leave the session with tools that help them <strong class="text-slate-800">validate emotions while guiding behaviour</strong>, strengthening their child’s ability to navigate feelings independently over time.
      </p>
    `,
      image: phase3,
    },

    {
      title: "Understanding Adolescent Psychology",
      tag: "WORKSHOP 04",
      color: "#6366F1",
      desc: `
      <p class="mb-2 font-bold text-[#0066cc]">Supporting Teenagers Through a Period of Change</p>
      <p class="mb-2">
        Adolescence is a period marked by rapid emotional, social, and cognitive changes. Teenagers begin exploring independence, identity, and social belonging, which can sometimes create tension within families.
      </p>

      <p class="mb-2">
        This workshop helps parents better understand the psychological and developmental shifts that occur during adolescence.
      </p>

      <p class="text-slate-800 font-bold">Key Themes Explored:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>Emotional and neurological changes during adolescence</li>
        <li>Understanding identity formation and independence</li>
        <li>Navigating communication challenges with teenagers</li>
        <li>Supporting responsible decision-making</li>
        <li>Balancing freedom with guidance and boundaries</li>
      </ul>
     <p class="text-slate-800 font-bold">Workshop Experience</p>
      <p>Parents reflect on the evolving needs of teenagers and explore strategies that encourage open dialogue rather than confrontation.</P>
      <p class="mb-2 font-semibold">The session focuses on helping parents:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>maintain trust and connection during teenage years</li>
        <li>guide decision-making without excessive control</li>
        <li>support adolescents as they navigate social pressures and responsibilities.</li>
      </ul>

      <p class="font-medium">
      The goal is to help parents transition from <strong class="text-slate-800"> direct control toward supportive guidance</strong>.
      </p>
    `,
      image: phase4,
    },

    {
      title: "Strength-Based Parenting",
      tag: "WORKSHOP 05",
      color: "#EC4899",
      desc: `
<p class="mb-2 font-bold text-[#0066cc]">Focusing on What Children Do Well</p>
      <p class="mb-2">
        In many families, attention is often directed toward correcting mistakes or addressing weaknesses. While guidance is important, children thrive when their strengths are recognised and nurtured.
      </p>

      <p class="mb-2">
      This workshop introduces parents to a <strong class="text-slate-800">strength-based perspective</strong>, encouraging them to identify and cultivate their child’s abilities, interests, and positive qualities.
      </p>

      <p class="text-slate-800 font-bold">Key Themes Explored:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
<li>Understanding the impact of positive reinforcement on development</li>
  <li>Recognising a child’s natural strengths and talents</li>
  <li>Encouraging confidence through constructive feedback</li>
  <li>Balancing encouragement with realistic expectations</li>
  <li>Helping children develop resilience through self-belief</li>
      </ul>
<p class="text-slate-800 font-bold">Workshop Experience</p>
      <p>Parents explore how focusing on strengths can influence a child’s motivation, emotional well-being, and willingness to take on challenges.</P>

      <p class="mb-2 font-semibold">Practical strategies help parents:</p>
      <ul class="list-disc pl-6 space-y-1 mb-2">
        <li>identify and nurture individual strengths</li>
        <li>support children through setbacks and failures</li>
        <li>encourage perseverance and confidence</li>
      </ul>

      <p class="font-medium">
        This approach shifts the parenting focus from <strong class="text-slate-800">correcting weaknesses to nurturing potential</strong>.
      </p>
    `,
      image: phase5,
    },
  ];

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <OnPage
        title="Parenting Workshops"
        description="Explore MyPeegu’s psycho-educational parenting workshops designed to support emotional development, communication, and family wellbeing."
        keywords="parenting workshops, child development, emotional coaching, conscious parenting, MyPeegu parents"
        url="https://www.mypeegu.com/solution/parent-partnership"
        image="https://www.mypeegu.com/og-image.png"
      />
      {/* 1. HERO SECTION */}
      <HeroSection
        badge="PARENT PARTNERSHIP"
        title="Psycho-Educational"
        highlight="Parenting Workshops"
        description=""
        buttonText="Explore Our Workshops"
        image={phase1}
      />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-10 md:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-slate-600 text-[16px] leading-snug space-y-3 font-medium"
          >
            <p>
              A child’s emotional development does not happen only in the
              classroom. It is deeply influenced by the relationships,
              expectations, and communication patterns within the home
              environment.
            </p>
            <p>
              MyPeegu’s parenting workshops are designed as{" "}
              <strong className="text-slate-800">
                psycho-educational engagements led by experienced parenting and
                child development experts
              </strong>
              , helping families better understand the emotional, behavioural,
              and developmental needs of children.
            </p>
            <p>
              These sessions are designed for{" "}
              <strong className="text-slate-800">
                parents across all age groups—from pre-primary to senior school
                (K–12)
              </strong>
              —ensuring that parenting approaches evolve as children grow and
              face new developmental challenges.
            </p>
            <p>
              Workshops are conducted{" "}
              <strong className="text-slate-800">
                both virtually and in person
              </strong>
              , making them accessible and adaptable to school communities.
            </p>
            <p className="mt-3 font-bold text-slate-900">
              Each session combines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <ListItem text="Psychological insight into child development" />
              <ListItem text="Real-life parenting situations and challenges" />
              <ListItem text="Practical strategies parents can apply immediately" />
              <ListItem text="Guided reflection and discussion" />
              <ListItem text="Tools to strengthen parent-child relationships" />
            </div>
            <p className="mt-3">
              The aim is not to prescribe a single parenting style, but to{" "}
              <strong className="text-slate-800">
                empower parents with deeper understanding, emotional awareness,
                and practical skills that support their child’s growth and
                well-being
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ZIG-ZAG WORKSHOPS SECTION */}
      {/* <section className="py-10 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-16">
          {workshops.map((workshop, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={workshop.id}
                id={`workshop-${workshop.id}`}
                className={`flex flex-col gap-6 lg:gap-10 items-center scroll-mt-24 ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >

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
                      className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-xl border border-slate-100 relative z-10"
                    />
                    <div
                      className={`absolute -inset-4 bg-blue-50/50 rounded-[3rem] -z-10 blur-xl ${isReverse ? "-right-4" : "-left-4"}`}
                    />
                  </motion.div>
                </div>
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isReverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-2 border-b border-slate-100 pb-2">
                      <h2 className="text-2xl md:text-3xl font-black text-[#1a2b4b] leading-tight mb-1">
                        {workshop.title}
                      </h2>
                      <h3 className="text-[17px] font-bold text-[#0066cc]">
                        {workshop.subtitle}
                      </h3>
                    </div>

                    <div className="text-slate-700 text-[16.5px] leading-snug space-y-1.5 mb-2">
                      <p dangerouslySetInnerHTML={{ __html: workshop.desc1 }} />
                      {workshop.desc2 && (
                        <p
                          dangerouslySetInnerHTML={{ __html: workshop.desc2 }}
                        />
                      )}
                    </div>

                    <div className="mb-2">
                      <h4 className="font-bold text-slate-900 text-[16px] mb-1">
                        Key Themes Explored
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[15.5px]">
                        {workshop.themes.map((theme, i) => (
                          <li key={i}>{theme}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-[16px] mb-1 mt-2">
                        Workshop Experience
                      </h4>
                      <div className="text-slate-700 text-[15.5px] leading-snug space-y-1.5">
                        <p>{workshop.experience}</p>

                        {workshop.experienceOutcomesIntro && (
                          <p className="mt-1">
                            {workshop.experienceOutcomesIntro}
                          </p>
                        )}

                        {workshop.experienceOutcomes.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1">
                            {workshop.experienceOutcomes.map((outcome, i) => (
                              <li key={i}>{outcome}</li>
                            ))}
                          </ul>
                        )}

                        {workshop.boldEnding && (
                          <p
                            className="mt-1.5 text-slate-900"
                            dangerouslySetInnerHTML={{
                              __html: workshop.boldEnding,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
      <FlowLayout data={methodologies} />

      {/* 4. WORKSHOP IMPACT & HIGHLIGHTS */}
      <section className="py-10 md:py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-4 text-center">
              Workshop Impact
            </h2>

            <div className="text-slate-600 text-[16px] leading-snug space-y-3 text-center font-medium">
              <p>
                MyPeegu parenting workshops are designed to be{" "}
                <strong className="text-slate-800">
                  interactive, reflective, and practical
                </strong>
                , allowing parents to connect psychological insights with
                real-life family situations.
              </p>

              <p>
                Across schools and parent communities where these workshops have
                been conducted, feedback has consistently highlighted the
                clarity, relevance, and applicability of the sessions.
              </p>

              <p className="text-[16px] text-slate-600 font-medium">
                <strong className="text-slate-800">
                  On average, MyPeegu parenting workshops have received a
                  participant rating of 4.8 out of 5
                </strong>
                , reflecting the value parents experience in strengthening their
                understanding of child development and family relationships.
              </p>

              <div className="pt-2 flex flex-col items-center">
                <p className="bg-[#FFF8B0] px-4 py-1.5 rounded-md font-medium inline-block w-full sm:w-auto shadow-sm">
                  Additional modules are curated based on school context and
                  parental needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SIGN UP FORM SECTION */}
      <section className="py-10 md:py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F0F7FF] rounded-3xl shadow-lg border border-slate-100 p-6 md:p-10"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#0066CC] mb-2">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-lg font-medium">
                Let us know how we can help your school community.
              </p>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input placeholder="Your Name" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Email ID" type="email" />
              <Input placeholder="Subject" />

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="md:col-span-2 p-3.5 rounded-xl bg-white border border-slate-200 focus:border-[#337AB7] focus:ring-2 focus:ring-[#337AB7]/20 outline-none resize-none transition"
              />

              <div className="md:col-span-2 flex justify-center mt-2">
                <Button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-3.5"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="p-3.5 rounded-xl bg-white border border-slate-200 focus:border-[#337AB7] focus:ring-2 focus:ring-[#337AB7]/20 outline-none transition w-full"
  />
);

const ListItem = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <CheckCircle2 className="text-[#0066cc] shrink-0 mt-0.5" size={18} />
    <span className="text-slate-700 font-medium text-[16px]">{text}</span>
  </div>
);

export default Parents;
