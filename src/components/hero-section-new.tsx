"use client";

import React from "react";
import HeaderNew from "./header-new";
import { Spotlight } from "./ui/spotlight-new";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

export default function HeroSectionNew() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/new-hero-bg.png)',
        }}
      />

      {/* Dotted Glow Background */}
      <DottedGlowBackground
        className="pointer-events-none"
        opacity={1}
        gap={40}
        radius={2}
        color="rgba(168, 85, 247, 0.3)"
        darkColor="rgba(168, 85, 247, 0.3)"
        glowColor="rgba(236, 72, 153, 0.8)"
        darkGlowColor="rgba(168, 85, 247, 0.8)"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.5}
        speedScale={1}
      />

      {/* Header */}
      <HeaderNew />

      {/* Content */}
      <div className="relative flex h-screen items-center justify-center px-4 -mt-24">
        <div className="text-center">
          {/* Main DEFIMATRIX Text */}
          <h1 className="font-[family-name:var(--font-orbitron)] text-[10vw] font-bold tracking-[0.2em] text-white  sm:text-7xl md:text-8xl lg:text-9xl">
            DEFIMATRIX
          </h1>
        </div>
      </div>

      {/* Backed By Section */}
      <div className="absolute bottom-32 left-0 right-0 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <h2 className="text-white text-md sm:text-3xl  whitespace-nowrap">Backed By -</h2>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll gap-24">
              {/* First set of logos */}
              <img src="/logo1.png" alt="Company 1" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo2.png" alt="Company 2" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo3.png" alt="Company 3" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo4.png" alt="Company 4" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo5.png" alt="Company 5" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              {/* Duplicate set for seamless loop */}
              <img src="/logo1.png" alt="Company 1" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo2.png" alt="Company 2" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo3.png" alt="Company 3" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo4.png" alt="Company 4" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/logo5.png" alt="Company 5" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
