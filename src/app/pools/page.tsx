import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function PoolsPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Pools.png"
            alt="DeFiGPT banner"
            className="w-full h-96 md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Pools: The Intelligent Heart of a Unified Liquidity Ecosystem
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In decentralized finance, liquidity is power. At DeFiMatrix, our Pools module transforms that power into a living, intelligent ecosystem where every token, trade, and reward moves with purpose, guided by AI-driven optimization. Pools are the core of the DeFiMatrix network, aggregating, balancing, and redistributing liquidity across chains and protocols. They form the beating heart of our AI-powered ecosystem, supporting staking, swapping, bridging, and automated strategies — all with non-custodial security and seamless multi-chain interoperability.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Vision Behind DeFiMatrix Pools</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Traditional DeFi pools are static. Users deposit tokens, earn yield, and hope for the best. But in a world where liquidity conditions, market volatility, and fee structures change by the second, passive pools often underperform. DeFiMatrix transforms this model by introducing AI-driven, adaptive pools. These are not static yield vaults but living systems that react to market data, rebalance exposure, and reallocate liquidity across chains and protocols in real time.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Each Pool is powered by our Agentic AI architecture, which includes:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Scout Agents:</strong> Continuously scanning for yield opportunities and risk levels.</li>
          <li><strong>Strategy Agents:</strong> Reallocating liquidity to optimize APY based on live conditions.</li>
          <li><strong>Execution Agents:</strong> Handling on-chain operations with gas-efficient logic.</li>
          <li><strong>Risk Agents:</strong> Monitoring market events, liquidity shifts, and pool health.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          This architecture turns DeFiMatrix Pools into autonomous liquidity organisms — intelligent, responsive, and self-correcting.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Types of Pools in DeFiMatrix</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiMatrix supports multiple pool archetypes designed for different users, assets, and goals:
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Pool Type</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Liquidity Pools (LP Pools)</td>
                <td className="py-3">Traditional AMM-style pools where users provide liquidity to earn swap fees and participate in yield farming with AI-driven reward optimization.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Staking Pools</td>
                <td className="py-3">Single-asset staking pools designed for stable yield generation, featuring AI-driven compounding logic and optional auto-bridge reinvestment.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Vault-Linked Pools</td>
                <td className="py-3">Hybrid pools directly connected to DeFiMatrix Vaults, where liquidity feeds into automated strategies like lending, arbitrage, or cross-chain yield farming.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">AI-Curated Dynamic Pools</td>
                <td className="py-3">Exclusive to DeFiMatrix, these pools feature dynamic compositions and asset ratios that change automatically as the AI reacts to on-chain signals.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Cross-Chain Unified Pools</td>
                <td className="py-3">Powered by the Matrix Bridge, these pools unify liquidity from multiple networks into a single layer, enabling users to deposit on one chain and earn yield on another.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The AI Optimization Engine</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our Pools module is powered by the DeFiMatrix Liquidity Intelligence Layer (LIL), an AI system that continuously optimizes across several key dimensions:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Gas Efficiency:</strong> Executes actions when gas prices are low or utilizes batch transactions to minimize costs.</li>
          <li><strong>Yield Scoring:</strong> Calculates the expected APY across multiple protocols and reallocates capital accordingly.</li>
          <li><strong>Liquidity Health:</strong> Monitors TVL trends, trading volume, and slippage to avoid thin markets.</li>
          <li><strong>Risk Awareness:</strong> Detects potential protocol issues, rug risks, or smart contract anomalies.</li>
          <li><strong>Multi-Chain Routing:</strong> Evaluates bridges and sidechains for security and throughput.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          This approach endows every pool with autonomous intelligence, continuously adapting to achieve the optimal balance of safety, yield, and efficiency.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Liquidity is the foundation of every financial ecosystem, and in DeFi, it is the pulse that keeps innovation alive. At DeFiMatrix, we have reimagined liquidity not as static Total Value Locked (TVL), but as dynamic intelligence. Each Pool becomes an autonomous engine, allocating capital, earning yield, and evolving continuously — powered by AI, secured by the blockchain, and directed by you. By joining us, you are not just providing liquidity; you are empowering intelligence and shaping the future of autonomous finance.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
