import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

// ─── SERVICE DATA ─────────────────────────────────────────────────────────────
const servicesData = {
  "logo-design": {
    title: "Logo Design",
    tagline: "Make a mark they won't forget.",
    description:
      "Your logo is the first thing people see — and the last thing they forget. We craft distinctive, timeless logos that build instant credibility and tell your brand's story without saying a word.",
    icon: "✦",
    accent: "from-amber-400 to-orange-500",
    accentLight: "bg-amber-50",
    accentBorder: "border-amber-200",
    accentText: "text-amber-700",
    stats: [
      { value: "48h", label: "First concepts" },
      { value: "∞", label: "Revisions" },
      { value: "5+", label: "File formats" },
    ],
    deliverables: [
      "Primary logo + variations (stacked, horizontal, icon-only)",
      "Full vector files (AI, EPS, SVG)",
      "PNG exports (transparent, white, black)",
      "Color & monochrome versions",
      "Brand color palette with hex/CMYK codes",
      "Typography recommendation",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "We learn your business, audience, competitors, and what you want the brand to feel like.",
      },
      {
        step: "02",
        title: "Research",
        desc: "We analyze your industry, study what works, and identify the visual language that fits your niche.",
      },
      {
        step: "03",
        title: "Concept Creation",
        desc: "We develop 3–5 distinct logo directions, each with a clear rationale behind the design.",
      },
      {
        step: "04",
        title: "Refinement",
        desc: "You choose a direction, we refine it through feedback rounds until it's exactly right.",
      },
      {
        step: "05",
        title: "Final Delivery",
        desc: "You receive a complete logo package in every format you'll ever need, organized and ready to use.",
      },
    ],
    faqs: [
      {
        q: "How many concepts will I see?",
        a: "You'll receive 3–5 initial concepts, each exploring a different direction. After selecting one, we refine it until you're happy.",
      },
      {
        q: "What if I don't like any of the concepts?",
        a: "We offer a full revision round. If the direction genuinely isn't working, we start fresh — this almost never happens after a thorough discovery call.",
      },
      {
        q: "Do I own the logo?",
        a: "100%. Once the project is complete and paid, all rights transfer to you. We retain nothing.",
      },
    ],
  },

  "graphic-design": {
    title: "Graphic Design",
    tagline: "Visuals that stop the scroll.",
    description:
      "In a world drowning in content, design is your competitive edge. We create graphics that grab attention, communicate clearly, and make your brand look like it belongs at the top of its industry.",
    icon: "◈",
    accent: "from-pink-500 to-rose-600",
    accentLight: "bg-pink-50",
    accentBorder: "border-pink-200",
    accentText: "text-pink-700",
    stats: [
      { value: "24h", label: "Turnaround" },
      { value: "100+", label: "Projects done" },
      { value: "10+", label: "Industries" },
    ],
    deliverables: [
      "Social media posts & story templates",
      "Ad creatives (Meta, Google, YouTube)",
      "Marketing posters & flyers",
      "Presentation decks & pitch decks",
      "Email marketing banners",
      "Print-ready files (300 DPI CMYK)",
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        desc: "We take a detailed brief covering your audience, message, platform, and brand guidelines.",
      },
      {
        step: "02",
        title: "Design",
        desc: "First drafts are delivered fast — typically within 24–48 hours depending on scope.",
      },
      {
        step: "03",
        title: "Feedback",
        desc: "You review and share feedback. We iterate until the design is exactly what you need.",
      },
      {
        step: "04",
        title: "Delivery",
        desc: "Final files delivered in all required formats, organized by size and platform.",
      },
    ],
    faqs: [
      {
        q: "What file formats do you deliver?",
        a: "We deliver in whatever formats you need — typically PNG, JPG, PDF, and editable source files (PSD or Figma).",
      },
      {
        q: "Can you match our existing brand?",
        a: "Absolutely. Send us your brand guidelines and we'll ensure everything stays consistent.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes — many clients prefer a monthly design package. Reach out and we'll build a plan around your volume.",
      },
    ],
  },

  branding: {
    title: "Branding",
    tagline: "Build a brand people trust before they buy.",
    description:
      "Branding is not your logo — it's the complete visual and emotional identity of your business. We create brand systems that ensure every touchpoint communicates the same story, consistently and memorably.",
    icon: "⬡",
    accent: "from-violet-500 to-purple-700",
    accentLight: "bg-violet-50",
    accentBorder: "border-violet-200",
    accentText: "text-violet-700",
    stats: [
      { value: "Full", label: "Identity system" },
      { value: "1", label: "Brand guideline doc" },
      { value: "3–4", label: "Week delivery" },
    ],
    deliverables: [
      "Logo suite (primary, secondary, icon)",
      "Brand color palette (primary + secondary + neutral)",
      "Typography system (display + body fonts)",
      "Iconography & illustration style",
      "Brand guidelines document (PDF)",
      "Stationery mockups (business card, letterhead)",
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery",
        desc: "Deep dive into your business, values, target audience, and competitive landscape.",
      },
      {
        step: "02",
        title: "Brand Strategy",
        desc: "We define your positioning, voice, and visual direction before any design work begins.",
      },
      {
        step: "03",
        title: "Visual Identity",
        desc: "Logo, color palette, typography, and all visual elements are designed cohesively.",
      },
      {
        step: "04",
        title: "Brand Guidelines",
        desc: "Everything is documented in a comprehensive brand guide your whole team can use.",
      },
      {
        step: "05",
        title: "Handoff",
        desc: "Complete asset package delivered, organized, and ready for any use case.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between a logo and branding?",
        a: "A logo is one element. Branding is the complete visual system — logo, colors, typography, imagery style, tone of voice — that makes your business recognizable everywhere.",
      },
      {
        q: "Do I need branding if I'm just starting out?",
        a: "Yes, especially if you're starting out. Getting it right early means everything you build from day one looks professional and consistent.",
      },
      {
        q: "Can you rebrand an existing business?",
        a: "Absolutely. Rebrands are some of our favorite projects. We handle them with respect for what's working while upgrading what isn't.",
      },
    ],
  },

  "ui-ux": {
    title: "UI/UX Design",
    tagline: "Interfaces people enjoy using.",
    description:
      "Good UI/UX isn't decoration — it's the difference between a product people recommend and one they abandon. We design digital experiences that are beautiful, intuitive, and engineered to convert.",
    icon: "⬚",
    accent: "from-sky-500 to-blue-700",
    accentLight: "bg-sky-50",
    accentBorder: "border-sky-200",
    accentText: "text-sky-700",
    stats: [
      { value: "Figma", label: "Design tool" },
      { value: "3–6", label: "Week projects" },
      { value: "Dev", label: "Ready handoff" },
    ],
    deliverables: [
      "User research & persona development",
      "Information architecture & user flows",
      "Low-fidelity wireframes",
      "High-fidelity UI mockups",
      "Interactive Figma prototype",
      "Developer-ready handoff with specs",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        desc: "We study your users, their goals, pain points, and the competitive landscape.",
      },
      {
        step: "02",
        title: "Architecture",
        desc: "We map out information architecture and user flows to ensure the product is logical before we make it beautiful.",
      },
      {
        step: "03",
        title: "Wireframes",
        desc: "Low-fidelity screens establish layout and functionality without visual distraction.",
      },
      {
        step: "04",
        title: "UI Design",
        desc: "High-fidelity designs with your brand applied — every pixel considered.",
      },
      {
        step: "05",
        title: "Prototype & Test",
        desc: "Interactive prototype tested with real users to validate before development.",
      },
      {
        step: "06",
        title: "Dev Handoff",
        desc: "Figma file with annotations, specs, and assets organized for a smooth developer handoff.",
      },
    ],
    faqs: [
      {
        q: "Do you conduct user testing?",
        a: "Yes. We run moderated usability tests with real users from your target audience and iterate based on findings.",
      },
      {
        q: "Can you design for mobile and web?",
        a: "Absolutely. We design responsive systems that work across all screen sizes from the start.",
      },
      {
        q: "Can you work with our existing design system?",
        a: "Yes. We can extend your current system or build a new one — whatever fits your team's workflow best.",
      },
    ],
  },

  "web-development": {
    title: "Web Development",
    tagline: "Fast websites. Clean code. Real results.",
    description:
      "We build websites and web applications that perform as well as they look. Modern stack, clean architecture, SEO-ready, and deployed for speed — everything your business needs to compete online.",
    icon: "⟨⟩",
    accent: "from-emerald-400 to-green-600",
    accentLight: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    accentText: "text-emerald-700",
    stats: [
      { value: "99+", label: "PageSpeed score" },
      { value: "MERN", label: "Core stack" },
      { value: "SSL", label: "Secure by default" },
    ],
    deliverables: [
      "Fully responsive website (mobile-first)",
      "SEO optimization (meta, schema, sitemap)",
      "Performance optimization (Core Web Vitals)",
      "CMS integration (if needed)",
      "Contact forms & integrations",
      "Deployment + 30-day post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Scope & Plan",
        desc: "We define pages, features, tech stack, and timeline before writing a single line of code.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Wireframes and high-fidelity designs are approved before development begins.",
      },
      {
        step: "03",
        title: "Development",
        desc: "We build with React/Next.js on the frontend and Node.js/Express on the backend.",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Cross-browser, cross-device, performance, and accessibility testing.",
      },
      {
        step: "05",
        title: "Launch",
        desc: "Deployed with SSL, CDN, and all production configurations in place.",
      },
      {
        step: "06",
        title: "Support",
        desc: "30 days of post-launch support included. Ongoing maintenance available.",
      },
    ],
    faqs: [
      {
        q: "How long does a website take?",
        a: "A standard business website takes 3–5 weeks. E-commerce or web applications take 6–12 weeks depending on complexity.",
      },
      {
        q: "Do you handle hosting and domain?",
        a: "We can manage the full setup or work with your existing providers — whatever you prefer.",
      },
      {
        q: "Will I be able to edit the site myself?",
        a: "Yes. We integrate a CMS for content-heavy sites so you can update text, images, and blog posts without touching code.",
      },
    ],
  },

  "app-development": {
    title: "App Development",
    tagline: "Apps that users open twice a day.",
    description:
      "We build mobile and web applications that are fast, scalable, and genuinely enjoyable to use. From MVPs to full-scale products, we take your idea from concept to the App Store.",
    icon: "◻",
    accent: "from-indigo-500 to-blue-600",
    accentLight: "bg-indigo-50",
    accentBorder: "border-indigo-200",
    accentText: "text-indigo-700",
    stats: [
      { value: "iOS+", label: "Android ready" },
      { value: "MVP", label: "In 6–8 weeks" },
      { value: "API", label: "First architecture" },
    ],
    deliverables: [
      "Cross-platform mobile app (React Native)",
      "Backend API (Node.js + MongoDB)",
      "User authentication (JWT / OAuth)",
      "Push notifications",
      "Admin dashboard",
      "App Store & Play Store submission",
    ],
    process: [
      {
        step: "01",
        title: "Product Definition",
        desc: "We scope every feature, define the MVP, and create a development roadmap.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        desc: "Complete app UI designed in Figma with interactive prototype before any code.",
      },
      {
        step: "03",
        title: "Backend",
        desc: "API, database, authentication, and all server logic built and tested.",
      },
      {
        step: "04",
        title: "Frontend",
        desc: "React Native app built against the API with full design implementation.",
      },
      {
        step: "05",
        title: "QA Testing",
        desc: "Device testing, performance testing, and bug fixes before release.",
      },
      {
        step: "06",
        title: "Launch",
        desc: "App Store and Play Store submission + deployment of backend to production.",
      },
    ],
    faqs: [
      {
        q: "Do you build for both iOS and Android?",
        a: "Yes. We use React Native which compiles to native iOS and Android from a single codebase — maximizing quality while reducing cost.",
      },
      {
        q: "What does an MVP cost?",
        a: "MVP projects typically start from ₹2,00,000 depending on features. We'll give you an accurate quote after a free scoping call.",
      },
      {
        q: "Do you handle the App Store submission?",
        a: "Yes. We handle the full submission process including screenshots, descriptions, and compliance requirements for both stores.",
      },
    ],
  },
};

