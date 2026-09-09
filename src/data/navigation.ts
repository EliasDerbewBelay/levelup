export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Gallery", href: "/gallery" },
  { label: "Instructors", href: "/instructors" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SECTIONS = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission & Values", href: "/about#values" },
      { label: "Campus & Labs", href: "/gallery" },
      { label: "Faculty Directory", href: "/instructors" },
      { label: "Student Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Core Technology", href: "/courses?category=technology" },
      { label: "Languages", href: "/courses?category=languages" },
      { label: "Creative Arts", href: "/courses?category=creative" },
      { label: "Business & Finance", href: "/courses?category=business" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Upcoming Events", href: "/events" },
      { label: "Institute Blog", href: "/blog" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Certificate Verification", href: "/certificate-verification" },
      { label: "Admissions Consultation", href: "/contact" },
    ],
  },
];
