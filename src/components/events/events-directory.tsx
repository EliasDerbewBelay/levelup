"use client";

import * as React from "react";
import { EventItem } from "@/types/event";
import { EventCard } from "./event-card";

interface EventsDirectoryProps {
  events: EventItem[];
}

export function EventsDirectory({ events }: EventsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "Workshop", label: "Workshops" },
    { id: "Bootcamp", label: "Bootcamps" },
    { id: "Seminar", label: "Seminars" },
    { id: "Open House", label: "Open Houses" },
    { id: "Graduation", label: "Showcase & Demo" },
  ];

  const filtered = events.filter(
    (e) => selectedCategory === "all" || e.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedCategory === cat.id
                ? "bg-foreground text-background font-semibold"
                : "border border-border/80 bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>
          Showing {filtered.length} of {events.length} campus events
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No events scheduled under this category right now.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className="mt-3 rounded-lg bg-foreground px-4 py-1.5 text-xs font-semibold text-background"
          >
            Show All Events
          </button>
        </div>
      )}
    </div>
  );
}
