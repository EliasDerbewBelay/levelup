import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { INSTITUTE_INFO } from "@/data/institute";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-secondary/40 text-foreground transition-colors">
      {/* Top Banner / Quick Connect */}
      <div className="border-b border-border/60 bg-background/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold tracking-tight">
              Visit Our Campus at Tulu Dimtu Square
            </h3>
            <p className="text-xs text-muted-foreground">
              {INSTITUTE_INFO.address.full} · Open Monday – Saturday 8:00 AM – 8:00 PM
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <MessageSquare className="h-3.5 w-3.5 text-sky-500" />
              <span>Telegram Community</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <a
              href={`tel:${INSTITUTE_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span>{INSTITUTE_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="col-span-2 space-y-4">
            <Logo />
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Level Up Training Institute is a modern practical skills center in
              Addis Ababa. We provide industry-aligned hybrid education across
              software engineering, multilingual communication, creative arts, and
              corporate accounting.
            </p>

            <div className="space-y-2 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                <a
                  href={`mailto:${INSTITUTE_INFO.emails.admissions}`}
                  className="hover:text-foreground transition-colors"
                >
                  {INSTITUTE_INFO.emails.admissions}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                <span>
                  {INSTITUTE_INFO.phones.map((p) => p.display).join(" · ")}
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span>{INSTITUTE_INFO.address.building}, {INSTITUTE_INFO.address.street}</span>
              </div>
            </div>
          </div>

          {/* Columns 2-5: Dynamic Section Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground inline-flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright, Verification & Theme Switcher */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>© {currentYear} {INSTITUTE_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Tulu Dimtu Square, Addis Ababa</span>
            <span className="hidden sm:inline">·</span>
            <Link
              href="/certificate-verification"
              className="text-brand hover:underline"
            >
              Verify Certificate
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
