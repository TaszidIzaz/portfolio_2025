
import WorkCard from "../ui/WorkCard";
import { Link } from 'react-router-dom';
import { works } from "@/data/works";

const Works = () => {
  return (
    <section className="py-[60px] max-md:py-10">
      <div className="mb-16">
        <svg
          width="133"
          height="24"
          viewBox="0 0 133 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0123 12.0002L22.5285 12.5165L23.0433 12.0002L22.5285 11.4839L22.0123 12.0002ZM21.496 11.4839L15.6626 17.3173L16.6951 18.3499L22.5285 12.5165L21.496 11.4839ZM22.5285 11.4839L16.6951 5.65054L15.6626 6.68305L21.496 12.5165L22.5285 11.4839ZM22.0123 11.271H0.500854V12.7294H22.0123V11.271Z"
            fill="black"
          />
          <text
            transform="translate(33.0437 0.00056839)"
            fill="black"
            style={{ whiteSpace: "pre" }}
            fontFamily="Mono45 Headline"
            fontSize="16"
          >
            <tspan x="0" y="16.3516">
              SELECTED WORKS
            </tspan>
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-screen-xl mx-auto my-10 max-md:grid-cols-1">
        {works.map((work, index) => (
          <div key={work.id} className="space-y-6">
            <Link to={`/works/${work.id}`} className="block">
              <div className="group relative h-[500px] max-md:h-[400px] overflow-hidden cursor-pointer bg-black/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 mix-blend-multiply" />
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Arrow Icon */}
                <div className="absolute top-10 right-10 z-20 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                  </svg>
                </div>
                {/* Project Number */}
                <div className="absolute top-10 left-10 z-20">
                  <span className="text-white text-lg">0{index + 1}</span>
                </div>
                {/* Tags */}
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-3 flex-wrap">
                    {work.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-center px-2">
              <Link to={`/works/${work.id}`} className="hover:opacity-80 transition-opacity">
                <h3 className="text-2xl font-medium">{work.title}</h3>
              </Link>
              <span className="text-lg text-gray-600">{work.year}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <div className="group inline-flex items-center gap-3 cursor-pointer">
          <span className="text-xl font-medium text-[#181818] group-hover:opacity-80 transition-opacity relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#181818] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 group-hover:after:origin-left after:origin-right">
            See All
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#181818] group-hover:translate-x-1 transition-transform">
            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Works;
