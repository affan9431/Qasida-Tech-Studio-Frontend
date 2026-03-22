import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const servicesData = {
  "logo-design": {
    title: "Logo Design",
    description:
      "Custom logo design services to build a strong and memorable brand identity.",
  },
  "graphic-design": {
    title: "Graphic Design",
    description:
      "Creative graphic design services for social media, ads, and marketing materials.",
  },
  branding: {
    title: "Branding",
    description:
      "Complete branding solutions including logo, colors, typography, and identity.",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Modern UI/UX design services to create intuitive and engaging digital experiences.",
  },
  "web-development": {
    title: "Web Development",
    description:
      "Professional web development services for responsive and high-performance websites.",
  },
  "app-development": {
    title: "App Development",
    description:
      "Custom mobile and web app development tailored to your business needs.",
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <h1 className="text-center mt-20">Service Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#F6F8ED] p-8 md:p-16">
      <Helmet>
        <title>{service.title} Services in India | Qasida Tech Studio</title>

        <meta name="description" content={service.description} />

        <link
          rel="canonical"
          href={`https://qasidatechstudio.com/services/${serviceId}`}
        />

        <meta
          property="og:title"
          content={`${service.title} | Qasida Tech Studio`}
        />
        <meta property="og:description" content={service.description} />
        <meta
          property="og:url"
          content={`https://qasidatechstudio.com/services/${serviceId}`}
        />
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>

      <p className="text-lg text-gray-700 max-w-2xl">{service.description}</p>
    </div>
  );
}

export default ServiceDetails;
