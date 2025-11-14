import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Security.png"
            alt="DeFiMatrix Security banner"
            className="w-full h-[450px] md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Security: Intelligence, Integrity & Infrastructure
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At DeFiMatrix, security isn't a feature — it's the foundation. In a decentralized world where billions in assets and data flow across chains, our commitment is clear: protect users, preserve trust, and build resilient AI-powered financial infrastructure that never compromises on safety.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Our security model integrates a multi-layered architecture, AI-based threat detection, on-chain transparency, and industry-grade encryption, ensuring every transaction, every wallet, and every smart contract in the DeFiMatrix ecosystem remains protected. We deliver a non-custodial, intelligent, and self-auditing security framework designed for the future of decentralized finance.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Our Security Philosophy</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Security at DeFiMatrix operates on three guiding principles:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">1. Zero Custody</h3>
            <p className="text-gray-300 leading-relaxed">
              You own your assets. Always. Funds are never stored on centralized servers or controlled by DeFiMatrix.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">2. Transparency by Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Every transaction, audit, and protocol event is visible and verifiable on-chain.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">3. Autonomous Protection</h3>
            <p className="text-gray-300 leading-relaxed">
              AI continuously monitors, detects, and neutralizes risk vectors before they escalate.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Multi-Layered Security Architecture</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The DeFiMatrix Security Framework is structured across six coordinated layers, each operating independently yet communicating seamlessly to form a resilient, AI-supervised defense grid.
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Layer</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Application Layer Security</td>
                <td className="py-3">Multi-factor authentication, end-to-end encryption, and non-custodial wallet integration to secure user interactions.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Smart Contract & On-Chain Security</td>
                <td className="py-3">Audited codebase, formal verification, and real-time monitoring to ensure the integrity of our DeFi logic.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Network & Infrastructure Security</td>
                <td className="py-3">Distributed infrastructure, DDoS protection, and 24/7 AI network sentinels to build resilience.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">AI-Powered Threat Detection</td>
                <td className="py-3">Autonomous AI agents that learn, predict, and respond to threats in real time.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Custody & Asset Protection</td>
                <td className="py-3">Non-custodial by default, with optional multi-party computation (MPC) for institutional clients.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Compliance, Risk & Audit</td>
                <td className="py-3">Upholding global compliance standards while preserving decentralization and user privacy.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Role of AI in Security</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiMatrix pioneers <strong className="text-purple-400">Agentic AI Security</strong>, where intelligent agents continuously learn from patterns and autonomously enhance ecosystem protection.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Sentinel Agent</h3>
            <p className="text-gray-300 leading-relaxed">
              Detects anomalies, phishing, and potential exploits in real-time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Risk Agent</h3>
            <p className="text-gray-300 leading-relaxed">
              Scores pools, contracts, and addresses based on their safety.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Compliance Agent</h3>
            <p className="text-gray-300 leading-relaxed">
              Ensures all activity adheres to regional regulations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Recovery Agent</h3>
            <p className="text-gray-300 leading-relaxed">
              Coordinates secure asset recovery and incident isolation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Learning Agent</h3>
            <p className="text-gray-300 leading-relaxed">
              Updates the AI's defense models using new global threat data.
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-8">
          Through this network, DeFiMatrix achieves <strong className="text-purple-400">autonomous resilience</strong> — security that scales with intelligence, not manpower.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In decentralized finance, trust is not assumed — it's engineered. At DeFiMatrix, every line of code, every transaction, and every AI model is built with one objective: to safeguard your assets and preserve your confidence. By combining blockchain transparency with AI-driven defense, DeFiMatrix delivers an ecosystem that's autonomous, auditable, and virtually attack-proof.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
