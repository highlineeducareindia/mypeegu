

// import { motion } from "framer-motion";
// import Button from "./Button";
// import { useNavigate } from "react-router-dom";

// const HeroSection = ({ badge, title, highlight, description, buttonText }) => {
//   const navigate = useNavigate();
//   return (

//     <section className="relative h-[350px] flex items-center bg-[#fdfdfd] overflow-hidden">
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BAE6FD]/30 -skew-x-12 translate-x-20 hidden lg:block" />
//       <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E0F2FE]/40 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
//         <div className="flex flex-col items-center text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-4 max-w-6xl"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-md border border-slate-100 ">
//               <span className="flex gap-1 items-center">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#FFB300]" />
//               </span>
//               {/* <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ">
//                 {badge}
//               </span> */}
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a365d] leading-tight uppercase">
//               {title} <span className="text-[#0066cc]">{highlight}</span>
//             </h1>

//             <p className="text-slate-600 mx-auto font-medium max-w-2xl">{description}</p>

//             {/* <div className="pt-2">
//               <Button
//                 onClick={() => navigate("/contact")}
//                 className="px-8 py-3.5 rounded-full bg-[#1E88E5] text-white hover:bg-[#1565C0] hover:scale-105 transition"
//               >
//                 {buttonText}
//               </Button>
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { motion } from "framer-motion";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ badge, title, highlight, description, buttonText }) => {
  const navigate = useNavigate();
  return (
    // Changes made here: Replaced h-[350px] with min-h-[350px] and added py-12 md:py-16
    <section className="relative min-h-[350px] py-12 md:py-16 flex items-center bg-[#fdfdfd] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BAE6FD]/30 -skew-x-12 translate-x-20 hidden lg:block" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E0F2FE]/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-6xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-md border border-slate-100 ">
              <span className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFB300]" />
              </span>
              {/* <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ">
                {badge}
              </span> */}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a365d] leading-tight uppercase">
              {title} <span className="text-[#0066cc]">{highlight}</span>
            </h1>

            <p className="text-slate-600 mx-auto font-medium max-w-2xl">{description}</p>

            {/* <div className="pt-2">
              <Button
                onClick={() => navigate("/contact")}
                className="px-8 py-3.5 rounded-full bg-[#1E88E5] text-white hover:bg-[#1565C0] hover:scale-105 transition"
              >
                {buttonText}
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
