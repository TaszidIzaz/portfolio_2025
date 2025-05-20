import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSlider = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);

  const imagesData = {
    row1: [
      '/images/work1.jpg',
      '/images/work2.jpg',
      '/images/work3.jpg',
      '/images/work4.jpg',
      '/images/work5.jpg',
    ] as const,
    row2: [
      '/images/work6.jpg',
      '/images/work7.jpg',
      '/images/work8.jpg',
      '/images/work9.jpg',
      '/images/work10.jpg',
    ] as const
  } as const;

  useEffect(() => {
    // Header and text reveal animations
    gsap.fromTo(headerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top bottom-=100",
          once: true
        }
      }
    );

    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=100",
          once: true
        }
      }
    );

    // Slider animations
    // Update the slider animations
        gsap.fromTo(row1Ref.current, 
          { x: '0', opacity: 0 },
          {
            x: '-50%',
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: 5,
              once: false
            }
          }
        );
    
        gsap.fromTo(row2Ref.current,
          { x: '-50%', opacity: 0 }, // Changed initial position
          {
            x: '0%', // Changed end position
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: 5,
              once: false
            }
          }
        );

    // Slider animations
    // Remove this duplicate block
    gsap.fromTo(row1Ref.current, 
      { x: '0', opacity: 1 },
      {
        x: '-50%',
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 5,
          once: false // Remove once: true to make it repeat
        }
      }
    );

    gsap.fromTo(row2Ref.current,
      { x: '-50%', opacity: 1 },
      {
        x: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 2,
          once: false // Remove once: true to make it repeat
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-[#181818] rounded-[5px]">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 bg-[#181818] rounded-[5px]" />
      <section 
        ref={sectionRef} 
        className="relative text-white py-[60px] max-md:py-10"
      >
        <div className="max-w-screen-xl mx-auto px-0 md:px-20">
          {/* About Header */}
          <div className="overflow-hidden">
            <div ref={headerRef}>
              <svg
                width="91"
                height="24"
                viewBox="0 0 91 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2412 11.9994L22.7574 12.5157L23.2722 11.9994L22.7574 11.4832L22.2412 11.9994ZM21.7249 11.4832L15.8915 17.3166L16.924 18.3491L22.7574 12.5157L21.7249 11.4832ZM22.7574 11.4832L16.924 5.64978L15.8915 6.68229L21.7249 12.5157L22.7574 11.4832ZM22.2412 11.2703H0.729736V12.7286H22.2412V11.2703Z"
                  fill="white"
                />
                <text
                  transform="translate(33.2726 -0.000183105)"
                  fill="white"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Mono45 Headline"
                  fontSize="16"
                >
                  <tspan x="0" y="16.3516">ABOUT ME</tspan>
                </text>
              </svg>
            </div>
          </div>

          {/* Main Text */}
          <div className="w-full mb-20 mt-2 overflow-hidden">
            <h2 
              ref={textRef}
              className="text-[52px] font-bold leading-[1.2] tracking-[-0.52px] text-[#DFDED9] 
                max-lg:text-[42px] max-md:text-[36px] max-sm:text-[32px] max-sm:leading-[1.3]"
            >
              <span className="max-sm:hidden">{'\u00A0'.repeat(38)}</span>
              I'm Taszid, a product designer with 3 years of experience, crafting intuitive interactions. Currently a Product Designer at{' '}
              <a 
                href="https://algorizin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center font-light gap-1 hover:opacity-70 text-white transition-opacity"
              >
                Algorizin
                <ArrowUpRight size={24} className="max-sm:w-5 max-sm:h-5" />
              </a>
            </h2>
          </div>


          {/* Image Sliders */}
          <div className="mt-20 space-y-8 overflow-hidden">
            <div className="relative h-[300px] overflow-hidden">
              <div 
                ref={row1Ref}
                className="flex gap-6 absolute"
                style={{ width: '200%' }}
              >
                {[...imagesData.row1, ...imagesData.row1].map((img, index) => (
                  <div 
                    key={index}
                    className="w-[400px] h-[300px] rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img 
                      src={img} 
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
      
            <div className="relative h-[300px] overflow-hidden">
              <div 
                ref={row2Ref}
                className="flex gap-6 absolute"
                style={{ width: '200%', transform: 'translateX(-50%)' }} // Added initial transform
              >
                {[...imagesData.row2, ...imagesData.row2].map((img, index) => (
                  <div 
                    key={index}
                    className="w-[400px] h-[300px] rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img 
                      src={img} 
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSlider;