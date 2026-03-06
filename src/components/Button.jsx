import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 font-bold text-white transition-all duration-500 rounded-full group overflow-hidden bg-[#0066cc] shadow-sm shadow-blue-200 active:scale-95 ${className}`}
    >
      {/* Liquid Layer */}
      <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-y-full bg-[#004d99] group-hover:translate-y-0" />
      
      {/* Subtle "Wave" Animation (Optional) */}
      <span className="absolute inset-0 w-full h-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full opacity-0 group-hover:opacity-100" />

      {/* Button Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;