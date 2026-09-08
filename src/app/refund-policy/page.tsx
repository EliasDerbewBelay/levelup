import type { Metadata } from "next";
import { INSTITUTE_INFO } from "@/data/institute";

export const metadata: Metadata = {
  title: "Tuition & Refund Policy",
  description:
    "Refund policy, cohort withdrawal windows, and transfer policies at Level Up Training Institute.",
};

export default function RefundPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            ACADEMIC POLICIES
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Tuition &amp; Refund Policy
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: March 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Monthly Tuition Structure
            </h2>
            <p>
              To maintain accessibility, tuition at {INSTITUTE_INFO.name} is billed in monthly
              installments. This allows students to progress stage-by-stage through their courses
              without large upfront financial burdens.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Pre-Cohort Drop &amp; Refund Window
            </h2>
            <p>
              Students who have registered for an upcoming cohort and wish to withdraw may request
              a 100% refund of their initial installment, provided the cancellation notice is received
              in writing at least <strong>5 calendar days</strong> prior to the official cohort orientation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Mid-Cohort Withdrawals
            </h2>
            <p>
              Once a cohort commences and the student attends or accesses laboratory workstations,
              tuition paid for that active monthly cycle is non-refundable due to reserved seating and
              lab resource allocation. Future unpaid installment commitments will be canceled upon
              written notice to the registrar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Cohort Transfer &amp; Deferral
            </h2>
            <p>
              In the event of unforeseen personal, medical, or employment scheduling conflicts, students
              may request a one-time cohort deferral to the subsequent month&apos;s intake without forfeiture
              of tuition already paid.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              5. Contacting the Registrar
            </h2>
            <p>
              To submit a withdrawal, transfer, or refund request, please visit the campus admissions
              office in person at Atika Building 3rd Floor, or write directly to{" "}
              <a href={`mailto:${INSTITUTE_INFO.emails.admissions}`} className="text-foreground underline">
                {INSTITUTE_INFO.emails.admissions}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
