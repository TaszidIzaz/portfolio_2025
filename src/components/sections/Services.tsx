import React from 'react';

const Services = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-[60px] md:py-[120px] px-0">
      <div className="flex items-start gap-4 mb-6">
        <svg
          width="250"
          height="24"
          viewBox="0 0 250 24"
          className="text-[#181818] max-sm:w-[180px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
            fontSize="20"
            className="tracking-wider"
          >
            <tspan x="0" y="16.3516">SERVICES</tspan>
          </text>
        </svg>
      </div>

      <div className="mt-8 md:mt-16 space-y-16 md:space-y-32">
        {/* Product Design */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <div className="w-full md:w-[40%] aspect-square bg-[#F3F3F3] rounded-lg overflow-hidden">
            <img 
              src="/images/work3.jpg" 
              alt="Product Design"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center justify-between">
              Product Design
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#181818] max-md:hidden">
                
              </svg>
            </h2>
            <p className="text-[#666] text-base md:text-lg mb-8 md:mb-12">
              A well-designed website has the power to captivate, engage and elevate your brand. I specialize in crafting custom-coded sites that are tailored to your unique identity, blending sleek design with seamless functionality.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">01</span>
                  <h3 className="text-base md:text-xl font-semibold">UX Research</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">02</span>
                  <h3 className="text-base md:text-xl font-semibold">Product & Competitor Analysis</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">03</span>
                  <h3 className="text-base md:text-xl font-semibold">Design & Launch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Website Development */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <div className="w-full md:w-[40%] aspect-square bg-[#F3F3F3] rounded-lg overflow-hidden">
            <img 
              src="/images/work1.jpg" 
              alt="Website Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center justify-between">
              Website Development
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#181818] max-md:hidden">
                
              </svg>
            </h2>
            <p className="text-[#666] text-base md:text-lg mb-8 md:mb-12">
              A well-designed website has the power to captivate, engage and elevate your brand. I specialize in crafting custom-coded sites that are tailored to your unique identity, blending sleek design with seamless functionality.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">01</span>
                  <h3 className="text-base md:text-xl font-semibold">Creative Coding</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">02</span>
                  <h3 className="text-base md:text-xl font-semibold">Motion & Animations</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">03</span>
                  <h3 className="text-base md:text-xl font-semibold">Deployment</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Website Design */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <div className="w-full md:w-[40%] aspect-square bg-[#F3F3F3] rounded-lg overflow-hidden">
            <img 
              src="/images/work2.jpg" 
              alt="Website Design"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center justify-between">
              Website Design
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#181818] max-md:hidden">
                
              </svg>
            </h2>
            <p className="text-[#666] text-base md:text-lg mb-8 md:mb-12">
              A well-designed website has the power to captivate, engage and elevate your brand. I specialize in crafting custom-coded sites that are tailored to your unique identity, blending sleek design with seamless functionality.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">01</span>
                  <h3 className="text-base md:text-xl font-semibold">Research</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">02</span>
                  <h3 className="text-base md:text-xl font-semibold">Wireframing</h3>
                </div>
                <div className="h-[1px] bg-[#E5E5E5] w-full mt-4 md:mt-6"></div>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs md:text-sm text-[#666]">03</span>
                  <h3 className="text-base md:text-xl font-semibold">Interactive Prototyping</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Services;