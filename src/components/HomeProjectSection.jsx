const projectData = [
  {
    id: 1,
    image: "/images/project-1.jpg",
    title: "Fruit Fusion Beverage Poster",
    description:
      "A vibrant promotional visual designed to highlight freshness, energy, and bold flavor tones.",
    toLink: "",
  },
  {
    id: 2,
    image: "/images/project-2.jpg",
    title: "Premium Haircare Product Artwork",
    description:
      "A sleek, modern product ad focused on purity, hydration, and a clean beauty aesthetic.",
    toLink: "",
  },
  {
    id: 3,
    image: "/images/project-3.jpg",
    title: "Minimalist Logo Concept",
    description:
      "A simple yet distinctive identity mark crafted with balance, clarity, and timeless design principles.",
    toLink: "",
  },
];

function HomeProjectSection() {
  return (
    <section className="bg-[#F6F8ED] min-h-screen pt-32">
      <div className="p-16 flex flex-col gap-4">
        <h1 className="text-xl font-bold md:text-4xl">Designs That Speak Before We Do</h1>
        <p className="text-[#737272]">
          A selection of handcrafted concepts that reflect our design language,
          attention to detail, and love for timeless digital craftsmanship.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 justify-items-center">
        {projectData.map((item) => {
          return (
            <div className="bg-[#eafab3] transition-all w-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>

                {/* <button className="mt-4 text-black font-medium hover:underline">
                  View Details →
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeProjectSection;
