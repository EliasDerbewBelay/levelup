import { Code, CheckCircle, GitPullRequest, Award } from "lucide-react";

export function LearningExperience() {
  const steps = [
    {
      step: "01",
      icon: Code,
      title: "Interactive Briefing",
      description:
        "Every session starts with a compact 20-minute mental-model overview. No marathon monologues; direct problem decomposition.",
    },
    {
      step: "02",
      icon: GitPullRequest,
      title: "Tactile Lab Sprint",
      description:
        "Students build the concept immediately on our dual-monitor campus workstations or their personal machines.",
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Mentor Code & Asset Review",
      description:
        "Faculty inspect your pull requests, design grids, or ledger entries line-by-line, providing workplace-standard critique.",
    },
    {
      step: "04",
      icon: Award,
      title: "Capstone & Verifiable Credential",
      description:
        "Graduate with an immutable public portfolio and an official certificate verifiable on our digital portal.",
    },
  ];

  return (
    <section className="border-b border-border/60 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            04 / PEDAGOGY
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Hybrid Feedback Loop
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            How we turn ambitious beginners into workplace-ready practitioners through four structured phases.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 transition-all hover:border-foreground/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-muted-foreground/40">
                      {item.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-brand">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
