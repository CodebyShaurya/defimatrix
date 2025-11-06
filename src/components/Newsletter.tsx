"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-[#1a1f36] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-20 w-20 bg-[#C450D5] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-20 w-20 bg-[#FF00FF] opacity-20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our crypto news weekly newsletter!</h2>
          <p className="mb-8 text-gray-400">
            Stay up to date with the latest developments in blockchain technology, DeFi innovations, and market
            insights.
          </p>

          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C450D5] md:w-96"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-[#C450D5] hover:text-white"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
