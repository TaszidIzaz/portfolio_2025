
import Footer from "@/components/layout/Footer";
import Hero2 from "@/components/sections/Hero2";
import Contact from "@/components/sections/Contact";
import Exp from "@/components/sections/Exp";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

const AboutPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white overflow-hidden mx-auto my-0">
      <div className="px-6 md:px-20">
        {/* <Header /> */}
        <main>
          <Hero2 />
          <Exp />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;

