
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

const ContactPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white overflow-hidden mx-auto my-0">
      <div className="px-6 md:px-20">
        {/* <Header /> */}
        <main>
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;

