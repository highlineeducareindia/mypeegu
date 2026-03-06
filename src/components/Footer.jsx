import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaTwitter,
  FaChevronRight
} from 'react-icons/fa';
import logo from "../assets/logo.png"; 
import { API_ENDPOINTS } from "../config/api";

const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.GLOBAL_SETTINGS)
      .then(res => res.json())
      .then(result => {
        if(result.success) setSettings(result.data);
      })
      .catch(err => console.error("Error fetching Global Settings:", err));
  }, []);

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Our Approach", path: "/our-approach" },
        { name: "Institutional Architecture", path: "/institutional-architecture" },
        { name: "Careers & Community", path: "/careers-community" },
        { name: "Contact Us", path: "/contact" }
      ]
    },
    {
      title: "Student Development",
      links: [
        { name: "Emotional Foundations", path: "/solution/student-development" },
        { name: "Regulation & Relationships", path: "/solution/student-development" },
        { name: "Reflection & Decision Making", path: "/solution/student-development" },
        { name: "Purpose & Leadership", path: "/solution/student-development" }
      ]
    },
    {
      title: "Educator Excellence",
      links: [
        { name: "Child First Approach", path: "/solution/educator-excellence" },
        { name: "Classroom Management", path: "/solution/educator-excellence" },
        { name: "Teacher Mindshift", path: "/solution/educator-excellence" },
        { name: "Trauma-Informed Classrooms", path: "/solution/educator-excellence" }
      ]
    },
    {
      title: "Parent Partnership",
      links: [
        { name: "Conscious Parenting", path: "/solution/parent-partnership" },
        { name: "Setting Boundaries", path: "/solution/parent-partnership" },
        { name: "Emotional Coaching", path: "/solution/parent-partnership" },
        { name: "Strength-Based Parenting", path: "/solution/parent-partnership" }
      ]
    }
  ];

  return (
    <footer className="bg-white pt-10 pb-4 border-t border-slate-100 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <img src={logo} alt="My Peegu" className="h-12 w-auto mb-2" />
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs font-medium">
              {settings?.footer_description || "Helping every student find their orbit and become the star they are meant to be."}
            </p>
            <div className="flex gap-3 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0066CC] hover:border-[#0066CC] transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - Alignment Fix Here */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-[0.12em]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className="relative text-slate-500 hover:text-[#0066CC] text-[14px] font-semibold transition-all duration-300 flex items-center group overflow-visible"
                    >
                      {/* Icon Container: Ye absolute hai taaki alignment kharab na kare */}
                      <span className="absolute -left-4 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 text-[#0066CC]">
                        <FaChevronRight size={8} />
                      </span>
                      {/* Text: Ye hover par icon ke liye jagah banayega */}
                      <span className="group-hover:translate-x-4 transition-transform duration-300">
                        {link.name}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-slate-100 w-full mb-4" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white transition-all duration-300">
                <FaPhoneAlt size={14} />
              </div>
              <div>
                {/* <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</span> */}
                <span className="block text-slate-800 font-bold text-sm tracking-tight">{settings?.phone || "+91 9035524865"}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#E13928] group-hover:bg-[#E13928] group-hover:text-white transition-all duration-300">
                <FaEnvelope size={14} />
              </div>
              <div>
                {/* <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Support</span> */}
                <span className="block text-slate-800 font-bold text-sm tracking-tight">{settings?.email || "hi@mypeegu.in"}</span>
              </div>
            </div>
          </div>

          <div className="text-slate-400 text-xs font-bold tracking-tight text-center md:text-right">
            {settings?.copyright_text || `© ${new Date().getFullYear()} MyPeegu. All Rights Reserved.`}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;