import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import JobDetail from "@/components/JobDetail";

interface JobPageProps {
  params: {
    slug: string;
  };
}

async function getJob(slug: string) {
  const jobsDirectory = path.join(process.cwd(), "src/content/jobs");
  const filePath = path.join(jobsDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: {
        title: data.title,
        department: data.department,
        location: data.location,
        type: data.type,
        experience: data.experience,
        salary: data.salary,
        posted: data.posted,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const job = await getJob(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <JobDetail {...job} />
    </div>
  );
}

export async function generateStaticParams() {
  const jobsDirectory = path.join(process.cwd(), "src/content/jobs");
  const filenames = await fs.readdir(jobsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}
