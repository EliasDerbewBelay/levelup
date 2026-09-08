import type { Metadata } from "next";
import { INSTITUTE_INFO } from "@/data/institute";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing course enrollment, campus laboratory use, and institutional policies at Level Up Training Institute.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            LEGAL AGREEMENT
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Terms of Service
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: March 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By enrolling in training courses, utilizing campus facilities, or accessing
              our digital portals at {INSTITUTE_INFO.name}, you acknowledge and agree to be bound
              by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Enrollment &amp; Attendance
            </h2>
            <p>
              Registration in any course track requires payment of the initial monthly installment
              prior to the cohort start date. Regular attendance at on-campus lab sessions is required
              to qualify for graduation and certificate issuance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Laboratory Equipment &amp; Campus Facility
            </h2>
            <p>
              Students are granted access to high-performance workstations, media suites, and
              robotics equipment at Atika Building 3rd Floor. Equipment must be operated with due care
              and solely for curriculum-related activities. Any intentional damage or tampering
              may result in immediate suspension and liability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              Course curriculum materials, instructional guides, and proprietary code repositories
              provided by {INSTITUTE_INFO.name} remain the intellectual property of the Institute.
              However, students retain full ownership of their original capstone projects, software
              repositories, and visual designs created during their studies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              5. Governing Law
            </h2>
            <p>
              These Terms shall be construed and governed in accordance with the laws of the Federal
              Democratic Republic of Ethiopia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
