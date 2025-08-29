import React from 'react';

const ProvenResultsSection = () => {
  const results = [
    {
      title: "IT Development Lifecycle",
      description: "AI-driven requirement gathering, adaptive timelines, and collaborative workflows for seamless project alignment.",
      bgColor: "bg-global-4"
    },
    {
      title: "Supply Chain", 
      description: "Agentic AI powers demand forecasting, smart procurement, dynamic pricing, optimized logistics, and balanced inventory in one intelligent flow.",
      bgColor: "bg-global-4"
    }
  ];

  return (
    <section className="w-full mt-[50px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1224px] mx-auto">
        {/* Section Title */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-sora font-semibold leading-[36px] sm:leading-[44px] md:leading-[52px] text-left text-global-1 w-full lg:w-[70%] mb-8 sm:mb-12">
          <span className="text-global-5">Agents + Platforms + Expertise in Action</span>
          <span className="text-global-7"> Proven Impact, Tangible Results</span>
        </h2>

        {/* Results Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {results?.map((result, index) => (
            <div
              key={index}
              className="bg-global-7 border border-gray-100 rounded-[24px] p-5 shadow-[0px_2px_16px_#10182814] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col gap-[38px] justify-start items-center w-full">
                {/* Placeholder for visual/chart */}
                <div className={`${result?.bgColor} rounded-[24px] w-full h-[142px] sm:h-[200px] md:h-[284px]`}></div>

                {/* Content */}
                <div className="flex flex-col gap-[18px] justify-start items-start w-full">
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-sora font-semibold leading-[24px] sm:leading-[26px] md:leading-[28px] text-left text-global-7">
                      {result?.title}
                    </h3>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] text-left text-global-9 w-full">
                      {result?.description}
                    </p>
                  </div>
                  <a 
                    href="#" 
                    className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-normal leading-[23px] sm:leading-[25px] md:leading-[27px] text-left text-global-10 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResultsSection;