import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function UnstakePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Unstake.png"
            alt="DeFiGPT banner"
            className="w-full sm:h-[450px] md:object-cover object-fit h-[35vh] rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Unstake: Intelligent Capital Redeployment
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In the dynamic world of decentralized finance, agility is as crucial as control. At DeFiMatrix, we empower you not only to deploy capital intelligently but also to exit positions smoothly, efficiently, and securely. Our Unstake function is a critical component of the DeFiMatrix ecosystem, allowing you to unwind, move, or redeploy capital with the same intent-driven precision as your initial deployment.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why Unstaking Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Staking is the entry point into your strategy, but at some point, you may need to rebalance your portfolio, redirect capital, realize rewards, or simply regain flexibility. Unstaking is your pathway to achieving these goals, and it must be designed to reduce friction, minimize risk, and maintain transparency. Unlike most DeFi platforms that treat unstaking as a manual, often lengthy process, DeFiMatrix brings AI-powered orchestration, multi-chain awareness, and a non-custodial architecture to ensure your exit is as intelligent as your entry.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How DeFiMatrix's Unstake Module Works</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The process of unstaking within DeFiMatrix is a testament to our commitment to intelligent automation:
        </p>
        
        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
          <li><strong>Connect & Select:</strong> Connect your wallet to the DeFiMatrix dashboard and select the staked asset you wish to withdraw. You can also articulate your goal in plain language, such as, "Unstake 5,000 USDC from Arbitrum and redeploy into a stable-yield on Base."</li>
          <li><strong>Intent-Driven Assessment:</strong> Our AI parses your goal and analyzes the current conditions, including any unbonding periods, outstanding rewards, and cross-chain requirements.</li>
          <li><strong>Pre-Execution Summary:</strong> Before you confirm, you receive a full overview of the unstaking process, including the unlock timeframe, net amount expected, and a comprehensive risk score.</li>
          <li><strong>Execution & Smart Contract Logic:</strong> Upon confirmation, the smart-contract execution begins. For complex flows, the system intelligently bundles the steps into a single multi-call transaction or orchestrates the sequence automatically.</li>
          <li><strong>Monitoring & Finalization:</strong> You can track the progress of your assets in your dashboard, from initiation to final settlement. All performance metrics are logged and available for review.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Key Advantages of Unstaking with DeFiMatrix</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Full Flexibility & Control:</strong> Exit positions when you choose, subject to protocol-specific rules, and switch assets or chains seamlessly.</li>
          <li><strong>AI-Optimized Timing:</strong> Our AI continuously monitors gas conditions, liquidity levels, and network health to recommend or execute the optimal moment to unstake.</li>
          <li><strong>Multi-Chain Awareness:</strong> The system understands the cross-chain implications of your unstaking decisions and incorporates them into the execution flow.</li>
          <li><strong>Non-Custodial Architecture:</strong> You retain custody of your assets at all times. DeFiMatrix serves as a protocol interface, not a custodial intermediary.</li>
          <li><strong>Transparent Audit Trail:</strong> Every transaction is logged and visible on-chain, providing a complete and verifiable record of your unstaking activity.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Unstaking is more than just "taking my funds back" — it's an integral part of a strategic DeFi lifecycle: deploy, earn, exit, redeploy. At DeFiMatrix, we treat the exit as intelligently as the entry. With AI-powered routing, multi-chain orchestration, transparent timing, and non-custodial security, your asset movement is fluid, intentional, and smart.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
