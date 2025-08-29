import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "/images/img_search.svg",
      title: "Next Agents",
      subtitle: "Native to the era of autonomous AI.",
      bgColor: "bg-global-7"
    },
    {
      icon: "/images/img_68308cbee7a4011.svg",
      title: "AI Engineering Plus",
      subtitle: "Strong foundation in AI, data, and automation.",
      bgColor: "bg-global-7"
    },
    {
      icon: "/images/img_68308cbe6815a2d.svg",
      title: "Domain Versatility",
      subtitle: "Solutions that adapt across industries.",
      bgColor: "bg-global-7"
    },
    {
      icon: "/images/img_background.svg",
      title: "Outcomes Obsession",
      subtitle: "Designed to deliver real impact.",
      bgColor: "bg-global-7"
    }
  ];

  return (
    <section className="w-full mt-[-49px] sm:mt-[-70px] md:mt-[-98px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1224px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`${feature?.bgColor} border border-[#f6f5f5] rounded-[32px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex flex-col gap-6 justify-start items-start w-full">
                {/* Icon */}
                <div className="bg-global-4 rounded-[16px] p-[18px] w-[60px] h-[60px] flex items-center justify-center">
                  <img 
                    src={feature?.icon} 
                    alt="Feature Icon" 
                    className="w-6 h-6"
                  />
                </div>

                {/* Title */}
                <div className="w-full">
                  <img 
                    src={`/images/img_subtract${index === 0 ? '_black_900_22x136' : index === 1 ? '_black_900' : index === 2 ? '' : ''}.svg`} 
                    alt={feature?.title}
                    className="w-auto h-[22px] sm:h-[46px]"
                  />
                </div>

                {/* Subtitle */}
                <p className="text-base font-manrope font-medium leading-5 text-global-11 w-full">
                  {feature?.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;