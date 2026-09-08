import { Quote, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 text-card-foreground transition-all duration-200 hover:border-foreground/30 hover:shadow-sm",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between text-muted-foreground">
          <Quote className="h-5 w-5 text-brand/60" />
          {testimonial.verified && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              Verified Student
            </span>
          )}
        </div>

        <blockquote className="mt-4 text-xs leading-relaxed text-foreground font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-6 border-t border-border/60 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary font-mono text-xs font-bold text-foreground">
            {testimonial.avatarInitials}
          </div>
          <div className="min-w-0">
            <h4 className="truncate text-xs font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="truncate text-[11px] text-muted-foreground">
              {testimonial.role} · {testimonial.courseTaken}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
