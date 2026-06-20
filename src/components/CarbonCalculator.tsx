import React, { useState, useCallback, memo } from 'react';

/** Props for CarbonCalculator component */
interface Props {
  /** Callback triggered when the footprint is calculated */
  onCalculate: (footprint: number) => void;
}

/**
 * Interactive carbon footprint calculator component.
 * Optimized with React.memo and useCallback.
 */
export const CarbonCalculator: React.FC<Props> = memo(({ onCalculate }) => {
  const [miles, setMiles] = useState<number | ''>('');
  const [diet, setDiet] = useState('average');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const distance = Math.max(0, Number(miles) || 0);
    
    // 0.4 kg CO2 per mile for average car
    const transportEmissions = distance * 0.4;
    
    // Daily average emissions by diet type (kg CO2)
    let dietEmissions = 2.5; 
    if (diet === 'meat-heavy') dietEmissions = 3.3;
    if (diet === 'vegetarian') dietEmissions = 1.7;
    if (diet === 'vegan') dietEmissions = 1.5;

    const total = Number((transportEmissions + dietEmissions).toFixed(2));
    setResult(total);
    onCalculate(total);
  }, [miles, diet, onCalculate]);

  return (
    <section className="glass-panel calculator-panel" aria-label="Carbon Footprint Calculator">
      <h2>Daily Footprint Calculator</h2>
      <form onSubmit={handleCalculate} className="form-group-container">
        <div className="form-group">
          <label htmlFor="miles">Miles driven today:</label>
          <input 
            type="number" 
            id="miles" 
            className="form-input" 
            min="0" 
            value={miles}
            onChange={e => setMiles(e.target.value ? Number(e.target.value) : '')}
            placeholder="e.g. 15"
          />
        </div>
        <div className="form-group">
          <label htmlFor="diet">Dietary habit:</label>
          <select 
            id="diet" 
            className="form-input"
            value={diet}
            onChange={e => setDiet(e.target.value)}
          >
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="average">Average (Some meat)</option>
            <option value="meat-heavy">Meat-heavy</option>
          </select>
        </div>
        <button type="submit" className="calc-btn">Calculate Footprint</button>
      </form>

      {result !== null && (
        <div className="result-box" aria-live="polite">
          <p>Your estimated daily footprint:</p>
          <h3>{result} kg CO₂</h3>
        </div>
      )}
    </section>
  );
});

CarbonCalculator.displayName = 'CarbonCalculator';
