
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);  // Add this line
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const scrollIconRef = useRef(null);
  const titles = ["Product Designer", "UX Design Engineer", "Motion Designer", "Software Engineer"];

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

    // Video animation with once: true
    gsap.fromTo(videoRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom-=100",
          once: true // Only triggers once
        }
      }
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
          <h1 
            ref={headingRef}
            className="text-[52px] font-bold leading-[62.4px] tracking-[-0.52px] text-[#181818] mb-[60px] 
              max-lg:text-[42px] max-lg:leading-[1.3] max-md:text-[36px] max-sm:text-[32px] max-sm:leading-[1.3]"
          >
            <span className="max-sm:hidden">{'\u00A0'.repeat(35)}</span>
            Helping Ambitious Founders Bring Their Ideas to Life with Speed, Scale & Impact as a{' '}
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
        </div>

        <div className="flex flex-col items-end pl-[80px] max-md:items-start max-md:pl-0">
          <div className="flex flex-col items-start pl-[80px] max-md:items-start max-md:pl-0">
            <div className="overflow-hidden">
              <div 
                ref={descriptionRef}
                className="text-xl font-regular leading-7 tracking-[-0.08px] text-[#666] max-w-[900px] mb-8 max-sm:text-base max-sm:text-left"
              >
                I help founders move beyond just dreaming about their ideas and start
                building them. My goal is to make the journey from vision to reality
                feel easy, exciting, and achievable, so they can launch with confidence
                and make an impact.
              </div>
            </div>
            <div className="overflow-hidden">
              <div ref={buttonRef} className="w-fit mb-8 flex items-center gap-4 max-md:flex-col max-md:w-full max-md:items-start">
                <a
                  href="#contact"
                  className="inline-block text-md bg-black text-white py-4 px-4 font-semibold rounded-md 
                    relative overflow-hidden border border-transparent hover:border-black transition-all
                    before:absolute before:inset-0 before:bg-white before:translate-x-[-100%] 
                    hover:before:translate-x-0 before:transition-transform before:duration-300
                    hover:text-black transition-colors duration-300 isolate
                    hover:pl-4 hover:pr-2 group max-md:text-sm max-md:w-full max-md:text-center"
                >
                  <span className="relative z-10 flex items-center gap-2 max-md:justify-center">
                    Let's Discuss Your Project
                    <svg 
                      className="w-0 h-5 transition-all duration-300 group-hover:w-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" 
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
                <div className="flex items-center gap-2 max-md:mt-4 max-md:pl-4">
                  <div className="relative flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-md text-gray-600 font-medium">3 spots available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div 
        ref={scrollIconRef} 
        className=" -mb-[40px] text-gray-500"
      >
        <svg
          width="86"
          height="24"
          viewBox="0 0 86 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <path
            d="M6.35005 21.5117L5.83379 22.0279L6.35005 22.5427L6.86631 22.0279L6.35005 21.5117ZM6.86631 20.9954L1.0329 15.162L0.000391006 16.1945L5.83379 22.0279L6.86631 20.9954ZM6.86631 22.0279L12.6997 16.1945L11.6672 15.162L5.83379 20.9954L6.86631 22.0279ZM7.07922 21.5117V0.000244141H5.62087V21.5117H7.07922Z"
            fill="currentColor"
          />
          <text
            transform="translate(22.7001 0.000366211)"
            fill="currentColor"
            style={{ whiteSpace: "pre" }}
            fontFamily="Neue Haas Grotesk Display Pro"
            fontSize="16"
            fontWeight="500"
          >
            <tspan x="0" y="17.088">
              SCROLL
            </tspan>
          </text>
        </svg>
      </div>

      <div 
        ref={videoRef}
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[800px] max-md:h-[500px] px-20 pb-10 max-md:px-10 max-sm:px-5 bg-transparent"
      >
        <div className="relative h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" h-full w-full object-cover rounded-lg"
          >
            <source src="Media/Showreel.mp4" type="video/mp4" />
            <source src="/Media/Showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Remove the Video Modal section since we don't need it anymore */}
      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-7xl aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="Media/Showreel.mp4" type="video/mp4" />
              <source src="/Media/Showreel.mp4" type="video/mp4" />
            </video>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

