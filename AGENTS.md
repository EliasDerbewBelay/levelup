<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Overview
Production web application built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 1. Core Tech Stack & Commands
- **Framework:** Next.js (App Router only, React Server Components by default)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS + Shadcn UI / Radix primitives
- **Data & State:** TanStack Query / Server Actions / Zustand (adapt to your stack)
- **Validation:** Zod for API schemas and environment variables
- **Commands:**
  - Dev server: `npm run dev` (or `pnpm dev`)
  - Type-check: `npm run type-check` or `npx tsc --noEmit`
  - Lint: `npm run lint`
  - Build: `npm run build`

---

## 2. Architecture & Directory Structure
Adhere strictly to the project layout:

```text
src/
├── app/                  # Route handlers, layouts, pages (App Router)
│   ├── api/              # Route handlers (REST endpoints)
│   └── (routes)/         # Route groups and views
├── components/
│   ├── ui/               # Reusable primitives (Shadcn/design system)
│   └── common/           # Domain-agnostic shared components
├── features/             # Feature-based modules (or modules/)
│   └── [feature-name]/
│       ├── components/   # Feature-specific components
│       ├── hooks/        # Custom client hooks
│       ├── services/     # Server-side calls / DB access
│       └── types/        # Feature schemas & TypeScript types
├── lib/                  # Shared utilities, DB clients, third-party wrappers
└── types/                # Global TypeScript definitions
