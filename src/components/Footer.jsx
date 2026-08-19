import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaTwitter,
  FaChevronRight,
  FaWhatsapp
} from 'react-icons/fa';
import logo from "../assets/MyPeeguLogo.png"; 
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
        // Added Hashes (#) to target specific sections on the page
        { name: "Emotional Foundations", path: "/solution/student-development#workshop-1" },
        { name: "Regulation & Relationships", path: "/solution/student-development#workshop-2" },
        { name: "Reflection & Decision Making", path: "/solution/student-development#workshop-3" },
        { name: "Purpose & Leadership", path: "/solution/student-development#workshop-4" }
      ]
    },
    {
      title: "Educator Excellence",
      links: [
        { name: "Child First Approach", path: "/solution/educator-excellence#workshop-1" },
        { name: "Classroom Management", path: "/solution/educator-excellence#workshop-2" },
        { name: "Teacher Mindshift", path: "/solution/educator-excellence#workshop-3" },
        { name: "Trauma-Informed Classrooms", path: "/solution/educator-excellence#workshop-5" }
      ]
    },
    {
      title: "Parent Partnership",
      links: [
        { name: "Conscious Parenting", path: "/solution/parent-partnership#workshop-1" },
        { name: "Setting Boundaries", path: "/solution/parent-partnership#workshop-2" },
        { name: "Emotional Coaching", path: "/solution/parent-partnership#workshop-3" },
        { name: "Strength-Based Parenting", path: "/solution/parent-partnership#workshop-5" }
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

          {/* Links Columns */}
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
                      <span className="absolute -left-4 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 text-[#0066CC]">
                        <FaChevronRight size={8} />
                      </span>
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
  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
    <FaWhatsapp size={16} />
  </div>
  <div>
    <a
      href={`https://wa.me/${(settings?.phone || "919035524865").replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-slate-800 font-bold text-sm tracking-tight hover:text-[#25D366]"
    >
      {settings?.phone || "+91 9035524865"}
    </a>
  </div>
</div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#E13928] group-hover:bg-[#E13928] group-hover:text-white transition-all duration-300">
                <FaEnvelope size={14} />
              </div>
              <div>
                <a
                  href="mailto:sankalp@mypeegu.in"
                  className="block text-slate-800 font-bold text-sm tracking-tight hover:text-[#E13928]"
                >
                  sankalp@mypeegu.in
                </a>
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