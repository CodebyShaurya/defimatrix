"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import HeaderNew from "./header-new";

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

      <div className="flex items-center justify-center gap-4 relative mt-[26vh] sm:mt-[50vh] z-10  max-w-4xl mx-auto ">
        <div className="bg-black/60 flex items-center rounded-2xl px-4 py-2 border-2 border-gray-700">
          <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">Built on</span>
          <img src="/logo3.png" alt="Built on logo" className="h-3 sm:h-6 w-auto ml-3" />
        </div>
      </div>

      <div className="mt-[3vh] sm:mt-[8vh] sm:px-8 max-w-5xl mx-auto  backdrop-blur-md rounded-xl z-[99] p-2 grid sm:grid-cols-4 grid-cols-2 sm:gap-6 items-center">
          {/* Text block spanning 2 cols */}
          <div className="col-span-4 lg:col-span-2">
            {/* <h3 className="text-md sm:text-lg md:text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500">
              DeFiMatrix.io, the Autonomous AI DeFi Revolution
            </h3> */}
            <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed text-center sm:text-left">
              DeFiMatrix.io, the Autonomous AI DeFi Revolution. Redefining the future of decentralized finance by empowering intelligent capital deployment, automated portfolio management, and seamless optimization across DeFi Banking, Digital Payments, and Blockchain Ecosystems
            </p>
          </div>

          {/* Two action buttons in the other two columns */}
          <div className="col-span-2 flex flex-row gap-3 justify-center lg:justify-end w-full">
            <a href="https://www.defimatrix.io/" className="inline-flex text-xs sm:text-md items-center justify-center px-2 sm:px-5 py-2 sm:py-3 border border-purple-500/30 text-purple-200 text-white rounded-2xl font-medium bg-black/40 hover:bg-black/30">
              Build with defiGPT
            </a>
            <a href="https://docs.defimatrix.io/docs/Introduction/introduction" className="inline-flex text-xs sm:text-md items-center justify-center px-2 sm:px-5 py-2 sm:py-3 border border-purple-500/30 text-purple-200 rounded-2xl font-medium bg-black/40 hover:bg-black/30">
              Documentation
            </a>
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
      <div className="absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent "></div>

      <style jsx>{`
       
      `}</style>
    </section>
  );
}
