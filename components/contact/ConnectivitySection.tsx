"use client";
import React, { useEffect, useRef } from "react";

export default function GeometricGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true; 

    const spacing = 55; 
    const shapeSize = 10;
    const baseOpacity = 0.15;
    const peakOpacity = 0.90;
    
    const waveCycleDuration = 8; 
    const waveWidth = 350; 
    const jumpHeight = 5; 

    const shapeTypes = ['circle', 'cross', 'square'];
    const colors = ['255, 255, 255', '10, 10, 10'];

    let grid: any[] = [];

    const buildGrid = () => {
      grid = [];
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const padding = spacing;
      const rows = Math.floor((rect.height - padding) / spacing) + 1;
      const cols = Math.floor((rect.width - padding) / spacing) + 1;

      const offsetX = (rect.width - ((cols - 1) * spacing)) / 2;
      const offsetY = (rect.height - ((rows - 1) * spacing)) / 2;

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          grid.push({
            x: offsetX + i * spacing,
            y: offsetY + j * spacing,
            type: shapeTypes[(i + j) % shapeTypes.length],
            color: colors[(i + j * 2) % colors.length],
            diagonalPos: (offsetX + i * spacing) + (offsetY + j * spacing)
          });
        }
      }
    };

    window.addEventListener("resize", buildGrid);
    buildGrid();

    const drawShape = (type: string, size: number) => {
      ctx.beginPath();
      if (type === 'circle') {
        ctx.arc(0, 0, size, 0, Math.PI * 2);
      } else if (type === 'cross') {
        ctx.moveTo(-size, -size);
        ctx.lineTo(size, size);
        ctx.moveTo(size, -size);
        ctx.lineTo(-size, size);
      } else if (type === 'square') {
        if (ctx.roundRect) {
          ctx.roundRect(-size, -size, size * 2, size * 2, 3);
        } else {
          ctx.rect(-size, -size, size * 2, size * 2);
        }
      }
      ctx.stroke();
    };

    let lastTime = 0;
    const fps = 30; 
    const interval = 1000 / fps;

    const draw = (currentTime: number) => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(draw);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      lastTime = currentTime - (deltaTime % interval);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.lineWidth = 2; 
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const timeInSeconds = currentTime / 1000;
      const maxDistance = rect.width + rect.height; 
      
      const progress = (timeInSeconds % waveCycleDuration) / waveCycleDuration;
      const currentWavePosition = (progress * (maxDistance + waveWidth * 2)) - waveWidth;

      for (let i = 0; i < grid.length; i++) {
        const item = grid[i];
        const distanceToWave = Math.abs(item.diagonalPos - currentWavePosition);
        
        let currentOpacity = baseOpacity;
        let currentYOffset = 0; 

        if (distanceToWave < waveWidth) {
          const force = 1 - (distanceToWave / waveWidth);
          const smoothForce = force * force; 
          
          currentOpacity = baseOpacity + (smoothForce * (peakOpacity - baseOpacity)); 
          currentYOffset = -(smoothForce * jumpHeight); 
        }

        ctx.save();
        ctx.translate(item.x, item.y + currentYOffset); 
        
        ctx.strokeStyle = `rgba(${item.color}, ${currentOpacity})`;
        drawShape(item.type, shapeSize);
        
        ctx.restore();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(draw);
          }
        } else {
          isVisible = false;
        }
      },
      { threshold: 0.01 } 
    );

    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", buildGrid);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}