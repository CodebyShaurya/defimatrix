"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";

const BrandGuidePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    initial: { opacity: 0.1 },
    animate: {
      opacity: [0.1, 0.3, 0.1],
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: (i: number) => i * 0.1,
      },
    },
  };

  return (
    <>
      <div className="w-full pt-4">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black pt-20 text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#FF00FF]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative mb-24 text-center">
            {/* Floating Grid Background */}
            <div className="absolute inset-0 -z-10">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-20">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-8 rounded-full bg-[#C450D5]/20"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#C450D5]/20 to-[#C450D5]/5 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#C450D5] to-[#FF00FF]/80 bg-clip-text text-transparent">
                Brand Guidelines v1.0
              </span>
            </motion.div>
            <motion.h1
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DeFiMatrix.io
              <br />
              <span className="text-4xl md:text-5xl">Brand Guide</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The World&apos;s Largest and Most Revolutionary
              <span className="bg-gradient-to-r from-[#FF00FF] to-[#FF69B4] bg-clip-text font-semibold text-transparent">
                {" "}
                AI-Powered DeFi Platform
              </span>
            </motion.p>
          </div>

          {/* About Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              {/* About Content */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1A1F2F] to-black p-8 shadow-2xl">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C450D5]/20 blur-[50px]" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="mb-6 text-3xl font-bold">About DeFiMatrix.io</h2>
                  <p className="mb-6 text-gray-400">
                    DeFiMatrix.io is a groundbreaking AI-powered DeFi platform redefining the future of finance. Built
                    on a decentralized, composable infrastructure, our platform unifies lending, borrowing, staking, and
                    trading across chains.
                  </p>
                  <p className="text-gray-400">
                    By fusing blockchain interoperability with advanced AI agents, we empower users with real-time
                    optimization, automation, and insights—unlocking financial autonomy for all.
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "AI-Powered", icon: "🤖" },
                  { title: "Cross-Chain", icon: "⛓️" },
                  { title: "Secure", icon: "🔒" },
                  { title: "Automated", icon: "⚡" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-xl bg-[#1A1F2F]/90 p-6 transition-all duration-300 hover:bg-[#1A1F2F]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[20px] transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="mb-3 block text-3xl">{feature.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C450D5]/10 via-[#FF00FF]/5 to-transparent p-8 backdrop-blur-sm">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#C450D5]/20 blur-[50px]" />
              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[#FF00FF]/10 blur-[80px]" />

              <div className="relative grid gap-8 md:grid-cols-2">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
                    <p className="text-xl text-gray-400">
                      To democratize access to decentralized finance through
                      <span className="bg-gradient-to-r from-[#FF00FF] to-[#FF69B4] bg-clip-text font-semibold text-transparent">
                        {" "}
                        AI-powered, intent-driven solutions
                      </span>
                      —bridging traditional finance and blockchain technology with accessibility, security, and
                      intelligence at the core.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "100K+", label: "Active Users" },
                    { number: "$500M+", label: "Total Value Locked" },
                    { number: "15+", label: "Supported Chains" },
                    { number: "24/7", label: "AI Optimization" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="group flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm hover:bg-[#FF00FF]/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="bg-gradient-to-r from-[#FF00FF] to-[#FF69B4] bg-clip-text text-2xl font-bold text-transparent">
                        {stat.number}
                      </span>
                      <span className="mt-1 text-sm text-gray-400">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Brand Identity Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1A1F2F] via-[#FF00FF]/5 to-black p-8">
              <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#FF00FF]/10 blur-[100px]" />
              <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#FF69B4]/20 blur-[80px]" />

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 text-3xl font-bold">Brand Identity</h2>
                  <p className="mb-12 text-xl text-gray-400">
                    DeFiMatrix is bold, futuristic, and trustworthy. Our brand is rooted in cutting-edge technology,
                    simplicity in user experience, and a strong sense of financial empowerment.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Core Values */}
                  <motion.div
                    className="col-span-2 space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold">Core Values</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          title: "Innovation",
                          description: "Pushing boundaries in DeFi with AI integration",
                          icon: "💡",
                        },
                        {
                          title: "Security",
                          description: "Uncompromising focus on user asset protection",
                          icon: "🔒",
                        },
                        {
                          title: "Accessibility",
                          description: "Making DeFi simple and intuitive for everyone",
                          icon: "🌐",
                        },
                        {
                          title: "Transparency",
                          description: "Open and clear in all operations",
                          icon: "👁️",
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={value.title}
                          className="group relative overflow-hidden rounded-xl bg-[#1A1F2F]/50 p-6 transition-all duration-300 hover:bg-[#1A1F2F]"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FF00FF]/10 opacity-0 blur-[20px] transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="mb-3 block text-2xl">{value.icon}</span>
                          <h4 className="mb-2 font-semibold text-white">{value.title}</h4>
                          <p className="text-sm text-gray-400">{value.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Brand Keywords */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold">Brand Keywords</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "AI-Driven",
                        "Decentralized",
                        "Interoperable",
                        "Secure",
                        "Transparent",
                        "User-Centric",
                        "Innovative",
                        "Reliable",
                      ].map((keyword, index) => (
                        <motion.span
                          key={keyword}
                          className="rounded-full bg-[#FF00FF]/10 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-[#FF00FF]/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {keyword}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Logo System Section */}
          <motion.section
            className="mb-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-3xl font-bold">Logo System</h2>
            <div className="space-y-24">
              {/* Logo variants remain the same but with enhanced styling */}
              {[
                {
                  title: "A Dynamic Logo",
                  description:
                    "Representing the fluidity and adaptability of the platform, our dynamic logo symbolizes the seamless integration of AI and blockchain technology.",
                  bgColor: "bg-[#1A1F2F]",
                },
                {
                  title: "A Futuristic Logo",
                  description:
                    "Highlighting our cutting-edge AI and blockchain integration, the futuristic design elements represent our forward-thinking approach to decentralized finance.",
                  bgColor: "bg-white",
                },
                {
                  title: "A Minimalistic Logo",
                  description:
                    "Ensuring simplicity and clarity for universal appeal, our minimalistic version maintains brand recognition while being versatile across all platforms.",
                  bgColor: "bg-[#1A1F2F]",
                },
              ].map((logo, index) => (
                <motion.div key={logo.title} className="group grid gap-8 md:grid-cols-2" variants={fadeIn}>
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#FF00FF]/20 blur-[30px] transition-all duration-300 group-hover:bg-[#FF00FF]/30" />
                    <h3 className="mb-4 text-2xl font-bold">{logo.title}</h3>
                    <p className="text-gray-400">{logo.description}</p>
                  </div>
                  <div
                    className={`${logo.bgColor} overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    <Image
                      src="/defimatrix-logo.svg"
                      alt={`DeFiMatrix ${logo.title}`}
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Style Guide Section */}
          <motion.section
            className="mb-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-3xl font-bold">Style Guide</h2>

            {/* Typography */}
            <motion.div className="mb-16" variants={fadeIn}>
              <h3 className="mb-8 text-2xl font-bold">Typography</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Headlines",
                    font: "Poppins Bold",
                    desc: "Clean, modern, technical",
                    className: "font-display",
                  },
                  { title: "Body Text", font: "Inter Regular", desc: "Professional, readable", className: "font-body" },
                  {
                    title: "Callouts",
                    font: "Space Grotesk",
                    desc: "Adds futuristic flair",
                    className: "font-grotesk",
                  },
                ].map((type) => (
                  <div
                    key={type.title}
                    className="group overflow-hidden rounded-2xl bg-[#1A1F2F] p-8 transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative">
                      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FF00FF]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                      <h4 className={`${type.className} mb-4 text-xl`}>{type.title}</h4>
                      <p className="font-bold">{type.font}</p>
                      <p className="text-gray-400">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Color Palette */}
            <motion.div className="mb-16" variants={fadeIn}>
              <h3 className="mb-8 text-2xl font-bold">Color Palette</h3>
              <div className="grid gap-6 md:grid-cols-4">
                {[
                  { name: "Primary Magenta", color: "#FF00FF", bg: "bg-[#FF00FF]" },
                  { name: "Secondary Pink", color: "#FF69B4", bg: "bg-[#FF69B4]" },
                  { name: "Background Dark", color: "#0A0F1F", bg: "bg-black" },
                  { name: "Card Background", color: "#1A1F2F", bg: "bg-[#1A1F2F]" },
                ].map((color) => (
                  <motion.div
                    key={color.name}
                    className="group overflow-hidden rounded-2xl bg-[#1A1F2F] p-6 transition-transform duration-300 hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`mb-4 h-24 rounded-lg ${color.bg} ${color.name === "Card Background" ? "border border-gray-700" : ""}`}
                    />
                    <p className="font-bold">{color.name}</p>
                    <p className="text-gray-400">{color.color}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Imagery & Graphics */}
            <motion.div className="rounded-2xl bg-[#1A1F2F] p-8" variants={fadeIn}>
              <h3 className="mb-6 text-2xl font-bold">Imagery & Graphics</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="text-[#FF00FF]">•</span>
                  <span>AI systems & blockchain-inspired 3D renders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FF00FF]">•</span>
                  <span>Simplified flowcharts and agent visuals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#FF00FF]">•</span>
                  <span>Use of gradients and glowing effects sparingly</span>
                </li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Results Section */}
          <motion.section
            className="mb-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold">Results</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { stat: "+300%", desc: "Community growth post-brand launch" },
                { stat: "10+", desc: "Layer 1 & Layer 2 network integrations" },
                { stat: "#1", desc: "Leading AI-powered DeFi co-pilot" },
                { stat: "🏆", desc: "Top DeFi publications coverage" },
              ].map((item) => (
                <motion.div
                  key={item.stat}
                  className="group overflow-hidden rounded-2xl bg-[#1A1F2F] p-8 transition-transform duration-300 hover:scale-[1.02]"
                  variants={fadeIn}
                >
                  <div className="relative">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FF00FF]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="mb-4 text-4xl font-bold text-[#FF00FF]">{item.stat}</p>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Testimonials */}
          <motion.section
            className="mb-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold">Team Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "Working with DeFiMatrix has been an inspiring journey—transforming bold ideas into intuitive design. We push the limits of what&apos;s possible in DeFi.",
                  name: "Vivek Kumar",
                  role: "Product Designer",
                },
                {
                  quote:
                    "As Head of Product, I ensure every feature aligns with the evolving needs of Web3 users. DeFiMatrix is not just another DeFi app—it&apos;s an ecosystem shaping how people interact with digital assets.",
                  name: "Olivia Smith",
                  role: "Head of Product",
                },
              ].map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  className="group overflow-hidden rounded-2xl bg-[#1A1F2F] p-8 transition-transform duration-300 hover:scale-[1.02]"
                  variants={fadeIn}
                >
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#FF00FF]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="mb-6 text-gray-400">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidePage;
