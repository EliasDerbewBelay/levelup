"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare, MapPin } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { INSTITUTE_INFO } from "@/data/institute";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Adjust state during render when pathname changes
  const [prevPath, setPrevPath] = React.useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setIsOpen(false);
  }

  // Prevent background scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-14 z-40 bg-background/80 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 z-50 flex h-[calc(100vh-3.5rem)] flex-col justify-between border-b border-border bg-background p-6 transition-all duration-300 ease-in-out sm:px-8",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-1">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Navigation
          </p>
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
                )}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/certificate-verification"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg border border-border/80 px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Verify a Certificate</span>
              <span className="font-mono text-xs text-brand">PORTAL →</span>
            </Link>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="space-y-4 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Appearance</span>
            <ThemeToggle showText />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${INSTITUTE_INFO.phones[0].raw}`}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2 text-xs font-medium text-foreground hover:bg-muted"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span>Call Us</span>
            </a>
            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2 text-xs font-medium text-foreground hover:bg-muted"
            >
              <MessageSquare className="h-3.5 w-3.5 text-sky-500" />
              <span>Telegram</span>
            </a>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-foreground py-2.5 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <span>Get Started / Inquire</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
            <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-brand" />
            <span>{INSTITUTE_INFO.address.full}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
