import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import VideoPlayer from "./VideoPlayer";
import React, { useState } from "react";

export default function Feature3() {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };
  return (
    <div className="bg-[#0b0916] py-12  sm:py-32">
      <div className="container relative mx-auto overflow-hidden  2xl:max-w-screen-2xl">
        <div className="mx-auto max-w-6xl lg:px-8 2xl:max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center justify-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="px-6 lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-purple-400">Welcome to DeFiMatrix,</h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Where the future of decentralized finance is shaped by the power of artificial intelligence.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  At the heart of our platform lies our revolutionary DeFi AI Assistant, designed to transform your
                  digital asset management experience. Our AI Assistant harnesses cutting-edge technology to provide
                  personalized financial insights, automate yield-optimizing strategies, and navigate the complexities
                  of the DeFi ecosystem with precision and intelligence.
                  <br />
                  <br />
                  {isReadMoreShown && (
                    <span>
                      Our mission is to democratize access to DeFi opportunities, making it simpler and more efficient
                      for everyone, from beginners to seasoned investors. The DeFi AI Assistant embodies this mission,
                      offering an intuitive interface through which users can effortlessly interact with various DeFi
                      protocols, manage their portfolios, and make informed decisions based on real-time data analysis
                      and predictive modeling.
                      <br />
                      <br />
                      Join us at DeFiMatrix, and let our DeFi AI Assistant guide you through a new era of financial
                      empowerment. Experience the synergy of AI and blockchain technology as you explore, invest, and
                      grow your assets in the decentralized finance space. Welcome to the future of DeFi, where your
                      financial aspirations are met with intelligence and innovation.
                      <br />
                      <br />
                    </span>
                  )}
                  <button
                    onClick={toggleReadMore}
                    className="mt-3 rounded-md border border-black bg-white px-8 py-3.5 text-xs font-semibold uppercase text-black transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                  >
                    {isReadMoreShown ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>
            </div>
            <div className="right-0 z-10 max-w-2xl  lg:absolute">
              <VideoPlayer src="/defi-coin-video.mp4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
