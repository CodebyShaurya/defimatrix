import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function LiquidityPositionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Liquidity Positions.png"
            alt="DeFiGPT banner"
            className="w-full h-96 md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Liquidity Positions: The Strategic Frontier of Decentralized Finance
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At DeFiMatrix, liquidity is not merely the backdrop for trading; it is a strategic frontier. Our Liquidity Positions module empowers you to engage in liquidity provision with unparalleled sophistication. You provide the capital, our AI agents manage your positions, and you optimize returns across a multitude of chains and Automated Market Makers (AMMs). As a leader in AI and FinTech, we believe that intelligent liquidity positions are a cornerstone of DeFi's future growth. With DeFiMatrix, we place this power in your hands, enhanced by automation, transparency, and unwavering control.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why Liquidity Positions Matter</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Liquidity is the lifeblood of decentralized markets, enabling everything from token swaps and yield harvesting to complex arbitrage. However, simply "providing liquidity" is no longer a sufficient strategy. To succeed, you require:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Optimized Capital Deployment:</strong> Placing your funds where fees, incentives, and market depth converge for maximum returns.</li>
          <li><strong>Risk-Aware Strategy:</strong> Navigating the complexities of impermanent loss, protocol risk, and chain fragmentation.</li>
          <li><strong>Multi-Chain Reach:</strong> Leveraging liquidity across a vast network of blockchains and AMMs to access the best opportunities.</li>
          <li><strong>Active Management:</strong> Dynamically rebalancing, harvesting fees, and adjusting ranges for concentrated liquidity.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          Without this level of sophistication, traditional Liquidity Provider (LP) positions can underperform simpler strategies like staking or holding. The DeFiMatrix Liquidity Positions engine transforms liquidity provision from a passive activity into a proactive, intelligent component of your portfolio.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How DeFiMatrix Handles Liquidity Positions</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The Liquidity Positions module within DeFiMatrix operates through a systematic, AI-driven process:
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Step</th>
                <th className="pb-3 text-purple-400 font-semibold">Action</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">1</td>
                <td className="py-3 font-semibold">Intelligent Position Discovery</td>
                <td className="py-3">Your AI agent scans the universe of AMM pools across all supported chains, analyzing metrics like historical trading volume, token volatility, and impermanent loss risk to recommend optimal pairs and fee tiers.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">2</td>
                <td className="py-3 font-semibold">Streamlined Deployment & Range Setting</td>
                <td className="py-3">For standard AMMs, you simply deposit your token pair. For concentrated-liquidity AMMs, you can define your price range and fee tier, or accept the agent's recommendation.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">3</td>
                <td className="py-3 font-semibold">Continuous Monitoring & Rebalancing</td>
                <td className="py-3">Your agent monitors performance in real-time, tracking fee accrual, incentive rewards, and token price drift. When conditions change, it can recommend or automatically trigger rebalancing actions.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">4</td>
                <td className="py-3 font-semibold">Exit & Redeployment</td>
                <td className="py-3">When your targets are met or risk criteria are exceeded, your agent executes the exit, withdraws liquidity, and can optionally swap or redeploy the assets into another strategy.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Advanced Liquidity Strategies</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          With DeFiMatrix, your liquidity positions can evolve into sophisticated tactics:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Concentrated Liquidity Optimization:</strong> For AMMs like Uniswap v3, your agent can deploy narrow ranges for stablecoin pairs to capture high fee density, or wider ranges for volatile pairs to avoid range exhaustion.</li>
          <li><strong>Governance Token Maximization:</strong> In AMMs with governance tokens, your agent can strategically lock tokens, choose optimal gauge allocations, and harvest rewards to maximize your influence and returns.</li>
          <li><strong>Stablepair Specialization:</strong> For stablecoin pairs, your agent can deploy ultra-narrow ranges with high capital efficiency, focusing on fee generation rather than volatility capture.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Liquidity positions represent one of the most powerful levers in DeFi, but only when executed with intelligence. At DeFiMatrix, we believe you deserve more than passive deposits. You deserve strategic liquidity deployment, automated monitoring, multi-chain efficiency, and transparent control. Whether you are a seasoned LP seeking advanced tools or a discerning investor looking to upgrade your DeFi exposure, the Liquidity Positions module provides the infrastructure to evolve.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
