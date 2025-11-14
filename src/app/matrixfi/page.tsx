import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function MatrixFiPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/MatrixFi (MFI).png"
            alt="MatrixFi banner"
            className="w-full h-[450px] md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          MatrixFi (MFI): The Utility and Governance Token of the Intelligent DeFi Ecosystem
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          DeFiMatrix is an ambitious project to transform decentralized finance into a self-optimizing, intelligent ecosystem powered by artificial intelligence. At the heart of this ecosystem lies MatrixFi (MFI), the native utility and governance token that fuels every transaction, decision, and AI-driven process across the platform.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          MFI is more than just a traditional governance token; it is the operational currency of intelligence within DeFiMatrix. It grants users access to our powerful AI tools, including DeFiGPT, enables participation in liquidity pools and governance, and unlocks a suite of advanced features that herald a new era of autonomous finance.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">A Token Engineered for an Intelligent and Interoperable Future</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          MFI was designed from the ground up to address three fundamental challenges in DeFi:
        </p>

        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
          <li><strong className="text-purple-300">Fragmented and Inefficient Liquidity:</strong> MFI facilitates intelligent liquidity routing across more than 80 blockchains, ensuring that capital flows to where it is most productive.</li>
          <li><strong className="text-purple-300">Passive and Ineffective Governance:</strong> MFI empowers a new model of AI-enhanced governance, where decisions are informed by data-driven insights and predictive analytics.</li>
          <li><strong className="text-purple-300">Static and Unsustainable Tokenomics:</strong> MFI's tokenomics are dynamic and adaptive, with AI models adjusting key parameters in real time to ensure the long-term health and stability of the ecosystem.</li>
        </ol>

        <p className="text-gray-300 leading-relaxed mb-8">
          Built on a hybrid EVM-Cosmos framework, MFI operates seamlessly across multiple blockchains, combining the security and efficiency of the Cosmos SDK with the programmability and network effects of the EVM.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The MFI Utility Framework</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          MFI is the lifeblood of the DeFiMatrix ecosystem, with a multi-faceted utility that spans AI interaction, liquidity provision, and decentralized governance:
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 pr-4 text-purple-400 font-semibold">Utility</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">Access to AI Tools</td>
                <td className="py-3">Holding and using MFI unlocks premium features within the Matrix AI Layer, including access to our conversational AI assistant, DeFiGPT, predictive yield analysis, and automated, cross-chain arbitrage strategies.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">Liquidity Provision and Yield Farming</td>
                <td className="py-3">MFI is the primary asset for providing liquidity to our AI-managed pools. Liquidity providers are rewarded with a combination of MFI and our native stablecoin, xUSD, with yields optimized by our real-time AI rebalancing engine.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 pr-4 font-semibold align-top">Decentralized Governance</td>
                <td className="py-3">MFI holders have the power to shape the future of the DeFiMatrix protocol. They can propose and vote on everything from protocol upgrades and new feature integrations to changes in the economic parameters of the system.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold align-top">Cross-Chain Interoperability</td>
                <td className="py-3">MFI is a truly multi-chain asset, able to move frictionlessly across all EVM, Cosmos, and other supported ecosystems via our Cross-Chain Gateway.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Tokenomics: A Sustainable and Intelligent Economic Model</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The tokenomics of MFI are designed to ensure long-term stability, sustainable growth, and the deep integration of intelligence across the ecosystem:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><strong className="text-purple-300">Total Supply:</strong> 1,000,000,000 MFI</li>
          <li><strong className="text-purple-300">Token Type:</strong> Utility and Governance</li>
          <li><strong className="text-purple-300">Blockchain:</strong> Multi-chain (Cosmos SDK + EVM)</li>
          <li><strong className="text-purple-300">Emission Model:</strong> An adaptive, AI-regulated, deflationary mechanism</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">Allocation Model:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>30% Ecosystem Rewards (AI-powered staking, liquidity incentives)</li>
          <li>20% Governance and DAO Treasury</li>
          <li>15% Development and AI Research</li>
          <li>10% Team and Advisors (with a 24-month vesting schedule)</li>
          <li>10% Liquidity and Market Making</li>
          <li>10% Institutional Partnerships and Exchange Listings</li>
          <li>5% Community Airdrops and Early Adopter Rewards</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">AI-Driven Token Dynamics</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Unlike protocols with static tokenomics, MFI's economic model is dynamic and self-adjusting. The Matrix AI Layer continuously monitors network conditions and adjusts key parameters in real time:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Adaptive Emissions</h3>
            <p className="text-gray-300 leading-relaxed">
              The AI modifies reward emissions based on liquidity demand and staking volume to maintain a healthy and balanced incentive structure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Dynamic Staking Rates</h3>
            <p className="text-gray-300 leading-relaxed">
              The system rewards long-term stakers and active governance participants with higher yields.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Deflationary Burn Mechanism</h3>
            <p className="text-gray-300 leading-relaxed">
              The AI triggers token burns during periods of high transaction volume to create deflationary pressure and enhance long-term value.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">AI-Enhanced Governance</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Governance in DeFiMatrix is a collaborative effort between the MFI-holding community and our powerful AI engine. Every governance proposal is first analyzed by AI agents, which provide a detailed assessment of its potential risks, rewards, and impact on the network. This allows the community to make more informed, data-driven decisions.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          MatrixFi (MFI) is the beating heart of the DeFiMatrix ecosystem. It is the fuel for our AI engine, the key to our governance system, and the primary incentive for participation in our intelligent, multi-chain economy. It merges the precision of AI with the transparency and decentralization of the blockchain to create a dynamic financial network that can learn, adapt, and grow.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          As the DeFiMatrix ecosystem expands, MFI will remain its unifying force, driving innovation, empowering the community, and enabling a new generation of intelligent, autonomous financial applications. It is not merely a token; it is the energy source for the future of decentralized finance, embodying our vision of an AI-driven system that is intelligent, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
