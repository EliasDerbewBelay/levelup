import type { Metadata } from "next";
import { ShieldCheck, Lock, FileSearch } from "lucide-react";
import { CertificateVerifier } from "@/components/verification/certificate-verifier";

export const metadata: Metadata = {
  title: "Certificate Verification Portal",
  description:
    "Verify official Level Up Training Institute certificates and student credentials online.",
};

export default function CertificateVerificationPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              CREDENTIAL INTEGRITY
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Official Certificate Verification
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Employers, hiring managers, and partner institutions can authenticate
              certificates of completion issued by Level Up Training Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Main Verifier Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CertificateVerifier />

          {/* Verification Security Notice */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 text-xs text-muted-foreground border-t border-border/60 pt-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Cryptographic Proof</span>
              </div>
              <p className="leading-relaxed">
                Every credential hash is matched against our internal academic ledger to prevent forgery.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <FileSearch className="h-4 w-4 text-brand" />
                <span>Syllabus Validation</span>
              </div>
              <p className="leading-relaxed">
                Confirm specific modules, lab hours completed, and capstone project defenses.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Lock className="h-4 w-4 text-brand" />
                <span>Registrar Support</span>
              </div>
              <p className="leading-relaxed">
                For official transcript requests or embossed copies, contact info@leveluptraining.edu.et.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
