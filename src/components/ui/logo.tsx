import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className, showSubtitle = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 font-sans transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md",
        className
      )}
      aria-label="Level Up Training Institute Homepage"
    >
      {/* Geometric Level Up Icon */}
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4.5 w-4.5"
        >
          {/* Ascending stair/level glyph */}
          <path d="M4 18h4v-4h4v-4h4V6h4" />
          <path d="M16 6h4v4" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold tracking-tight text-foreground">
            LEVEL UP
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
        </div>
        {showSubtitle && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
            Training Institute
          </span>
        )}
      </div>
    </Link>
  );
}
