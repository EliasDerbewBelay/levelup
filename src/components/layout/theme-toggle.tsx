"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className, showText = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground opacity-50",
          className
        )}
        aria-hidden="true"
      >
        <Sun className="h-4 w-4" />
      </div>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getLabel = () => {
    if (theme === "light") return "Light Theme";
    if (theme === "dark") return "Dark Theme";
    return "System Theme";
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        "group relative inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className
      )}
      aria-label={`Switch theme (current: ${getLabel()})`}
      title={`Current: ${getLabel()} (Click to toggle)`}
    >
      {theme === "light" && (
        <Sun className="h-3.5 w-3.5 text-amber-500 transition-transform duration-200 group-hover:rotate-45" />
      )}
      {theme === "dark" && (
        <Moon className="h-3.5 w-3.5 text-blue-400 transition-transform duration-200 group-hover:-rotate-12" />
      )}
      {theme === "system" && (
        <Laptop className="h-3.5 w-3.5 text-muted-foreground" />
      )}

      {showText && <span className="capitalize">{theme || "Theme"}</span>}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
