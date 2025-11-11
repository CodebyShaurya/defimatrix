"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";
import { motion } from "framer-motion";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  link?: string;
}

// Event data based on the images
const upcomingEvents: Event[] = [
  {
    id: "token2049-1",
    title: "TOKEN2049",
    date: "Sept 18-19",
    location: "Singapore",
    imageUrl: "/images/events/token2049-1.png",
    link: "https://www.asia.token2049.com",
  },
  {
    id: "token2049-dinner",
    title: "TOKEN2049 DINNER",
    date: "Sep 19th 6:30PM",
    location: "Singapore",
    imageUrl: "/images/events/token2049-dinner.png",
    link: "https://www.asia.token2049.com",
  },
  {
    id: "token2049-breakfast",
    title: "2049 Breakfast",
    date: "Sep 17th 10-1PM",
    location: "Singapore",
    imageUrl: "/images/events/token2049-breakfast.png",
    link: "https://www.asia.token2049.com",
  },
];

const allEvents: Event[] = [
  {
    id: "devcon-2024",
    title: "Devcon 2024",
    date: "Nov 12-15",
    location: "Bangkok, Thailand",
    imageUrl: "/images/events/devcon-2024.png",
    link: "https://devcon.org/en/",
  },
  {
    id: "eth-denver-2025",
    title: "ETHDenver 2025",
    date: "Feb 23-Mar 2",
    location: "Denver",
    imageUrl: "/images/events/eth-denver-2025.png",
    link: "https://www.ethdenver.com/",
  },
  {
    id: "gmove-movement-apac",
    title: "Gmove Movement APAC Tour",
    date: "Mar 18-Apr 17",
    location: "Taipei, Shenzhen, Chengdu, Shanghai, Hangzhou, Bangkok, Ho Chi Minh, Hanoi, Singapore, Seoul, Tokyo",
    imageUrl: "/images/events/gmove-movement.png",
    link: "https://www.movementnetwork.xyz/community",
  },
  {
    id: "dc-blockchain-week",
    title: "DC Blockchain Week",
    date: "Mar 26",
    location: "Washington, DC",
    imageUrl: "/images/events/dc-blockchain.png",
    link: "https://www.dcblockchainsummit.com/",
  },
  {
    id: "yale-blockchain-week",
    title: "Yale Blockchain Week",
    date: "Apr 4",
    location: "New Haven, CT",
    imageUrl: "/images/events/yale-blockchain.png",
    link: "https://yaleblockchainconference.com/",
  },
  {
    id: "hong-kong-web3",
    title: "Hong Kong Web3 Festival",
    date: "Apr 6-9",
    location: "Hong Kong",
    imageUrl: "/images/events/hong-kong-web3.png",
    link: "https://www.web3festival.org/hongkong2025",
  },
  {
    id: "paris-blockchain-week",
    title: "Paris Blockchain Week",
    date: "Apr 8-Mar 10",
    location: "Paris, France",
    imageUrl: "/images/events/paris-blockchain.png",
    link: "https://www.parisblockchainweek.com/",
  },
  {
    id: "unchained-summit",
    title: "Unchained Summit",
    date: "Apr 28",
    location: "Dubai, UAE",
    imageUrl: "/images/events/unchained-summit.png",
    link: "https://unchainedsummit.com/",
  },
  {
    id: "dubai-token2049",
    title: "Dubai Token2049",
    date: "Apr 30",
    location: "Dubai, UAE",
    imageUrl: "/images/events/dubai-token2049.png",
    link: "https://www.dubai.token2049.com/",
  },
];

