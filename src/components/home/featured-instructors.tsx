import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { INSTRUCTORS } from "@/data/instructors";
import { InstructorCard } from "@/components/instructors/instructor-card";

export function FeaturedInstructors() {
  const featured = INSTRUCTORS.filter((i) => i.featured).slice(0, 4);

  return (
    <section className="border-t border-border/80 bg-soft-background/50 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-3 w-3 text-amber-500" />
              <span>FACULTY DIRECTORY</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Meet Our Instructors
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Learn from active practitioners who bring production-grade workflows into every lab session.
            </p>
          </div>

          <Link
            href="/instructors"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View all faculty members</span>
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
