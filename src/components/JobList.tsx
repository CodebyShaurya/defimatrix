"use client";

import { motion } from "framer-motion";
import JobCard from "./JobCard";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  slug: string;
}

interface JobListProps {
  jobs: Job[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const JobList = ({ jobs }: JobListProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {jobs.map((job) => (
        <JobCard
          key={job.slug}
          title={job.title}
          department={job.department}
          location={job.location}
          type={job.type}
          experience={job.experience}
          slug={job.slug}
        />
      ))}
    </motion.div>
  );
};

export default JobList;
