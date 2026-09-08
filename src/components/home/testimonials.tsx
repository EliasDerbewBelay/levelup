import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";

export function TestimonialsSection() {
  const testimonials = TESTIMONIALS.filter((t) => t.featured).slice(0, 3);

  return (
    <section className="border-b border-border/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              07 / STUDENT OUTCOMES
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real Experiences, Real Outcomes
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Hear from graduates who transformed their programming, design, language, and accounting skills into actual career opportunities.
            </p>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
          >
            <span>Read all testimonials</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </div>
    </section>
  );
}
