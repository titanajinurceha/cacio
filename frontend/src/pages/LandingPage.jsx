import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function LandingPage() {
  const navigate = useNavigate();

// GSAP animation with SplitText
  useLayoutEffect(() => {
    // Ensure DOM is ready before splitting text
    document.fonts.ready.then(() => {
      // Split title into characters
      const titleSplit = new SplitText(".title", {
        type: "chars",
        charsClass: "char",
      });

      // Split subtitle into words
      const subtitleSplit = new SplitText(".subtitle", {
        type: "words",
        wordsClass: "word",
      });

      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      // Animate title characters
      tl.from(titleSplit.chars, {
        duration: 0.5,
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      });

      // Animate subtitle words
      tl.from(subtitleSplit.words, {
        duration: 0.3,
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      }, "-=0.1");

      gsap.fromTo(
      ".button-login",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
    );

      // Set initial visibility to prevent flash
      gsap.set(".hero-content", { opacity: 1 });

      // Cleanup on unmount
      return () => {
        titleSplit.revert();
        subtitleSplit.revert();
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sora">
      <div className="hero-content text-center space-y-6 px-4">
        <h1 className="title text-5xl md:text-7xl font-extrabold text-black">
          Connect & Own Your Future
        </h1>
        <p className="subtitle text-lg md:text-xl text-gray-800 max-w-md mx-auto font-medium">
          Join a vibrant community where social meets blockchain. Share, trade, and thrive with Cacio’s decentralized platform.
        </p>
        <button
          onClick={() => navigate("/verify")}
          className="button-login px-6 py-3 bg-[#FF4911] text-white text-lg font-semibold border-3 border-black rounded-xl shadow-[0_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-200"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}