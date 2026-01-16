const HowWeBuildTrust = () => {
  // Using material image as background
  const trustImage = '/images/IMG_9572.jpeg'

  return (
    <section className="relative bg-charcoal">
      {/* Full-width image section */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Image side */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1"
          style={{
            backgroundImage: `url(${trustImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        
        {/* Text side */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-purple tracking-[0.02em] leading-relaxed">
              How We Build Trust
            </h2>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-normal tracking-wide">
              <p>
                How we build our models matters.
              </p>
              
              <p>
                Kielo does not rely on opaque legacy datasets or retrofit women into male baselines. We build domain-specific fit and biomechanical models using first-party data we collect ourselves — grounded in physiology, explicit representation, and outcome-based validation.
              </p>
              
              <p>
                This data directly informs geometry, material choice, and long-term comfort.
              </p>
              
              <p className="text-off-white/60">
                Because trust isn't claimed. It's engineered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeBuildTrust