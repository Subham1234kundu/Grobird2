export const CASE_STUDY_INDUSTRIES = ["Fintech", "Healthcare", "Manufacturing", "SaaS", "Real Estate", "Logistics", "Lending", "EdTech", "Insurance", "B2B Services"] as const;

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  tag: string;
  industry: string | null;
  cover_image_url: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};
