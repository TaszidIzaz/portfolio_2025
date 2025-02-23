import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    
    const tl = gsap.timeline();
    
    tl.to(overlayRef.current, {
      duration: 0.8,
      scaleY: 1,
      transformOrigin: 'top',
      ease: 'power2.inOut'
    })
    .to(containerRef.current, {
      duration: 0.2,
      opacity: 0,
      ease: 'power2.inOut'
    })
    .to(overlayRef.current, {
      duration: 0.8,
      scaleY: 0,
      transformOrigin: 'bottom',
      ease: 'power2.inOut'
    })
    .to(containerRef.current, {
      duration: 0.6,
      opacity: 1,
      ease: 'power2.out'
    });
  }, [location.pathname]);

  return (
    <div className="relative">
      <div ref={containerRef}>
        {children}
      </div>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-black transform scale-y-0 z-50"
      />
    </div>
  );
};

export default PageTransition;