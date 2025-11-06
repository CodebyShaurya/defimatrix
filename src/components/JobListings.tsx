import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Users } from "lucide-react";
import type { Job } from "@/utils/jobs";

interface JobListingsProps {
  jobs: Job[];
}

export const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  return (
    <motion.section
      className="my-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-8 text-3xl font-bold">📋 Open Positions</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <motion.div
            key={job.slug}
            className="group relative overflow-hidden rounded-2xl bg-[#1A1F2F] p-6 transition-all duration-300 hover:bg-[#1A1F2F]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />

            <h3 className="mb-3 text-xl font-semibold text-white">{job.title}</h3>

            <div className="mb-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-1 rounded-full bg-[#C450D5]/10 px-3 py-1 text-sm text-[#C450D5]">
                <Briefcase className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[#C450D5]/10 px-3 py-1 text-sm text-[#C450D5]">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[#C450D5]/10 px-3 py-1 text-sm text-[#C450D5]">
                <Users className="h-4 w-4" />
                <span>{job.team}</span>
              </div>
            </div>

            <div className="mb-4 text-sm text-gray-400">Reports to: {job.reportsTo}</div>

            <Link
              href={`/careers/${job.slug}`}
              className="inline-flex items-center space-x-2 text-[#C450D5] hover:text-[#C450D5]/80"
            >
              <span>View Details</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
