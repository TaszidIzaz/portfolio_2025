const About = () => {
  return (
    <section className="bg-[#181818] text-white py-[60px] max-md:py-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[100vw]">
      <div className="max-w-screen-xl mx-auto px-10 md:px-20">
        <div>
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
        <div className="text-[52px] font-semibold leading-[72.8px] tracking-[-1px] text-[#DFDED9] max-sm:text-4xl">
          <span>
            Taszid is a Bangladesh-based product designer crafting
            human-centered experiences. Currently a Product Designer at
          </span>
          <a
            href="https://algorizin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <svg
              width="223"
              height="67"
              viewBox="0 0 223 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                fill="white"
                style={{ whiteSpace: "pre" }}
                fontFamily="Neue Haas Grotesk Display Pro"
                fontSize="48"
                fontWeight="500"
                letterSpacing="-0.004em"
              >
                <tspan x="12.00073" y="50.764">Algorizin</tspan>
              </text>
              <path
                d="M195.407 28.2178L213.604 27.979L213.365 46.1758M212.324 29.2592L192.98 48.6031"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;