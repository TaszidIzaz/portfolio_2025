
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cal from "@calcom/embed-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const emailRef = useRef(null);
  const scheduleRef = useRef(null);
  const buttonRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const revealElements = [headingRef, emailRef, scheduleRef, buttonRef, calendarRef];

    revealElements.forEach((el) => {
      gsap.fromTo(el.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top bottom-=100",
            once: true
          }
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#181818] relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[55px] px-8"
      id="contact"
    >
      <div className="max-w-[1251px] mx-auto my-0 px-8 max-md:px-10 max-sm:px-5">
        {/* Header and Contact Info */}
        <div className="mb-20">
          <div className="overflow-hidden mb-20">
            <h2 ref={headingRef}>
              <span className="block text-[52px] font-bold leading-[120%] tracking-[-0.208px] mb-4 max-md:text-[48px] max-sm:text-[30px] text-white">
                Got a project in mind?
              </span>
              <span className="block text-[40px] font-regular leading-[120%] tracking-[-0.208px] max-md:text-[32px] max-sm:text-[20px] max-sm:whitespace-nowrap text-[#999999]">
                Let's bring your vision to life
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="overflow-hidden mt-auto">
              <div className="flex justify-between items-center flex-col gap-8 md:flex-row">
                <div ref={emailRef} className="w-full md:w-auto">
                  <a
                    href="mailto:taszid.nahi@gmail.com"
                    className="text-[32px] max-md:text-[24px] font-semibold text-white hover:opacity-80 transition-opacity block relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-left after:origin-right"
                  >
                    taszid.nahi@gmail.com
                  </a>
                </div>
                
                <div ref={buttonRef} className="w-full md:w-auto">
                  <a 
                    href="https://cal.com/taszid-izaz/onboarding-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full md:w-auto relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-left after:origin-right"
                  >
                    <svg width="310" height="52" viewBox="0 0 443 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-[250px] hover:opacity-80 transition-opacity">
                      <text
                        fill="white"
                        style={{ whiteSpace: "pre" }}
                        fontFamily="Neue Haas Grotesk Display Pro"
                        fontSize="52"
                        fontWeight="600"
                        letterSpacing="-0.004em"
                      >
                        <tspan x="0.000732422" y="53.0653">
                          Let's Collaborate
                        </tspan>
                      </text>
                      <path
                        d="M426.175 23.7448L428.498 23.7448L428.494 21.4251L426.175 21.4218L426.175 23.7448ZM423.852 23.7448L423.852 49.9928L428.498 49.9928L428.498 23.7448L423.852 23.7448ZM426.175 21.4218L399.927 21.4218L399.927 26.0677L426.175 26.0677L426.175 21.4218ZM424.534 22.1043L396.646 49.9928L399.927 53.2738L427.815 25.3853L424.534 22.1043Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Widget */}
        <div ref={calendarRef} className="w-full h-[1000px] md:h-[600px] lg:h-[600px] bg-[#242424] rounded-lg overflow-hidden">
          <Cal
            calLink="taszid-izaz/onboarding-meeting"
            style={{ width: '100%', height: '100%', border: 'none' }}
            config={{
              layout: 'month_view',
              hideEventTypeDetails: "false",
              theme: 'dark',
              defaultView: 'daily'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

