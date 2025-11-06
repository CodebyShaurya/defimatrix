"use client";

import React, { useEffect, useRef } from "react";

interface GridDot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  brightness: number;
  trail: number;
}

export const TrailingGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<GridDot[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gap = 40;
    const dotSize = 2;
    const trailRadius = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    const initGrid = () => {
      const dots: GridDot[] = [];
      for (let y = 0; y < canvas.height + gap; y += gap) {
        for (let x = 0; x < canvas.width + gap; x += gap) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            brightness: 0.2,
            trail: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      dots.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update trail effect
        if (distance < trailRadius) {
          const influence = 1 - distance / trailRadius;
          dot.trail = Math.max(dot.trail, influence);
        }

        // Decay trail over time
        dot.trail *= 0.92;

        // Calculate brightness based on trail
        dot.brightness = 0.2 + dot.trail * 0.8;

        // Draw dot
        const size = dotSize + dot.trail * 2;
        const opacity = dot.brightness;

        // Create gradient
        const gradient = ctx.createRadialGradient(dot.baseX, dot.baseY, 0, dot.baseX, dot.baseY, size);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(236, 72, 153, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.baseX, dot.baseY, size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for active dots
        if (dot.trail > 0.5) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(168, 85, 247, ${dot.trail * 0.5})`;
          ctx.beginPath();
          ctx.arc(dot.baseX, dot.baseY, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    };

    const animate = () => {
      drawGrid();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />;
};
