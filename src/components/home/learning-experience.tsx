import { BookOpen, Laptop, Code2, TrendingUp, Sparkles } from "lucide-react";

export function LearningExperience() {
  const steps = [
    {
      step: "01",
      icon: BookOpen,
      title: "Choose Your Course",
      description: "Explore programs designed around practical, market-ready skills in tech, languages, design, and accounting.",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      step: "02",
      icon: Laptop,
      title: "Learn",
      description: "Study through interactive physical campus labs at Atika Building or guided online learning sessions.",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      step: "03",
      icon: Code2,
      title: "Practice",
      description: "Apply your knowledge immediately through practical lab activities, live code commits, and real asset builds.",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Level Up",
      description: "Graduate with an official certificate, verifiable capstone portfolio, and confidence to accelerate your goals.",
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    },
  ];

  return (
    <section className="border-t border-border/80 bg-soft-background/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Learn Your Way
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Our step-by-step learning loop is engineered to take you from foundational basics to tangible workplace capability.
          </p>
        </div>

        {/* Horizontal Process on Desktop with connecting line, vertical timeline on mobile */}
        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-border/80 -z-0" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative z-10 flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:hover:border-blue-500/40"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-200 group-hover:scale-110 ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-muted-foreground/30 group-hover:text-brand/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
