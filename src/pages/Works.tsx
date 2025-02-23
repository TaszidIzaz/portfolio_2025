
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Explorations from "@/components/sections/Explorations";

const WorksPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white overflow-hidden mx-auto my-0">
      <div className="px-6 md:px-20">
        <main>
          <Works />
          <Explorations />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WorksPage;

