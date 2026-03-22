import {
  ArrowRight,
  Coffee,
  ExternalLink,
  Eye,
  Layout,
  Palette,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const iconMap = { Eye, Layout, Coffee, Zap, Palette, Target };

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));
  const [activeTab, setActiveTab] = useState("after");

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F6F8ED] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Project Not Found</h1>
        <Link
          to="/portfolio"
          className="text-[#076D5D] hover:underline font-medium"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const categoryColors = {
    "UI/UX Design": { bg: "bg-sky-100", text: "text-sky-700" },
    "Graphic Design": { bg: "bg-pink-100", text: "text-pink-700" },
    "Web App": { bg: "bg-emerald-100", text: "text-emerald-700" },
    Branding: { bg: "bg-amber-100", text: "text-amber-700" },
  };
  const cat = categoryColors[project.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };

  return (
    <div className="bg-[#F6F8ED] text-gray-900 min-h-screen">
      <Helmet>
        <title>{project.name} | Case Study | Qasida Tech Studio</title>
        <meta name="description" content={project.description} />
        <meta
          name="keywords"
          content={`${project.title}, web development project, UI UX case study, Qasida Tech Studio`}
        />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/projects/${project.id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${project.title} | Qasida Tech Studio`}
        />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] text-white pt-28 pb-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.bg} ${cat.text}`}
                >
                  {project.category}
                </span>
                <span className="text-white/30 text-xs font-medium uppercase tracking-widest">
                  {project.year}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-none tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#076D5D] hover:bg-[#065a4c] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/10"
              >
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 -mt-1">
        <div className="rounded-b-3xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[560px] object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&auto=format";
            }}
          />
        </div>
      </div>

      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {["challenge", "goal", "approach"].map((key) => (
            <div
              key={key}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-lg bg-[#076D5D]/10 flex items-center justify-center mb-4">
                <span className="text-[#076D5D] text-xs font-bold uppercase">
                  {key[0]}
                </span>
              </div>
              <p className="text-xs font-bold text-[#076D5D] uppercase tracking-widest mb-3">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.overview[key]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Before & After
        </h2>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            {["before", "after"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#076D5D] text-white shadow-sm"
                    : "bg-gray-100 text-gray-500 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab === "before" ? "Before" : "After"}
              </button>
            ))}
          </div>

          {activeTab === "before" && (
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <img
                  src={project.beforeImage}
                  alt="Before"
                  className="w-full"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&auto=format";
                  }}
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {project.issues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                      Issue {idx + 1}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {issue}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "after" && (
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <img
                  src={project.afterImage}
                  alt="After"
                  className="w-full"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&auto=format";
                  }}
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {project.improvements.map((imp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl"
                  >
                    <p className="text-xs font-bold text-[#076D5D] uppercase tracking-wider mb-2">
                      Win {idx + 1}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {imp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── OBJECTIVES ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Design Objectives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.objectives.map((item, idx) => {
            const Icon = iconMap[item.icon] || Eye;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#076D5D]/10 flex items-center justify-center mb-4 group-hover:bg-[#076D5D]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#076D5D]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Design Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {project.process.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line */}
              {idx < project.process.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-full w-full h-px bg-gray-200 z-0"
                  style={{ width: "calc(100% - 2.25rem)", left: "2.25rem" }}
                />
              )}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#076D5D]/30 transition-all duration-200 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#076D5D] text-white flex items-center justify-center text-xs font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STYLE GUIDE ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Visual Style Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Colors */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-bold text-gray-900 mb-5 uppercase tracking-wider text-sm">
              Color Palette
            </h3>
            <div className="space-y-3">
              {project.colors.map((color, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm border border-gray-100 flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {color.name}
                    </p>
                    <p className="text-xs text-gray-400 font-mono">
                      {color.hex} · {color.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-bold text-gray-900 mb-5 uppercase tracking-wider text-sm">
              Typography & Details
            </h3>
            <div className="space-y-5">
              {["headings", "body", "accents"].map((key) => (
                <div
                  key={key}
                  className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <p className="text-[10px] font-bold text-[#076D5D] uppercase tracking-widest mb-1.5">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p
                    className={`text-gray-700 ${
                      key === "headings"
                        ? "text-xl font-bold"
                        : key === "body"
                          ? "text-sm text-gray-500"
                          : "text-xs text-gray-400"
                    }`}
                  >
                    {project.typography[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY IMPROVEMENTS ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Key Improvements
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {project.keyImprovements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 hover:shadow-md hover:border-[#076D5D]/20 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#076D5D] text-white flex items-center justify-center text-xs font-bold">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#076D5D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DELIVERABLES ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#076D5D]" />
          Deliverables
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {project.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center hover:shadow-md hover:border-[#076D5D]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────────── */}
      <footer className="max-w-6xl mx-auto px-6 md:px-16 pb-20 pt-4">
        <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#076D5D]/20" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4CAF50] mb-3">
                Next Step
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                {project.footerCTA.title}
              </h2>
              <p className="text-white/60 text-sm max-w-lg leading-relaxed">
                {project.footerCTA.desc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to={project.footerCTA.link}
                className="inline-flex items-center justify-center gap-2 bg-[#076D5D] hover:bg-[#065a4c] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
              >
                {project.footerCTA.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/10"
              >
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
