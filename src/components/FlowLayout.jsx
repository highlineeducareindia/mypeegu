import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FlowLayout = ({ data }) => {
  return (
    <section className="py-10 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-start gap-12 lg:gap-10`}
          >
            {/* Image (No Background, No Border) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              {/* Container se style aur padding hata di gayi hai */}
              <div className="w-full md:w-[600px] h-auto overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-auto aspect-[16/10] object-cover rounded-2xl shadow-lg"
                  alt={item.title}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-[2px] w-8"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="font-bold uppercase tracking-widest text-xs"
                  style={{ color: item.color }}
                >
                  {item.tag}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-[#1a365d]">
                {item.title}
              </h2>

              {Array.isArray(item.desc) ? (
                <ul className="space-y-1 text-slate-600 leading-relaxed text-lg">
                  {item.desc.map((point, i) => (
                    <li key={i}>
                      <strong className="text-slate-900">
                        {point.heading}:
                      </strong>{" "}
                      {point.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <div
                 className="text-slate-500 text-md font-medium leading-relaxed
[&_ul]:list-disc [&_ul]:pl-6"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlowLayout;
