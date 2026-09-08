import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EVENTS } from "@/data/events";
import { EventCard } from "@/components/events/event-card";

export function UpcomingEvents() {
  const events = EVENTS.slice(0, 3);

  return (
    <section className="border-b border-border/60 bg-secondary/15 py-20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              06 / WORKSHOPS & SEMINARS
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Upcoming Campus Events
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Open masterclasses, hands-on tech tasters, and cohort demo days hosted at our Tulu Dimtu campus.
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand transition-colors"
          >
            <span>View all events</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>
    </section>
  );
}
