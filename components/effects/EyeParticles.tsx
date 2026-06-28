"use client"

import { useState, useEffect } from "react";

interface Eye {
  id: number;
  top: number;
  left: number;
  delay: number;
  scale: number;
  duration: number;
}

export function EyeParticles({ count = 14 }: { count?: number }) {
  const [eyes, setEyes] = useState<Eye[]>([]);

  useEffect(() => {
    setEyes(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        scale: 0.5 + Math.random() * 1.3,
        duration: 4 + Math.random() * 6,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {eyes.map((e) => (
        <div
          key={e.id}
          className="absolute eye-particle animate-blink-eye animate-drift"
          style={{
            top: `${e.top}%`,
            left: `${e.left}%`,
            transform: `scale(${e.scale})`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s, ${e.duration * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}
