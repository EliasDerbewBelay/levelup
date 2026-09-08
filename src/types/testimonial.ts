export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrTrack: string;
  courseTaken: string;
  quote: string;
  category: "technology" | "languages" | "creative" | "business";
  avatarInitials: string;
  verified: boolean;
  featured?: boolean;
}
