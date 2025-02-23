import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const mainRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Overlay animation
      tl.fromTo(overlayRef.current,
        {
          y: "100%"
        },
        {
          y: "0%",
          duration: 0.9,
          ease: "power4.inOut"
        }
      )
      .to(overlayRef.current, {
        y: "-100%",
        duration: 0.9,
        ease: "power4.inOut",
        delay: 0.1
      });

      // Content animation
      tl.fromTo(mainRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        },
        "-=0.5"
      );
    });

    return () => {
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-[#181818] z-50 transform translate-y-full pointer-events-none"
      />
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;