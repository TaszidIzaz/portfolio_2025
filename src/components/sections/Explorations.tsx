import { Link } from 'react-router-dom';

const explorations = [
  {
    id: 1,
    title: "Minimal Portfolio Website",
    image: "/images/explorations/project1.jpg",
    date: "Dec 2023"
  },
  {
    id: 2,
    title: "Client Outsourcing Portal Design",
    image: "/images/explorations/project2.jpg",
    date: "Nov 2023"
  },
  {
    id: 3,
    title: "Nuclino Creative Agency Website",
    image: "/images/explorations/project3.jpg",
    date: "Oct 2023"
  },
  {
    id: 4,
    title: "Rentyard Website Design",
    image: "/images/explorations/project4.jpg",
    date: "Sep 2023"
  },
  {
    id: 5,
    title: "CRM Software Website Design",
    image: "/images/explorations/project5.jpg",
    date: "Aug 2023"
  },
  {
    id: 6,
    title: "Magma Website Development",
    image: "/images/explorations/project6.png",
    date: "Jul 2023"
  },
  {
    id: 7,
    title: "Atis Website Development",
    image: "/images/explorations/project7.png",
    date: "Jun 2023"
  },
  {
    id: 8,
    title: "Cloudly Healthcare App Case Study",
    image: "/images/explorations/project8.png",
    date: "May 2023"
  },
  {
    id: 9,
    title: "DUO Agency Website Development",
    image: "/images/explorations/project9.png",
    date: "Apr 2023"
  },
  {
    id: 10,
    title: "Remeal Mobile App Case Study",
    image: "/images/explorations/project10.png",
    date: "Mar 2023"
  },
  {
    id: 11,
    title: "3D Pixelated Design",
    image: "/images/explorations/project11.png",
    date: "May 2023"
  },
  ,
  {
    id: 12,
    title: "Three JS Space Exploration",
    image: "/images/explorations/project15.jpg",
    date: "May 2023"
  },
  
];

const Explorations = () => {
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
              EXPLORATIONS
            </tspan>
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-16 max-w-screen-xl mx-auto my-10 max-md:grid-cols-1">
        {explorations.map((project, index) => (
          <div key={project.id} className="space-y-3">
            <Link to={`/explorations/${project.id}`} className="block">
              <div className="group relative h-[350px] max-md:h-[300px] overflow-hidden cursor-pointer bg-black/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 mix-blend-multiply" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 z-20 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                  </svg>
                </div>
                {/* Project Number */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-white text-lg">0{index + 1}</span>
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-center px-0">
              <Link to={`/explorations/${project.id}`} className="hover:opacity-80 transition-opacity">
                <h3 className="text-xl font-medium">{project.title}</h3>
              </Link>
              <span className="text-base text-gray-600">{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explorations;