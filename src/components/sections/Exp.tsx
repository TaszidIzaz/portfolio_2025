import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Exp = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        once: true
      }
    });

    tl.fromTo(sectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative bg-[#181818]">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 bg-[#181818]" />
      <section 
        ref={sectionRef} 
        className="relative text-white py-[60px] max-md:py-10"
      >
        <div className="max-w-screen-xl mx-auto px-0 md:px-6">
          <div className="flex items-center gap-4 mb-16">
            <svg
              width="200"
              height="24"
              viewBox="0 0 200 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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
                <tspan x="0" y="16.3516">RECENT ADVENTURES</tspan>
              </text>
            </svg>
          </div>
      
          <div className="space-y-8">

            <div className="flex items-center py-8 border-b border-white/10">
              <a href="https://www.unikostudio.co/" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px]">
                UNIKO
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]"> Web Designer </div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right"> October , 2025 - Present </div>
            </div>

            <div className="flex items-center py-8 border-b border-white/10">
              <a href="https://polyuno.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px]">
                Polyuno
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]">Product Designer/ Manager </div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right"> March, 2025 - November, 2025 </div>
            </div>

            <div className="flex items-center py-8 border-b border-white/10">
              <a href="https://profyl.ai" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px]">
                Profyl.ai
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]">Founding Product Designer</div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right">September, 2024 - Present </div>
            </div>

            <div className="flex items-center py-8 border-b border-white/10">
              <a href="https://algorizin.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px]">
                Algorizin
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]">Product Designer</div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right">June, 2024 - Present</div>
            </div>
      
            <div className="flex items-center py-8 border-b border-white/10">
              <a href="https://squidx.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px] relative group">
                SquidX
                
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]">User Experience Designer</div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right">April, 2024 - November, 2024</div>
            </div>
      
            <div className="flex items-center py-8 border-white/10">
              <a href="https://spacecats.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity max-md:text-lg max-sm:text-base w-[200px] relative group">
                SpaceCats
                
              </a>
              <div className="text-2xl text-white max-md:text-lg max-sm:text-base w-[300px]">User Experience Designer</div>
              <div className="text-2xl text-white/60 max-md:hidden ml-auto text-right">May, 2023 - October, 2023</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exp;