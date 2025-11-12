import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function XUSDPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          xUSD: The Algorithmic Stablecoin for the AI-Driven DeFi Era
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In a landscape where decentralized finance spans multiple chains, volatile tokens, and fragmented liquidity, a stable, trustworthy anchor asset is fundamental. That anchor in the DeFiMatrix ecosystem is xUSD — a fully decentralized, algorithmic stablecoin engineered for resilience, transparency, and multi-chain execution. As a cornerstone of our AI and FinTech expertise, we view xUSD not merely as a token, but as a core infrastructure component that enables seamless capital movement, strategy execution, and intelligent asset management across chains.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why xUSD Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Stablecoins are the bedrock of DeFi, serving as the entry point for yield, the hedge against volatility, and the bridge between strategies. However, many existing stablecoins carry significant trade-offs, including reliance on fiat reserves, centralized custodians, and opaque collateral models. xUSD is the solution, designed for the multi-chain, AI-driven world.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">xUSD delivers:</p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>High Collateralization:</strong> A 300% backing for enhanced downside protection.</li>
          <li><strong>On-Chain Transparency:</strong> Fully transparent reserves with no hidden intermediaries.</li>
          <li><strong>Decentralized Issuance:</strong> Algorithmic and smart-contract mechanisms rather than fiat backing.</li>
          <li><strong>Deep Integration:</strong> A foundational building block for intelligent strategies within the DeFiMatrix ecosystem.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          In short, xUSD is a key layer of the DeFiMatrix architecture, enabling you to define goals, move assets, rebalance portfolios, hedge risks, and enable automation with confidence.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How xUSD Works within DeFiMatrix</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          xUSD's lifecycle and ecosystem interactions are managed through our intelligent DeFiMatrix infrastructure:
        </p>
        
        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
          <li><strong>Minting:</strong> Connect your wallet, select your collateral asset, and our system computes the amount of xUSD you can mint based on the required 300% collateralization ratio. Our AI agent then monitors your collateral's health and will notify you or act if it falls below predefined risk thresholds.</li>
          <li><strong>Deployment & Utility:</strong> Once you hold xUSD, you can integrate it across your DeFiMatrix strategy. Use it to enter yield pools, move across chains, or swap into target assets, all while maintaining stable exposure to the USD value.</li>
          <li><strong>Monitoring & Risk Management:</strong> Our AI risk agent watches your collateral ratio, the health of the underlying protocol, and market volatility. If conditions indicate risk, the system alerts you or automatically triggers safe paths, such as repaying your xUSD to withdraw your collateral.</li>
          <li><strong>Redemption & Exit:</strong> You can repay your xUSD at any time to unlock your collateral. The transparency of our reserves and collateral means you always know the backing and health of your stablecoin exposure.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Key Benefits for DeFiMatrix Users</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Stability & Flexibility:</strong> Gain a USD-pegged asset that allows you to preserve value while preparing your next move.</li>
          <li><strong>Multi-Chain Liquidity Enablement:</strong> xUSD makes cross-chain flows smoother, allowing you to mint on one chain, bridge to another, and deploy into yield with a single, stable reference.</li>
          <li><strong>Trustless, Transparent Collateral Backing:</strong> No fiat reserves, no hidden intermediaries. You can verify the collateralization on-chain at all times.</li>
          <li><strong>Integration into the Strategy Engine:</strong> xUSD is a key instrument within the DeFiMatrix ecosystem, used by our Strategy, Limit Orders, Liquidity Positions, and Swap & Bridge modules.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In the evolution of decentralized finance, stablecoins are the bedrock upon which strategies, cross-chain flows, and automation rest. xUSD is more than a pegged asset; it's a strategic enabler in the DeFiMatrix world. By combining high collateralization, on-chain transparency, and seamless integration into our AI-driven ecosystem, xUSD empowers you to deploy capital with confidence, move value across chains, and automate your strategies without sacrificing control.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
