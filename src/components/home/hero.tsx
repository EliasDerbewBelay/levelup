"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, BookOpen, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-soft-background via-background to-background pt-10 pb-16 md:pt-16 md:pb-24 transition-colors">
      {/* Subtle Background Geometric Accents */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-600/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Educational Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-[#1e3a8a] dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span className="font-mono text-[11px] uppercase tracking-wider">LEVEL UP YOUR FUTURE</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.12]">
              <span>Learn Skills.</span><br />
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-amber-500 dark:from-blue-400 dark:via-blue-300 dark:to-amber-400 bg-clip-text text-transparent">
                Build Your Future.
              </span><br />
              <span className="text-foreground">Level Up.</span>
            </h1>

            {/* Short Supporting Description */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Build practical, market-ready skills in programming, languages, creative arts, and business through flexible learning designed for your future.
            </p>

            {/* Checkpoint Items */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Practical, market-ready skills</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Experienced instructors</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Online and physical learning</span>
              </div>
            </div>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/25 transition-all duration-150 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/35 active:scale-95"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#1e3a8a]/20 bg-background px-7 text-sm font-bold text-[#1e3a8a] transition-colors hover:border-[#1e3a8a]/40 hover:bg-blue-50/50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-950/40 active:scale-95"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Actual Gallery Photo & Floating Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Decorative Background Elements */}
            <div className="relative flex items-center justify-center w-full max-w-[540px]">
              {/* Circular Backdrop Aura */}
              <div className="absolute h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] rounded-full bg-gradient-to-tr from-blue-200/60 via-blue-100/40 to-amber-100/40 dark:from-blue-950/50 dark:via-blue-900/30 dark:to-amber-950/20 blur-2xl" />
              
              {/* Decorative Concentric Rings & Dashed Border */}
              <svg
                className="pointer-events-none absolute -inset-6 hidden sm:block h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-blue-500/20 dark:text-blue-400/20"
                viewBox="0 0 540 480"
                fill="none"
              >
                <rect x="20" y="20" width="500" height="440" rx="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="20" cy="140" r="4" fill="#f59e0b" />
                <circle cx="520" cy="100" r="5" fill="#2563eb" />
                <circle cx="500" cy="400" r="4" fill="#10b981" />
              </svg>

              {/* Main Actual Campus Photo Container */}
              <div className="group relative z-10 w-full overflow-hidden rounded-3xl border-2 border-white/90 bg-card shadow-2xl ring-1 ring-slate-900/10 dark:border-slate-800 dark:ring-white/10">
                {/* Photo with 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src="/images/gallery/hero-audience.webp"
                    alt="Level Up Training Institute learners and community at Tulu Dimtu campus session"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Campus Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Tulu Dimtu Campus</span>
                    </div>
                  </div>

                  {/* Bottom Information Strip */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                          Live Training Session
                        </div>
                        <div className="mt-1 text-base font-extrabold sm:text-lg text-white leading-tight">
                          Active Learner Cohorts
                        </div>
                        <div className="text-xs text-white/80 mt-0.5">
                          Atika Building 3rd Floor · Practical Skills
                        </div>
                      </div>
                      <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING STATISTIC CARD 1 (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-6 z-20 flex items-center gap-3 rounded-2xl border border-border/90 bg-card/95 p-3.5 shadow-xl backdrop-blur-md transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-lg font-extrabold text-foreground leading-none">15+</div>
                  <div className="text-xs font-semibold text-muted-foreground mt-0.5">Course Areas</div>
                </div>
              </div>

              {/* FLOATING STATISTIC CARD 2 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl border border-border/90 bg-card/95 p-3.5 shadow-xl backdrop-blur-md transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground leading-none">Hybrid</div>
                  <div className="text-xs font-semibold text-muted-foreground mt-0.5">Learning</div>
                </div>
              </div>

              {/* FLOATING INSET BADGE 3: Instructor Mentorship (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-4 right-4 z-20 items-center gap-2.5 rounded-2xl border border-border/90 bg-card/95 p-2 pr-3.5 shadow-xl backdrop-blur-md transition-transform duration-200 hover:-translate-y-1">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-muted">
                  <Image
                    src="/images/gallery/instructor-session.webp"
                    alt="Level Up Instructor Session"
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground leading-tight">Expert Mentors</div>
                  <div className="text-[10px] font-mono text-muted-foreground">Practical Guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
