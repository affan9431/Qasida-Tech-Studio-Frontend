import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const blogData = {
  "mern-chat-app": {
    title: "How to Build a MERN Chat App",
    image: "/images/blog1.jpg",
    content: [
      {
        heading: "Introduction",
        text: "Building a real-time chat app is one of the best projects to learn full-stack development...",
      },
      {
        heading: "Tech Stack",
        text: "We will use MongoDB, Express, React, Node.js and Socket.io...",
      },
      {
        heading: "Steps to Build",
        text: "1. Setup backend\n2. Setup frontend\n3. Integrate socket\n4. Deploy",
      },
    ],
  },
};

function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return <h1 className="text-center mt-20">Blog Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#F6F8ED] pt-28 p-8 md:p-16">
      <Helmet>
        <title>{blog.title} | Qasida Tech Studio</title>
        <meta name="description" content={blog.title} />
      </Helmet>

      {/* Hero Image */}
      <div className="mb-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>

      {/* Content Sections */}
      <div className="space-y-8 max-w-3xl">
        {blog.content.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {section.heading}
            </h2>
            <p className="text-gray-700 leading-7 whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
