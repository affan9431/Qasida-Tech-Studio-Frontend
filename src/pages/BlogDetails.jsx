import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const blogData = {
  "mern-chat-app": {
    title: "How to Build a MERN Chat App",
    content:
      "In this guide, we will build a real-time chat app using MongoDB, Express, React, and Node.js with Socket.io...",
  },
  "ui-ux-design-tips": {
    title: "Top UI/UX Design Tips for Beginners",
    content:
      "UI/UX design is all about creating user-friendly interfaces. Here are the top tips...",
  },
  "web-development-trends-2026": {
    title: "Best Web Development Trends in 2026",
    content:
      "Web development is evolving fast. Let’s explore the latest trends like AI integration, Web3, and more...",
  },
};

function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return <h1 className="text-center mt-20">Blog Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#F6F8ED] p-8 md:p-16">
      <Helmet>
        <title>{blog.title} | Qasida Tech Studio</title>
        <meta name="description" content={blog.content.slice(0, 120)} />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/blog/${slug}`}
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <p className="text-gray-700 leading-7">{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
