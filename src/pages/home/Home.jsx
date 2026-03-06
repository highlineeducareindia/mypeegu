import React from "react";
import HeroSection from "./HeroSection";

import CommunitySection from "./PeeguCommunity";
import TestimonialSection from "./TestimonialSection";
import PrivacySection from "./PrivacySection";
import FeaturedOn from "./FeaturedOn";
import AwardsSection from "./Award";
import ImpactSection from "./StatSection";
import Cardsection from "./Cardsection";
import GallerySection from "./GallerySection"
import ClassDojoSections from "./Classdojosections";
import SELJourney from "./SELJourney";
import { Section } from "lucide-react";
import DifferenceSection from "./Section";
import PhilosophySection from "./PhilosophySection";



const Home = () => {
  return (
    <div className=" font-manrope min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Interactive Cards */}
      <HeroSection />
      <ImpactSection />
      <GallerySection/>
         <ClassDojoSections  />
       <Cardsection/>
        <FeaturedOn />
  {/* <SELJourney /> */}
       <AwardsSection />
       <PhilosophySection/>
        <DifferenceSection />
      <CommunitySection />
     
      {/* <TestimonialSection /> */}
      <PrivacySection />
    </div>
  );
};

export default Home;
