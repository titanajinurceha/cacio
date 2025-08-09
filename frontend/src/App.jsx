import './App.css'
import VerifyForm from './components/VerifyForm';
import DotGrid from '../reactbits/DotGrid/DotGrid';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fullscreen DotGrid */}
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={8}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={40}
          shockRadius={0}
          shockStrength={0}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <VerifyForm />
      </div>
    </div>
  );
}

export default App
