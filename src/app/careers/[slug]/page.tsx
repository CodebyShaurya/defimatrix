import { notFound } from "next/navigation";
import { getJobBySlug, getJobSlugs } from "@/utils/jobs";
import { JobDetailsContent } from "@/components/JobDetailsContent";

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getJobSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function JobPage({ params }: JobPageProps) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return <JobDetailsContent job={job} />;
}
