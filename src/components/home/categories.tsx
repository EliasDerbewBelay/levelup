import Link from "next/link";
import { ArrowRight, Code2, Globe2, Palette, TrendingUp } from "lucide-react";

export const CATEGORIES_DATA = [
  {
    id: "technology",
    slug: "technology",
    title: "Core Technology",
    description: "Hands-on software engineering, algorithmic logic, embedded robotics, and modern web application development.",
    icon: Code2,
    accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    tags: ["Python", "React & Node.js", "Robotics", "HTML/CSS", "Basic Computer"],
    courseCount: "4 Courses",
  },
  {
    id: "languages",
    slug: "languages",
    title: "Languages & Communication",
    description: "Break conversational hesitation, build international professional fluency, and master workplace communications.",
    icon: Globe2,
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    tags: ["English", "Amharic", "Afaan Oromoo", "Arabic", "French"],
    courseCount: "5 Courses",
  },
  {
    id: "creative",
    slug: "creative",
    title: "Creative Arts & Media",
    description: "Produce commercial visual identities, cinematic brand videos, motion graphics, and social media reels.",
    icon: Palette,
    accent: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    tags: ["Graphic Design", "Video Editing", "Photoshop", "Premiere Pro", "After Effects"],
    courseCount: "2 Courses",
  },
  {
    id: "business",
    slug: "business",
    title: "Business & Accounting",
    description: "Master double-entry bookkeeping, Ethiopian statutory tax compliance, and computerized ledgers in Sage 50.",
    icon: TrendingUp,
    accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    tags: ["Peachtree (Sage 50)", "VAT & Withholding", "Payroll Accounting", "Financial Bookkeeping"],
    courseCount: "2 Courses",
  },
];

export function Categories() {
  return (
    <section className="border-b border-border/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              01 / ACADEMIC TRACKS
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four Specialized Departments
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Every curriculum is built around practical application, project capstones,
              and verifiable technical competence.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
          >
            <span>View all courses</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 4 Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CATEGORIES_DATA.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-7 transition-all duration-200 hover:border-foreground/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:border-foreground/30 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${cat.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {cat.courseCount}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                    <Link href={`/courses?category=${cat.slug}`}>
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      {cat.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/70 bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-end text-xs font-medium text-foreground transition-colors group-hover:text-brand">
                    <span>Browse department</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
