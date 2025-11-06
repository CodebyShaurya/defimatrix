import { getAllJobs } from "@/utils/jobs";
import { CareersPageContent } from "@/components/CareersPageContent";

export default function CareersPage() {
  const jobs = getAllJobs();
  return <CareersPageContent jobs={jobs} />;
}
