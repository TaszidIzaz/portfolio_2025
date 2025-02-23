import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <div className="flex flex-col gap-20">
        {/* Header with arrow icon */}
        <div className="flex items-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mt-2">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-[42px] font-bold leading-[1.2] ml-4 max-w-[800px]">
            I love turning complex ideas into simple solutions, with humans at the heart of every designs
          </h2>
        </div>

        {/* About Me Section */}
        <div className="flex justify-between gap-20 max-lg:flex-col">
          <div className="flex-shrink-0">
            <Link to="/about" className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity">
              ABOUT ME
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="space-y-8 max-w-[800px]">
            <p className="text-lg text-[#666]">
              The journey from concept to a finished product in design can be complex, often losing the core vision along the way. As a designer, I've always seen the need for a seamless connection between creativity and execution. Many designs though visually appealing, fall short in usability or impact when not executed with the user's needs in mind.
            </p>
            <p className="text-lg text-[#666]">
              In my career, I bridge that gap. I'm passionate about creating products that not only look good but solve real problems. By balancing creative innovation with practical user experience principles, I craft solutions that resonate with people and drive meaningful results in today's dynamic igital landscape.
            </p>
            <Link 
              to="/about"
              className="inline-block text-lg font-medium underline hover:opacity-80 transition-opacity"
            >
              Learn more about my life
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;