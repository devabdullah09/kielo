const WhatIsKielo = () => {
  // Large image section like Norm Architects
  const sectionImage = '/images/DSC04471.jpeg'

  return (
    <section className="relative bg-charcoal">
      {/* Full-width image section - responsive grid */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Image side - full height with actual colors */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1"
          style={{
            backgroundImage: `url(${sectionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        
        {/* Text side - spacious like Marimekko */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-off-white tracking-[0.02em] leading-relaxed">
              What Kielo Is
            </h2>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-normal tracking-wide">
              <p>
                Kielo builds titanium bicycles designed from the rider outward.
              </p>
              
              <p>
                Every Kielo begins with fit using biomechanical insight, material intelligence, and precision manufacturing to create bikes that evolve with their riders over time.
              </p>
              
              <p>
                We build for longevity, serviceability, and real bodies, starting with women — the most underserved segment in premium cycling — not as a niche, but as the highest standard for performance and comfort.
              </p>
              
              <p>
                Each bike is made in limited numbers, shaped by data and experience, and engineered to last a lifetime.
              </p>
              
              <p className="text-off-white/60">
                Kielo is not a campaign. It is a system of truth — quietly built, deliberately owned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsKielo