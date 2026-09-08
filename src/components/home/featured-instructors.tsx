import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSTRUCTORS } from "@/data/instructors";
import { InstructorCard } from "@/components/instructors/instructor-card";

export function FeaturedInstructors() {
  const featured = INSTRUCTORS.filter((i) => i.featured).slice(0, 4);

  return (
    <section className="border-b border-border/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              05 / FACULTY & MENTORS
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Learn From Practitioners
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Our faculty members bring active industry experience across software engineering,
              visual design, corporate finance, and multilingual communication.
            </p>
          </div>
          <Link
            href="/instructors"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
          >
            <span>Meet all faculty members</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((inst) => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </div>
    </section>
  );
}
