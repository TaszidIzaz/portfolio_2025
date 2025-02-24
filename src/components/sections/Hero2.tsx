
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);  // Add this line
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const scrollIconRef = useRef(null);
  const titles = ["Design", "Project", "Idea" ];

  // Add these refs
  const mainImageRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTitleRef = useRef(null);

  useEffect(() => {
    // Title rotation animation
    const interval = setInterval(() => {
      gsap.to(titleRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentTitle((prev) => (prev + 1) % titles.length);
          gsap.fromTo(titleRef.current,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.5, onComplete: () => {
              // Update underline width based on new text
              if (titleRef.current && underlineRef.current) {
                const width = titleRef.current.offsetWidth;
                gsap.to(underlineRef.current, {
                  width: width,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }
            }}
          );
        }
      });
    }, 2000);

    // Title rotation animation remains the same...
    
    // Create staggered animation timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom",
        once: true // Only triggers once
      }
    });
    
    tl.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    )
    .fromTo(descriptionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .fromTo(buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );


    // Scroll icon animation
    gsap.fromTo(scrollIconRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      }
    );

    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto my-0 py-[80px] max-md:py-10">
        <div className="max-w-[1033px] overflow-hidden">
          <h1 ref={headingRef} className="text-[52px] font-bold leading-[62.4px] tracking-[-0.52px] text-[#181818] mb-[60px] 
              max-lg:text-[42px] max-lg:leading-[1.3] max-md:text-[32px] max-sm:text-[28px] max-sm:leading-[1.3]"
          >
            <span className="max-md:hidden">{'\u00A0'.repeat(23)}</span>
            I love turning complex ideas into simple solutions, with humans at the heart of each{' '}
            <span className="inline-block relative">
              <span className="inline-block h-[62.4px] overflow-hidden relative top-[14px] left-[6px] max-sm:h-[42px] max-sm:top-[8px] max-sm:left-[4px]">
                <span ref={titleRef} className="inline-block font-normal">
                  {titles[currentTitle]}
                </span>
              </span>
              <span 
                ref={underlineRef} 
                className="absolute h-[2px] bg-black -bottom-2 left-[6px]"
                style={{ width: 0 }}
              ></span>
            </span>
          </h1>
    
          {/* Scroll Indicator */}
          <div className="absolute mt-8 mb-32">
            <div ref={scrollIconRef} className="flex items-center gap- mt-60 -ml-10">
              <svg
                width="80"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#181818] rotate-90"
              >
                <path
                  d="M22.2412 11.9994L22.7574 12.5157L23.2722 11.9994L22.7574 11.4832L22.2412 11.9994ZM21.7249 11.4832L15.8915 17.3166L16.924 18.3491L22.7574 12.5157L21.7249 11.4832ZM22.7574 11.4832L16.924 5.64978L15.8915 6.68229L21.7249 12.5157L22.7574 11.4832ZM22.2412 11.2703H0.729736V12.7286H22.2412V11.2703Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-['Mono45_Headline'] text-[16px] text-[#181818]">
                SCROLL DOWN
              </span>
            
            </div>
          </div>
        </div>  
    
          {/* Added image section */}
          <div className="w-full flex justify-end mb-40 max-md:justify-start max-md:mb-20">
            <div ref={mainImageRef} className="w-[70%] h-[60vh] relative max-md:w-full max-md:h-[40vh]">
              <img
                src="/images/work1.jpg"
                alt="Design Process"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
    
          <div className="flex flex-col mt-80px max-md:mt-40px">
            <div className="flex justify-between w-full max-md:flex-col max-md:gap-8">
              {/* Left Column - About Me + Image */}
              <div className="flex flex-col w-[32%] max-md:w-full">
                <div className="mb-6">
                  <svg
                    width="91"
                    height="24"
                    viewBox="0 0 91 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#181818]"
                  >
                    <path
                      d="M22.2412 11.9994L22.7574 12.5157L23.2722 11.9994L22.7574 11.4832L22.2412 11.9994ZM21.7249 11.4832L15.8915 17.3166L16.924 18.3491L22.7574 12.5157L21.7249 11.4832ZM22.7574 11.4832L16.924 5.64978L15.8915 6.68229L21.7249 12.5157L22.7574 11.4832ZM22.2412 11.2703H0.729736V12.7286H22.2412V11.2703Z"
                      fill="currentColor"
                    />
                    <text
                      transform="translate(33.2726 -0.000183105)"
                      fill="currentColor"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Mono45 Headline"
                      fontSize="16"
                    >
                      <tspan x="0" y="16.3516">ABOUT ME</tspan>
                    </text>
                  </svg>
                </div>
                <div className="h-[280px] mt-auto mb-8 max-md:mt-4">
                  <img
                    src="/images/work2.jpg"
                    alt="About Me"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
    
              {/* Right Column - Text Content */}
              <div className="flex flex-col items-start w-[52%] max-md:w-full">
                <div className="overflow-hidden">
                  <div 
                    ref={descriptionRef}
                    className="text-xl font-regular leading-7 tracking-[-0.08px] text-[#666] mb-8 
                      max-md:text-lg max-sm:text-base"
                  >
                    The journey from concept to a finished product in design can be complex, often losing the core vision along the way. As a designer, I've always seen the need for a seamless connection between creativity and execution. Many designs though visually appealing, fall short in usability or impact when not executed with the user's needs in mind.
                  </div>
                  <div 
                    className="text-xl font-regular leading-7 tracking-[-0.08px] text-[#666] mb-8 
                      max-md:text-lg max-sm:text-base"
                  >
                    In my career, I bridge that gap. I'm passionate about creating products that not only look good but solve real problems. By balancing creative innovation with practical user experience principles, I craft solutions that resonate with people and drive meaningful results in today's dynamic digital landscape.
                  </div>
                </div>
                <div className="overflow-hidden w-full">
                  <div ref={buttonRef} className="w-fit mb-8">
                    <a
                      href="#contact"
                      className="inline-block text-md bg-black text-white py-4 px-4 font-semibold rounded-md hover:bg-gray-800 transition-colors
                        max-md:text-sm max-md:py-3"
                    >
                      Schedule A Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default Hero2;

