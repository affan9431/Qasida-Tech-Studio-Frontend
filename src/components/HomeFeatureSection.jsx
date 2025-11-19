import React from "react";

const featureData = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "No unnecessary delays. We respect your time.",
  },
  {
    id: 2,
    title: "Clean & Modern Design",
    description: "Our designs follow today’s trends and tomorrow’s vision.",
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description: "Premium quality without premium rates.",
  },
  {
    id: 4,
    title: "Professional Approach",
    description: "Clear communication, structured workflow, solid results.",
  },
];

function HomeFeatureSection() {
  return (
    <section>
      <div className="p-16">
        <h1 className="text-[1.5rem] font-bold md:text-4xl">Why Choose Us?</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-14 m-10 pl-2 ml-12">
        {featureData.map((item, index) => (
          <div
            key={item.id}
            className={`w-full sm:w-[48%] lg:w-[22%] ${
              index === 0 || index === 2 ? "bg-[#F5F8ED]" : "bg-[#E4F9A0]"
            } p-5 h-44`}
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="mt-5 text-[#737272]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeFeatureSection;
