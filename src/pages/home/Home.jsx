import React from "react";
import HeroSection from "./HeroSection";
import CommunitySection from "./PeeguCommunity";
import FeaturedOn from "./FeaturedOn";
import AwardsSection from "./Award";
import ImpactSection from "./StatSection";
import Cardsection from "./Cardsection";
import GallerySection from "./GallerySection";
import CorePositioning from "./PhilosophySection";
import CTASection from "../../components/CTASection";
import OnPage from "../../components/OnPage";
import Landing from "./Landing";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden ">
      <OnPage
        title="Home"
        description="MyPeegu helps schools build student wellbeing through structured programs and tools."
        keywords="student wellbeing, schools, education, MyPeegu"
        url="https://www.mypeegu.com/"
        image="https://www.mypeegu.com/og-image.png"
      />
      {/* Hero Section with Interactive Cards */}
      <HeroSection />
      <ImpactSection />
      <GallerySection />
      <Landing />
      <Cardsection />
      <FeaturedOn />
      <AwardsSection />
      <CorePositioning />
      <CommunitySection />
      <CTASection />
    </div>
  );
};

export default Home;
