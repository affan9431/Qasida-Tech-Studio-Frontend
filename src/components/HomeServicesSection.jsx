import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "Custom logos that reflect your brand’s personality and make a lasting impression.",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Eye-catching designs for posters, social media, ads, and marketing materials that engage your audience.",
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Complete brand identity solutions including colors, typography, and visual style for a cohesive presence.",
  },
  {
    id: 4,
    title: "UI UX",
    description:
      "Intuitive and modern user interfaces for websites and apps that enhance user experience.",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Responsive and high-performing websites built to showcase your brand and convert visitors into clients.",
  },
  {
    id: 6,
    title: "App Development",
    description:
      "Custom mobile and web applications tailored to your business needs with seamless performance.",
  },
];

function HomeServicesSection() {
  return (
    <section className="bg-[#F6F8ED]">
      <div className="p-8 md:p-16 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-[#737272]">
          Helping your brand shine with design and digital solutions.
        </p>
      </div>

      {/* 1st row */}
      <div className="flex flex-wrap gap-10 pl-4 md:pl-[190px] justify-center">
        {servicesData.slice(0, 2).map((item, index) => (
          <Link
            key={item.id}
            to={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className={`w-[300px] sm:w-[340px] h-[247px] bg-[#E4F9A0] rounded-tl-[140px] rounded-br-[140px] p-4 mb-10 cursor-pointer hover:scale-105 transition ${
                index === 1 ? "relative bottom-[50px]" : ""
              }`}
            >
              <h1 className="pl-[50px] pt-5 text-[23px] font-bold">
                {item.title}
              </h1>
              <p className="pl-[50px] pt-[15px] text-left">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 2nd row */}
      <div className="flex flex-wrap gap-10 mt-10 pl-4 md:pl-[190px] justify-center">
        {servicesData.slice(2, 5).map((item, index) => (
          <Link
            key={item.id}
            to={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className={`w-[300px] sm:w-[340px] h-[247px] bg-[#E4F9A0] rounded-tl-[140px] rounded-br-[140px] p-4 mb-10 cursor-pointer hover:scale-105 transition ${
                index === 1 ? "relative bottom-[50px] md:left-[-70px]" : ""
              } ${index === 2 ? "relative bottom-[100px] md:left-[-70px]" : ""} ${
                index === 0 ? "relative md:left-[-60px]" : ""
              }`}
            >
              <h1 className="pl-[50px] pt-5 text-[23px] font-bold">
                {item.title}
              </h1>
              <p className="pl-[50px] pt-[15px] text-left">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 3rd row */}
      <div className="flex flex-wrap gap-10 mt-10 pl-4 md:pl-[190px] justify-center">
        {servicesData.slice(5, 6).map((item, index) => (
          <Link
            key={item.id}
            to={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className={`w-[300px] sm:w-[340px] h-[247px] bg-[#E4F9A0] rounded-tl-[140px] rounded-br-[140px] p-4 cursor-pointer hover:scale-105 transition ${
                index === 0 ? "relative bottom-[50px]" : ""
              }`}
            >
              <h1 className="pl-[50px] pt-5 text-[23px] font-bold">
                {item.title}
              </h1>
              <p className="pl-[50px] pt-[15px] text-left">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeServicesSection;
