import { Link } from "react-router-dom";
import { ChevronRight, Lock } from "lucide-react";
import { getWork } from "@/data/works";
import { useEffect } from "react";

interface ProtectedWorkContentProps {
  workId: string | undefined;
}

const ProtectedWorkContent = ({ workId }: ProtectedWorkContentProps) => {
  const work = getWork(workId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [workId]);

  if (!work) {
    return <div className="text-center py-20">Work not found</div>;
  }

  return (
    <article className="py-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-start flex-wrap gap-2 mb-16 text-sm">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <ChevronRight size={14} className="mt-1" />
        <Link to="/works" className="hover:opacity-70 transition-opacity">Works</Link>
        <ChevronRight size={14} className="mt-1" />
        <span className="text-gray-500 break-all">{work.title}</span>
      </div>

      {/* Header Section */}
      <div className="grid grid-cols-[300px,1fr] gap-24 mb-20 max-md:grid-cols-1 max-md:gap-10">
        {/* Left Column - Project Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">CLIENT/OWNER</h2>
            <p className="text-xl">{work.client}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">YEAR</h2>
            <p className="text-xl">{work.year}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">SCOPE OF WORK</h2>
            <div className="flex flex-wrap gap-2">
              {work.tags?.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-100">{tag}</span>
              ))}
            </div>
          </div>

          {work.stack && (
            <div>
              <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">STACK</h2>
              <div className="flex gap-4">
                {work.stack.map((tech, index) => (
                  <img key={index} src={tech.icon} alt={tech.name} className="w-6 h-6" />
                ))}
              </div>
            </div>
          )}

          {work.industry && (
            <div>
              <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">INDUSTRY</h2>
              <div className="flex flex-wrap gap-2">
                {work.industry.map((item, index) => (
                  <span key={index} className="text-gray-600">{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Title and Description */}
        <div>
          <h1 className="text-5xl font-bold mb-8 leading-tight max-md:text-4xl max-sm:text-3xl">{work.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-md:text-lg max-sm:text-base">{work.description.overview}</p>
          {work.liveUrl && (
            <a 
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black hover:opacity-70 transition-opacity"
            >
              View live website
              <span className="ml-2">→</span>
            </a>
          )}
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-[600px] object-cover mb-20 max-md:h-[400px]"
      />

      {/* Protected Content Notice */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-lg" />
        <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-16 flex flex-col items-center text-center">
          <Lock className="w-16 h-16 text-gray-400 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Protected Under NDA</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            This case study contains confidential information and is protected under a Non-Disclosure Agreement. 
            The detailed process, specific implementations, and results are private to respect our client's 
            intellectual property and business privacy.
          </p>
          <a
            href="mailto:taszidizaz@gmail.com"
            className="inline-block bg-black text-white py-4 px-6 rounded-md 
              hover:bg-gray-800 transition-colors duration-300"
          >
            Request Access
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProtectedWorkContent;