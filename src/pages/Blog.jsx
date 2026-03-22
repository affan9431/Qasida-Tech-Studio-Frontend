import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogData = [
  {
    title: "How to Build a MERN Chat App",
    slug: "mern-chat-app",
    description:
      "Step-by-step guide to build a real-time chat app using MERN stack and Socket.io.",
  },
  {
    title: "Top UI/UX Design Tips for Beginners",
    slug: "ui-ux-design-tips",
    description:
      "Learn the best UI/UX practices to improve your design skills.",
  },
  {
    title: "Best Web Development Trends in 2026",
    slug: "web-development-trends-2026",
    description:
      "Explore the latest technologies and trends shaping modern web development.",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-[#F6F8ED] p-8 md:p-16">
      <Helmet>
        <title>
          Blog | Web Development & UI/UX Insights | Qasida Tech Studio
        </title>
        <meta
          name="description"
          content="Explore blogs on web development, UI/UX design, MERN stack, and latest tech trends."
        />
        <link rel="canonical" href="https://qasidatechstudio.com/blog" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-10">Our Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <Link key={index} to={`/blog/${blog.slug}`}>
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
