// Full-width image section component for additional visual breaks - grayscale/black theme
interface ImageSectionProps {
  image: string
  height?: 'short' | 'medium' | 'tall'
  cropPosition?: 'center' | 'bottom' | 'top'
}

const ImageSection = ({ image, height = 'medium', cropPosition = 'center' }: ImageSectionProps) => {
  const heightClasses = {
    short: 'h-[30vh] sm:h-[40vh]',
    medium: 'h-[50vh] sm:h-[60vh]',
    tall: 'h-[70vh] sm:h-[80vh]'
  }

  const positionClasses = {
    center: 'center',
    bottom: 'center bottom',
    top: 'center top'
  }

  return (
    <div 
      className={`relative ${heightClasses[height]} w-full overflow-hidden ${cropPosition === 'bottom' ? '-mt-px' : ''}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: cropPosition === 'bottom' ? '140%' : 'cover',
        backgroundPosition: cropPosition === 'bottom' ? 'center 65%' : positionClasses[cropPosition],
        filter: 'grayscale(100%) brightness(0.3)',
      }}
    >
      {/* Dark overlay to maintain black theme */}
      <div className="absolute inset-0 bg-charcoal/60" />
      
      {/* Top crop overlay for bottom-positioned images to remove white stripe and frame below seatpost collar */}
      {cropPosition === 'bottom' && (
        <>
          {/* Large charcoal overlay to completely cover white stripe */}
          <div 
            className="absolute top-0 left-0 right-0 bg-charcoal z-20"
            style={{ height: '18%' }}
          />
          {/* Additional subtle gradient for smooth transition */}
          <div 
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-transparent z-10"
            style={{ height: '25%' }}
          />
        </>
      )}
    </div>
  )
}

export default ImageSection