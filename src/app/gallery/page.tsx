import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryView } from "@/components/gallery/gallery-view";

export const metadata: Metadata = {
  title: "Campus Gallery & Facilities",
  description:
    "Explore our high-spec computer laboratories, creative media suites, hardware prototyping benches, and campus spaces at Tulu Dimtu Square.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/25 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
              FACILITY VISUALS
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Campus &amp; Learning Spaces
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Take a visual walkthrough of our specialized laboratories, hardware benches,
              media editing stations, and collaborative student spaces in Atika Building.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryView items={GALLERY_ITEMS} />
        </div>
      </section>
    </div>
  );
}
