import Link from "next/link";
import { ArrowRight, Clock, MonitorCheck, Sparkles } from "lucide-react";
import { Course } from "@/types/course";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 text-card-foreground transition-all duration-200 hover:border-foreground/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:border-foreground/30 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]",
        className
      )}
    >
      {/* Top Meta Row */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-4">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              {course.categoryLabel}
            </span>
            {course.badge && (
              <Badge
                variant="secondary"
                className="font-mono text-[10px] px-2 py-0 border border-brand/20 bg-brand/5 text-brand"
              >
                <Sparkles className="mr-1 h-2.5 w-2.5 inline" />
                {course.badge}
              </Badge>
            )}
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
          <Link
            href={`/courses/${course.slug}`}
            className="focus:outline-none"
          >
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {course.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {course.shortDescription}
        </p>
      </div>

      {/* Footer Specs */}
      <div className="mt-6 border-t border-border/60 pt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground/70" />
              {course.duration}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <MonitorCheck className="h-3 w-3 text-muted-foreground/70" />
              {course.deliveryMode}
            </span>
          </div>

          <div className="relative z-20 flex items-center font-medium text-foreground transition-colors group-hover:text-brand">
            <span className="text-xs">Explore</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>

        {course.price && (
          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span>Tuition</span>
            <span className="font-semibold text-foreground">{course.price}</span>
          </div>
        )}
      </div>
    </article>
  );
}
