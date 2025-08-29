import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import ChallengeSection from './ChallengeSection';
import SolutionsSection from './SolutionsSection';
import IndustriesSection from './IndustriesSection';
import TechSolutionsSection from './TechSolutionsSection';
import ProvenResultsSection from './ProvenResultsSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div className="w-full bg-global-7">
      <Header />
      <main className="w-full">
        <HeroSection />
        <FeatureCards />
        <ChallengeSection />
        <SolutionsSection />
        <IndustriesSection />
        <TechSolutionsSection />
        <ProvenResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;