// ─── OTHER SERVICES (for bottom navigation) ───────────────────────────────────
const allServices = [
  { slug: "logo-design", title: "Logo Design", icon: "✦" },
  { slug: "graphic-design", title: "Graphic Design", icon: "◈" },
  { slug: "branding", title: "Branding", icon: "⬡" },
  { slug: "ui-ux", title: "UI/UX Design", icon: "⬚" },
  { slug: "web-development", title: "Web Development", icon: "⟨⟩" },
  { slug: "app-development", title: "App Development", icon: "◻" },
];

// ─── ACCORDION ────────────────────────────────────────────────────────────────
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 text-left group"
          >
            <span className="font-semibold text-gray-900 text-[0.97rem] group-hover:text-[#4CAF50] transition-colors">
              {item.q}
            </span>
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-gray-600 text-sm leading-relaxed pr-8">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
import { useState } from "react";

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const others = allServices.filter((s) => s.slug !== serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F6F8ED] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Service Not Found</h1>
        <Link
          to="/services"
          className="text-[#4CAF50] hover:underline font-medium"
        >
          ← All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F8ED]">
      <Helmet>
        <title>{service.title} Services in India | Qasida Tech Studio</title>
        <meta name="description" content={service.description} />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/services/${serviceId}`}
        />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] text-white pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/services"
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
            All Services
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} text-white text-2xl font-bold mb-6 shadow-lg`}
              >
                {service.icon}
              </div>
              <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-2">
                Qasida Tech Studio
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-none tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-medium italic">
                {service.tagline}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-10">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-extrabold text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-white/70 text-base leading-relaxed max-w-2xl">
            {service.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43a047] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-md"
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
            <a
              href="https://wa.me/918873978144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-12">
          {/* What's Included */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span
                className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${service.accent}`}
              />
              What's Included
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-xl border ${service.accentBorder} ${service.accentLight}`}
                >
                  <svg
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.accentText}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span
                className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${service.accent}`}
              />
              Our Process
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${service.accent} text-white flex items-center justify-center text-xs font-bold shadow-sm z-10`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                      <p className="font-bold text-gray-900 mb-1">
                        {step.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span
                className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${service.accent}`}
              />
              Frequently Asked
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-2">
              <Accordion items={service.faqs} />
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          {/* Quick Contact Card */}
          <div className="bg-[#1a1a1a] text-white rounded-2xl p-6">
            <p className="text-lg font-bold mb-1">Ready to get started?</p>
            <p className="text-white/50 text-sm mb-5">
              Tell us about your project and we'll get back to you within 2
              hours.
            </p>
            <Link
              to="/contact"
              className="block text-center bg-[#4CAF50] hover:bg-[#43a047] text-white py-3 rounded-xl font-semibold text-sm transition-colors mb-3"
            >
              Get a Free Quote
            </Link>
            <a
              href="mailto:hello@qasidatechstudio.com"
              className="block text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold text-sm transition-colors border border-white/10"
            >
              hello@qasidatechstudio.com
            </a>
          </div>

          {/* Why Us */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Why Qasida Tech Studio
            </p>
            <div className="space-y-3">
              {[
                { icon: "⚡", text: "Fast turnaround, no chasing" },
                { icon: "🎯", text: "Focused on your business goals" },
                { icon: "💬", text: "Clear communication always" },
                { icon: "🔒", text: "You own everything we make" },
                { icon: "🔄", text: "Revisions until you're happy" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
              Other Services
            </p>
            <div className="space-y-1">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm font-mono text-gray-400">
                    {s.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#4CAF50] transition-colors">
                    {s.title}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#4CAF50] ml-auto transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── BOTTOM CTA BANNER ─────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
        <div
          className={`bg-gradient-to-br ${service.accent} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
                Let's Work Together
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Ready to invest in your
                <br className="hidden md:block" /> {service.title.toLowerCase()}
                ?
              </h2>
              <p className="text-white/70 mt-2 text-sm max-w-md">
                Every great project starts with a single conversation. Tell us
                what you need — no commitment required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
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
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/20"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
