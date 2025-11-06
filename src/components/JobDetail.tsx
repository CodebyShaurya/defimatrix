"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface JobDetailProps {
  content: string;
  frontmatter: {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    posted: string;
  };
}

const JobDetail = ({ content, frontmatter }: JobDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-4xl px-4 py-8"
    >
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="mb-4 text-3xl font-bold text-white">{frontmatter.title}</h1>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#C450D5] px-4 py-2 text-white">{frontmatter.department}</span>
            <span className="rounded-full bg-gray-700 px-4 py-2 text-white">{frontmatter.location}</span>
            <span className="rounded-full bg-gray-700 px-4 py-2 text-white">{frontmatter.type}</span>
            <span className="rounded-full bg-gray-700 px-4 py-2 text-white">{frontmatter.experience}</span>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-800 p-4">
              <h3 className="mb-1 text-sm text-gray-400">Salary</h3>
              <p className="font-medium text-white">{frontmatter.salary}</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-4">
              <h3 className="mb-1 text-sm text-gray-400">Posted</h3>
              <p className="font-medium text-white">{frontmatter.posted}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 border-t border-gray-800 pt-8"
        >
          <a
            href="mailto:careers@defimatrix.io"
            className="inline-block rounded-lg bg-[#FF00FF] px-8 py-3 font-medium text-white transition-colors hover:bg-opacity-90"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobDetail;
