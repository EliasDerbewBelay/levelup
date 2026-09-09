import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leveluptraining.edu.et";

  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/instructors",
    "/events",
    "/blog",
    "/gallery",
    "/testimonials",
    "/faq",
    "/certificate-verification",
    "/contact",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/student-policy",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const courseRoutes = COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes];
}
