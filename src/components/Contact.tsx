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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-off-white tracking-[0.02em] leading-relaxed">
              Contact
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-normal tracking-wide">
              <p>
                Have questions about Kielo or your reservation? 
                We'd love to hear from you.
              </p>
              
              <div className="pt-4 sm:pt-6">
                <a 
                  href="mailto:hello@kielo.cc" 
                  className="inline-block text-off-white/80 hover:text-off-white transition-colors duration-300 font-normal text-base sm:text-lg tracking-wide underline decoration-off-white/30 hover:decoration-off-white/50 underline-offset-4 break-all sm:break-normal"
                >
                  hello@kielo.cc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - minimal and quiet, compact layout */}
      <footer className="bg-charcoal border-t border-off-white/5 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            {/* Left side - logo, sisu wayfinder, location/copyright */}
            <div className="flex flex-col space-y-2 sm:space-y-2.5">
              {/* Logo */}
              <div className="opacity-70">
                <img 
                  src="/images/Logo/kielo-logo-lockup.svg" 
                  alt="Kielo" 
                  className="h-5 sm:h-6 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              
              <p className="text-xs text-off-white/40 font-normal italic">
                sisu wayfinder
              </p>
              
              <p className="text-xs text-off-white/30 font-normal tracking-wide">
                Helsinki → San Francisco<br />
                © Kielo Cycling Inc.
              </p>
            </div>
            
            {/* Right side - email, delivery timing, refund policy link, and social icons */}
            <div className="flex flex-col items-end space-y-2 sm:space-y-2.5">
              <a 
                href="mailto:hello@kielo.cc" 
                className="text-off-white/60 hover:text-off-white/80 transition-colors duration-300 font-normal text-xs sm:text-sm tracking-wide"
              >
                hello@kielo.cc
              </a>
              
              <p className="text-xs text-off-white/50 font-normal tracking-wide">
                Estimated deliveries begin June 2026
              </p>
              
              <a 
                href="#refund-policy" 
                className="text-off-white/50 hover:text-off-white/70 transition-colors duration-300 font-normal text-xs tracking-wide underline decoration-off-white/20 hover:decoration-off-white/40 underline-offset-2"
              >
                Refund Policy
              </a>
              
              <div className="flex items-center space-x-2.5">
                <a 
                  href="https://www.instagram.com/kielocycling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-off-white/40 hover:text-off-white/60 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/company/kielo-cc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-off-white/40 hover:text-off-white/60 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/profile.php?id=61582077767807" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-off-white/40 hover:text-off-white/60 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact