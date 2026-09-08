import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { INSTITUTE_INFO } from "@/data/institute";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/blog/article-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Level Up Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-secondary/30 py-3 text-xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="border-b border-border/60 bg-card py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs text-brand uppercase">
                {post.category}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              {post.title}
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-mono text-xs font-bold text-foreground">
                  {post.author.initials}
                </div>
                <div>
                  <strong className="text-foreground block">{post.author.name}</strong>
                  <span className="text-[11px] text-muted-foreground">{post.author.role}</span>
                </div>
              </div>

              <span>·</span>

              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.sectionTitle && (
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {section.sectionTitle}
                  </h2>
                )}

                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {para}
                  </p>
                ))}

                {section.callout && (
                  <div className="my-6 rounded-xl border border-brand/30 bg-brand/5 p-5 text-sm font-medium leading-relaxed text-foreground">
                    <span className="font-mono text-[10px] uppercase font-bold text-brand block mb-1">
                      Key Takeaway
                    </span>
                    {section.callout}
                  </div>
                )}
              </section>
            ))}

            {/* Tags */}
            <div className="border-t border-border/60 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground mr-1">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Telegram Community Box */}
          <div className="mt-12 rounded-xl border border-border/80 bg-secondary/30 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-foreground">
                Join the Level Up Tech Discussion
              </h3>
              <p className="text-xs text-muted-foreground">
                Connect with our instructors and students in our public Telegram community.
              </p>
            </div>
            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-xs font-semibold text-background hover:opacity-90 transition-opacity shrink-0"
            >
              <MessageSquare className="h-3.5 w-3.5 text-sky-400" />
              <span>Join Telegram</span>
            </a>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 border-t border-border/60 pt-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">Related Articles</h3>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-foreground hover:text-brand transition-colors inline-flex items-center gap-1"
                >
                  <span>View all articles</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedPosts.map((rel) => (
                  <ArticleCard key={rel.slug} post={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
