import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 font-sora">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="px-5 text-2xl font-bold text-black hover:text-[#FF4911] transition-colors duration-200">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Cacio</a>
        </div>

        {/* Menu Items - Desktop */}
        <div className="hidden border-4 border-black px-16 py-2 rounded-full md:flex space-x-14 items-center">
          <a href="/docs" className="text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Docs</a>
          <a href="/reward" className="text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Reward</a>
          <a href="/blog" className="text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Blog</a>
        </div>

        {/* Login/Verify Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/verify")}
            className="px-8 py-2 bg-[#FF4911] text-white text-lg font-semibold border-3 border-black rounded-full shadow-[0_2px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-100"
          >
            Verify
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl font-bold text-black focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-black shadow-[0_2px_0_rgba(0,0,0,1)] p-4 space-y-4 z-20">
            <a href="/docs" className="block text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Docs</a>
            <a href="/reward" className="block text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Reward</a>
            <a href="/blog" className="block text-lg font-semibold text-black hover:text-[#FF4911] transition-colors duration-200">Blog</a>
            <button
              onClick={() => navigate("/verify")}
              className="w-full px-6 py-3 bg-[#FF4911] text-white text-lg font-semibold border-3 border-black rounded-xl shadow-[0_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-200"
            >
              Verify
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}