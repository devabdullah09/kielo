// Full-width image section component for additional visual breaks - grayscale/black theme
interface ImageSectionProps {
  image: string
  height?: 'short' | 'medium' | 'tall'
}

const ImageSection = ({ image, height = 'medium' }: ImageSectionProps) => {
  const heightClasses = {
    short: 'h-[30vh] sm:h-[40vh]',
    medium: 'h-[50vh] sm:h-[60vh]',
    tall: 'h-[70vh] sm:h-[80vh]'
  }

  return (
    <div 
      className={`relative ${heightClasses[height]} w-full`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%) brightness(0.3)',
      }}
    >
      {/* Dark overlay to maintain black theme */}
      <div className="absolute inset-0 bg-charcoal/60" />
    </div>
  )
}

export default ImageSection