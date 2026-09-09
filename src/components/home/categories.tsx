import Link from "next/link";
import { ArrowRight, Code2, Globe2, Palette, TrendingUp } from "lucide-react";

export const CATEGORIES_DATA = [
  {
    id: "languages",
    slug: "languages",
    title: "Languages",
    description: "Break conversational hesitation, build international professional fluency, and master workplace communications.",
    icon: Globe2,
    accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    tags: ["English", "Amharic", "Afaan Oromoo", "Arabic", "French"],
    courseCount: "5 Courses",
  },
  {
    id: "technology",
    slug: "technology",
    title: "Core Technology",
    description: "Hands-on software engineering, algorithmic logic, embedded robotics, and modern web application development.",
    icon: Code2,
    accent: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    tags: ["Basic Computer", "Programming", "Python", "Robotics", "HTML/CSS", "JavaScript", "React", "Node.js"],
    courseCount: "4 Courses",
  },
  {
    id: "creative",
    slug: "creative",
    title: "Creative Arts",
    description: "Produce commercial visual identities, cinematic brand videos, motion graphics, and social media reels.",
    icon: Palette,
    accent: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    tags: ["Graphic Design", "Video Editing", "Premiere Pro", "After Effects"],
    courseCount: "2 Courses",
  },
  {
    id: "business",
    slug: "business",
    title: "Business & Finance",
    description: "Master double-entry bookkeeping, Ethiopian statutory tax compliance, and computerized ledgers in Sage 50.",
    icon: TrendingUp,
    accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    tags: ["Accounting", "Peachtree / Sage 50"],
    courseCount: "2 Courses",
  },
];

export function Categories() {
  return (
    <section id="categories" className="border-t border-border/80 bg-soft-background/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              DISCIPLINES &amp; TRACKS
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Explore Our Learning Areas
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Practical curricula designed around market demand in Addis Ababa and international remote opportunities.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>Browse all programs</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 4-column Category Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES_DATA.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:hover:border-blue-500/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-110 ${cat.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      {cat.courseCount}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/70 bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    href={`/courses?category=${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
