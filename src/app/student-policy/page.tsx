import type { Metadata } from "next";
import { INSTITUTE_INFO } from "@/data/institute";

export const metadata: Metadata = {
  title: "Student Code of Conduct & Lab Policy",
  description:
    "Student code of conduct, academic integrity standards, and lab safety regulations at Level Up Training Institute.",
};

export default function StudentPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            CAMPUS REGULATIONS
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Student Code of Conduct &amp; Lab Policy
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: March 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Professionalism &amp; Respect
            </h2>
            <p>
              {INSTITUTE_INFO.name} upholds a collaborative, inclusive, and harassment-free
              learning environment. Every learner, instructor, and visitor must be treated with
              dignity regardless of gender, language, background, or technical experience level.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Academic Integrity &amp; Original Work
            </h2>
            <p>
              While code collaboration, open-source usage, and discussion are encouraged, submitted
              capstones and graded assignments must represent the student&apos;s genuine understanding.
              Unattributed copying or submitting another individual&apos;s project as one&apos;s own
              is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Computer Lab &amp; Hardware Safety
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>No food or uncovered beverages are permitted at computer or electronics workstations.</li>
              <li>Installation of unauthorized games, mining utilities, or malicious tools is strictly barred.</li>
              <li>Respect hardware peripherals: monitors, soldering irons, microcontrollers, and audio equipment.</li>
              <li>Leave your workstation tidy and sign out of personal accounts upon completion.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Attendance &amp; Certificate Eligibility
            </h2>
            <p>
              To qualify for the official Certificate of Completion and digital verification listing,
              students must achieve at least <strong>80% lab session attendance</strong> and successfully
              pass their track&apos;s capstone project defense.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
