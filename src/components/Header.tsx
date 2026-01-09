const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-off-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 sm:h-14 md:h-16">
          {/* Logo - centered, responsive */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center transition-opacity duration-300 hover:opacity-80">
              <img 
                src="/images/Logo/kielo-logo-lockup.svg" 
                alt="Kielo" 
                className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header