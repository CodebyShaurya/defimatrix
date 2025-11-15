"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import HeaderNew from "./header-new";
import Link from "next/link";

export default function HeroSectionNew() {
    const secondVideoRef = useRef<HTMLVideoElement | null>(null);
  
   
  return (
    <section className="relative h-[80vh] sm:min-h-screen overflow-hidden bg-black">
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
        <div className="relative w-screen h-[80vh] sm:min-h-screen overflow-hidden bg-black">
           <HeaderNew />
      {/* Media: show an image on mobile (lg-) and keep the video on lg+ */}
      {/* Mobile image background */}
      <img
        src="/Defimatrix_Mobile.png"
        alt="DeFiMatrix background"
        className="absolute inset-0 w-screen h-full  block lg:hidden"
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

   
      <div className="absolute bottom-4 left-0 right-0 sm:bottom-8 md:bottom-16">
  <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 md:items-center md:justify-between md:gap-1 lg:flex-row lg:px-2">
    <div className=" flex  gap-4">
    <a href="#about" className="mb-4 hidden md:mb-0 md:block mt-3">
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/50"
      >
        <path
          d="M12 5L12 19M12 19L19 12M12 19L5 12"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
    <div className="mb-6 md:mb-0">
      <p className="max-w-3xl text-xs text-gray-400 sm:text-sm">
        DeFiMatrix.io delivers autonomous AI-driven DeFi, enabling intelligent capital deployment, automated portfolios, and seamless optimization across digital payments, DeFi banking, and blockchain ecosystems.
      </p>
    </div>
    </div>
    <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center md:justify-end items-center z-[98]">
      <div className="flex items-center gap-x-6">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdOX0jlgPL6MwDgYApNRl1d8exeX3toD5zvSD9VAaOzQ-1-sw/viewform" target="_blank" className="relative p-[3px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-400 to-pink-400" />
          <div className="group relative rounded-2xl bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
            Build with DefiGPT
          </div>
        </Link>
      </div>
      <div className=" flex items-center gap-x-6">
        <Link href="https://docs.defimatrix.io/docs/Introduction/introduction" target="_blank" className="relative p-[3px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-400 to-pink-400" />
          <div className="group relative rounded-2xl bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
            Documentation
          </div>
        </Link>
      </div>
      {/* <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdOX0jlgPL6MwDgYApNRl1d8exeX3toD5zvSD9VAaOzQ-1-sw/viewform"
        target="_blank"
        className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white hover:bg-black/60 sm:px-6 sm:py-3 sm:text-base"
      >
        Build with DefiGPT
      </a>
      <a
        href="https://docs.defimatrix.io/docs/Introduction/introduction"
        target="_blank"
        className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white hover:bg-black/60 sm:px-6 sm:py-3 sm:text-base"
      >
        Documentation
      </a> */}
    </div>
  </div>
</div>


     
    

      {/* Overlay content */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 ">
       
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


       
    </div> */}
    
    
    </div>
        
      {/* Header */}
      

      

       


      {/* Bottom gradient fade */}
      <div className="absolute -bottom-12 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent "></div>

      <style jsx>{`
       
      `}</style>
    </section>
  );
}
