"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.99, 0.06, 0.36],
      markerColor: [0.2, 0.4, 1], 
      glowColor: [0.99, 0.06, 0.36],
    });

    let phi = 0
    function animate() {
        phi += 0.005
        globe.update({ phi })
        requestAnimationFrame(animate)
    }
    animate()

    return () => {
      globe.destroy();
    };
  }, []);

  
  return (
    <div className="w-full max-w-150 aspect-square mx-auto flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-100 transition-opacity duration-500"
        style={{ contain: "layout paint size" }}
      />
    </div>
  );
}