"use client";

import { ArrowRight, Paperclip, RotateCcw } from "lucide-react";
import BackgroundShader from "@/components/ui/background-shader";
import ShadedLogo from "@/components/ui/shaded-logo";
import Header from "@/components/header-new";
import { useState } from "react";
import HeaderNew from "./header-new";

export default function HeroSection() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to the specified URL
      window.location.href = "https://defimatrix-app-prod.vercel.app/chat";
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Header positioned at the top */}
      <div className="w-full">
        <HeaderNew />
      </div>

      {/* Background Shader for additional effect */}
      <div className="absolute inset-0 -z-10">
        <BackgroundShader className="h-screen w-full" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 -z-10 w-full">
        <svg viewBox="0 0 1920 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1920" height="57" fill="url(#paint0_linear_2479_394)" />
          <defs>
            <linearGradient id="paint0_linear_2479_394" x1="960" y1="57" x2="960" y2="0" gradientUnits="userSpaceOnUse">
              <stop />
              <stop offset="0.389423" stopOpacity="0.783654" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shaded Logo Background */}
      <div className="-z-5 absolute inset-0 flex -translate-y-16 items-center justify-center px-6">
        <ShadedLogo className="h-auto w-full max-w-5xl" />
      </div>

      {/* Main Content - centered */}
      <div className="flex flex-1 items-center justify-center">
        <div className="z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          {/* Search Input */}
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can DefiGPT help?"
                className="w-full rounded-full border border-white/50 bg-[#1a1a1d] p-4 pr-16 text-white focus:border-[#3a3a3e] focus:outline-none focus:ring-0 sm:p-6 sm:pr-24"
              />
              <div className="absolute inset-y-0 right-0 flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  className="cursor-pointer rounded-full border border-transparent p-3 text-gray-400 transition-colors hover:border-white/5 hover:text-white sm:p-4"
                >
                  <Paperclip size={16} className="sm:size-18" />
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="mr-2 cursor-pointer rounded-full border border-transparent bg-white/10 p-3 text-gray-400 transition-colors hover:border-white/5 hover:bg-white/20 hover:text-white sm:mr-3 sm:p-4"
                >
                  {loading ? (
                    <RotateCcw size={16} className="sm:size-18 animate-spin" />
                  ) : (
                    <ArrowRight size={16} className="sm:size-18" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section with fixed positioning and proper width */}
      <div className="absolute bottom-4 left-0 right-0 sm:bottom-8 md:bottom-16">
        <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 md:items-center md:justify-between md:gap-8 lg:flex-row lg:px-8">
          {/* Arrow down */}
          <a href="#about" className="mb-4 hidden md:mb-0 md:block">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/50"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Bottom text */}
          <div className="mb-6 md:mb-0">
            <p className="max-w-xl text-sm text-gray-400 sm:text-base">
              We are thrilled to unveil DeFiMatrix, our most advanced model yet, blending superior reasoning with
              extensive pretraining knowledge.
            </p>
          </div>

          {/* Bottom buttons */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
