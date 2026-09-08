import type { Metadata } from "next";
import { EVENTS } from "@/data/events";
import { EventsDirectory } from "@/components/events/events-directory";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "Join campus open houses, tech masterclasses, seminars, and cohort demo days at Level Up Training Institute in Tulu Dimtu, Addis Ababa.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              CAMPUS SCHEDULE
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Workshops &amp; Seminars
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Interactive weekend bootcamps, community tech tasters, and cohort demo days
              hosted at our Atika Building facility in Tulu Dimtu Square.
            </p>
          </div>
        </div>
      </section>

      {/* Main Events Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsDirectory events={EVENTS} />
        </div>
      </section>
    </div>
  );
}
