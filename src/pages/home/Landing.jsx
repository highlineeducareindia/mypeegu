
import React from 'react';

// Local Feature Images Imports (Aapke VS Code folder ke mutabiq)
import img1 from "../../assets/feature/img1.png";
import img2 from "../../assets/feature/img2.png";
import img3 from "../../assets/feature/img3.png";
import img4 from "../../assets/feature/img4.png";

/* ─── 1. Dotted Loop Connector ─── */
const LoopConnector = ({ flip = false }) => {
  const path = flip
    ? `M 1200 30 C 900 -20, 600 80, 400 140 C 200 200, 100 130, 120 80 C 140 30, 200 20, 240 60 C 280 100, 260 170, 180 200 C 80 240, -50 280, -100 340`
    : `M 0 30 C 300 -20, 600 80, 800 140 C 1000 200, 1100 130, 1080 80 C 1060 30, 1000 20, 960 60 C 920 100, 940 170, 1020 200 C 1120 240, 1250 280, 1300 340`;

  return (
    <div className="relative h-[180px] -my-[15px] pointer-events-none overflow-hidden z-0">
      <svg width="100%" height="100%" viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid meet" className="overflow-hidden">
        <path d={path} fill="none" stroke="#d0dce8" strokeWidth="2.5" strokeDasharray="10 12" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/* ─── 2. Section Wrapper ─── */
const SectionWrapper = ({ imageSrc, title, description, icon, imageLeft = true, bgColor = "bg-white" }) => {
  return (
    <section className={`relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-32 ${bgColor}`}>
      {/* Image Container */}
      <div className={`relative z-20 w-full md:w-1/2 flex justify-center mb-8 md:mb-0 ${imageLeft ? 'order-1' : 'order-1 md:order-2'}`}>
        <img 
          src={imageSrc} 
          alt="feature" 
          className="max-w-[90%] md:max-w-[550px] h-auto object-contain drop-shadow-lg" 
        />
      </div>

      {/* Text Container */}
      <div className={`w-full md:w-1/2 ${imageLeft ? 'md:pl-16 order-2' : 'md:pr-16 order-2 md:order-1'}`}>
        <div style={icon.style} className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg text-white">
          {icon.svg}
        </div>
        
        <h2 className="text-3xl md:text-3xl font-extrabold text-[#1a365d] leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-slate-600 leading-relaxed text-[17px] max-w-md">
          {description}
        </p>
      </div>
    </section>
  );
};

/* ─── 3. SVG Icons ─── */
const Icons = {
  chat: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V9h14v12zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
};

/* ─── 4. Exact Static Content ─── */
const staticFeatures = [
  {
    id: 1,
    image_url: img1,
    title: "Building Emotionally Intelligent Learners",
    description: "Our SEL framework helps students understand emotions, manage challenges, and develop healthy relationships. Through a structured four-year progression, children gradually strengthen awareness, regulation, responsibility, and purpose. Interactive sessions and real-life applications make these skills part of everyday school life. Students grow into thoughtful individuals capable of making responsible and compassionate choices.",
    icon_bg: "#3b82f6",
    icon_svg: Icons.chat,
  },
  {
    id: 2,
    image_url: img2,
    title: "Understand Behaviour— Earlier",
    description: "MyPeegu's intelligent system helps schools identify emotional and behavioural patterns before they escalate. Structured insights support educators in guiding SEL learning, targeted interventions, and student growth. AI organises the data—while counsellors and educators shape the journey.",
    icon_bg: "#f97316",
    icon_svg: Icons.image,
  },
  {
    id: 3,
    image_url: img3,
    title: "Guided Interventions— When It Matters Most",
    description: "Our psychoeducational workshops and guided interventions help schools address emotional, behavioural, and developmental challenges with clarity and care. Students, educators, and parents receive structured guidance from trained MyPeegu experts. Each program is aligned with the school's SEL pathway and behavioural insights. Together, these interventions strengthen emotional resilience across the entire school ecosystem.",
    icon_bg: "#8b5cf6",
    icon_svg: Icons.calendar,
  },
  {
    id: 4,
    image_url: img4,
    title: "Secure Insights<br />Responsible Governance.",
    description: "MyPeegu organises behavioural observations, SEL progress, and intervention data into meaningful institutional insights. Sensitive student information is protected through secure data systems and carefully governed access. Leadership teams gain clarity on developmental trends and intervention outcomes while maintaining strict confidentiality standards. With responsible governance and secure technology, schools can act on insights while safeguarding student trust.",
    icon_bg: "#ef4444",
    icon_svg: Icons.shield,
  },
];

export default function Landing() {
  return (
    <div className="font-sans antialiased bg-white overflow-x-hidden max-w-7xl mx-auto py-16 overflow-hidden">
      {staticFeatures.map((feature, index) => {
        const isImageLeft = index % 2 === 0;
        const showConnector = index < staticFeatures.length - 1;
        const isFlipped = !isImageLeft;

        return (
          <React.Fragment key={feature.id}>
            <SectionWrapper 
              imageSrc={feature.image_url}
              title={feature.title}
              description={feature.description}
              icon={{ 
                style: { backgroundColor: feature.icon_bg }, 
                svg: feature.icon_svg
              }}
              imageLeft={isImageLeft}
            />
            {showConnector && <LoopConnector flip={isFlipped} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}