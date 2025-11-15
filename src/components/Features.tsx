

import { Bot, FileText, Rocket, Globe, Wallet, Brain, BarChart3, Shield, Users, Sparkles } from "lucide-react"



const features = [
  {
    icon: Bot,
    title: "Tap & Pay",
    description:
      "Add your card to Apple Pay or Google Pay and tap to pay effortlessly."
  },
  {
    icon: Shield,
    title: "Spend Your Crypto, Not Sell It",
    description:
      "Pay directly with your digital assets—no selling, no lost gains."
  },
  {
    icon: Rocket,
    title: "Use It Worldwide",
    description:
      "Accepted at 150+ million merchants across the globe."
  },
  {
    icon: Bot,
    title: "No Hidden Charges",
    description:
      "Enjoy transparent fees and best-in-class conversion rates with every transaction."
  },
  {
    icon: Bot,
    title: "Multi-Chain Support",
    description:
      "Spend crypto from any supported blockchain instantly."
  }
];

export default function Features() {

 

  const getImageName = (n: number) => {
    // return the full filename for the feature image
    if (n === 1) return '/sec_two_one.png'
    if (n === 2) return '/sec_two_two.png'
    if (n === 3) return '/sec_two_thre.png'
    if (n === 4) return '/sec_two_four.png'
    if (n === 5) return '/sec_two_five.png'
    // fallback to numeric filename if out of range
    return `/sec_two_${n}.svg`
  }

  return (
    <section id="about" className="relative md:py-6 mt-5  ">
      {/* Background Effects - Same as Hero */}
    

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Features Grid */}
         <div className="max-w-6xl mx-auto mb-16">
          {/* Mobile: Single combined card */}
         

          {/* Desktop: Two separate cards */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {features.slice(3, 5).map((feature, i) => {
              const origIndex = i + 4
              return (
                <div
                  key={origIndex}
                  className="group relative pt-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                 

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors px-6">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors px-6">
                      {feature.description}
                    </p>
                  </div>

                   {/* Image on the left for col-2 layout */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:float-left  md:w-70">
                    <img src={getImageName(origIndex)} alt={`feature-${origIndex}`} className="w-full object-fit" />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
              )
            })}
          </div>
        </div>
        {/* First three features: 3 columns, image as before */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {features.slice(0, 3).map((feature, i) => {
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
       

    
      </div>
    </section>
  )
}