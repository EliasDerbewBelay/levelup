import Link from "next/link";
import Image from "next/image";
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
      {/* Official Level Up Badge Logo */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10">
        <Image
          src="/logo/sticker.webp"
          alt="Level Up Training Institute Logo"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            LEVEL UP
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
        </div>
        {showSubtitle && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]">
            Training Institute
          </span>
        )}
      </div>
    </Link>
  );
}
