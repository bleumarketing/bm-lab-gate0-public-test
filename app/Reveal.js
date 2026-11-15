'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Proves GSAP installs and bundles; honours reduced motion.
export default function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !ref.current) return;
    const tween = gsap.from(ref.current, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' });
    return () => tween.kill();
  }, []);
  return <div ref={ref} data-testid="reveal">{children}</div>;
}
