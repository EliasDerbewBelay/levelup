"use client";

import * as React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsPageView() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "All Stories" },
    { id: "technology", label: "Technology" },
    { id: "creative", label: "Creative Arts" },
    { id: "business", label: "Business & Accounting" },
    { id: "languages", label: "Languages" },
  ];

  const filtered = TESTIMONIALS.filter(
    (t) => selectedCategory === "all" || t.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Category Pills */}
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
        <span>Showing {filtered.length} verified student reviews</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((test) => (
          <TestimonialCard key={test.id} testimonial={test} />
        ))}
      </div>
    </div>
  );
}
