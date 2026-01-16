const Hero = () => {
  // Kielo flowers image for split layout
  const heroImage = '/images/Kieloflower.jpeg'

  return (
    <section id="hero" className="relative bg-charcoal pt-14 sm:pt-16 md:pt-20">
      {/* Split layout: text left, image right */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Text side - left */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2 lg:order-1">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            {/* Quiet anchor line */}
            <p className="text-xs sm:text-sm md:text-base font-normal tracking-widest uppercase text-off-white/50 leading-relaxed">
              BUILT TO FIT. BUILT FOR LIFE.
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-[0.02em] text-off-white leading-[1.1]">
              Reserved
            </h1>
            
            <div className="w-16 sm:w-20 h-px bg-off-white/30" />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-off-white/80 font-normal tracking-wide leading-relaxed">
              A quiet commitment to craftsmanship, material, and permanence.
            </p>
          </div>
        </div>
        
        {/* Image side - right */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
      </div>
    </section>
  )
}

export default Hero