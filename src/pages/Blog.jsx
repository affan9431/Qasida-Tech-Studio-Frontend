import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogData = [
  {
    title: "How to Build a MERN Chat App",
    slug: "mern-chat-app",
    description:
      "Step-by-step guide to build a real-time chat app using MERN stack and Socket.io.",
    image: "/images/blog1.jpg",
    date: "March 2026",
    category: "Development",
  },
  {
    title: "Top UI/UX Design Tips for Beginners",
    slug: "ui-ux-design-tips",
    description:
      "Learn the best UI/UX practices to improve your design skills.",
    image: "/images/blog2.jpg",
    date: "March 2026",
    category: "Design",
  },
  {
    title: "Best Web Development Trends in 2026",
    slug: "web-development-trends-2026",
    description:
      "Explore the latest technologies shaping modern web development.",
    image: "/images/blog3.jpg",
    date: "March 2026",
    category: "Trends",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-[#F6F8ED] pt-28 p-8 md:p-16">
      {" "}
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>

                <h2 className="text-lg font-semibold mb-2 group-hover:text-black transition">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm">{blog.description}</p>

                <div className="mt-4 text-sm font-medium text-black">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
