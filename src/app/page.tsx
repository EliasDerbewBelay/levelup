import { Hero } from "@/components/home/hero";
import { BenefitStrip } from "@/components/home/benefit-strip";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { Categories } from "@/components/home/categories";
import { WhyLevelUp } from "@/components/home/why-level-up";
import { FeaturedInstructors } from "@/components/home/featured-instructors";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { LearningExperience } from "@/components/home/learning-experience";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BenefitStrip />
      <FeaturedCourses />
      <Categories />
      <WhyLevelUp />
      <FeaturedInstructors />
      <UpcomingEvents />
      <LearningExperience />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
