import React from "react";

export default function DefiTools() {
  return (
    <div className="relative mx-auto overflow-hidden">
      {/* DeFi Tools Section */}
      <section className="relative  w-full bg-[url('/defi-blue-bg.png')] bg-contain bg-center bg-no-repeat py-8 md:py-32">
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 lg:flex-row">
          {/* Left Column */}
          <div className="w-full px-6 pt-8 lg:w-1/3 lg:px-8">
            <div className="mb-4 flex space-x-6">
              <div className="h-6 w-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22L3 17V7L12 2L21 7V17L12 22Z" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="h-6 w-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 22C18.2091 22 20 20.2091 20 18C20 15.7909 18.2091 14 16 14C13.7909 14 12 15.7909 12 18C12 20.2091 13.7909 22 16 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 22C10.2091 22 12 20.2091 12 18C12 15.7909 10.2091 14 8 14C5.79086 14 4 15.7909 4 18C4 20.2091 5.79086 22 8 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 10C18.2091 10 20 8.20914 20 6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6C12 8.20914 13.7909 10 16 10Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="h-6 w-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8L8 16M8 8L16 16" stroke="white" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="h-6 w-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 5L16.24 7.83M7.76 16.17L4.93 19M19.07 19L16.24 16.17M7.76 7.83L4.93 5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <button className="mb-4 rounded-full border border-white/20 bg-transparent px-4 py-1.5 text-xs font-medium text-[#CAC6DD]">
              Enhanced Experience
            </button>

            <h1 className="mb-4 text-4xl font-bold leading-tight text-[#CAC6DD]">AI-Optimized DeFi, Simplified</h1>

            <p className="mb-8 text-sm leading-relaxed text-white/60">
              Achieve maximum yields effortlessly. Let our AI agent automate strategies while you retain full control.
            </p>

            {/* Small Card with Crystal */}
            <div className="relative w-full overflow-hidden rounded-xl">
              <div className="absolute -right-2 bottom-0 h-5 w-5 rounded-full bg-blue-500 opacity-70 blur-sm" />
              <div className="absolute left-2 top-2 h-3 w-3 rounded-full bg-blue-300 opacity-80" />
              <div className="relative h-auto w-full">
                <img src="/defi-tools-2.png" alt="Crystal" className="h-full w-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Middle Column with Crystal Image */}
          <div className="relative flex w-full items-center justify-center py-10 lg:w-1/3">
            <div className="relative h-auto w-full rounded-xl">
              {/* Crystal image placeholder */}

              <img src="/defi-tools.png" alt="Crystal" className="h-full w-full rounded-md object-cover" />
            </div>
          </div>

          {/* Right Column with Service Cards */}
          <div className="w-full px-6 pt-8 lg:w-1/3 lg:px-8">
            {/* Bridge Card */}
            <div className="mb-8 flex flex-col  transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#CAC6DD]">AI-Powered Cross-Chain Yield Bridge</h3>
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L21 12L16 16" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#ADA8C3]">
                Our AI agent automatically bridges and deploys your assets across chains to optimize yield opportunities
                while minimizing gas costs.
              </p>
            </div>

            {/* Swap Card */}
            <div className="mb-8 flex flex-col  transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#CAC6DD]">Autonomous Token Swaps</h3>
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L21 12L16 16" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#ADA8C3]">
                Let our AI agent execute the most efficient swaps across whitelisted protocols, finding optimal pricing
                and timing for your transactions.
              </p>
            </div>

            {/* Fiat on-off ramp Card */}
            <div className="mb-8 flex flex-col  transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-[#CAC6DD]">Fiat Gateway</h3>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L21 12L16 16" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#ADA8C3]">
                Coming Soon: Our AI will automatically convert fiat to the highest-yielding tokens and vice versa based
                on real-time market conditions.
              </p>
            </div>

            {/* Telegram Bot Card */}
            <div className="mb-8 flex flex-col transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex flex-wrap items-center space-x-3">
                  <h3 className="text-lg font-semibold text-[#CAC6DD]">AI Agent Command Center</h3>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L21 12L16 16" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#ADA8C3]">
                Coming Soon: Directly command your AI yield agent via chat interface - monitor, adjust, and optimize
                your portfolio through conversational DeFi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
