"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { Course } from "@/types/course";
import { CourseCard } from "./course-card";

interface CourseCatalogProps {
  courses: Course[];
}

export function CourseCatalog({ courses }: CourseCatalogProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    categoryParam || "all"
  );
  const [selectedLevel, setSelectedLevel] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>(" ");

  // Synchronize during render when searchParams changes
  const [prevCategoryParam, setPrevCategoryParam] = React.useState(categoryParam);
  if (prevCategoryParam !== categoryParam) {
    setPrevCategoryParam(categoryParam);
    setSelectedCategory(categoryParam || "all");
  }

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "technology", label: "Technology" },
    { id: "languages", label: "Languages" },
    { id: "creative", label: "Creative Arts" },
    { id: "business", label: "Business & Finance" },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;

    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      course.title.toLowerCase().includes(query) ||
      course.shortDescription.toLowerCase().includes(query) ||
      course.categoryLabel.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query);

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filters Bar */}
      <div className="rounded-xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses by keyword, topic, or instructor..."
              value={searchQuery.trim() === "" ? "" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {/* Level Filter Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Filter by experience level"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
            </select>

            {(searchQuery.trim() || selectedCategory !== "all" || selectedLevel !== "all") && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                title="Reset filters"
              >
                <X className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-3">
          <span className="text-[11px] font-mono text-muted-foreground mr-1 hidden sm:inline">
            Category:
          </span>
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
      </div>

      {/* Course Count Display */}
      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>
          Showing {filteredCourses.length} of {courses.length} courses
        </span>
        {selectedCategory !== "all" && (
          <span className="capitalize">Filtered by: {selectedCategory}</span>
        )}
      </div>

      {/* Grid of Results */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border/80 p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No courses found matching your criteria
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Try adjusting your search terms or clearing your category filters.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
