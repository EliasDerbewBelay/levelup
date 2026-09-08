import type { Metadata } from "next";
import { INSTITUTE_INFO } from "@/data/institute";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Level Up Training Institute. How we collect, safeguard, and utilize student information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-border/60 pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            LEGAL &amp; COMPLIANCE
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: March 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Introduction
            </h2>
            <p>
              {INSTITUTE_INFO.name} (&quot;Level Up&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              located at Atika Building 3rd Floor, Tulu Dimtu Square, Addis Ababa, Ethiopia, is
              committed to protecting the privacy of prospective learners, enrolled students,
              and website visitors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p>We only collect personal information that you intentionally provide to us, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name and preferred identity</li>
              <li>Contact phone number and email address</li>
              <li>Course preferences, schedules, and learning goals</li>
              <li>Academic project submissions, attendance, and evaluation records</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Purpose of Processing
            </h2>
            <p>Your data is strictly utilized to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Administer course admissions, laboratory schedules, and cohort communications</li>
              <li>Issue and verify official certificates of completion</li>
              <li>Deliver instructional mentorship, lab materials, and capstone feedback</li>
              <li>Comply with applicable Ethiopian educational standards</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Data Sharing &amp; Third Parties
            </h2>
            <p>
              We do NOT sell, rent, or monetize your personal data to third-party advertisers.
              Information is only shared when necessary for academic operations (e.g., student software
              license provisioning) or when required by legal authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              5. Contacting the Privacy Officer
            </h2>
            <p>
              If you have any questions or wish to exercise data rights regarding your student record,
              please reach out to us at:
            </p>
            <div className="rounded-xl border border-border/80 bg-secondary/40 p-4 font-mono text-xs text-foreground space-y-1">
              <p>Email: {INSTITUTE_INFO.emails.general}</p>
              <p>Phone: {INSTITUTE_INFO.phones[0].display}</p>
              <p>Address: {INSTITUTE_INFO.address.full}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
