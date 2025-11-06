import fs from "fs";
import path from "path";
import matter from "gray-matter";

const JOBS_DIRECTORY = path.join(process.cwd(), "src/content/jobs");

export interface JobFrontmatter {
  title: string;
  location: string;
  type: string;
  team: string;
  reportsTo: string;
  website: string;
  email: string;
  image: string;
}

export interface Job extends JobFrontmatter {
  slug: string;
  content: string;
}

export function getJobSlugs(): string[] {
  return fs
    .readdirSync(JOBS_DIRECTORY)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getJobBySlug(slug: string): Job {
  const fullPath = path.join(JOBS_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as JobFrontmatter) as JobFrontmatter,
  };
}

export function getAllJobs(): Job[] {
  const slugs = getJobSlugs();
  const jobs = slugs.map((slug) => getJobBySlug(slug));
  return jobs;
}
