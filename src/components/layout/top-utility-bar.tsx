import * as React from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";

export function TopUtilityBar() {
  return (
    <aside
      aria-label="Institute Information and Hours"
      className="relative z-50 w-full border-b border-white/10 bg-[#1e3a8a] text-white/90 dark:border-border/60 dark:bg-[#080d1a] dark:text-slate-300"
    >
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
        {/* Left: Contact & Hours */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${INSTITUTE_INFO.phones[0].raw}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <Phone className="h-3 w-3 text-amber-400" />
            <span className="font-mono tracking-tight font-medium">{INSTITUTE_INFO.phones[0].display}</span>
          </a>

          <a
            href={`mailto:${INSTITUTE_INFO.emails.general}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white md:inline-flex"
          >
            <Mail className="h-3 w-3 text-amber-400" />
            <span>{INSTITUTE_INFO.emails.general}</span>
          </a>

          <div className="hidden items-center gap-1.5 text-white/80 dark:text-slate-400 lg:inline-flex">
            <Clock className="h-3 w-3 text-amber-400" />
            <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
          </div>
        </div>

        {/* Right: Social & Campus Quicklinks */}
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-white/70 dark:text-slate-400 sm:inline">
            Follow Us:
          </span>

          <div className="flex items-center gap-2">
            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Level Up Telegram Channel"
              className="inline-flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-white/10 hover:text-white"
              title="Telegram: @leveluptraining"
            >
              <Send className="h-3 w-3 text-sky-300" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Level Up Facebook Page"
              className="inline-flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-white/10 hover:text-white"
              title="Facebook"
            >
              <span className="font-bold text-[11px] leading-none">f</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Level Up LinkedIn Page"
              className="inline-flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-white/10 hover:text-white"
              title="LinkedIn"
            >
              <span className="font-bold text-[10px] leading-none font-mono">in</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Level Up YouTube Channel"
              className="inline-flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-white/10 hover:text-white"
              title="YouTube"
            >
              <span className="font-bold text-[11px] leading-none text-red-400">▶</span>
            </a>
          </div>

          <span className="hidden h-3 w-px bg-white/20 dark:bg-slate-700 sm:inline-block" />

          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-amber-300 sm:inline">
            Tulu Dimtu Campus
          </span>
        </div>
      </div>
    </aside>
  );
}
