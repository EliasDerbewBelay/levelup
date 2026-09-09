import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MonitorCheck, Sparkles, Code2, Globe2, Palette, TrendingUp, Layers } from "lucide-react";
import { Course } from "@/types/course";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CATEGORY_STYLES = {
  technology: {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    gradient: "from-blue-600/90 via-blue-700/80 to-[#1e3a8a]",
    icon: Code2,
    accent: "text-blue-500",
  },
  languages: {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    gradient: "from-emerald-600/90 via-teal-700/80 to-[#1e3a8a]",
    icon: Globe2,
    accent: "text-emerald-500",
  },
  creative: {
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    gradient: "from-amber-600/90 via-orange-700/80 to-[#1e3a8a]",
    icon: Palette,
    accent: "text-amber-500",
  },
  business: {
    badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    gradient: "from-indigo-600/90 via-blue-800/80 to-[#1e3a8a]",
    icon: TrendingUp,
    accent: "text-indigo-500",
  },
};

export function CourseCard({ course, className }: CourseCardProps) {
  const catStyle = CATEGORY_STYLES[course.category] || CATEGORY_STYLES.technology;
  const CategoryIcon = catStyle.icon;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-card text-card-foreground shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:hover:border-blue-500/40",
        className
      )}
    >
      <div>
        {/* Top Image / Visual Banner */}
        <div className="relative h-44 w-full overflow-hidden bg-muted">
          {course.image ? (
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className={`relative flex h-full w-full flex-col justify-between bg-gradient-to-br ${catStyle.gradient} p-5 text-white transition-transform duration-300 group-hover:scale-105`}>
              {/* Subtle background tech grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/80">
                  {course.categoryLabel}
                </span>
                {course.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-950 shadow-sm">
                    <Sparkles className="h-2.5 w-2.5" />
                    {course.badge}
                  </span>
                )}
              </div>

              <div className="relative flex items-end justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                  <CategoryIcon className="h-6 w-6 text-white" />
                </div>
                <span className="rounded-md bg-black/30 px-2 py-0.5 font-mono text-[11px] text-white/90 backdrop-blur-xs">
                  {course.deliveryMode}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Category & Level Badges */}
          <div className="flex items-center justify-between gap-2 pb-2.5">
            <span className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${catStyle.badge}`}>
              {course.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
              <Layers className="h-3 w-3" />
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
            <Link href={`/courses/${course.slug}`} className="focus:outline-none">
              <span className="absolute inset-0 z-10" aria-hidden="true" />
              {course.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Specs / Metadata */}
          <div className="mt-4 flex items-center gap-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground/80" />
              <span>{course.duration}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <MonitorCheck className="h-3.5 w-3.5 text-muted-foreground/80" />
              <span>{course.deliveryMode}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Instructor & View Course CTA */}
      <div className="flex items-center justify-between border-t border-border/70 bg-secondary/40 px-5 py-3 text-xs">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">Instructor</span>
          <span className="font-semibold text-foreground truncate max-w-[140px] sm:max-w-[160px]">{course.instructor}</span>
        </div>

        <div className="relative z-20 inline-flex items-center gap-1 font-bold text-brand transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-300">
          <span>View Course</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
