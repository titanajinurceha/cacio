import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import CurvedLoop from "../reactbits/CurvedLoop";

export default function LandingPage() {
  const navigate = useNavigate();

  // GSAP animation with SplitText
  useLayoutEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white font-sora relative overflow-hidden">
      <Navbar className="z-20" />
      <div className="text-black opacity-100 h-fit w-full absolute bottom-0 z-0">
        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={2}
          curveAmount={-50}
          direction="left"
          interactive={true}
          className="custom-text-style"
        />
      </div>
      <div className="hero-content text-center space-y-10 mt-10 px-4 pt-20 z-10">
        <div className="title-text text-[8.6vw] font-extrabold text-black leading-tight">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
            Connect & Own Your Future
          </h1>
          {/* Waves.png positioned via CSS */}
        </div>
        <p className="text-lg md:text-xl text-gray-800 max-w-md mx-auto font-medium">
          Join a vibrant community where social meets blockchain. Share, trade,
          and thrive with Cacio’s decentralized platform.
        </p>
        <button
          onClick={() => navigate("/verify")}
          className="button-login inline-block text-lg md:text-xl font-semibold text-white bg-[#FF4911] border-3 border-black rounded-xl shadow-[0_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-100 px-[2.5vw] py-[0.8vw] md:px-[1.5vw] md:py-[0.5vw]"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}
