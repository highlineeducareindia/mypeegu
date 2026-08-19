import { motion } from "framer-motion";
import {
  FaStar,
  FaGraduationCap,
  FaPersonChalkboard,
  FaUsers,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Teacher",
      route: "/solution/educator-excellence",
      icon: <FaPersonChalkboard />,
      lightColor: "bg-red-50",
      textColor: "text-[#FF4D4D]",
    },
    {
      id: 2,
      name: "Parent",
      route: "/solution/parent-partnership",
      icon: <FaUsers />,
      lightColor: "bg-blue-50",
      textColor: "text-[#0066CC]",
    },
    {
      id: 3,
      name: "Student",
      route: "/solution/student-development",
      icon: <FaGraduationCap />,
      lightColor: "bg-yellow-50",
      textColor: "text-[#FFB800]",
    },
  ];

  const heroData = {
    heading1: "Human-Centered Psychology.",
    heading2: "AI-Enhanced Precision.",
  };

  return (
    <div className="bg-[#fcfdfe] overflow-x-hidden">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center px-4 py-10 md:py-16">
        {/* Background Decorative Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-5 text-red-100 opacity-40"
          >
            {/* Star size also scales with screen */}
            <FaStar size="clamp(60px, 10vw, 120px)" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-5 right-5 text-blue-100 opacity-40"
          >
            <FaStar size="clamp(80px, 15vw, 160px)" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 px-2">
          <motion.h1 className="text-[clamp(2.2rem,6vw,4rem)] font-[900] text-[#1a365d] mb-6 leading-[1.1] tracking-tight">
            {heroData.heading1} <br />
            <span className="text-[#0066cc] inline-block mt-2">
              {heroData.heading2}
            </span>
          </motion.h1>
          <motion.div className="w-full max-w-[90rem] mx-auto mb-8 px-2 space-y-2.5">
            <p className="whitespace-nowrap text-center text-slate-600 font-medium leading-none text-[clamp(0.58rem,1.42vw,1.125rem)]">
              MyPeegu brings together psychology, SEL frameworks, and intelligent systems to support emotionally intelligent schools.
            </p>
            <p className="whitespace-nowrap text-center text-slate-600 font-medium leading-none text-[clamp(0.58rem,1.42vw,1.125rem)]">
              <strong>AI</strong> helps identify early behavioural patterns, organise insights, and simplify documentation for educators and counsellors.
            </p>
            <p className="whitespace-nowrap text-center text-slate-600 font-medium leading-none text-[clamp(0.58rem,1.42vw,1.125rem)]">
              <strong>Human</strong> professionals remain at the centre — guiding care, interpretation, and meaningful student support.
            </p>
          </motion.div>

          {/* Categories Scaling */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 pb-6">
            {categories.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(item.route)}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer rounded-[2rem] md:rounded-[3.5rem] border-2 md:border-3 flex flex-col items-center justify-center p-3 transition-all duration-300 bg-white border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#0066cc] w-[clamp(100px,25vw,180px)] h-[clamp(110px,25vw,180px)]"
              >
                <div
                  className={`rounded-2xl md:rounded-[2rem] flex items-center justify-center transition-all duration-500 w-[clamp(40px,10vw,64px)] h-[clamp(40px,10vw,64px)] text-[clamp(1.2rem,3vw,2rem)] ${item.textColor} ${item.lightColor}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-black uppercase tracking-tight mt-3 text-[clamp(0.6rem,1.5vw,0.85rem)] text-gray-500">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
