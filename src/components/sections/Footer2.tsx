const Footer2 = () => {
  return (
    <footer className="bg-[#181818] text-white py-20">
      <div className="max-w-screen-xl mx-auto px-10 md:px-20">
        {/* Contact Info */}
        <div className="text-center mb-32">
          <h2 className="text-[52px] font-medium mb-4">+880 187 3308005</h2>
          <h2 className="text-[52px] font-medium">Taszid.nahi@gmail.com</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between mb-32 text-lg">
          <a href="/works" className="hover:text-gray-300 transition-colors">Works</a>
          <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-end text-sm text-gray-400">
          <div className="space-y-1">
            <p>TASZIDIZAZ © 2024</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>

          <div className="text-center">
            <p className="mb-1">ADDRESS:</p>
            <p>Wherever I Effing Want</p>
          </div>

          <div className="text-right">
            <p>THE SITE HAS BEEN DESIGNED AND</p>
            <p>DEVELOPED BY: TASZIDIZAZ</p>
          </div>
        </div>

        {/* Logo and Social Links */}
        <div className="mt-20 flex justify-between items-center">
          <div className="text-[120px] font-bold tracking-tighter">
            Taszid
          </div>
          
          <div className="flex gap-20">
            <a href="https://linkedin.com" className="hover:text-gray-300 transition-colors uppercase">LinkedIn</a>
            <a href="https://dribbble.com" className="hover:text-gray-300 transition-colors uppercase">Dribbble</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors uppercase"
            >
              Back to Top
            </button>
            <a href="https://twitter.com" className="hover:text-gray-300 transition-colors uppercase">Twitter</a>
            <a href="https://behance.net" className="hover:text-gray-300 transition-colors uppercase">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;