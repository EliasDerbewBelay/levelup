export type GalleryCategory = "Classroom" | "Students" | "Events" | "Training" | "Institution";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  location: string;
  aspect: "landscape" | "portrait" | "square";
  accentColor?: string;
  imagePath?: string;
}
