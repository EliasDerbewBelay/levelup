import type { Metadata } from "next";
import { INSTRUCTORS } from "@/data/instructors";
import { InstructorDirectory } from "@/components/instructors/instructor-directory";

export const metadata: Metadata = {
  title: "Faculty & Instructors",
  description:
    "Meet the experienced instructors and engineering mentors at Level Up Training Institute in Addis Ababa.",
};

export default function InstructorsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              FACULTY DIRECTORY
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Meet Our Instructors
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Active software engineers, certified accountants, bilingual linguists, and
              creative directors who mentor students directly in our campus laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InstructorDirectory instructors={INSTRUCTORS} />
        </div>
      </section>
    </div>
  );
}
