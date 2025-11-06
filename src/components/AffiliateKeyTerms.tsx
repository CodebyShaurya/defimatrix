"use client";

import { motion } from "framer-motion";
import { Percent, Clock, Zap, Banknote, BarChart2, HeadphonesIcon } from "lucide-react";
import Image from "next/image";

export const AffiliateKeyTerms: React.FC = () => {
  const benefits = [
    {
      title: "Fixed Commission Rate",
      description: "Earn 10% on all successful referrals",
      icon: Percent,
    },
    {
      title: "6-Month Referral Period",
      description: "Earn from purchases made within 6 months",
      icon: Clock,
    },
    {
      title: "Instant Approval",
      description: "Start promoting immediately after approval",
      icon: Zap,
    },
    {
      title: "PayPal Payments",
      description: "Reliable monthly payouts via PayPal",
      icon: Banknote,
    },
    {
      title: "Detailed Analytics",
      description: "Real-time dashboard with performance metrics",
      icon: BarChart2,
    },
    {
      title: "Dedicated Support",
      description: "Our team is here to help at every step",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-12 text-center text-3xl font-bold text-white">Why Join Our Program?</h2>
      <div className="w-full rounded-[32px] hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)]">
        <Image
          src="/why-bg.png"
          alt="Why Join Our Program?"
          width={1920}
          height={512}
          className="absolute mx-auto hidden w-full items-center overflow-hidden sm:block"
        />
        <div className="relative bg-black/5 p-4 sm:p-8 sm:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex flex-col items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/5 text-[#C450D5]">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-black/50 p-4 transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)] sm:py-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-6 text-center text-lg font-medium text-white">Key Terms</h3>

              <div className="mb-12 text-center">
                <div className="text-8xl font-bold text-[#C450D5]">10%</div>
                <div className="mt-2 text-white">Commission Rate</div>
                <div className="text-xs text-gray-400">(fixed for all affiliates)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-medium text-white">6 Months</div>
                  <div className="text-xs text-gray-400">Referral Duration</div>
                </div>
                <div>
                  <div className="font-medium text-white">$100</div>
                  <div className="text-xs text-gray-400">Minimum Payout</div>
                </div>
                <div>
                  <div className="font-medium text-white">PayPal</div>
                  <div className="text-xs text-gray-400">Payout Method</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
