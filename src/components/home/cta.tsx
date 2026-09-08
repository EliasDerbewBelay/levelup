import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/10 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-border/80 bg-gradient-to-b from-card to-secondary/40 p-8 text-center sm:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
            ENROLLMENT IS OPEN
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Ready to Level Up Your Skills?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Join the next cohort at our Tulu Dimtu Square campus. Learn hands-on
            with modern developer tools, professional creative suites, and
            dedicated instructor mentorship.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/courses"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-semibold text-background transition-all hover:bg-foreground/90 active:scale-95"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-foreground/20 active:scale-95"
            >
              <PhoneCall className="h-4 w-4 text-brand" />
              <span>Contact Admissions</span>
            </Link>

            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted active:scale-95"
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
