const Philosophy = () => {
  // Titanium bike image with chainstay details
  const philosophyImage = '/images/DSC04454.JPG'

  return (
    <section className="relative bg-charcoal">
      {/* Full-width image section - split layout */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Image side - with actual colors */}
        <div 
          className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full order-1"
          style={{
            backgroundImage: `url(${philosophyImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        {/* Text side - minimal and understated */}
        <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative order-2">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-off-white tracking-[0.02em] leading-relaxed">
              Our Philosophy — Sisu, by Design
            </h2>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-off-white/70 font-normal tracking-wide leading-relaxed">
              <p>
                In Finland, sisu means enduring with clarity when the path isn't obvious.
              </p>

              <p>
                At Kielo, it shapes how we build — patiently, deliberately, and for the long run.
              </p>

              <p className="text-off-white/60">
                Our models and our bikes, are designed to adapt with the rider over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
