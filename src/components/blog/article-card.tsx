import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export function ArticleCard({ post, className, featured = false }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 text-card-foreground transition-all duration-200 hover:border-foreground/30 hover:shadow-sm",
        featured ? "md:p-8" : "",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 pb-3">
          <Badge variant="outline" className="font-mono text-[10px] text-brand uppercase">
            {post.category}
          </Badge>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3
          className={cn(
            "font-bold tracking-tight text-foreground transition-colors group-hover:text-brand",
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          )}
        >
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-mono text-[10px] font-bold text-foreground">
            {post.author.initials}
          </div>
          <span className="text-muted-foreground truncate max-w-[120px] sm:max-w-none">
            {post.author.name}
          </span>
        </div>

        <div className="flex items-center gap-1 font-semibold text-foreground group-hover:text-brand transition-colors">
          <span>Read</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
