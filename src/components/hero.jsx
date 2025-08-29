export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-gradient-to-b from-[#EEF4FF] to-white w-screen">
      <div className="w-full px-0 py-24 md:py-32 lg:py-40">
        <header className="text-center">
          <h1
            id="hero-heading"
            className="text-balance font-sans font-extrabold tracking-tight text-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            From <span className="text-[#1E63FF]">Brainstorms</span> to <span className="text-[#1E63FF]">Superstorms</span>.
          </h1>
        </header>

        <p className="mx-auto mt-10 max-w-5xl text-pretty text-center font-sans text-lg sm:text-xl md:text-2xl leading-relaxed text-black/90 font-medium">
          We are a culture of bold thinkers and fearless doers. Here, boundaries fade, routines transform into freedom, and creativity flows without limits. Our ecosystem fuels energy, nurtures imagination, and turns ideas into extraordinary outcomes.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E63FF] to-[#1557F5] px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1557F5]"
          >
            Start Your Agentic Journey
          </a>
        </div>
      </div>
    </section>
  )
}
