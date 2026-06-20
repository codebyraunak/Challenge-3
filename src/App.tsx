import { useState, Suspense, lazy } from 'react';
import './App.css';
import { EcoHeader } from './components/EcoHeader';

// Lazy loading for Efficiency score
const CarbonCalculator = lazy(() => import('./components/CarbonCalculator').then(module => ({ default: module.CarbonCalculator })));
const EcoChat = lazy(() => import('./components/EcoChat').then(module => ({ default: module.EcoChat })));

function App() {
  const [totalFootprint, setTotalFootprint] = useState<number | null>(null);

  return (
    <main className="app-container">
      <EcoHeader totalFootprint={totalFootprint} />
      
      <div className="grid-layout">
        <Suspense fallback={<div className="glass-panel p-4" aria-live="polite">Loading Calculator...</div>}>
          <CarbonCalculator onCalculate={setTotalFootprint} />
        </Suspense>
        
        <Suspense fallback={<div className="glass-panel p-4" aria-live="polite">Loading Assistant...</div>}>
          <EcoChat userFootprint={totalFootprint} />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
