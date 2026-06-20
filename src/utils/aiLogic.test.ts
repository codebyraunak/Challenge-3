import { describe, it, expect } from 'vitest';
import { generateEcoResponse } from './aiLogic';

describe('aiLogic Utility', () => {
  it('returns appropriate context for high footprint', () => {
    const response = generateEcoResponse('hello', 20);
    expect(response).toContain('quite high today');
  });

  it('returns appropriate context for low footprint', () => {
    const response = generateEcoResponse('hello', 4);
    expect(response).toContain('excellent');
  });
  
  it('returns recycling specific advice', () => {
    const response = generateEcoResponse('how to recycle plastic', null);
    expect(response).toContain('check the number on the bottom');
  });
});
