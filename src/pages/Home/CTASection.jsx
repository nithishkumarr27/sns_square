import React from 'react';
import Button from '../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full mt-[50px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1224px] mx-auto">
        <div 
          className="bg-[linear-gradient(180deg,#ffffff_0%,_#dfe9fb_100%)] border border-[#e3e0e0] rounded-[32px] p-6 sm:p-8 md:p-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif_414x1224.png')" }}
        >
          <div className="flex flex-col justify-center items-end w-full">
            <div className="flex flex-col justify-start items-center w-full lg:w-[74%] mt-8">
              {/* Main Heading */}
              <h2 className="text-[32px] sm:text-[42px] md:text-[54px] font-sora font-semibold leading-[40px] sm:leading-[56px] md:leading-[69px] text-center text-global-7">
                Let's Build Your Agentic Future
              </h2>

              {/* Subtitle */}
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-global-7 w-full mt-6 sm:mt-8">
                Ready to transform your business with Agentic AI, autonomous solutions? Partner with us and take the first step into the Agentic era.
              </p>

              {/* Email Input and CTA */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-global-7 rounded-[32px] p-2 sm:p-4 mt-8 sm:mt-12 gap-4 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-sm sm:text-base font-inter font-light leading-5 text-left text-global-3 bg-transparent border-none outline-none flex-1 px-4 py-2"
                />
                <Button
                  variant="primary"
                  size="medium"
                  className="rounded-[26px] px-6 py-[14px] text-base font-semibold w-full sm:w-auto"
                  onClick={() => {}}
                >
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;