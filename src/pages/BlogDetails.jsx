import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

// ─── FULL BLOG DATA ───────────────────────────────────────────────────────────
const blogData = {
  "mern-chat-app": {
    title: "How to Build a MERN Chat App",
    image: "/images/blog1.png",
    date: "March 15, 2026",
    category: "Development",
    readTime: "9 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["MERN", "Socket.io", "React", "Node.js", "MongoDB"],
    excerpt:
      "Building a real-time chat application is one of the best ways to understand full-stack development. You will learn how frontend and backend communicate using WebSockets.",
    content: [
      {
        type: "intro",
        text: "Building a real-time chat application is one of the most rewarding full-stack projects you can undertake. It forces you to understand how data flows between client and server in real time, how to handle authentication securely, and how to architect a scalable backend — all skills that are directly applicable to production systems.",
      },
      {
        type: "heading",
        text: "What You'll Build",
      },
      {
        type: "text",
        text: "By the end of this guide, you'll have a fully functional real-time chat application with user authentication, private messaging, online presence indicators, and message history. This is not a toy demo — it's a production-quality app you can deploy and show in your portfolio.",
      },
      {
        type: "heading",
        text: "Tech Stack Overview",
      },
      {
        type: "text",
        text: "We'll use the MERN stack — MongoDB, Express, React, and Node.js — paired with Socket.io for real-time communication. Here's why each piece matters:",
      },
      {
        type: "list",
        items: [
          "MongoDB — Flexible, document-based storage perfect for chat messages and user data.",
          "Express.js — Minimal, fast backend framework that handles routing and middleware cleanly.",
          "React — Component-based UI that makes managing complex chat state straightforward.",
          "Node.js — Single-threaded, event-driven runtime ideal for handling many concurrent connections.",
          "Socket.io — Abstraction over WebSockets with fallbacks and room support built in.",
        ],
      },
      {
        type: "heading",
        text: "Step 1: Backend Setup with Express & Node",
      },
      {
        type: "text",
        text: "Start by initializing a Node.js project and installing your dependencies. Your Express server will serve as both the REST API and the Socket.io host.",
      },
      {
        type: "code",
        language: "bash",
        text: `mkdir mern-chat && cd mern-chat
npm init -y
npm install express mongoose socket.io cors dotenv bcryptjs jsonwebtoken`,
      },
      {
        type: "text",
        text: "Create your main server file and attach Socket.io to the HTTP server. Keep your socket logic in a separate file to maintain clean architecture.",
      },
      {
        type: "code",
        language: "javascript",
        text: `// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL, methods: ['GET', 'POST'] }
});

connectDB();
app.use(express.json());

// Attach socket handlers
require('./sockets/chat')(io);

server.listen(5000, () => console.log('Server running on port 5000'));`,
      },
      {
        type: "heading",
        text: "Step 2: MongoDB Schema Design",
      },
      {
        type: "text",
        text: "Design your schemas carefully. A User schema stores credentials and profile info, while a Message schema stores content, sender, receiver, and timestamp. Adding an index on timestamps dramatically improves query performance for fetching chat history.",
      },
      {
        type: "code",
        language: "javascript",
        text: `// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true, maxlength: 2000 },
  seen: { type: Boolean, default: false },
}, { timestamps: true });

messageSchema.index({ createdAt: -1 });
module.exports = mongoose.model('Message', messageSchema);`,
      },
      {
        type: "heading",
        text: "Step 3: JWT Authentication",
      },
      {
        type: "text",
        text: "Implement JWT-based auth with refresh tokens. Protect your REST routes with a middleware that verifies the token on every request. For Socket.io, validate the token during the handshake phase — not per-message — to reduce overhead.",
      },
      {
        type: "heading",
        text: "Step 4: React Frontend with Context API",
      },
      {
        type: "text",
        text: "Set up your React app with a global socket context so any component can emit events or listen to incoming messages. Use useReducer for complex chat state management — it scales far better than multiple useState calls.",
      },
      {
        type: "code",
        language: "javascript",
        text: `// context/SocketContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const s = io(import.meta.env.VITE_SERVER_URL, {
      auth: { token: user.token }
    });
    setSocket(s);
    return () => s.disconnect();
  }, [user]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => useContext(SocketContext);`,
      },
      {
        type: "heading",
        text: "Step 5: Deploying",
      },
      {
        type: "text",
        text: "Deploy your backend to Render and your frontend to Vercel. Set environment variables carefully — never commit your JWT secret or MongoDB URI. Enable CORS only for your production frontend URL in production mode.",
      },
      {
        type: "callout",
        text: "Pro Tip: Use Redis with Socket.io's adapter when you scale to multiple server instances. Otherwise, users on different servers won't receive each other's messages.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "text",
        text: "Completing this project gives you hands-on experience with real-time systems, stateless authentication, and scalable architecture. It's one of those projects that genuinely impresses technical hiring managers because it touches so many engineering concerns simultaneously.",
      },
    ],
  },

  "ui-ux-design-tips": {
    title: "Top UI/UX Design Tips for Beginners",
    image: "/images/blog2.jpg",
    date: "March 18, 2026",
    category: "Design",
    readTime: "7 min read",
    author: {
      name: "Sana Malik",
      role: "UI/UX Designer",
      avatar: "/images/author2.jpg",
    },
    tags: ["UI Design", "UX", "Figma", "Design System", "Beginner"],
    excerpt:
      "UI/UX design is not just about making things look good. It's about solving user problems and creating smooth, intuitive experiences.",
    content: [
      {
        type: "intro",
        text: "UI/UX design is one of those fields that looks easy from the outside — until you try to design something people actually enjoy using. Good design is invisible. Users don't notice it, and that's the point. This guide covers the fundamentals every beginner needs to internalize before touching Figma.",
      },
      {
        type: "heading",
        text: "1. Understand the Difference Between UI and UX",
      },
      {
        type: "text",
        text: "UI (User Interface) is what people see — buttons, colors, typography, layouts. UX (User Experience) is what people feel — how easy it is to complete a task, how intuitive navigation feels, how frustrating or delightful the journey is. You need both, but you must understand them as separate disciplines first.",
      },
      { type: "heading", text: "2. Start With the Problem, Not the Visual" },
      {
        type: "text",
        text: "Most beginners jump straight into aesthetics. Resist that urge. Before opening Figma, write down: who is the user, what do they want to do, and what's stopping them from doing it today? Your design should answer those questions. Beauty comes after clarity.",
      },
      { type: "heading", text: "3. Use a Grid System" },
      {
        type: "text",
        text: "Grids are the invisible scaffolding of great design. They create visual rhythm and make layouts feel coherent without the user knowing why. Use an 8pt grid — all your spacing, padding, and element sizes should be multiples of 8. Consistency at this level makes even simple designs feel polished.",
      },
      { type: "heading", text: "4. Master Typography Before Color" },
      {
        type: "text",
        text: "Typography carries about 90% of the information in most interfaces. If your type hierarchy is clear — headline, subheading, body, caption — your UI already communicates well. Limit yourself to two font families: one for headings, one for body. More than that creates visual noise.",
      },
      {
        type: "list",
        items: [
          "Never use more than 3 font sizes per screen.",
          "Maintain at least 4.5:1 contrast ratio for readability (WCAG AA).",
          "Line height of 1.5x for body text dramatically improves readability.",
          "Left-aligned text is almost always easier to read than centered text.",
        ],
      },
      { type: "heading", text: "5. Color Comes Last" },
      {
        type: "text",
        text: "Design in grayscale first. If your design works without color, it will work even better with it. Color should reinforce meaning — red for errors, green for success — not just decorate. Use a 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent.",
      },
      { type: "heading", text: "6. Design for Real Content" },
      {
        type: "text",
        text: "Placeholder text and perfect-length strings are the enemy of honest design. Test with names that are 3 characters long and names that are 40 characters. Test with missing avatars. Break your layouts intentionally to see where they fail, then fix them.",
      },
      {
        type: "callout",
        text: "Golden Rule: If you have to explain how something works, it's not designed well enough yet.",
      },
      { type: "heading", text: "7. Study Apps You Love" },
      {
        type: "text",
        text: "Open your most-used app and screenshot every screen you interact with for a week. Analyze why interactions feel smooth. Notice how much white space is used. Look at the micro-animations. Reverse-engineer the decisions. This is the fastest way to develop design intuition.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Great UI/UX design is learned through iteration and observation, not theory alone. Start small, test with real users, and always ask 'why is this hard?' Good design is 20% creativity and 80% understanding human behavior.",
      },
    ],
  },

  "web-development-trends-2026": {
    title: "Best Web Development Trends in 2026",
    image: "/images/blog3.jpg",
    date: "March 20, 2026",
    category: "Trends",
    readTime: "8 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Web Dev", "AI", "Serverless", "Web3", "Trends"],
    excerpt:
      "Web development is evolving rapidly. From AI-generated UIs to edge computing, here are the trends reshaping how we build for the web in 2026.",
    content: [
      {
        type: "intro",
        text: "Every year in web development feels like a decade in any other field. 2026 is no different — the tools we're building with today would have felt like science fiction just a few years ago. Here's what's actually moving the needle right now.",
      },
      { type: "heading", text: "1. AI-Assisted Development" },
      {
        type: "text",
        text: "AI coding assistants have gone from novelty to necessity. Developers using AI tools report 30–50% productivity gains on boilerplate and routine tasks. But more interestingly, AI is now integrated into the product layer — apps that adapt UI based on user behavior, generate personalized content, and automate decisions that previously required human review.",
      },
      { type: "heading", text: "2. Edge Computing & Edge-First Architecture" },
      {
        type: "text",
        text: "Serverless moved compute off your server. Edge computing moves it closer to the user — to CDN nodes distributed globally. Frameworks like Next.js and Remix have first-class edge runtime support. For most apps, this means sub-100ms response times globally with zero infrastructure management.",
      },
      { type: "heading", text: "3. React Server Components Go Mainstream" },
      {
        type: "text",
        text: "After years in experimental status, React Server Components (RSC) are now the default in Next.js and are spreading across the ecosystem. They eliminate the client-server waterfall for data fetching, reduce bundle sizes dramatically, and simplify component architecture for data-heavy applications.",
      },
      { type: "heading", text: "4. TypeScript Everywhere" },
      {
        type: "text",
        text: "TypeScript has achieved near-total dominance in the JavaScript ecosystem. Practically all major libraries ship TypeScript-first types. Teams that resisted are now migrating. The tooling — inference, autocomplete, refactoring safety — has simply become too valuable to ignore.",
      },
      { type: "heading", text: "5. Bun as a Node Replacement" },
      {
        type: "text",
        text: "Bun, the all-in-one JavaScript runtime, bundler, and package manager, has matured significantly. Its performance advantage over Node.js (often 3–5x faster for server tasks) combined with full Node API compatibility has convinced many teams to migrate. Expect this to accelerate.",
      },
      { type: "heading", text: "6. Component-Driven Design Systems" },
      {
        type: "text",
        text: "Shadcn/ui changed how developers think about component libraries — not as a dependency you install, but as code you own and customize. This philosophy is spreading. Teams are building lean, copy-paste design systems tailored to their product rather than fighting with opinionated libraries.",
      },
      {
        type: "callout",
        text: "Watch This Space: WebAssembly (WASM) is quietly enabling use cases that JavaScript simply can't handle — video editing, 3D rendering, and real-time audio processing — all running in the browser.",
      },
      { type: "heading", text: "7. Web3 Maturity" },
      {
        type: "text",
        text: "After the hype and crash cycle, Web3 is entering a quieter, more serious phase. Developers are building actual utility — verifiable credentials, decentralized identity, tokenized assets with real-world applications. The noise has faded; the builders remain.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "The web platform in 2026 is faster, more capable, and more developer-friendly than ever. The trends that matter aren't the hype cycles — they're the compounding improvements in tooling, performance, and DX that make building better products more achievable every year.",
      },
    ],
  },

  "website-cost-india-2026": {
    title: "How Much Does Website Development Cost in India (2026 Guide)",
    image: "/images/blog4.jpg",
    date: "March 22, 2026",
    category: "Business",
    readTime: "10 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Website Cost", "India", "Freelance", "Agency", "Pricing"],
    excerpt:
      "Complete breakdown of website development costs in India for startups and businesses — from landing pages to full-scale web applications.",
    content: [
      {
        type: "intro",
        text: "One of the most common questions Indian business owners and startups ask is: 'How much should a website cost?' The honest answer is: it depends — but this guide gives you the actual numbers so you can make an informed decision without being overcharged or getting burned by a too-cheap quote.",
      },
      { type: "heading", text: "Why Prices Vary So Much" },
      {
        type: "text",
        text: "Website development costs in India vary from ₹5,000 to ₹20+ lakhs depending on four factors: the complexity of what you're building, who you hire (freelancer vs agency vs studio), the quality of design, and the technology stack. Understanding these variables helps you evaluate quotes intelligently.",
      },
      { type: "heading", text: "Type 1: Landing Page / Brochure Website" },
      {
        type: "text",
        text: "A landing page or simple brochure site with 4–6 pages, contact form, and basic design. This is appropriate for local businesses, service providers, and consultants who need a professional online presence.",
      },
      {
        type: "list",
        items: [
          "Freelancer: ₹8,000 – ₹25,000",
          "Small Agency: ₹25,000 – ₹60,000",
          "Premium Studio: ₹60,000 – ₹1,50,000",
          "Timeline: 1–3 weeks",
        ],
      },
      { type: "heading", text: "Type 2: Business Website with CMS" },
      {
        type: "text",
        text: "A full business website with blog, content management system (WordPress or custom), multiple service pages, and SEO optimization. Ideal for growing businesses that need to publish content regularly.",
      },
      {
        type: "list",
        items: [
          "Freelancer: ₹20,000 – ₹60,000",
          "Small Agency: ₹60,000 – ₹1,50,000",
          "Premium Studio: ₹1,50,000 – ₹4,00,000",
          "Timeline: 3–6 weeks",
        ],
      },
      { type: "heading", text: "Type 3: E-commerce Website" },
      {
        type: "text",
        text: "An online store with product catalog, cart, payment gateway (Razorpay/Stripe), order management, and admin panel. Complexity scales with number of products, custom features, and inventory integrations.",
      },
      {
        type: "list",
        items: [
          "Basic Shopify setup: ₹15,000 – ₹40,000",
          "Custom WooCommerce: ₹50,000 – ₹1,50,000",
          "Custom full-stack: ₹2,00,000 – ₹8,00,000",
          "Timeline: 4–12 weeks",
        ],
      },
      { type: "heading", text: "Type 4: Web Application (SaaS / Platform)" },
      {
        type: "text",
        text: "A custom web application with user authentication, dashboards, business logic, API integrations, and admin tools. This is custom software, not a website — and should be priced accordingly.",
      },
      {
        type: "list",
        items: [
          "MVP (basic features): ₹2,00,000 – ₹8,00,000",
          "Full product: ₹8,00,000 – ₹25,00,000+",
          "Timeline: 3–9 months",
        ],
      },
      {
        type: "callout",
        text: "Red Flag: If a 'web application' quote is below ₹1,00,000, either the scope is misunderstood or corners will be cut. Both hurt you later.",
      },
      { type: "heading", text: "Hidden Costs to Budget For" },
      {
        type: "list",
        items: [
          "Domain name: ₹800–₹2,500/year",
          "Hosting: ₹3,000–₹30,000/year depending on traffic",
          "SSL certificate: Usually included with hosting",
          "Maintenance & updates: 15–20% of build cost annually",
          "SEO & content: Separate budget entirely",
        ],
      },
      {
        type: "heading",
        text: "Freelancer vs Agency vs Studio: The Real Trade-offs",
      },
      {
        type: "text",
        text: "Freelancers are cheapest but you carry the project management risk. Agencies have processes but add overhead cost. Boutique studios (like Qasida Tech Studio) offer agency-quality work with freelancer flexibility and pricing — the sweet spot for most startups and SMBs.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "A good website is a business asset, not an expense. Budget based on what it's worth to your business to have it done right — not on finding the lowest number. The cheapest website often costs more in the long run through redesigns, lost customers, and technical debt.",
      },
    ],
  },

  "why-website-not-getting-clients": {
    title: "Why Your Website Is Not Getting Clients",
    image: "/images/blog5.png",
    date: "March 22, 2026",
    category: "Marketing",
    readTime: "8 min read",
    author: {
      name: "Sana Malik",
      role: "UI/UX Designer",
      avatar: "/images/author2.jpg",
    },
    tags: ["Conversion", "CRO", "Website", "Marketing", "Clients"],
    excerpt:
      "You have a website but no leads. Here are the real reasons your site fails to convert visitors into customers — and how to fix each one.",
    content: [
      {
        type: "intro",
        text: "Having a website doesn't mean having a client-generating machine. Most small business websites are essentially digital brochures — they exist, but they don't work. If your site isn't bringing in leads, one or more of these problems is almost certainly the culprit.",
      },
      { type: "heading", text: "1. Your Value Proposition Is Unclear" },
      {
        type: "text",
        text: "Within 5 seconds of landing on your homepage, a visitor should be able to answer: What do you do? Who is it for? Why should I choose you over everyone else? If your headline is your company name or a vague tagline like 'Excellence in Service,' you've already lost them. Be specific. 'We build custom websites for Indian restaurants that fill tables online' beats 'Creative Digital Solutions' every single time.",
      },
      { type: "heading", text: "2. No Clear Call to Action" },
      {
        type: "text",
        text: "What do you want visitors to do? If your answer is 'contact us' but your contact form is buried three pages deep with seven required fields, that's not a call to action — it's an obstacle course. Put one primary CTA above the fold on every page. Make it specific: 'Get a Free Quote,' not 'Learn More.'",
      },
      { type: "heading", text: "3. You're Getting No Traffic at All" },
      {
        type: "text",
        text: "A beautiful website with no visitors converts zero clients regardless of how good it is. Install Google Analytics (free) and check your monthly visitor count. If it's under 100, your conversion problem is actually a traffic problem. No SEO, no social presence, no Google Business profile, no referrals — these are the real issues to solve first.",
      },
      { type: "heading", text: "4. Your Site Loads Too Slowly" },
      {
        type: "text",
        text: "53% of mobile users abandon a page that takes more than 3 seconds to load. Run your site through Google PageSpeed Insights right now. A score below 60 on mobile is costing you clients every single day. Common culprits: unoptimized images, cheap shared hosting, no caching, and too many third-party scripts.",
      },
      {
        type: "callout",
        text: "Test It: Open your website on a 4G mobile connection. If it feels slow to you, it's driving clients away.",
      },
      { type: "heading", text: "5. No Social Proof" },
      {
        type: "text",
        text: "People buy from people they trust. If your website has no testimonials, no case studies, no client logos, and no reviews, you're asking strangers to trust you with their money and time based on nothing. Even three genuine testimonials with photos and full names dramatically increases conversion rates.",
      },
      {
        type: "heading",
        text: "6. You're Targeting Everyone (and reaching no one)",
      },
      {
        type: "text",
        text: "The more specific your target audience, the higher your conversion rate. A web designer who says 'I work with any business' is less compelling than one who says 'I build websites for Ayurvedic clinics and wellness brands.' Specialization signals expertise. Expertise builds trust. Trust converts.",
      },
      { type: "heading", text: "7. Mobile Experience Is Broken" },
      {
        type: "text",
        text: "Over 70% of Indian internet users access the web on mobile. If your site doesn't work flawlessly on a smartphone — text too small, buttons too close together, forms hard to fill — you're invisible to most of your potential clients.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Most website conversion problems are fixable without rebuilding from scratch. Start with analytics to understand what's happening, fix technical issues like speed, then refine your messaging and CTAs. Small changes often produce dramatic results.",
      },
    ],
  },

  "mern-vs-nextjs": {
    title: "MERN vs Next.js – Which One Should You Choose?",
    image: "/images/blog6.png",
    date: "March 22, 2026",
    category: "Development",
    readTime: "9 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["MERN", "Next.js", "React", "Full Stack", "Architecture"],
    excerpt:
      "Confused between MERN stack and Next.js for your next project? Here's a real comparison — no hype, just trade-offs.",
    content: [
      {
        type: "intro",
        text: "The MERN vs Next.js debate comes up constantly in developer communities, and it's often framed wrong. They're not really competing technologies — Next.js is a React framework, and MERN is an architectural pattern. But the choice of whether to use a standalone Express backend or Next.js API routes as your backend is a real and important one.",
      },
      { type: "heading", text: "What Is the MERN Stack?" },
      {
        type: "text",
        text: "MERN (MongoDB, Express, React, Node.js) is a full-stack JavaScript pattern where you build a separate backend (Express + Node) and a separate frontend (React). They communicate via REST API or GraphQL. This separation of concerns is the traditional, well-understood way to build web applications.",
      },
      { type: "heading", text: "What Is Next.js?" },
      {
        type: "text",
        text: "Next.js is a React framework that includes routing, server-side rendering, API routes, and now (with App Router) React Server Components. It lets you write your frontend and a significant portion of your backend logic in one codebase. You'd still typically pair it with MongoDB and Mongoose for data storage.",
      },
      { type: "heading", text: "When to Choose Traditional MERN" },
      {
        type: "list",
        items: [
          "Your app needs a standalone REST API consumed by multiple clients (mobile app + web).",
          "You need WebSocket support (Socket.io) — harder to integrate with Next.js.",
          "Your team has separate backend and frontend developers.",
          "You're building microservices or need more granular infrastructure control.",
          "Your backend has complex business logic that warrants its own service.",
        ],
      },
      { type: "heading", text: "When to Choose Next.js" },
      {
        type: "list",
        items: [
          "You're building a content-heavy site that benefits from SSR or SSG for SEO.",
          "You want a faster development setup with less boilerplate.",
          "You're a solo developer or small team that wants everything in one repo.",
          "Your project is primarily CRUD with standard API patterns.",
          "SEO and performance (Core Web Vitals) are critical requirements.",
        ],
      },
      {
        type: "callout",
        text: "Real Talk: For most SaaS products and startups, Next.js + MongoDB is faster to build and easier to deploy than a full separate MERN architecture.",
      },
      { type: "heading", text: "Performance" },
      {
        type: "text",
        text: "Next.js wins decisively on initial page load performance thanks to SSR, SSG, and React Server Components. Traditional MERN with a client-side-only React app will always have a slower initial load because the browser fetches the JS bundle before rendering. This matters a lot for SEO and perceived performance.",
      },
      { type: "heading", text: "Deployment Complexity" },
      {
        type: "text",
        text: "Next.js deploys to Vercel with near-zero configuration. MERN requires deploying two separate services — your Express backend (to Render or Railway) and your React frontend (to Vercel or Netlify). Two services means two potential failure points, two sets of environment variables, and more DevOps overhead.",
      },
      { type: "heading", text: "Verdict" },
      {
        type: "text",
        text: "For content sites, marketing pages, and standard web apps: Next.js. For real-time apps, complex APIs shared across multiple clients, or teams with clear backend/frontend separation: traditional MERN. When in doubt, start with Next.js — it's easier to extract an Express service later than to add SSR to an existing SPA.",
      },
    ],
  },

  "portfolio-ideas-developers": {
    title: "Best Portfolio Website Ideas for Developers",
    image: "/images/blog7.png",
    date: "March 22, 2026",
    category: "Career",
    readTime: "7 min read",
    author: {
      name: "Sana Malik",
      role: "UI/UX Designer",
      avatar: "/images/author2.jpg",
    },
    tags: ["Portfolio", "Career", "Web Dev", "Design", "Job Hunt"],
    excerpt:
      "Your portfolio is your first impression. Here are creative, memorable portfolio ideas that will make you stand out in 2026's competitive job market.",
    content: [
      {
        type: "intro",
        text: "A developer portfolio is not just a list of projects — it's the most important piece of marketing material you'll ever create for your career. In 2026, with thousands of developers competing for the same positions, a generic portfolio with three todo apps won't cut it. Here's how to build one that actually stands out.",
      },
      { type: "heading", text: "1. The 'Case Study' Portfolio" },
      {
        type: "text",
        text: "Instead of just linking to projects, document your thinking. For each project: explain the problem you were solving, show your planning process (sketches, architecture decisions), highlight the hardest technical challenge and how you solved it, and share measurable outcomes. This format shows you think like an engineer, not just a coder.",
      },
      { type: "heading", text: "2. The Interactive Terminal" },
      {
        type: "text",
        text: "Build your portfolio as an interactive terminal experience. Visitors type commands ('help', 'projects', 'contact') and your portfolio responds. It's technically impressive, immediately memorable, and signals that you're comfortable with developer tooling. This works especially well for backend and systems developers.",
      },
      { type: "heading", text: "3. The 'Build in Public' Portfolio" },
      {
        type: "text",
        text: "Document a project from idea to launch publicly on your portfolio. Weekly updates, technical decisions explained, mistakes admitted. This demonstrates persistence, communication skills, and real-world project experience — all things hiring managers actually care about.",
      },
      { type: "heading", text: "4. The Problem-Solver Portfolio" },
      {
        type: "text",
        text: "Frame every project as a problem you solved for a real person or organization. 'I built a dashboard that helped a local clinic reduce no-show appointments by 40%.' Real outcomes. Real impact. Real proof that you can translate technical skill into business value.",
      },
      {
        type: "list",
        items: [
          "Include live demos — every project should be deployed and clickable.",
          "Show your code on GitHub but don't just link a repo — explain what makes the code good.",
          "Add a brief 'what I'd do differently' section for each project.",
          "Include one ambitious project even if it's incomplete — it shows vision.",
        ],
      },
      { type: "heading", text: "5. What NOT to Include" },
      {
        type: "list",
        items: [
          "Basic tutorial projects (weather app, todo list) unless they have a unique twist.",
          "Projects you can't explain confidently — interviewers will ask.",
          "Outdated technologies unless they're specifically relevant to your target role.",
          "A wall of skill logos (React, Node, CSS) without context — everyone has those.",
        ],
      },
      {
        type: "callout",
        text: "The best portfolio project is the one that sparks a conversation in an interview. Build something you're genuinely excited to talk about for 20 minutes.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Your portfolio is an ongoing investment, not a checkbox. Update it every three months. Replace weaker projects with stronger ones. The developers who land the best opportunities are usually the ones whose portfolios tell a clear story about what they build and why it matters.",
      },
    ],
  },

  "first-client-web-developer": {
    title: "How to Get Your First Client as a Web Developer",
    image: "/images/blog8.jpg",
    date: "March 22, 2026",
    category: "Business",
    readTime: "8 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Freelancing", "Client", "Business", "Sales", "Developer"],
    excerpt:
      "Landing your first client as a developer is the hardest step. Here's a practical, no-fluff guide to getting paid for your skills.",
    content: [
      {
        type: "intro",
        text: "The first client is the hardest. After that, you have a testimonial, a reference, and proof that someone valued your work enough to pay for it. This guide focuses entirely on getting to that first paid project — using approaches that actually work, not generic advice about 'building your brand.'",
      },
      { type: "heading", text: "Start With Your Existing Network" },
      {
        type: "text",
        text: "Before posting on Upwork or cold-emailing strangers, look at your existing network. Tell every person you know — family, friends, former classmates, professors — that you're doing web development professionally and ask if they know anyone who needs a website. One warm referral is worth 50 cold outreach messages.",
      },
      {
        type: "heading",
        text: "Solve a Specific Problem for a Specific Audience",
      },
      {
        type: "text",
        text: "Instead of 'I build websites,' try 'I build websites for local restaurants in Patna that want to accept online orders.' A specific niche makes you easier to refer, easier to find, and easier to trust. You can always expand later. You can't be memorable to everyone at once.",
      },
      {
        type: "heading",
        text: "Build a Proof Portfolio (Even Without Paid Clients)",
      },
      {
        type: "text",
        text: "Do one project for free or heavily discounted for a real business in exchange for a testimonial and permission to show the work. A local shop, a family business, an NGO, a friend's startup. Real work for real organizations is infinitely more convincing than personal projects.",
      },
      { type: "heading", text: "Cold Outreach That Actually Works" },
      {
        type: "text",
        text: "Most cold outreach fails because it's generic. Research a business specifically, find something genuinely wrong with their website (slow load, broken mobile experience, no contact form), and lead with that observation. 'I noticed your website takes 8 seconds to load on mobile — I can fix that' gets responses. 'I'm a web developer looking for projects' does not.",
      },
      {
        type: "callout",
        text: "Script: 'Hi [Name], I found [Business] while researching [industry] companies in [city]. Your site doesn't load well on mobile — I fixed a similar issue for [similar business] and it improved their inquiry rate. Would you be open to a 15-minute call?'",
      },
      { type: "heading", text: "Platforms That Work for Beginners" },
      {
        type: "list",
        items: [
          "LinkedIn — Connect with local business owners. Engage genuinely before pitching.",
          "Facebook Groups — Join local business groups and offer value before promoting.",
          "Upwork — Hard to break in, but worth it once you have reviews.",
          "Fiverr — Good for specific, productized services with clear deliverables.",
          "Local Networking — Attend business meetups. In-person trust builds faster than digital.",
        ],
      },
      { type: "heading", text: "Pricing Your First Project" },
      {
        type: "text",
        text: "Don't price too low out of desperation — it attracts difficult clients and sets bad precedents. Don't price too high before you have a track record. A simple business website in the ₹15,000–₹30,000 range is fair for your first paid project. Always get 50% upfront.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Your first client is a confidence milestone as much as a financial one. Focus on finding that first one, delivering excellent work, and asking for a referral when you're done. The second client is always easier than the first.",
      },
    ],
  },

  "ui-vs-ux-difference": {
    title: "UI vs UX – What's the Real Difference?",
    image: "/images/blog9.png",
    date: "March 22, 2026",
    category: "Design",
    readTime: "6 min read",
    author: {
      name: "Sana Malik",
      role: "UI/UX Designer",
      avatar: "/images/author2.jpg",
    },
    tags: ["UI", "UX", "Design", "Career", "Beginner"],
    excerpt:
      "UI and UX are constantly confused, even by people in the industry. Here's the clearest explanation of how they differ and how they work together.",
    content: [
      {
        type: "intro",
        text: "Few terms in the tech industry get misused as consistently as UI and UX. They're written together so often (UI/UX) that people assume they're the same thing — they're not. Understanding the distinction isn't just academic; it determines how you approach problems, what skills you develop, and what careers you can pursue.",
      },
      { type: "heading", text: "The Simple Distinction" },
      {
        type: "text",
        text: "UX (User Experience) is about how something works. UI (User Interface) is about how something looks. UX is a chef planning a recipe to be nutritious, delicious, and easy to cook. UI is the plating and presentation. You need both for a great meal, but they require different skills.",
      },
      { type: "heading", text: "What UX Designers Actually Do" },
      {
        type: "list",
        items: [
          "User research — interviews, surveys, usability tests",
          "Information architecture — how content is organized and navigated",
          "User flows — mapping the journey from entry to goal completion",
          "Wireframing — low-fidelity layouts that focus on function, not aesthetics",
          "Prototyping and testing — validating assumptions before visual design begins",
        ],
      },
      { type: "heading", text: "What UI Designers Actually Do" },
      {
        type: "list",
        items: [
          "Visual design — color, typography, iconography, spacing",
          "Design systems — creating reusable component libraries",
          "Interaction design — hover states, animations, transitions",
          "High-fidelity mockups — pixel-perfect designs ready for development",
          "Responsive design — ensuring interfaces work across screen sizes",
        ],
      },
      { type: "heading", text: "They Overlap More Than You Think" },
      {
        type: "text",
        text: "In practice, especially at smaller companies, one person often does both. And the best UI designers are informed by UX thinking, while the best UX designers have enough visual instinct to communicate their ideas clearly. Neither discipline operates in a vacuum.",
      },
      {
        type: "callout",
        text: "Classic Example: A beautiful button (great UI) that's placed where users don't expect it (bad UX) will be ignored. Placement and function come before visual treatment.",
      },
      { type: "heading", text: "Which Should You Learn First?" },
      {
        type: "text",
        text: "Learn UX fundamentals first. Understanding user psychology, research methods, and information architecture will make you a better designer regardless of which path you choose. Then layer UI skills on top. A designer who understands behavior will always make better visual decisions than one who doesn't.",
      },
      { type: "heading", text: "Career Paths" },
      {
        type: "text",
        text: "UX roles tend to lean more strategic — UX Researcher, UX Strategist, Product Designer. UI roles lean more execution-focused — Visual Designer, UI Engineer, Motion Designer. Product Designer typically means both. Most job titles conflate the two deliberately because hiring one person for both is cost-efficient.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "UI without UX is decoration. UX without UI is blueprints. Great products need both, done thoughtfully. Whether you specialize or generalize, understanding the distinction makes you better at both.",
      },
    ],
  },

  "web-design-mistakes": {
    title: "Top Mistakes to Avoid in Web Design",
    image: "/images/blog10.jpg",
    date: "March 22, 2026",
    category: "Design",
    readTime: "7 min read",
    author: {
      name: "Sana Malik",
      role: "UI/UX Designer",
      avatar: "/images/author2.jpg",
    },
    tags: ["Web Design", "Mistakes", "UX", "UI", "Best Practices"],
    excerpt:
      "These common web design mistakes silently kill conversions, damage credibility, and frustrate users — and most businesses don't even know they're making them.",
    content: [
      {
        type: "intro",
        text: "Great web design is as much about what you don't do as what you do. Many of the most damaging design decisions are invisible to the person making them — they feel fine in the design tool but create friction for real users. Here are the mistakes that hurt businesses most.",
      },
      { type: "heading", text: "1. No Visual Hierarchy" },
      {
        type: "text",
        text: "If everything looks equally important, nothing looks important. Users scan, they don't read. Your design needs to guide their eye: this is the headline, this is the key benefit, this is the action to take. Size, weight, contrast, and whitespace are the tools. Use them deliberately.",
      },
      { type: "heading", text: "2. Too Many Fonts" },
      {
        type: "text",
        text: "Using four different font families 'for variety' creates visual chaos, not personality. Limit yourself to two typefaces: one for headings, one for body. Variation within a family (bold, light, italic) gives you all the flexibility you need without the noise.",
      },
      { type: "heading", text: "3. Ignoring Mobile" },
      {
        type: "text",
        text: "Designing desktop-first and then 'making it responsive' is a recipe for a broken mobile experience. Design mobile-first. It forces prioritization — you can only show what actually matters. The desktop version then becomes an expansion, not a compression.",
      },
      { type: "heading", text: "4. Auto-Playing Video or Audio" },
      {
        type: "text",
        text: "Nothing makes a user close a tab faster than unexpected sound. Never autoplay audio. Video autoplaying muted is acceptable if it's purposeful — not just decorative background filler that slows your page and distracts from your message.",
      },
      { type: "heading", text: "5. Invisible or Weak CTAs" },
      {
        type: "text",
        text: "Your call-to-action button should stand out from every other element on the page. It should be the most visually prominent interactive element. If it blends in with your color scheme, users will miss it. If it says 'Submit' instead of 'Get My Free Quote,' it won't convert.",
      },
      {
        type: "callout",
        text: "Heatmap Fact: Eye-tracking studies show users rarely scroll below the fold without a clear visual cue to continue. Your most important CTA should always be visible without scrolling.",
      },
      { type: "heading", text: "6. Cluttered Navigation" },
      {
        type: "text",
        text: "A navigation menu with 9 items isn't informative — it's overwhelming. Limit primary navigation to 5–6 items maximum. Everything else belongs in a footer or secondary menu. More options create more decision paralysis and slower navigation.",
      },
      { type: "heading", text: "7. Slow Load Times" },
      {
        type: "text",
        text: "Slow websites lose clients before they've read a single word. The most common causes: uncompressed images (use WebP format), render-blocking JavaScript, and cheap hosting. Run Google PageSpeed Insights monthly — treat performance as a design metric, not just a technical one.",
      },
      { type: "heading", text: "8. Using Stock Photos Everyone Recognizes" },
      {
        type: "text",
        text: "The smiling diverse team stock photo. The handshake. The person at a laptop looking unnecessarily happy. Users have developed a perfect filtering system for these images — they don't see them anymore. Use real photos, custom illustrations, or high-quality, specific stock imagery that looks real.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "The best design review is watching a real user navigate your site for 10 minutes. You'll see every one of these mistakes live. No amount of internal review catches what a fresh pair of eyes reveals immediately.",
      },
    ],
  },

  "improve-website-speed": {
    title: "How to Improve Website Speed (Complete Guide)",
    image: "/images/blog11.jpg",
    date: "March 22, 2026",
    category: "Development",
    readTime: "11 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Performance", "Speed", "Core Web Vitals", "SEO", "Optimization"],
    excerpt:
      "A slow website is a leaking bucket — everything else you do is less effective. Here's a complete, technical guide to making your site fast.",
    content: [
      {
        type: "intro",
        text: "Website speed is not a nice-to-have — it's a revenue driver. Google uses Core Web Vitals as a ranking factor. Users abandon pages that take more than 3 seconds. A 1-second improvement in load time can increase conversions by 7%. This guide covers every layer of the stack.",
      },
      { type: "heading", text: "Step 1: Measure First" },
      {
        type: "text",
        text: "Never optimize blind. Run your site through Google PageSpeed Insights, GTmetrix, and WebPageTest before touching any code. Document your baseline scores. Each tool identifies different bottlenecks, and the difference between your lab score (PageSpeed) and your real-user data (CrUX) matters.",
      },
      { type: "heading", text: "Step 2: Optimize Images (Biggest Win)" },
      {
        type: "text",
        text: "Images are typically 60–80% of page weight. This is where most sites get the biggest speed improvement. Convert all images to WebP format — it's 25–35% smaller than JPEG at equivalent quality. Use proper sizing (never load a 2000px image to display at 400px). Implement lazy loading for below-fold images.",
      },
      {
        type: "code",
        language: "html",
        text: `<!-- Lazy load images below the fold -->
<img 
  src="hero.webp" 
  alt="Hero Image"
  width="800" 
  height="400"
  loading="lazy"
  decoding="async"
/>

<!-- Preload the LCP (Largest Contentful Paint) image -->
<link rel="preload" as="image" href="hero.webp" />`,
      },
      { type: "heading", text: "Step 3: Eliminate Render-Blocking Resources" },
      {
        type: "text",
        text: "CSS and JavaScript in the <head> block rendering. Move non-critical JS to the end of <body> or use defer/async attributes. Load non-critical CSS asynchronously. Inline critical CSS (above-fold styles) directly in the <head> to eliminate a round trip.",
      },
      {
        type: "code",
        language: "html",
        text: `<!-- Good: defer non-critical scripts -->
<script src="analytics.js" defer></script>
<script src="chat-widget.js" async></script>

<!-- Preconnect to third-party origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://cdn.example.com" />`,
      },
      { type: "heading", text: "Step 4: Enable Caching" },
      {
        type: "text",
        text: "Static assets (images, CSS, JS) should be cached aggressively. Set Cache-Control headers with long max-age for versioned assets. Use a CDN (Cloudflare free tier is excellent) to serve assets from nodes close to your users. This alone can cut load time by 50% for international visitors.",
      },
      { type: "heading", text: "Step 5: Minimize and Compress" },
      {
        type: "list",
        items: [
          "Minify HTML, CSS, and JavaScript in production (remove whitespace and comments).",
          "Enable Gzip or Brotli compression on your server — Brotli is 20% smaller.",
          "Tree-shake your JavaScript bundles to remove unused code.",
          "Audit and remove unused CSS — tools like PurgeCSS can cut stylesheet size by 90%.",
        ],
      },
      { type: "heading", text: "Step 6: Optimize Web Fonts" },
      {
        type: "text",
        text: "Web fonts are often a hidden performance killer. Use font-display: swap to prevent invisible text during font load. Subset your fonts to include only the characters you actually use. If you use Google Fonts, self-host them instead — it eliminates a DNS lookup and gives you cache control.",
      },
      { type: "heading", text: "Step 7: Database and Server Optimization" },
      {
        type: "text",
        text: "For dynamic sites: index your most-queried database fields, implement response caching (Redis), use connection pooling, and consider read replicas for high-traffic applications. Server response time (TTFB) should be under 200ms — anything slower points to backend issues, not frontend ones.",
      },
      {
        type: "callout",
        text: "Quick Win: Switch to Cloudflare as your DNS provider and enable their CDN. It takes 10 minutes and typically improves load times by 20–40% globally at zero cost.",
      },
      { type: "heading", text: "Core Web Vitals Targets" },
      {
        type: "list",
        items: [
          "LCP (Largest Contentful Paint): under 2.5 seconds",
          "FID/INP (Interaction to Next Paint): under 200ms",
          "CLS (Cumulative Layout Shift): under 0.1",
        ],
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Performance optimization is not a one-time task — it's ongoing maintenance. Monitor your Core Web Vitals in Google Search Console monthly. Every new library you add, every image you upload, every third-party script is a potential regression. Treat speed as a feature.",
      },
    ],
  },

  "seo-basics-2026": {
    title: "SEO Basics for Beginners (2026 Guide)",
    image: "/images/blog12.png",
    date: "March 22, 2026",
    category: "SEO",
    readTime: "10 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["SEO", "Google", "Content", "Keywords", "Marketing"],
    excerpt:
      "SEO in 2026 is less about tricks and more about genuinely helpful content. Here are the fundamentals that actually move rankings.",
    content: [
      {
        type: "intro",
        text: "Search Engine Optimization has changed dramatically. The old SEO was about gaming algorithms — keyword stuffing, link schemes, technical tricks. The new SEO is about genuinely helping people find what they're looking for. Google's algorithms are now sophisticated enough that trying to game them usually backfires. Here's what actually works in 2026.",
      },
      { type: "heading", text: "How Google Rankings Work (Simply)" },
      {
        type: "text",
        text: "Google's job is to show the most relevant, helpful, trustworthy result for every search query. It evaluates three things: Relevance (does your page match what the user searched for?), Authority (do other trustworthy sites link to you?), and Experience (does your page load fast, work on mobile, and satisfy the user?). Everything in SEO maps to one of these three pillars.",
      },
      { type: "heading", text: "Step 1: Keyword Research" },
      {
        type: "text",
        text: "Find the exact words your target customers type into Google. Use free tools: Google Search (look at autocomplete and 'People also ask'), Google Keyword Planner, and Ubersuggest. Focus on specific long-tail keywords ('affordable web designer in Patna') over generic ones ('web designer') — they have lower competition and higher intent.",
      },
      { type: "heading", text: "Step 2: On-Page Optimization" },
      {
        type: "list",
        items: [
          "Include your primary keyword in the page title (H1) naturally.",
          "Write a compelling meta description (160 characters) that makes people want to click.",
          "Use keywords in subheadings (H2, H3) and naturally throughout the body.",
          "Optimize image alt text — describe the image using relevant keywords.",
          "Keep URLs short, descriptive, and keyword-inclusive: /web-design-patna not /page?id=47",
        ],
      },
      { type: "heading", text: "Step 3: Create Genuinely Helpful Content" },
      {
        type: "text",
        text: "The single most important SEO factor in 2026 is content quality. Google's Helpful Content update explicitly penalizes content written for search engines rather than people. Write content that thoroughly answers real questions. Include specifics, examples, and actionable advice. Content that actually helps people naturally earns links and engagement.",
      },
      { type: "heading", text: "Step 4: Technical SEO Basics" },
      {
        type: "list",
        items: [
          "Ensure your site loads under 3 seconds on mobile.",
          "Use HTTPS (Google penalizes non-secure sites).",
          "Submit an XML sitemap to Google Search Console.",
          "Fix broken links and 404 errors regularly.",
          "Ensure all pages are crawlable — check robots.txt and canonical tags.",
        ],
      },
      { type: "heading", text: "Step 5: Building Backlinks" },
      {
        type: "text",
        text: "Backlinks (other sites linking to yours) are the strongest signal of authority. Earn them by: creating genuinely useful content others want to reference, guest posting on relevant industry blogs, listing your business in quality directories, and building relationships with complementary businesses who might link to you naturally.",
      },
      {
        type: "callout",
        text: "Patience Expectation: New websites typically take 3–6 months to see meaningful organic traffic even with good SEO. This is normal. SEO is a long game, but the compounding returns are worth it.",
      },
      { type: "heading", text: "Local SEO (Especially for Indian Businesses)" },
      {
        type: "text",
        text: "If you serve a local area, create and fully optimize your Google Business Profile. This is the single highest-ROI SEO action a local business can take. Add photos, respond to reviews, post updates, and ensure your NAP (Name, Address, Phone) is consistent everywhere online.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "SEO is a long-term investment that pays compounding returns. Unlike paid ads that stop the moment you stop paying, organic rankings keep driving traffic. Start with the basics, create genuinely helpful content, and be patient. The businesses that win at SEO are the ones that play consistently for years, not months.",
      },
    ],
  },

  "tools-for-web-developers": {
    title: "Best Tools Every Web Developer Should Use",
    image: "/images/blog13.jpg",
    date: "March 22, 2026",
    category: "Development",
    readTime: "8 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Tools", "Developer", "Productivity", "VS Code", "Git"],
    excerpt:
      "The right tools make you dramatically more productive. Here's the definitive toolkit for modern web developers in 2026.",
    content: [
      {
        type: "intro",
        text: "Great developers don't just write great code — they use great tools. The right toolset can 2x your productivity, catch bugs before they reach production, and eliminate entire categories of tedious manual work. Here's what actually belongs in a modern web developer's toolkit.",
      },
      { type: "heading", text: "Code Editor" },
      {
        type: "text",
        text: "VS Code remains the dominant choice with good reason — its extension ecosystem is unmatched. Essential extensions: ESLint (catch bugs in real time), Prettier (auto-format on save), GitLens (see git blame inline), and the official extensions for whatever framework you use. Configure your settings.json for a consistent setup across machines.",
      },
      { type: "heading", text: "Version Control" },
      {
        type: "list",
        items: [
          "Git — Non-negotiable. Learn it deeply, not just add/commit/push.",
          "GitHub — Standard for open source and most teams.",
          "Conventional Commits — Standardize your commit messages for readable history.",
          "GitHub Actions — Automate tests, linting, and deployment on every push.",
        ],
      },
      { type: "heading", text: "Frontend Development Tools" },
      {
        type: "list",
        items: [
          "Vite — The fastest frontend build tool. Replace Create React App immediately.",
          "Tailwind CSS — Utility-first CSS that eliminates naming fatigue.",
          "React DevTools — Browser extension for debugging React component trees.",
          "Storybook — Build and test UI components in isolation.",
        ],
      },
      { type: "heading", text: "API Development & Testing" },
      {
        type: "list",
        items: [
          "Postman or Bruno — Test your APIs visually before integrating with frontend.",
          "Insomnia — Lighter alternative to Postman.",
          "REST Client (VS Code extension) — Send HTTP requests directly from .http files.",
          "Swagger/OpenAPI — Document your APIs for teammates and clients.",
        ],
      },
      { type: "heading", text: "Databases & Backend" },
      {
        type: "list",
        items: [
          "MongoDB Compass — Visual GUI for exploring MongoDB collections.",
          "TablePlus — Beautiful GUI for SQL databases.",
          "Redis Insight — Monitor and manage Redis data.",
          "Prisma — Type-safe ORM that dramatically simplifies database work in TypeScript.",
        ],
      },
      { type: "heading", text: "Deployment & DevOps" },
      {
        type: "list",
        items: [
          "Vercel — Zero-config deployment for Next.js and frontend projects.",
          "Render — Easy backend deployment with free tier.",
          "Docker — Containerize your apps for consistent environments.",
          "Railway — Simplest way to deploy databases and full-stack apps.",
        ],
      },
      {
        type: "callout",
        text: "Underrated Tool: Warp (AI-powered terminal) and Raycast (Mac productivity launcher) are genuinely transformative for developer workflow. Try both.",
      },
      { type: "heading", text: "Design & Collaboration" },
      {
        type: "list",
        items: [
          "Figma — Industry standard for UI design. Learn to read Figma files as a developer.",
          "Excalidraw — Instant whiteboarding for architecture sketches.",
          "Linear — Modern project management built for software teams.",
          "Notion — Documentation and knowledge base for your projects.",
        ],
      },
      { type: "heading", text: "AI-Powered Development Tools" },
      {
        type: "text",
        text: "Claude, Cursor (AI code editor), and GitHub Copilot are now standard tools for many developers. Use them for boilerplate generation, debugging help, and code review — but maintain your own understanding. AI tools amplify your skills; they don't replace the need to actually understand what you're building.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Don't try to adopt every tool at once. Pick one from each category, learn it deeply, and add new tools when you hit a genuine friction point. A developer who knows five tools extremely well is more effective than one who half-knows twenty.",
      },
    ],
  },

  "freelancing-vs-job": {
    title: "Freelancing vs Job – What Should You Choose?",
    image: "/images/blog14.jpg",
    date: "March 22, 2026",
    category: "Career",
    readTime: "9 min read",
    author: {
      name: "Aryan Qasida",
      role: "Full Stack Developer",
      avatar: "/images/author1.jpg",
    },
    tags: ["Freelancing", "Career", "Job", "Developer", "Income"],
    excerpt:
      "Freelancing promises freedom; jobs promise stability. The reality of both is more nuanced. Here's an honest comparison to help you choose.",
    content: [
      {
        type: "intro",
        text: "The freelancing vs job debate is one of the most consequential career decisions a developer can make — and it's rarely discussed with honest nuance. Both paths have genuine advantages and genuine downsides that only become visible once you're living them. This is an honest comparison.",
      },
      { type: "heading", text: "The Honest Case for a Job" },
      {
        type: "text",
        text: "A job provides predictable income, structured learning, mentorship, and access to codebases and problems you'd never encounter freelancing. Junior developers almost always grow faster in a job — working alongside experienced engineers, getting code reviews, participating in architectural decisions. The learning curve is steeper and faster in a collaborative environment.",
      },
      {
        type: "list",
        items: [
          "Stable, predictable monthly salary.",
          "Benefits: health insurance, PF, paid leave.",
          "Structured learning from senior colleagues.",
          "Complex codebases and scale you won't access as a freelancer.",
          "No client acquisition or sales required.",
        ],
      },
      { type: "heading", text: "The Honest Case for Freelancing" },
      {
        type: "text",
        text: "Freelancing offers income ceiling that employment cannot match, location independence, and the freedom to choose your clients and projects. A skilled freelancer in India can earn 3–5x more than a comparable employed developer. But that premium has a cost: you're now running a business, not just writing code.",
      },
      {
        type: "list",
        items: [
          "Income potential is uncapped — you set your rates.",
          "Work from anywhere, for clients globally.",
          "Choose your tech stack, projects, and working hours.",
          "Build equity in your own reputation and client base.",
          "No corporate politics, mandatory meetings, or bureaucracy.",
        ],
      },
      { type: "heading", text: "The Hidden Costs of Freelancing" },
      {
        type: "text",
        text: "New freelancers consistently underestimate the non-coding work: client acquisition, contracts and proposals, invoicing and chasing payments, tax filing, project management, and the psychological weight of income uncertainty. A ₹80,000/month freelance income with 20% non-billable overhead and no benefits is less than it appears.",
      },
      {
        type: "callout",
        text: "The Uncomfortable Truth: Most developers who 'failed' at freelancing failed at sales and client management, not at the technical work. Coding is only part of the job.",
      },
      { type: "heading", text: "The Best Path: Both" },
      {
        type: "text",
        text: "The most common and often most effective path: get a job first to build skills, savings, and a professional network. Take on small freelance projects on the side to test the market and build a client base. When your freelance income consistently exceeds your salary, make the switch. This removes the financial desperation that forces early freelancers to take bad clients at low rates.",
      },
      { type: "heading", text: "Who Should Freelance Right Away?" },
      {
        type: "list",
        items: [
          "You have a strong portfolio and can demonstrate clear results.",
          "You have 6+ months of savings to survive income gaps.",
          "You have a specific niche and some warm leads already.",
          "You're comfortable with sales conversations and rejection.",
          "You have the discipline to work without external accountability.",
        ],
      },
      { type: "heading", text: "Who Should Take a Job First?" },
      {
        type: "list",
        items: [
          "You're less than 2 years into professional development.",
          "You don't have a strong network or client pipeline yet.",
          "You need structured learning from experienced engineers.",
          "You'd find income uncertainty genuinely stressful.",
          "You want to specialize in complex systems or enterprise scale.",
        ],
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Neither path is universally better. The right answer depends on your skills, savings, personality, and goals — and it can change multiple times over a career. Many of the best developers move between employment and freelancing deliberately, choosing each based on what serves their growth at that stage.",
      },
    ],
  },
};

