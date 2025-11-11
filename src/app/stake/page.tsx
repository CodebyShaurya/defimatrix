import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/ui/home-footer";

export default function StakePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Staking: Empowering Intelligent Capital
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Welcome to DeFiMatrix Staking, where your DMX tokens transcend passive holding to become active, intelligent agents of wealth creation. At DeFiMatrix, staking is not merely about locking assets; it is about unlocking opportunity. Our AI-powered staking engine optimizes yield, enhances governance participation, and intelligently distributes rewards, ensuring your tokens are always working smarter, not just harder.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why Stake with DeFiMatrix?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Staking on DeFiMatrix is not another transient "APY farm." It is a gateway into a self-evolving ecosystem where every staker becomes a co-architect of the intelligent financial layer of DeFi.
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Smart Yield Optimization:</strong> Our agentic AI continuously analyzes staking pools, on-chain conditions, and liquidity flows to rebalance and optimize yield. This means your staked DMX automatically benefits from dynamic, real-time yield adjustments without any manual intervention.</li>
          <li><strong>True Governance Power:</strong> Stakers gain direct voting rights and influence over key decisions, from protocol upgrades and AI-agent behaviors to risk thresholds and token burns.</li>
          <li><strong>Long-Term Alignment:</strong> The more you stake and the longer you commit, the more the protocol rewards your trust through tiered reward multipliers, increased governance weight, and exclusive early-access privileges.</li>
          <li><strong>Multi-Chain Liquidity Support:</strong> DeFiMatrix staking supports multiple networks, ensuring seamless interoperability and the ability to move, wrap, or compound your assets across chains.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">AI-Driven Staking Mechanics</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiMatrix introduces Agentic AI Yield Optimization, a new paradigm in DeFi staking:
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Feature</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Dynamic APY Adjustments</td>
                <td className="py-3">The AI evaluates network health, total value locked (TVL), and liquidity flow to adjust yield distribution dynamically.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Risk-Weighted Allocation</td>
                <td className="py-3">Staking rewards are adjusted according to real-time volatility metrics, ensuring sustainable emissions.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Auto-Compound Intelligence</td>
                <td className="py-3">Our compounding agent analyzes gas costs versus yield gain to find the most efficient compounding intervals.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Governance Insight Alerts</td>
                <td className="py-3">AI agents monitor proposals and risk factors that may impact your staking strategy, providing predictive insights before the market reacts.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Flexible vs. Locked Staking</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Flexible Staking</h3>
            <p className="text-gray-300 leading-relaxed">
              Perfect for those who value liquidity. You can unstake at any time with minimal penalties, maintaining full control and mobility.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Locked Staking</h3>
            <p className="text-gray-300 leading-relaxed">
              Ideal for long-term believers. The longer you lock your tokens, the higher your reward multiplier and governance power. Locked staking is the foundation of protocol stability, and you are rewarded for your commitment.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Every staked token strengthens the network, fuels the evolution of our AI, and shapes the DeFiMatrix economy. You are not just earning; you are empowering an intelligent DeFi future. By staking DMX, you are stepping into the era of Autonomous Finance, where your capital is not just invested, but intelligent.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
