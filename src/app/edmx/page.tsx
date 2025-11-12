import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function EDMXPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          eDMX: The Liquid, Tradable Engine of the DeFiMatrix Ecosystem
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In the dynamic, multi-chain world of decentralized finance, assets often face a fundamental trade-off: utility versus liquidity. Tokens that provide core network utility, such as staking and governance rights, are frequently illiquid and difficult to trade. Conversely, highly liquid, tradable assets often lack deep, intrinsic utility. eDMX is DeFiMatrix's innovative solution to this dilemma.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          eDMX is a liquid, EVM-compatible representation of DMX (Mint Power), the native staking and utility token of the DeFiMatrix Chain. It is designed to bridge the gap between consensus-layer utility and DeFi-layer flexibility, enabling users, AI agents, and automated strategies to participate in the future of finance with both depth and agility.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Strategic Imperative: Unlocking Utility with Liquidity</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          The DeFiMatrix ecosystem is powered by two core tokens: DMX, which secures the network and powers computations on our Cosmos-based chain, and MFI, which governs the protocol. While DMX is essential for the security and operation of the network, its native form is not inherently tradable within the EVM environment, where a significant portion of DeFi activity occurs.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          This is where eDMX comes in. It is a tokenized, EVM-compatible derivative of DMX that unlocks its utility for the broader DeFi world. eDMX allows the value and utility of DMX to be seamlessly integrated into liquidity pools, lending protocols, and other DeFi applications, creating a powerful, dual-layer asset.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Key Characteristics of eDMX</h2>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 pr-4 text-purple-400 font-semibold">Feature</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">EVM-Native Liquidity</td>
                <td className="py-3">As an EVM-compatible token, eDMX can be freely traded, staked, and used in DeFi protocols across our EVM+ layer and other connected chains.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">Utility-Backed Value</td>
                <td className="py-3">eDMX is intrinsically linked to DMX. Holders can bridge eDMX back to the DeFiMatrix Chain to convert it into DMX, allowing them to participate in staking and network consensus. This ensures that eDMX is always backed by real, fundamental utility.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">Scarcity and Controlled Emission</td>
                <td className="py-3">The total supply of eDMX is strictly limited, representing a fraction of the total DMX supply. This scarcity, combined with a carefully managed emission schedule, is designed to preserve long-term value.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold align-top">Deep Ecosystem Integration</td>
                <td className="py-3">eDMX is not a standalone asset; it is deeply woven into the fabric of the DeFiMatrix ecosystem, from our Cross-Chain Gateway to our Strategy and Rewards modules.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Tokenomics and Distribution</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The tokenomics of eDMX are designed to foster a healthy, vibrant, and sustainable ecosystem:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><strong className="text-purple-300">Total Supply:</strong> The total supply of eDMX is capped at 400 million tokens, representing 10% of the initial maximum supply of DMX.</li>
          <li><strong className="text-purple-300">Emission Schedule:</strong> The tokens are distributed over a multi-year period with structured vesting and lock-up schedules for team members, advisors, and early investors to ensure market stability.</li>
          <li><strong className="text-purple-300">Liquidity Incentives:</strong> A significant portion of the eDMX supply is allocated to liquidity mining and other incentive programs to bootstrap deep liquidity and encourage active participation in the DeFiMatrix ecosystem.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Utility and Use Cases</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          eDMX is a versatile, multi-faceted asset with a wide range of use cases:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">DeFi Participation and Liquidity Provision</h3>
            <p className="text-gray-300 leading-relaxed">
              Users can provide eDMX to liquidity pools (e.g., eDMX/xUSD) on our native DEX and other partner exchanges to earn trading fees and additional rewards in the form of MFI tokens.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Multi-Chain Strategies</h3>
            <p className="text-gray-300 leading-relaxed">
              eDMX serves as a pivotal asset in automated, cross-chain strategies. For example, an AI agent could acquire eDMX on an EVM chain, bridge it to the DeFiMatrix Chain to convert it to DMX, stake it to earn consensus rewards, and then use the resulting MFI rewards to further participate in DeFi.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Governance and Network Utility</h3>
            <p className="text-gray-300 leading-relaxed">
              By bridging eDMX back to DMX, holders can participate in the governance of the DeFiMatrix network, helping to shape its future while earning staking rewards.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Portfolio and Yield Management</h3>
            <p className="text-gray-300 leading-relaxed">
              For sophisticated investors and strategists, eDMX offers a unique, balanced risk-reward profile, combining the potential upside of a tradable asset with the underlying stability of a utility token.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          eDMX is a strategic cornerstone of the DeFiMatrix ecosystem. It represents the convergence of network utility and DeFi liquidity, creating a powerful new asset class for the intelligent, multi-chain future. By unlocking the value of our core utility token for the broader DeFi world, eDMX enhances capital efficiency, deepens liquidity, and creates a more vibrant and interconnected ecosystem.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          For users, strategists, and developers, eDMX offers a unique opportunity to participate in the growth of a protocol designed for the future of finance, with an asset that is both deeply useful and highly liquid. It is a testament to our vision of an AI-driven financial system that is intelligent, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
