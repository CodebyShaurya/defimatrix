"use client";

import { motion } from "framer-motion";
import { Mail, Share2, BarChart3, Gift } from "lucide-react";

export const AffiliateHowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Join our affiliate program and receive your personal referral link.",
      icon: Mail,
    },
    {
      number: 2,
      title: "Share",
      description: "Promote DeFiMatrix to your network via social, email, blogs, and more",
      icon: Share2,
    },
    {
      number: 3,
      title: "Track Performance",
      description: "Monitor real-time clicks, signups, and conversions via your dashboard",
      icon: BarChart3,
    },
    {
      number: 4,
      title: "Earn Rewards",
      description: "Earn 10% commission on every successful referral.",
      icon: Gift,
    },
  ];

  return (
    <motion.section
      className="mb-24 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-12 text-center text-3xl font-bold text-white">How It Works</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative rounded-2xl border border-white/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#C450D5] text-sm font-bold text-white">
              {step.number}
            </div>

            <div className="mb-6 mt-4 flex justify-start">
              <step.icon className="h-12 w-12 rounded-md bg-white/5 p-2 text-[#C450D5]" />
            </div>

            <h3 className="mb-2 text-left text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-left text-sm text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
