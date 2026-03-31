"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Refs to hold the audio elements
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const transitionAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements on mount to avoid SSR issues
  useEffect(() => {
    clickAudioRef.current = new Audio("/sounds/click.wav");
    hoverAudioRef.current = new Audio("/sounds/hover.wav");
    transitionAudioRef.current = new Audio("/sounds/transition.wav");

    clickAudioRef.current.volume = 0.5;
    hoverAudioRef.current.volume = 0.3;
    transitionAudioRef.current.volume = 0.5;
  }, []);

  // Global Click Event
  useEffect(() => {
    const handleClick = () => {
      if (clickAudioRef.current) {
        // Reset playback so rapid clicks don't overlap or break
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => {
          // Ignore autoplay blocked errors
        });
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Global Hover Event (Event Delegation)
  useEffect(() => {
    let lastHoveredElement: Element | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over a key interactive element 
      const closestInteractive = target.closest('.glass-card, a, button, [role="button"], input, select, textarea');
      
      if (closestInteractive) {
        // Only trigger if we are entering a new interactive element
        if (lastHoveredElement !== closestInteractive) {
          lastHoveredElement = closestInteractive;
          if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0;
            hoverAudioRef.current.play().catch(() => {
              // Ignore autoplay blocked errors
            });
          }
        }
      } else {
        lastHoveredElement = null; // Reset when moving out of an interactive element
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Route Transition Event
  useEffect(() => {
    if (transitionAudioRef.current) {
      transitionAudioRef.current.currentTime = 0;
      // When pathname changes, play the transition sound
      transitionAudioRef.current.play().catch(() => {
        // Ignore autoplay blocked errors (e.g. initial load without prior interaction)
      });
    }
  }, [pathname]);

  return <>{children}</>;
}
