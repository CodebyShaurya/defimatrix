"use client";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../utils/cn";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "#0E0C15";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-8 flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <canvas
        className="container mx-auto absolute items-center justify-center inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("z-10", className)} {...props}>
        <h2 className="font-display z-50 mx-auto max-w-4xl text-left md:text-center text-3xl md:text-5xl font-medium tracking-tight text-white lg:text-6xl sm:leading-tight">
          Reasons to Consider
          <span className="relative whitespace-nowrap">
            <svg
              className="absolute -bottom-2 left-0 w-full pt-2"
              viewBox="0 0 340 14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeWidth={3}
                d="M.5 8.281c62.654-4.527 222.769-10.866 362 0"
              />
              <defs>
                <radialGradient
                  id="a"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(0 3 -181 0 181.5 5.281)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.099} stopColor="#FFC876" />
                  <stop offset={0.526} stopColor="#ACFF8E" />
                  <stop offset={0.74} stopColor="#9453FF" />
                  <stop offset={0.913} stopColor="#FF89C2" />
                </radialGradient>
              </defs>
            </svg>
            <span className="relative">DeFiMatrix</span>
          </span>
        </h2>
        <p className="z-50 mx-auto mt-6 text-left md:text-center  max-w-4xl text-lg tracking-tight text-gray-300">
          Get an exclusive sneak peek of DeFiMatrix&apos;s innovative trading
          app – Your gateway to intuitive and strategic crypto finance.
        </p>
        {children}
      </div>
    </div>
  );
};
