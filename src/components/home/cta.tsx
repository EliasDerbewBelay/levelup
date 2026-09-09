import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 transition-colors">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-blue-200/60 bg-gradient-to-b from-card via-card to-soft-background p-8 text-center sm:p-14 shadow-xl dark:border-blue-900/40">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>ENROLLMENT IS OPEN</span>
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Ready to Level Up?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Start building practical skills for your future. Join the next cohort at our Tulu Dimtu Square campus or through guided online tracks.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/25 transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/35 active:scale-95"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#1e3a8a]/20 bg-background px-6 text-sm font-bold text-[#1e3a8a] transition-colors hover:border-[#1e3a8a]/40 hover:bg-blue-50/50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-950/40 active:scale-95"
            >
              <PhoneCall className="h-4 w-4 text-brand" />
              <span>Contact Us</span>
            </Link>

            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-sky-500" />
              <span>Telegram</span>
            </a>
          </div>

          <div className="mt-8 border-t border-border/60 pt-6 text-xs text-muted-foreground">
            <span>Call us directly: </span>
            <strong className="text-foreground">0930 53 71 17</strong> ·{" "}
            <strong className="text-foreground">0913 04 57 51</strong> ·{" "}
            <strong className="text-foreground">0963 44 60 44</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
