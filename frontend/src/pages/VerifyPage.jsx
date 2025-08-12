import VerifyForm from "../components/VerifyForm";
import DotGrid from "../reactbits/DotGrid";
import {useLocation } from "react-router-dom";
import {useLayoutEffect, useRef} from "react";
import graduationImg from '../assets/graduation.svg';
import gsap from "gsap";


export default function VerifyPage() {
    const location = useLocation();
    const hasAnimated = useRef(false);
    
    {/* DotGrid Animation*/}
    useLayoutEffect(() => {
      if (location.pathname === "/verify" && !hasAnimated.current) {
        gsap.fromTo(
          ".background-pattern",
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
        hasAnimated.current = true; // prevent future glitches
      }
    }, [location]);

    {/* Left Image Animation*/}
    useLayoutEffect(() => {
      if (location.pathname === "/verify" && !hasAnimated.current) {
        gsap.fromTo(
          ".left-image",
          { opacity: 0, y: -100 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
        hasAnimated.current = true; // prevent future glitches
      }
    }, [location]);

  return (
    <div className="relative w-full h-full overflow-hidden">
          {/* Fullscreen DotGrid */}
          <div className="background-pattern absolute inset-0 -z-10">
            <DotGrid
              dotSize={3}
              gap={15}
              baseColor="#5227FF"
              activeColor="#5227FF"
              proximity={0}
              shockRadius={0}
              shockStrength={0}
              resistance={750}
              returnDuration={0.2}
            />
          </div>
    
          {/* Page Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <VerifyForm />
          </div>
    
          {/* Decorative Image */}
          <img
            src={graduationImg}
            alt="Graduation"
            className="left-image hidden min-[1200px]:w-100 min-[950px]:block fixed bottom-0 left-0 w-64 h-auto select-none pointer-events-none"
          />
        </div>
  );
}
