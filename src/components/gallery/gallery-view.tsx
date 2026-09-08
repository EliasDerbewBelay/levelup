"use client";

import * as React from "react";
import { GalleryItem } from "@/types/gallery";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryViewProps {
  items: GalleryItem[];
}

export function GalleryView({ items }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [activeModalItem, setActiveModalItem] = React.useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "Classroom", label: "Labs & Classrooms" },
    { id: "Training", label: "Hands-On Training" },
    { id: "Students", label: "Student Life" },
    { id: "Events", label: "Campus Events" },
    { id: "Institution", label: "Campus Hub" },
  ];

  const filtered = items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Close modal on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="space-y-8">
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
        <span>Showing {filtered.length} gallery spaces</span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/80 bg-card transition-all duration-200 hover:border-foreground/40 hover:shadow-md"
          >
            {/* Visual Canvas Card */}
            <div
              className={cn(
                "relative flex h-52 w-full flex-col justify-between p-5 bg-gradient-to-br transition-transform duration-300 group-hover:scale-[1.02]",
                item.accentColor || "from-secondary to-muted"
              )}
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="font-mono text-[10px] bg-background/80 backdrop-blur-sm border border-border"
                >
                  {item.category}
                </Badge>
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Technical Blueprint Graphics Placeholder */}
              <div className="font-mono text-[11px] text-muted-foreground/80 opacity-70">
                <div className="border-t border-border/40 pt-2 flex items-center justify-between">
                  <span>FACILITY SPEC // 2026</span>
                  <span>ATIKA BLDG · 3F</span>
                </div>
              </div>
            </div>

            {/* Caption Body */}
            <div className="p-5 border-t border-border/60">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <MapPin className="h-3 w-3 text-brand" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md transition-all"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-xs">
                  {activeModalItem.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {activeModalItem.location}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className={cn(
                "h-64 sm:h-80 w-full rounded-xl flex items-center justify-center bg-gradient-to-br p-8 text-center",
                activeModalItem.accentColor || "from-secondary to-muted"
              )}
            >
              <div className="max-w-md space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block">
                  Level Up Campus Facility
                </span>
                <h4 className="text-xl font-bold text-foreground">
                  {activeModalItem.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  Ready for high-resolution campus photography under /public/images/gallery
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-foreground leading-relaxed">
                {activeModalItem.description}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                <span>{activeModalItem.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
