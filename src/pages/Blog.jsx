import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogData = [
  {
    title: "How to Build a MERN Chat App",
    slug: "mern-chat-app",
    description:
      "Build a production-ready real-time chat app using MERN stack and Socket.io. Covers auth, WebSockets, and deployment.",
    image: "/images/blog1.png",
    date: "March 15, 2026",
    category: "Development",
    readTime: "9 min read",
    author: "Aryan Qasida",
    tags: ["MERN", "Socket.io", "React"],
  },
  {
    title: "Top UI/UX Design Tips for Beginners",
    slug: "ui-ux-design-tips",
    description:
      "Learn the core principles of UI/UX design — from visual hierarchy to user flows — that separate good design from great.",
    image: "/images/blog2.jpg",
    date: "March 18, 2026",
    category: "Design",
    readTime: "7 min read",
    author: "Sana Malik",
    tags: ["UI Design", "UX", "Figma"],
  },
  {
    title: "Best Web Development Trends in 2026",
    slug: "web-development-trends-2026",
    description:
      "From AI-assisted development to edge computing and React Server Components — the shifts reshaping how we build for the web.",
    image: "/images/blog3.jpg",
    date: "March 20, 2026",
    category: "Trends",
    readTime: "8 min read",
    author: "Aryan Qasida",
    tags: ["Web Dev", "AI", "Next.js"],
  },
  {
    title: "How Much Does Website Development Cost in India (2026 Guide)",
    slug: "website-cost-india-2026",
    description:
      "A complete, honest breakdown of website costs in India — from landing pages to full web apps — so you never get overcharged.",
    image: "/images/blog4.jpg",
    date: "March 22, 2026",
    category: "Business",
    readTime: "10 min read",
    author: "Aryan Qasida",
    tags: ["Pricing", "India", "Agency"],
  },
  {
    title: "Why Your Website Is Not Getting Clients",
    slug: "why-website-not-getting-clients",
    description:
      "You have a website but no leads. Here are the real, fixable reasons your site fails to convert visitors into customers.",
    image: "/images/blog5.png",
    date: "March 22, 2026",
    category: "Marketing",
    readTime: "8 min read",
    author: "Sana Malik",
    tags: ["CRO", "Conversion", "Marketing"],
  },
  {
    title: "MERN vs Next.js – Which One Should You Choose?",
    slug: "mern-vs-nextjs",
    description:
      "No hype, just trade-offs. A real comparison of MERN stack and Next.js to help you pick the right architecture.",
    image: "/images/blog6.png",
    date: "March 22, 2026",
    category: "Development",
    readTime: "9 min read",
    author: "Aryan Qasida",
    tags: ["MERN", "Next.js", "Architecture"],
  },
  {
    title: "Best Portfolio Website Ideas for Developers",
    slug: "portfolio-ideas-developers",
    description:
      "Your portfolio is your most important marketing asset. Here are creative ideas that make you genuinely stand out in 2026.",
    image: "/images/blog7.png",
    date: "March 22, 2026",
    category: "Career",
    readTime: "7 min read",
    author: "Sana Malik",
    tags: ["Portfolio", "Career", "Design"],
  },
  {
    title: "How to Get Your First Client as a Web Developer",
    slug: "first-client-web-developer",
    description:
      "The first client is the hardest. This is a practical, no-fluff guide to landing your first paid web development project.",
    image: "/images/blog8.jpg",
    date: "March 22, 2026",
    category: "Business",
    readTime: "8 min read",
    author: "Aryan Qasida",
    tags: ["Freelancing", "Sales", "Clients"],
  },
  {
    title: "UI vs UX – What's the Real Difference?",
    slug: "ui-vs-ux-difference",
    description:
      "Few terms get confused more than UI and UX. Here's the clearest explanation of how they differ and how they work together.",
    image: "/images/blog9.png",
    date: "March 22, 2026",
    category: "Design",
    readTime: "6 min read",
    author: "Sana Malik",
    tags: ["UI", "UX", "Career"],
  },
  {
    title: "Top Mistakes to Avoid in Web Design",
    slug: "web-design-mistakes",
    description:
      "These common web design mistakes silently kill conversions and damage credibility — and most businesses don't know they're making them.",
    image: "/images/blog10.jpg",
    date: "March 22, 2026",
    category: "Design",
    readTime: "7 min read",
    author: "Sana Malik",
    tags: ["Web Design", "UX", "Best Practices"],
  },
  {
    title: "How to Improve Website Speed (Complete Guide)",
    slug: "improve-website-speed",
    description:
      "A technical, layer-by-layer guide to making your website fast — from image optimization to edge caching and Core Web Vitals.",
    image: "/images/blog11.jpg",
    date: "March 22, 2026",
    category: "Development",
    readTime: "11 min read",
    author: "Aryan Qasida",
    tags: ["Performance", "SEO", "Core Web Vitals"],
  },
  {
    title: "SEO Basics for Beginners (2026 Guide)",
    slug: "seo-basics-2026",
    description:
      "SEO in 2026 is about genuinely helping people find what they need. Here are the fundamentals that actually move rankings.",
    image: "/images/blog12.png",
    date: "March 22, 2026",
    category: "SEO",
    readTime: "10 min read",
    author: "Aryan Qasida",
    tags: ["SEO", "Google", "Content"],
  },
  {
    title: "Best Tools Every Web Developer Should Use",
    slug: "tools-for-web-developers",
    description:
      "The right tools make you dramatically more productive. Here's the definitive modern toolkit for web developers in 2026.",
    image: "/images/blog13.jpg",
    date: "March 22, 2026",
    category: "Development",
    readTime: "8 min read",
    author: "Aryan Qasida",
    tags: ["Tools", "VS Code", "Productivity"],
  },
  {
    title: "Freelancing vs Job – What Should You Choose?",
    slug: "freelancing-vs-job",
    description:
      "Freelancing promises freedom; jobs promise stability. The reality of both is more nuanced. An honest comparison.",
    image: "/images/blog14.jpg",
    date: "March 22, 2026",
    category: "Career",
    readTime: "9 min read",
    author: "Aryan Qasida",
    tags: ["Freelancing", "Career", "Income"],
  },
];