// ─── ALL BLOG LIST (for related posts) ───────────────────────────────────────
const allBlogList = [
  {
    title: "How to Build a MERN Chat App",
    slug: "mern-chat-app",
    category: "Development",
    image: "/images/blog1.png",
    date: "March 15, 2026",
  },
  {
    title: "Top UI/UX Design Tips for Beginners",
    slug: "ui-ux-design-tips",
    category: "Design",
    image: "/images/blog2.jpg",
    date: "March 18, 2026",
  },
  {
    title: "Best Web Development Trends in 2026",
    slug: "web-development-trends-2026",
    category: "Trends",
    image: "/images/blog3.jpg",
    date: "March 20, 2026",
  },
  {
    title: "How Much Does Website Development Cost in India (2026 Guide)",
    slug: "website-cost-india-2026",
    category: "Business",
    image: "/images/blog4.jpg",
    date: "March 22, 2026",
  },
  {
    title: "Why Your Website Is Not Getting Clients",
    slug: "why-website-not-getting-clients",
    category: "Marketing",
    image: "/images/blog5.png",
    date: "March 22, 2026",
  },
  {
    title: "MERN vs Next.js – Which One Should You Choose?",
    slug: "mern-vs-nextjs",
    category: "Development",
    image: "/images/blog6.png",
    date: "March 22, 2026",
  },
  {
    title: "Best Portfolio Website Ideas for Developers",
    slug: "portfolio-ideas-developers",
    category: "Career",
    image: "/images/blog7.png",
    date: "March 22, 2026",
  },
  {
    title: "How to Get Your First Client as a Web Developer",
    slug: "first-client-web-developer",
    category: "Business",
    image: "/images/blog8.jpg",
    date: "March 22, 2026",
  },
  {
    title: "UI vs UX – What's the Real Difference?",
    slug: "ui-vs-ux-difference",
    category: "Design",
    image: "/images/blog9.png",
    date: "March 22, 2026",
  },
  {
    title: "Top Mistakes to Avoid in Web Design",
    slug: "web-design-mistakes",
    category: "Design",
    image: "/images/blog10.jpg",
    date: "March 22, 2026",
  },
  {
    title: "How to Improve Website Speed (Complete Guide)",
    slug: "improve-website-speed",
    category: "Development",
    image: "/images/blog11.jpg",
    date: "March 22, 2026",
  },
  {
    title: "SEO Basics for Beginners (2026 Guide)",
    slug: "seo-basics-2026",
    category: "SEO",
    image: "/images/blog12.png",
    date: "March 22, 2026",
  },
  {
    title: "Best Tools Every Web Developer Should Use",
    slug: "tools-for-web-developers",
    category: "Development",
    image: "/images/blog13.jpg",
    date: "March 22, 2026",
  },
  {
    title: "Freelancing vs Job – What Should You Choose?",
    slug: "freelancing-vs-job",
    category: "Career",
    image: "/images/blog14.jpg",
    date: "March 22, 2026",
  },
];

