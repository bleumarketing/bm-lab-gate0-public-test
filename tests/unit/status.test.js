import { describe, it, expect } from 'vitest';
import { statusLine } from '../../lib/status.js';

describe('statusLine', () => {
  it('joins component names', () => {
    expect(statusLine('Next.js', 'GSAP')).toBe('Next.js + GSAP running');
  });
  it('handles no input', () => {
    expect(statusLine()).toBe('No components');
  });
});
