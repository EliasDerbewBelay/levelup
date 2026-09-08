import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/courses/course-card";

export function FeaturedCourses() {
  const featuredCourses = COURSES.filter((c) => c.featured).slice(0, 6);

  return (
    <section className="border-b border-border/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              02 / POPULAR CURRICULA
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Training Programs
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Directly aligned with employer standards in Addis Ababa and remote technical opportunities.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
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
