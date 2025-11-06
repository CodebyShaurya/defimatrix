import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import JobList from "@/components/JobList";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  slug: string;
}

async function getJobs(): Promise<Job[]> {
  const jobsDirectory = path.join(process.cwd(), "src/content/jobs");
  const filenames = await fs.readdir(jobsDirectory);

  const jobs = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(jobsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title,
        department: data.department,
        location: data.location,
        type: data.type,
        experience: data.experience,
        slug: filename.replace(".md", ""),
      } as Job;
    }),
  );

  return jobs;
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Join the DeFiMatrix Team</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Help us build the future of decentralized finance with AI-powered solutions and cross-chain infrastructure.
          </p>
        </div>

        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
