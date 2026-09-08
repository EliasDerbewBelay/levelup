"use client";

import * as React from "react";
import { Instructor } from "@/types/instructor";
import { InstructorCard } from "./instructor-card";
import { Search } from "lucide-react";

interface InstructorDirectoryProps {
  instructors: Instructor[];
}

export function InstructorDirectory({ instructors }: InstructorDirectoryProps) {
  const [department, setDepartment] = React.useState<string>("all");
  const [query, setQuery] = React.useState<string>("");

  const departments = [
    { id: "all", label: "All Departments" },
    { id: "Technology", label: "Technology" },
    { id: "Languages", label: "Languages" },
    { id: "Creative Arts", label: "Creative Arts" },
    { id: "Business", label: "Business & Finance" },
  ];

  const filtered = instructors.filter((inst) => {
    const matchesDept = department === "all" || inst.department === department;
    const matchesQuery =
      query.trim() === "" ||
      inst.name.toLowerCase().includes(query.toLowerCase()) ||
      inst.role.toLowerCase().includes(query.toLowerCase()) ||
      inst.expertise.some((e) => e.toLowerCase().includes(query.toLowerCase())) ||
      inst.coursesTaught.some((c) => c.toLowerCase().includes(query.toLowerCase()));

    return matchesDept && matchesQuery;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-border/80 bg-card p-4">
        {/* Department tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {departments.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => setDepartment(dept.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                department === dept.id
                  ? "bg-foreground text-background font-semibold"
                  : "border border-border/80 bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search faculty or expertise..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>
          Showing {filtered.length} of {instructors.length} faculty members
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((inst) => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No instructors found matching your criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setDepartment("all");
              setQuery("");
            }}
            className="mt-3 rounded-lg bg-foreground px-4 py-1.5 text-xs font-semibold text-background"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
