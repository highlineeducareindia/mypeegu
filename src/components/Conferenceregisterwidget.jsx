
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, QrCode } from "lucide-react";
import logo from "../assets/logo.png";

const REGISTRATION_FORM_URL = "https://opserv.in/mypeegu-form/index1.html";
const REGISTRATION_QR_IMAGE = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&data=${encodeURIComponent(
  REGISTRATION_FORM_URL
)}`;

const ConferenceRegisterWidget = () => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  // Clear timeout if the component unmounts to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    
    // Respawn the widget after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          // Reduced width to 180px and padded slightly less for a more compact look
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] w-[180px] bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 text-center"
        >
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full p-1 text-gray-500 hover:text-[#1a2b4b] hover:bg-gray-100 transition-colors shadow-sm z-10"
          >
            <X size={14} />
          </button>

          <div className="flex flex-col items-center justify-center gap-1 mb-2">
            <img src={logo} alt="My Peegu" className="h-5 w-auto object-contain" />
            <span className="text-[11px] font-black text-[#1a2b4b] leading-tight">
              Register for Conference
            </span>
          </div>

          <div className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-1.5 mb-2">
            <img
              src={REGISTRATION_QR_IMAGE}
              alt="Registration QR Code"
              // Reduced QR code size
              className="w-24 h-24 object-contain"
            />
          </div>

          <p className="text-[10px] text-gray-500 mb-2 flex items-center justify-center gap-1">
            <QrCode size={10} /> Scan QR, or tap below
          </p>

          <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="block">
            <span className="block w-full bg-[#F97316] hover:bg-orange-600 text-white text-[11px] font-bold py-2 rounded-xl transition-colors">
              Register Now
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConferenceRegisterWidget;