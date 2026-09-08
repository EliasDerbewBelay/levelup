"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { COURSES } from "@/data/courses";

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledCourse = searchParams.get("course") || "";

  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    courseOfInterest: prefilledCourse || "General Inquiry",
    preferredShift: "Evening",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static client confirmation as instructed: "Do not build a backend contact form unless explicitly requested"
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center sm:p-12 space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Inquiry Successfully Sent
        </h3>
        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-foreground">{formData.fullName}</strong>. Your consultation request for{" "}
          <strong className="text-foreground">{formData.courseOfInterest}</strong> has been logged. Our admissions team at Tulu Dimtu Square will reach out via{" "}
          <strong className="text-foreground">{formData.phone}</strong>.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                courseOfInterest: "General Inquiry",
                preferredShift: "Evening",
                message: "",
              });
            }}
            className="rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <div className="space-y-1 pb-2">
        <h3 className="text-lg font-bold text-foreground">
          Send an Admissions Inquiry
        </h3>
        <p className="text-xs text-muted-foreground">
          Our team typically responds within 2 business hours during campus hours.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Abebe Kebede"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-foreground">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="0911 00 00 00"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-foreground">
          Email Address (Optional)
        </label>
        <input
          type="email"
          placeholder="abebe@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-foreground">
            Course of Interest
          </label>
          <select
            value={formData.courseOfInterest}
            onChange={(e) =>
              setFormData({ ...formData, courseOfInterest: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="General Inquiry">General Admissions Inquiry</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-foreground">
            Preferred Shift
          </label>
          <select
            value={formData.preferredShift}
            onChange={(e) =>
              setFormData({ ...formData, preferredShift: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="Evening">Weekday Evening (5:30 PM - 8:30 PM)</option>
            <option value="Weekend">Weekend Intensive (Saturday / Sunday)</option>
            <option value="Morning">Weekday Morning (8:30 AM - 11:30 AM)</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-foreground">
          Your Question or Background
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your learning goals, current experience level, or any questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
      >
        <Send className="h-3.5 w-3.5" />
        <span>Submit Admissions Inquiry</span>
      </button>

      <p className="text-[11px] text-muted-foreground text-center pt-1">
        We respect your privacy. Your information is strictly used for admissions counseling.
      </p>
    </form>
  );
}
