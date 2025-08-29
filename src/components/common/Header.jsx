import React, { useState } from 'react';
import { Button } from "./ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-header-1 shadow-[0px_4px_314px_#888888ff] p-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="w-[60px] sm:w-[80px] md:w-[96px]">
            <img 
              src="/images/img_square_logo_black.png" 
              alt="SNS Square Logo" 
              className="w-[60px] h-[42px] sm:w-[80px] sm:h-[55px] md:w-[96px] md:h-[66px]"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-full h-0.5 bg-global-4 mb-1"></span>
              <span className="block w-full h-0.5 bg-global-4 mb-1"></span>
              <span className="block w-full h-0.5 bg-global-4"></span>
            </div>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:flex absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-7 lg:bg-transparent shadow-lg lg:shadow-none z-50`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 p-4 lg:p-0 w-full">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
                <span className="text-sm md:text-base font-bold leading-[18px] md:leading-[22px] text-center text-global-5 font-manrope cursor-pointer hover:text-blue-600">
                  Home
                </span>
                <span className="text-sm md:text-base font-bold leading-[18px] md:leading-[22px] text-center text-global-4 font-manrope cursor-pointer hover:text-blue-600">
                  Solutions
                </span>
                <span className="text-sm md:text-base font-bold leading-[18px] md:leading-[22px] text-center text-global-4 font-manrope cursor-pointer hover:text-blue-600">
                  Use Case
                </span>
                <span className="text-sm md:text-base font-bold leading-[18px] md:leading-[22px] text-center text-global-4 font-manrope cursor-pointer hover:text-blue-600">
                  Life at SNS Square
                </span>
              </div>

              {/* Contact Button (always right) */}
              <Button
                variant="secondary"
                size="small"
                className="rounded-[18px] px-6 py-1 text-sm md:text-base font-bold bg-black text-white hover:bg-blue-600 transition-colors duration-300"
                onClick={() => {}}
              >
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
