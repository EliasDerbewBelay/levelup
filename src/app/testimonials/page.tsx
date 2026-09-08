import type { Metadata } from "next";
import { TestimonialsPageView } from "@/components/testimonials/testimonials-page-view";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews",
  description:
    "Read firsthand reviews and project outcomes from graduates of Level Up Training Institute in Addis Ababa.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              STUDENT EXPERIENCES
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              What Our Graduates Say
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Real perspectives from students across software development, digital design,
              workplace languages, and corporate computerized accounting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialsPageView />
        </div>
      </section>
    </div>
  );
}
