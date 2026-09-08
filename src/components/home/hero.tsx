"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Copy, Check } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"terminal" | "python" | "react">("terminal");

  const copyCommand = () => {
    navigator.clipboard.writeText("npx levelup enroll --campus=tulu-dimtu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand/15 via-brand/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/80 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-all hover:border-foreground/20">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Level Up Training Institute
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-foreground">Tulu Dimtu Square</span>
          </div>

          {/* Monumental Hero Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span>Learn. Build.</span>{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground to-brand bg-clip-text text-transparent">
              Level Up.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Practical, industry-standard training in <strong className="font-semibold text-foreground">Programming</strong>,{" "}
            <strong className="font-semibold text-foreground">Languages</strong>,{" "}
            <strong className="font-semibold text-foreground">Creative Arts</strong>, and{" "}
            <strong className="font-semibold text-foreground">Business Accounting</strong>.
            Engineered for students who build real things.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/courses"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-semibold text-background transition-all hover:bg-foreground/90 active:scale-95"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-foreground/20 active:scale-95"
            >
              Learn About Us
            </Link>

            <Link
              href="/certificate-verification"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg px-4 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-brand" />
              <span>Verify Certificate</span>
            </Link>
          </div>

          {/* Interactive Technical Terminal Preview */}
          <div className="mx-auto mt-14 max-w-3xl text-left">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-all dark:border-border/80 dark:bg-card">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between border-b border-border/80 bg-secondary/50 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                    levelup-terminal ~ bash
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "terminal"
                        ? "bg-background text-foreground font-semibold border border-border/70"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    terminal.sh
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("python")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "python"
                        ? "bg-background text-foreground font-semibold border border-border/70"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    app.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("react")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "react"
                        ? "bg-background text-foreground font-semibold border border-border/70"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Course.tsx
                  </button>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={copyCommand}
                  className="flex items-center gap-1 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Copy enrollment command"
                  title="Copy command"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Code/Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-foreground">
                {activeTab === "terminal" && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-brand">$</span>
                      <span className="text-foreground font-semibold">
                        npx levelup-cli inspect --campus &quot;tulu-dimtu&quot;
                      </span>
                    </div>
                    <div className="text-muted-foreground/80 pl-4">
                      ✔ Campus location resolved: Atika Building, 3rd Floor (Near Sabeh Cafe)
                    </div>
                    <div className="text-muted-foreground/80 pl-4">
                      ✔ Hardware labs: 24 High-Performance Workstations, Fiber Uplink
                    </div>
                    <div className="text-muted-foreground/80 pl-4">
                      ✔ Delivery mode: Hybrid (On-Campus Labs + Guided Project Sprints)
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-muted-foreground">
                      <span className="text-brand">$</span>
                      <span className="text-emerald-500">
                        status: Cohort registration active for 2026
                      </span>
                    </div>
                    <div className="text-muted-foreground text-[11px] pt-1">
                      Ready to build? Call 0930 53 71 17 or explore catalog.
                    </div>
                  </div>
                )}

                {activeTab === "python" && (
                  <div className="space-y-1">
                    <p className="text-muted-foreground"># Level Up Python Automation Track</p>
                    <p>
                      <span className="text-purple-400">from</span> levelup.labs{" "}
                      <span className="text-purple-400">import</span> StudentWorkstation, Capstone
                    </p>
                    <p className="pt-1">
                      <span className="text-blue-400">def</span>{" "}
                      <span className="text-yellow-400">build_future</span>(student):
                    </p>
                    <p className="pl-4">
                      skills = [<span className="text-emerald-400">&quot;Python&quot;</span>,{" "}
                      <span className="text-emerald-400">&quot;REST APIs&quot;</span>,{" "}
                      <span className="text-emerald-400">&quot;Automation&quot;</span>]
                    </p>
                    <p className="pl-4">
                      project = Capstone.deploy(skills, mentor=<span className="text-emerald-400">&quot;Dawit Abebe&quot;</span>)
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">return</span> project.verify()
                    </p>
                  </div>
                )}

                {activeTab === "react" && (
                  <div className="space-y-1">
                    <p className="text-muted-foreground">{"// Level Up Full-Stack React & Next.js Track"}</p>
                    <p>
                      <span className="text-purple-400">export async function</span>{" "}
                      <span className="text-yellow-400">LevelUpGraduate</span>() &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">const</span> cohort ={" "}
                      <span className="text-blue-400">await</span> getEnrollment(&#123;
                    </p>
                    <p className="pl-8">
                      campus: <span className="text-emerald-400">&quot;Tulu Dimtu&quot;</span>,
                    </p>
                    <p className="pl-8">
                      modules: [<span className="text-emerald-400">&quot;Tailwind&quot;</span>, <span className="text-emerald-400">&quot;App Router&quot;</span>, <span className="text-emerald-400">&quot;Node.js&quot;</span>],
                    </p>
                    <p className="pl-4">&#125;);</p>
                    <p className="pl-4">
                      <span className="text-purple-400">return</span> &lt;
                      <span className="text-brand">ProductionReadySoftware</span> portfolio=&#123;cohort.capstone&#125; /&gt;;
                    </p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
