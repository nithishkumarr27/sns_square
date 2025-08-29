import React from "react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import supplyChainData from "../../data/supplychain.json";
import informationTechnologyData from "../../data/informationtechnology.json";
const SupplyChainIcon = "/images/SupplyChain.svg";

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Input component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Main App component
export const UseCase = () => {
  const [activeCategory, setActiveCategory] = useState("supply-chain");
  const [currentData, setCurrentData] = useState(supplyChainData);

  const categoryFilters = [
    {
      ...supplyChainData.categoryFilter,
      icon: SupplyChainIcon,
      isActive: activeCategory === "supply-chain",
    },
    {
      ...informationTechnologyData.categoryFilter,
      isActive: activeCategory === "information-technology",
    },
  ];

  useEffect(() => {
    if (activeCategory === "supply-chain") {
      setCurrentData(supplyChainData);
    } else {
      setCurrentData(informationTechnologyData);
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="relative overflow-hidden">
        {/* Background blur effect */}
        <div className="absolute w-[300px] h-[300px] md:w-[470px] md:h-[470px] top-0 left-1/2 transform -translate-x-1/2 md:left-[485px] md:transform-none bg-[#1357e591] rounded-full blur-[400px]" />

        <div className="flex flex-col items-center gap-10 md:gap-20 px-4 md:px-8 lg:px-0 py-8 md:py-16">
          {/* Hero Section */}
          <div className="relative w-full max-w-7xl h-[300px] md:h-[480px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(/images/UsecaseBackground.svg)"}}>
            {/* Decorative border element */}
            <div className="absolute w-[60px] h-[60px] md:w-[88px] md:h-[83px] top-[40px] left-[20px] md:top-[84px] md:left-[39px] border-2 border-solid border-transparent shadow-[inset_-5px_-5px_250px_#ffffff05] backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [border-image:linear-gradient(169deg,rgba(255,255,255,0.4)_0%,rgba(238,237,237,0.2)_100%)_1] [background:radial-gradient(50%_50%_at_0%_0%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="flex flex-col items-center justify-center gap-6 md:gap-[55px] absolute inset-0 px-4 md:px-8">
              <div className="text-center max-w-4xl">
                <h1 className="font-sora font-semibold text-black text-3xl md:text-4xl lg:text-[54px] tracking-tight md:tracking-[-0.69px] leading-tight md:leading-[54px]">
                  We partner with you in your{" "}
                  <span className="text-[#242424]">Agentic Solution</span>{" "}
                  Journey.
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
                  className={`flex items-center gap-2.5 pl-4 pr-6 py-4 md:py-6 w-full rounded-2xl overflow-hidden ${
                    filter.isActive ? "bg-[#e6edfc]" : "bg-transparent"
                  }`}
                >
                  <img
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt="Category icon"
                    src={filter.icon}
                  />

                  <div
                    className={`font-sora font-normal text-base md:text-lg tracking-[-0.60px] leading-6 whitespace-nowrap ${
                      filter.isActive ? "text-blue" : "text-[#04040469]"
                    }`}
                  >
                    {filter.label}
                  </div>
                </Button>
              ))}
            </div>

            {/* Use Cases Grid */}
            <div className="flex flex-col w-full lg:w-[904px] items-center justify-center gap-8 md:gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                {currentData.useCases.map((useCase) => (
                  <Card
                    key={useCase.id}
                    className="flex flex-col w-full max-w-[440px] mx-auto items-start p-4 md:p-5 bg-white rounded-3xl overflow-hidden shadow-[0px_2px_16px_#10182814] border-0"
                  >
                    <CardContent className="flex flex-col items-start gap-6 w-full p-0">
                      <div className="w-full h-[150px] md:h-[197px] bg-[#e6edfc] rounded-3xl" />

                      <div className="flex flex-col w-full items-start gap-4 md:gap-[18px]">
                        <div className="flex flex-col items-start gap-3 w-full">
                          <div className="font-sora font-semibold text-black text-lg md:text-[22px] tracking-0 leading-normal">
                            {useCase.title}
                          </div>

                          <div className="font-inter font-normal text-[#303030] text-base md:text-[22px] tracking-0 leading-normal">
                            {useCase.description}
                          </div>
                        </div>

                        <Button
                          variant="link"
                          className="font-inter font-normal text-[#3e57da] text-base md:text-[22px] tracking-0 leading-normal p-0 h-auto justify-start"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[80px] bg-[linear-gradient(90deg,rgba(6,78,227,1)_0%,rgba(61,118,236,1)_100%)] h-auto">
                <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-0 leading-6 whitespace-nowrap">
                  View All Use Cases
                </div>
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="w-full max-w-7xl rounded-[32px] overflow-hidden border border-solid border-[#e3e0e0] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(223,233,251,1)_100%)]">
            <CardContent className="relative p-0 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(..//67c0570ea854203522bca87a-hero-bg-pattern-avif-1.png)"}}>
                <div className="absolute w-[300px] h-[300px] md:w-[470px] md:h-[470px] top-[-150px] md:top-[-314px] left-1/2 transform -translate-x-1/2 md:left-[377px] md:transform-none bg-[#1357e591] rounded-full blur-[400px]" />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 p-8 md:p-16 text-center">
                <h2 className="font-sora font-semibold text-black text-2xl md:text-4xl lg:text-[54px] tracking-0 leading-normal max-w-4xl">
                  Let&apos;s Build Your Agentic Future
                </h2>

                <p className="font-inter font-normal text-black text-base md:text-xl tracking-0 leading-normal max-w-2xl">
                  Ready to transform your business with Agentic AI, autonomous
                  solutions? Partner with us and take the first step into the
                  Agentic era.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
                  <Input
                    placeholder="Enter your email address"
                    className="flex-1 h-[50px] md:h-[70px] bg-white rounded-[32px] border-0 opacity-70 font-inter font-light text-black text-sm md:text-base tracking-0 leading-normal"
                  />

                  <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-3 md:py-3.5 rounded-[80px] bg-[linear-gradient(90deg,rgba(6,78,227,1)_0%,rgba(61,118,236,1)_100%)] h-auto whitespace-nowrap">
                    <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-0 leading-6">
                      Talk to an Expert
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UseCase;