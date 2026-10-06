import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHero from "@/components/blogs/post/PostHero";
import CoverIllustration from "@/components/blogs/post/CoverIllustration";
import TableOfContents from "@/components/blogs/post/TableOfContents";
import ArticleBody from "@/components/blogs/post/ArticleBody";
import RelatedPosts from "@/components/blogs/post/RelatedPosts";
import { extractHeadings } from "@/lib/blog/markdown";
import { getPublishedCaseStudy, getPublishedCaseStudies } from "@/lib/case-studies/queries";
import { DEMO_CASE_STUDIES } from "@/lib/case-studies/demos";

export const revalidate = 300;
type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = await getPublishedCaseStudy((await params).id);
  if (!study) return { title: "Case study not found | GroBird" };
  return { title: `${study.title} | GroBird`, description: study.description, openGraph: { images: [study.cover_image_url] } };
}

export default async function CaseStudyDetailPage({ params }: Params) {
  const study = await getPublishedCaseStudy((await params).id);
  if (!study) notFound();
  const content = study.content?.trim() || study.description;
  const all = study.id.startsWith("sample-") ? DEMO_CASE_STUDIES : await getPublishedCaseStudies() ?? [];
  const related = all.filter(item => item.id !== study.id).slice(0, 3).map(item => ({ ...item, slug: item.id, published_at: item.created_at }));
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        <PostHero post={{ ...study, published_at: study.created_at, category: study.industry ?? study.tag }} collectionHref="/case-studies" collectionLabel="Case Studies" />
        <CoverIllustration src={study.cover_image_url} />
        <div className="mx-auto flex max-w-[1440px] gap-10 px-5 pt-12 pb-12 sm:px-10 sm:pt-16 lg:gap-[70px] lg:pb-20 xl:px-16">
          <TableOfContents items={extractHeadings(content)} title={study.title} />
          <ArticleBody content={content} />
        </div>
        <RelatedPosts posts={related} collectionHref="/case-studies" caseStudies />
      </main>
      <Footer />
    </>
  );
}
