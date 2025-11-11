import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Rewards: Unlocking Incentives with Intelligence
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In the contemporary DeFi landscape, incentives are the driving force behind behavior, liquidity, and innovation. At DeFiMatrix, we have engineered a Rewards Engine that transcends simple yield or token-drops. It is a sophisticated mechanism designed for strategic alignment, AI-augmented participation, and multi-chain reward orchestration. Whether you are a liquidity provider, a yield-farmer, a content creator, a developer, or a community ambassador, the DeFiMatrix Rewards framework empowers you to earn, contribute, and grow within our ecosystem.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The DeFiMatrix Rewards Framework</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The DeFiMatrix Rewards Engine is structured around four key pillars:
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
                <td className="py-3 font-semibold">Contribution Metrics</td>
                <td className="py-3">We quantify and reward user contributions across multiple dimensions, including liquidity provision, staking, strategy execution, and community engagement. Each contribution is tied to an intelligent metric system, tracked and scored by our AI layer.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Reward Mechanics</td>
                <td className="py-3">Our model includes a variety of reward mechanisms, such as token emissions, fee redistribution, tiered incentives, and performance-based unlocks. This ensures that rewards are aligned with strategic outcomes and not just short-term hype.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">AI & Automation</td>
                <td className="py-3">We integrate intelligence deeply into our rewards system. AI agents monitor your participation, evaluate your contributions, and handle the distribution of rewards with fairness and transparency.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Transparency & Governance</td>
                <td className="py-3">All reward flows are visible on-chain and through your dashboard. You have real-time access to your earned, vested, and claimable rewards, and all reward issuances are tied to a transaction hash and governance decision.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How the Rewards Engine Works</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Here are a few real-world scenarios that illustrate the Rewards Engine in action:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Liquidity Provider</h3>
            <p className="text-gray-300 leading-relaxed">
              You supply USDC/WETH on Chain A, participate in the Liquidity Positions module, and commit the position for a minimum 30-day lock. Your contribution is scored based on a liquidity metric and a time bonus, and you are rewarded with token emissions and a share of the fees. Your AI agent may then recommend bridging part of your position to Chain B to take advantage of a new bonus pool.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Cross-Chain Strategy User</h3>
            <p className="text-gray-300 leading-relaxed">
              You execute a goal via the Strategy module: "Move 10k USDC from Ethereum to Base, swap into a stable-yield pool, and stake for 12 weeks." Your contribution is scored based on a strategy execution metric and a cross-chain multiplier, and you are rewarded with a strategic share of the rewards pool and an extra reward for the "multi-chain" action.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Developer / Ambassador</h3>
            <p className="text-gray-300 leading-relaxed">
              You build a dApp integration for DeFiMatrix or publish educational content about our strategy modules. Your contribution is scored based on a developer/creator metric and a community growth multiplier, and you are rewarded with grant tokens, bonus pool access, or a potential equity-style allocation via governance.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In the era of autonomous finance, rewards are not just incentives; they are strategic levers. At DeFiMatrix, we have built a Rewards Engine that does not simply distribute tokens, but aligns your actions with strategic outcomes. It rewards meaningful, multi-module, multi-chain participation and immerses you in a transparent, AI-driven ecosystem. Whether you are deploying liquidity, executing cross-chain strategies, contributing content, or building integrations, the Rewards framework is your pathway to earning, growth, and long-term alignment.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
