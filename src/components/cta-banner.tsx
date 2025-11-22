"use client";

import { useState } from "react";
import { DisclaimerModal } from "@/components/DisclaimerModal";

export const CTABanner = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="relative mb-16 overflow-hidden rounded-[32px] bg-[#7B2E8E] px-8 py-16">
        {/* Background pattern/watermark */}
        <div className="absolute inset-0">
          <img src="/images/cta-bg.png" alt="" className="w-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <h2 className="mb-4 text-balance text-2xl font-semibold text-white">
            DeFiMatrix.io is the leading truly decentralized Intent-Driven DeFi platform, designed to empower users to
            achieve their financial goals through advanced AI technology.
          </h2>
          <p className="mb-8 max-w-3xl text-lg text-white/80">
            By combining intelligent automation with a user-centric interface, DeFiMatrix transforms complex DeFi
            interactions into seamless, goal-based experiences—bridging the gap between strategy and execution in the
            world of decentralized finance.
          </p>
          <div className="flex w-full flex-wrap gap-4">
            <button
              onClick={() => setDisclaimerOpen(true)}
              className="w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-[#7B2E8E] transition-colors hover:bg-gray-100 sm:w-max"
            >
              Launch App
            </button>
            <a
              href="https://defimatrix-new-docs.vercel.app/docs/Introduction/introduction"
              target="_blank"
              className="w-full rounded-lg border border-white px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10 sm:w-max"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>

      <DisclaimerModal
        isOpen={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
        onAgree={() => {
          setDisclaimerOpen(false);
          window.open("https://app.defimatrix.io/", "_blank");
        }}
      />
    </div>
  );
};
