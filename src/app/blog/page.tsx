import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { BlogDirectory } from "@/components/blog/blog-directory";

export const metadata: Metadata = {
  title: "Blog & Technical Insights",
  description:
    "Read technical articles, industry perspectives, language learning guides, and campus updates from Level Up Training Institute.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              EDITORIAL &amp; PERSPECTIVES
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Level Up Technical Journal
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Guides on software architecture, Ethiopian tax accounting workflows,
              creative design careers, and practical language mastery written by our faculty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogDirectory posts={BLOG_POSTS} />
        </div>
      </section>
    </div>
  );
}
