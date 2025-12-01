
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
          display: 'block'
        });
      } else if (menuRef.current) {
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(menuRef.current, { display: 'none' });
          }
        });
      }
    }, [isMenuOpen]);
  
    return (
      <header className="flex justify-between items-center max-w-screen-xl mx-auto my-0 px-0 py-10 lg:px-0 md:px-10 max-sm:p-5">
        <Link
          to="/"
          className="text-[28px] font-bold text-black tracking-[-0.56px]"
        >
          Taszid Izaz
        </Link>
  
  
  
        <nav className="flex gap-[60px] max-sm:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="mailto:taszid.nahi@gmail.com"
              className="text-gray-500 hover:text-black transition-colors group"
            >
              <div className="flex items-center">
                <svg
                  width="89"
                  height="14"
                  viewBox="0 0 89 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300 group-hover:translate-x-[2px]"
                >
                  <path
                    d="M21.5114 7.00005L22.0277 7.5163L22.5425 7.00005L22.0277 6.48379L21.5114 7.00005ZM20.9952 6.48379L15.1618 12.3172L16.1943 13.3497L22.0277 7.5163L20.9952 6.48379ZM22.0277 6.48379L16.1943 0.650391L15.1618 1.6829L20.9952 7.5163L22.0277 6.48379ZM21.5114 6.27087L0 6.27087V7.72922L21.5114 7.72922V6.27087Z"
                    fill="currentColor"
                  />
                  <text
                    fill="currentColor"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Mono45 Headline"
                    fontSize="16"
                    className="transform transition-transform duration-300 group-hover:translate-x-[4px]"
                  >
                    <tspan x="30.5425" y="11.3516">
                      email
                    </tspan>
                  </text>
                </svg>
              </div>
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/3uu7ungexxa1uusfh94hg/Taszid_Izaz_Resume_2025.pdf?rlkey=21f3t8cr252xr2oexdmvum08o&st=a5xioe4y&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors group"
            >
              <div className="flex items-center">
                <svg
                  width="89"
                  height="15"
                  viewBox="0 0 89 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300 group-hover:translate-x-[2px]"
                >
                  <path
                    d="M21.5114 8.00005L22.0277 8.5163L22.5425 8.00005L22.0277 7.48379L21.5114 8.00005ZM20.9952 7.48379L15.1618 13.3172L16.1943 14.3497L22.0277 8.5163L20.9952 7.48379ZM22.0277 7.48379L16.1943 1.65039L15.1618 2.6829L20.9952 8.5163L22.0277 7.48379ZM21.5114 7.27087L0 7.27087V8.72922L21.5114 8.72922V7.27087Z"
                    fill="currentColor"
                  />
                  <text
                    fill="currentColor"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Mono45 Headline"
                    fontSize="16"
                    className="transform transition-transform duration-300 group-hover:translate-x-[4px]"
                  >
                    <tspan x="30.5425" y="12.3516">
                      Check Resume
                    </tspan>
                  </text>
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/taszid-izaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors group"
            >
              <div className="flex items-center">
                <svg
                  width="89"
                  height="14"
                  viewBox="0 0 89 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300 group-hover:translate-x-[2px]"
                >
                  <path
                    d="M21.5114 7.00005L22.0277 7.5163L22.5425 7.00005L22.0277 6.48379L21.5114 7.00005ZM20.9952 6.48379L15.1618 12.3172L16.1943 13.3497L22.0277 7.5163L20.9952 6.48379ZM22.0277 6.48379L16.1943 0.650391L15.1618 1.6829L20.9952 7.5163L22.0277 6.48379ZM21.5114 6.27087L0 6.27087V7.72922L21.5114 7.72922V6.27087Z"
                    fill="currentColor"
                  />
                  <text
                    fill="currentColor"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Mono45 Headline"
                    fontSize="16"
                    className="transform transition-transform duration-300 group-hover:translate-x-[2px]"
                  >
                    <tspan x="30.5425" y="11.3516">
                      linkedin
                    </tspan>
                  </text>
                </svg>
              </div>
            </a>
            <a
              href="https://dribbble.com/TaszidI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors group"
            >
              <div className="flex items-center">
                <svg
                  width="89"
                  height="14"
                  viewBox="0 0 89 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300 group-hover:translate-x-[2px]"
                >
                  <path
                    d="M21.5114 7.00005L22.0277 7.5163L22.5425 7.00005L22.0277 6.48379L21.5114 7.00005ZM20.9952 6.48379L15.1618 12.3172L16.1943 13.3497L22.0277 7.5163L20.9952 6.48379ZM22.0277 6.48379L16.1943 0.650391L15.1618 1.6829L20.9952 7.5163L22.0277 6.48379ZM21.5114 6.27087L0 6.27087V7.72922L21.5114 7.72922V6.27087Z"
                    fill="currentColor"
                  />
                  <text
                    fill="currentColor"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Mono45 Headline"
                    fontSize="16"
                    className="transform transition-transform duration-300 group-hover:translate-x-[3px]"
                  >
                    <tspan x="30.5425" y="11.3516">
                      dribbble
                    </tspan>
                  </text>
                </svg>
              </div>
            </a>
          </div>
        </nav>
  
        
  
        {/* Right side navigation - hidden on mobile */}
        <nav className="flex gap-8 items-center max-sm:hidden">
          <button
            onClick={() => handleNavigation("/about")}
            className="text-gray-500 hover:text-black transition-colors text-base flex items-center gap-2 group"
          >
            <span className={`h-2 w-2 rounded-full ${location.pathname === '/about' ? 'bg-black' : 'bg-transparent'}`} />
            <span className={`${location.pathname === '/about' ? 'font-semibold text-black tracking-tight' : ''}`}>
              About
            </span>
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="text-gray-500 hover:text-black transition-colors text-base flex items-center gap-2 group"
          >
            <span className={`h-2 w-2 rounded-full ${location.pathname === '/works' ? 'bg-black' : 'bg-transparent'}`} />
            <span className={`${location.pathname === '/works' ? 'font-semibold text-black tracking-tight' : ''}`}>
              Works
            </span>
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="text-gray-500 hover:text-black transition-colors text-base flex items-center gap-2 group"
          >
            <span className={`h-2 w-2 rounded-full ${location.pathname === '/contact' ? 'bg-black' : 'bg-transparent'}`} />
            <span className={`${location.pathname === '/contact' ? 'font-semibold text-black tracking-tight' : ''}`}>
              Contact
            </span>
          </button>
        </nav>
  
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="hidden max-sm:block text-gray-500 hover:text-black transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
  
        {/* Mobile menu */}
        <div 
          ref={menuRef}
          style={{ transform: 'translateX(100%)' }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="px-5 py-10 flex justify-between items-center">
            <Link to="/" className="text-[28px] font-bold text-black tracking-[-0.56px]">
              Taszid
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav ref={menuContentRef} className="flex flex-col items-center gap-8 p-4">
            <button
              onClick={() => handleNavigation("/about")}
              className="text-gray-500 hover:text-black transition-colors text-lg"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/works")}
              className="text-gray-500 hover:text-black transition-colors text-lg"
            >
              Works
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-gray-500 hover:text-black transition-colors text-lg"
            >
              Contact
            </button>
            <div className="flex flex-col gap-6 items-center mt-8">
              <a
                href="mailto:contact@example.com"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Email
              </a>
              <a
                href="https://read.cv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Read.cv
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Dribbble
              </a>
            </div>
          </nav>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="px-5 py-10 flex justify-between items-center">
              <Link
                to="/"
                className="text-[28px] font-bold text-black tracking-[-0.56px]"
              >
                Taszid
              </Link>
              {/* Remove this line */}
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 p-4">
              <button
                onClick={() => handleNavigation("/about")}
                className="text-gray-500 hover:text-black transition-colors text-lg"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("/works")}
                className="text-gray-500 hover:text-black transition-colors text-lg"
              >
                Works
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-gray-500 hover:text-black transition-colors text-lg"
              >
                Contact
              </button>
              <div className="flex flex-col gap-6 items-center mt-8">
                <a
                  href="mailto:taszid.nahi@gmail.com"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://read.cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  Read.cv
                </a>
                <a
                  href="https://www.linkedin.com/in/taszid-izaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com/TaszidI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
};

export default Header;
