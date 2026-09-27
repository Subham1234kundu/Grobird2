export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string;
  content: string;
  cover_image_url: string | null;
  featured: boolean;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  reason: string | null;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
};

export const POST_CATEGORIES = [
  "Fintech",
  "Logistics",
  "Healthcare",
  "Lending",
  "Manufacturing",
  "Business Intelligence",
  "Workflow Automation",
  "Custom Software",
  "System Integration",
  "Operational Discovery",
  "Managed Services",
];

/** "August 17, 2026" from an ISO timestamp; empty when unset. */
export function formatPostDate(iso: string | null | undefined) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
