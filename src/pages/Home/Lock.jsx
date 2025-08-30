import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
const StickyScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Fading animations for containers
  const firstOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  // Track when second container is visible enough
  const [showSecondImage, setShowSecondImage] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // As soon as second container is mostly visible, switch image
      if (v >= 0.5) {
        setShowSecondImage(true);
      } else {
        setShowSecondImage(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div
      ref={containerRef}
      className="relative sm:flex w-full sm:min-h-[120vh] px-6 xl:px-[100px] 2xl:px-[400px]"
    >
      {/* Left content */}
      <div className="flex-1 flex mx-auto flex-col justify-center ">
        {/* First container */}
        <motion.div style={{ opacity: firstOpacity }}>
        
        <div className="max-w-full  ">
          <div className="grid grid-cols-1  gap-12 lg:gap-16 items-center">
            <div className="">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                The Biggest Challenge for Modern Enterprises is Mastering Complexity
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                Businesses today must innovate faster, deliver seamless customer experiences, and scale efficiently while navigating dynamic markets and evolving technologies.
              </p>
            </div>
          </div>
        </div>
      
        </motion.div>
        {/* Second container */}
        <motion.div style={{ opacity: secondOpacity }}>
            
        <div className="max-w-full">
          <div className="grid grid-cols-1  gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-black leading-tight">
                Our Key to Unlock the Future: The Agentic Business Blueprint (ABB)
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal text-black/70 leading-relaxed">
                The Agentic Business Blueprint (ABB) is our framework to align business goals with adaptive strategies, agentic intelligence, and automation.
              </p>
            </div>
          </div>
        </div>
      
        </motion.div>
      </div>
      {/* Right sticky image */}
      <div className="w-1/2 flex justify-center items-center sticky  sm:top-20 sm:h-screen">
        <AnimatePresence mode="wait">
          <motion.img
            key={showSecondImage ? "second" : "first"}
            src={showSecondImage ? "/images/puzzle_2.png" : "/images/puzzle.png"}
            alt="Sticky Visual"
           className={`w-[400px] h-auto rounded-2xl shadow-lg ${
        !showSecondImage ? "mt-[-40px] max-sm:mt-[-200px]" : "mt-20"
      }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
export default StickyScrollSection;