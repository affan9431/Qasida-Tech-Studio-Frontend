import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const blogData = {
  "mern-chat-app": {
    title: "How to Build a MERN Chat App",
    image: "/images/blog1.png",
    content: [
      {
        heading: "Introduction",
        text: `Building a real-time chat application is one of the best ways to understand full-stack development. 
You will learn how frontend and backend communicate in real time using sockets.`,
      },
      {
        heading: "Tech Stack",
        text: `We will use:
- MongoDB (Database)
- Express (Backend Framework)
- React (Frontend)
- Node.js (Runtime)
- Socket.io (Real-time communication)

This combination is known as the MERN stack.`,
      },
      {
        heading: "Step-by-Step Process",
        text: `1. Setup backend server using Express  
2. Connect MongoDB database  
3. Create REST APIs for authentication  
4. Setup React frontend  
5. Integrate Socket.io for real-time messaging  
6. Deploy using Vercel / Render`,
      },
      {
        heading: "Conclusion",
        text: `By completing this project, you will understand real-time systems, authentication, and scalable architecture.`,
      },
    ],
  },

  "ui-ux-design-tips": {
    title: "Top UI/UX Design Tips for Beginners",
    image: "/images/blog2.jpg",
    content: [
      {
        heading: "Introduction",
        text: `UI/UX design is not just about making things look good. It's about solving user problems and creating smooth experiences.`,
      },
      {
        heading: "Keep It Simple",
        text: `Avoid clutter. Minimal design improves usability and makes interfaces easier to understand.`,
      },
      {
        heading: "Consistency Matters",
        text: `Use consistent colors, typography, and spacing across your design system.`,
      },
      {
        heading: "Focus on User Flow",
        text: `Think about how users navigate your app. Reduce friction and make actions obvious.`,
      },
      {
        heading: "Conclusion",
        text: `Great design is invisible. If users don’t struggle, you’ve done your job right.`,
      },
    ],
  },

  "web-development-trends-2026": {
    title: "Best Web Development Trends in 2026",
    image: "/images/blog3.jpg",
    content: [
      {
        heading: "Introduction",
        text: `Web development is evolving rapidly with new tools and technologies emerging every year.`,
      },
      {
        heading: "AI Integration",
        text: `AI is becoming part of web apps—from chatbots to AI-generated UI and automation.`,
      },
      {
        heading: "Serverless Architecture",
        text: `Developers are moving toward serverless platforms like Vercel and AWS Lambda.`,
      },
      {
        heading: "Web3 & Decentralization",
        text: `Blockchain-based apps and decentralized systems are gaining traction.`,
      },
      {
        heading: "Conclusion",
        text: `Staying updated with trends helps developers remain competitive in the market.`,
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
    <div className="min-h-screen bg-[#F6F8ED] py-20 md:py-28 px-10">
      <Helmet>
        <title>{blog.title} | Qasida Tech Studio</title>
        <meta name="description" content={blog.content[0].text.slice(0, 150)} />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/blog/${slug}`}
        />
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

      {/* Content */}
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
