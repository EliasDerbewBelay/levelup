export type CourseCategory = "technology" | "languages" | "creative" | "business";

export interface CourseModule {
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  deliveryMode: "Hybrid" | "On-Campus" | "Online Assisted";
  instructor: string;
  instructorTitle: string;
  featured?: boolean;
  price: string;
  hoursPerWeek: string;
  schedule: string;
  prerequisites: string[];
  learningOutcomes: string[];
  modules: CourseModule[];
  badge?: string;
  image?: string;
}
