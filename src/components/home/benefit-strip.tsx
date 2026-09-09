import * as React from "react";
import { Laptop, Globe, Users, Clock, Award } from "lucide-react";

export const BENEFITS = [
  {
    icon: Laptop,
    title: "Practical Learning",
    description: "Learn through real-world projects.",
    accentColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    icon: Globe,
    title: "Hybrid Education",
    description: "Learn online or physically.",
    accentColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Learn from experienced instructors.",
    accentColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Designed around your schedule.",
    accentColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Receive recognized certificates.",
    accentColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
];

export function BenefitStrip() {
  return (
    <section
      aria-label="Educational Benefits"
      className="relative z-20 border-y border-border/80 bg-card py-6 sm:py-8 shadow-xs transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex items-center gap-3.5 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-110 ${item.accentColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
