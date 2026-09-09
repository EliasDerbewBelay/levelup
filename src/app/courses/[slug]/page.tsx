import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Award,
  Phone,
} from "lucide-react";
import { COURSES } from "@/data/courses";
import { INSTITUTE_INFO } from "@/data/institute";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} — Course Syllabus & Schedule`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="border-b border-border/60 bg-secondary/30 py-3 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-foreground transition-colors">
              Courses
            </Link>
            <span>/</span>
            <Link
              href={`/courses?category=${course.category}`}
              className="hover:text-foreground transition-colors capitalize"
            >
              {course.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
              {course.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Course Hero Section */}
      <section className="relative border-b border-border/60 bg-card py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider text-brand">
                  {course.categoryLabel}
                </Badge>
                {course.badge && (
                  <Badge variant="secondary" className="font-mono text-xs border border-brand/20 text-brand">
                    {course.badge}
                  </Badge>
                )}
                <span className="text-xs font-mono text-muted-foreground">
                  Level: {course.level}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                {course.title}
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {course.description}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 font-mono text-xs">
                <div className="rounded-lg border border-border/80 bg-secondary/50 p-3">
                  <span className="text-muted-foreground block text-[10px] uppercase">
                    Duration
                  </span>
                  <strong className="text-sm font-semibold text-foreground">
                    {course.duration}
                  </strong>
                </div>
                <div className="rounded-lg border border-border/80 bg-secondary/50 p-3">
                  <span className="text-muted-foreground block text-[10px] uppercase">
                    Format
                  </span>
                  <strong className="text-sm font-semibold text-foreground">
                    {course.deliveryMode}
                  </strong>
                </div>
                <div className="rounded-lg border border-border/80 bg-secondary/50 p-3">
                  <span className="text-muted-foreground block text-[10px] uppercase">
                    Commitment
                  </span>
                  <strong className="text-sm font-semibold text-foreground">
                    {course.hoursPerWeek.split("(")[0]}
                  </strong>
                </div>
                <div className="rounded-lg border border-border/80 bg-secondary/50 p-3">
                  <span className="text-muted-foreground block text-[10px] uppercase">
                    Tuition
                  </span>
                  <strong className="text-sm font-semibold text-brand">
                    {course.price}
                  </strong>
                </div>
              </div>
            </div>

            {/* Quick Action Card (Informational CTA) */}
            <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-secondary/30 p-6 space-y-5">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Admissions Status
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Active Cohort Enrollment
                  </span>
                </div>
              </div>

              <div className="space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span><strong>Schedule:</strong> {course.schedule}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span><strong>Location:</strong> Atika Building 3rd Floor, Tulu Dimtu</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span><strong>Certification:</strong> Official Verifiable Credential</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-slate-950 shadow-sm shadow-amber-500/20 hover:bg-amber-600 active:scale-95 transition-all"
                >
                  <span>Ask About This Course</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href={`tel:${INSTITUTE_INFO.phones[0].raw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-brand" />
                  <span>Call {INSTITUTE_INFO.phones[0].display}</span>
                </a>

                <a
                  href={INSTITUTE_INFO.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-sky-500" />
                  <span>Inquire on Telegram</span>
                </a>
              </div>

              <p className="text-[11px] text-muted-foreground text-center pt-1">
                Admissions counselors available Monday – Saturday 8:00 AM – 8:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Learning Outcomes */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  What You&apos;ll Learn
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Target competencies achieved by every graduating student in this track.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-card p-4 text-xs"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-foreground leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Structure / Syllabus Accordion */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      Course Curriculum &amp; Modules
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {course.modules.length} structured learning modules with dedicated lab milestones.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {course.duration} Total
                  </span>
                </div>

                <div className="mt-6">
                  <Accordion className="rounded-xl border border-border/80 bg-card px-4">
                    {course.modules.map((mod, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left font-semibold text-foreground py-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="font-mono text-xs text-brand">
                              {mod.duration}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-muted-foreground pb-4">
                          <p className="mb-3">{mod.description}</p>
                          <div className="rounded-lg border border-border/60 bg-secondary/50 p-3">
                            <span className="font-mono text-[10px] uppercase font-bold text-foreground block mb-2">
                              Core Topics Covered:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px]">
                              {mod.topics.map((t) => (
                                <div key={t} className="flex items-center gap-1.5">
                                  <span className="text-brand">›</span>
                                  <span>{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Prerequisites
                </h2>
                <div className="mt-4 space-y-2">
                  {course.prerequisites.map((prereq, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Section */}
              <div className="rounded-xl border border-border/80 bg-card p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                  LEAD INSTRUCTOR
                </span>
                <div className="mt-3 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-mono text-sm font-bold text-foreground">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {course.instructor}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {course.instructorTitle}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Leads curriculum design, live demonstrations, and portfolio reviews for this course at Level Up Training Institute.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-border/80 bg-card p-6 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  Hybrid Learning Format
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This course is conducted in our computer labs at Atika Building, 3rd floor.
                  All software tools, compilers, and workstations are provided on site.
                </p>

                <div className="border-t border-border/60 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Workstation:</span>
                    <span className="font-medium text-foreground">Dual-Monitor Lab Pod</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lab Access:</span>
                    <span className="font-medium text-foreground">Full Campus Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Internet:</span>
                    <span className="font-medium text-foreground">High-Speed Fiber</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certificate:</span>
                    <span className="font-medium text-foreground">Verifiable Online</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/80 bg-secondary/40 p-6 space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Questions regarding this course?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our admissions counselors are on site at Tulu Dimtu Square to assist with syllabus inquiries, prerequisite guidance, and registration schedules.
                </p>
                <Link
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <span>Contact Admissions Office</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
