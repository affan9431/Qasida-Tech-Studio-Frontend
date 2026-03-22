import {
  ArrowRight,
  Coffee,
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

// Map icon strings to components
const iconMap = { Eye, Layout, Coffee, Zap, Palette, Target };

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));
  console.log(project);
  const [activeTab, setActiveTab] = useState("before");

  if (!project) return <p>Project not found</p>;

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>
          {project.title} | Web Development Case Study | Qasida Tech Studio
        </title>

        <meta name="description" content={project.description} />

        <meta
          name="keywords"
          content={`${project.title}, web development project, UI UX case study, MERN project`}
        />

        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/app/projects/${project.id}`}
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${project.title} | Qasida Tech Studio`}
        />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:url"
          content={`https://qasidatechstudio.com/app/projects/${project.id}`}
        />
        <meta property="og:image" content={project.image} />
      </Helmet>
      {/* Before & After */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Before & After</h2>

        <div className="bg-card/50 border border-border rounded-xl p-8 mb-8">
          <div className="flex gap-4 mb-8">
            {["before", "after"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition cursor-pointer ${
                  activeTab === tab
                    ? "bg-red-100 text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "before" ? "Before" : "After"}
              </button>
            ))}
          </div>

          {activeTab === "before" && (
            <div className="space-y-4">
              <img
                src={project.beforeImage}
                alt="Before"
                className="w-full rounded-lg"
              />
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {project.issues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                  >
                    <p className="text-sm font-semibold text-destructive mb-2">
                      Issue {idx + 1}
                    </p>
                    <p className="text-xs text-muted-foreground">{issue}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "after" && (
            <div className="space-y-4">
              <img
                src={project.afterImage}
                alt="After"
                className="w-full rounded-lg"
              />
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {project.improvements.map((imp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-accent/10 border border-accent/20 rounded-lg"
                  >
                    <p className="text-sm font-semibold text-accent mb-2">
                      Improvement {idx + 1}
                    </p>
                    <p className="text-xs text-muted-foreground">{imp}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {["challenge", "goal", "approach"].map((key) => (
            <div key={key} className="space-y-3">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview[key]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Design Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.objectives.map((item, idx) => {
            const Icon = iconMap[item.icon] || Eye;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12">Design Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {project.process.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              {idx < project.process.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-8 top-4 w-6 h-6 text-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Visual Style Guide */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Visual Style Guide</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Colors */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#076D5D] font-sono">
              Color Palette
            </h3>
            <div className="space-y-3">
              {project.colors.map((color, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-lg ${color.bgClass || ""} ${
                      color.bgClass ? "" : "border border-gray-300"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-semibold text-[#076D5D] font-sono">
                      {color.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-sono">
                      {color.hex} - {color.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#076D5D] font-sono">
              Typography & Details
            </h3>
            <div className="space-y-4">
              {["headings", "body", "accents"].map((key) => (
                <div key={key}>
                  <p className="text-sm font-semibold text-[#076D5D] uppercase tracking-wider mb-2 font-sono">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p
                    className={`font-sono ${
                      key === "headings"
                        ? "text-2xl font-bold"
                        : key === "body"
                          ? "text-base text-muted-foreground"
                          : "text-sm text-muted-foreground"
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

      {/* Key Improvements */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Key Improvements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {project.keyImprovements.map((item, idx) => (
            <div key={idx} className="p-6 border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Deliverables</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-8 text-center bg-card rounded-lg border border-border hover:border-primary/50 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {project.footerCTA.title}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {project.footerCTA.desc}
          </p>
          <Link to={project.footerCTA.link}>
            <button className="px-8 py-3 bg-[#076D5D] text-white rounded-lg font-semibold hover:bg-primary-foreground/90 transition">
              {project.footerCTA.buttonText}
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
