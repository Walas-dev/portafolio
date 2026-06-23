"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let animationFrameId: number;

    const dpr = typeof window !== 'undefined' && window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: 400 * dpr, 
      height: 400 * dpr,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 10000,
      mapBrightness: 6,
      baseColor: [0.99, 0.06, 0.36],
      markerColor: [0.2, 0.4, 1], 
      glowColor: [0.99, 0.06, 0.36],
    });

    const animate = () => {
      phi += 0.0015;
      globe.update({ phi });
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(); 
        } else {
          cancelAnimationFrame(animationFrameId); 
        }
      },
      { threshold: 0 } 
    );

    observer.observe(canvasRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-100 aspect-square mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />
    </div>
  );
}