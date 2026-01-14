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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white/90 tracking-[0.02em]">
              What Kielo Is
            </h2>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-light tracking-wide">
              <p>
                Kielo is a philosophy of thoughtful design and enduring quality. 
                More than a product—a commitment to craftsmanship that stands 
                the test of time.
              </p>
              
              {/* <p className="text-off-white/60">
                Rooted in calm confidence, restraint, and permanence. 
                Substance over spectacle. Quality over quantity. 
                Timelessness over trends.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsKielo