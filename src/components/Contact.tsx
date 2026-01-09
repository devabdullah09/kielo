const Contact = () => {
  // Final image section
  const contactImage = '/images/IMG_4310.jpeg'

  return (
    <section className="relative bg-charcoal">
      {/* Full-width image section */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh]">
        {/* Image side - with actual colors */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1"
          style={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        
        {/* Text side */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-off-white/90 tracking-[0.02em]">
              Contact
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-light tracking-wide">
              <p>
                Have questions about Kielo or your reservation? 
                We'd love to hear from you.
              </p>
              
              <div className="pt-4 sm:pt-6">
                <a 
                  href="mailto:hello@kielo.com" 
                  className="inline-block text-off-white/80 hover:text-off-white transition-colors duration-300 font-light text-base sm:text-lg tracking-wide underline decoration-off-white/30 hover:decoration-off-white/50 underline-offset-4 break-all sm:break-normal"
                >
                  hello@kielo.com
                </a>
              </div>
            </div>
            
            {/* Footer with logo */}
            <div className="pt-8 sm:pt-12 border-t border-off-white/10 mt-8 sm:mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="opacity-60">
                  <img 
                    src="/images/Logo/kielo-logo-lockup.svg" 
                    alt="Kielo" 
                    className="h-5 sm:h-6 md:h-8"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <p className="text-xs text-off-white/30 font-light tracking-wide text-center sm:text-left">
                  © {new Date().getFullYear()} Kielo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact