import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/ui/home-footer";

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Strategy: The Art of Intelligent Orchestration
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At DeFiMatrix, strategy is not merely about deploying capital; it is about intelligent orchestration, continuous adaptation, and autonomous optimization. Our Strategy module provides the framework, tools, and AI-driven execution engine to transform your goals into outcome-driven DeFi tactics — across assets, protocols, and chains. Whether you are a seasoned DeFi professional or entering the space for the first time, the Strategy module is your roadmap to unlocking a systemic advantage in the multi-chain world.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The DeFiMatrix Strategy Framework</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our strategy framework is built upon four core pillars: Goal Definition, Adaptive Planning, Autonomous Execution, and Continuous Feedback. Together, they form a closed-loop system that covers your entire lifecycle, from intent to performance to adjustment.
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Pillar</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Goal Definition</td>
                <td className="py-3">Everything begins with what you want to achieve. You articulate your objective, specify your constraints, and set your time-horizon and performance metrics.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Adaptive Planning</td>
                <td className="py-3">Once your goal is set, our AI-driven engine constructs a dynamic plan. It scans for opportunities, builds potential route-maps, and calculates the trade-offs between cost, yield, risk, and liquidity.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Autonomous Execution</td>
                <td className="py-3">With your approval, the execution phase begins. AI agents coordinate multi-step flows, monitor gas and chain state, and trigger operations at optimal moments.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Continuous Feedback & Optimization</td>
                <td className="py-3">Post-execution, the system tracks performance, learns from the outcomes, and triggers adjustments as needed. You receive transparent logs and analytics to inform your future decisions.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Strategic Capabilities You Unlock</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          When you leverage the Strategy module within DeFiMatrix, you gain access to a set of advanced capabilities designed for forward-thinking DeFi participation:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Multi-Chain Strategy Orchestration:</strong> Allocate assets across chains to exploit yield differentials, migrate capital seamlessly, and balance your exposure to network-specific risks.</li>
          <li><strong>Asset & Protocol Diversification:</strong> Diversify your portfolio across a wide range of asset types, protocol styles, and risk profiles.</li>
          <li><strong>Timing & Execution Intelligence:</strong> Benefit from AI-powered gas-fee optimization, slippage minimization, and liquidity-awareness.</li>
          <li><strong>Risk-Managed Strategy:</strong> Define your risk thresholds and let our AI monitor your exposure in real-time, triggering exits or reallocations when necessary.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In a world where DeFi means multiple chains, a myriad of protocols, shifting yields, and constant innovation, strategy is your compass. With the DeFiMatrix Strategy module, you are not simply entering positions; you are orchestrating a living system of capital, algorithms, and intent. You define what you want to achieve, and our AI and infrastructure determine how to achieve it, execute when it makes sense, and evolve over time. Agility, intelligence, and automation converge here, so you can focus on your vision, not just on transactions.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
