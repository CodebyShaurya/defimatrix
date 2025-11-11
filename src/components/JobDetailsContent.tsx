"use client";

import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import type { Job } from "@/utils/jobs";
import Image from "next/image";

interface JobDetailsContentProps {
  job: Job;
}

export const JobDetailsContent: React.FC<JobDetailsContentProps> = ({ job }) => {
  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#C450D5]/10 blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Image src={job.image} className="rounded-2xl object-cover" alt={job.title} width={1200} height={1200} />
          </div>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              {job.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-gray-400"
            >
              <div>📍 Location: {job.location}</div>
              <div>💼 Type: {job.type}</div>
              <div>🧠 Reports to: {job.reportsTo}</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-[#C450D5] prose-strong:text-white"
          >
            <ReactMarkdown>{job.content}</ReactMarkdown>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:careers@defimatrix.io"
              className="inline-flex items-center space-x-2 rounded-full bg-[#C450D5] px-8 py-3 text-white transition-all hover:bg-[#C450D5]/90"
            >
              <span>Apply Now</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};
