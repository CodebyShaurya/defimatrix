import { AtomIcon, DiamondIcon, EthereumIcon, PolygonIcon } from "./icons";

export default function DefiManagement() {
  return (
    <div id="about" className="relative mx-auto overflow-hidden">
      {/* DeFi Portfolio Management Section with Video Background */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-8 md:py-16">
        {/* Video Background */}
        <div className="absolute bottom-0 left-[-300%] -z-[99] w-[600%] md:left-0 md:w-full lg:left-[-50%] lg:w-[200%] xl:left-0 xl:w-full">
          <video autoPlay loop playsInline muted className="mx-auto h-full w-full">
            <source src="/bubble-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute bottom-0 -z-[98] h-[100px] w-full bg-gradient-to-t from-black to-transparent"></div>
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 z-10 bg-black/30" />
        {/* Main Content */}
        <div className="relative z-20 flex w-full max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row">
          {/* Left Main Card */}
          <div className="flex min-w-[320px] max-w-[420px] flex-1 flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-8 shadow-lg">
            <div>
              <button className="mb-5 rounded-full border border-white/20 bg-transparent px-4 py-1.5 text-xs font-medium text-[#CAC6DD]">
                Defimatrix
              </button>
              <div className="mb-4 flex items-start justify-between">
                <h1 className="text-pretty text-md sm:text-4xl font-bold leading-tight text-[#CAC6DD]">
                  We&apos;re proud to launch Defimatrix, An AI-powered yield optimizer that merges institutional-grade
                  strategy with effortless DeFi automation.
                </h1>
                {/* Diamond Icon */}
                <DiamondIcon />
              </div>
              {/* <p className="mb-3 text-lg font-medium text-[#ADA8C3]">Secure On-Chain Finance</p> */}
              {/* <p className="text-sm leading-relaxed text-white/60">
                Elevate your portfolio with advanced AI driven DeFi products
              </p> */}
            </div>
            {/* Icons row at the bottom */}
            <div className="relative flex w-full justify-between py-14 pr-20">
              <EthereumIcon />
              <PolygonIcon />
              <AtomIcon />
            </div>
          </div>
          {/* Right Cards Grid */}
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
            {/* DynaSets */}
            <div className="flex min-w-[220px] flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#CAC6DD]">AI-Driven Yield Optimization</span>
                <button className="rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-[#CAC6DD]">
                  Earn
                </button>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#ADA8C3]">
                Automated Single-Chain Yield Agent dynamically manages and compounds your assets across whitelisted
                protocols to maximize returns—no manual effort required.
              </p>
              {/* Bar chart SVG */}
              <div className="mb-3 flex justify-start">
                <img src="/barChart.gif" alt="DynaSets" className="h-20 w-auto" />
              </div>
              <div className="flex justify-end">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
            {/* Staking */}
            <div className="flex min-w-[220px] flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#CAC6DD]">Simplified Goal-Based Staking</span>
                <button className="rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-[#CAC6DD]">
                  Earn
                </button>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#ADA8C3]">
                Define your yield target (e.g., Optimize Arbitrum stablecoin APY) via intuitive onboarding. Our AI agent
                executes and auto-compounds rewards securely.
              </p>
              {/* Colored bars SVG */}
              <div className="mb-3 flex gap-2">
                <div className="h-2 w-8 rounded-full bg-[#A259FF]" />
                <div className="h-2 w-8 rounded-full bg-[#00F0FF]" />
                <div className="h-2 w-4 rounded-full bg-[#fff]" />
              </div>
              <div className="flex justify-end">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
            {/* DAO */}
            <div className="flex min-w-[220px] flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#CAC6DD]">Transparent DAO Vaults</span>
                <button className="rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-[#CAC6DD]">
                  Governance
                </button>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-[#ADA8C3]">
                Join community-governed vaults with real-time action logs. Stake tokens, vote on strategies, and track
                performance via an audited dashboard.
              </p>
              {/* Yellow line chart and value */}
              <div className="mb-3 flex flex-col">
                <img src="/price.webp" alt="Launchpad" className="h-full w-48 -translate-x-12" />
              </div>
              <div className="flex justify-end">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
            {/* Yield Farming */}
            <div className="flex min-w-[220px] flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#CAC6DD]">Auto-Compounding Yield Farms</span>
                <button className="rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-[#CAC6DD]">
                  Earn
                </button>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#ADA8C3]">
                Provide liquidity to pre-vetted protocols. Rewards are harvested and reinvested autonomously by the AI
                agent for optimal growth.
              </p>
              {/* Colored bars SVG */}
              <div className="mb-3 flex gap-2">
                <div className="h-2 w-10 rounded-full bg-[#00F0FF]" />
                <div className="h-2 w-6 rounded-full bg-[#A259FF]" />
                <div className="h-2 w-12 rounded-full bg-[#fff]" />
              </div>
              <div className="flex justify-end">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
            {/* Launchpad */}
            <div className="flex min-w-[220px] flex-col justify-between rounded-3xl bg-[radial-gradient(161.21%_160.39%_at_5.71%_-44.13%,#363636_0,rgba(26,26,26,.27)_100%)] p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px] md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#CAC6DD]">Curated Launchpad Access</span>
                <button className="rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-medium text-[#CAC6DD]">
                  Join
                </button>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-[#ADA8C3]">
                Gain early entry to audited, high-potential DeFi projects. Whitelisted protocols launch monthly,
                integrated with yield automation.
              </p>
              {/* Purple line chart SVG */}
              <div className="mb-3 flex">
                <img src="/lineGraph.webp" alt="Launchpad" className="h-20 w-auto" />
              </div>
              <div className="flex justify-end">
                <span className="text-2xl text-white">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End DeFi Portfolio Management Section */}
    </div>
  );
}
