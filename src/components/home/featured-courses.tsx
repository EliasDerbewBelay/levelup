import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/courses/course-card";

export function FeaturedCourses() {
  const featuredCourses = COURSES.filter((c) => c.featured).slice(0, 6);

  return (
    <section className="py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-3 w-3 text-amber-500" />
              <span>POPULAR CURRICULA</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Popular Courses
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Explore practical courses designed to help you build useful skills.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>Browse all {COURSES.length} courses</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3-column Course Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
