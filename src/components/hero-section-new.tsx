"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import HeaderNew from "./header-new";
import { Spotlight } from "./ui/spotlight-new";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

export default function HeroSectionNew() {
    const secondVideoRef = useRef<HTMLVideoElement | null>(null);
  
   
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
      {/* <DottedGlowBackground
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
      /> */}

    

      {/* Content */}
        <div className="relative w-full h-screen overflow-hidden bg-black">
           <HeaderNew />
      {/* Media: show an image on mobile (lg-) and keep the video on lg+ */}
      {/* Mobile image background */}
      <img
        src="/Defimatrix_Mobile.png"
        alt="DeFiMatrix background"
        className="absolute inset-0 w-full h-full object-cover block lg:hidden"
      />

      {/* Desktop video (hidden on small screens) */}
      <video
        ref={secondVideoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
      >
        <source src="/DefiMatrix.webm" type="video/webm" />
      </video>
    

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Logo */}
        <svg
          viewBox="0 0 343 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 mb-6"
        >
          <path
            d="M20.2447 5.95L6.54473 29.6C6.39473 29.85..."
            fill="currentColor"
          />
        </svg>

        {/* Heading */}
       
    </div></div>

      {/* Header */}
     

      {/* Backed By Section */}
      <div className="absolute bottom-32 left-0 right-0 px-8 max-w-7xl mx-auto">
        <h2 className="text-white text-md sm:text-3xl  mb-5 whitespace-nowrap text-center">Backed By </h2>
        <div className="flex items-center gap-8">
          
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll gap-24">
              {/* First set of logos */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              <img src="/logo3.png" alt="Company 3" className="h-8 " />
              <img src="/logo4.png" alt="Company 4" className="h-8 " />
              <img src="/logo5.png" alt="Company 5" className="h-8 " />
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
              {/* Duplicate set for seamless loop */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              <img src="/logo3.png" alt="Company 3" className="h-8 " />
              <img src="/logo4.png" alt="Company 4" className="h-8 " />
              <img src="/logo5.png" alt="Company 5" className="h-8 " />
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
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
