import './App.css'
import VerifyForm from './components/VerifyForm';
import DotGrid from '../reactbits/DotGrid/DotGrid';

function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <VerifyForm />
      {/* <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      /> */}
      
    </div>
  );
}

export default App
