
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import AboutSlider from "@/components/sections/AboutSlider";
import Footer2 from '@/components/sections/Footer2';
import FAQ from "@/components/sections/FAQ";


const Index = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white overflow-hidden mx-auto my-0">
      <div className="px-6 md:px-20">
        {/* <Header /> */}
        <main>
          <Hero />
          {/* <About /> */}
          <AboutSlider />
          <Works />
          <FAQ />
          <Contact />
          
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

