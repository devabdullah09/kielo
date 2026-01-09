const Hero = () => {
  // Large hero image - full width like Norm Architects
  const heroImage = '/images/DSC04470.JPG'

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start bg-charcoal overflow-hidden pt-14 sm:pt-16 md:pt-20">
      {/* Full-width hero image - with actual colors */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40" />
      
      {/* Text overlay - aligned to the left, responsive */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl text-left space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-[0.02em] text-off-white leading-[1.1]">
              Reserved
            </h1>
            
            <div className="w-16 sm:w-20 h-px bg-off-white/30" />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-off-white/80 font-light tracking-wide leading-relaxed">
              A quiet commitment to craftsmanship, material, and permanence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero