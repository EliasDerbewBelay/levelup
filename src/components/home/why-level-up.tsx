import { Shield, Sparkles, Laptop, Award, MapPin } from "lucide-react";

export function WhyLevelUp() {
  const pillars = [
    {
      icon: Laptop,
      title: "Tactile, Project-First Labs",
      description:
        "No slide marathons. Students spend the majority of their time writing code, producing media, wiring circuits, or balancing ledgers on dedicated workstations.",
    },
    {
      icon: Shield,
      title: "Verifiable Digital Credentials",
      description:
        "Every certificate comes with a unique verification code and public portal validation. Employers can verify student honors and capstone work in real time.",
    },
    {
      icon: Sparkles,
      title: "Industry-Standard Toolchains",
      description:
        "From Next.js, Python 3, and Git to Adobe Creative Cloud and Peachtree (Sage 50), students learn on the exact tools used by top organizations.",
    },
    {
      icon: Award,
      title: "Accessible & Flexible Schedules",
      description:
        "Designed for university students and working professionals with dedicated weekday evening and weekend intensive cohorts.",
    },
  ];

  return (
    <section className="border-b border-border/60 bg-secondary/20 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              03 / THE LEVEL UP DIFFERENCE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why We Founded Level Up Training Institute
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most training programs teach theory in isolation. Level Up was founded in
              2026 to bridge the gap between academic textbooks and workplace execution.
            </p>

            <div className="rounded-xl border border-border/80 bg-card p-5 text-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-brand/10 p-2 text-brand">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Physical Campus Infrastructure
                  </h4>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    Atika Building, 3rd Floor · Tulu Dimtu Square. High-speed fiber
                    connectivity, dedicated electronics workstations, and audiovisual editing suites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 transition-all duration-200 hover:border-foreground/30 hover:shadow-sm"
                >
                  <div>
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-secondary text-foreground transition-colors group-hover:border-foreground/20">
                      <Icon className="h-4.5 w-4.5 text-brand" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
