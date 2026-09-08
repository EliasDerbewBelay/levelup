"use client";

import * as React from "react";
import { FAQS } from "@/data/faq";
import { Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQView() {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "Courses", label: "Courses & Schedules" },
    { id: "Learning Modes", label: "Hybrid Mode" },
    { id: "Location", label: "Campus & Labs" },
    { id: "Certificates", label: "Certificates" },
    { id: "Enrollment", label: "Enrollment" },
    { id: "Fees", label: "Tuition Fees" },
  ];

  const filtered = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesQuery =
      query.trim() === "" ||
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative max-w-xl">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search questions by keyword (e.g., hybrid, certificate, laptop, fees)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand shadow-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-foreground text-background font-semibold"
                : "border border-border/80 bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>Showing {filtered.length} answers</span>
      </div>

      {/* Collapsible Accordion */}
      {filtered.length > 0 ? (
        <div className="rounded-xl border border-border/80 bg-card p-4 sm:p-6">
          <Accordion className="w-full">
            {filtered.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-semibold text-foreground py-4 text-sm sm:text-base hover:no-underline">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-brand mt-0.5">
                      Q:
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground pl-7 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No questions found matching your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("all");
            }}
            className="mt-3 rounded-lg bg-foreground px-4 py-1.5 text-xs font-semibold text-background"
          >
            Show All Questions
          </button>
        </div>
      )}
    </div>
  );
}
