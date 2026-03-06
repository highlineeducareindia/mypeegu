import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import Button from "./Button";

const Header = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExplorerOpen, setMobileExplorerOpen] = useState(false);
  const location = useLocation();
  const isSolutionsActive = location.pathname.startsWith("/solution");

  // Updated Nav Links as per Word File
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Institutional Architecture", href: "/institutional-architecture" },
    { name: "Careers & Community", href: "/careers-community" },
    { name: "Connect With Us", href: "/contact" },
  ];

  const explorerLinks = [
    {
      name: "Student Development",
      href: "/solution/student-development",
      icon: GraduationCap,
    },
    {
      name: "Educator Excellence",
      href: "/solution/educator-excellence",
      icon: Users,
    },
    {
      name: "Parent Partnership",
      href: "/solution/parent-partnership",
      icon: HeartHandshake,
    },
    //     {
    //   name: "Institutional Architecture",
    //   href: "/solution/architecture",
    //   icon: Building2,
    // }
  ];

  const activeClass = "text-[#0066cc] border-b-2 border-[#0066cc]";
  const inactiveClass = "text-[#1a2b4b] hover:text-[#0066cc]";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-[92%] lg:max-w-[90%] xl:max-w-[88%] 2xl:max-w-[90%] mx-auto px-3 sm:px-4 lg:px-3 xl:px-6 2xl:px-8 py-3 flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
        <NavLink
          to="/"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="My Peegu"
            className="h-11 sm:h-12 lg:h-11 xl:h-14 2xl:h-16 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-6 2xl:space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `font-bold text-[15px] xl:text-base pb-1 transition-all whitespace-nowrap ${isActive ? activeClass : inactiveClass}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Explorer (Solutions) Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsExplorerOpen(true)}
            onMouseLeave={() => setIsExplorerOpen(false)}
          >
            <button
              className={`flex items-center space-x-1 font-bold text-[15px] xl:text-base pb-1 transition-colors whitespace-nowrap ${
                isSolutionsActive
                  ? activeClass
                  : isExplorerOpen
                    ? "text-[#0066cc]"
                    : "text-[#1a2b4b] hover:text-[#0066cc]"
              }`}
            >
              <span>Solutions</span>
              <motion.div animate={{ rotate: isExplorerOpen ? 180 : 0 }}>
                <ChevronDown size={18} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isExplorerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 xl:w-72 bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 mt-2"
                  style={{ zIndex: 9999 }}
                >
                  {explorerLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-5 xl:px-6 py-3 font-semibold ${isActive ? "bg-blue-50 text-[#0066cc]" : "text-[#1a2b4b] hover:bg-gray-50"}`
                        }
                      >
                        <Icon size={18} /> <span>{item.name}</span>
                      </NavLink>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `font-bold text-[15px] xl:text-base pb-1 transition-all whitespace-nowrap ${isActive ? activeClass : inactiveClass}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0 ml-2 xl:ml-4">
          <Button className="!px-5 xl:!px-8 !py-2 xl:!py-3 !text-[15px] xl:!text-base">
            <NavLink
              to="https://app.mypeegu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </NavLink>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-[#1a2b4b]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer Content - Background White */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white text-[#1a2b4b] z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
            >
              {/* Drawer Header: Logo + Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#1a2b4b]"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-8">
                <div className="flex flex-col space-y-7">
                  {navLinks.slice(0, 2).map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-bold tracking-tight transition-all ${
                          isActive
                            ? "text-[#0066cc]"
                            : "text-[#1a2b4b] hover:text-[#0066cc]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}

                  {/* Solutions Accordion  */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setMobileExplorerOpen(!mobileExplorerOpen)}
                      className={`flex items-center justify-between w-full font-bold text-lg tracking-tight ${isSolutionsActive ? "text-[#0066cc]" : "text-[#1a2b4b]"}`}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${mobileExplorerOpen || isSolutionsActive ? "rotate-180 text-[#0066cc]" : "text-gray-400"}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExplorerOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 space-y-10 border-l-2 border-blue-50 flex flex-col overflow-hidden"
                        >
                          {explorerLinks.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `text-base font-bold transition-colors ${
                                  isActive
                                    ? "text-[#0066cc]"
                                    : "text-gray-500 hover:text-[#1a2b4b]"
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navLinks.slice(2).map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-bold tracking-tight transition-all ${
                          isActive
                            ? "text-[#0066cc]"
                            : "text-[#1a2b4b] hover:text-[#0066cc]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-12">
                  <Button className="w-full bg-[#0066cc] text-white py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(0,102,204,0.2)] uppercase tracking-widest text-xs">
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Drawer Footer  */}
              <div className="p-8 bg-gray-50 border-t border-gray-100">
                <p className="text-[#0066cc] text-[9px] font-black uppercase tracking-[0.25em] text-center">
                  Where Psychology Leads. AI Assists.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;