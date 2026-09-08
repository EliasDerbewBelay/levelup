# Level Up Training Institute — Production Web Application

Official public website for **Level Up Training Institute** (Tulu Dimtu Square, Addis Ababa, Ethiopia). Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI primitives), and Lucide icons.

---

## 1. Visual & Design Language
- **Aesthetic:** Next.js / Vercel-inspired engineering editorial quality. Minimalist, high contrast, typography-driven, with subtle grid patterns and micro-borders.
- **Typography:** Geist Sans (tight tracking for monumental headings and body) and Geist Mono (technical badges, metadata, code blocks).
- **Themes:** Light / Dark / System modes with zero flash during page load, powered by `next-themes` and CSS variables.
  - **Light Theme:** `#ffffff` canvas, `#fafafa` secondary, `#171717` text, `#eaeaea` borders, `#2563eb` brand blue, `#f59e0b` accent.
  - **Dark Theme:** `#000000` deep black, `#0a0a0a` secondary, `#111111` cards, `#ededed` text, `#262626` borders, `#3b82f6` brand blue.

---

## 2. Implemented Route Directory

| Route | Purpose | Architecture |
|---|---|---|
| `/` | Homepage | Hero, Statistics, Categories, Featured Courses, Why Level Up, Learning Experience, Instructors, Events, Testimonials, CTA |
| `/about` | Institutional Profile | Mission, Vision, Core Values, Traditional vs. Level Up Comparison, Campus Specs |
| `/courses` | Course Directory | Real-time search, category filter pills, level filters, course cards |
| `/courses/[slug]` | Dynamic Course Syllabus | SSG prerendered, module accordion, hours, tuition, learning outcomes, instructor, inquiry CTA |
| `/instructors` | Faculty Directory | Searchable directory, department filters, faculty bios & lead course links |
| `/events` | Campus Calendar | Workshops, bootcamps, seminars, open house demo days, RSVP links |
| `/blog` | Technical Journal | Featured editorial, category filtering, reading time, author tags |
| `/blog/[slug]` | Article View | SSG prerendered, rich markdown-style sections, code snippets, related posts |
| `/gallery` | Visual Spaces | Category filters (Classrooms, Labs, Events, Campus Hub) & accessible lightbox modal |
| `/testimonials` | Graduate Outcomes | Categorized reviews, verified student badges, career placement stories |
| `/faq` | Help & Answers | Searchable accordion covering hybrid mode, location, equipment, tuition, certificates |
| `/contact` | Campus & Admissions | Tulu Dimtu location landmarks, verified phone lines, Telegram, interactive inquiry form |
| `/certificate-verification` | Credential Portal | Cryptographic verification mock interface with sample IDs, print verification view |
| `/privacy` | Privacy Policy | Student data rights, contact information, compliance standards |
| `/terms` | Terms of Service | Campus lab regulations, enrollment policies, intellectual property rights |
| `/refund-policy` | Tuition Guidelines | Monthly billing schedule, 5-day pre-cohort withdrawal refund, cohort deferral |
| `/student-policy` | Code of Conduct | Lab computer safety, academic integrity, 80% attendance rule |
| `/cookies` | Storage Policy | Local preference storage for theme toggle |
| `/robots.txt` & `/sitemap.xml` | SEO Metadata | Auto-generated sitemaps indexing all dynamic course & blog routes |

---

## 3. Project Architecture

```text
src/
├── app/                        # Next.js App Router
│   ├── (routes)/               # All public pages & dynamic [slug] routes
│   ├── layout.tsx              # Root Layout with ThemeProvider, Announcement, Header, Footer
│   ├── globals.css             # Tailwind v4 theme tokens & custom grid patterns
│   ├── robots.ts               # Robots metadata route
│   └── sitemap.ts              # Sitemap generator for dynamic SSG routes
├── components/
│   ├── layout/                 # Header, Footer, AnnouncementBar, MobileNav, ThemeToggle
│   ├── home/                   # Hero, Statistics, Categories, WhyLevelUp, CTA, etc.
│   ├── courses/                # CourseCard, CourseCatalog
│   ├── instructors/            # InstructorCard, InstructorDirectory
│   ├── events/                 # EventCard, EventsDirectory
│   ├── blog/                   # ArticleCard, BlogDirectory
│   ├── gallery/                # GalleryView (with accessible Lightbox)
│   ├── testimonials/           # TestimonialCard, TestimonialsPageView
│   ├── faq/                    # FAQView (shadcn Accordion)
│   ├── contact/                # ContactForm
│   ├── verification/           # CertificateVerifier
│   └── ui/                     # shadcn Base UI primitives (Button, Card, Input, Accordion, Badge)
├── data/                       # Decoupled static datasets
│   ├── courses.ts              # 13 verified courses across 4 departments
│   ├── instructors.ts          # Faculty profiles and expertise
│   ├── events.ts               # Campus workshops and seminars
│   ├── blog.ts                 # Editorial articles and guides
│   ├── testimonials.ts         # Student review records
│   ├── faq.ts                  # Comprehensive Q&A items
│   ├── gallery.ts              # Campus facility records
│   ├── navigation.ts           # Header and footer structure
│   └── institute.ts            # Verified phone lines, address, and hours
├── types/                      # Strict TypeScript interfaces
└── public/
    ├── images/                 # Organized asset directories (courses, instructors, gallery, blog)
    └── logo/                   # SVG brand vectors and icon marks
```

---

## 4. Development & Verification Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run ESLint (0 errors, 0 warnings)
npm run lint

# Run Production Build (Prerenders all 38 static SSG routes)
npm run build
```

---

## 5. Future Backend Integration

The application is architected to allow drop-in backend/CMS replacement without modifying UI components:
- `src/data/courses.ts` can be replaced with database queries or API endpoints.
- `src/components/verification/certificate-verifier.tsx` has a designated boundary ready for `fetch('/api/verify-certificate', ...)`.
- `src/components/contact/contact-form.tsx` is structured for Server Actions or email/SMS webhooks.
