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

    const spacing = 55; 
    const shapeSize = 10;
    const influenceRadius = 200;
    const baseOpacity = 0.15;
    const peakOpacity = 0.85;

    let pointer = { x: -1000, y: -1000 };
    let targetPointer = { x: -1000, y: -1000 };

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
            angle: 0,
            baseRotationSpeed: (i % 2 === 0 ? 1 : -1) * 0.005, 
          });
        }
      }
    };

    window.addEventListener("resize", buildGrid);
    buildGrid();

    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      targetPointer.x = clientX - rect.left;
      targetPointer.y = clientY - rect.top;
    };
    const handlePointerLeave = () => { targetPointer = { x: -1000, y: -1000 }; };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", handlePointerLeave);

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

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      pointer.x += (targetPointer.x - pointer.x) * 0.1;
      pointer.y += (targetPointer.y - pointer.y) * 0.1;

      ctx.lineWidth = 2; 
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 0; i < grid.length; i++) {
        const item = grid[i];

        const dx = pointer.x - item.x;
        const dy = pointer.y - item.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let currentOpacity = baseOpacity;
        
        item.angle += item.baseRotationSpeed;
        let finalAngle = item.angle;

        if (distance < influenceRadius) {
          const force = 1 - (distance / influenceRadius);
          currentOpacity = baseOpacity + (force * (peakOpacity - baseOpacity));
          finalAngle += force * 0.5; 
        }

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(finalAngle);
        
        ctx.strokeStyle = `rgba(${item.color}, ${currentOpacity})`;
        drawShape(item.type, shapeSize);
        
        ctx.restore();
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", buildGrid);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto"
    />
  );
}