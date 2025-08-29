import React from 'react';

const TechSolutionsSection = () => {
  return (
    <section className="w-full mt-[40px] sm:mt-[60px] md:mt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1224px] mx-auto">
        {/* Section Title */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-sora font-semibold leading-[36px] sm:leading-[44px] md:leading-[52px] text-left text-global-1 mb-4">
          <span className="text-global-5">Not Just Tech.</span>
          <br />
          <span className="text-global-7">Agentic Solutions That Deliver.</span>
        </h2>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full mt-8">
          {/* Left Side - Main Image */}
          <div className="w-full lg:w-[66%] relative">
            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#bccff74c_50%,_#dfe9fb_100%)] border border-[#e3e0e0] rounded-[16px] p-4 sm:p-6 md:p-8">
              <div className="relative">
                <img 
                  src="/images/img_image_11.png" 
                  alt="Agentic Solutions Technology" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-[25px] sm:top-[40px] md:top-[50px] left-[13px] sm:left-[20px] md:left-[26px]">
                  <h3 className="text-[20px] sm:text-[26px] md:text-[32px] font-sora font-semibold leading-[26px] sm:leading-[34px] md:leading-[41px] text-left text-global-7 mb-2 sm:mb-4">
                    Redefining Solutions in the Agentic Era
                  </h3>
                  <p className="text-sm sm:text-base font-inter font-normal leading-[17px] sm:leading-[19px] text-left text-global-8 w-[84%]">
                    We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="w-full lg:w-[32%] flex flex-col gap-5 justify-start items-center">
            {/* Innovation at Core Card */}
            <div className="bg-global-4 rounded-[16px] p-6 sm:p-7 w-full">
              <div className="flex flex-col gap-2 justify-start items-start w-full">
                <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-sora font-semibold leading-[26px] sm:leading-[28px] md:leading-[31px] text-left text-global-4">
                  Innovation at Core
                </h4>
                <p className="text-sm sm:text-base font-inter font-normal leading-[17px] sm:leading-[19px] text-left text-global-8 w-[96%]">
                  We constantly evolve, experiment, and push boundaries, bringing you future-ready solutions that stay ahead of change.
                </p>
              </div>
            </div>

            {/* AI-Only Engineering Card */}
            <div className="bg-global-3 rounded-[16px] p-4 sm:p-5 w-full">
              <div className="flex flex-col gap-[14px] justify-center items-center w-full">
                <div className="flex flex-row justify-between items-start w-full">
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-sora font-semibold leading-[26px] sm:leading-[28px] md:leading-[31px] text-left text-global-4">
                    AI-Only Engineering
                  </h4>
                  <img 
                    src="/images/img_vector.svg" 
                    alt="AI Engineering Icon" 
                    className="w-[58px] sm:w-[80px] md:w-[116px] h-[62px] sm:h-[85px] md:h-[124px]"
                  />
                </div>
                <p className="text-sm sm:text-base font-inter font-normal leading-[17px] sm:leading-[19px] text-left text-global-8 w-[92%]">
                  We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsSection;