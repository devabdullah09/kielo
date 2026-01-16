const RefundPolicy = () => {
  return (
    <section id="refund-policy" className="relative bg-charcoal py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-purple tracking-[0.02em] leading-relaxed">
            Refund Policy
          </h2>
          
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-off-white/70 leading-relaxed font-normal tracking-wide">
            <p>
              Reservation deposits for Kielo bicycles are fully refundable until the rider's fit process has been completed and frame production has begun.
            </p>
            
            <p>
              If a rider chooses not to proceed before that point, the deposit will be refunded in full.
            </p>
            
            <p>
              Once custom frame fabrication has started, deposits become non-refundable due to the bespoke nature of the build.
            </p>
            
            <p className="text-off-white/60">
              For any questions or refund requests, please contact <a href="mailto:hello@kielo.cc" className="text-off-white/70 hover:text-off-white/90 underline decoration-off-white/30 hover:decoration-off-white/50 underline-offset-4">hello@kielo.cc</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundPolicy