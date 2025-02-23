
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

  return (
    <article className="py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        <Link to="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/works" className="hover:text-black transition-colors">
          Works
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">{work.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-20">
        <h1 className="text-5xl font-bold mb-10">{work.title}</h1>
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
          <div>
            <h2 className="text-xl font-semibold mb-2">Client</h2>
            <p className="text-gray-600">{work.client}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Type</h2>
            <p className="text-gray-600">{work.type}</p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <img
        src={work.images[0]}
        alt={work.title}
        className="w-full h-[600px] object-cover mb-20"
      />

      {/* STAR Description */}
      <section className="mb-20 grid gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Situation/Problem</h2>
          <p className="text-gray-600 leading-relaxed">{work.description.situation}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Task</h2>
          <p className="text-gray-600 leading-relaxed">{work.description.task}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Action</h2>
          <p className="text-gray-600 leading-relaxed">{work.description.action}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Result</h2>
          <p className="text-gray-600 leading-relaxed">{work.description.result}</p>
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
