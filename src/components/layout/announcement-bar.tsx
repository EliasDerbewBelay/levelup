import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Campus Announcement"
      className="relative z-50 flex h-9 w-full items-center justify-center border-b border-border/60 bg-muted/40 px-4 text-xs backdrop-blur-sm transition-colors hover:bg-muted/70"
    >
      <Link
        href="/events"
        className="group flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="flex items-center gap-1 rounded-full border border-brand/20 bg-brand/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand">
          <Sparkles className="h-2.5 w-2.5" />
          2026 COHORT
        </span>
        <span className="hidden sm:inline">
          Spring 2026 Admissions Open · Hands-On Hybrid Tracks at Tulu Dimtu
        </span>
        <span className="inline sm:hidden">
          Spring 2026 Admissions Now Open
        </span>
        <span className="inline-flex items-center text-foreground font-semibold">
          Learn more
          <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </aside>
  );
}
