import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Button from "./ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm md:text-base font-bold font-manrope cursor-pointer transition-colors duration-300 
     ${isActive ? "text-blue-600" : "text-global-4 hover:text-blue-600"}`;

  return (
    <header className="w-full bg-white shadow-[0px_4px_314px_#888888ff] p-4 fixed top-0 left-0 z-100 backdrop-blur-md">
      <div className="w-[90%] max-w-[1440px] mx-auto relative flex items-center justify-between">
        
        {/* Logo - left corner */}
        <div className="w-[60px] sm:w-[80px] md:w-[96px]">
          <img 
            src="/images/img_square_logo_black.png" 
            alt="SNS Square Logo" 
            className="w-[60px] h-[42px] sm:w-[80px] sm:h-[55px] md:w-[96px] md:h-[66px]"
          />
        </div>

        {/* Nav - center */}
        <nav className="hidden lg:flex flex-row items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/solutions" className={linkClasses}>
            Solutions
          </NavLink>
          <NavLink to="/usecase" className={linkClasses}>
            Use Case
          </NavLink>
          <NavLink to="/life-at-sns" className={linkClasses}>
            Life at SNS Square
          </NavLink>
        </nav>

        {/* Contact Us - right corner */}
        <div className="hidden lg:flex">
          <Button
            variant="secondary"
            size="small"
            className="rounded-[18px] px-6 py-1 text-sm md:text-base font-bold bg-black text-white hover:bg-blue-600 transition-colors duration-300"
            onClick={() => {}}
          >
            Contact us
          </Button>
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button 
          className="block lg:hidden p-2 ml-auto" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-full h-0.5 bg-black mb-1"></span>
            <span className="block w-full h-0.5 bg-black mb-1"></span>
            <span className="block w-full h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-global-7 shadow-lg rounded-lg p-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/solutions" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Solutions
            </NavLink>
            <NavLink to="/usecase" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Use Case
            </NavLink>
            <NavLink to="/life-at-sns" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Life at SNS Square
            </NavLink>
          </nav>

          <Button
            variant="secondary"
            size="small"
            className="mt-4 rounded-[18px] px-6 py-1 text-sm font-bold bg-black text-white hover:bg-blue-600 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
