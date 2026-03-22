import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import { pipeline } from "stream";
import { promisify } from "util";

const pipe = promisify(pipeline);

// ── ALL SITE LINKS ────────────────────────────────────────────────────────────
const links = [
  // ── MAIN PAGES ────────────────────────────────────────────────
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.9 },
  { url: "/blog", changefreq: "daily", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },

  // ── SERVICES ──────────────────────────────────────────────────
  { url: "/services/logo-design", changefreq: "monthly", priority: 0.8 },
  { url: "/services/graphic-design", changefreq: "monthly", priority: 0.8 },
  { url: "/services/branding", changefreq: "monthly", priority: 0.8 },
  { url: "/services/ui-ux", changefreq: "monthly", priority: 0.8 },
  { url: "/services/web-development", changefreq: "monthly", priority: 0.8 },
  { url: "/services/app-development", changefreq: "monthly", priority: 0.8 },

  // ── PROJECTS ──────────────────────────────────────────────────
  { url: "/projects/1", changefreq: "monthly", priority: 0.7 }, // Starbucks Redesign
  { url: "/projects/2", changefreq: "monthly", priority: 0.7 }, // Fruit Fusion Beverage Poster
  { url: "/projects/3", changefreq: "monthly", priority: 0.7 }, // Premium Haircare Artwork
  { url: "/projects/4", changefreq: "monthly", priority: 0.7 }, // TripWise

  // ── BLOG POSTS ────────────────────────────────────────────────
  { url: "/blog/mern-chat-app", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/ui-ux-design-tips", changefreq: "monthly", priority: 0.7 },
  {
    url: "/blog/web-development-trends-2026",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/blog/website-cost-india-2026",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/blog/why-website-not-getting-clients",
    changefreq: "monthly",
    priority: 0.7,
  },
  { url: "/blog/mern-vs-nextjs", changefreq: "monthly", priority: 0.7 },
  {
    url: "/blog/portfolio-ideas-developers",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/blog/first-client-web-developer",
    changefreq: "monthly",
    priority: 0.7,
  },
  { url: "/blog/ui-vs-ux-difference", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/web-design-mistakes", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/improve-website-speed", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/seo-basics-2026", changefreq: "monthly", priority: 0.7 },
  {
    url: "/blog/tools-for-web-developers",
    changefreq: "monthly",
    priority: 0.7,
  },
  { url: "/blog/freelancing-vs-job", changefreq: "monthly", priority: 0.7 },
];

// ── GENERATE ──────────────────────────────────────────────────────────────────
async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.qasidatechstudio.com",
  });

  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  try {
    await pipe(sitemap, createWriteStream("./public/sitemap.xml"));
    console.log(`✅ Sitemap created with ${links.length} URLs`);
  } catch (err) {
    console.error("❌ Error creating sitemap:", err);
  }
}

generateSitemap();
