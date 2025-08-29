import React from 'react';
import Button from '../../components/ui/Button';

const IndustriesSection = () => {
  const industries = [
    {
      icon: "/images/img_background.svg",
      title: "Retail & E-Commerce",
      description: "3× higher conversions using recommendation engines and customer intelligence.",
      bgColor: "bg-global-7",
      titleColor: "text-global-5"
    },
    {
      icon: "/images/img_background_blue_800.svg", 
      title: "Healthcare",
      description: "40% faster bookings, predictive demand management, and personalised guest experiences.",
      bgColor: "bg-global-7",
      titleColor: "text-global-5",
      tag: "SCORM"
    },
    {
      icon: "/images/img_background_blue_800.svg",
      title: "FinTech & Banking", 
      description: "95% accurate forecasting, fraud detection in real time, smarter compliance.",
      bgColor: "bg-global-7",
      titleColor: "text-global-5",
      tag: "analytics"
    },
    {
      icon: "/images/img_background_blue_800.svg",
      title: "Smart City & Manufacturing",
      description: "3× higher conversions using recommendation engines and customer intelligence.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame.svg",
      title: "Agriculture & Food", 
      description: "95% accurate forecasting, fraud detection in real time, smarter compliance.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_background_60x60.svg",
      title: "Retail FMCG",
      description: "3× higher conversions using recommendation engines and customer intelligence.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame_60x60.svg",
      title: "Automotive & Aerospace",
      description: "40% faster bookings, predictive demand management, and personalised guest experiences.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame_1.svg",
      title: "Defense, Government, Legal",
      description: "95% accurate forecasting, fraud detection in real time, smarter compliance.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_background_1.svg",
      title: "Real Estate",
      description: "3× higher conversions using recommendation engines and customer intelligence.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame_2.svg",
      title: "Sports, Media & Entertainment",
      description: "40% faster bookings, predictive demand management, and personalised guest experiences.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_government_flag.svg",
      title: "BFSI – Fintech/Banking",
      description: "95% accurate forecasting, fraud detection in real time, smarter compliance.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame_blue_800.svg",
      title: "Power, Oil, Energy",
      description: "3× higher conversions using recommendation engines and customer intelligence.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    },
    {
      icon: "/images/img_frame_blue_800_60x60.svg",
      title: "Personal Services",
      description: "40% faster bookings, predictive demand management, and personalised guest experiences.",
      bgColor: "bg-global-7",
      titleColor: "text-global-7"
    }
  ];

  return (
    <section className="w-full bg-global-7 rounded-[32px] mt-[42px] sm:mt-[60px] md:mt-[84px] mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 py-[27px] sm:py-[40px] md:py-[54px]">
        <div className="flex flex-col justify-start items-start w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-4 justify-start items-start w-full mb-8 sm:mb-12 md:mb-16">
            <Button
              variant="outline"
              size="small"
              className="bg-global-3 text-global-4 border-none rounded-[20px] px-[30px] py-2 font-sora font-bold"
              onClick={() => {}}
            >
              Industries
            </Button>
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-sora font-semibold leading-[30px] sm:leading-[38px] md:leading-[45px] text-left text-global-7 w-full lg:w-[94%] mt-[18px]">
              <span className="text-global-7">From tech startups to global enterprises, our Agentic solutions </span>
              <span className="text-[#616161]">adapt to any industry, helping leaders reimagine growth, efficiency, and customer experience.</span>
            </h2>
          </div>

          {/* Industries Grid */}
          <div className="relative w-full">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-global-2 rounded-full opacity-50 z-0"></div>
            
            {/* Industries Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              {industries?.map((industry, index) => (
                <div
                  key={index}
                  className={`${industry?.bgColor} border border-gray-100 rounded-[24px] p-4 sm:p-6 shadow-[0px_2px_16px_#10182814] hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full">
                    {/* Icon */}
                    <div className="bg-global-4 rounded-[16px] p-3 w-[60px] h-[60px] flex items-center justify-center">
                      <img 
                        src={industry?.icon} 
                        alt="Industry Icon" 
                        className="w-6 h-6"
                      />
                    </div>

                    {/* Title */}
                    <h3 className={`text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-sora font-semibold leading-[24px] sm:leading-[28px] md:leading-[31px] lg:leading-[33px] text-left ${industry?.titleColor}`}>
                      {industry?.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base font-inter font-normal leading-[19px] text-left text-global-1 w-full">
                      {industry?.description}
                    </p>

                    {/* Tag (if exists) */}
                    {industry?.tag && (
                      <div className="bg-global-6 rounded-[18px] px-2 py-1">
                        <span className="text-[13px] font-inter font-medium leading-[17px] text-left text-transform-uppercase text-global-6">
                          {industry?.tag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-[26px] justify-start items-start w-full lg:w-[24%] ml-auto mt-8 sm:mt-12 md:mt-16">
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-normal leading-[24px] sm:leading-[26px] md:leading-[29px] text-left text-global-1 w-full">
                Unlock Agentic AI Solutions for Your Industry.
              </h3>
              <Button
                variant="primary"
                size="medium"
                className="rounded-[26px] px-6 py-[14px] text-base font-semibold"
                onClick={() => {}}
              >
                Explore Agentic Use Case
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;