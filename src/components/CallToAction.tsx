const CallToAction = () => {
  // Placeholder for Stripe Checkout URL
  const stripeCheckoutUrl = "#"
  const ctaImage = '/images/Kieloflower.jpeg'

  const handleReserve = () => {
    if (stripeCheckoutUrl && stripeCheckoutUrl !== "#") {
      window.open(stripeCheckoutUrl, "_blank")
    } else {
      console.log("Stripe Checkout URL will be configured here")
    }
  }

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Full-width background image - with actual colors */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ctaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />
      
      {/* Centered content overlay */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-6 sm:space-y-10 md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-off-white/95 tracking-[0.02em]">
            Reserve Your Place
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-off-white/70 font-light tracking-wide leading-relaxed max-w-lg mx-auto px-2">
            Secure your reservation through our secure checkout process. 
            Limited availability.
          </p>
          
          {/* Deposit clarification */}
          <p className="text-xs sm:text-sm text-off-white/60 font-light tracking-wide">
            $5,000 refundable reservation deposit. Final specifications confirmed during the fit process.
          </p>
          
          {/* Imagery clarification */}
          <p className="text-xs sm:text-sm text-off-white/50 font-light tracking-wide italic">
            Final production specifications and component selection will be listed for the limited Kielo Founding Series.
          </p>
          
          <div className="pt-4 sm:pt-6">
            <button
              onClick={handleReserve}
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-light tracking-[0.15em] uppercase text-off-white/90 bg-transparent border border-off-white/25 transition-all duration-700 hover:border-off-white/40 hover:text-off-white focus:outline-none focus:ring-1 focus:ring-off-white/20 focus:ring-offset-4 focus:ring-offset-charcoal min-h-[44px] sm:min-h-[48px]"
            >
              <span className="relative z-10">Reserve</span>
            </button>
            
            <p className="mt-6 sm:mt-10 text-xs text-off-white/40 font-light tracking-[0.05em] uppercase">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction