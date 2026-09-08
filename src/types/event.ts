export interface EventItem {
  id: string;
  title: string;
  category: "Workshop" | "Bootcamp" | "Seminar" | "Open House" | "Graduation";
  date: string;
  formattedDate: {
    month: string;
    day: string;
    year: string;
  };
  time: string;
  location: string;
  shortDescription: string;
  description: string;
  speaker: string;
  capacity: string;
  status: "Upcoming" | "Registration Open" | "Full" | "Completed";
  featured?: boolean;
}
