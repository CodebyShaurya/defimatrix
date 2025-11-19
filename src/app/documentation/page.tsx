import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/ui/home-footer";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Documentation.png"
            alt="DeFiMatrix Documentation banner"
            className="w-full sm:h-[450px] md:object-cover object-fit h-[35vh] rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Documentation
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Explore the full DeFiMatrix App ecosystem — guides, APIs, and developer documentation await!
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Getting Started</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Welcome to the DeFiMatrix documentation portal. Here you'll find comprehensive guides, API references, and technical specifications for integrating with and building on the DeFiMatrix platform.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">User Guides</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Step-by-step tutorials for using DeFiMatrix features, from connecting your wallet to executing complex multi-chain strategies.
            </p>
            <a href="https://defimatrix-new-docs.vercel.app/docs/Introduction/introduction" className="text-purple-400 hover:text-purple-300 font-semibold">
              View Guides →
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">API Reference</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Complete API documentation for developers looking to integrate DeFiMatrix functionality into their applications.
            </p>
            <a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300 font-semibold">
              View API Docs →
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Smart Contracts</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Technical specifications, addresses, and ABIs for all DeFiMatrix smart contracts across supported chains.
            </p>
            <a href="https://defimatrix-new-docs.vercel.app/docs/Introduction/introduction" className="text-purple-400 hover:text-purple-300 font-semibold">
              View Contracts →
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">SDK & Tools</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Download SDKs, code examples, and development tools to accelerate your integration with DeFiMatrix.
            </p>
            <a href="https://defimatrix-new-docs.vercel.app/docs/Introduction/introduction" className="text-purple-400 hover:text-purple-300 font-semibold">
              View Tools →
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Quick Links</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">DeFiGPT Integration Guide</a></li>
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">Cross-Chain Bridge Protocol</a></li>
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">Liquidity Pool Creation</a></li>
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">Strategy Automation Framework</a></li>
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">Security Best Practices</a></li>
          <li><a href="https://defimatrix-new-docs.vercel.app/docs/Integration/integration_api" className="text-purple-400 hover:text-purple-300">Gas Optimization Techniques</a></li>
        </ul>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-8 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Need Help?</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Join our developer community on Discord or reach out to our support team for assistance with your integration.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://x.com/DeFiMatrixOS" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-pink-600 hover:to-purple-700">
              Join X
            </a>
            <a href="mailto:support@defimatrix.io" className="rounded-full bg-purple-900/50 px-6 py-3 text-sm font-semibold text-white ring-1 ring-purple-500/30 hover:bg-purple-800/50">
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
