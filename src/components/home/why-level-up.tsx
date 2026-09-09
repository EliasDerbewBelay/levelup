import Link from "next/link";
import { Code2, Users2, Sparkles, CheckCircle2, Laptop, MapPin, ArrowRight, Clock } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";

export function WhyLevelUp() {
  const benefits = [
    {
      icon: Code2,
      title: "Practical Excellence",
      description: "No passive lecture marathons. Students write real code, produce commercial creative assets, or balance computerized corporate ledgers.",
      accent: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
    },
    {
      icon: Users2,
      title: "Accessibility & Multilingual Support",
      description: "Transparent installment pricing, evening & weekend schedules, and multilingual tracks available in English, Amharic, and Afaan Oromoo.",
      accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    },
    {
      icon: Sparkles,
      title: "Modern Industry Toolchains",
      description: "Learn on the exact tools used by top technology companies: Python 3, Next.js, Git, Adobe Creative Cloud, and Peachtree / Sage 50.",
      accent: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
    },
    {
      icon: CheckCircle2,
      title: "Student Success & Capstones",
      description: "Every student builds a tangible public capstone project and graduates with an official Certificate of Completion ready for employer scrutiny.",
      accent: "text-purple-600 dark:text-purple-400 bg-purple-500/10",
    },
  ];

  return (
    <section className="border-t border-border/80 bg-background py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Mission & 4 Benefit Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
                THE LEVEL UP DIFFERENCE
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Why Learn With Level Up?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Most training programs teach abstract theory in isolation. Level Up was founded in 2026 to bridge the gap between classroom concepts and workplace execution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-all duration-200 hover:border-brand/40 hover:shadow-sm"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.accent} transition-transform group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3.5 text-sm font-bold text-foreground group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Read more about our institutional mission &amp; values</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Panel / Physical Campus Infrastructure */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-secondary/60 p-6 sm:p-8 shadow-xl">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span>Physical Campus Infrastructure</span>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                Tulu Dimtu Square Campus
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Our main campus is purpose-engineered for hands-on learning with high-speed fiber internet, dual-display programming workstations, hardware robotics kits, and audiovisual editing suites.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-border/70 pt-5 text-xs text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">Address</strong>
                    <span>{INSTITUTE_INFO.address.building}, {INSTITUTE_INFO.address.street}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">Flexible Shift Options</strong>
                    <span>Weekday Evenings (5:30 PM - 8:30 PM) &amp; Weekend Intensives</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                    <Laptop className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">Workstations Provided</strong>
                    <span>No need to bring a laptop. Dedicated hardware provided in all labs.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e3a8a] py-3 text-xs font-bold text-white shadow-sm hover:bg-[#1e40af] dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                >
                  <span>Book a Free Campus Tour</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
