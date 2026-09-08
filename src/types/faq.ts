export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Courses" | "Learning Modes" | "Location" | "Certificates" | "Enrollment" | "Fees";
}