// ─── CATEGORY COLORS ─────────────────────────────────────────────────────────
const categoryColors = {
  Development: { bg: "bg-blue-100", text: "text-blue-700" },
  Design: { bg: "bg-pink-100", text: "text-pink-700" },
  Trends: { bg: "bg-purple-100", text: "text-purple-700" },
  Business: { bg: "bg-amber-100", text: "text-amber-700" },
  Marketing: { bg: "bg-green-100", text: "text-green-700" },
  Career: { bg: "bg-indigo-100", text: "text-indigo-700" },
  SEO: { bg: "bg-orange-100", text: "text-orange-700" },
};

// ─── SHARE BUTTON ─────────────────────────────────────────────────────────────
function ShareButtons({ title, slug }) {
  const url = `https://qasidatechstudio.com/blog/${slug}`;
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
        Tweet
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077B5] text-white text-sm font-medium hover:bg-[#006099] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        {copied ? (
          <>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-600">Copied!</span>
          </>
        ) : (
          <>
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
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}

// ─── TABLE OF CONTENTS ────────────────────────────────────────────────────────
function TableOfContents({ content }) {
  const headings = content.filter((b) => b.type === "heading");
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("[data-heading]");
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 0) {
          setActive(sec.dataset.heading);
        }
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h10"
            />
          </svg>
          Table of Contents
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="border-t border-gray-200 p-4">
          <ol className="space-y-2">
            {headings.map((h, i) => {
              const id = h.text.replace(/\s+/g, "-").toLowerCase();
              return (
                <li key={i}>
                  <a
                    href={`#${id}`}
                    className={`flex items-start gap-2 text-sm py-0.5 transition-colors ${active === id ? "text-[#4CAF50] font-semibold" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    <span className="text-gray-400 font-mono text-xs mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

// ─── CONTENT RENDERER ─────────────────────────────────────────────────────────
function ContentBlock({ block }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="text-lg text-gray-700 leading-8 font-medium border-l-4 border-[#4CAF50] pl-5 py-1 bg-green-50 rounded-r-lg">
          {block.text}
        </p>
      );
    case "heading": {
      const id = block.text.replace(/\s+/g, "-").toLowerCase();
      return (
        <h2
          id={id}
          data-heading={id}
          className="text-2xl md:text-[1.6rem] font-bold text-gray-900 mt-10 mb-3 scroll-mt-24 flex items-center gap-3 group"
        >
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#4CAF50] transition-opacity text-base"
          >
            #
          </a>
          {block.text}
        </h2>
      );
    }
    case "text":
      return (
        <p className="text-gray-700 leading-8 text-[1.05rem]">{block.text}</p>
      );
    case "list":
      return (
        <ul className="space-y-2 my-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-700 text-[1.02rem] leading-7"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4CAF50] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-6 flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <span className="text-2xl flex-shrink-0 mt-0.5">💡</span>
          <p className="text-amber-900 leading-7 text-[1.02rem]">
            {block.text}
          </p>
        </div>
      );
    case "code":
      return (
        <div className="my-4 rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
            <span className="text-xs font-mono text-gray-400 uppercase">
              {block.language}
            </span>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-5 text-sm leading-7 overflow-x-auto font-mono">
            <code>{block.text}</code>
          </pre>
        </div>
      );
    default:
      return null;
  }
}

// ─── PROGRESS BAR ────────────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100">
      <div
        className="h-full bg-[#4CAF50] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData[slug];
  const contentRef = useRef(null);
  const emailRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const email = emailRef.current?.value?.trim();
    console.log(email);
    if (!email) return;

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://qasida-tech-studio-backend.vercel.app/api/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "blog-details" }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setMessage(
          "✅ Successfully subscribed! Check your email for confirmation.",
        );
        emailRef.current.value = "";
      } else {
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage(
        "❌ Network error. Please check your connection and try again.",
      );
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  // Related blogs: same category, exclude current
  const related = allBlogList
    .filter((b) => b.slug !== slug && b.category === blog?.category)
    .slice(0, 3);

  const morePosts = allBlogList
    .filter((b) => b.slug !== slug && !related.find((r) => r.slug === b.slug))
    .slice(0, related.length < 3 ? 3 - related.length : 0)
    .concat(related.length < 3 ? [] : []);

  const relatedToShow =
    related.length >= 3
      ? related
      : [
          ...related,
          ...allBlogList
            .filter(
              (b) => b.slug !== slug && !related.find((r) => r.slug === b.slug),
            )
            .slice(0, 3 - related.length),
        ];

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F6F8ED] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Blog Not Found</h1>
        <Link to="/blog" className="text-[#4CAF50] hover:underline font-medium">
          ← Back to all blogs
        </Link>
      </div>
    );
  }

  const catStyle = categoryColors[blog.category] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Qasida Tech Studio</title>
        <meta name="description" content={blog.excerpt} />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/blog/${slug}`}
        />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <ReadingProgress />

      <div className="min-h-screen bg-[#F6F8ED]">
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&auto=format";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
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
              All Articles
            </Link>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${catStyle.bg} ${catStyle.text}`}
            >
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-3xl">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {blog.author.name.charAt(0)}
                </div>
                <span className="font-medium text-white/90">
                  {blog.author.name}
                </span>
                <span className="text-white/40">·</span>
                <span>{blog.author.role}</span>
              </div>
              <span className="text-white/40 hidden sm:block">|</span>
              <span>{blog.date}</span>
              <span className="text-white/40">·</span>
              <span className="flex items-center gap-1.5">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
          <article
            ref={contentRef}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-5">
              {blog.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-gray-100" />

            {/* Author Card */}
            <div className="flex gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#4CAF50] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {blog.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                  Written by
                </p>
                <p className="font-bold text-gray-900 text-lg leading-tight">
                  {blog.author.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {blog.author.role} at Qasida Tech Studio
                </p>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Building digital products that work. Writing about the lessons
                  learned along the way.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-100" />

            {/* Share */}
            <ShareButtons title={blog.title} slug={slug} />
          </article>

          {/* ── SIDEBAR ───────────────────────────────────────────────── */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* TOC */}
            <TableOfContents content={blog.content} />

            {/* Article Info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Article Info
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Published {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
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
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${catStyle.bg} ${catStyle.text}`}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white">
              <p className="text-xl font-bold mb-1">Stay Updated</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2.5 rounded-lg bg-white/10 text-white placeholder-gray-500 text-sm border border-white/10 focus:outline-none focus:border-[#4CAF50]"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 bg-[#4CAF50] hover:bg-[#43a047] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe Free"
                  )}
                </button>
              </form>
              {message && (
                <p
                  className={`text-xs mt-3 p-2 rounded ${message.includes("success") ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"} border`}
                >
                  {message}
                </p>
              )}
            </div>
          </aside>
        </div>

        {/* ── RELATED POSTS ─────────────────────────────────────────── */}
        {relatedToShow.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Articles
              </h2>
              <Link
                to="/blog"
                className="text-sm text-[#4CAF50] font-medium hover:underline"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedToShow.map((post) => {
                const ps = categoryColors[post.category] || {
                  bg: "bg-gray-100",
                  text: "text-gray-600",
                };
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ps.bg} ${ps.text}`}
                      >
                        {post.category}
                      </span>
                      <h3 className="mt-2 font-bold text-gray-900 text-sm leading-snug group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2">{post.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogDetails;
