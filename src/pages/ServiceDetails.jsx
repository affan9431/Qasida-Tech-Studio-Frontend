import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const servicesData = {
  "logo-design": {
    title: "Logo Design",
    description:
      "Custom logo design services to build a strong and memorable brand identity.",
    details: [
      {
        heading: "Why Logo Matters",
        text: `Your logo is the face of your brand. It creates the first impression and builds trust.`,
      },
      {
        heading: "What We Offer",
        text: `- Unique logo concepts  
- Minimal design  
- Scalable files  
- Brand-focused approach`,
      },
      {
        heading: "Our Process",
        text: `1. Research  
2. Concept creation  
3. Feedback  
4. Final delivery`,
      },
    ],
  },

  "graphic-design": {
    title: "Graphic Design",
    description:
      "Creative graphic design services for social media, ads, and marketing materials.",
    details: [
      {
        heading: "What We Design",
        text: `Posters, banners, social media creatives, ads, and marketing visuals.`,
      },
      {
        heading: "Design Approach",
        text: `We focus on clarity, creativity, and brand consistency.`,
      },
      {
        heading: "Why Choose Us",
        text: `We create designs that grab attention and communicate effectively.`,
      },
    ],
  },

  branding: {
    title: "Branding",
    description:
      "Complete branding solutions including colors, typography, and identity.",
    details: [
      {
        heading: "Brand Identity",
        text: `We build a consistent and memorable brand identity.`,
      },
      {
        heading: "What Included",
        text: `- Logo  
- Color palette  
- Typography  
- Brand guidelines`,
      },
      {
        heading: "Why It Matters",
        text: `Strong branding builds trust and recognition.`,
      },
    ],
  },

  "ui-ux": {
    title: "UI/UX Design",
    description:
      "Modern UI/UX design services to create intuitive and engaging experiences.",
    details: [
      {
        heading: "User Experience First",
        text: `We design with users in mind to ensure smooth interaction.`,
      },
      {
        heading: "What We Deliver",
        text: `- Wireframes  
- Prototypes  
- High-fidelity UI`,
      },
      {
        heading: "Goal",
        text: `Better usability = better conversion.`,
      },
    ],
  },

  "web-development": {
    title: "Web Development",
    description:
      "Professional web development services for responsive and high-performance websites.",
    details: [
      {
        heading: "Modern Development",
        text: `Fast, scalable, SEO-friendly websites.`,
      },
      {
        heading: "Tech Stack",
        text: `- React  
- Node.js  
- MongoDB`,
      },
      {
        heading: "Features",
        text: `- Responsive  
- High performance  
- Clean UI`,
      },
    ],
  },

  "app-development": {
    title: "App Development",
    description:
      "Custom mobile and web app development tailored to your business needs.",
    details: [
      {
        heading: "What We Build",
        text: `Mobile & web apps with smooth performance.`,
      },
      {
        heading: "Tech Stack",
        text: `- React Native  
- Flutter  
- APIs`,
      },
      {
        heading: "Goal",
        text: `Scalable apps that users love.`,
      },
    ],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <h1 className="text-center mt-20">Service Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#F6F8ED] py-20 md:py-28 px-10 pb-16">
      <Helmet>
        <title>{service.title} Services in India | Qasida Tech Studio</title>
        <meta name="description" content={service.description} />
        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/services/${serviceId}`}
        />
      </Helmet>

      {/* Title Section */}
      <div className="max-w-4xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-700">{service.description}</p>
      </div>

      {/* Details */}
      <div className="max-w-3xl space-y-10">
        {service.details.map((section, index) => (
          <div key={index} className="border-l-4 border-black pl-5">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {section.heading}
            </h2>
            <p className="text-gray-700 leading-7 whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 max-w-3xl bg-black text-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-3">
          Let’s Build Something Great 🚀
        </h2>
        <p className="mb-6 text-gray-300">
          Have a project in mind? Let’s turn your idea into a real product.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetails;
