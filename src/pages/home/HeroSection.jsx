import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <div className="bg-[#fcfdfe] overflow-x-hidden">
      <section className="relative w-full min-h-[85vh] flex items-center justify-center px-4 py-10 md:py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-5 text-red-100 opacity-40"
          >
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

        <div className="max-w-4xl mx-auto text-center relative z-10 px-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2.4rem,7vw,4.5rem)] font-[900] text-[#0066cc] mb-4 leading-none tracking-tight"
          >
            MyPeegu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[clamp(1.5rem,4vw,2.35rem)] font-[800] text-[#1a365d] mb-5 leading-tight tracking-tight"
          >
            Psychology-led care for emotionally intelligent schools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="text-[clamp(1rem,2.2vw,1.15rem)] text-slate-600 mx-auto max-w-2xl mb-8 font-medium leading-relaxed"
          >
            Human insight first. AI assists educators and counsellors with early
            patterns, clearer documentation, and stronger student support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4"
          >
            <Link to="/our-approach">
              <Button className="!px-7 !py-3">Explore Our Approach</Button>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-[#0066cc] border-2 border-[#0066cc] hover:bg-blue-50 transition-colors"
            >
              Connect With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
