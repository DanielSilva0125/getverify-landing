import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/** Paths that must not be crawled (app + auth); use prefix form without trailing slash. */
const DISALLOW_PREFIXES = [
  "/api/",
  "/sign-in",
  "/dashboard",
  "/documents",
  "/contractors",
  "/alerts",
  "/reports",
  "/settings",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...DISALLOW_PREFIXES],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
