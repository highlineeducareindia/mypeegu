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
      <section className="relative w-full min-h-[auto] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        {/* Background Decorative Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 left-2 sm:top-10 sm:left-5 text-red-100 opacity-30 sm:opacity-40"
          >
            <FaStar className="w-12 h-12 sm:w-20 sm:h-20 lg:w-[120px] lg:h-[120px]" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-4 right-2 sm:bottom-5 sm:right-5 text-blue-100 opacity-30 sm:opacity-40"
          >
            <FaStar className="w-16 h-16 sm:w-28 sm:h-28 lg:w-[160px] lg:h-[160px]" />
          </motion.div>
        </div>

        <div className="w-full max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-[900] text-[#1a365d] mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-1">
            {heroData.heading1}
            <br />
            <span className="text-[#0066cc] inline-block mt-1 sm:mt-2">
              {heroData.heading2}
            </span>
          </motion.h1>

          <motion.div className="w-full max-w-3xl lg:max-w-5xl mx-auto mb-8 sm:mb-10 px-1 space-y-3 sm:space-y-2.5">
            <p className="text-center text-slate-600 font-medium leading-relaxed text-[0.9375rem] sm:text-base md:text-[1.05rem] lg:text-[1.125rem] lg:whitespace-nowrap lg:leading-none">
              MyPeegu brings together psychology, SEL frameworks, and intelligent
              systems to support emotionally intelligent schools.
            </p>
            <p className="text-center text-slate-600 font-medium leading-relaxed text-[0.9375rem] sm:text-base md:text-[1.05rem] lg:text-[1.125rem] lg:whitespace-nowrap lg:leading-none">
              <strong className="font-bold text-[#1a365d]">AI</strong> helps
              identify early behavioural patterns, organise insights, and
              simplify documentation for educators and counsellors.
            </p>
            <p className="text-center text-slate-600 font-medium leading-relaxed text-[0.9375rem] sm:text-base md:text-[1.05rem] lg:text-[1.125rem] lg:whitespace-nowrap lg:leading-none">
              <strong className="font-bold text-[#1a365d]">Human</strong>{" "}
              professionals remain at the centre — guiding care, interpretation,
              and meaningful student support.
            </p>
          </motion.div>

          {/* Categories — 3-up from sm; comfortable touch targets on mobile */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-8 max-w-md sm:max-w-xl md:max-w-2xl mx-auto pb-2 sm:pb-6">
            {categories.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => navigate(item.route)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative cursor-pointer rounded-2xl sm:rounded-[2rem] md:rounded-[3.5rem] border-2 border-transparent flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 min-h-[100px] sm:min-h-[130px] md:min-h-[160px] md:aspect-square transition-all duration-300 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#0066cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066cc] focus-visible:ring-offset-2"
              >
                <div
                  className={`rounded-xl sm:rounded-2xl md:rounded-[2rem] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-lg sm:text-xl md:text-3xl ${item.textColor} ${item.lightColor}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-black uppercase tracking-tight text-[0.65rem] sm:text-xs md:text-sm text-gray-500">
                  {item.name}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
