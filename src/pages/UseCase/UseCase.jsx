import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import CTASection from "../Home/CTASection";
import useCaseData from "../../data/usecase.json";
import UseCaseCard from "../../components/UseCaseCard";
import Button from "../../components/ui/Button";

// Main App component
export const UseCase = () => {
  const [activeCategory, setActiveCategory] = useState("supply-chain");
  const [showAllUseCases, setShowAllUseCases] = useState(false);
  const navigate = useNavigate();

  // Dynamic data mapping
  const dataMapping = {
    "supply-chain": {
      data: Object.values(useCaseData).filter(uc => uc.category === "Supply Chain"),
      categoryInfo: {
        id: "supply-chain",
        label: "Supply Chain",
        icon: "/icons/supply.svg"
      }
    },
    "information-technology": {
      data: Object.values(useCaseData).filter(uc => uc.category === "Technology"),
      categoryInfo: {
        id: "information-technology",
        label: "Information Technology", 
        icon: "/icons/it.svg"
      }
    },
    "healthcare": {
      data: Object.values(useCaseData).filter(uc => uc.category === "Healthcare"),
      categoryInfo: {
        id: "healthcare",
        label: "Healthcare",
        icon: "/icons/healthcare.svg"
      }
    },
    "human-resource": {
      data: Object.values(useCaseData).filter(uc => uc.category === "Human Resource"),
      categoryInfo: {
        id: "human-resource",
        label: "Human Resource",
        icon: "/icons/humanresource.svg"
      }
    },
    "insurance": {
      data: Object.values(useCaseData).filter(uc => uc.category === "Insurance"),
      categoryInfo: {
        id: "insurance",
        label: "Insurance",
        icon: "/icons/humanresource.svg"
      }
    }
  };

  // Extract category filters dynamically from the data mapping
  const getCategoryFilters = () => {
    return Object.entries(dataMapping).map(([key, config]) => ({
      ...config.categoryInfo,
      isActive: activeCategory === key,
    }));
  };

  // Create use cases based on active category
  const getCurrentUseCases = () => {
    const currentConfig = dataMapping[activeCategory];
    if (!currentConfig) return [];

    return currentConfig.data.map((useCase) => ({
      id: useCase.id,
      title: useCase.title,
      description: useCase.summary || useCase.description,
      category: activeCategory,
      image: useCase.image
    }));
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Reset showAllUseCases when category changes
    setShowAllUseCases(false);
  };

  const handleViewAllClick = () => {
    setShowAllUseCases(true);
  };

  const handleShowLessClick = () => {
    setShowAllUseCases(false);
  };

  const handleLearnMoreClick = (useCaseId) => {
    navigate(`/usecase/${useCaseId}`);
  };

  // Get the use cases to display (first 4 by default, all if showAllUseCases is true)
  const currentUseCases = getCurrentUseCases();
  const useCasesToDisplay = showAllUseCases 
    ? currentUseCases 
    : currentUseCases.slice(0, 4);

  const categoryFilters = getCategoryFilters();

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="relative overflow-hidden">
        {/* Background blur effect */}
        <div className="absolute w-[300px] h-[300px] md:w-[470px] md:h-[470px] top-0 left-1/2 transform -translate-x-1/2 md:left-[485px] md:transform-none bg-[#1357e591] rounded-full blur-[400px]" />

        <div className="flex flex-col items-center gap-10 md:gap-20  lg:px-0">
          {/* Hero Section */}
          <div className="relative w-full h-[300px] md:h-[440px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(/images/UsecaseBackground.svg)"}}>
            {/* Decorative border element */}
            <div className="absolute w-[60px] h-[60px] md:w-[88px] md:h-[83px] top-[40px] left-[20px] md:top-[84px] md:left-[39px] border-2 border-solid border-transparent shadow-[inset_-5px_-5px_250px_#ffffff05] backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [border-image:linear-gradient(169deg,rgba(255,255,255,0.4)_0%,rgba(238,237,237,0.2)_100%)_1] [background:radial-gradient(50%_50%_at_0%_0%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="flex flex-col items-center justify-center gap-6 md:gap-[55px] absolute inset-0 px-4 md:px-8">
              <div className="text-center max-w-4xl">
                <h1 className="font-sora font-semibold text-black text-5xl md:text-6xl lg:text-[54px] tracking-tight md:tracking-[-0.69px] leading-tight md:leading-[54px]">
                  Partnered Progress:{" "}
                  <span className="text-[#064EE3]">Agentic AI</span>{" "}
                  Solutions for Every Sector
                </h1>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row w-full max-w-7xl items-start gap-6 lg:gap-6">
            {/* Category Filters */}
            <div className="flex flex-col w-full lg:w-72 items-start gap-4">
              {categoryFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant="ghost"
                  onClick={() => handleCategoryClick(filter.id)}
                  className={`flex items-center justify-start gap-2.5 pl-4 pr-6 py-5 md:py-7 w-full rounded-2xl overflow-hidden ${
                    filter.isActive ? "bg-[#e6edfc]" : "bg-transparent"
                  }`}
                >
                  <img
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt="Category icon"
                    src={filter.icon}
                    style={filter.isActive ? 
                      { filter: 'brightness(0) saturate(100%) invert(25%) sepia(89%) saturate(3028%) hue-rotate(212deg) brightness(94%) contrast(90%)' } : 
                      { filter: 'brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)', opacity: 0.41 }
                    }
                  />

                  <div
                    className={`font-sora font-semibold text-base md:text-lg tracking-[-0.60px] leading-6 whitespace-nowrap text-left ${
                      filter.isActive ? "text-[#064EE3]" : "text-[#04040469]"
                    }`}
                  >
                    {filter.label}
                  </div>
                </Button>
              ))}
            </div>

            {/* Use Cases Grid */}
            <div className="flex flex-col w-full lg:w-[1000px] items-center justify-center gap-8 md:gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                {useCasesToDisplay.map((useCase) => (
                  <UseCaseCard
                    key={useCase.id}
                    useCase={useCase}
                    onLearnMore={handleLearnMoreClick}
                  />
                ))}
              </div>

              {!showAllUseCases && currentUseCases.length > 4 && (
                <Button 
                  onClick={handleViewAllClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[80px] bg-[linear-gradient(90deg,rgba(6,78,227,1)_0%,rgba(61,118,236,1)_100%)] h-auto"
                >
                  <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-0 leading-6 whitespace-nowrap">
                    View All Use Cases
                  </div>
                </Button>
              )}

              {showAllUseCases && currentUseCases.length > 4 && (
                <Button 
                  onClick={handleShowLessClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[80px] bg-[linear-gradient(90deg,rgba(6,78,227,1)_0%,rgba(61,118,236,1)_100%)] h-auto"
                >
                  <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-0 leading-6 whitespace-nowrap">
                    Show Less
                  </div>
                </Button>
              )}
            </div>
          </div>

          {/* CTA Section */}
          {/* <CTASection /> */}
        </div>
      </div>
    </div>
  );
}

export default UseCase;