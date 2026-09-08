import Link from "next/link";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { EventItem } from "@/types/event";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: EventItem;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 text-card-foreground transition-all duration-200 hover:border-foreground/30 hover:shadow-sm",
        className
      )}
    >
      <div>
        {/* Date & Category */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-secondary px-3 py-2 text-center">
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider">
                {event.formattedDate.month}
              </span>
              <span className="font-mono text-xl font-extrabold text-foreground leading-none">
                {event.formattedDate.day}
              </span>
            </div>

            <div>
              <Badge variant="outline" className="font-mono text-[10px]">
                {event.category}
              </Badge>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>

          <span
            className={cn(
              "font-mono text-[11px] font-medium px-2 py-0.5 rounded",
              event.status === "Registration Open"
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                : "bg-muted text-muted-foreground"
            )}
          >
            {event.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
          {event.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {event.shortDescription}
        </p>
      </div>

      {/* Meta Specs */}
      <div className="mt-5 border-t border-border/60 pt-4 space-y-2">
        <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-[11px]">
            <Users className="h-3 w-3" />
            <span>{event.capacity}</span>
          </div>

          <Link
            href="/contact?subject=event-registration"
            className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-brand transition-colors"
          >
            <span>RSVP / Inquire</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
