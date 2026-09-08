import { INSTITUTE_INFO } from "@/data/institute";

export function Statistics() {
  return (
    <section
      aria-label="Institute Statistics"
      className="border-b border-border/60 bg-secondary/30 py-12 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {INSTITUTE_INFO.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between rounded-xl border border-border/70 bg-card p-6 transition-all hover:border-foreground/20 ${
                idx === 0 ? "sm:col-span-1" : ""
              }`}
            >
              <div className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2">
                <div className="text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
