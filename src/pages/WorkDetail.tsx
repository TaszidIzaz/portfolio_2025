
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkDetailContent from "@/components/sections/WorkDetailContent";
import Contact from "@/components/sections/Contact";

const WorkDetail = () => {
  const { workId } = useParams<{ workId: string }>();
  
  return (
    <div className="container mx-auto px-4">
      <WorkDetailContent workId={workId} />
      <Contact />
      <Footer />
    </div>
  );
};

export default WorkDetail;

