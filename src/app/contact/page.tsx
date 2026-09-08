import { Suspense } from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/institute";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact & Campus Location",
  description:
    "Visit Level Up Training Institute at Tulu Dimtu Square, Atika Building 3rd Floor. Call 0930537117 or message us on Telegram.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              GET IN TOUCH
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Contact &amp; Admissions
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Visit our campus in person, give our counselors a phone call, or send an
              inquiry. We are open Monday through Saturday at Tulu Dimtu Square.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left: Contact Info & Campus Location */}
            <div className="lg:col-span-5 space-y-8">
              {/* Official Contact Cards */}
              <div className="space-y-4">
                <div className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Phone className="h-4 w-4 text-brand" />
                    <span>Admissions Phone Lines</span>
                  </div>
                  <div className="space-y-1.5 pl-6 font-mono text-xs">
                    {INSTITUTE_INFO.phones.map((phone) => (
                      <div key={phone.raw}>
                        <a
                          href={`tel:${phone.raw}`}
                          className="text-foreground hover:text-brand transition-colors font-medium"
                        >
                          {phone.display}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Mail className="h-4 w-4 text-brand" />
                    <span>Email Inquiries</span>
                  </div>
                  <div className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground block">
                        Admissions Desk:
                      </span>
                      <a
                        href={`mailto:${INSTITUTE_INFO.emails.admissions}`}
                        className="text-foreground hover:text-brand transition-colors"
                      >
                        {INSTITUTE_INFO.emails.admissions}
                      </a>
                    </div>
                    <div className="pt-1">
                      <span className="font-mono text-[10px] text-muted-foreground block">
                        General Inquiries:
                      </span>
                      <a
                        href={`mailto:${INSTITUTE_INFO.emails.general}`}
                        className="text-foreground hover:text-brand transition-colors"
                      >
                        {INSTITUTE_INFO.emails.general}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <MessageSquare className="h-4 w-4 text-sky-500" />
                    <span>Telegram Admissions Support</span>
                  </div>
                  <div className="pl-6 text-xs text-muted-foreground space-y-2">
                    <p>
                      Fastest response for schedules, syllabus downloads, and direct chat with counselors.
                    </p>
                    <a
                      href={INSTITUTE_INFO.telegram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      <span>{INSTITUTE_INFO.telegram.handle}</span>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Clock className="h-4 w-4 text-brand" />
                    <span>Campus Hours</span>
                  </div>
                  <div className="pl-6 text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>{INSTITUTE_INFO.hours.days}:</span>
                      <strong className="text-foreground font-mono">
                        {INSTITUTE_INFO.hours.time}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-muted-foreground font-mono">
                        {INSTITUTE_INFO.hours.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Address & Directions */}
              <div className="rounded-2xl border border-border/80 bg-secondary/40 p-6 space-y-4">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <MapPin className="h-4 w-4 text-brand" />
                  <span>Physical Address &amp; Landmarks</span>
                </div>
                <p className="text-xs text-foreground font-medium leading-relaxed">
                  {INSTITUTE_INFO.address.full}
                </p>

                <div className="border-t border-border/60 pt-3 space-y-2 text-xs text-muted-foreground">
                  <h4 className="font-semibold text-foreground">How to Reach Us:</h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-[11px] leading-relaxed">
                    <li>
                      <strong>From Kaliti / Tulu Dimtu Roundabout:</strong> Head directly towards Tulu Dimtu Square.
                    </li>
                    <li>
                      <strong>Landmark:</strong> Directly opposite Green Primary School.
                    </li>
                    <li>
                      <strong>Adjacent Landmark:</strong> Near Sabeh Cafe at the Atika Building entrance.
                    </li>
                    <li>
                      <strong>Floor:</strong> Take the elevator or stairs to the 3rd Floor. Level Up reception is directly at the lobby.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-8 text-center text-xs font-mono text-muted-foreground">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>

              {/* Map Placeholder Area */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-brand" />
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
                      CAMPUS MAP EMBED // TULU DIMTU
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    8°53&apos;N 38°47&apos;E
                  </span>
                </div>

                <div className="mt-4 flex h-60 w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 p-6 text-center">
                  <MapPin className="h-8 w-8 text-brand animate-bounce" />
                  <h4 className="mt-3 text-sm font-semibold text-foreground">
                    Atika Building, 3rd Floor
                  </h4>
                  <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                    Tulu Dimtu Square, opposite Green Primary School, near Sabeh Cafe, Addis Ababa, Ethiopia.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Tulu+Dimtu+Addis+Ababa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
