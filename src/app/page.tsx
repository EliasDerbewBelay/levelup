import { Hero } from "@/components/home/hero";
import { Statistics } from "@/components/home/statistics";
import { Categories } from "@/components/home/categories";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { WhyLevelUp } from "@/components/home/why-level-up";
import { LearningExperience } from "@/components/home/learning-experience";
import { FeaturedInstructors } from "@/components/home/featured-instructors";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Statistics />
      <Categories />
      <FeaturedCourses />
      <WhyLevelUp />
      <LearningExperience />
      <FeaturedInstructors />
      <UpcomingEvents />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
