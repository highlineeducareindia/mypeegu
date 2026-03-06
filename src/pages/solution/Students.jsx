import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../../config/api";

import FlowLayout from "../../components/FlowLayout";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import HolisticProfiling from "./HolisticProfiling";
import StructuredSEL from "./StructuredSEL";

const Students = () => {
  const [pageData, setPageData] = useState(null);
  const [methodologies, setMethodologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.STUDENTS_PAGE)
      .then(res => res.json())
      .then(result => {
        if(result.success) {
          setPageData(result.config);
          
          // Map DB keys to FlowLayout expected props
          const formattedMethodologies = result.methodologies.map(m => ({
            title: m.title,
            desc: m.description, // Will automatically pass string OR array based on API smart logic
            image: m.image_url,
            tag: m.tag,
            color: m.color_hex
          }));
          setMethodologies(formattedMethodologies);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Students page data:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-white">Loading Student Pathways...</div>;
  }

  return (
    <div className="bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. DYNAMIC HERO SECTION */}
      <HeroSection
        badge={pageData.hero_badge}
        title={pageData.hero_title}
        highlight={pageData.hero_highlight}
        description={pageData.hero_desc}
        buttonText={pageData.hero_btn}
        image={pageData.hero_image}
      />
      <HolisticProfiling />
      <StructuredSEL/>

      {/* 2. THE FLOW LAYOUT */}
      {methodologies.length > 0 && <FlowLayout data={methodologies} />}

      {/* 3. CTA SECTION */}
      <CTASection />

    </div>
  );
};

export default Students;