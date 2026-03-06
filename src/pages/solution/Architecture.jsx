import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../../config/api";

import FlowLayout from "../../components/FlowLayout";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";

const Architecture = () => {
  const [pageData, setPageData] = useState(null);
  const [methodologies, setMethodologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.ARCHITECTURE)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setPageData(result.config);
          
          // Map DB keys to FlowLayout expected props
          const formattedMethodologies = result.methodologies.map(m => ({
            title: m.title,
            desc: m.description,
            image: m.image_url,
            tag: m.tag,
            color: m.color_hex
          }));
          setMethodologies(formattedMethodologies);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Architecture data:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-white">Loading Architecture Data...</div>;
  }

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
        image={pageData.hero_image}
      />
      
      {/* The Flow Layout displaying the new pillars */}
      {methodologies.length > 0 && <FlowLayout data={methodologies} />}
      
      <CTASection />
    </div>
  );
};

export default Architecture;