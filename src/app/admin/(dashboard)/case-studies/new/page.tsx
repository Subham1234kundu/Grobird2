import CaseStudyForm from "@/components/admin/CaseStudyForm";
import { PageHeader } from "@/components/admin/ui";

export default function NewCaseStudyPage() {
  return <><PageHeader title="New case study" description="Add a project, its industry, and a cover image." /><CaseStudyForm /></>;
}
