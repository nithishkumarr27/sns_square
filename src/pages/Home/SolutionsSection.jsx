import React from 'react';

const SolutionsSection = () => {
  const solutions = [
    "Data & Analytics Intelligence",
    "AI Innovation Labs & Co-Pilots", 
    "Hyper-Automation & Adaptive Systems",
    "AI-Driven Growth & Revenue Intelligence"
  ];

  return (
    <section className="w-full mt-[50px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1224px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-12">
          <div className="flex flex-col gap-[29px] sm:gap-[40px] md:gap-[58px] justify-start items-start w-full lg:w-[58%]">
            {/* Section Title */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-sora font-semibold leading-[36px] sm:leading-[44px] md:leading-[52px] text-left text-global-1 w-full lg:w-[54%]">
              Agentic Solutions for Every Business Need
            </h2>

            {/* Solutions List */}
            <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] justify-start items-start w-full">
              <div className="flex flex-col gap-[18px] justify-start items-start w-full">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] text-left text-global-7">
                  Data & Analytics Intelligence
                </h3>
                <p className="text-base font-inter font-normal leading-[19px] text-left text-global-8 w-full">
                  Break data silos and turn them into a continuous flow of insights. From real-time dashboards to predictive analytics, we make data your organization's competitive advantage.
                </p>
              </div>

              {/* Divider Lines and Other Solutions */}
              {solutions?.slice(1)?.map((solution, index) => (
                <div key={index} className="w-full">
                  <div className="w-full h-[1px] bg-global-5"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] text-left text-global-7 mt-[20px] sm:mt-[30px] md:mt-[40px]">
                    {solution}
                  </h3>
                  <div className="w-full h-[1px] bg-global-5 mt-[20px] sm:mt-[30px] md:mt-[40px]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image/Chart */}
          <div className="w-full lg:w-[48%] flex justify-center items-center">
            <div 
              className="w-full max-w-[598px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[598px] bg-cover bg-center bg-no-repeat rounded-lg relative p-[51px] sm:p-[76px] md:p-[102px]"
              style={{ backgroundImage: "url('/images/img_.png')" }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="bg-global-7 rounded-lg p-4 w-[80%] max-w-[356px] h-[42px] flex items-center justify-center">
                  <span className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] text-center text-global-7">
                    Data & Analytics Intelligence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;