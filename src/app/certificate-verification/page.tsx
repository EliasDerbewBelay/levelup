import type { Metadata } from "next";
import { ShieldCheck, Lock, FileSearch } from "lucide-react";
import { CertificateVerifier } from "@/components/verification/certificate-verifier";

export const metadata: Metadata = {
  title: "Verify Your Certificate | Level Up Training Institute",
  description:
    "Official credential verification portal for Level Up Training Institute certificates.",
};

export default function CertificateVerificationPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/80 bg-soft-background/60 py-14 md:py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              CREDENTIAL INTEGRITY
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Verify Your Certificate
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Employers, academic partners, and sponsors can validate official Certificates of Completion issued by Level Up Training Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Main Verifier Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CertificateVerifier />

          {/* Verification Security Notice */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 text-xs text-muted-foreground border-t border-border/70 pt-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Tamper-Proof Registry</span>
              </div>
              <p className="leading-relaxed">
                Matched against official academic ledger to authenticate completion credentials.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <FileSearch className="h-4 w-4 text-brand" />
                <span>Syllabus Validation</span>
              </div>
              <p className="leading-relaxed">
                Confirms required lab hours, hands-on modules, and project defense grades.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <Lock className="h-4 w-4 text-brand" />
                <span>Enterprise Trust</span>
              </div>
              <p className="leading-relaxed">
                Accepted by regional and international tech employers and agencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
