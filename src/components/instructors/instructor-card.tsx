import { Instructor } from "@/types/instructor";
import { cn } from "@/lib/utils";

interface InstructorCardProps {
  instructor: Instructor;
  className?: string;
}

export function InstructorCard({ instructor, className }: InstructorCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 text-card-foreground transition-all duration-200 hover:border-foreground/30 hover:shadow-sm",
        className
      )}
    >
      <div>
        {/* Avatar & Department */}
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-mono text-base font-bold text-foreground transition-colors group-hover:border-foreground/30 group-hover:bg-muted">
            {instructor.initials}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-semibold text-foreground">
              {instructor.name}
            </h3>
            <p className="truncate text-xs text-muted-foreground">
              {instructor.role}
            </p>
            <span className="mt-1 inline-block rounded border border-border/60 bg-secondary/70 px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground uppercase">
              {instructor.department}
            </span>
          </div>
        </div>

        {/* Biography */}
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          {instructor.bio}
        </p>
      </div>

      {/* Expertise & Courses */}
      <div className="mt-5 border-t border-border/60 pt-4">
        <div className="flex flex-wrap gap-1">
          {instructor.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        {instructor.coursesTaught.length > 0 && (
          <div className="mt-3 text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground">Leads:</span>{" "}
            {instructor.coursesTaught.join(", ")}
          </div>
        )}
      </div>
    </article>
  );
}
