import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";

const pipe = promisify(pipeline);

const links = [
  { url: "/app/home", changefreq: "weekly", priority: 1.0 },
  { url: "/app/about", changefreq: "monthly", priority: 0.8 },
  { url: "/app/contact", changefreq: "monthly", priority: 0.8 },
];

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
    console.log("Sitemap created!");
  } catch (err) {
    console.error("Error creating sitemap:", err);
  }
}

generateSitemap();
