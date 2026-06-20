import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EcoHeader } from './EcoHeader';

describe('EcoHeader Component', () => {
  it('renders default text when no footprint is provided', () => {
    render(<EcoHeader totalFootprint={null} />);
    expect(screen.getByText(/Calculate your impact/i)).toBeDefined();
  });

  it('renders calculated footprint when provided', () => {
    render(<EcoHeader totalFootprint={10.5} />);
    expect(screen.getByText(/10.5 kg CO₂\/day/i)).toBeDefined();
  });
});
