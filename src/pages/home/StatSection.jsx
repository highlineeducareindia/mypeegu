import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  UserCheck,
  Users,
  GraduationCap,
  Building2,
  UserCog,
} from "lucide-react";

const headerData = {
  badge_text: "OUR IMPACT",
  main_heading: "Trusted by",
  highlight_text: "Thousands Worldwide",
};

const statsData = [
  {
    id: 1,
    icon: UserCheck,
    number_value: 20000,
    label: "TEACHERS",
    gradient_class: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    icon: Users,
    number_value: 250000,
    label: "PARENTS",
    gradient_class: "from-amber-400 to-amber-500",
  },
  {
    id: 3,
    icon: GraduationCap,
    number_value: 750000,
    label: "STUDENTS",
    gradient_class: "from-red-400 to-rose-500",
  },
  {
    id: 4,
    icon: Building2,
    number_value: 750,
    label: "SCHOOLS",
    gradient_class: "from-emerald-400 to-teal-500",
  },
  {
    id: 5,
    icon: UserCog,
    number_value: 140,
    label: "COUNSELLORS & SPECIAL EDUCATORS",
    gradient_class: "from-sky-400 to-blue-500",
  },
];

const StatSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-10 bg-[#F8FAFC] overflow-hidden">
      {/* Soft Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest text-[#FEBF48] uppercase bg-blue-50/50 rounded-full border border-blue-100/50"
          >
            {headerData.badge_text}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight leading-tight px-2"
          >
            {headerData.main_heading} <br className="block md:hidden" />
            <span className="text-[#0066CC] pl-1">
              {headerData.highlight_text}
            </span>
          </motion.h2>
        </div>

        {/* Grid (5 Cards) */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6"
        >
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative group ${
                  index === statsData.length - 1 && statsData.length % 2 !== 0
                    ? "col-span-2 md:col-span-1"
                    : ""
                }`}
              >
                <div className="h-full bg-white/70 backdrop-blur-md border border-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group-hover:bg-white flex flex-col items-center text-center">
                  {/* ICON CONTAINER */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${stat.gradient_class} text-white mb-4 md:mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className="w-6 h-6 md:w-7 md:h-7"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">
                      {inView && (
                        <CountUp
                          end={stat.number_value}
                          duration={2.5}
                          separator=","
                          suffix="+"
                        />
                      )}
                    </h3>
                    <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight mt-1">
                      {stat.label}
                    </p>
                  </div>

                  {/* Bottom aesthetic line */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r ${stat.gradient_class} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatSection;