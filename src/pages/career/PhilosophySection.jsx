import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHandshake, FaMicrochip, FaHeartPulse } from 'react-icons/fa6';

const PhilosophySection = () => {
  const beliefs = [
    { 
      icon: <FaHeartPulse />, 
      text: "Psychology must retain its integrity.", 
      sub: "Evidence-based approach" 
    },
    { 
      icon: <FaHandshake />, 
      text: "Systems must strengthen care — not standardise it.", 
      sub: "Personalised attention" 
    },
    { 
      icon: <FaMicrochip />, 
      text: "Technology must support, not dominate.", 
      sub: "Human-centric AI" 
    }
  ];

  return (
    <section className="py-20 bg-[#1a2b4b] text-white overflow-hidden rounded-[3rem] mx-4 my-10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* --- Left Side: Heading --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <FaQuoteLeft className="text-[#0066cc] text-5xl opacity-50" />
            <h2 className="text-3xl md:text-5xl font-[900] leading-tight italic">
              We work with individuals <br />
              <span className="text-[#0066cc] not-italic text-2xl md:text-3xl block mt-2 opacity-80">
                who believe that:
              </span>
            </h2>
            <p className="text-gray-300 text-lg font-medium border-l-2 border-[#0066cc] pl-6 py-2">
              Together, we are building schools where emotional intelligence becomes a 
              <span className="text-white font-black ml-2 underline decoration-[#0066cc] decoration-4 underline-offset-4">
                lived culture
              </span> 
              rather than a theoretical concept.
            </p>
          </motion.div>

          {/* --- Right Side: Belief Cards --- */}
          <div className="w-full lg:w-1/2 space-y-4">
            {beliefs.map((belief, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-default group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0066cc]/20 text-[#0066cc] flex items-center justify-center text-xl group-hover:bg-[#0066cc] group-hover:text-white transition-colors shadow-lg">
                  {belief.icon}
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold leading-tight tracking-wide">
                    {belief.text}
                  </h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-[#0066cc] mt-1 opacity-70">
                    {belief.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;