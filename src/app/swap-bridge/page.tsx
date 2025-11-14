import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function SwapBridgePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Swap & Bridge.png"
            alt="DeFiGPT banner"
            className="w-full h-96 md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Swap & Bridge: AI-Powered Cross-Chain Liquidity
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          DeFiMatrix is reimagining how assets move across the decentralized world. Our Swap & Bridge module unites fragmented liquidity, advanced routing algorithms, and AI-driven automation into one unified experience — empowering you to transfer, convert, and deploy assets across 88+ blockchains with precision and confidence.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          In the ever-expanding world of DeFi, liquidity is scattered across ecosystems. Swapping tokens or moving assets between networks can be slow, risky, and expensive. We solved that. At DeFiMatrix, bridging and swapping are no longer two separate actions — they're a single, intelligent flow, powered by our autonomous AI execution layer.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The DeFiMatrix Solution: Unified, AI-Optimized, and Autonomous</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our Swap & Bridge module unifies token swaps and cross-chain bridging into one seamless action, intelligently executed by AI.
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>One Click, Multi-Chain Movement:</strong> Swap any token across any supported chain with minimal latency.</li>
          <li><strong>AI-Optimized Routing:</strong> Our intent-based engine evaluates hundreds of liquidity routes across 80+ DEXs and bridges in milliseconds, picking the most cost-efficient, secure, and timely path.</li>
          <li><strong>Gas Optimization:</strong> The system waits for the lowest gas windows or recommends off-peak times to save up to 30% on transaction costs.</li>
          <li><strong>Dynamic Risk Scoring:</strong> The AI continuously tracks bridge reliability, liquidity depth, and audit data to select only the safest protocols.</li>
          <li><strong>Autonomous Execution:</strong> You define your goal (e.g., "bridge USDC from Arbitrum to BNB and swap to USDT"), and the agent executes end-to-end.</li>
        </ul>
        
        <p className="text-xl font-semibold text-purple-400 mb-8">
          This is AI-powered liquidity mobility — where execution meets intelligence.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Under the Hood: The AI Execution Layer</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The intelligence behind Swap & Bridge is powered by DeFiMatrix AI, a network of agentic solvers designed to maximize on-chain efficiency. Each AI agent performs a specific role:
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Agent</th>
                <th className="pb-3 text-purple-400 font-semibold">Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Route Agent</td>
                <td className="py-3">Scans liquidity pools, DEXs, and bridge endpoints to identify optimal swap paths.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Gas Agent</td>
                <td className="py-3">Predicts network congestion using historical mempool analysis and forecasts ideal transaction timing.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Risk Agent</td>
                <td className="py-3">Continuously audits protocol health, TVL fluctuations, and bridge downtimes.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Execution Agent</td>
                <td className="py-3">Handles cross-chain multi-call orchestration with built-in failover protection.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Report Agent</td>
                <td className="py-3">Logs full transaction analytics, verifying slippage and tracking PnL impact.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          Together, these agents enable a self-optimizing liquidity flow, learning from market data and evolving continuously.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Security and Trust: The Bedrock of DeFiMatrix</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Security is the backbone of DeFiMatrix. Every bridge, swap, and protocol integration passes through a strict multi-layered security framework:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Smart-Contract Audits:</strong> All Swap & Bridge contracts are externally audited before deployment.</li>
          <li><strong>Whitelisted Protocols:</strong> Only bridges with on-chain verification and a proven security record are integrated.</li>
          <li><strong>Real-Time Anomaly Detection:</strong> AI monitors for irregular TVL movements, paused contracts, or exploit patterns.</li>
          <li><strong>User Custody:</strong> Funds remain in your wallet until execution; DeFiMatrix is non-custodial.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          Our commitment: speed without sacrifice. Your capital moves intelligently — never recklessly.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFi has matured from single-chain experimentation into a multi-chain universe — but interoperability remains the bottleneck. Swap & Bridge by DeFiMatrix transforms that friction into flow.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          By combining agentic AI, intent-based execution, and cross-chain composability, we eliminate the invisible walls that divide ecosystems. Your capital becomes borderless. Your liquidity becomes intelligent. Your DeFi experience becomes effortless.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
