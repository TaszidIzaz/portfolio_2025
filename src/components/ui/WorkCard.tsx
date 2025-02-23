
import { Link } from "react-router-dom";

interface WorkCardProps {
  image: string;
  title: string;
  year: string;
  id?: string;
}

const WorkCard = ({ image, title, year, id }: WorkCardProps) => {
  return (
    <Link to={`/works/${id}`} className="relative group block">
      <img
        src={image}
        alt={title}
        className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-[32px] font-semibold text-[#101010] max-sm:text-2xl">
          {title}
        </h3>
        <div className="text-xl font-medium text-[rgba(16,16,16,0.6)]">
          {year}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
