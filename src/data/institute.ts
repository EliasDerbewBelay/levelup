export const INSTITUTE_INFO = {
  name: "Level Up Training Institute",
  shortName: "Level Up",
  tagline: "Learn skills that move you forward.",
  subtagline: "Practical training in programming, languages, creative arts, and business.",
  establishedYear: "2026",
  phones: [
    { display: "0930 53 71 17", raw: "0930537117" },
    { display: "0913 04 57 51", raw: "0913045751" },
    { display: "0963 44 60 44", raw: "0963446044" },
  ],
  emails: {
    general: "info@leveluptraining.edu.et",
    admissions: "admissions@leveluptraining.edu.et",
  },
  address: {
    street: "Tulu Dimtu Square, opposite Green Primary School",
    building: "Atika Building, 3rd Floor (Near Sabeh Cafe)",
    city: "Addis Ababa",
    country: "Ethiopia",
    full: "Tulu Dimtu Square, opposite Green Primary School, near Sabeh Cafe, Atika Building, 3rd floor, Addis Ababa, Ethiopia",
  },
  hours: {
    days: "Monday – Saturday",
    time: "8:00 AM – 8:00 PM EAT",
    sunday: "Closed",
  },
  telegram: {
    handle: "@leveluptraining",
    url: "https://t.me/leveluptraining",
  },
  stats: [
    { value: "15+", label: "Practical Courses", description: "Across 4 high-demand domains" },
    { value: "4", label: "Learning Categories", description: "Tech, Languages, Creative, Business" },
    { value: "Hybrid", label: "Learning Delivery", description: "On-campus labs + guided practice" },
    { value: "2026", label: "Established", description: "Modern, purpose-built curriculum" },
  ],
  values: [
    {
      title: "Practical Excellence",
      description: "We emphasize project-first mastery over rote memorization. Every student leaves with real software, designs, or financial models.",
      icon: "Code2",
    },
    {
      title: "Accessibility",
      description: "Transparent pricing, inclusive multilingual offerings (English, Amharic, Afaan Oromoo), and flexible evening/weekend tracks.",
      icon: "Users2",
    },
    {
      title: "Innovation",
      description: "Equipped with modern developer tooling, modern creative suites, and up-to-date accounting software matching workplace demands.",
      icon: "Sparkles",
    },
    {
      title: "Student Success",
      description: "Dedicated lab time, portfolio mentorship, industry capstones, and verifiable digital credentials for employer validation.",
      icon: "CheckCircle2",
    },
  ],
} as const;
