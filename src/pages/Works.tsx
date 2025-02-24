import Footer from "@/components/layout/Footer";
import Works2 from "@/components/sections/Works2";
import Contact from "@/components/sections/Contact";
import Explorations from "@/components/sections/Explorations";

const WorksPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white overflow-hidden mx-auto my-0">
      <div className="px-6 md:px-20">
        <main>
          <Works2 />
          <Explorations />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WorksPage;

