
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkDetailContent from "@/components/sections/WorkDetailContent";
import ProtectedWorkContent from "@/components/sections/ProtectedWorkContent";
import Contact from "@/components/sections/Contact";
import { getWork } from "@/data/works";

const WorkDetail = () => {
  const { workId } = useParams<{ workId: string }>();
  const work = getWork(workId);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {work.isPrivate ? (
        <ProtectedWorkContent workId={workId} />
      ) : (
        <WorkDetailContent workId={workId} />
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default WorkDetail;

