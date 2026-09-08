"use client";

import * as React from "react";
import { BlogPost } from "@/types/blog";
import { ArticleCard } from "./article-card";

interface BlogDirectoryProps {
  posts: BlogPost[];
}

export function BlogDirectory({ posts }: BlogDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "Programming", label: "Programming" },
    { id: "Career Advice", label: "Career Advice" },
    { id: "Institution News", label: "Campus News" },
    { id: "Language Learning", label: "Languages" },
    { id: "Student Success Stories", label: "Success Stories" },
  ];

  const filtered = posts.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const standardPosts = filtered.filter((p) => selectedCategory !== "all" || p.slug !== featuredPost.slug);

  return (
    <div className="space-y-10">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedCategory === cat.id
                ? "bg-foreground text-background font-semibold"
                : "border border-border/80 bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured Post when All is selected */}
      {selectedCategory === "all" && featuredPost && (
        <div className="mb-10">
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
            ★ Featured Article
          </div>
          <ArticleCard post={featuredPost} featured />
        </div>
      )}

      {/* Article Grid */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-muted-foreground">
          Showing {filtered.length} articles
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(selectedCategory === "all" ? standardPosts : filtered).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
