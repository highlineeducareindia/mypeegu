import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});


const CorePositioning = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* CORE POSITIONING */}
        <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-6 h-[3px] rounded-full bg-[#FFB300]" />
              <div className="w-2 h-[3px] rounded-full bg-[#FFB300] opacity-40" />
            </div>
            <span className="text-[#FFB300] text-[10px] font-black uppercase tracking-[0.28em]">
              Our Philosophy
            </span>
          </div>
 
          <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-2 leading-tight">
            Core <span className="text-[#0066cc]">Positioning</span>
          </h2>

          <div className="h-1 w-20 bg-[#FFB300] rounded-full mb-6"></div>

          <div className="space-y-4 text-slate-600 leading-relaxed font-medium text-[17px]">
            {/* Statement 1 */}
            <div className="space-y-1 font-medium text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>We do not replace humans.</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>We do not automate empathy.</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>We do not reduce psychology to algorithms.</span>
              </div>
            </div>

            {/* Statement 2 */}
            <p>
              We use Artificial Intelligence as a precision support system —
              while real transformation remains deeply human.
            </p>

            {/* Statement 3 */}
            <p>
              At MyPeegu, technology is designed to support insight,
              organisation, and continuity, while human professionals lead
              interpretation, intervention, and relationship-building.
            </p>

            {/* Statement 4 */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>MyPeegu is not an app.</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>It is not automated counselling.</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0066cc] w-5 h-5 mt-1 flex-shrink-0" />
                <span>It is not event-based programming.</span>
              </div>
            </div>

            {/* Final Line */}
            <p>
              It is a{" "}
              <strong>structured, school-wide well-being architecture</strong>{" "}
              that integrates students, educators, parents, and leadership
              through a carefully designed developmental framework.
            </p>
          </div>
        </div>

        <motion.div {...fadeUp(0.1)} className="max-w-4xl mb-10">

          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-6 h-[3px] rounded-full bg-[#0066cc]" />
              <div className="w-2 h-[3px] rounded-full bg-[#0066cc] opacity-40" />
            </div>
            <span className="text-[#0066cc] text-[10px] font-black uppercase tracking-[0.28em]">
              Our Difference
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-6 leading-tight">
            What Makes Us <span className="text-[#0066cc]">Different</span>
          </h3>

          <div className=" space-y-3">
            <p className="text-slate-600 leading-relaxed font-medium text-[17px]">
              Many schools attempt to address well-being through isolated
              initiatives — a workshop here, a counselling session there, or a
              short-term campaign.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-[17px]">
              While these efforts are valuable, they often remain disconnected
              from the larger ecosystem of the school.
            </p>
          </div>
        </motion.div>
               <div className="grid md:grid-cols-2 gap-6 mb-4">

          {/* ── Traditional Model ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100"
          >
            {/* Top accent bar */}
            <div className="h-[4px] bg-gradient-to-r from-red-400 to-red-600" />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                  <XCircle className="text-red-500 w-5 h-5" />
                </div>
                <h4 className="text-xl font-black text-red-600">Traditional Model</h4>
              </div>

              <ul className="space-y-4">
                {[
                  "Isolated workshops conducted periodically",
                  "Counselling that begins only after issues escalate",
                  "Limited tracking of behavioural or emotional patterns",
                  "Lack of structured reinforcement within classrooms",
                  "Minimal alignment between school initiatives and home environments",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(0.12 + i * 0.07)}
                    className="flex gap-3 items-start text-slate-600 text-[15px]"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                      <XCircle className="text-red-400 w-3.5 h-3.5" />
                    </span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── MyPeegu Model ── */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100"
          >
            {/* Top accent bar */}
            <div className="h-[4px] bg-gradient-to-r from-[#0066cc] to-[#1a365d]" />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="text-[#0066cc] w-5 h-5" />
                </div>
                <h4 className="text-xl font-black text-[#0066cc]">MyPeegu Model</h4>
              </div>

              <ul className="space-y-4">
                {[
                  "Longitudinal SEL design embedded across the academic year",
                  "Tiered intervention framework ensuring early identification and support",
                  "Trauma-informed systems that prioritise emotional safety",
                  "Institutional governance integration through leadership review mechanisms",
                  "AI-supported pattern recognition that strengthens insights without replacing professional judgment",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(0.12 + i * 0.07)}
                    className="flex gap-3 items-start text-slate-600 text-[15px]"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="text-[#0066cc] w-3.5 h-3.5" />
                    </span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FINAL STATEMENT */}
        <div className="max-w-3xl">
          <p className="text-slate-600 leading-relaxed font-medium text-[17px]">
            In the MyPeegu ecosystem, psychology leads and technology
            strengthens delivery.
          </p>
        </div>
      </div>
      
    </section>
    
    
  );
};


export default CorePositioning;