export default function Events() {
  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <div className="min-h-screen bg-black pt-20 text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#C450D5]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          {/* Upcoming Events Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-xl font-bold text-yellow-400">UPCOMING EVENTS</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Link href={event.link || "#"} key={event.id} className="block">
                  <div className="group relative overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      {/* Placeholder for event image */}
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-500 to-teal-400">
                        <span className="text-lg font-bold">{event.title}</span>
                      </div>
                      {/* Uncomment when images are available */}
                      {/* <Image 
                        src={event.imageUrl} 
                        alt={event.title} 
                        fill 
                        className="object-cover" 
                      /> */}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4">
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                      <div className="mt-2 flex justify-between">
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Events Section */}
          <div className="mb-20">
            <h2 className="mb-8 text-xl font-bold text-yellow-400">ALL EVENTS</h2>

            <div className="space-y-4">
              {allEvents.map((event) => (
                <Link href={event.link || "#"} key={event.id}>
                  <div className="border-b border-pink-500 p-4 pb-4 transition-colors hover:bg-gray-900">
                    <div className="flex flex-col justify-between md:flex-row md:items-center">
                      <div className="w-32">
                        <p className="text-sm">{event.date}</p>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-medium underline">{event.title}</h3>
                      </div>

                      <div className="md:text-right">
                        <p className="text-sm">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Guild Content Section */}
          <div>
            <motion.div
              className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#C450D5]/20 to-[#C450D5]/5 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#C450D5] to-[#FF00FF]/80 bg-clip-text text-transparent">
                🚀 Join Our Community
              </span>
            </motion.div>
            
            <motion.h2
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DeFiMatrix.io Guilds
            </motion.h2>
            
            <div className="mb-10 space-y-6">
              <motion.p 
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                At the heart of DeFiMatrix.io lies a vision of collaborative decentralization, where innovation is driven by our vibrant community. To bring this to life, we&apos;ve created DeFiMatrix.io Guilds—specialized, autonomous groups united by a common mission: building the next evolution of AI-powered decentralized finance.
              </motion.p>
              
              <motion.h3 
                className="mt-8 text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                🧠 What Are Guilds?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                DeFiMatrix Guilds are community-led micro-organizations that contribute across key verticals of the platform&apos;s ecosystem:
              </motion.p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "⚙️",
                    title: "Protocol Guild",
                    description: "Engineers, smart contract developers, and auditors building and refining the infrastructure behind our AI DeFi strategies."
                  },
                  {
                    icon: "🧪",
                    title: "Test Guild",
                    description: "Power users and QA testers who rigorously test AI strategies, vault integrations, and multi-chain bridges."
                  },
                  {
                    icon: "📢",
                    title: "Community Guild",
                    description: "Evangelists, moderators, and social strategists building the DeFiMatrix movement across social platforms, events, and AMAs."
                  },
                  {
                    icon: "✍️",
                    title: "Content Guild",
                    description: "Writers, researchers, and video creators crafting thought leadership, tutorials, and documentation that demystify DeFi and AI."
                  },
                  {
                    icon: "🎨",
                    title: "Creative Guild",
                    description: "Designers and multimedia artists shaping the visual language of the platform through branding, infographics, UI/UX, and more."
                  },
                  {
                    icon: "🌍",
                    title: "Ecosystem Guild",
                    description: "Biz dev professionals and ecosystem operators helping expand protocol partnerships, integrations, and cross-chain deployments."
                  }
                ].map((guild, index) => (
                  <motion.div
                    key={guild.title}
                    className="group relative overflow-hidden rounded-2xl bg-[#1A1F2F] p-6 transition-all duration-300 hover:bg-[#1A1F2F]/80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-3 text-3xl">{guild.icon}</div>
                    <h4 className="mb-2 text-xl font-bold">{guild.title}</h4>
                    <p className="text-gray-400">{guild.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.h3 
                className="mt-12 text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                🛠️ Why Join a Guild?
              </motion.h3>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "🌐",
                    text: "Contribute your skills to a real decentralized product reshaping DeFi through AI."
                  },
                  {
                    icon: "🎓",
                    text: "Learn by doing in a collaborative environment with experts in Web3, AI, and finance."
                  },
                  {
                    icon: "💰",
                    text: "Earn rewards through bounties, grants, and on-chain reputation-based incentives."
                  },
                  {
                    icon: "🗳️",
                    text: "Shape governance by participating in DAO-led decision-making and proposal creation."
                  },
                  {
                    icon: "🚀",
                    text: "Accelerate your Web3 journey by collaborating on meaningful projects with global impact."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 rounded-lg bg-[#1A1F2F]/50 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="text-xl">{benefit.icon}</div>
                    <p className="text-gray-300">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 rounded-2xl bg-gradient-to-r from-[#C450D5]/10 via-[#FF00FF]/5 to-transparent p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-2xl font-bold">🧬 Powered by Purpose, Driven by Community</h3>
                <p className="mb-6 text-gray-300">
                  Whether you&apos;re a Solidity dev, a data scientist, a meme creator, or a governance junkie—there&apos;s a place for you in our Guild ecosystem. DeFiMatrix.io Guilds are the on-chain equivalent of open-source innovation labs, combining AI-driven DeFi automation with human creativity to unlock the future of financial autonomy.
                </p>
                <p className="mb-6 text-gray-300">
                  Join us. Build the AI-DeFi stack of tomorrow. Together, one vault, one strategy, one block at a time. ⛓️
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://www.defimatrix.io" 
                    className="group flex items-center space-x-2 rounded-full bg-[#C450D5] px-6 py-3 text-white transition-all hover:bg-[#C450D5]/90"
                  >
                    <span>👉 Apply to a Guild now</span>
                  </Link>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>#AIxDeFi</span>
                    <span>#DeFiMatrixGuilds</span>
                    <span>#Web3Communities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
