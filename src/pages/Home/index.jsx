import React from 'react';
import Button from '../../components/ui/Button';
import Lock from './Lock';
const Home = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-[800px]  overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
        />
        
        {/* Header */}
        {/* <div className="relative z-50">
          <Header />
        </div> */}
        
        {/* Hero Content */}
        <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] relative">
      <div 
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[802px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
      >
        <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[27px] sm:gap-[40px] md:gap-[54px] justify-start items-center w-full text-center">
            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-sora font-semibold leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[80px] text-center text-global-1 w-full">
              <span className="text-global-1">We partner with you in your </span>
              <span className="text-global-5">Agentic Solution</span>
              <span className="text-global-1"> Journey.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] text-center text-global-1 w-full max-w-[800px]">
              We help forward-looking companies unlock value with agentic solutions powered by AI, data intelligence, and scalable platforms.
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="medium"
              className="rounded-[26px] px-6 py-[14px] text-base font-semibold text-white"
              onClick={() => {}}
            >
              Start Your Agentic Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
      </div>
      
      {/* Feature Cards Section */}
      <div className="relative -mt-32 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Background Gradient */}
          <div className="absolute inset-0  rounded-3xl transform rotate-1" />
          
          <div className="relative p-8 lg:p-16">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Outcome Optimization Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/Frame.svg" alt="Outcome Optimization" className="w-8 h-8" />
                </div>
                {/* <img src="/images/img_subtract.svg" alt="Outcome Optimization Text" className="h-12 mb-4" /> */}
                <h3 className="text-xl font-inter font-medium text-[#040404] mb-2">
                  Born Agentic
                </h3>
                <p className="text-sm font-manrope font-medium text-gray-600">
                Native to the era of autonomous AI.
                </p>
              </div>
              
              {/* Domain Versatility Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/Frame_2.svg" alt="Domain Versatility" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-inter font-medium text-[#040404] mb-2">
                  AI Engineering <br /> First
                </h3>
                <p className="text-sm font-manrope font-medium text-gray-600">
                  Strong foundation in AI, data, and automation.
                </p>
              </div>
              
              {/* AI Engineering Fast Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/Frame_3.svg" alt="AI Engineering Fast" className="w-8 h-8" />
                </div>
                {/* <img src="/images/img_subtract_black_900.svg" alt="AI Engineering Fast Text" className="h-12 mb-4" />
                 */}
                <h3 className="text-xl font-inter font-medium text-[#040404] mb-2">
                 Domain Versatility 
                </h3>
                <p className="text-sm font-manrope font-medium text-gray-600">
                  Solutions that adapt across industries.
                </p>
              </div>
              
              {/* Fast Agentic Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/Frame_4.svg" alt="Fast Agentic" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-inter font-medium text-[#040404] mb-2">
                 Outcome obsession
                </h3>
                {/* <img src="/images/img_subtract_black_900_22x136.svg" alt="Fast Agentic Text" className="h-6 mb-4" /> */}
                <p className="text-sm font-manrope font-medium text-gray-600">
                Designed to deliver real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
{/* lock */}
<div className='mx-auto'>
<Lock/>
</div>



      {/* Challenge Section */}
     
      {/* Use Cases Section */}
      <div className="py-24 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-9xl mx-auto">
          {/* Background with decorative elements */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-16 overflow-hidden">
            {/* Decorative Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/BG.jpg')"  }}
            />
            
            {/* Section Header */}
            <div className="relative z-20 mb-16">
              <Button
                variant="secondary"
                size="small"
                className="bg-[#ade5d3] text-[#040404] rounded-full px-6 py-2 mb-8"
                onClick={() => {}}
              >
                UseCases
              </Button>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-manrope font-bold text-[#242424] leading-tight max-w-4xl">
                From tech startups to global enterprises, our Agentic solutions adapt to any industry, helping leaders reimagine growth, efficiency, and customer experience.
              </h2>
            </div>
            
            {/* Use Cases Grid */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* IT Development Lifecycle Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/img_background_blue_800.svg" alt="IT Development" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-[#242424] mb-3">
                  IT Development Lifecycle
                </h3>
                <p className="text-sm font-inter text-black/80 mb-4">
                  Seamless, smart, and scalable Agentic AI powers the future of IT.
                </p>
                <div className="flex items-center text-[#3e57da] hover:text-[#064ee3] cursor-pointer transition-colors">
                  <span className="text-sm font-inter">Learn More</span>
                  <img src="/images/img_solar_arrow_up_linear.svg" alt="Arrow" className="w-5 h-5 ml-2" />
                </div>
              </div>
              
              {/* Supply Chain Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/img_frame.svg" alt="Supply Chain" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-[#242424] mb-3">
                  Supply Chain
                </h3>
                <p className="text-sm font-inter text-black/80">
                  From demand to delivery, every link learns, decides, and acts in real time
                </p>
              </div>
              
              {/* Healthcare Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/img_frame_blue_800.svg" alt="Healthcare" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-[#242424] mb-3">
                  Healthcare
                </h3>
                <p className="text-sm font-inter text-black/80">
                  Partnering with hospitals to provide intelligent, personalized, and always-available healthcare solutions.
                </p>
              </div>
              
              {/* Insurance Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/img_frame_blue_800_60x60.svg" alt="Insurance" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-[#242424] mb-3">
                  Insurance
                </h3>
                <p className="text-sm font-inter text-black/80">
                  40% faster bookings, predictive demand management, and personalised guest experiences.
                </p>
              </div>
              
              {/* Human Resource Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-[#e6edfc] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <img src="/images/img_frame_60x60.svg" alt="Human Resource" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-[#242424] mb-3">
                  Human Resource
                </h3>
                <p className="text-sm font-inter text-black/80">
                  3× higher conversions using recommendation engines and customer intelligence.
                </p>
              </div>

              <div className='flex  flex-col justify-evenly' >
                <h3 className="text font-inter font-semibold text leading-tigh ">
                    Unlock Agentic AI Solutions for Your Industry.
                </h3>
                <Button
                    variant="primary"
                    size="medium"
                    className="rounded-full px-6 py-3 text-base font-inter font-semibold text-white"
                    onClick={() => {}}
                  >
                    Explore Agentic Use Case
                  </Button>
              </div>
            </div>
            
            {/* Central CTA Circle
            <div className="relative z-30 flex justify-center">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-full p-12 lg:p-16 shadow-2xl max-w-md mx-auto text-center">
                <div className="space-y-6">
                  <h3 className="text-xl lg:text-2xl font-inter font-semibold text-white leading-tight">
                    Unlock Agentic AI Solutions for Your Industry.
                  </h3>
                  <Button
                    variant="primary"
                    size="medium"
                    className="rounded-full px-6 py-3 text-base font-inter font-semibold"
                    onClick={() => {}}
                  >
                    Explore Agentic Use Case
                  </Button>
                </div>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
      
      {/* Solutions Section */}
      <div className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-semibold leading-tight">
              <span className="text-[#064ee3]">Beyond Code. <br /></span>
              <span className="text-[#242424]">Into impact with Agentic Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Solution Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-white via-blue-50/50 to-blue-100 border border-gray-200 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-manrope font-bold text-[#242424] leading-tight">
                    Redefining Solutions in the Agentic Era
                  </h3>
                  <p className="text-base lg:text-lg font-inter text-[#242424]/70 leading-relaxed max-w-md">
                    We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                  </p>
                </div>
                <div className="flex justify-end pt-8">
                  <img 
                    src="/images/redefine_img.png" 
                    alt="Solutions Illustration" 
                    className="w-full max-w-l h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature Cards Column */}
            <div className="space-y-6 flex flex-col justify-center">
              {/* Innovation at Core */}
              <div className="bg-[#e6edfc] rounded-2xl p-6 lg:p-10">
                <h4 className="text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-4">
                  Innovation at Core
                </h4>
                <p className="text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
                  We constantly evolve, experiment, and push boundaries, bringing you future-ready solutions that stay ahead of change.
                </p>
                <img 
                    src="/images/Group.png" 
                    alt="Solutions Illustration" 
                    className="w-28 h-auto object-cover rounded-xl mx-auto"
                  />
              </div>
              
              {/* AI-Only Engineering */}
              <div className="bg-[#c5ede0] rounded-2xl p-6 lg:p-10">
              <img 
                    src="/images/redefine_img_2.png" 
                    alt="Solutions Illustration" 
                    className="w-28 h-auto object-cover rounded-xl mx-auto"
                  />
                <h4 className="text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-4">
                  AI-Only Engineering
                </h4>
                <p className="text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
                  We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      
      {/* Footer */}
      {/* <Footer />   */}
    </div>
  );
};

export default Home;