import React from 'react';

const ChallengeSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(46deg,#e0e9fb_0%,_#fcfdfe_100%)] rounded-[32px] mt-[60px] sm:mt-[100px] md:mt-[150px] lg:mt-[200px] mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 py-[100px] sm:py-[150px] md:py-[200px] lg:py-[234px]">
        <div className="flex flex-col gap-[69px] sm:gap-[100px] md:gap-[138px] justify-start items-center w-full">
          {/* First Section */}
          <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 justify-start items-start w-full lg:w-[58%]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-sora font-semibold leading-[36px] sm:leading-[48px] md:leading-[58px] text-left text-global-1 w-full lg:w-[98%]">
                The Biggest Challenge for Modern Enterprises is Mastering Complexity
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[22px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[26px] text-left text-global-2 w-full lg:w-[78%] mt-4">
                Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
              </p>
            </div>
            <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_image_12.png" 
                alt="Business Complexity Illustration" 
                className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[534px] h-auto"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 justify-start items-start w-full lg:w-[58%]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-sora font-semibold leading-[36px] sm:leading-[44px] md:leading-[52px] text-left text-global-1 w-full lg:w-[94%]">
                Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[22px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[26px] text-left text-global-2 w-full lg:w-[74%] mt-4">
                The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
              </p>
            </div>
            <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_security_concep.png" 
                alt="Agentic Business Blueprint" 
                className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[520px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;