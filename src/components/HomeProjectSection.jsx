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

// ── FEATURED CARD (wide, horizontal) ─────────────────────────────────────────
function FeaturedCard({ item }) {
  const cat = categoryColors[item.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };
  const isExternal = item.type === "external";

  const CardContent = () => (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 grid md:grid-cols-[3fr_2fr] min-h-[320px]">
      {/* Image */}
      <div className="relative overflow-hidden min-h-[240px] md:min-h-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

        {/* Featured pill */}
        <div className="absolute top-4 left-4 bg-[#1a1a1a]/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
          Featured
        </div>

        {/* Category */}
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
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">
            {item.year}
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-[#076D5D] transition-colors duration-300">
            {item.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Tags */}
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

        {/* CTA */}
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
      <CardContent />
    </a>
  ) : (
    <Link to={item.link}>
      <CardContent />
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

  const CardContent = () => (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${cat.bg} ${cat.text}`}
          >
            {item.category}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {item.year}
        </div>

        {/* Hover CTA overlay */}
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

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="font-bold text-gray-900 text-[1.05rem] leading-snug mb-2 group-hover:text-[#076D5D] transition-colors duration-200 line-clamp-2">
          {item.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>

        {/* Tags */}
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

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-xs font-bold text-[#076D5D] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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
      <CardContent />
    </a>
  ) : (
    <Link to={item.link} className="block h-full">
      <CardContent />
    </Link>
  );
}

// ── MAIN SECTION ──────────────────────────────────────────────────────────────
function HomeProjectSection() {
  const featured = projectData.filter((p) => p.featured);
  const regular = projectData.filter((p) => !p.featured);

  return (
    <section className="bg-[#F6F8ED] py-24 md:py-32">
      <div className="px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#076D5D] mb-2">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
              Designs That Speak
              <br className="hidden md:block" /> Before We Do
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-lg leading-relaxed">
              A selection of handcrafted concepts reflecting our design
              language, attention to detail, and love for timeless digital
              craftsmanship.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            View All Work
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Featured Row */}
        {featured.length > 0 && (
          <div
            className={`grid gap-6 mb-6 ${featured.length === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
          >
            {featured.map((item) => (
              <FeaturedCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Regular Grid */}
        {regular.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className="flex items-center gap-3 my-6">
                <div className="h-px flex-1 bg-gray-200" />
                <p className="text-xs text-gray-400 font-medium whitespace-nowrap">
                  More Projects
                </p>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((item, i) => (
                <ProjectCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </>
        )}

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "7+", label: "Happy Clients" },
            { value: "5+", label: "Months Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white text-center py-8 px-4 hover:bg-gray-50 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-none">
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProjectSection;
