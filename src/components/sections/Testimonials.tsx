import React, { useRef } from 'react';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  
  const testimonials = [
  
    {
        quote: "Taszid blends creativity with strategic design thinking, delivering functional, user-centered experiences. His proactive approach, adaptability, and teamwork make him an invaluable addition to any organization.",
        name: "Toukir Tasnim Chowdhury",
        role: "Product Manager",
        company: "Algorizin",
        logo: "/images/testimonials/algorizin.png" 
      },
      {
        quote: "Taszid did a phenomenal job bringing my vision to life. His creativity, professionalism, and punctuality are outstanding. He designed FIZCLO’s website with exceptional quality and attention to detail.",
        name: "Mohammad Affan",
        role: "Founder",
        company: "FIZCLO",
        logo: "/images/testimonials/fiz.png "
      },
      {
        quote: "Taszid excels in product design, transforming complex ideas into intuitive, user-friendly solutions. His creativity, attention to detail, and collaboration make him a valuable asset to any team.",
        name: "Salman A Rahman",
        role: "Founder",
        company: "HITH Foundation",
        logo: "/images/testimonials/hith.png" 
      },
      
      {
        quote: "Taszid is the man who understands the assignment with just a few instructions. That makes working with him super efficient and effective. You simply tell him the vision you have and he turns it into a reality effortlessly. ",
        name: "Sajid Hossain",
        role: "CPO",
        company: "Profyl.ai",
        logo: "/images/testimonials/profyl.png" 
      },
      {
        quote: "Taszid is an excellent and very experienced guy for any project. He is a great designer and developer. He is also a great team member. He is a great guy to work with.",
        name: "Shahriar Islam Shojeb",
        role: "CEO and Founder",
        company: "Profyl.ai",
        logo: "/images/testimonials/profyl.png" 
      },
      {
        quote: "Taszid was a great asset to my team",
        name: "Saber Ali",
        role: "CEO and Founder",
        company: "SquidX",
        logo: "/images/testimonials/squidx.png" 
      }
      
    // ... rest of the testimonials array ...
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 326; // Updated for new card width (320px) + gap
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section className="max-w-screen-xl mx-auto py-[120px] px-0 bg-white">
      <div className="flex items-start gap-4 mb-6">
        <svg
          width="200"
          height="24"
          viewBox="0 0 200 24"
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
            className="tracking-wider"
          >
            <tspan x="0" y="16.3516">WORDS OF PRAISE</tspan>
          </text>
        </svg>
      </div>

      <div className="mt-16 relative">
        
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors max-md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#181818] rotate-180">
            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
          </svg>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors max-md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#181818]">
            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
          </svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-scroll hide-scrollbar"  // Changed from overflow-visible
        >
          <div className="flex gap-6 min-w-max pb-8 px-0">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-[320px] bg-[#181818] rounded-lg p-6 flex flex-col"
                style={{
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                  transform: 'translate3d(0,0,0)'
                }}
              >
                <p className="text-[22px] leading-[1.3] text-white mb-24">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#999]">{testimonial.role}</p>
                  </div>
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="h-6 w-6 object-contain rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;