export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Programming" | "Career Advice" | "Institution News" | "Language Learning" | "Technology" | "Student Success Stories";
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  featured?: boolean;
  tags: string[];
  content: {
    sectionTitle?: string;
    paragraphs: string[];
    callout?: string;
    codeSnippet?: {
      language: string;
      code: string;
    };
  }[];
}
