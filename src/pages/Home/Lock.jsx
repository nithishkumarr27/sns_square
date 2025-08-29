import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const App = () => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Animate first section out (from 0% to 40% scroll progress)
  const challengeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const challengeScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  // Animate second section in (from 60% to 100% scroll progress)
  const blueprintOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const blueprintScale = useTransform(scrollYProgress, [0.5, 0.9], [0.95, 1]);
  const blueprintY = useTransform(scrollYProgress, [0.5, 0.9], ["40px", "0px"]);

  return (
    <main className="bg-white text-black">
      {/* Spacer to demonstrate scrolling into the effect */}
     

      {/* This container's height determines the scroll duration of the animation */}
      <div ref={scrollContainerRef} className="relative h-[70vh]">
        {/* This is the sticky container that pins to the top */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{
              opacity: challengeOpacity,
              scale: challengeScale,
              pointerEvents: scrollYProgress.get() > 0.4 ? 'none' : 'auto',
            }}
            className="absolute inset-0"
          >
   <div className="py-16 lg:py-6 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
              </p>
            </div>
            <div className="flex pl-8  justify-center">
              <img
                src="/images/img_2_1.png"
                alt="Blueprint Illustration"
                className="max-w-2xl h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

         
          </motion.div>
          <motion.div
            style={{
              opacity: blueprintOpacity,
              scale: blueprintScale,
              y: blueprintY,
            }}
            className="absolute inset-0"
          >
           <div className="py-24 lg:py-6 px-4 lg:mt-[200px] sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                The Biggest Challenge for Modern Enterprises is Mastering Complexity
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/img_untitled_design.png"
                alt="Challenge Illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
          </motion.div>
        </div>
      </div>

      
      
    </main>
  );
};

export default App;
