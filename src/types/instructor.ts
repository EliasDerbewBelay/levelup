export interface Instructor {
  id: string;
  name: string;
  role: string;
  department: "Technology" | "Languages" | "Creative Arts" | "Business";
  expertise: string[];
  bio: string;
  coursesTaught: string[];
  initials: string;
  avatar?: string;
  featured?: boolean;
}
