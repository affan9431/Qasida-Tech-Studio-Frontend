import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    image: "/images/project-change.png",
    title: "Starbucks Landing Page Redesign",
    description:
      "A modern, intuitive redesign enhancing clarity, product discovery, and user experience while staying true to the iconic brand identity.",
  },
  {
    id: 2,
    image: "/images/project-1.jpg",
    title: "Fruit Fusion Beverage Poster",
    description:
      "A vibrant visual crafted to highlight freshness, energy, and bold flavor tones.",
  },
  {
    id: 3,
    image: "/images/project-2.jpg",
    title: "Premium Haircare Product Artwork",
    description:
      "A sleek, modern product ad with a clean beauty aesthetic and soft lighting.",
  },
  {
    id: 4,
    image: "/images/project-3.png",
    title: "TripWise – Smart Travel Planning Made Simple",
    description:
      "A smart travel planner app that helps users organize trips, discover destinations, and manage itineraries effortlessly.",
  },
];

function HomeProjectSection() {
  return (
    <section className="bg-[#F6F8ED] py-28">
      {/* Heading */}
      <div className="px-8 md:px-16 mb-12">
        <h1 className="text-2xl md:text-4xl font-bold">
          Designs That Speak Before We Do
        </h1>
        <p className="text-[#737272] mt-2 md:w-[60%]">
          A selection of handcrafted concepts that reflect our design language,
          attention to detail, and love for timeless digital craftsmanship.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 md:px-16">
        {projectData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <div className="aspect-5/4 w-full overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="p-6">
              <h2 className="text-lg font-bold group-hover:text-black transition">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{item.description}</p>

              {/* Button */}
              {item.title === "Starbucks Landing Page Redesign" ? (
                <Link to={`/projects/${item.id}`}>
                  <button className=" py-3 text-[#076D5D] font-semibold rounded-lg cursor-pointer transition-all duration-300 ">
                    View Details &rarr;
                  </button>
                </Link>
              ) : (
                <Link to={`https://tripwise-planner.netlify.app/app/home`}>
                  <button className=" py-3 text-[#076D5D] font-semibold rounded-lg cursor-pointer transition-all duration-300 ">
                    View Site &rarr;
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeProjectSection;
