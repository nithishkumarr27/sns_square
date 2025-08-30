export default function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading" 
      className="relative bg-gradient-to-b from-[#EEF4FF] to-white w-screen"
      style={{
        backgroundImage: `url('/images/bg-hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-0 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        <header className="text-center">
          <h1
            id="hero-heading"
            className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-sora font-semibold leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[80px] text-center text-global-1 w-full mt-20"
          >
            A <span className="text-[#1E63FF]">Culture </span> that Erupts into <span className="text-[#1E63FF]">Brilliance.</span>
          </h1>
        </header>

        <p className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-5xl text-pretty text-center font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-black/90 font-medium px-4 sm:px-6 lg:px-0">
          We are a culture of bold thinkers and fearless doers. Here, boundaries fade, routines transform into freedom, and creativity flows without limits. 
        </p>

        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center px-4 sm:px-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E63FF] to-[#1557F5] px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold text-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1557F5] w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Start Your Agentic Journey
          </a>
        </div>
      </div>
    </section>
  )
}