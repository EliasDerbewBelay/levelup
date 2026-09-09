import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Users2,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Level Up Training Institute in Tulu Dimtu, Addis Ababa. Our mission, core values, hybrid learning philosophy, and modern campus facilities.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Practical Excellence",
      icon: Code2,
      description:
        "We reject passive lecture marathons. Every concept is tested immediately through hands-on laboratory exercises, code commits, creative assets, or ledger reconciliation.",
    },
    {
      title: "Accessibility",
      icon: Users2,
      description:
        "Quality technical education must not be an exclusive luxury. We offer transparent installment tuition, multilingual tracks (English, Amharic, Afaan Oromoo), and flexible evening/weekend shifts.",
    },
    {
      title: "Innovation",
      icon: Sparkles,
      description:
        "We teach the tools of today and tomorrow: Next.js, Python 3, modern Adobe suites, and industry-standard accounting engines matching commercial enterprise requirements.",
    },
    {
      title: "Student Success",
      icon: CheckCircle2,
      description:
        "Graduation is just the beginning. We emphasize practical capstone portfolios, job-ready communication coaching, and recognized completion certificates.",
    },
  ];

  const comparisons = [
    {
      topic: "Curriculum Focus",
      traditional: "Abstract textbook theory & memorization for written exams",
      levelup: "Hands-on projects, real-world repositories & tangible capstone artifacts",
    },
    {
      topic: "Instructor Profile",
      traditional: "Academic lecturers disconnected from current production workflows",
      levelup: "Active practitioners, lead developers, creative directors & senior accountants",
    },
    {
      topic: "Schedule Flexibility",
      traditional: "Rigid full-time hours inconvenient for working adults",
      levelup: "Hybrid evening (5:30 PM - 8:30 PM) and intensive weekend cohort options",
    },
    {
      topic: "Outcome & Certification",
      traditional: "Paper-only diploma with no proof of actual capability",
      levelup: "Public portfolio, GitHub projects, and verified practical competence",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
              <span>EST. {INSTITUTE_INFO.establishedYear}</span>
              <span>·</span>
              <span className="text-foreground">ADDIS ABABA, ETHIOPIA</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Bridging the Gap Between Theory &amp; Industry Execution
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Level Up Training Institute was founded in 2026 at Tulu Dimtu Square to
              redefine how technical, linguistic, creative, and business skills are
              taught in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Editorial */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl border border-border/80 bg-card p-8 sm:p-10">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                OUR MISSION
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Empowering learners to build tangible careers through practical mastery
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our mission is to equip university students, working professionals, and ambitious
                youth with production-ready skills. We replace rote memorization with intensive
                lab practice, peer code review, and commercial-grade projects that prepare
                graduates for both Ethiopian enterprises and international opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-8 sm:p-10">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                OUR VISION
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                To become Ethiopia&apos;s foremost center for modern technical excellence
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We envision an ecosystem where every graduate leaves with proven competence,
                not just a credential. A future where local software developers, creative artists,
                multilingual communicators, and financial specialists are recognized for
                the standard of their output and their disciplined work ethic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="border-b border-border/60 bg-secondary/15 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              OUR FOUNDATIONS
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Four Core Values
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              These principles guide our curriculum design, faculty selection, and student mentorship.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 transition-all hover:border-foreground/30 hover:shadow-sm"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional vs Level Up Comparison */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              PEDAGOGICAL SHIFT
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Level Up Differs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We engineered our training philosophy specifically to fix what traditional classroom models miss.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border bg-secondary/50 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 px-4">Dimension</th>
                  <th className="py-3 px-4">Traditional Schooling</th>
                  <th className="py-3 px-4 text-brand font-bold">Level Up Training Institute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisons.map((row) => (
                  <tr key={row.topic} className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground whitespace-nowrap">
                      {row.topic}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-4 font-medium text-foreground bg-brand/[0.02]">
                      {row.levelup}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Campus Facility & Location */}
      <section className="border-b border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                CAMPUS &amp; LOCATION
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Modern Facilities at Tulu Dimtu Square
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our campus is strategically situated at Atika Building on the 3rd floor,
                opposite Green Primary School and near Sabeh Cafe. We designed our
                spaces with ample natural lighting, high-speed fiber internet, and dedicated
                audio/visual workstations.
              </p>

              <div className="space-y-3 text-xs pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-foreground">
                    {INSTITUTE_INFO.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-brand" />
                  <span className="text-foreground">
                    Open {INSTITUTE_INFO.hours.days}: {INSTITUTE_INFO.hours.time}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand" />
                  <span className="text-foreground">
                    {INSTITUTE_INFO.phones.map((p) => p.display).join(" · ")}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-foreground px-5 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
                >
                  <span>Get Directions &amp; Contact</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  View Facility Gallery
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-mono text-xs font-bold text-foreground">
                    CAMPUS SPECIFICATIONS
                  </span>
                  <Badge variant="outline" className="font-mono text-[10px]">
                    2026 STANDARD
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="rounded-lg border border-border/60 bg-secondary/40 p-4">
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      Computer Labs
                    </span>
                    <strong className="text-sm font-semibold text-foreground">
                      24 Dual-Monitor Pods
                    </strong>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-secondary/40 p-4">
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      Media Suite
                    </span>
                    <strong className="text-sm font-semibold text-foreground">
                      4K Video &amp; Sound Lab
                    </strong>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-secondary/40 p-4">
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      Hardware Prototyping
                    </span>
                    <strong className="text-sm font-semibold text-foreground">
                      Robotics Bench &amp; Kits
                    </strong>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-secondary/40 p-4">
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      Internet Backbone
                    </span>
                    <strong className="text-sm font-semibold text-foreground">
                      Dedicated Fiber Uplink
                    </strong>
                  </div>
                </div>

                <div className="rounded-lg border border-border/60 bg-muted/40 p-3.5 text-[11px] text-muted-foreground leading-relaxed">
                  ✦ All students receive unlimited access to campus lab workstations during scheduled cohort hours and open practice slots.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start Your Journey at Level Up
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Explore our hands-on course catalog or schedule an admissions tour today.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/courses"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              Speak to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