const categoryColors = {
  Development: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  Design: { bg: "bg-pink-100", text: "text-pink-700", dot: "bg-pink-500" },
  Trends: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    dot: "bg-purple-500",
  },
  Business: { bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-500" },
  Marketing: {
    bg: "bg-green-100",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  Career: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    dot: "bg-indigo-500",
  },
  SEO: { bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-500" },
};

const allCategories = [
  "All",
  ...Array.from(new Set(blogData.map((b) => b.category))),
];

const authorAvatars = {
  "Aryan Qasida": "A",
  "Sana Malik": "S",
};

const authorColors = {
  "Aryan Qasida": "bg-[#4CAF50]",
  "Sana Malik": "bg-[#e8798a]",
};

// ── FEATURED CARD (first blog, large) ────────────────────────────────────────
function FeaturedCard({ blog }) {
  const cat = categoryColors[blog.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };
  return (
    <Link to={`/blog/${blog.slug}`} className="group block">
      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 grid md:grid-cols-2 min-h-[340px]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[220px] md:min-h-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.bg} ${cat.text} mb-4`}
            >
              {blog.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-[#4CAF50] transition-colors duration-300">
              {blog.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
              {blog.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-full ${authorColors[blog.author] || "bg-gray-400"} flex items-center justify-center text-white text-xs font-bold`}
              >
                {authorAvatars[blog.author] || blog.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 leading-none">
                  {blog.author}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{blog.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {blog.readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── REGULAR CARD ──────────────────────────────────────────────────────────────
function BlogCard({ blog, index }) {
  const cat = categoryColors[blog.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format";
            }}
          />
          {/* Category pill over image */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${cat.bg} ${cat.text}`}
            >
              {blog.category}
            </span>
          </div>
          {/* Read time pill */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {blog.readTime}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          {/* Date */}
          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-2">
            {blog.date}
          </p>

          {/* Title */}
          <h2 className="font-bold text-gray-900 text-[1.05rem] leading-snug mb-2.5 group-hover:text-[#4CAF50] transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
            {blog.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full ${authorColors[blog.author] || "bg-gray-400"} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
              >
                {authorAvatars[blog.author] || blog.author.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-gray-700">
                {blog.author}
              </span>
            </div>
            <span className="text-xs font-semibold text-[#4CAF50] flex items-center gap-1 group-hover:gap-2 transition-all">
              Read
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogData.filter((blog) => {
    const matchCat =
      activeCategory === "All" || blog.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      blog.title.toLowerCase().includes(q) ||
      blog.description.toLowerCase().includes(q) ||
      blog.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-[#F6F8ED]">
      <Helmet>
        <title>
          Blog | Web Development & UI/UX Insights | Qasida Tech Studio
        </title>
        <meta
          name="description"
          content="Explore blogs on web development, UI/UX design, MERN stack, SEO, and latest tech trends by Qasida Tech Studio."
        />
        <link rel="canonical" href="https://qasidatechstudio.com/blog" />
      </Helmet>

      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <div className="px-6 md:px-12 pt-24 md:pt-32 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50] mb-2">
                Qasida Tech Studio
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-none">
                The Blog
              </h1>
              <p className="text-gray-500 mt-3 text-base max-w-md">
                Practical writing on web development, design, business, and
                career — no filler.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full md:w-72">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/30 focus:border-[#4CAF50] transition-all shadow-sm"
              />
            </div>
          </div>

          {/* ── CATEGORY FILTERS ───────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {allCategories.map((cat) => {
              const cs = categoryColors[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-sm"
                      : `bg-white text-gray-600 border-gray-200 hover:border-gray-400`
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-1.5 text-xs ${isActive ? "text-white/60" : "text-gray-400"}`}
                  >
                    {cat === "All"
                      ? blogData.length
                      : blogData.filter((b) => b.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold text-gray-700">
              No articles found
            </p>
            <p className="text-gray-400 mt-1 text-sm">
              Try a different keyword or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-[#4CAF50] text-sm font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-10">
                <FeaturedCard blog={featured} />
              </div>
            )}

            {/* Stats row */}
            {rest.length > 0 && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gray-200" />
                <p className="text-xs text-gray-400 font-medium whitespace-nowrap">
                  {rest.length} more article{rest.length !== 1 ? "s" : ""}
                </p>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((blog, i) => (
                  <BlogCard key={blog.slug} blog={blog} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;
