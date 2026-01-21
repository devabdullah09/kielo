const CallToAction = () => {
  // Live Stripe Checkout URL
  const stripeCheckoutUrl = "https://buy.stripe.com/6oUaEWdzpguZ5CL3EY7Vm00"
  const ctaImage = '/images/kielo.jpg'

  const handleReserve = () => {
    window.open(stripeCheckoutUrl, "_blank")
  }

  return (
    <section className="relative bg-charcoal">
      {/* Split layout: text left, image right */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Text side - left */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2 lg:order-1">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-off-white tracking-[0.02em] leading-relaxed">
              Reserve Your Place
            </h2>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 font-normal tracking-wide leading-relaxed">
              <p>
                Secure your reservation through our secure checkout process.
                Limited availability.
              </p>

              {/* Deposit clarification */}
              <p className="text-xs sm:text-sm text-off-white/60 font-normal tracking-wide">
                $5,000 refundable reservation deposit. Final specifications confirmed during the fit process.
              </p>

              {/* Imagery clarification */}
              <p className="text-xs sm:text-sm text-off-white/50 font-normal tracking-wide italic">
                Final production specifications and component selection will be listed for the limited Kielo Founding Series.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                onClick={handleReserve}
                className="group relative inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-medium tracking-[0.15em] uppercase text-off-white bg-mineral-purple rounded-full transition-all duration-300 hover:bg-nordic-night focus:outline-none focus:ring-2 focus:ring-mineral-purple/50 focus:ring-offset-2 focus:ring-offset-charcoal min-h-[44px] sm:min-h-[48px]"
              >
                <span className="relative z-10">Reserve</span>
              </button>

              <p className="mt-6 sm:mt-10 text-xs text-off-white/40 font-light tracking-[0.05em] uppercase">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>

        {/* Image side - right */}
        <div
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          style={{
            backgroundImage: `url(${ctaImage})`,
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

export default CallToAction