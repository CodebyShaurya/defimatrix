import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function DeFiGPTPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />

      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        {/* Banner (below navbar, above heading) */}
        <div className="w-full mb-8">
          <img
            src="/Banners/DEFIGPT.png"
            alt="DeFiGPT banner"
            className="w-full h-[450px] md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiGPT: The Agentic AI Core of Decentralized Finance
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Welcome to DeFiGPT — the sentient engine powering the DeFiMatrix ecosystem. DeFiGPT is not merely a conversational tool; it is a sophisticated, intent-driven AI designed to comprehend, strategize, and execute complex financial directives across the decentralized web. It empowers you to interact with decentralized finance (DeFi) with the same ease as natural language, transforming your objectives into fully autonomous, on-chain strategies. Whether your goal is to stake, swap, bridge, or orchestrate intricate cross-chain maneuvers, DeFiGPT translates human intent into machine intelligence.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">What Is DeFiGPT?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          DeFiGPT is the Agentic AI layer of DeFiMatrix, an advanced large-language model (LLM) system meticulously fine-tuned for the complexities of decentralized finance. Forged through reinforcement learning on a massive corpus of blockchain data, transaction graphs, and protocol metadata, it functions as your autonomous DeFi co-pilot. It orchestrates a network of specialized AI agents to execute multifaceted financial tasks on your behalf, with precision and security.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          Imagine articulating a complex financial goal such as:
        </p>
        
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 mb-8">
          "Bridge 1,000 USDC from Arbitrum to Base, swap it for ETH, and stake the proceeds in the highest-yielding vault available."
        </blockquote>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          DeFiGPT parses this intent, formulates a sequential execution plan, calculates all associated fees and gas costs, rigorously evaluates potential risks, and executes the entire workflow — autonomously, transparently, and securely.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Core Capabilities</h2>
        
        <h3 className="text-2xl font-semibold mb-3 text-purple-300">1. Natural-Language Command Execution</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiGPT obviates the need for manual navigation through convoluted dashboards. It interprets plain-English commands and translates them into a series of actionable smart-contract calls. Supported intents include, but are not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Swapping, bridging, staking, or unstaking digital assets.</li>
          <li>Deploying liquidity to pools or automated vaults.</li>
          <li>Creating, modifying, or canceling limit orders.</li>
          <li>Initiating and managing sophisticated AI-driven strategies.</li>
          <li>Analyzing portfolio performance, risk exposure, and gas expenditures.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          For instance, a user could command: <span className="text-purple-400 italic">"Display the top-performing USDC yield pools on Arbitrum for the current week."</span> DeFiGPT instantly generates and executes the workflows required to fulfill your request.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">2. Multi-Agent Collaboration</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiGPT operates not as a monolithic AI, but as a coordinated network of specialized agents, each possessing a distinct domain of expertise:
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Agent</th>
                <th className="pb-3 text-purple-400 font-semibold">Function</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Scout Agent</td>
                <td className="py-3">Identifies opportunities across DEXs, blockchains, and protocols.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Planner Agent</td>
                <td className="py-3">Constructs step-by-step execution plans based on user-defined goals.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Execution Agent</td>
                <td className="py-3">Interacts with on-chain smart contracts to perform transactions.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Risk Agent</td>
                <td className="py-3">Evaluates security, slippage, and liquidity risks prior to execution.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Analytics Agent</td>
                <td className="py-3">Tracks performance, yield, and gas optimization metrics.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          This collective of agents forms an autonomous solver network, enabling DeFiGPT to function as a comprehensive financial operations department within your wallet.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">3. Cross-Chain Intelligence</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiGPT possesses a native understanding of the entire multi-chain topology of the DeFiMatrix ecosystem. It communicates seamlessly with over 80 blockchains, including Ethereum, Arbitrum, Base, BNB Smart Chain, Optimism, Avalanche, Polygon, and zkSync. The AI automatically:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Identifies the most cost-efficient routes for swaps and bridges.</li>
          <li>Monitors chain congestion and anticipates gas price fluctuations.</li>
          <li>Balances asset exposure across multiple networks to optimize yield and mitigate risk.</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-8">
          With DeFiGPT, cross-chain DeFi no longer necessitates a dozen disparate applications — only a single, intelligent interface.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">4. Conversational Strategy Building</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiGPT empowers you to construct complex financial strategies through natural conversation:
        </p>
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 mb-6">
          "Formulate a low-risk stablecoin strategy distributed across three different blockchains."
        </blockquote>
        <p className="text-gray-300 leading-relaxed mb-8">
          Behind the scenes, DeFiGPT orchestrates the appropriate DeFiMatrix modules — Swap & Bridge, Pools, Limit Orders, Liquidity Positions, and Strategy — and deploys them as an integrated, goal-oriented plan. You can review the proposed plan in a dashboard preview before granting approval, ensuring complete transparency and control.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">5. Continuous Learning and Adaptation</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiGPT is a dynamic system that learns from on-chain outcomes and your individual usage patterns. It continuously refines its operational logic by:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Improving routing algorithms based on historical slippage data.</li>
          <li>Adjusting yield preferences in accordance with your past decisions.</li>
          <li>Fine-tuning execution timing by analyzing gas prices and network conditions.</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-8">
          Each interaction enhances DeFiGPT's intelligence, speed, and alignment with your personal financial objectives.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How DeFiGPT Works</h2>
        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
          <li><strong>Intent Capture:</strong> You articulate a request in plain language via the chat interface or directly from within the modules at app.defimatrix.io.</li>
          <li><strong>Semantic Understanding:</strong> The model parses your intent and identifies the relevant DeFi actions required, such as swapping, staking, or bridging.</li>
          <li><strong>Context and Validation:</strong> The AI retrieves on-chain data and your portfolio context to verify the feasibility of the request. For example, it checks for sufficient balances and available liquidity.</li>
          <li><strong>Planning and Simulation:</strong> The Planner Agent constructs a multi-step execution plan. The Risk Agent then simulates the expected yield, costs, and gas fees.</li>
          <li><strong>Execution:</strong> Upon your approval, DeFiGPT dispatches the Execution Agent to perform the actions across the necessary smart contracts, all while maintaining non-custodial security.</li>
          <li><strong>Feedback and Analytics:</strong> After execution, DeFiGPT generates a comprehensive summary, including transaction hashes, gas expenditures, resulting positions, and the impact on your Annual Percentage Yield (APY).</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Security and Transparency</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          AI-driven automation does not necessitate a compromise in control. DeFiGPT is a fully non-custodial and on-chain auditable system.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Smart-Contract Governance:</strong> All actions are executed through verified and audited smart contracts.</li>
          <li><strong>No Private-Key Access:</strong> The AI operates solely with your approved wallet permissions, never accessing your private keys.</li>
          <li><strong>On-Chain Logs:</strong> Every action initiated by DeFiGPT creates a verifiable and immutable record on the blockchain.</li>
          <li><strong>Risk Validation:</strong> Each transaction is rigorously scored by the Risk Agent before execution.</li>
          <li><strong>Emergency Controls:</strong> You retain the ability to pause, cancel, or override any AI-initiated transaction at any time.</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-8">
          This architecture ensures AI autonomy is always subject to human oversight, providing a level of transparency you can trust.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The proliferation of DeFi protocols has created a powerful but fragmented financial landscape. Users are often required to navigate dozens of applications, comprehend complex tokenomics, and monitor multiple wallets across various chains. This complexity represents a significant barrier to mass adoption.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          DeFiGPT addresses this fragmentation by introducing a unified, conversational AI interface that seamlessly integrates every layer of the DeFiMatrix ecosystem. Instead of needing to understand the intricacies of each protocol, you simply express your desired outcome. DeFiGPT handles the rest.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
