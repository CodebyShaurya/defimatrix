import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function MintPowerPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Mint Power (DMX).png"
            alt="Mint Power banner"
            className="w-full sm:h-[450px] md:object-cover object-fit h-[35vh] rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          Mint Power (DMX): The Foundational Utility Token of the DeFiMatrix Chain
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Every decentralized network requires a foundational asset to ensure its security, power its operations, and align the incentives of its participants. For the DeFiMatrix Chain, this asset is Mint Power (DMX). DMX is the native utility and staking token of our intelligent, high-performance Layer-1 blockchain, serving as the bedrock of our entire ecosystem.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          While MFI (MatrixFi) governs the protocol and xUSD provides a stable medium of exchange, DMX is the raw energy that powers the DeFiMatrix network. It is used for staking to secure the chain, paying for transaction fees (gas), and fueling the complex computations of our Matrix AI Layer.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Role of DMX in the DeFiMatrix Ecosystem</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DMX is a pure utility token, meticulously designed to perform three critical functions:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">1. Securing the Network through Staking</h3>
            <p className="text-gray-300 leading-relaxed">
              The DeFiMatrix Chain is a Proof-of-Stake network built on an AI-enhanced version of the Tendermint consensus engine. To participate in consensus and secure the chain, validators must stake DMX. In return for their service, they receive a share of the network's transaction fees and staking rewards, paid in DMX.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">2. Powering Transactions</h3>
            <p className="text-gray-300 leading-relaxed">
              Every transaction on the DeFiMatrix Chain—from a simple token transfer to the execution of a complex, multi-chain strategy by an AI agent—requires a fee, paid in DMX. This gas fee compensates validators for their computational resources and prevents spam on the network.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">3. Fueling AI Computations</h3>
            <p className="text-gray-300 leading-relaxed">
              The groundbreaking Matrix AI Layer that sits at the heart of our ecosystem requires significant computational power. DMX is used to pay for these computations, creating a direct link between the utility of the token and the intelligence of the network.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Tokenomics and Supply Dynamics</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The tokenomics of DMX are engineered for long-term sustainability and security:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><strong className="text-purple-300">Total Supply:</strong> The initial maximum supply of DMX is 4 billion tokens.</li>
          <li><strong className="text-purple-300">Emission Model:</strong> DMX has a carefully controlled emission schedule, with new tokens being created to reward stakers and validators. The rate of emission is dynamically adjusted by our AI models to balance network security with token scarcity.</li>
          <li><strong className="text-purple-300">Relationship with eDMX:</strong> A portion of the DMX supply is represented on EVM-compatible chains as eDMX, a liquid, tradable derivative. This allows the utility of DMX to be accessed and integrated into the broader DeFi ecosystem, while maintaining a clear distinction between the core utility token (DMX) and its liquid counterpart (eDMX).</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The DMX Flywheel: A Self-Reinforcing Cycle of Value</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The utility of DMX creates a powerful, self-reinforcing cycle of value, often referred to as a "flywheel":
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">1. Increased Network Activity</h3>
            <p className="text-gray-300 leading-relaxed">
              As more users, dApps, and AI agents utilize the DeFiMatrix Chain, the demand for DMX for gas fees and AI computations increases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">2. Higher Staking Rewards</h3>
            <p className="text-gray-300 leading-relaxed">
              This increased demand translates into higher real yields for DMX stakers, as they receive a share of the growing transaction fees.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">3. Enhanced Network Security</h3>
            <p className="text-gray-300 leading-relaxed">
              Higher staking rewards incentivize more users to stake their DMX, which in turn increases the economic security of the network, making it more resistant to attack.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">4. Greater Attractiveness of the Platform</h3>
            <p className="text-gray-300 leading-relaxed">
              A more secure and vibrant network attracts even more users and developers, further increasing network activity and restarting the cycle.
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-8">
          This flywheel effect is designed to create a sustainable, long-term correlation between the growth of the DeFiMatrix ecosystem and the value of its foundational utility token, DMX.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Mint Power (DMX) is the fundamental building block of the DeFiMatrix economy. It is the asset that secures the network, powers its operations, and aligns the incentives of all its participants. Its carefully designed tokenomics and deep integration with the core functions of the DeFiMatrix Chain create a powerful and sustainable economic engine.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          By providing a clear and essential utility, DMX serves as the stable foundation upon which our entire intelligent, multi-chain ecosystem is built. It is a testament to our commitment to creating a financial system that is not only innovative and powerful but also secure, sustainable, and built for the long term. DMX embodies our vision of an AI-driven financial system that is intelligent, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
