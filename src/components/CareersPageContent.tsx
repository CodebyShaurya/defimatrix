"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";
import Link from "next/link";
import { Mail, Handshake, Beaker, Megaphone, Lock, GraduationCap, Send, Globe } from "lucide-react";
import { JobListings } from "@/components/JobListings";
import type { Job } from "@/utils/jobs";
import Image from "next/image";

interface CareersPageContentProps {
  jobs: Job[];
}

export const CareersPageContent: React.FC<CareersPageContentProps> = ({ jobs }) => {
  const contacts = [
    {
      title: "General Careers & Open Applications",
      email: "careers@defimatrix.io",
      icon: Mail,
    },
    {
      title: "Partnerships & Collaborations",
      email: "partners@defimatrix.io",
      icon: Handshake,
    },
    {
      title: "R&D / Developer Roles",
      email: "r&d@defimatrix.io",
      icon: Beaker,
    },
    {
      title: "Marketing & Community Roles",
      email: "marketing@defimatrix.io",
      icon: Megaphone,
    },
    {
      title: "Compliance, Risk & Legal",
      email: "compliance@defimatrix.io",
      icon: Lock,
    },
    {
      title: "Internships & Early Careers",
      email: "internships@defimatrix.io",
      icon: GraduationCap,
    },
  ];

  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#C450D5]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-24 text-center">
            <motion.div
              className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#C450D5]/20 to-[#C450D5]/5 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#C450D5] to-[#FF00FF]/80 bg-clip-text text-transparent">
                🔍 Join the Future of Finance
              </span>
            </motion.div>
            <motion.h1
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Careers at DeFiMatrix.io
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              DeFiMatrix stands as the #1 truly decentralized Intent-Driven DeFi Platform, empowering your financial
              goals to shape the crypto journey through cutting-edge AI technology.
            </motion.p>
          </div>

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

              <div className="relative space-y-6">
                <p className="text-xl text-gray-400">
                  We&apos;re building a world where decentralized finance is intelligent, accessible, and autonomous —
                  powered by advanced AI and an intent-based infrastructure.
                </p>
                <p className="text-xl text-gray-400">
                  If you&apos;re passionate about DeFi, blockchain, and pushing the boundaries of AI innovation,
                  you&apos;ve just found your next mission. 💡
                </p>
              </div>
            </div>
          </motion.section>

          <Image
            src="/careers-1.png"
            alt="Careers"
            width={1000}
            height={1000}
            className="h-auto w-full overflow-hidden rounded-2xl object-cover"
          />

          {/* Job Listings */}
          <JobListings jobs={jobs} />

          {/* Contact Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-3xl font-bold">✉️ Careers Contact</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="group relative overflow-hidden rounded-2xl bg-[#1A1F2F] p-6 transition-all duration-300 hover:bg-[#1A1F2F]/80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start space-x-4">
                    <contact.icon className="h-6 w-6 text-[#C450D5]" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{contact.title}</h3>
                      <a href={`mailto:${contact.email}`} className="text-[#C450D5] hover:text-[#C450D5]/80">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="mt-8 text-center text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We review every serious application. If you&apos;re passionate about redefining decentralized finance, we
              want to hear from you.
            </motion.p>
          </motion.section>

          {/* Apply Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold">🚀 Apply to Build the Future</h2>
            <p className="mb-8 text-xl text-gray-400">
              Submit your resume, GitHub/portfolio, and a short note on why you&apos;re excited about DeFiMatrix to{" "}
              <a href="mailto:careers@defimatrix.io" className="text-[#C450D5] hover:text-[#C450D5]/80">
                careers@defimatrix.io
              </a>
              .
            </p>
            <p className="mb-8 text-xl text-gray-400">Let&apos;s shape the next evolution of DeFi — together. ⚡</p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:careers@defimatrix.io"
                className="group flex items-center space-x-2 rounded-full bg-[#C450D5] px-6 py-3 text-white transition-all hover:bg-[#C450D5]/90"
              >
                <Send className="h-4 w-4" />
                <span>Apply Now</span>
              </Link>
              <Link
                href="https://www.defimatrix.io"
                className="group flex items-center space-x-2 rounded-full bg-[#1A1F2F] px-6 py-3 text-white transition-all hover:bg-[#1A1F2F]/80"
              >
                <Globe className="h-4 w-4" />
                <span>Visit Website</span>
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
};
