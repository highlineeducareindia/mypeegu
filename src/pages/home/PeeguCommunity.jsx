
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck } from 'lucide-react';

const staticCards = [
  {
    id: 1,
    type: 'text',
    title: 'Ms. Aditi Gupta',
    content: 'What a great piece! The same needs to be followed by adults at home during exams. We need to be mindful of our language, energy, and stress levels around children. I loved the part about “your last words linger the most”. I will definitely be more careful about my parting words when I drop my child to school during exams. Thank you for sharing such thoughtful guidance.',
    color: 'bg-white'
  },
  {
    id: 2,
    type: 'text',
    title: 'Ms. Meera Krishnan',
    content: 'Our class has never sat this attentively or participated this openly in any other session. Today truly felt different. The activities and discussions made the entire session engaging and meaningful for students.',
    color: 'bg-white'
  },
  {
    id: 3,
    type: 'text',
    title: 'Mr. Rahul Menon',
    content: 'We had many doubts about identity and orientation but never really got a safe space to ask questions. In this workshop, we were able to openly ask and receive proper clarity. It created a safe and respectful space for discussion.',
    color: 'bg-white'
  },
  {
    id: 4,
    type: 'text',
    title: 'Ms. Lakshmi Narayanan',
    content: 'Thank you for taking the time to support my daughter. I truly appreciate the space you are providing for children to express their feelings openly. At home we are gently focusing on helping her become emotionally strong, confident, and comfortable expressing herself calmly. Please feel free to let me know if there are any general strategies you recommend we reinforce at home.',
    color: 'bg-white'
  },
  {
    id: 5,
    type: 'text',
    title: 'Ms. Pooja Singh',
    content: 'I would like to extend my sincere appreciation to MyPeegu for their thorough assessment and the remarkable way the team keeps every detail at their fingertips. They demonstrated commendable knowledge of the assessment and explained clearly how such evaluations are conducted within the school setting while safeguarding the student. Their professional expertise and empathetic approach reflect their dedication to the well-being of our students.',
    color: 'bg-white'
  },
  {
    id: 6,
    type: 'text',
    title: 'Ms. Sneha Verma',
    content: 'Dear team, I would like to extend my sincere appreciation to Mr. Thilak Gowda and the Peegu Team for delivering the workshop “Be a Buddy and Not a Bully”. The pedagogical approach used to address bullying for Grade 6 students was both innovative and highly immersive. Your success in fostering a participatory environment is a testament to the team’s hard work. Well done.',
    color: 'bg-white'
  },
  {
    id: 7,
    type: 'text',
    title: 'Ms. Priya Nair',
    content: 'We extend our sincere appreciation to the Peegu team for delivering the “Be a Buddy, Not a Bully” workshop. The pedagogical approach used to address bullying among Grade 6 students was both innovative and highly immersive. The team’s ability to foster a participatory and engaging learning environment truly reflects their dedication and expertise.',
    color: 'bg-white'
  },
  {
    id: 8,
    type: 'text',
    title: 'Ms. Kavya Reddy',
    content: 'The session reinforced the importance of putting the child first in all aspects of teaching. It reminded me that being an ideal teacher means prioritizing students emotional and academic needs and practicing empathy in everyday classroom interactions. While I already strive to follow these principles, the session was eye-opening and encouraged deeper self-reflection and continuous improvement as an educator.',
    color: 'bg-white'
  },
  {
    id: 9,
    type: 'text',
    title: 'Ms. Ananya Iyer',
    content: 'The session on recognizing and responding to early behavioral patterns was very informative and practical. It highlighted the importance of spotting early signs and supporting student well-being in a timely manner.',
    color: 'bg-white'
  },
  {
    id: 10,
    type: 'text',
    title: 'Ms. Neha Sharma',
    content: 'Very impressive and thoughtfully delivered by the MyPeegu team. The session was engaging, relevant, and provided actionable strategies that we can implement immediately in our classrooms.',
    color: 'bg-white'
  }
];

const InfiniteRow = ({ items, direction }) => {
  const isLeft = direction === 'left';
  if (!items || items.length === 0) return null;

  return (
    <div className="relative flex overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <motion.div 
        className="flex flex-nowrap gap-4 md:gap-6 shrink-0 px-2"
        animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ 
          duration: items.length * 6, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className={`
              w-[280px] h-[220px]       /* Mobile size */
              md:w-[320px] md:h-[260px] /* Desktop size */
              rounded-[30px] md:rounded-[40px] 
              p-5 md:p-7
              shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
              border border-white shrink-0 
              flex flex-col justify-center 
              transition-transform hover:scale-105 duration-300 
              ${item.color}
            `}
          >
            {item.type === 'text' ? (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066CC]">
                      <UserCheck size={20} className="md:size-[24px]" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm md:text-base font-bold text-slate-800 tracking-tight">{item.title}</h3>
                      </div>
                      <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Educator</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] font-medium italic line-clamp-4 tracking-tight">
                    "{item.content}"
                  </p>
                </div>
                <div className="flex justify-end">
                  <Heart size={16} className="text-rose-400 fill-rose-400" />
                </div>
              </div>
            ) : (
              <img 
                src={item.url} 
                alt="community" 
                className="w-full h-full object-cover rounded-[24px] md:rounded-[20px] pointer-events-none" 
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CommunitySection = () => {
  const topRowItems = staticCards.slice(0, 5);
  const bottomRowItems = staticCards.slice(5, 10);

  return (
    <section className="relative bg-[#F7FAFF] py-10 md:py-10 overflow-hidden w-full flex flex-col items-center">
      {/* Responsive Background Decor */}
      <div className="absolute top-10 left-[5%] text-blue-100 rotate-12 pointer-events-none select-none hidden sm:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" />
        </svg>
      </div>

      {/* Heading - Fluid Typography */}
      <div className="relative z-10 text-center mb-8 md:mb-8 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-3xl md:text-4xl font-[1000] text-[#1a365d] tracking-tight leading-[1.1]"
        >
          Our community is our <br className="hidden sm:block" /> 
          <span className="text-[#0066CC]"> superpower</span>
        </motion.h2>
      </div>

      {/* Infinite Scrolling Rows */}
      <div className="w-full space-y-2 md:space-y-4">
        <InfiniteRow items={topRowItems} direction="right" />
        <InfiniteRow items={bottomRowItems} direction="left" />
      </div>
    </section>
  );
};

export default CommunitySection;