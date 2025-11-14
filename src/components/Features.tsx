"use client"

import { Bot, FileText, Rocket, Globe, Wallet, Brain, BarChart3, Shield, Users, Sparkles } from "lucide-react"
import { useState } from "react";
import { useRouter } from "next/navigation";


const features = [
  {
    icon: Bot,
    title: "No-Code Creation Studio",
    description:
      "Visually craft your AI agent with our intuitive drag-and-drop interface, and accelerate your start with a library of proven templates for any use case."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Power & Security",
    description:
      "Leverage elite AI models like GPT-4 and Claude, all within a framework of bank-grade security, end-to-end encryption, and comprehensive audit trails."
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere, Instantly",
    description:
      "Launch your AI agent on any website with a simple embed code. Connect with 100+ platforms like Slack and Discord to engage users wherever they are."
  },
  {
    icon: Bot,
    title: "The Web3 Agent Marketplace",
    description:
      "Go beyond a simple tool. Mint your AI agent as an ownable asset on Solana. Enable crypto payments, trade on the open market, and earn perpetual on-chain royalties."
  },
  {
    icon: Bot,
    title: "Optimize & Evolve",
    description:
      "Monitor your agent’s performance with detailed, real-time analytics to optimize effectiveness. Create upgradeable agents that can learn and improve over time."
  }
];

export default function Features() {

 

  const getImageName = (n: number) => {
    // return the full filename for the feature image
    if (n === 1) return '/sec_two_one1.png'
    if (n === 2) return '/sec_two_two.svg'
    if (n === 3) return '/sec_two_three.png'
    if (n === 4) return '/sec_two_four.svg'
    if (n === 5) return '/sec_two_five.svg'
    // fallback to numeric filename if out of range
    return `/sec_two_${n}.svg`
  }

  return (
    <section id="about" className="relative md:py-6 mt-5  ">
      {/* Background Effects - Same as Hero */}
    
       <div className='f'>
      {/* top-left radial */}
      <div
        aria-hidden
        className="absolute   left-20 top-0 w-[50vw]   h-[100vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(119,102,238,0.5), transparent 40%)',
          filter: 'blur(60px)'
        }}
      />
      {/* bottom-right radial */}
      <div
        aria-hidden
        className="absolute right-28 -bottom-28 w-[50vw]   h-[100vh] rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(119,102,238,0.5), transparent 40%)',
          filter: 'blur(60px)'
        }}
      />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-16">
         
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl mb-6">
            Where Power of AI, Becomes a Creator's Asset
            
          </h2>
          <p className="text-lg text-white/80 leading-8">
            We believe building intelligent agents should be accessible to everyone. SpedaxAI provides the tools for businesses to automate and the platform for creators to own the future.
          </p>
        </div>

        {/* Features Grid */}
        {/* First three features: 3 columns, image as before */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {features.slice(0, 3).map((feature, i) => {
            const index = i // 0-based within slice
            const origIndex = i + 1 // actual feature number
            return (
              <div
                key={origIndex}
                className="group relative px-6 pb-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10"
              >
                {/* Feature Icon (same layout as before) */}
                <div className="inline-flex p-3">
                  <img src={getImageName(origIndex)} alt={`feature-${origIndex}`} />
                </div>

                {/* Feature Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Next two features: 2 columns on desktop, combined single card on mobile */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Mobile: Single combined card */}
          <div className="md:hidden">
            <div className="group relative px-6 pb-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10">
              {/* Mobile Image */}
              <div className="inline-flex p-3">
                <img src="/mobile_last_two.png" alt="Web3 & Analytics" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  Web3 Marketplace & Analytics
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors mb-4">
                  Mint your AI agent as an ownable asset on Solana. Enable crypto payments, trade on the open market, and earn perpetual on-chain royalties.
                </p>
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                  Monitor your agent's performance with detailed, real-time analytics to optimize effectiveness. Create upgradeable agents that can learn and improve over time.
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          </div>

          {/* Desktop: Two separate cards */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {features.slice(3, 5).map((feature, i) => {
              const origIndex = i + 4
              return (
                <div
                  key={origIndex}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                  {/* Image on the left for col-2 layout */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:float-left md:mr-4 md:w-70">
                    <img src={getImageName(origIndex)} alt={`feature-${origIndex}`} className="w-full" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="relative p-8 my-24 rounded-2xl bg-gradient-to-br from-[#6a69e0]/10 via-[#3A397A]/10 to-[#6a69e0]/10 backdrop-blur-xl border border-[#6a69e0]/20 text-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-40" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start building?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of developers and businesses who are already using SpedaxAI to create amazing AI experiences.
            </p>
            <div className="relative inline-block">
              <button
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#6a69e0] via-[#3A397A] to-[#6a69e0] text-white font-semibold hover:from-[#5a59d0] hover:via-[#2A296A] hover:to-[#5a59d0] hover:scale-105 transition-all"
            onClick={() => router.push('/dashboard')}
              >
                   
                <>
                  Get Started Now
                  <Rocket className="ml-2 h-4 w-4" />
                </>
              </button>
          
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}