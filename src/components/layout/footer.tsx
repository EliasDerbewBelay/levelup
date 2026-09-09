import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock, Send } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { INSTITUTE_INFO } from "@/data/institute";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/80 bg-card text-foreground transition-colors">
      {/* Top Banner / Quick Connect Strip */}
      <div className="border-b border-border/60 bg-soft-background/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="space-y-1">
            <h3 className="text-sm font-bold tracking-tight text-foreground">
              Visit Our Campus at Tulu Dimtu Square
            </h3>
            <p className="text-xs text-muted-foreground">
              {INSTITUTE_INFO.address.full} · Open {INSTITUTE_INFO.hours.days} {INSTITUTE_INFO.hours.time}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={INSTITUTE_INFO.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Send className="h-3.5 w-3.5 text-sky-500" />
              <span>Telegram: {INSTITUTE_INFO.telegram.handle}</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <a
              href={`tel:${INSTITUTE_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1e3a8a] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#1e40af] dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>{INSTITUTE_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Brand & Institution Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Level Up Training Institute is an industry-aligned practical skills center in Addis Ababa.
              We bridge classroom education with workplace execution across software engineering, creative media, business accounting, and languages.
            </p>

            <div className="space-y-2 pt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-brand" />
                <span>Monday – Saturday: 8:00 AM – 8:00 PM EAT</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                <span>{INSTITUTE_INFO.address.building}, {INSTITUTE_INFO.address.street}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={INSTITUTE_INFO.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-brand transition-colors"
              >
                <Send className="h-3.5 w-3.5 text-sky-500" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-brand transition-colors font-bold text-xs"
              >
                f
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-brand transition-colors font-mono font-bold text-[11px]"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-brand transition-colors text-red-500 text-xs"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Column 2: Programs & Tracks */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/courses?category=technology" className="hover:text-foreground transition-colors">
                  Core Technology
                </Link>
              </li>
              <li>
                <Link href="/courses?category=languages" className="hover:text-foreground transition-colors">
                  Languages &amp; Communication
                </Link>
              </li>
              <li>
                <Link href="/courses?category=creative" className="hover:text-foreground transition-colors">
                  Creative Arts &amp; Media
                </Link>
              </li>
              <li>
                <Link href="/courses?category=business" className="hover:text-foreground transition-colors">
                  Business &amp; Finance
                </Link>
              </li>
              <li>
                <Link href="/courses" className="font-semibold text-brand hover:underline">
                  All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & About */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
              About &amp; Resources
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Level Up
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-foreground transition-colors">
                  Mission &amp; Core Values
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-foreground transition-colors">
                  Meet Our Instructors
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-foreground transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Institute Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-foreground transition-colors">
                  Student Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground transition-colors">
                  Campus &amp; Labs Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/certificate-verification" className="font-semibold text-brand hover:underline">
                  Certificate Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Admissions */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
              Contact Admissions
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div>
                <span className="block font-semibold text-foreground">Direct Lines:</span>
                <div className="space-y-1 pt-0.5 font-mono">
                  {INSTITUTE_INFO.phones.map((p) => (
                    <a key={p.raw} href={`tel:${p.raw}`} className="block hover:text-foreground transition-colors">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-1">
                <span className="block font-semibold text-foreground">Email:</span>
                <a href={`mailto:${INSTITUTE_INFO.emails.general}`} className="block hover:text-foreground transition-colors">
                  {INSTITUTE_INFO.emails.general}
                </a>
                <a href={`mailto:${INSTITUTE_INFO.emails.admissions}`} className="block hover:text-foreground transition-colors">
                  {INSTITUTE_INFO.emails.admissions}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                >
                  <span>Admissions Contact Form →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Theme Switcher */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>© {currentYear} {INSTITUTE_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
            <span>·</span>
            <Link href="/student-policy" className="hover:text-foreground transition-colors">
              Student Policy
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
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
