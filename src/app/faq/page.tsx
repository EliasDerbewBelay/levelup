import type { Metadata } from "next";
import Link from "next/link";
import { FAQView } from "@/components/faq/faq-view";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Got questions about Level Up Training Institute? Learn about hybrid courses, campus location at Tulu Dimtu, lab equipment, and certificates.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              HELP &amp; INQUIRIES
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Answers regarding our hybrid training approach, Tulu Dimtu campus access,
              course prerequisites, and certificate verification.
            </p>
          </div>
        </div>
      </section>

      {/* Main Accordion View */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQView />

          <div className="mt-16 rounded-xl border border-border/80 bg-secondary/30 p-6 text-center space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Have a specific question not covered here?
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Our academic counselors are available on site at Atika Building or via phone and Telegram.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-foreground px-4 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
              >
                Contact Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
