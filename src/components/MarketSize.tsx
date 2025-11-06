import React, { useState } from "react";
import Image from "next/image";

export function MarketSize() {
  return (
    <div id="market-size" className="container relative mx-auto border border-white/10 p-4 text-left md:p-20 md:text-center 2xl:max-w-screen-2xl">
      <div className="absolute left-0 right-0 -z-10 mx-auto flex w-full items-center justify-center">
        <img src="/images/circle-bg.svg" alt="circle-bg" />
        <img
          src="/images/gradient-bg.svg"
          className="absolute animate-pulse opacity-30 blur-3xl"
          alt=""
        />
      </div>
      <div className="absolute -z-10 flex items-start justify-start overflow-hidden opacity-50">
        <img src="/images/element-box-left.svg" alt="element-box-left" />
      </div>
      <div className="absolute bottom-10 right-10 -z-10 flex items-end justify-end overflow-hidden opacity-50">
        <img src="/images/element-box-right.svg" alt="element-box-right" />
      </div>
      <div className="mx-auto mb-4 w-auto">
        <Image
          src="/images/cta-icon.svg"
          alt="cta-icon"
          width={100}
          height={100}
          className="animate-pulse md:mx-auto"
        />
      </div>
      <h1 className="font-display mx-auto mt-8 max-w-4xl text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-5xl lg:text-6xl">
        <span className="relative whitespace-nowrap">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 340 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.5C59.5 4.70839 209 -4.79987 339 11.5"
              stroke="url(#paint0_angular_2_29865)"
              strokeWidth={4}
            />
            <defs>
              <radialGradient
                id="paint0_angular_2_29865"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(170 7) rotate(90) scale(4.5 169)"
              >
                <stop offset="0.0993526" stopColor="#FFC876" />
                <stop offset="0.526122" stopColor="#ACFF8E" />
                <stop offset="0.739587" stopColor="#9453FF" />
                <stop offset="0.913343" stopColor="#FF89C2" />
              </radialGradient>
            </defs>
          </svg>
          <span className="relative">Market Size</span>
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-4xl text-3xl leading-snug text-gray-300">
        The cryptocurrency market is a{" "}
        <span className="font-semibold text-purple-500">$4.67 BILLION</span> a
        year industry. Expected to{" "}
        <span className="font-semibold text-purple-500">GROW BY 12.5%</span>{" "}
        year till 2027.
      </p>
      <div className="mt-10 flex gap-x-6 md:justify-center">
        <a href="/market-dynamics" className="relative p-[3px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400" />
          <div  className="group relative rounded bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
            This growth is primarily driven by our three core target users
          </div>
        </a>
      </div>
      <img
          src="/images/market-size.svg"
          alt="cta-icon"
          className="animate-pulse h-full w-auto md:mx-auto"
        />
    </div>
  );
}
