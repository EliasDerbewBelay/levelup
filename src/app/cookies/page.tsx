import type { Metadata } from "next";
import { INSTITUTE_INFO } from "@/data/institute";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information about how cookies and local preferences (e.g., theme selection) are utilized on the Level Up website.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            TRANSPARENCY &amp; PRIVACY
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Cookie &amp; Local Storage Policy
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: March 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. What Are Cookies &amp; Local Storage?
            </h2>
            <p>
              Cookies and local browser storage are small text files stored on your computer or mobile device
              when you visit websites. They help remember your preferences and ensure website functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. How We Use Them
            </h2>
            <p>On {INSTITUTE_INFO.name}, we only use essential storage for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Theme Preference:</strong> We store your chosen theme (Light, Dark, or System) in local storage
                so that pages do not flash when you navigate.
              </li>
              <li>
                <strong>Essential Navigation:</strong> Maintaining interface states such as active filter views and collapsible panels.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. No Invasive Tracking
            </h2>
            <p>
              We do NOT deploy invasive third-party cross-site advertising trackers or sell browsing data.
              Our site is built to be fast, minimal, and respectful of your digital privacy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Managing Preferences
            </h2>
            <p>
              You can adjust or clear cookies and local storage directly within your browser settings
              at any time without restricting your access to our public course catalog.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
