"use client";

import * as React from "react";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  FileCheck,
} from "lucide-react";

interface MockCertificate {
  id: string;
  studentName: string;
  courseTitle: string;
  category: string;
  issueDate: string;
  grade: string;
  instructor: string;
  credentialHash: string;
  status: "Valid" | "Revoked";
}

// Sample mock certificates for testing the UI
const MOCK_CERTIFICATES: Record<string, MockCertificate> = {
  "LU-2026-PY-0142": {
    id: "LU-2026-PY-0142",
    studentName: "Yared Bekele",
    courseTitle: "Python Programming & Automation",
    category: "Core Technology",
    issueDate: "February 28, 2026",
    grade: "Distinction (94%)",
    instructor: "Dawit Abebe",
    credentialHash: "0x8f3c7a91b4e2d5c80e1f72943b18c64d8a29e41b",
    status: "Valid",
  },
  "LU-2026-WD-0891": {
    id: "LU-2026-WD-0891",
    studentName: "Selamawit Haile",
    courseTitle: "Graphic Design & Brand Identity",
    category: "Creative Arts",
    issueDate: "March 15, 2026",
    grade: "High Honors (96%)",
    instructor: "Nahom Girma",
    credentialHash: "0x1d4a7c29f6b8e3a09c2d54817a32b98f5c61d70e",
    status: "Valid",
  },
  "LU-2026-PT-0419": {
    id: "LU-2026-PT-0419",
    studentName: "Abdi Mohammed",
    courseTitle: "Computerized Accounting with Peachtree / Sage 50",
    category: "Business & Finance",
    issueDate: "March 20, 2026",
    grade: "Distinction (92%)",
    instructor: "Solomon Tesfaye",
    credentialHash: "0x4b7f9e12c8a3d6051f2e87946b53a18d9c40e21a",
    status: "Valid",
  },
};

export function CertificateVerifier() {
  const [certId, setCertId] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<MockCertificate | null>(null);
  const [hasSearched, setHasSearched] = React.useState(false);

  /**
   * Future Backend Integration Boundary:
   * Replace this mock lookup with `await fetch('/api/verify-certificate?id=' + certId)`
   */
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      const normalized = certId.trim().toUpperCase();
      const found = MOCK_CERTIFICATES[normalized] || null;
      setResult(found);
      setHasSearched(true);
      setLoading(false);
    }, 400);
  };

  const handleTestId = (id: string) => {
    setCertId(id);
    const found = MOCK_CERTIFICATES[id] || null;
    setResult(found);
    setHasSearched(true);
  };

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
        <form onSubmit={handleVerify} className="space-y-4">
          <label
            htmlFor="certificate-id-input"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono"
          >
            Enter Certificate ID
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="certificate-id-input"
                type="text"
                placeholder="e.g., LU-2026-PY-0142"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 font-mono text-sm text-foreground uppercase placeholder:normal-case placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !certId.trim()}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-xs font-semibold text-background hover:opacity-90 disabled:opacity-50 transition-opacity whitespace-nowrap"
            >
              {loading ? (
                <span>Validating...</span>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  <span>Verify Credential</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Click Samples */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
            <span className="font-mono text-[11px]">Sample Valid IDs:</span>
            {Object.keys(MOCK_CERTIFICATES).map((sampleId) => (
              <button
                key={sampleId}
                type="button"
                onClick={() => handleTestId(sampleId)}
                className="rounded-md border border-border/70 bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-foreground hover:bg-muted hover:border-foreground/30 transition-colors"
              >
                {sampleId}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Verification Result Card */}
      {hasSearched && (
        <div>
          {result ? (
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-card p-6 sm:p-10 shadow-lg">
              {/* Watermark seal */}
              <div className="absolute right-4 top-4 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>OFFICIALLY VERIFIED</span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    LEVEL UP TRAINING INSTITUTE // ACCREDITED CREDENTIAL
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
                    Certificate of Completion
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    Certificate ID: <strong className="text-foreground">{result.id}</strong>
                  </p>
                </div>

                {/* Candidate Info Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/70 py-6 text-xs">
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-mono text-[11px] block">
                      Awarded To:
                    </span>
                    <strong className="text-base font-bold text-foreground">
                      {result.studentName}
                    </strong>
                  </div>

                  <div className="space-y-1">
                    <span className="text-muted-foreground font-mono text-[11px] block">
                      Program / Course:
                    </span>
                    <strong className="text-sm font-semibold text-foreground">
                      {result.courseTitle}
                    </strong>
                    <span className="block text-[11px] text-muted-foreground">
                      {result.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-muted-foreground font-mono text-[11px] block">
                      Issue Date:
                    </span>
                    <strong className="text-sm font-medium text-foreground">
                      {result.issueDate}
                    </strong>
                    <span className="block text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      {result.grade}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-muted-foreground font-mono text-[11px] block">
                      Lead Instructor:
                    </span>
                    <strong className="text-sm font-medium text-foreground">
                      {result.instructor}
                    </strong>
                    <span className="block text-[11px] text-muted-foreground">
                      Level Up Faculty
                    </span>
                  </div>
                </div>

                {/* Cryptographic Hash & Security Seal */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="space-y-1 font-mono text-[10px] text-muted-foreground max-w-lg">
                    <span>Cryptographic Verification Hash:</span>
                    <div className="break-all rounded bg-secondary/70 p-2 text-foreground font-mono">
                      {result.credentialHash}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
                    >
                      <FileCheck className="h-3.5 w-3.5 text-brand" />
                      <span>Print Verification</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center sm:p-12 space-y-3">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                No Certificate Record Found
              </h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                We could not locate any active credentials matching ID:{" "}
                <strong className="font-mono text-foreground">{certId}</strong>.
                Please ensure the Certificate ID is typed exactly as printed on the
                official document, or contact our registrar office.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setCertId("");
                    setHasSearched(false);
                  }}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
