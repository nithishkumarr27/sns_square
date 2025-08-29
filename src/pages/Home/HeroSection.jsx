import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] relative">
      <div 
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[802px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
      >
        <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[27px] sm:gap-[40px] md:gap-[54px] justify-start items-center w-full text-center">
            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-sora font-semibold leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[80px] text-center text-global-1 w-full">
              <span className="text-global-1">We partner with you in your </span>
              <span className="text-global-5">Agentic Solution</span>
              <span className="text-global-1"> Journey.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] text-center text-global-1 w-full max-w-[800px]">
              We help forward-looking companies unlock value with agentic solutions powered by AI, data intelligence, and scalable platforms.
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="medium"
              className="rounded-[26px] px-6 py-[14px] text-base font-semibold"
              onClick={() => {}}
            >
              Start Your Agentic Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;