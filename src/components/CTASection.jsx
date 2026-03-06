import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-10 px-4">
      <div className="mx-auto max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:py-14 lg:px-20 p-8 sm:p-10 rounded-3xl 
                     bg-gradient-to-r from-[#0066CC] to-[#004C99] 
                     flex flex-col lg:flex-row 
                     items-center justify-between gap-8 shadow-xl"
        >
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Connect with us
            </h2>
            <p className="text-base sm:text-lg text-blue-50/90">
              Contact us with any query or any idea.
            </p>
          </motion.div>

          {/* Button Section */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white rounded-full 
                       shadow-lg text-base sm:text-lg 
                       text-[#0066CC] font-semibold 
                       py-3 sm:py-4 px-6 sm:px-8 
                       transition-all duration-300 group"
          >
            Get In Touch
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#0066CC" 
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#E13928] transition-colors"
              />
            </motion.svg>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;