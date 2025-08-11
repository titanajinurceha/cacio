import VerifyForm from "../components/VerifyForm";
import DotGrid from "../reactbits/DotGrid";
import graduationImg from '../assets/graduation.svg';

export default function VerifyPage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
          {/* Fullscreen DotGrid */}
          <div className="absolute inset-0 -z-10">
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
            className="hidden min-[1200px]:w-100 min-[950px]:block fixed bottom-0 left-0 w-64 h-auto select-none pointer-events-none"
          />
        </div>
  );
}
