import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-footer-1 mt-[50px] md:mt-[100px] p-4 md:p-6">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center w-full mt-[21px] md:mt-[42px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full ml-2 md:ml-[10px]">
            {/* Logo */}
            <div className="w-full lg:w-[16%] mb-8 lg:mb-0">
              <img 
                src="/images/img_sq_white_1_2.png" 
                alt="SNS Square White Logo" 
                className="w-[120px] h-[82px] md:w-[192px] md:h-[130px]"
              />
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full lg:w-[70%] gap-8 md:gap-4">
              {/* Solutions Column */}
              <div className="flex flex-col gap-[6px] justify-start items-start w-full md:w-[22%]">
                <h3 className="text-sm md:text-[15px] font-medium leading-[18px] md:leading-[20px] text-footer-1 font-inter">
                  Solutions
                </h3>
                <p className="text-xs md:text-[14px] font-normal leading-[28px] md:leading-[36px] text-global-12 w-full font-inter">
                  Smart City & Manufacturing<br/>
                  Healthcare<br/>
                  Agriculture & Food<br/>
                  Retail FMCG<br/>
                  Automotive & Aerospace<br/>
                  Defense, Government, Legal<br/>
                  Real Estate<br/>
                  Sports, Media & Entertainment<br/>
                  BFSI – Fintech/Banking<br/>
                  Power, Oil, Energy<br/>
                  Personal Services
                </p>
              </div>

              {/* Use Cases and Company Columns */}
              <div className="flex flex-col gap-6 md:gap-8 justify-start items-start w-full md:w-[64%]">
                {/* Use Cases & Company Row */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[62%] gap-6 md:gap-0">
                  {/* Use Cases */}
                  <div className="flex flex-col gap-3 justify-center items-start w-full md:w-[50%]">
                    <h3 className="text-sm md:text-[15px] font-medium leading-[17px] md:leading-[19px] text-footer-1 font-inter">
                      Use Cases
                    </h3>
                    <div className="flex flex-row justify-start items-center w-full">
                      <span className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter">
                        Supply Chain
                      </span>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <span className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter">
                        IT Solution
                      </span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-3 justify-start items-start w-full md:w-[36%]">
                    <h3 className="text-sm md:text-[15px] font-medium leading-[17px] md:leading-[19px] text-footer-1 font-inter">
                      Company
                    </h3>
                    <ul className="flex flex-col gap-[14px] justify-start items-start w-full ml-1">
                      <li>
                        <a href="#" className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter hover:text-footer-1 transition-colors">
                          Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter hover:text-footer-1 transition-colors">
                          Use Case
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter hover:text-footer-1 transition-colors">
                          Life at SNS Square
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter hover:text-footer-1 transition-colors">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-xs md:text-[13px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter hover:text-footer-1 transition-colors">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Address & Email */}
                <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
                  <h3 className="text-sm md:text-[15px] font-medium leading-[17px] md:leading-[19px] text-footer-1 font-inter">
                    Address
                  </h3>
                  <p className="text-xs md:text-[14px] font-normal leading-[20px] md:leading-[25px] text-global-12 w-full font-inter mt-[6px]">
                    BLOCK-L, Embassy Tech Village, Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103
                  </p>
                  <h3 className="text-sm md:text-[15px] font-medium leading-[17px] md:leading-[19px] text-footer-1 font-inter mt-[18px]">
                    Email
                  </h3>
                  <p className="text-xs md:text-[14px] font-normal leading-[15px] md:leading-[17px] text-global-12 font-inter mt-[10px]">
                    info@snssquare.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-footer-2 mt-[24px] md:mt-[48px] mr-4 md:mr-8"></div>

          {/* Copyright & Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-[14px] mr-4 md:mr-[22px] mb-[18px] ml-2 md:ml-[10px] gap-4 md:gap-0">
            <span className="text-[10px] md:text-[11px] font-normal leading-[13px] md:leading-[15px] text-global-12 font-inter">
              © 2025 SNS Square. All rights reserved.
            </span>
            <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
              <img 
                src="/images/img_clip_path_group.svg" 
                alt="Social Media Icon" 
                className="w-4 h-4"
              />
              <img 
                src="/images/img_svg.svg" 
                alt="Social Media Icon" 
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;