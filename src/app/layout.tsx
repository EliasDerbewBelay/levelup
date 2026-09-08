import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { INSTITUTE_INFO } from "@/data/institute";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leveluptraining.edu.et"),
  title: {
    default: `${INSTITUTE_INFO.name} — Practical Tech, Language & Business Training`,
    template: `%s | ${INSTITUTE_INFO.name}`,
  },
  description:
    "Level Up Training Institute in Tulu Dimtu Square, Addis Ababa. Production-grade training in Python, Full-Stack Web, Languages, Graphic Design, Video Editing, and Peachtree Accounting.",
  keywords: [
    "Level Up Training Institute",
    "Programming academy in Ethiopia",
    "Learn Python Addis Ababa",
    "Fullstack React Next.js Ethiopia",
    "Language school Tulu Dimtu",
    "Peachtree accounting training Addis Ababa",
    "Graphic design course Ethiopia",
    "Video editing Premiere Pro Addis Ababa",
  ],
  authors: [{ name: "Level Up Training Institute" }],
  creator: "Level Up Training Institute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leveluptraining.edu.et",
    title: `${INSTITUTE_INFO.name} — Practical Hybrid Training`,
    description:
      "Bridging the gap between theory and industry execution. Explore our hands-on cohorts in Technology, Languages, Creative Arts, and Accounting.",
    siteName: INSTITUTE_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: INSTITUTE_INFO.name,
    description:
      "Practical tech, languages, creative media, and accounting training at Tulu Dimtu Square, Addis Ababa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans bg-background text-foreground selection:bg-brand/20 selection:text-brand">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
