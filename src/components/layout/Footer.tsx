import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef();
  
  useEffect(() => {
    const heroText = new SplitType(".footer-name", { types: "chars" });
    
    gsap.set(heroText.chars, { y: 400 });
    
    gsap.to(heroText.chars, {
      y: 0,
      duration: 1,
      stagger: 0.025,
      ease: "power4.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        once: true
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative" ref={container}>
      <footer className="bg-white py-10 w-full">
        <h2 
          className="footer-name font-black leading-none text-[#181818] text-center mb-10 whitespace-nowrap"
          style={{ fontSize: "16vw" }}
        >
          Taszid Izaz
        </h2>
        
        <div className="flex justify-between items-center max-w-screen-xl mx-auto my-0 pt-3 pb-8 px-16 max-sm:flex-wrap max-sm:gap-y-8 max-sm:gap-x-12 max-sm:justify-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-[#181818] hover:opacity-80 transition-opacity"
          >
            Linkedin
          </a>

          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-[#181818] hover:opacity-80 transition-opacity"
          >
            Dribbble
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-[#181818] hover:opacity-80 transition-opacity"
          >
            Twitter
          </a>

          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-[#181818] hover:opacity-80 transition-opacity"
          >
            Behance
          </a>

          <button
            onClick={scrollToTop}
            className="text-gray-500 hover:text-gray-700 transition-colors max-sm:mt-4"
          >
            <svg
              width="126"
              height="25"
              viewBox="0 0 126 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65056 1.06401L7.16682 0.547757L6.65056 0.032959L6.13431 0.547757L6.65056 1.06401ZM6.13431 1.58027L11.9677 7.41367L13.0002 6.38116L7.16682 0.547757L6.13431 1.58027ZM6.13431 0.547757L0.300903 6.38116L1.33342 7.41367L7.16682 1.58027L6.13431 0.547757ZM5.92139 1.06401V22.5754H7.37974V1.06401H5.92139Z"
                fill="currentColor"
              />
              <text
                transform="translate(23.0006 0.0332031)"
                fill="currentColor"
                style={{ whiteSpace: "pre" }}
                fontFamily="Mono45 Headline"
                fontSize="20"
                fontWeight="500"
              >
                <tspan x="0" y="18.36">
                  Back To Top
                </tspan>
              </text>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
