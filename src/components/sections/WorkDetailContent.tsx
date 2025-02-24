
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getWork, getAdjacentWorks } from "@/data/works";
import { useEffect } from "react";

interface WorkDetailContentProps {
  workId: string | undefined;
}

const WorkDetailContent = ({ workId }: WorkDetailContentProps) => {
  const work = getWork(workId);
  const { prev, next } = getAdjacentWorks(workId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [workId]);

  if (!work) {
    console.log("Work ID:", workId);
    return <div className="text-center py-20">Work not found</div>;
  }

  const renderContent = (content: string) => {
    const parts = content.split('\n\n');
    return parts.map((part, index) => {
      if (part.includes('•') || part.includes('✔') || part.includes('🚀') || part.includes('✅') || part.includes('💰') || part.includes('📈')) {
        const [intro, ...points] = part.split(/[•✔🚀✅💰📈]/);
        return (
          <div key={index}>
            {intro && <p className="mb-4">{intro}</p>}
            <ul className="list-disc pl-6 my-4 space-y-2">
              {points.map((point, i) => (
                <li key={i}>{point.trim()}</li>
              ))}
            </ul>
          </div>
        );
      }
      return <p key={index} className="mb-4">{part}</p>;
    });
  };

  return (
    <article className="py-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 mb-16 text-sm">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <ChevronRight size={14} />
        <Link to="/works" className="hover:opacity-70 transition-opacity">Works</Link>
        <ChevronRight size={14} />
        <span className="text-gray-500">{work.title}</span>
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
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {work.stack && work.stack.length > 0 && (
            <div>
              <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">STACK</h2>
              <div className="flex gap-4">
                {work.stack.map((tech, index) => (
                  <img 
                    key={index}
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            </div>
          )}

          {work.industry && work.industry.length > 0 && (
            <div>
              <h2 className="text-sm uppercase mb-2 text-gray-500 font-['Mono45_Headline']">INDUSTRY</h2>
              <div className="flex flex-wrap gap-2">
                {work.industry.map((item, index) => (
                  <span 
                    key={index}
                    className="text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Title and Description */}
        <div>
          <h1 className="text-5xl font-bold mb-8 leading-tight">{work.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{work.description.overview}</p>
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

      {/* Rest of the component remains the same... */}
      {/* Hero Image */}
      <img
        src={work.images[0]}
        alt={work.title}
        className="w-full h-[600px] object-cover mb-20 max-md:h-[400px]"
      />

      {/* STAR Description */}
      <section className="mb-20 space-y-32">
        <div className="grid grid-cols-[200px,1fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
          <h2 className="text-sm uppercase text-gray-500 font-['Mono45_Headline']">THE CHALLENGE</h2>
          <div>
            <h3 className="text-3xl font-medium mb-6">{work.description.situation.heading}</h3>
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(work.description.situation.content)}
            </div>
          </div>
        </div>

        {/* Image Grid after Situation */}
        <div className="space-y-8">
          <img src={work.images[1]} alt="Process 1" className="w-full h-[600px] object-cover max-md:h-[400px]" />
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-4">
            <img src={work.images[2]} alt="Process 2" className="w-full h-[400px] object-cover max-md:h-[300px]" />
            <img src={work.images[3]} alt="Process 3" className="w-full h-[400px] object-cover max-md:h-[300px]" />
          </div>
        </div>

        <div className="grid grid-cols-[200px,1fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
          <h2 className="text-sm uppercase text-gray-500 font-['Mono45_Headline']">THE TASK</h2>
          <div>
            <h3 className="text-3xl font-medium mb-6">{work.description.task.heading}</h3>
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(work.description.task.content)}
            </div>
          </div>
        </div>

        {/* Image Grid after Task */}
        <div className="space-y-8">
          <img src={work.images[4]} alt="Process 4" className="w-full h-[600px] object-cover max-md:h-[400px]" />
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-4">
            <img src={work.images[5]} alt="Process 5" className="w-full h-[400px] object-cover max-md:h-[300px]" />
            <img src={work.images[6]} alt="Process 6" className="w-full h-[400px] object-cover max-md:h-[300px]" />
          </div>
        </div>

        <div className="grid grid-cols-[200px,1fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
          <h2 className="text-sm uppercase text-gray-500 font-['Mono45_Headline']">THE ACTION</h2>
          <div>
            <h3 className="text-3xl font-medium mb-6">{work.description.action.heading}</h3>
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(work.description.action.content)}
            </div>
          </div>
        </div>

        {/* Image Grid after Action */}
        <div className="space-y-8">
          <img src={work.images[7]} alt="Process 7" className="w-full h-[600px] object-cover max-md:h-[400px]" />
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-4">
            <img src={work.images[8]} alt="Process 8" className="w-full h-[400px] object-cover max-md:h-[300px]" />
            <img src={work.images[9]} alt="Process 9" className="w-full h-[400px] object-cover max-md:h-[300px]" />
          </div>
        </div>

        <div className="grid grid-cols-[200px,1fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
          <h2 className="text-sm uppercase text-gray-500 font-['Mono45_Headline']">THE RESULT</h2>
          <div>
            <h3 className="text-3xl font-medium mb-6">{work.description.result.heading}</h3>
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(work.description.result.content)}
            </div>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="mb-20 grid gap-20">
        {work.content.map((block, index) => (
          block.type === 'image' ? (
            <img
              key={index}
              src={block.content}
              alt={`Project detail ${index + 1}`}
              className="w-full h-auto"
            />
          ) : (
            <p key={index} className="text-gray-600 leading-relaxed text-lg">
              {block.content}
            </p>
          )
        ))}
      </section>

      {/* Next/Previous Projects */}
      <section className="grid grid-cols-2 gap-10 mb-20 max-md:grid-cols-1">
        {prev && (
          <Link
            to={`/works/${prev.id}`}
            className="group relative overflow-hidden block"
          >
            <img
              src={prev.image}
              alt={prev.title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm mb-2">Previous Project</div>
                <div className="text-xl font-semibold">{prev.title}</div>
              </div>
            </div>
          </Link>
        )}
        {next && (
          <Link
            to={`/works/${next.id}`}
            className="group relative overflow-hidden block"
          >
            <img
              src={next.image}
              alt={next.title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm mb-2">Next Project</div>
                <div className="text-xl font-semibold">{next.title}</div>
              </div>
            </div>
          </Link>
        )}
      </section>
    </article>
  );
};

export default WorkDetailContent;
