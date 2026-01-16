const ReservationDetails = () => {
  // Large image section - alternating layout
  const sectionImage = '/images/DSC04477.JPG'

  return (
    <section className="relative bg-charcoal">
      {/* Full-width image section - reversed layout */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Text side first on mobile, second on desktop */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 order-2 lg:order-1 relative">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-purple tracking-[0.02em] leading-relaxed">
              Reservation
            </h2>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-normal tracking-wide">
              <p>
                By reserving with Kielo, you secure priority access to our upcoming 
                offerings. A commitment to quality, a step toward ownership of 
                something truly exceptional.
              </p>
              
              {/* <div className="pt-6 sm:pt-8 border-t border-off-white/10">
                <ul className="space-y-4 sm:space-y-5 font-light text-off-white/60">
                  <li className="flex items-start">
                    <span className="text-off-white/40 mr-3 sm:mr-4 mt-1">—</span>
                    <span>Priority access to exclusive offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-off-white/40 mr-3 sm:mr-4 mt-1">—</span>
                    <span>Reserved placement in our community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-off-white/40 mr-3 sm:mr-4 mt-1">—</span>
                    <span>Early updates and insider information</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Image side - with actual colors */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          style={{
            backgroundImage: `url(${sectionImage})`,
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

export default ReservationDetails