import { useEffect, useRef, useState } from "react";

/**
 * GlobalAnimatedBackground
 * 
 * A fixed, full-viewport animated gradient mesh that serves as the base background layer.
 * Features:
 * - Smooth, continuous gradient animation (40s loop)
 * - Mouse-influenced motion with lagged interpolation
 * - GPU-optimized transforms
 * - Respects prefers-reduced-motion
 * - Disabled on touch devices
 */
export function GlobalAnimatedBackground() {
  const meshRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // Normalized 0-1
  const currentPosRef = useRef({ x: 0, y: 0 }); // Current interpolated offset
  const rafRef = useRef<number | undefined>(undefined);

  const [isMouseEnabled, setIsMouseEnabled] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Enable mouse tracking only if motion is allowed and not a touch device
    setIsMouseEnabled(!prefersReducedMotion && !isTouchDevice);
  }, []);

  useEffect(() => {
    if (!isMouseEnabled || !meshRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to 0-1 range
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseEnabled]);

  useEffect(() => {
    if (!isMouseEnabled || !meshRef.current) return;

    const mesh = meshRef.current;

    // Smooth interpolation animation
    const animate = () => {
      // Target offset based on mouse position (centered at 0.5)
      // Max offset is ±8% of viewport
      const targetX = (mouseRef.current.x - 0.5) * 16; // -8% to +8%
      const targetY = (mouseRef.current.y - 0.5) * 16; // -8% to +8%

      // Smooth interpolation (lag factor: 0.03 = slower, 0.1 = faster)
      const lagFactor = 0.04;
      currentPosRef.current.x += (targetX - currentPosRef.current.x) * lagFactor;
      currentPosRef.current.y += (targetY - currentPosRef.current.y) * lagFactor;

      // Apply transform
      mesh.style.transform = `translate(${currentPosRef.current.x}%, ${currentPosRef.current.y}%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMouseEnabled]);

  return (
    <div
      ref={meshRef}
      className="global-animated-background"
      aria-hidden="true"
    />
  );
}
