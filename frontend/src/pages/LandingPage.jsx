import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

export default function LandingPage() {
  const navigate = useNavigate();

  // GSAP animation for hero section
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sora">
      <div className="hero-content text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black">
          Cacio: Connect & Own Your Future
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-md mx-auto font-medium">
          Join a vibrant community where social meets blockchain. Share, trade, and thrive with Cacio’s decentralized platform.
        </p>
        <button
          onClick={() => navigate("/verify")}
          className="px-6 py-3 bg-[#FF4911] text-white text-lg font-semibold border-3 border-black rounded-xl shadow-[0_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-200"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}