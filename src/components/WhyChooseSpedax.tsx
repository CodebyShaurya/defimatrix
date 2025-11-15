"use client"

import { useState } from 'react'
import { Check, X, Zap, Brain, Globe, Shield, Clock, DollarSign } from 'lucide-react'

interface Feature {
  icon: string
  title: string
}

const features: Feature[] = [
  {
    icon: "/whyIcons/1.png",
    title: "Crypto Rewards"
  },
  {
    icon: "/whyIcons/2.png",
    title: "Global Availability"
  },
  {
    icon: "/whyIcons/3.png",
    title: "Fees"
  },
  {
    icon: "/whyIcons/4.png",
    title: "Flexibility"
  },
  {
    icon: "/whyIcons/5.png",
    title: "Reward Options"
  }
]

interface ComparisonRow {
  feature: string
  spedaxai: string
  other: string
}

const comparisonData: ComparisonRow[] = [
  { feature: "Crypto Rewards", spedaxai: "Up to 2%", other: "Up to 1% or none" },
  { feature: "Global Availability", spedaxai: "150+ countries", other: "Limited acceptance" },
  { feature: "Fees", spedaxai: "$0 annual fees", other: "$150-$300 annually" },
  { feature: "Flexibility", spedaxai: "Works like cash, no conversion", other: "Fixed reward options" },
  { feature: "Reward Options", spedaxai: "Crypto of your choice", other: "Limited usability" }
]

export default function WhyChooseSpedax() {
  return (
    <section id="features" className="py-16 sm:py-24 relative">
     

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl mb-6">
            Why Choose the <span className='text-[#C450D5] transition-colors hover:text-purple-300'>DeFiMatrix Card ?</span> 
          </h2>
        </div>

        {/* Comparison Layout - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mt-12">
          {/* Features Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">Features</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 py-4">
                <div className="w-6 h-6 flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <span className="text-white text-lg">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* SpedaxAI Column */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-8 -my-8">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">DeFiMatrix Cards</h3>
            <div className="space-y-6">
              {comparisonData.map((row, index) => (
                <div key={index} className="py-4 text-center">
                  <p className="text-white text-lg">{row.spedaxai}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">Other</h3>
            {comparisonData.map((row, index) => (
              <div key={index} className="py-4 text-center">
                <p className="text-white/60 text-lg">{row.other}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Layout - Mobile */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-6">
          {comparisonData.map((row, index) => (
            <div key={index} className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              {/* Feature with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex-shrink-0">
                  <img src={features[index].icon} alt={features[index].title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-white">{features[index].title}</h3>
              </div>
              
              {/* Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-white/60 mb-2">DeFiMatrix Cards</p>
                  <p className="text-white font-medium">{row.spedaxai}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Other</p>
                  <p className="text-white/60">{row.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
