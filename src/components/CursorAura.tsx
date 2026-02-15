import { useEffect, useRef, useState } from "react";

/**
 * CursorAura
 * 
 * An always-on cursor-following glow that creates system awareness.
 * Features:
 * - Soft radial glow (150px diameter)
 * - Very low opacity (0.1 max)
 * - Blue/purple color blend
 * - Lagged, smooth movement
 * - Does NOT replace system cursor
 * - Respects prefers-reduced-motion
 * - Disabled on touch devices
 */
export function CursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Enable aura only if motion is allowed and not a touch device
    setIsEnabled(!prefersReducedMotion && !isTouchDevice);
  }, []);

  useEffect(() => {
    if (!isEnabled || !auraRef.current) return;

    const aura = auraRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct positioning without lag
      aura.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={auraRef}
      className="cursor-aura"
      aria-hidden="true"
    />
  );
}
