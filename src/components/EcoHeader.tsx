import React, { memo } from 'react';

/**
 * Props for the EcoHeader component.
 */
interface EcoHeaderProps {
  /** The total calculated daily footprint in kg CO2 */
  totalFootprint?: number | null;
}

/**
 * The persistent header displaying the application title and current footprint status.
 * Optimized with React.memo to prevent unnecessary re-renders.
 */
export const EcoHeader: React.FC<EcoHeaderProps> = memo(({ totalFootprint }) => {
  return (
    <header className="header">
      <div className="logo">
        <span aria-hidden="true">🌱</span> EcoAware AI
      </div>
      <div className="stat-badge" aria-live="polite" aria-atomic="true">
        {totalFootprint !== null && totalFootprint !== undefined 
          ? `${totalFootprint} kg CO₂/day` 
          : "Calculate your impact"}
      </div>
    </header>
  );
});

EcoHeader.displayName = 'EcoHeader';
