import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ src, alt, className, width, height }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Extract any transform/transition classes to apply to the wrapper
  const hasScaleClass = className?.includes('group-hover:scale');
  
  // Remove transition and scale classes from what we'll pass to the img
  const imgClassName = className?.replace(/transition-all|duration-\d+|group-hover:scale-\d+/g, '') || '';
  
  return (
    <div 
      className={`relative overflow-hidden w-full h-full ${hasScaleClass ? 'transition-all duration-700 group-hover:scale-110' : ''}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`${imgClassName} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;