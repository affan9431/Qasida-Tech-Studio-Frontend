import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    image: "/images/project-change.png",
    title: "Starbucks Landing Page Redesign",
    description:
      "A modern, intuitive redesign enhancing clarity, product discovery, and user experience while staying true to the iconic brand identity.",
    category: "UI/UX Design",
    tags: ["Redesign", "Figma", "Web"],
    year: "2025",
    type: "internal",
    link: `/projects/1`,
    featured: true,
  },
  {
    id: 2,
    image: "/images/project-1.jpg",
    title: "Fruit Fusion Beverage Poster",
    description:
      "A vibrant visual crafted to highlight freshness, energy, and bold flavor tones through layered composition and rich color work.",
    category: "Graphic Design",
    tags: ["Poster", "Branding", "Print"],
    year: "2025",
    type: "internal",
    link: `/projects/2`,
    featured: false,
  },
  {
    id: 3,
    image: "/images/project-2.jpg",
    title: "Premium Haircare Product Artwork",
    description:
      "A sleek, modern product ad with a clean beauty aesthetic, soft lighting, and meticulous attention to product presentation.",
    category: "Graphic Design",
    tags: ["Ad Creative", "Beauty", "Social"],
    year: "2025",
    type: "internal",
    link: `/projects/3`,
    featured: false,
  },
  {
    id: 4,
    image: "/images/project-3.png",
    title: "TripWise – Smart Travel Planning",
    description:
      "A smart travel planner app that helps users organize trips, discover destinations, and manage itineraries effortlessly from one dashboard.",
    category: "Web App",
    tags: ["React", "Live Site", "Product"],
    year: "2026",
    type: "external",
    link: "https://tripwise-planner.netlify.app/app/home",
    featured: true,
  },
];

const categoryColors = {
  "UI/UX Design": { bg: "bg-sky-100", text: "text-sky-700" },
  "Graphic Design": { bg: "bg-pink-100", text: "text-pink-700" },
  "Web App": { bg: "bg-emerald-100", text: "text-emerald-700" },
  Branding: { bg: "bg-amber-100", text: "text-amber-700" },
};

const allCategories = [
  "All",
  ...Array.from(new Set(projectData.map((p) => p.category))),
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "7+", label: "Happy Clients" },
  { value: "5+", label: "Months Active" },
  { value: "100%", label: "Client Satisfaction" },
];

// ── FEATURED CARD ─────────────────────────────────────────────────────────────
function FeaturedCard({ item }) {
  const cat = categoryColors[item.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };
  const isExternal = item.type === "external";

  const Inner = () => (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 grid md:grid-cols-[3fr_2fr] min-h-[340px]">
      {/* Image */}
      <div className="relative overflow-hidden min-h-[240px] md:min-h-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

        {/* Featured badge */}
        <div className="absolute top-4 left-4 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
          Featured
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${cat.bg} ${cat.text}`}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-7 md:p-9">
        <div>
          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest mb-3">
            {item.year}
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-[#076D5D] transition-colors duration-300">
            {item.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-[11px] font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#076D5D] font-bold text-sm group-hover:gap-3 transition-all duration-200">
          {isExternal ? "View Live Site" : "View Case Study"}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={
                isExternal
                  ? "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  : "M17 8l4 4m0 0l-4 4m4-4H3"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return isExternal ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <Inner />
    </a>
  ) : (
    <Link to={item.link}>
      <Inner />
    </Link>
  );
}

// ── REGULAR CARD ──────────────────────────────────────────────────────────────
function ProjectCard({ item, index }) {
  const cat = categoryColors[item.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };
  const isExternal = item.type === "external";

  const Inner = () => (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${cat.bg} ${cat.text}`}
          >
            {item.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {item.year}
        </div>
        {/* Hover overlay CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-gray-900 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            {isExternal ? "View Live" : "View Details"}
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
                d={
                  isExternal
                    ? "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    : "M17 8l4 4m0 0l-4 4m4-4H3"
                }
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h2 className="font-bold text-gray-900 text-[1.05rem] leading-snug mb-2 group-hover:text-[#076D5D] transition-colors line-clamp-2">
          {item.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-xs font-bold text-[#076D5D] flex items-center gap-1 group-hover:gap-2 transition-all">
            {isExternal ? "Live Site" : "Case Study"}
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
  );

  return isExternal ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Inner />
    </a>
  ) : (
    <Link to={item.link} className="block h-full">
      <Inner />
    </Link>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = projectData
    .filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return Number(b.year) - Number(a.year);
      if (sortBy === "oldest") return Number(a.year) - Number(b.year);
      return 0;
    });

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F6F8ED]">
      <Helmet>
        <title>Portfolio | Our Work | Qasida Tech Studio</title>
        <meta
          name="description"
          content="Explore our portfolio of UI/UX design, graphic design, branding, and web development projects."
        />
        <link rel="canonical" href="https://qasidatechstudio.com/portfolio" />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] text-white pt-28 pb-20 px-6 md:px-16 relative overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#076D5D]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4CAF50] mb-4">
            Qasida Tech Studio
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-5">
            Our Work
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            A curated collection of design, development, and creative projects —
            each one crafted with intention and built to perform.
          </p>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-white leading-none">
                  {s.value}
                </p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FILTERS BAR ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-[#F6F8ED]/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category pills */}
          <div className="flex flex-wrap gap-1.5">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                }`}
              >
                {cat}
                <span
                  className={`ml-1 text-[10px] ${activeCategory === cat ? "text-white/50" : "text-gray-300"}`}
                >
                  {cat === "All"
                    ? projectData.length
                    : projectData.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Right side: search + sort */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
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
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#076D5D]/20 focus:border-[#076D5D] w-36 transition-all"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-1.5 px-3 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 focus:outline-none focus:border-[#076D5D] cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── PROJECTS ──────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold text-gray-700">
              No projects found
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Try a different keyword or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-[#076D5D] text-sm font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Result count */}
            <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-wider">
              Showing {filtered.length} project
              {filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            </p>

            {/* Featured */}
            {featured.length > 0 && (
              <div
                className={`grid gap-6 mb-6 ${featured.length >= 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
              >
                {featured.map((item) => (
                  <FeaturedCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {/* Divider */}
            {featured.length > 0 && regular.length > 0 && (
              <div className="flex items-center gap-3 my-8">
                <div className="h-px flex-1 bg-gray-200" />
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest whitespace-nowrap">
                  More Projects
                </p>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}

            {/* Regular grid */}
            {regular.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regular.map((item, i) => (
                  <ProjectCard key={item.id} item={item} index={i} />
                ))}
              </div>
            )}
          </>
        )}

        {/* ── CTA BANNER ──────────────────────────────────────────── */}
        <div className="mt-20 bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#076D5D]/20 pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] mb-2">
                Work With Us
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-2">
                Have a project in mind?
              </h2>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                Whether it's a rebrand, a new website, or a full product build —
                we're ready to make it happen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#076D5D] hover:bg-[#065a4c] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
              >
                Start a Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
