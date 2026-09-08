import { Suspense } from "react";
import type { Metadata } from "next";
import { COURSES } from "@/data/courses";
import { CourseCatalog } from "@/components/courses/course-catalog";

export const metadata: Metadata = {
  title: "Courses & Curricula",
  description:
    "Explore practical courses at Level Up Training Institute. Programming, Python, Full-Stack Web, Languages, Creative Arts, and Peachtree Accounting.",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              ACADEMIC OFFERINGS
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Courses &amp; Training Programs
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hands-on curricula designed around direct computer lab practice, real-world
              case studies, and employer-recognized project outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="py-12 text-center text-xs font-mono text-muted-foreground">
                Loading course directory...
              </div>
            }
          >
            <CourseCatalog courses={COURSES} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
