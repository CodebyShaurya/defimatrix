"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  slug: string;
}

const JobCard = ({ title, department, location, type, experience, slug }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:border-[#FF00FF]"
    >
      <Link href={`/jobs/${slug}`} className="block">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#C450D5] px-3 py-1 text-sm text-white">{department}</span>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-white">{location}</span>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-white">{type}</span>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-white">{experience}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-[#FF00FF]">View Details</span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FF00FF]"
            whileHover={{ x: 5 }}
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default JobCard;
